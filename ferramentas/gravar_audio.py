#!/usr/bin/env python3
"""Trilha Livre · grava as falas dos cursos de idiomas com o Kokoro, uma voz aberta (licença Apache 2.0).

Grava só o que falta: a lista vem de `node ferramentas/audio.js --json`, e cada arquivo tem o nome tirado
do próprio texto. Então rodar de novo depois de escrever lições novas grava só as frases novas.

Precisa de: Python 3.10+, Node e
    pip install kokoro-onnx soundfile lameenc
Na primeira vez, o modelo da voz (uns 350 MB) é baixado para ferramentas/.kokoro/, que não vai para o Git.

Uso: npm run audio   (ou: python3 ferramentas/gravar_audio.py)
     python3 ferramentas/gravar_audio.py --refazer "trecho"   grava de novo as falas que têm o trecho
     python3 ferramentas/gravar_audio.py --fonemas "frase"    mostra como a voz vai pronunciar, nos dois sotaques
SPDX-License-Identifier: AGPL-3.0-or-later · Copyright (C) 2026 Contribuidores do Trilha Livre
"""
import json
import os
import re
import subprocess
import sys
import urllib.request

RAIZ = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
MODELO = os.path.join(RAIZ, 'ferramentas', '.kokoro')
BASE = 'https://github.com/thewh1teagle/kokoro-onnx/releases/download/model-files-v1.0/'
ARQUIVOS = ['kokoro-v1.0.onnx', 'voices-v1.0.bin']
KBPS = 48  # fala em MP3 mono: pequeno e claro

# Pronúncias que a voz erra, em geral palavras escritas igual e faladas diferente (lives: vidas × mora).
# Cada linha: um trecho do texto (expressão regular) e as trocas a fazer nos fonemas que a voz geraria.
# Para ver os fonemas de uma frase: python3 ferramentas/gravar_audio.py --fonemas "frase".
# Depois de acrescentar uma correção, grave de novo as frases afetadas: python3 ferramentas/gravar_audio.py --refazer "trecho"
# Uma troca pode ser um texto (troca em qualquer lugar) ou uma expressão regular já compilada (re.compile).
TEEN = [(re.compile(errado + r"(?=[.,!?;:]|$)"), certo) for errado, certo in [
    ('θˈɜːtiːn', 'θɜːtˈiːn'), ('fˈɔːɹtiːn', 'fɔːɹtˈiːn'), ('fˈɔːtiːn', 'fɔːtˈiːn'), ('fˈɪftiːn', 'fɪftˈiːn'),
    ('sˈɪkstiːn', 'sɪkstˈiːn'), ('sˈɛvəntˌiːn', 'sˌɛvəntˈiːn'), ('ˈeɪtiːn', 'eɪtˈiːn'), ('nˈaɪntiːn', 'naɪntˈiːn')]]
CORRECOES = [
    (r"\blives (in|with|here|there|near|next|alone|at|on)\b", [('lˈaɪvz', 'lˈɪvz')]),  # mora, e não vidas
    (r"^live$", [('lˈaɪv', 'lˈɪv')]),                                          # morar, e não ao vivo
    (r"\bused to\b", [('jˈuːzd t', 'jˈuːst t')]),                               # "iúst-tu"
    (r"\buse to\b", [('jˈuːz t', 'jˈuːs t')]),
    (r"\b(could|that I) read\b", [('ɹˈiːd', 'ɹˈɛd')]),                            # read no passado soa "réd"
    (r"\bRecife\b", [('ɹᵻsˈaɪf', 'ɹɛsˈiːfi'), ('ɹɪsˈaɪf', 'ɹɛsˈiːfi')]),
    (r"\binnit\b", [('ɪnnˈɪt', 'ˈɪnɪt')]),
    (r"\bMs\b", [('ˌɛmˈɛs.', 'mˈɪz'), ('ˌɛmˈɛs', 'mˈɪz')]),                     # Ms. soa "miz", e não "M S"
    # 13 a 19 no fim da frase: a sílaba forte é a do -teen (thirTEEN), para não soar como thirty, forty...
    (r"\b(thir|four|fif|six|seven|eigh|nine)teen\b", TEEN),
]


def fonemas_corrigidos(k, texto, lang):
    trocas = [t for padrao, ts in CORRECOES if re.search(padrao, texto) for t in ts]
    if not trocas:
        return None
    ph = k.tokenizer.phonemize(texto, lang)
    for errado, certo in trocas:
        ph = errado.sub(certo, ph) if hasattr(errado, 'sub') else ph.replace(errado, certo)
    return ph


def baixar_modelo():
    os.makedirs(MODELO, exist_ok=True)
    for nome in ARQUIVOS:
        destino = os.path.join(MODELO, nome)
        if not os.path.exists(destino):
            print(f'Baixando {nome} (só na primeira vez)...')
            urllib.request.urlretrieve(BASE + nome, destino + '.parcial')
            os.replace(destino + '.parcial', destino)


def mp3(amostras, taxa):
    import numpy as np
    pcm = (np.clip(amostras, -1, 1) * 32767).astype('<i2').tobytes()
    try:
        import lameenc
        enc = lameenc.Encoder()
        enc.set_bit_rate(KBPS)
        enc.set_in_sample_rate(taxa)
        enc.set_channels(1)
        enc.set_quality(2)
        return enc.encode(pcm) + enc.flush()
    except ImportError:  # sem lameenc: usa o ffmpeg
        r = subprocess.run(['ffmpeg', '-loglevel', 'error', '-f', 's16le', '-ar', str(taxa), '-ac', '1', '-i', '-',
                            '-c:a', 'libmp3lame', '-b:a', f'{KBPS}k', '-f', 'mp3', '-'], input=pcm, capture_output=True, check=True)
        return r.stdout


def lista(opcao):
    return json.loads(subprocess.run(['node', os.path.join(RAIZ, 'ferramentas', 'audio.js'), opcao],
                                     capture_output=True, text=True, check=True).stdout)


def main():
    args = sys.argv[1:]
    if args[:1] == ['--fonemas'] and len(args) > 1:  # mostra os fonemas que a voz usaria, para achar erros
        baixar_modelo()
        from kokoro_onnx import Kokoro
        k = Kokoro(os.path.join(MODELO, ARQUIVOS[0]), os.path.join(MODELO, ARQUIVOS[1]))
        for lang in ('en-us', 'en-gb'):
            print(lang, k.tokenizer.phonemize(args[1], lang))
            certo = fonemas_corrigidos(k, args[1], lang)
            if certo:
                print('   com as correções:', certo)
        return
    if args[:1] == ['--refazer'] and len(args) > 1:  # apaga as falas que têm o trecho, para gravar de novo
        n = 0
        for a in lista('--todas'):
            caminho = os.path.join(RAIZ, a['arquivo'])
            if re.search(args[1], a['texto']) and os.path.exists(caminho):
                os.remove(caminho)
                n += 1
        print(f'{n} fala(s) apagada(s) para gravar de novo.')
    faltando = lista('--json')
    if not faltando:
        print('Todas as falas já estão gravadas.')
        return
    baixar_modelo()
    from kokoro_onnx import Kokoro
    k = Kokoro(os.path.join(MODELO, ARQUIVOS[0]), os.path.join(MODELO, ARQUIVOS[1]))
    print(f'Gravando {len(faltando)} falas...')
    for i, a in enumerate(faltando, 1):
        ph = fonemas_corrigidos(k, a['texto'], a['lang'])
        if ph:
            amostras, taxa = k.create(ph, voice=a['voz'], speed=1.0, lang=a['lang'], is_phonemes=True)
        else:
            amostras, taxa = k.create(a['texto'], voice=a['voz'], speed=1.0, lang=a['lang'])
        destino = os.path.join(RAIZ, a['arquivo'])
        os.makedirs(os.path.dirname(destino), exist_ok=True)
        with open(destino, 'wb') as f:
            f.write(mp3(amostras, taxa))
        if i % 25 == 0 or i == len(faltando):
            print(f'  {i} de {len(faltando)}')
    print('Pronto. Confira com: node ferramentas/audio.js')


if __name__ == '__main__':
    sys.exit(main())

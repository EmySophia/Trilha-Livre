/* Trilha Livre · worker do Python
   Arquivo próprio para o worker passar pelo service worker (assim o Python funciona sem internet depois da primeira vez).
   O código do worker fica em python.js.
   SPDX-License-Identifier: AGPL-3.0-or-later · Copyright (C) 2026 Contribuidores do Trilha Livre */
importScripts('python.js');
pyWorkerMain({ url: PY_URL, pacotes: PY_PACOTES, preludio: PY_PRELUDIO });

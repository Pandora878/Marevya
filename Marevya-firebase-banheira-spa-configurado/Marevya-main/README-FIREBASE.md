# Firebase — Marevya

O projeto está configurado para o projeto Firebase **banheira-spa**.

## Configuração usada

- `projectId`: `banheira-spa`
- `authDomain`: `banheira-spa.firebaseapp.com`
- `storageBucket`: `banheira-spa.firebasestorage.app`
- `measurementId`: `G-KEFQYRPTLQ`

A configuração fica em:

`assets/js/firebase.js`

## Para o login com Google funcionar

No Firebase Console:

1. Authentication → Sign-in method → Google → Ativar.
2. Authentication → Settings → Authorized domains → adicionar o domínio onde o site está hospedado.
3. Para testes locais, adicionar `localhost`.
4. Se estiver usando Firebase Hosting, adicionar também os domínios `.web.app` e `.firebaseapp.com` correspondentes ao projeto.

O código usa Firebase Authentication + Firestore e mantém a sessão localmente.

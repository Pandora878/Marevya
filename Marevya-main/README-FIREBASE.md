# Marevya — Login + Admin + Firebase

Esta versão conecta o login, contas, projetos personalizados e painel administrativo ao projeto Firebase `banheira-spa`.

## 1. Login
- `login.html` usa Firebase Authentication.
- E-mail/senha.
- Google.
- Recuperação de senha.
- Novos usuários recebem `role: cliente` na coleção `users`.
- Usuário com `role: admin` é enviado para `admin.html`.

## 2. Admin
A página `admin.html` é protegida. Ela só abre para um usuário autenticado cujo documento seja:

`users/UID`

com:

`role: "admin"`

O painel mostra contagens e registros das coleções `users`, `projects`, `leads` e `orders`.

## 3. Criar seu administrador
1. Firebase Console → Authentication → Users → crie seu usuário.
2. Copie o UID desse usuário.
3. Firestore → coleção `users` → documento com o mesmo UID.
4. Salve pelo menos:

```json
{
  "name": "Seu nome",
  "email": "seu@email.com",
  "role": "admin"
}
```

## 4. Regras
Publique `firebase.rules` no Firestore Rules.

## 5. Google
Em Firebase Console → Authentication → Sign-in method, ative Google.

## 6. Observação
A configuração Firebase usada no projeto é a que já estava salva para o projeto `banheira-spa`. A API key web não funciona como senha do banco; a proteção real é feita pelo Authentication e pelas regras do Firestore.

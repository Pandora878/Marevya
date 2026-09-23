// Atualiza o link de acesso do cabeçalho conforme o estado do Firebase.
(async function () {
  try {
    const { auth } = await window.MarevyaFirebaseReady;
    const links = document.querySelectorAll('.login-site-link');

    auth.onAuthStateChanged(user => {
      links.forEach(link => {
        // Depois do login, o botão "Entrar" deixa de aparecer.
        link.hidden = !!user;
        link.setAttribute('aria-hidden', user ? 'true' : 'false');
      });
    });
  } catch (error) {
    console.warn('Navegação de autenticação:', error);
  }
})();

// Guard opcional para páginas que exigem login de cliente.
(async function(){
  try{
    const {auth}=await window.MarevyaFirebaseReady;
    auth.onAuthStateChanged(user=>{
      document.documentElement.classList.toggle('marevya-authenticated',!!user);
    });
  }catch(e){ console.warn('Auth guard:',e); }
})();

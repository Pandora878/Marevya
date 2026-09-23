(async function(){
 const $=id=>document.getElementById(id); const form=$('authForm'), msg=$('message'); let signup=false;
 const {auth,db}=await window.MarevyaFirebaseReady;
 function show(text,error=true){msg.textContent=text;msg.style.color=error?'#8b3d32':'#526044'}
 async function ensureUserDoc(user,role='cliente',name){
   const ref=db.collection('users').doc(user.uid); const snap=await ref.get();
   if(!snap.exists){await ref.set({uid:user.uid,name:name||user.displayName||'',email:user.email||'',role,createdAt:firebase.firestore.FieldValue.serverTimestamp()},{merge:true})}
   return (await ref.get()).data()||{};
 }
 auth.getRedirectResult().catch(err=>{ if(err?.code) show(firebaseError(err)); });
 auth.onAuthStateChanged(async user=>{if(!user)return; const data=await ensureUserDoc(user); if(data.role==='admin'){location.href='admin.html'} else {location.href='conta.html'}});
 $('toggle').onclick=e=>{e.preventDefault();signup=!signup;$('nameField').hidden=!signup;$('mode').textContent=signup?'NOVA CONTA':'ÁREA DO CLIENTE';$('title').textContent=signup?'Crie sua conta.':'Bem-vindo.';$('subtitle').textContent=signup?'Salve projetos e acompanhe seu atendimento.':'Entre com seu e-mail e senha.';$('submit').firstChild.textContent=signup?'Criar conta':'Entrar';$('toggle').textContent=signup?'Já tenho uma conta':'Criar conta'};
 $('reset').onclick=async e=>{e.preventDefault();const email=$('email').value.trim();if(!email)return show('Digite seu e-mail primeiro.');try{await auth.sendPasswordResetEmail(email);show('Link de recuperação enviado para seu e-mail.',false)}catch(err){show(firebaseError(err))}};
 $('google').onclick=async()=>{
   const btn=$('google');
   btn.disabled=true; btn.classList.add('is-loading'); btn.textContent='Conectando com Google…'; show('');
   try{
     const provider=new firebase.auth.GoogleAuthProvider();
     provider.setCustomParameters({prompt:'select_account'});
     const result=await auth.signInWithPopup(provider);
     await ensureUserDoc(result.user);
   }catch(err){
     console.error('Google Auth:',err);
     if(err?.code==='auth/popup-blocked' || err?.code==='auth/cancelled-popup-request' || err?.code==='auth/operation-not-supported-in-this-environment'){
       try{
         await auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
         return;
       }catch(redirectErr){ console.error('Google redirect:',redirectErr); show(firebaseError(redirectErr)); }
     }else show(firebaseError(err));
   }finally{
     btn.disabled=false; btn.classList.remove('is-loading'); btn.innerHTML='<span class="google-mark" aria-hidden="true"><svg viewBox="0 0 24 24"><path fill="#4285F4" d="M21.35 12.27c0-.72-.06-1.41-.18-2.07H12v3.92h5.23a4.47 4.47 0 0 1-1.94 2.93v2.44h3.14c1.84-1.69 2.92-4.18 2.92-7.22Z"/><path fill="#34A853" d="M12 21.75c2.63 0 4.84-.87 6.45-2.36l-3.14-2.44c-.87.58-1.98.93-3.31.93-2.54 0-4.69-1.72-5.46-4.03H3.3v2.52A9.75 9.75 0 0 0 12 21.75Z"/><path fill="#FBBC05" d="M6.54 13.85A5.86 5.86 0 0 1 6.23 12c0-.64.11-1.26.31-1.85V7.63H3.3A9.75 9.75 0 0 0 2.25 12c0 1.57.38 3.05 1.05 4.37l3.24-2.52Z"/><path fill="#EA4335" d="M12 6.12c1.43 0 2.72.49 3.73 1.45l2.8-2.8C16.83 3.18 14.63 2.25 12 2.25A9.75 9.75 0 0 0 3.3 7.63l3.24 2.52C7.31 7.84 9.46 6.12 12 6.12Z"/></svg></span><span>Continuar com Google</span>';
   }
 };
 form.onsubmit=async e=>{e.preventDefault();show('');const email=$('email').value.trim(),password=$('password').value,name=$('name').value.trim();try{if(signup){const cred=await auth.createUserWithEmailAndPassword(email,password);if(name)await cred.user.updateProfile({displayName:name});await ensureUserDoc(cred.user,'cliente',name)}else{await auth.signInWithEmailAndPassword(email,password)}}catch(err){show(firebaseError(err))}};
 function firebaseError(e){const c=e?.code||'';return ({'auth/invalid-credential':'E-mail ou senha incorretos.','auth/wrong-password':'E-mail ou senha incorretos.','auth/user-not-found':'Conta não encontrada.','auth/email-already-in-use':'Este e-mail já está cadastrado.','auth/weak-password':'Use uma senha com pelo menos 6 caracteres.','auth/popup-closed-by-user':'Login com Google cancelado.','auth/too-many-requests':'Muitas tentativas. Aguarde um pouco e tente novamente.','auth/unauthorized-domain':'Este domínio não está autorizado no Firebase. Adicione o domínio atual em Authentication → Settings → Authorized domains.','auth/popup-blocked':'O navegador bloqueou a janela do Google. Tente novamente.','auth/operation-not-allowed':'O login com Google ainda não está ativado no Firebase. Ative Google em Authentication → Sign-in method.','auth/network-request-failed':'Falha de conexão com o Firebase. Verifique sua internet e tente novamente.'}[c])||'Não foi possível concluir o acesso. Tente novamente.'}
})();

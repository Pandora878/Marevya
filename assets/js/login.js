(async function(){
 const $=id=>document.getElementById(id); const form=$('authForm'), msg=$('message'); let signup=false;
 const {auth,db}=await window.MarevyaFirebaseReady;
 function show(text,error=true){msg.textContent=text;msg.style.color=error?'#8b3d32':'#526044'}
 async function ensureUserDoc(user,role='cliente',name){
   const ref=db.collection('users').doc(user.uid); const snap=await ref.get();
   if(!snap.exists){await ref.set({uid:user.uid,name:name||user.displayName||'',email:user.email||'',role,createdAt:firebase.firestore.FieldValue.serverTimestamp()},{merge:true})}
   return (await ref.get()).data()||{};
 }
 auth.onAuthStateChanged(async user=>{if(!user)return; const data=await ensureUserDoc(user); if(data.role==='admin'){location.href='admin.html'} else {location.href='conta.html'}});
 $('toggle').onclick=e=>{e.preventDefault();signup=!signup;$('nameField').hidden=!signup;$('mode').textContent=signup?'NOVA CONTA':'ÁREA DO CLIENTE';$('title').textContent=signup?'Crie sua conta.':'Bem-vindo.';$('subtitle').textContent=signup?'Salve projetos e acompanhe seu atendimento.':'Entre com seu e-mail e senha.';$('submit').firstChild.textContent=signup?'Criar conta':'Entrar';$('toggle').textContent=signup?'Já tenho uma conta':'Criar conta'};
 $('reset').onclick=async e=>{e.preventDefault();const email=$('email').value.trim();if(!email)return show('Digite seu e-mail primeiro.');try{await auth.sendPasswordResetEmail(email);show('Link de recuperação enviado para seu e-mail.',false)}catch(err){show(firebaseError(err))}};
 $('google').onclick=async()=>{try{const result=await auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());await ensureUserDoc(result.user)}catch(err){show(firebaseError(err))}};
 form.onsubmit=async e=>{e.preventDefault();show('');const email=$('email').value.trim(),password=$('password').value,name=$('name').value.trim();try{if(signup){const cred=await auth.createUserWithEmailAndPassword(email,password);if(name)await cred.user.updateProfile({displayName:name});await ensureUserDoc(cred.user,'cliente',name)}else{await auth.signInWithEmailAndPassword(email,password)}}catch(err){show(firebaseError(err))}};
 function firebaseError(e){const c=e?.code||'';return ({'auth/invalid-credential':'E-mail ou senha incorretos.','auth/wrong-password':'E-mail ou senha incorretos.','auth/user-not-found':'Conta não encontrada.','auth/email-already-in-use':'Este e-mail já está cadastrado.','auth/weak-password':'Use uma senha com pelo menos 6 caracteres.','auth/popup-closed-by-user':'Login com Google cancelado.','auth/too-many-requests':'Muitas tentativas. Aguarde um pouco e tente novamente.'}[c])||'Não foi possível concluir o acesso. Tente novamente.'}
})();

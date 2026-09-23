(async function(){
 const $=id=>document.getElementById(id);
 const {auth,db}=await window.MarevyaFirebaseReady;
 const esc=v=>String(v??'').replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
 const empty=(el,msg)=>el.innerHTML='<div class="empty">'+msg+'</div>';
 const fmtDate=v=>{if(!v)return '—';try{const d=v.toDate?v.toDate():new Date(v);return isNaN(d)?'—':d.toLocaleDateString('pt-BR')}catch{return '—'}};
 async function col(name){try{let q=db.collection(name).orderBy('createdAt','desc').limit(20);let snap=await q.get();return snap.docs.map(d=>({id:d.id,...d.data()}))}catch(e){try{let snap=await db.collection(name).limit(20).get();return snap.docs.map(d=>({id:d.id,...d.data()}))}catch(e2){console.warn(name,e2);return []}}}
 function table(el,head,rows,emptyMsg){el.innerHTML=rows.length?'<div class="row head">'+head.map(x=>'<span>'+x+'</span>').join('')+'</div>'+rows.map(r=>'<div class="row">'+r.map(x=>'<span>'+esc(x)+'</span>').join('')+'</div>').join(''):'<div class="empty">'+emptyMsg+'</div>'}
 async function load(user){
   const me=await db.collection('users').doc(user.uid).get(); const data=me.exists?me.data():{};
   if(data.role!=='admin'){
     $('gate').innerHTML=`<div class="access-denied"><div class="access-icon">🔒</div><h2>Acesso administrativo</h2><p>Esta conta está autenticada, mas ainda não possui a permissão <b>admin</b>.</p><div class="admin-help"><strong>Como liberar esta conta</strong><ol><li>Abra o Firebase Console.</li><li>Entre em <b>Firestore Database → users</b>.</li><li>Abra o documento com o UID desta conta.</li><li>Defina <b>role</b> como <b>admin</b>.</li><li>Recarregue esta página.</li></ol></div><p class="uid-line">UID: <code>${esc(user.uid)}</code></p><div class="gate-actions"><a href="home.html">Voltar ao site</a><button id="adminLogout" type="button">Trocar conta</button></div></div>`;
     const b=document.getElementById('adminLogout'); if(b) b.onclick=()=>auth.signOut();
     return;
   }
   $('gate').hidden=true;$('dashboard').hidden=false;
   const name=data.name||user.displayName||'Administrador';
   $('userName').textContent=name;$('userEmail').textContent=user.email||'';$('userAvatar').textContent=name.charAt(0).toUpperCase();$('greeting').textContent='Olá, '+name.split(' ')[0]+'.';
   const [users,projects,leads,orders]=await Promise.all([col('users'),col('projects'),col('leads'),col('orders')]);
   const clients=users.filter(x=>x.role!=='admin');
   $('clients').textContent=clients.length;$('projects').textContent=projects.length;$('leads').textContent=leads.length;$('orders').textContent=orders.length;
   $('clientList').innerHTML=clients.slice(0,8).map(x=>`<div class="client"><b>${esc(x.name||'Cliente')}</b><small>${esc(x.email||'')} · ${fmtDate(x.createdAt)}</small></div>`).join('')||'<div class="empty">Nenhum cliente cadastrado.</div>';
   table($('projectList'),['MODELO','CLIENTE','CONFIGURAÇÃO','DATA'],projects.slice(0,10).map(x=>[x.model||x.modelo||'SPA',x.email||x.userEmail||x.uid||'—',Array.isArray(x.extras)?x.extras.length+' opcionais':'—',fmtDate(x.createdAt||x.date)]),'Nenhum projeto salvo no Firebase.');
   table($('leadList'),['NOME','CONTATO','ASSUNTO','DATA'],leads.slice(0,10).map(x=>[x.name||'Lead',x.email||x.phone||'—',x.subject||x.message||'Atendimento',fmtDate(x.createdAt)]),'Nenhum lead no Firebase.');
   table($('orderList'),['PEDIDO','CLIENTE','STATUS','DATA'],orders.slice(0,10).map(x=>[x.id||'—',x.email||x.userEmail||x.uid||'—',x.status||x.estado||'Recebido',fmtDate(x.createdAt||x.date)]),'Nenhum pedido no Firebase.');
 }
 auth.onAuthStateChanged(async user=>{if(!user){location.href='login.html';return}try{await load(user)}catch(e){console.error(e);$('gate').innerHTML='<h2>Não foi possível carregar o painel.</h2><p>Verifique o login e as regras do Firestore.</p>'}});
 $('logout').onclick=()=>auth.signOut();
 document.querySelector('[data-refresh]').onclick=()=>auth.currentUser&&load(auth.currentUser);
})();

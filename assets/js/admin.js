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
   if(data.role!=='admin'){location.href='home.html';return}
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

(async function(){
 const $=id=>document.getElementById(id); const {auth,db}=await window.MarevyaFirebaseReady;
 function empty(el,msg='Nenhum registro encontrado.'){el.innerHTML='<div class="empty">'+msg+'</div>'}
 function fmtDate(v){if(!v)return '—';try{const d=v.toDate?v.toDate():new Date(v);return d.toLocaleDateString('pt-BR')}catch{return '—'}}
 async function col(name){try{const snap=await db.collection(name).orderBy('createdAt','desc').limit(20).get();return snap.docs.map(d=>({id:d.id,...d.data()}))}catch(e){try{const snap=await db.collection(name).limit(20).get();return snap.docs.map(d=>({id:d.id,...d.data()}))}catch{return []}}}
 async function load(user){
  const me=await db.collection('users').doc(user.uid).get(); const data=me.exists?me.data():{};
  if(data.role!=='admin'){location.href='home.html';return}
  $('gate').hidden=true;$('dashboard').hidden=false;$('userName').textContent=data.name||user.displayName||'Administrador';$('userEmail').textContent=user.email||'';$('userAvatar').textContent=(data.name||user.email||'M').charAt(0).toUpperCase();$('greeting').textContent='Olá, '+((data.name||user.displayName||'Administrador').split(' ')[0])+'.';
  const [users,projects,leads,orders]=await Promise.all([col('users'),col('projects'),col('leads'),col('orders')]);
  const clients=users.filter(x=>x.role!=='admin'); $('clients').textContent=clients.length;$('projects').textContent=projects.length;$('leads').textContent=leads.length;$('orders').textContent=orders.length;
  $('clientList').innerHTML=clients.slice(0,8).map(x=>`<div class="client"><b>${esc(x.name||'Cliente')}</b><small>${esc(x.email||'')} · ${fmtDate(x.createdAt)}</small></div>`).join('')||'<div class="empty">Nenhum cliente cadastrado.</div>';
  $('projectList').innerHTML=projects.slice(0,10).map(x=>`<div class="row"><span>${esc(x.model||x.modelo||'SPA')}</span><span>${esc(x.email||x.userEmail||x.uid||'—')}</span><span>${Array.isArray(x.extras)?x.extras.length+' opcionais':'—'}</span><span>${fmtDate(x.createdAt||x.date)}</span></div>`).join('')?'<div class="row head"><span>MODELO</span><span>CLIENTE</span><span>CONFIGURAÇÃO</span><span>DATA</span></div>'+projects.slice(0,10).map(x=>`<div class="row"><span>${esc(x.model||x.modelo||'SPA')}</span><span>${esc(x.email||x.userEmail||x.uid||'—')}</span><span>${Array.isArray(x.extras)?x.extras.length+' opcionais':'—'}</span><span>${fmtDate(x.createdAt||x.date)}</span></div>`).join(''):'<div class="empty">Nenhum projeto salvo no Firebase.</div>';
  $('leadList').innerHTML=leads.length?'<div class="row head"><span>NOME</span><span>CONTATO</span><span>ASSUNTO</span><span>DATA</span></div>'+leads.slice(0,10).map(x=>`<div class="row"><span>${esc(x.name||'Lead')}</span><span>${esc(x.email||x.phone||'—')}</span><span>${esc(x.subject||x.message||'Atendimento')}</span><span>${fmtDate(x.createdAt)}</span></div>`).join(''):'<div class="empty">Nenhum lead no Firebase.</div>';
 }
 function esc(v){return String(v??'').replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]))}
 auth.onAuthStateChanged(async user=>{if(!user){location.href='login.html';return}try{await load(user)}catch(e){console.error(e);$('gate').innerHTML='<h2>Não foi possível carregar o painel.</h2><p>Verifique as regras do Firestore.</p>'}});
 $('logout').onclick=()=>auth.signOut(); document.querySelector('[data-refresh]').onclick=()=>auth.currentUser&&load(auth.currentUser);
})();

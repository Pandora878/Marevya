const $=id=>document.getElementById(id);
const img={
cachorro:`assets/dog.svg`,gato:`assets/cat.svg`,borboleta:`assets/butterfly.svg`,peixe:`assets/fish.svg`,planta:`assets/plant.svg`,flor:`assets/flower.svg`,arvore:`assets/tree.svg`,sol:`assets/sun.svg`,lua:`assets/moon.svg`,maca:`assets/apple.svg`,cenoura:`assets/carrot.svg`,passaro:`assets/bird.svg`,tartaruga:`assets/turtle.svg`,agua:`assets/water.svg`,};
/*
Cada missão: [ícone, instrução, categoria1, categoria2, itens]
item = [nome, imagem, categoria]
*/
const missions={
pre1:[
["🌱","Separe o que é ser vivo do que não é.","Seres vivos","Não vivos",[["Planta","planta","Seres vivos"],["Cachorro","cachorro","Seres vivos"],["Sol","sol","Não vivos"],["Lua","lua","Não vivos"]]],
["☀️","Separe o que vemos no céu do que encontramos na Terra.","Céu","Terra",[["Sol","sol","Céu"],["Lua","lua","Céu"],["Árvore","arvore","Terra"],["Cachorro","cachorro","Terra"]]],
["🍎","Separe os alimentos do que não é alimento.","Alimentos","Não é alimento",[["Maçã","maca","Alimentos"],["Cenoura","cenoura","Alimentos"],["Flor","flor","Não é alimento"],["Cachorro","cachorro","Não é alimento"]]],
["🦋","Separe animais e plantas.","Animais","Plantas",[["Borboleta","borboleta","Animais"],["Cachorro","cachorro","Animais"],["Flor","flor","Plantas"],["Árvore","arvore","Plantas"]]]
],
pre2:[
["🐟","Separe animais da água e animais da terra.","Água","Terra",[["Peixe","peixe","Água"],["Tartaruga","tartaruga","Água"],["Cachorro","cachorro","Terra"],["Gato","gato","Terra"]]],
["🌿","Separe plantas e animais.","Plantas","Animais",[["Árvore","arvore","Plantas"],["Flor","flor","Plantas"],["Cachorro","cachorro","Animais"],["Pássaro","passaro","Animais"]]],
["🌎","Separe o que pertence ao céu e o que encontramos na Terra.","Céu","Terra",[["Sol","sol","Céu"],["Lua","lua","Céu"],["Árvore","arvore","Terra"],["Cachorro","cachorro","Terra"]]],
["🌱","Separe seres vivos e não vivos.","Seres vivos","Não vivos",[["Planta","planta","Seres vivos"],["Borboleta","borboleta","Seres vivos"],["Sol","sol","Não vivos"],["Lua","lua","Não vivos"]]]
],
"1":[
["🌱","O que ajuda a planta a crescer?","Ajuda a planta","Não ajuda",[["Água","agua","Ajuda a planta"],["Sol","sol","Ajuda a planta"],["Pedra","lua","Não ajuda"],["Brinquedo","gato","Não ajuda"]]],
["🐾","Separe animais domésticos e animais selvagens.","Domésticos","Selvagens",[["Cachorro","cachorro","Domésticos"],["Gato","gato","Domésticos"],["Borboleta","borboleta","Selvagens"],["Peixe","peixe","Selvagens"]]],
["👂","Relacione os sentidos com situações do dia a dia.","Sentidos do corpo","Não é sentido",[["Ouvir","passaro","Sentidos do corpo"],["Observar","sol","Sentidos do corpo"],["Correr","cachorro","Não é sentido"],["Pular","gato","Não é sentido"]]],
["🌎","Separe seres vivos e elementos não vivos do ambiente.","Seres vivos","Não vivos",[["Árvore","arvore","Seres vivos"],["Cachorro","cachorro","Seres vivos"],["Sol","sol","Não vivos"],["Lua","lua","Não vivos"]]]
],
"2":[
["💧","Separe situações relacionadas à água e ao solo.","Água","Solo",[["Beber água","agua","Água"],["Chuva","agua","Água"],["Plantar","planta","Solo"],["Raiz","arvore","Solo"]]],
["🫁","Separe partes/órgãos do corpo de elementos da natureza.","Corpo humano","Natureza",[["Pulmões","passaro","Corpo humano"],["Coração","gato","Corpo humano"],["Árvore","arvore","Natureza"],["Sol","sol","Natureza"]]],
["🌱","Separe partes da planta e animais.","Plantas","Animais",[["Folha","planta","Plantas"],["Flor","flor","Plantas"],["Cachorro","cachorro","Animais"],["Pássaro","passaro","Animais"]]],
["♻️","Separe atitudes que ajudam o ambiente das que prejudicam.","Ajuda o ambiente","Prejudica",[["Economizar água","agua","Ajuda o ambiente"],["Cuidar de plantas","planta","Ajuda o ambiente"],["Jogar lixo no chão","maca","Prejudica"],["Desperdiçar água","agua","Prejudica"]]]
],
"3":[
["🌿","Separe plantas e animais.","Plantas","Animais",[["Árvore","arvore","Plantas"],["Flor","flor","Plantas"],["Cachorro","cachorro","Animais"],["Peixe","peixe","Animais"]]],
["🌱","Separe seres vivos e elementos que não são vivos.","Seres vivos","Não vivos",[["Planta","planta","Seres vivos"],["Cachorro","cachorro","Seres vivos"],["Sol","sol","Não vivos"],["Lua","lua","Não vivos"]]],
["💧","Separe o que faz parte da água e o que não faz.","Água","Não é água",[["Chuva","agua","Água"],["Rio","agua","Água"],["Árvore","arvore","Não é água"],["Cachorro","cachorro","Não é água"]]],
["♻️","Separe atitudes que ajudam e que prejudicam o ambiente.","Ajuda o ambiente","Prejudica",[["Economizar água","agua","Ajuda o ambiente"],["Cuidar das plantas","planta","Ajuda o ambiente"],["Jogar lixo no chão","maca","Prejudica"],["Poluir o rio","peixe","Prejudica"]]]
],
"4":[
["🌎","Separe elementos de um ecossistema em seres vivos e fatores não vivos.","Seres vivos","Fatores não vivos",[["Planta","planta","Seres vivos"],["Peixe","peixe","Seres vivos"],["Água","agua","Fatores não vivos"],["Sol","sol","Fatores não vivos"]]],
["🌱","Separe produtores e consumidores em uma cadeia alimentar.","Produtores","Consumidores",[["Árvore","arvore","Produtores"],["Planta","planta","Produtores"],["Peixe","peixe","Consumidores"],["Cachorro","cachorro","Consumidores"]]],
["💧","Separe mudanças de estado da água em dois grupos.","Mudança da água","Não é mudança",[["Evaporação","agua","Mudança da água"],["Congelamento","agua","Mudança da água"],["Árvore","arvore","Não é mudança"],["Cachorro","cachorro","Não é mudança"]]],
["♻️","Separe ações sustentáveis das ações que desperdiçam recursos.","Sustentáveis","Desperdício",[["Reciclar","planta","Sustentáveis"],["Economizar água","agua","Sustentáveis"],["Jogar lixo no rio","peixe","Desperdício"],["Deixar torneira aberta","agua","Desperdício"]]]
],
"5":[
["🧬","Separe estruturas do corpo humano e elementos do ambiente.","Corpo humano","Ambiente",[["Célula","gato","Corpo humano"],["Coração","gato","Corpo humano"],["Árvore","arvore","Ambiente"],["Sol","sol","Ambiente"]]],
["🌿","Organize os componentes de uma cadeia alimentar.","Produtores","Consumidores",[["Planta","planta","Produtores"],["Árvore","arvore","Produtores"],["Peixe","peixe","Consumidores"],["Cachorro","cachorro","Consumidores"]]],
["🌍","Separe fenômenos ligados à Terra dos elementos que não representam movimento terrestre.","Movimentos da Terra","Outros",[["Rotação","sol","Movimentos da Terra"],["Translação","lua","Movimentos da Terra"],["Cachorro","cachorro","Outros"],["Flor","flor","Outros"]]],
["♻️","Separe ações de conservação ambiental das que causam impactos negativos.","Conservação","Impacto negativo",[["Reciclar","planta","Conservação"],["Economizar água","agua","Conservação"],["Desmatar","arvore","Impacto negativo"],["Poluir rios","peixe","Impacto negativo"]]]
]};
let grade="",idx=0,score=0,hits=0,lives=3,current,dragged=null,timerId=null,timeLeft=0;
function show(id){document.querySelectorAll(".screen").forEach(s=>s.classList.remove("active"));$(id).classList.add("active")}
function start(g){grade=g;idx=0;score=0;hits=0;lives=3;clearInterval(timerId);$("score").textContent=0;show("game");render()}
function render(){
 current=missions[grade][idx];
 const names={"pre1":"🌈 Pré I","pre2":"🚀 Pré II","1":"🌱 1º ano","2":"💧 2º ano","3":"🫀 3º ano","4":"🌎 4º ano","5":"🧬 5º ano"};
 $("gradeName").textContent=names[grade];$("roundName").textContent=`Missão ${idx+1} de ${missions[grade].length}`;
 $("instruction").textContent=current[1];$("missionIcon").textContent=current[0];$("progress").style.width=(idx/missions[grade].length*100)+"%";
 $("lives").textContent="❤️".repeat(lives)+"🖤".repeat(3-lives);$("message").textContent="";$("next").hidden=true;
 const timed=grade==="3"; $("timer").textContent=timed?`⏱️ ${timeLeft=40}s`:""; clearInterval(timerId); if(timed) startTimer();
 $("leftTitle").textContent=grade==="pre1"||grade==="pre2"?"Figuras":"Elementos";
 $("rightTitle").textContent="Categorias";
 $("targets").innerHTML=current.slice(2,4).map(t=>`<div class="target" data-type="${t}"><b>${t}</b><div class="dropPreview">↘️</div></div>`).join("");
 $("items").innerHTML=current[4].map((x,n)=>`<div class="dragItem" draggable="true" data-type="${x[2]}" tabindex="0"><img src="${img[x[1]]}" alt="${x[0]}"><span>${x[0]}</span></div>`).join("");
 document.querySelectorAll(".dragItem").forEach(el=>{
  el.addEventListener("dragstart",e=>{dragged=el;e.dataTransfer.setData("text/plain","x")});
  el.addEventListener("click",()=>select(el));
  el.addEventListener("keydown",e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();select(el)}});
 });
 document.querySelectorAll(".target").forEach(t=>{
  t.addEventListener("dragover",e=>{e.preventDefault();t.classList.add("over")});
  t.addEventListener("dragleave",()=>t.classList.remove("over"));
  t.addEventListener("drop",e=>{e.preventDefault();t.classList.remove("over");if(dragged)place(dragged,t)});
  t.addEventListener("click",()=>{if(dragged)place(dragged,t)});
 });
}

function startTimer(){
 timeLeft=40; $("timer").textContent=`⏱️ ${timeLeft}s`;
 timerId=setInterval(()=>{
  timeLeft--; $("timer").textContent=`⏱️ ${timeLeft}s`;
  if(timeLeft<=0){
   clearInterval(timerId);
   $("message").textContent="⏰ O tempo acabou! Vamos para a próxima missão. 🌟";
   document.querySelectorAll(".dragItem").forEach(x=>{x.draggable=false});
   $("next").hidden=false;
  }
 },1000);
}
function select(el){if(el.classList.contains("placed"))return;document.querySelectorAll(".dragItem").forEach(x=>x.classList.remove("selected"));el.classList.add("selected");dragged=el;$("message").textContent="Agora escolha a categoria. 👆"}
function place(item,target){
 if(item.classList.contains("placed"))return;
 if(item.dataset.type===target.dataset.type){
  score+=10;hits++;$("score").textContent=score;item.classList.add("placed");item.classList.remove("selected");item.draggable=false;
  const c=item.cloneNode(true);c.classList.remove("selected");target.querySelector(".dropPreview").replaceWith(c);target.classList.add("filled");$("message").textContent="🌟 Muito bem! Descoberta correta!";
  if(document.querySelectorAll(".dragItem.placed").length===current[4].length)$("next").hidden=false;
 }else{
  lives--;$("lives").textContent="❤️".repeat(lives)+"🖤".repeat(3-lives);$("message").textContent="💡 Tente observar a figura e pensar onde ela pertence.";
  if(lives<=0){$("message").textContent="🌱 Vamos aprender juntos! Você pode continuar.";document.querySelectorAll(".dragItem").forEach(x=>x.draggable=false);$("next").hidden=false}
 }
 dragged=null;
}
function next(){
 clearInterval(timerId);
 idx++;
 if(idx>=missions[grade].length){$("finalScore").textContent=score;$("finalHits").textContent=hits;$("resultText").textContent=`Você completou ${missions[grade].length} missões de Ciências. Continue observando, fazendo perguntas e investigando!`;show("result")}
 else{lives=3;render()}
}
document.querySelectorAll("[data-grade]").forEach(b=>b.addEventListener("click",()=>start(b.dataset.grade)));
$("next").addEventListener("click",next);$("homeBtn").addEventListener("click",()=>show("home"));$("again").addEventListener("click",()=>show("home"));
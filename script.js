const animals={
fox:{name:"Raposa",role:"Exploradora",base:"#e9782d",light:"#ffe2c9",accent:"#5b2d1d"},
panda:{name:"Panda",role:"Aventureiro",base:"#202637",light:"#f4f5fa",accent:"#8fd3ff"},
cat:{name:"Gato",role:"Cientista",base:"#89909e",light:"#e9edf5",accent:"#ff9bc1"},
rabbit:{name:"Coelho",role:"Inventora",base:"#eee7e1",light:"#fff8f3",accent:"#f59bb5"},
dog:{name:"Cachorro",role:"Explorador",base:"#9b633f",light:"#f3cda7",accent:"#79c8ff"},
tiger:{name:"Tigre",role:"Desafiante",base:"#f08a22",light:"#ffe0a8",accent:"#241d18"}
};
const furPalettes={
fox:["#e9782d","#f3a24b","#ffe1c7","#9b4d24","#4b2d24","#202637"],
panda:["#202637","#6b7280","#f4f5fa","#d8dee9","#b9c3d4","#111827"],
cat:["#89909e","#596273","#d7dbe3","#f0b7b7","#8d6e63","#303746"],
rabbit:["#eee7e1","#f5cdbd","#d9b6d0","#c7d5e7","#b98c76","#8b6b7d"],
dog:["#9b633f","#d4935d","#f1c7a0","#6f442d","#f1e7d7","#4d596a"],
tiger:["#f08a22","#ffb13b","#ffd99a","#d75a20","#fff0cc","#352319"]
};
const shirtColors=["#2674ff","#e23d4f","#1fa86b","#252b3a","#f4b82f","#7d42d8"];
const headStyles=[
{name:"Normal",key:"normal"}, {name:"Óculos",key:"glasses"}, {name:"Bandana",key:"bandana"},
{name:"Boné",key:"cap"}, {name:"Fone",key:"headphones"}, {name:"Capuz",key:"hood"}
];
const accessoryStyles=[
{name:"Nenhum",key:"none"}, {name:"Óculos",key:"glasses"}, {name:"Fone",key:"headphones"},
{name:"Mochila",key:"backpack"}, {name:"Cachecol",key:"scarf"}, {name:"Coroa",key:"crown"}
];
let customization={animal:"fox",fur:null,shirt:"#2674ff",head:"cap",accessory:"none"};

function currentAnimal(){return animals[customization.animal]||animals.fox}
function animalColors(){
const a=currentAnimal();
return {base:customization.fur||a.base,light:a.light,accent:a.accent};
}
function animalFace(){
const a=currentAnimal(), c=animalColors(), base=c.base, light=c.light, accent=c.accent;
let ears="", stripes="";
if(customization.animal==="fox") ears=`<path d="M54 74L48 15L91 48Z" fill="${base}"/><path d="M166 74L172 15L129 48Z" fill="${base}"/><path d="M57 58L54 30L76 49Z" fill="#ffc4c4"/><path d="M163 58L166 30L144 49Z" fill="#ffc4c4"/>`;
if(customization.animal==="panda") ears=`<circle cx="65" cy="48" r="25" fill="#161b29"/><circle cx="155" cy="48" r="25" fill="#161b29"/>`;
if(customization.animal==="cat") ears=`<path d="M55 72L54 19L96 51Z" fill="${base}"/><path d="M165 72L166 19L124 51Z" fill="${base}"/><path d="M59 56L59 33L78 49Z" fill="${accent}"/><path d="M161 56L161 33L142 49Z" fill="${accent}"/>`;
if(customization.animal==="rabbit") ears=`<rect x="62" y="5" width="35" height="85" rx="18" fill="${base}"/><rect x="123" y="5" width="35" height="85" rx="18" fill="${base}"/><rect x="72" y="15" width="15" height="65" rx="8" fill="${accent}"/><rect x="133" y="15" width="15" height="65" rx="8" fill="${accent}"/>`;
if(customization.animal==="dog") ears=`<path d="M55 54Q26 65 42 119L72 92Z" fill="${base}"/><path d="M165 54Q194 65 178 119L148 92Z" fill="${base}"/>`;
if(customization.animal==="tiger") ears=`<path d="M54 74L48 15L91 48Z" fill="${base}"/><path d="M166 74L172 15L129 48Z" fill="${base}"/><path d="M59 57L54 30L77 49Z" fill="#ffd4b5"/><path d="M161 57L166 30L143 49Z" fill="#ffd4b5"/>`;
if(customization.animal==="tiger") stripes=`<path d="M62 75l18 13M158 75l-18 13M73 48l17 10M147 48l-17 10" stroke="#39251b" stroke-width="7" stroke-linecap="round"/>`;
return `${ears}<circle cx="110" cy="105" r="65" fill="${base}"/><ellipse cx="110" cy="128" rx="39" ry="31" fill="${light}"/>${stripes}
<ellipse cx="86" cy="104" rx="12" ry="15" fill="#fff"/><ellipse cx="134" cy="104" rx="12" ry="15" fill="#fff"/>
<circle cx="88" cy="106" r="6" fill="#182033"/><circle cx="132" cy="106" r="6" fill="#182033"/>
<circle cx="90" cy="104" r="2" fill="#fff"/><circle cx="134" cy="104" r="2" fill="#fff"/>
<path d="M101 126Q110 119 119 126Q117 137 110 137Q103 137 101 126Z" fill="#2b2030"/>
<path d="M110 136Q101 147 92 143M110 136Q119 147 128 143" fill="none" stroke="#2b2030" stroke-width="4" stroke-linecap="round"/>`;
}
function clothingSVG(){
const shirt=customization.shirt||"#2674ff";
let detail=`<circle cx="110" cy="205" r="20" fill="#fff" opacity=".96"/><path d="M100 205L108 213L123 195" fill="none" stroke="${shirt}" stroke-width="6" stroke-linecap="round"/>`;
if(customization.animal==="fox"&&shirt==="#2674ff") detail=`<path d="M92 189L110 179L128 189L121 215H99Z" fill="#fff" opacity=".95"/><path d="M110 183V211M99 198H121" stroke="#ff7b2f" stroke-width="4"/>`;
return `<path d="M50 243Q54 177 110 176Q166 177 170 243Z" fill="${shirt}"/><path d="M78 180Q66 204 67 243M142 180Q154 204 153 243" fill="none" stroke="#fff" opacity=".14" stroke-width="8"/>${detail}`;
}
function headAccessorySVG(){
let x="";
if(customization.head==="glasses")x+=`<rect x="64" y="91" width="44" height="28" rx="12" fill="none" stroke="#26314a" stroke-width="6"/><rect x="112" y="91" width="44" height="28" rx="12" fill="none" stroke="#26314a" stroke-width="6"/><path d="M108 104H112" stroke="#26314a" stroke-width="6"/>`;
if(customization.head==="bandana")x+=`<path d="M50 77Q110 105 170 77L166 91Q110 119 54 91Z" fill="#e23d4f"/>`;
if(customization.head==="cap")x+=`<path d="M58 74Q72 38 110 38Q148 38 162 74Z" fill="#2674ff"/><path d="M142 68Q176 67 183 79Q158 88 139 81Z" fill="#1b56c5"/>`;
if(customization.head==="headphones")x+=`<path d="M48 105Q48 44 110 44Q172 44 172 105" fill="none" stroke="#7c83ff" stroke-width="11"/><circle cx="49" cy="105" r="17" fill="#7c83ff"/><circle cx="171" cy="105" r="17" fill="#7c83ff"/>`;
if(customization.head==="hood")x+=`<path d="M51 106Q54 39 110 32Q166 39 169 106L151 91Q110 65 69 91Z" fill="#273149" opacity=".96"/>`;
if(customization.accessory==="glasses")x+=`<rect x="64" y="91" width="44" height="28" rx="12" fill="rgba(100,180,255,.22)" stroke="#9dc9ff" stroke-width="5"/><rect x="112" y="91" width="44" height="28" rx="12" fill="rgba(100,180,255,.22)" stroke="#9dc9ff" stroke-width="5"/><path d="M108 104H112" stroke="#9dc9ff" stroke-width="5"/>`;
if(customization.accessory==="headphones")x+=`<path d="M48 108Q48 53 110 53Q172 53 172 108" fill="none" stroke="#cfd7ff" stroke-width="8"/><circle cx="50" cy="108" r="14" fill="#cfd7ff"/><circle cx="170" cy="108" r="14" fill="#cfd7ff"/>`;
if(customization.accessory==="backpack")x+=`<path d="M51 174Q35 184 39 235L62 235L66 182Z" fill="#684b3a"/><path d="M169 174Q185 184 181 235L158 235L154 182Z" fill="#684b3a"/>`;
if(customization.accessory==="scarf")x+=`<path d="M66 153Q110 171 154 153L150 177Q110 194 70 177Z" fill="#e23d4f"/><path d="M130 177L151 219L136 222L119 179Z" fill="#c92f3f"/>`;
if(customization.accessory==="crown")x+=`<path d="M68 55L76 23L96 45L110 18L124 45L144 23L152 55Z" fill="#ffd166" stroke="#b98a18" stroke-width="4"/>`;
return x;
}
function createCharacterSVG(){
const c=animalColors();
return `<svg viewBox="0 0 220 270" xmlns="http://www.w3.org/2000/svg">
<defs><linearGradient id="bodyGrad" x1="0" x2="1"><stop stop-color="${customization.shirt||"#2674ff"}"/><stop offset="1" stop-color="#64a3ff"/></linearGradient></defs>
<ellipse cx="110" cy="252" rx="65" ry="10" fill="#000" opacity=".25"/>
${customization.accessory==="backpack"?headAccessorySVG():""}
${animalFace()}
${clothingSVG()}
${headAccessorySVG()}
<circle cx="110" cy="208" r="4" fill="#fff" opacity=".4"/>
</svg>`;
}
function refreshCharacter(){
document.getElementById("bigCharacter").innerHTML=createCharacterSVG();
document.getElementById("rankCharacter").innerHTML=createCharacterSVG();
document.getElementById("loginCharacter").innerHTML=createCharacterSVG();
const a=currentAnimal();
document.getElementById("previewName").textContent=a.name;
document.getElementById("rankName").textContent=a.name;
}
function makeChoice(containerId,items,getLabel,getKey,onPick){
const box=document.getElementById(containerId);box.innerHTML="";
items.forEach(item=>{
const b=document.createElement("button");b.className="editor-choice";
b.innerHTML=getLabel(item);
b.onclick=()=>{onPick(getKey(item));document.querySelectorAll(`#${containerId} .editor-choice`).forEach(x=>x.classList.remove("selected"));b.classList.add("selected");refreshCharacter();};
if(getKey(item)===getKey(items[0])) b.classList.add("selected");
box.appendChild(b);
});
}
function buildAnimalOptions(){
const box=document.getElementById("animalOptions");box.innerHTML="";
Object.entries(animals).forEach(([id,a])=>{
const b=document.createElement("button");b.className="animal-card"+(customization.animal===id?" selected":"");
b.innerHTML=`<div>${animalThumb(id)}</div><span>${a.name}</span>`;
b.onclick=()=>{customization.animal=id;customization.fur=null;document.querySelectorAll(".animal-card").forEach(x=>x.classList.remove("selected"));b.classList.add("selected");buildFurOptions();refreshCharacter();};
box.appendChild(b);
});
}
function animalThumb(id){
const old=customization.animal,oldF=customization.fur;customization.animal=id;customization.fur=null;
const s=createCharacterSVG();customization.animal=old;customization.fur=oldF;
return s;
}
function buildFurOptions(){
const box=document.getElementById("furOptions");box.innerHTML="";
furPalettes[customization.animal].forEach(color=>{
const b=document.createElement("button");b.className="fur-swatch"+((customization.fur||currentAnimal().base)===color?" selected":"");b.style.background=color;
b.onclick=()=>{customization.fur=color;document.querySelectorAll(".fur-swatch").forEach(x=>x.classList.remove("selected"));b.classList.add("selected");refreshCharacter();};
box.appendChild(b);
});
}
function buildStyles(){
const make=(id,items,current,setter)=>{
const box=document.getElementById(id);box.innerHTML="";
items.forEach((item,i)=>{
const b=document.createElement("button");b.className="style-choice"+(current===item.key?" selected":"");
b.innerHTML=`<div class="style-preview ${item.key}">${styleIcon(item.key)}</div><span>${item.name}</span>`;
b.onclick=()=>{setter(item.key);document.querySelectorAll(`#${id} .style-choice`).forEach(x=>x.classList.remove("selected"));b.classList.add("selected");refreshCharacter();};
box.appendChild(b);
});
};
make("headOptions",headStyles,customization.head,k=>customization.head=k);
make("shirtOptions",shirtColors.map(c=>({key:c,name:""})),customization.shirt,k=>customization.shirt=k);
make("accessoryOptions",accessoryStyles,customization.accessory,k=>customization.accessory=k);
document.querySelectorAll("#shirtOptions .style-choice").forEach((b,i)=>b.querySelector(".style-preview").style.background=shirtColors[i]);
}
function styleIcon(key){
const icons={normal:"●",glasses:"◉",bandana:"◆",cap:"⌒",headphones:"◉",hood:"◒",none:"∅",backpack:"▣",scarf:"≈",crown:"♛"};
return icons[key]||"•";
}
function buildCharacterEditor(){
buildAnimalOptions();buildFurOptions();buildStyles();refreshCharacter();
}



const gradeProfiles={
  pre1:{label:"Pré I",title:"Pequenos Exploradores",description:"Conte, compare, encontre padrões e brinque com os números.",time:20,questions:8,lives:4,modes:[
    ["count","Caça aos Números","Contagem","blue"],["compare","Quem tem mais?","Maior e menor","purple"],
    ["sequence","Trilha dos Números","Sequências","orange"],["shapes","Mundo das Formas","Formas","green"],
    ["mixed","Aventurinha Final","Desafio misto","gold"]]},
  pre2:{label:"Pré II",title:"Aventuras dos Números",description:"Conte, some, tire e complete sequências de um jeito divertido.",time:18,questions:8,lives:4,modes:[
    ["count","Floresta da Contagem","Contagem","blue"],["addition","Vila da Soma","Adição","purple"],
    ["subtraction","Rio da Subtração","Subtração","orange"],["sequence","Trilha Numérica","Sequências","green"],
    ["mixed","Desafio do Explorador","Misto","gold"]]},
  g1:{label:"1º ano",title:"Missões do 1º ano",description:"Somas, subtrações, números vizinhos e sequências.",time:17,questions:10,lives:3,modes:[
    ["addition","Vila da Soma","Adição","blue"],["subtraction","Floresta da Subtração","Subtração","purple"],
    ["sequence","Trilha Numérica","Sequências","orange"],["compare","Guardião dos Números","Maior e menor","green"],
    ["mixed","Desafio Final","Misto","gold"]]},
  g2:{label:"2º ano",title:"Missões do 2º ano",description:"Operações, tabuada inicial e problemas rápidos.",time:16,questions:10,lives:3,modes:[
    ["addition","Cidade da Soma","Adição","blue"],["subtraction","Vale da Subtração","Subtração","purple"],
    ["multiplication","Torre da Tabuada","Multiplicação","orange"],["division","Reino da Divisão","Divisão","green"],
    ["mixed","Templo Matemático","Misto","gold"]]},
  g3:{label:"3º ano",title:"Missões do 3º ano",description:"As quatro operações e desafios de raciocínio.",time:15,questions:10,lives:3,modes:[
    ["addition","Cidade dos Milhares","Adição","blue"],["subtraction","Vale dos Milhares","Subtração","purple"],
    ["multiplication","Torre da Tabuada","Multiplicação","orange"],["division","Reino da Divisão","Divisão","green"],
    ["mixed","Templo Matemático","Misto","gold"]]},
  g4:{label:"4º ano",title:"Missões do 4º ano",description:"Quatro operações, frações, medidas e problemas.",time:15,questions:10,lives:3,modes:[
    ["addition","Cidade dos Grandes Números","Adição","blue"],["subtraction","Vale dos Desafios","Subtração","purple"],
    ["multiplication","Torre Multiplicadora","Multiplicação","orange"],["fraction","Ilha das Frações","Frações","green"],
    ["mixed","Templo Matemático","Misto","gold"]]},
  g5:{label:"5º ano",title:"Missões do 5º ano",description:"Operações, frações, decimais, porcentagens e desafios.",time:15,questions:10,lives:3,modes:[
    ["addition","Vila da Soma","Adição","blue"],["subtraction","Floresta dos Números","Subtração","purple"],
    ["multiplication","Torre da Tabuada","Multiplicação","orange"],["division","Reino da Divisão","Divisão","green"],
    ["mixed","Templo Matemático","Desafio misto","gold"],["boss","Desafio Final","Modo avançado","red"]]}
};
let selectedGrade=null;
let player={name:"",character:"explorer",points:0,record:0,level:1,xp:0,grade:"g5"};

let game={
mode:"",question:0,totalQuestions:10,answer:0,lives:3,score:0,correct:0,wrong:0,combo:0,bestCombo:0,
locked:false,timeLimit:15,deadline:0,animationFrame:null
};

function showScreen(id){
document.querySelectorAll(".screen").forEach(s=>s.classList.remove("active"));
document.getElementById(id).classList.add("active");
}

function storageKey(){
return "mathQuestPlayer_"+player.name.toLowerCase().replace(/[^a-z0-9áéíóúãõç]+/gi,"_");
}

function savePlayer(){localStorage.setItem(storageKey(),JSON.stringify(player));}

function loadPlayer(){
const saved=localStorage.getItem(storageKey());
if(saved){
  try{
    player={...player,...JSON.parse(saved)};
    if(player.customization) customization={...customization,...player.customization};
  }catch(e){}
}
}

function buildCharacterOptions(){
const container=document.getElementById("characterOptions");container.innerHTML="";
Object.entries(animals).forEach(([id,c])=>{
const button=document.createElement("button");button.className="character-option"+(player.character===id?" selected":"");
button.innerHTML=`<div class="character-option-image">${createCharacterSVG(id)}</div><div><strong>${c.name}</strong><span>${c.role}</span></div>`;
button.onclick=()=>{
  player.character=id;
  customization={hair:null,shirt:null,skin:null};
  player.customization=customization;
  document.querySelectorAll(".character-option").forEach(x=>x.classList.remove("selected"));
  button.classList.add("selected");
  updateCharacterPreview();
  buildColorOptions();
};
container.appendChild(button);
});
}

function updateCharacterPreview(){
document.getElementById("bigCharacter").innerHTML=createCharacterSVG(player.character);
document.getElementById("previewName").textContent=currentAnimal().name;
document.getElementById("loginCharacter").innerHTML=createCharacterSVG(player.character);
}


function buildColorOptions(){
const box=document.getElementById("colorOptions");box.innerHTML="";
const feature=document.querySelector(".customize-btn.active")?.dataset.feature||"shirt";
palettes[feature].forEach(color=>{
const b=document.createElement("button");b.className="color-dot"+(customization[feature]===color?" active":"");
b.style.background=color;
b.title="Escolher cor";
b.onclick=()=>{
  customization[feature]=color;
  player.customization=customization;
  savePlayer();
  buildColorOptions();
  updateCharacterPreview();
};
box.appendChild(b);
});
}
document.querySelectorAll(".customize-btn").forEach(b=>b.addEventListener("click",()=>{
document.querySelectorAll(".customize-btn").forEach(x=>x.classList.remove("active"));b.classList.add("active");buildColorOptions();
}));

function loadPlayer(){
const saved=localStorage.getItem(storageKey());
if(saved){
  try{
    player={...player,...JSON.parse(saved)};
    if(player.customization) customization={...customization,...player.customization};
  }catch(e){}
}
}
function storageKey(){return "mathQuestPlayer_"+player.name.toLowerCase().replace(/[^a-z0-9áéíóúãõç]+/gi,"_");}
function savePlayer(){player.customization=customization;localStorage.setItem(storageKey(),JSON.stringify(player));}

function buildGradeOptions(){
  const box=document.getElementById("gradeOptions");box.innerHTML="";
  Object.entries(gradeProfiles).forEach(([id,p])=>{
    const b=document.createElement("button");
    b.className="grade-card"+(player.grade===id?" selected":"");
    b.innerHTML=`<div class="grade-number">${p.label}</div><strong>${p.title}</strong><span>${p.description}</span><b>→</b>`;
    b.onclick=()=>{selectedGrade=id;player.grade=id;document.querySelectorAll(".grade-card").forEach(x=>x.classList.remove("selected"));b.classList.add("selected");setTimeout(openCharacterEditor,120);};
    box.appendChild(b);
  });
}
function openCharacterEditor(){
  buildCharacterEditor();
  document.getElementById("editorPoints").textContent=player.points;
  document.getElementById("previewPoints").textContent=player.points;
  document.getElementById("previewLevel").textContent=player.level;
  document.getElementById("previewXp").textContent=(player.xp%100)+" / 100 XP";
  document.getElementById("previewXpBar").style.width=(player.xp%100)+"%";
  showScreen("characterScreen");
}
function startLogin(){
  const input=document.getElementById("playerName"),name=input.value.trim();
  if(!name){input.focus();return;}
  player.name=name;loadPlayer();selectedGrade=player.grade||"g5";buildGradeOptions();showScreen("gradeScreen");
}
document.getElementById("startButton").onclick=startLogin;
document.getElementById("playerName").addEventListener("keydown",e=>{if(e.key==="Enter")startLogin();});
document.getElementById("gradeBack").onclick=()=>showScreen("loginScreen");
document.getElementById("enterGameButton").onclick=()=>{
  player.customization=JSON.parse(JSON.stringify(customization));
  savePlayer();
  updateDashboard();
  showScreen("menuScreen");
};
document.getElementById("editorBack").onclick=()=>{savePlayer();buildGradeOptions();showScreen("gradeScreen");};


function updateDashboard(){
  const profile=gradeProfiles[player.grade]||gradeProfiles.g5;
  document.getElementById("dashboardName").textContent=player.name;
  document.getElementById("dashboardGrade").textContent=profile.label;
  document.getElementById("dashboardLevel").textContent="Nível "+player.level;
  document.getElementById("totalPoints").textContent=player.points;
  document.getElementById("recordPoints").textContent=player.record;
  document.getElementById("smallCharacter").innerHTML=createCharacterSVG();
  const xp=player.xp%100;
  document.getElementById("xpText").textContent=`${xp} / 100 XP`;
  document.getElementById("xpBar").style.width=xp+"%";
  document.getElementById("gradeBadge").textContent=profile.label.toUpperCase();
  document.getElementById("gradeTitle").textContent=profile.title;
  document.getElementById("gradeDescription").textContent=profile.description;
  buildMissionGrid();
  updateRanking();
}
function buildMissionGrid(){
  const profile=gradeProfiles[player.grade]||gradeProfiles.g5;
  const box=document.getElementById("missionGrid");box.innerHTML="";
  profile.modes.forEach(([mode,title,subtitle,color])=>{
    const b=document.createElement("button");b.className="mission-card"+(color==="gold"?" featured":"")+(color==="red"?" boss":"");
    const icon={blue:"+",purple:"−",orange:"×",green:"÷",gold:"M",red:"★"}[color]||"•";
    b.innerHTML=`<div class="mission-icon ${color}">${icon}</div><div><strong>${title}</strong><span>${subtitle}</span></div><b>→</b>`;
    b.onclick=()=>startGame(mode);
    box.appendChild(b);
  });
}
function updateRanking(){fetchOnlineRanking();}

function setRankingStatus(text,kind=''){
  const el=document.getElementById('rankingStatus');
  if(el){el.textContent=text;el.className='ranking-status '+kind;}
}
function characterForRanking(){return customization.animal||'fox';}
function localRankingFallback(){
  const players=[];
  for(let i=0;i<localStorage.length;i++){
    const key=localStorage.key(i);
    if(key&&key.startsWith('mathQuestPlayer_')){
      try{
        const p=JSON.parse(localStorage.getItem(key));
        if((p.grade||'g5')===(player.grade||'g5')) players.push(p);
      }catch(e){}
    }
  }
  if(!players.some(p=>p.name===player.name)) players.push(player);
  return players.sort((a,b)=>(b.points||0)-(a.points||0)).slice(0,50);
}
async function fetchOnlineRanking(){
  try{
    const r=await fetch('/api/ranking?grade='+encodeURIComponent(player.grade||'g5'),{cache:'no-store'});
    if(!r.ok) throw new Error('offline');
    const data=await r.json();
    setRankingStatus('● Ranking online','');
    renderRanking(data.players||[]);
    return true;
  }catch(e){
    setRankingStatus('● Ranking local — servidor não conectado','offline');
    renderRanking(localRankingFallback());
    return false;
  }
}
function renderRanking(players){
  const box=document.getElementById('ranking');
  if(!box)return;
  box.innerHTML='';
  players.slice(0,10).forEach((p,i)=>{
    const row=document.createElement('div');
    row.className='ranking-row';
    const medal=i===0?'🥇':i===1?'🥈':i===2?'🥉':'#'+(i+1);
    row.innerHTML=`<strong>${medal}</strong><div class="ranking-player"><div class="rank-avatar">${createCharacterSVG()}</div><strong>${escapeHTML(p.name)}</strong></div><div class="rank-points">${Number(p.points)||0}</div><div class="rank-level">Nível ${Number(p.level)||1}</div>`;
    box.appendChild(row);
  });
}
async function sendScoreOnline(){
  try{
    setRankingStatus('● Salvando pontuação...','sync');
    let id=localStorage.getItem('mathQuestDeviceId');
    if(!id){
      id='mq-'+Date.now().toString(36)+'-'+Math.random().toString(36).slice(2,10);
      localStorage.setItem('mathQuestDeviceId',id);
    }
    const r=await fetch('/api/score',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({
        id,
        name:player.name,
        score:game.score,
        level:player.level,
        character:characterForRanking(),
        grade:player.grade||'g5'
      })
    });
    if(!r.ok)throw new Error('save');
    const data=await r.json();
    setRankingStatus('● Ranking online','');
    renderRanking(data.players||[]);
    return true;
  }catch(e){
    setRankingStatus('● Pontuação salva neste tablet','offline');
    return false;
  }
}

function escapeHTML(text){const d=document.createElement("div");d.textContent=text;return d.innerHTML;}

function startGame(mode){
  cancelTimer();
  const profile=gradeProfiles[player.grade]||gradeProfiles.g5;
  game={mode,grade:player.grade,question:0,totalQuestions:profile.questions,answer:0,lives:profile.lives,score:0,correct:0,wrong:0,combo:0,bestCombo:0,locked:false,timeLimit:profile.time,deadline:0,animationFrame:null};
  showScreen("gameScreen");updateGameHeader();nextQuestion();
}
function nextQuestion(){
  cancelTimer();
  if(game.question>=game.totalQuestions){finishGame("complete");return;}
  if(game.lives<=0){finishGame("lives");return;}
  game.question++;game.locked=false;
  const q=generateQuestion(game.mode,game.grade);game.answer=q.answer;
  document.getElementById("questionNumber").textContent=game.question;
  document.querySelector(".question-counter span").textContent=" / "+game.totalQuestions;
  document.getElementById("questionType").textContent=q.type;
  document.getElementById("questionText").textContent=q.text;
  document.getElementById("feedback").textContent="";
  document.getElementById("answers").innerHTML="";
  document.getElementById("timerText").textContent=game.timeLimit.toFixed(1);
  document.getElementById("timerBar").style.width="100%";
  createAnswers(q.answer,q.options);updateGameHeader();startTimer();
}
function makeNear(answer,step=1,spread=10){
  const vals=[answer];let tries=0;
  while(vals.length<4&&tries<100){tries++;
    const delta=Math.floor(Math.random()*Math.max(2,spread*2+1))-Math.max(1,spread);
    let v=typeof answer==="number"&&answer%1!==0?Number((answer+delta*step).toFixed(1)):answer+delta*step;
    if(v>=0&&!vals.includes(v))vals.push(v);
  }
  while(vals.length<4){const v=answer+vals.length;if(!vals.includes(v))vals.push(v);}
  return vals;
}
function generateQuestion(mode,grade){
  const r=(a,b)=>random(a,b);
  let op=mode;
  if(mode==="mixed"||mode==="boss"){
    const ops={
      pre1:["count","compare","sequence","shapes"],pre2:["count","addition","subtraction","sequence"],
      g1:["addition","subtraction","sequence","compare"],g2:["addition","subtraction","multiplication","division"],
      g3:["addition","subtraction","multiplication","division"],g4:["addition","subtraction","multiplication","fraction"],
      g5:["addition","subtraction","multiplication","division","fraction","decimal","percent"]
    };
    const list=ops[grade]||ops.g5;op=list[r(0,list.length-1)];
  }
  let a,b,answer,text,type,options;
  if(op==="count"){
    const max=grade==="pre1"?5:10,n=r(1,max);answer=n;text=`Conte: ${"● ".repeat(n).trim()} = ?`;type="CONTAGEM";options=makeNear(answer,1,Math.min(4,answer+2));
  }else if(op==="compare"){
    a=r(1,grade==="pre1"?8:20);b=r(1,grade==="pre1"?8:20);if(a===b)b++;
    answer=Math.max(a,b);text=`Qual é o maior: ${a} ou ${b}?`;type="MAIOR NÚMERO";options=[a,b,...makeNear(answer,1,4).filter(v=>v!==a&&v!==b)].slice(0,4);
  }else if(op==="sequence"){
    const step=grade==="pre1"?1:r(1,3),start=r(1,10);answer=start+step*3;
    text=`Complete: ${start} • ${start+step} • ${start+step*2} • ?`;type="SEQUÊNCIA";options=makeNear(answer,1,4);
  }else if(op==="shapes"){
    const shapes=[["círculo",0],["quadrado",4],["triângulo",3]],picked=shapes[r(0,2)];
    answer=picked[1];text=`Quantos lados tem um ${picked[0]}?`;type="FORMAS";options=makeNear(answer,1,4);
  }else if(op==="addition"){
    const max=grade==="pre2"?20:grade==="g1"?50:grade==="g2"?100:grade==="g3"?1000:grade==="g4"?5000:5000;
    a=r(1,Math.floor(max*.6));b=r(1,Math.floor(max*.4));answer=a+b;text=`${a} + ${b} = ?`;type="ADIÇÃO";options=makeNear(answer,2,Math.max(5,Math.floor(max*.05)));
  }else if(op==="subtraction"){
    const max=grade==="pre2"?20:grade==="g1"?50:grade==="g2"?100:grade==="g3"?1000:grade==="g4"?5000:8000;
    a=r(Math.ceil(max*.4),max);b=r(1,Math.floor(max*.35));if(b>a)b=a;answer=a-b;text=`${a} − ${b} = ?`;type="SUBTRAÇÃO";options=makeNear(answer,2,Math.max(5,Math.floor(max*.04)));
  }else if(op==="multiplication"){
    const maxA=grade==="g2"?5:grade==="g3"?10:12;a=r(2,maxA);b=r(2,12);answer=a*b;text=`${a} × ${b} = ?`;type="MULTIPLICAÇÃO";options=makeNear(answer,5,20);
  }else if(op==="division"){
    const divisor=r(2,grade==="g2"?5:12),quotient=r(2,grade==="g2"?10:20);a=divisor*quotient;answer=quotient;text=`${a} ÷ ${divisor} = ?`;type="DIVISÃO";options=makeNear(answer,1,10);
  }else if(op==="fraction"){
    const den=r(2,8),num=r(1,den-1);answer=num;text=`Quanto é ${num}/${den} de ${den}?`;type="FRAÇÃO";options=makeNear(answer,1,den+2);
  }else if(op==="decimal"){
    const x=r(10,90)/10,y=r(10,90)/10;answer=Number((x+y).toFixed(1));text=`${x.toFixed(1)} + ${y.toFixed(1)} = ?`;type="DECIMAIS";options=makeNear(answer,.1,1);
  }else if(op==="percent"){
    const percent=[10,20,25,50][r(0,3)],base=[20,40,60,80,100][r(0,4)];answer=base*percent/100;text=`${percent}% de ${base} = ?`;type="PORCENTAGEM";options=makeNear(answer,1,10);
  }
  return {text,answer,type,options};
}

function createAnswers(correct,providedOptions){
const values=providedOptions&&providedOptions.length===4?[...providedOptions]:[correct];
while(values.length<4){
const delta=random(-15,15),wrong=correct+delta;
if(wrong>=0&&!values.includes(wrong))values.push(wrong);
}
shuffle(values);
const box=document.getElementById("answers");
values.forEach(value=>{
const button=document.createElement("button");button.className="answer-button";button.textContent=value;
button.onclick=()=>answerQuestion(button,value);box.appendChild(button);
});
}

function startTimer(){
cancelTimer();
game.deadline=performance.now()+game.timeLimit*1000;
const text=document.getElementById("timerText"),bar=document.getElementById("timerBar");
function tick(){
if(game.locked)return;
const remaining=game.deadline-performance.now();
if(remaining<=0){text.textContent="0.0";bar.style.width="0%";cancelTimer();timeExpired();return;}
const seconds=remaining/1000;
text.textContent=seconds.toFixed(1);
bar.style.width=Math.max(0,Math.min(100,seconds/game.timeLimit*100))+"%";
const danger=seconds<=5;
text.classList.toggle("danger",danger);bar.classList.toggle("danger",danger);
game.animationFrame=requestAnimationFrame(tick);
}
game.animationFrame=requestAnimationFrame(tick);
}

function cancelTimer(){
if(game.animationFrame!==null){cancelAnimationFrame(game.animationFrame);game.animationFrame=null;}
}

function timeExpired(){
if(game.locked)return;
game.locked=true;game.wrong++;game.combo=0;
document.getElementById("feedback").textContent="Tempo esgotado. O desafio terminou.";
document.getElementById("feedback").style.color="#ff5b68";
document.querySelectorAll(".answer-button").forEach(b=>{if(Number(b.textContent)===game.answer)b.classList.add("correct");});
setTimeout(()=>finishGame("time"),900);
}

function answerQuestion(button,value){
if(game.locked)return;
game.locked=true;cancelTimer();
if(value===game.answer){
button.classList.add("correct");game.correct++;game.combo++;game.bestCombo=Math.max(game.bestCombo,game.combo);
const remaining=Math.max(0,game.deadline-performance.now())/1000;
const gained=10+Math.floor(remaining)+Math.min(game.combo*2,20);
game.score+=gained;
document.getElementById("feedback").textContent=`Resposta correta! +${gained} pontos`;
document.getElementById("feedback").style.color="#20a875";
document.getElementById("questionText").classList.add("pop");
}else{
button.classList.add("wrong");game.wrong++;game.lives--;game.combo=0;
document.getElementById("feedback").textContent=`Resposta correta: ${game.answer}`;
document.getElementById("feedback").style.color="#ff5b68";
document.querySelectorAll(".answer-button").forEach(b=>{if(Number(b.textContent)===game.answer)b.classList.add("correct");});
}
updateGameHeader();
setTimeout(()=>{if(game.lives<=0)finishGame("lives");else nextQuestion();},850);
}

function updateGameHeader(){
document.getElementById("roundPoints").textContent=game.score;
document.getElementById("combo").textContent="x"+game.combo;
[1,2,3].forEach(n=>document.getElementById("life"+n).classList.toggle("active",n<=game.lives));
}

function finishGame(reason){
cancelTimer();
player.points+=game.score;player.xp+=game.score;player.record=Math.max(player.record,game.score);player.level=Math.floor(player.xp/100)+1;savePlayer();sendScoreOnline();
document.getElementById("resultCharacter").innerHTML=createCharacterSVG(player.character);
document.getElementById("finalPoints").textContent=game.score;
document.getElementById("correctCount").textContent=game.correct;
document.getElementById("wrongCount").textContent=game.wrong;
const total=game.correct+game.wrong;
document.getElementById("accuracy").textContent=(total?Math.round(game.correct/total*100):0)+"%";
document.getElementById("bestCombo").textContent=game.bestCombo;
const title=document.getElementById("resultTitle"),message=document.getElementById("resultMessage");
if(reason==="time"){title.textContent="Tempo encerrado!";message.textContent="O tempo acabou e a missão foi finalizada."}
else if(reason==="lives"){title.textContent="Suas vidas acabaram";message.textContent="Continue praticando e tente novamente."}
else if(game.correct>=8){title.textContent="Excelente!";message.textContent="Você teve um ótimo desempenho!"}
else if(game.correct>=5){title.textContent="Muito bem!";message.textContent="Você está evoluindo."}
else{title.textContent="Boa tentativa!";message.textContent="Pratique mais uma vez para melhorar."}
showScreen("resultScreen");
}

document.getElementById("backMenu").onclick=()=>{updateDashboard();showScreen("menuScreen");};
document.getElementById("exitGame").onclick=()=>{cancelTimer();showScreen("menuScreen");};

function random(min,max){return Math.floor(Math.random()*(max-min+1))+min;}
function shuffle(a){for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}}


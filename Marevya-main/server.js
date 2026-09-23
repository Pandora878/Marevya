const http = require('http');
const fs = require('fs');
const path = require('path');
const os = require('os');
const crypto = require('crypto');

const PORT = Number(process.env.PORT || 3000);
const ROOT = __dirname;
const DATA = path.join(ROOT, 'ranking.json');

function readRanking(){
  try { return JSON.parse(fs.readFileSync(DATA,'utf8')); }
  catch { return []; }
}
function writeRanking(data){ fs.writeFileSync(DATA, JSON.stringify(data,null,2), 'utf8'); }
function cleanName(v){ return String(v || '').trim().slice(0,30); }
function safeCharacter(v){ return ['fox','panda','cat','rabbit','dog','tiger'].includes(v) ? v : 'fox'; }
function safeGrade(v){ return ['pre1','pre2','g1','g2','g3','g4','g5'].includes(v) ? v : 'g5'; }
function getIps(){
  const list=[];
  for(const items of Object.values(os.networkInterfaces())) for(const n of (items||[])){
    if(n.family==='IPv4' && !n.internal) list.push(n.address);
  }
  return list;
}
function send(res,status,type,body){
  res.writeHead(status, {'Content-Type':type,'Cache-Control':'no-store','Access-Control-Allow-Origin':'*'});
  res.end(body);
}
function json(res,status,obj){ send(res,status,'application/json; charset=utf-8',JSON.stringify(obj)); }
function parseBody(req){
  return new Promise((resolve,reject)=>{
    let data='';
    req.on('data',chunk=>{ data+=chunk; if(data.length>100000) req.destroy(); });
    req.on('end',()=>{try{resolve(data?JSON.parse(data):{})}catch(e){reject(e)}});
    req.on('error',reject);
  });
}
function rankSort(a,b){ return (b.points-a.points) || a.name.localeCompare(b.name,'pt-BR'); }

const server=http.createServer(async (req,res)=>{
  const url=new URL(req.url,`http://${req.headers.host}`);
  if(req.method==='OPTIONS'){res.writeHead(204,{'Access-Control-Allow-Origin':'*','Access-Control-Allow-Methods':'GET,POST,OPTIONS','Access-Control-Allow-Headers':'Content-Type'});return res.end();}

  if(url.pathname==='/api/ranking' && req.method==='GET'){
    const grade=safeGrade(url.searchParams.get('grade')||'g5');
    const players=readRanking().filter(p=>(p.grade||'g5')===grade).sort(rankSort).slice(0,50);
    return json(res,200,{online:true,grade,players});
  }
  if(url.pathname==='/api/score' && req.method==='POST'){
    try{
      const body=await parseBody(req);
      const name=cleanName(body.name);
      const score=Math.max(0,Math.floor(Number(body.score)||0));
      const level=Math.max(1,Math.floor(Number(body.level)||1));
      const character=safeCharacter(body.character);
      const grade=safeGrade(body.grade);
      if(!name) return json(res,400,{error:'Nome obrigatório'});
      const id=String(body.id||'').slice(0,80) || crypto.createHash('sha1').update(name.toLowerCase()).digest('hex');
      const data=readRanking();
      let p=data.find(x=>x.id===id);
      if(!p){p={id,name,points:0,level:1,character,grade,updatedAt:Date.now()};data.push(p);}
      p.name=name;p.points=Math.max(0,p.points)+score;p.level=Math.max(p.level,level);p.character=character;p.grade=grade;p.updatedAt=Date.now();
      writeRanking(data.sort(rankSort));
      return json(res,200,{ok:true,player:p,players:data.slice(0,50)});
    }catch(e){return json(res,500,{error:'Não foi possível salvar a pontuação'});}
  }
  if(url.pathname==='/api/reset' && req.method==='POST'){
    // Reset protegido por uma chave simples enviada pelo administrador local.
    try{const body=await parseBody(req);if(body.key!==process.env.ADMIN_KEY) return json(res,403,{error:'Acesso negado'});writeRanking([]);return json(res,200,{ok:true});}
    catch{return json(res,500,{error:'Erro'});}
  }

  let filePath=path.normalize(path.join(ROOT,url.pathname==='/'?'index.html':url.pathname));
  if(!filePath.startsWith(ROOT)) return send(res,403,'text/plain','Acesso negado');
  if(!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) return send(res,404,'text/plain','Arquivo não encontrado');
  const ext=path.extname(filePath).toLowerCase();
  const types={'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.json':'application/json; charset=utf-8','.bat':'text/plain; charset=utf-8','.txt':'text/plain; charset=utf-8'};
  res.writeHead(200,{'Content-Type':types[ext]||'application/octet-stream','Cache-Control':'no-store'});
  fs.createReadStream(filePath).pipe(res);
});

server.listen(PORT,'0.0.0.0',()=>{
  console.log('');
  console.log('============================================');
  console.log('          MATH QUEST - RANKING ONLINE');
  console.log('============================================');
  console.log(`Computador: http://localhost:${PORT}`);
  for(const ip of getIps()) console.log(`Tablet (mesma Wi-Fi): http://${ip}:${PORT}`);
  console.log('');
  console.log('Deixe esta janela aberta enquanto os tablets jogam.');
  console.log('O ranking fica salvo em ranking.json.');
  console.log('');
});

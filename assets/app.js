const PRODUCTS = [
  {id:'aurea-495', name:'Auréa', family:'Marevya Signature', people:6, size:'200 × 200 cm', jets:'0–12 jatos configuráveis', price:14990, page:'', image:'assets/modelos/banheira-0-jatos.jpg', note:'Modelo assinatura · motor incluso · configuração personalizada', desc:'SPA Marevya com configuração personalizada de jatos e sistemas complementares.'},
  {id:'j495', name:'J-495™', family:'Marevya Signature', people:9, size:'231 × 231 cm', jets:'69 jatos PowerPro®', price:59990, page:'https://www.jacuzzi.com.br/produto/spa-jacuzzi-j495-9-pessoas/', image:'https://files.greatpages.com.br/arquivos/paginas_editor/443664-fc994c6605245ea975d62a686f6ef6d6.jpg', note:'9 lugares · 4 bombas · 1.893 L', desc:'SPA de alta capacidade da linha J-Series, com 69 jatos PowerPro®, 4 bombas e recursos avançados de conforto.'},
  {id:'j475', name:'J-475™', family:'Marevya Signature', people:6, size:'231 × 231 cm', jets:'53 jatos PowerPro®', price:52990, page:'https://www.jacuzzi.com.br/produto/spa-jacuzzi-j475-6-pessoas/', image:'https://files.greatpages.com.br/arquivos/paginas_editor/443664-4708803ff1ed16d5fe941d98af4c0b1f.jpg', note:'6 lugares · 3 bombas · 1.666 L', desc:'Design de encosto alto, chaise-long, cascata iluminada e recursos avançados de hidroterapia.'},
  {id:'j355', name:'J-355™', family:'Marevya Signature', people:6, size:'231 × 214 cm', jets:'42 jatos PowerPro®', price:39990, page:'https://www.jacuzzi.com.br/produto/spa-jacuzzi-j355-6-pessoas/', image:'https://files.greatpages.com.br/arquivos/paginas_editor/443664-dd09f1172f1de7862388bb438828164b.jpg', note:'6 lugares · 3 bombas · 1.363 L', desc:'Modelo J-Series para compartilhar com família e amigos, com chaise-long e recursos de bem-estar.'},
  {id:'j220', name:'J-220™', family:'Marevya Signature', people:7, size:'210 × 210 × 91 cm', jets:'35 jatos Easeflow', price:24990, page:'https://www.jacuzzi.com.br/produto/spa-jacuzzi-j220-7-pessoas/', image:'https://www.jacuzzi.com.br/wp-content/webp-express/webp-images/uploads/2024/07/J-220-novo-scaled.png.webp', note:'7 lugares · 2 bombas · 1.300 L', desc:'SPA espaçoso com 7 lugares, 35 jatos Easeflow, aquecedor, cromoterapia e cascata.'},
  {id:'j220l', name:'J-220L™', family:'Marevya Signature', people:6, size:'210 × 210 × 91 cm', jets:'37 jatos Easeflow', price:26990, page:'https://www.jacuzzi.com.br/produto/j-220l/', image:'https://www.jacuzzi.com.br/wp-content/webp-express/webp-images/uploads/2024/07/J-220L-novo-scaled.png.webp', note:'6 lugares · chaise-long · 1.250 L', desc:'Versão com chaise-long, 37 jatos Easeflow, aquecedor, cromoterapia, cascata e Smart Drain™.'},
  {id:'j195', name:'J-195™', family:'Marevya Signature', people:7, size:'180 × 180 × 89 cm', jets:'33 jatos Classic', price:20990, page:'https://www.jacuzzi.com.br/produto/spa-jacuzzi-j195-7-pessoas/', image:'https://www.jacuzzi.com.br/wp-content/webp-express/webp-images/uploads/2024/01/Jatos-funcionando-J195.jpg.webp', note:'7 lugares · 2 bombas · 860 L', desc:'Modelo compacto com 7 lugares, 33 jatos Classic, aquecimento, cromoterapia e filtração automática.'},
  {id:'j195l', name:'J-195L™', family:'Marevya Signature', people:5, size:'180 × 180 × 89 cm', jets:'31 dispositivos de hidroterapia', price:19990, page:'https://www.jacuzzi.com.br/produto/spa-jacuzzi-j195l-5-pessoas/', image:'https://www.jacuzzi.com.br/wp-content/webp-express/webp-images/uploads/2024/01/Foto1-13.jpg.webp', note:'5 lugares · chaise-long · 860 L', desc:'SPA compacto com chaise-long, 31 dispositivos de hidroterapia, cromoterapia e cobertura térmica.'},
  {id:'j185vip', name:'J-185 VIP™', family:'Marevya Signature', people:7, size:'180 × 180 × 89 cm', jets:'32 jatos', price:22990, page:'https://www.jacuzzi.com.br/produto/spa-jacuzzi-j185-vip-7-pessoas/', image:'https://www.jacuzzi.com.br/wp-content/webp-express/webp-images/uploads/2024/01/J-185-VIP-scaled.jpg.webp', note:'7 lugares · 2 bombas · 860 L', desc:'Compact premium com 32 jatos, 2 bombas, aquecedor, cromoterapia e cobertura térmica.'},
  {id:'j210', name:'J-210™', family:'Marevya Signature', people:4, size:'Ø 200 × 88 cm', jets:'18 jatos', price:16990, page:'https://www.jacuzzi.com.br/produto/spa-jacuzzi-j210-4-pessoas-2/', image:'https://www.jacuzzi.com.br/wp-content/webp-express/webp-images/uploads/2024/01/spa-jacuzzi-j210-4pessoas3-1.jpeg.webp', note:'4 lugares · 2 bombas · 850 L', desc:'Modelo compacto para espaços menores, com 18 jatos, aquecedor, cromoterapia e filtração automática.'},
  {id:'meridian-plus', name:'Meridian Plus', family:'Marevya Collection', people:8, size:'214 × 214 × 91 cm', jets:'23 jatos', price:32990, page:'https://www.jacuzzi.com.br/produto/spa-jacuzzi-meridian-plus-8-pessoas/', image:'https://www.jacuzzi.com.br/wp-content/webp-express/webp-images/uploads/2024/01/MERIDIAN-PLUS-4.jpg.webp', note:'8 lugares · 2 bombas · 1.500 L', desc:'SPA Meridian Plus para 8 adultos, com 23 jatos, cromoterapia, 8 apoios de cabeça e filtração automática.'},
  {id:'aura', name:'Aura', family:'Marevya Acessível', people:2, size:'160 × 120 × 70 cm', jets:'12 jatos', price:7490, page:'', image:'https://www.jacuzzi.com.br/wp-content/webp-express/webp-images/uploads/2024/07/J-220-novo-scaled.png.webp', note:'2 lugares · compacto · 650 L', desc:'SPA compacto e econômico para casal, pensado para varandas, áreas gourmet e espaços menores.'},
  {id:'brisa', name:'Brisa', family:'Marevya Acessível', people:3, size:'170 × 140 × 72 cm', jets:'16 jatos', price:8490, page:'', image:'https://www.jacuzzi.com.br/wp-content/webp-express/webp-images/uploads/2024/07/J-220L-novo-scaled.png.webp', note:'3 lugares · 1 bomba · 780 L', desc:'Modelo compacto para quem quer ter um SPA em casa com investimento mais acessível.'},
  {id:'serena', name:'Serena', family:'Marevya Acessível', people:4, size:'180 × 150 × 75 cm', jets:'18 jatos', price:9490, page:'', image:'https://www.jacuzzi.com.br/wp-content/webp-express/webp-images/uploads/2024/01/spa-jacuzzi-j210-4pessoas3-1.jpeg.webp', note:'4 lugares · 1 bomba · 900 L', desc:'SPA familiar compacto, com espaço para quatro pessoas e configuração voltada ao lazer diário.'},
  {id:'laguna', name:'Laguna', family:'Marevya Acessível', people:4, size:'190 × 160 × 78 cm', jets:'20 jatos', price:10490, page:'', image:'https://www.jacuzzi.com.br/wp-content/webp-express/webp-images/uploads/2024/01/Foto1-13.jpg.webp', note:'4 lugares · chaise · 980 L', desc:'Versão com chaise para relaxamento, ideal para pequenos quintais e áreas de lazer.'},
  {id:'essenza', name:'Essenza', family:'Marevya Acessível', people:5, size:'200 × 180 × 80 cm', jets:'22 jatos', price:11490, page:'', image:'https://www.jacuzzi.com.br/wp-content/webp-express/webp-images/uploads/2024/01/Jatos-funcionando-J195.jpg.webp', note:'5 lugares · 1 bomba · 1.100 L', desc:'SPA de cinco lugares com proposta equilibrada entre espaço, conforto e preço.'},
  {id:'nativa', name:'Nativa', family:'Marevya Acessível', people:5, size:'200 × 190 × 82 cm', jets:'24 jatos', price:12490, page:'', image:'https://files.greatpages.com.br/arquivos/paginas_editor/443664-dd09f1172f1de7862388bb438828164b.jpg', note:'5 lugares · 2 bombas · 1.180 L', desc:'Modelo intermediário para famílias que querem mais espaço sem chegar aos valores dos modelos premium.'},
  {id:'zen', name:'Zen', family:'Marevya Acessível', people:6, size:'210 × 190 × 84 cm', jets:'26 jatos', price:13990, page:'', image:'https://files.greatpages.com.br/arquivos/paginas_editor/443664-4708803ff1ed16d5fe941d98af4c0b1f.jpg', note:'6 lugares · 2 bombas · 1.300 L', desc:'SPA de seis lugares para áreas de lazer maiores, com proposta de custo mais acessível.'},
  {id:'marina', name:'Marina', family:'Marevya Acessível', people:6, size:'210 × 200 × 85 cm', jets:'28 jatos', price:14990, page:'', image:'https://files.greatpages.com.br/arquivos/paginas_editor/443664-fc994c6605245ea975d62a686f6ef6d6.jpg', note:'6 lugares · 2 bombas · 1.350 L', desc:'Modelo espaçoso de entrada para famílias, com mais lugares e uma faixa de preço reduzida.'}
];

const EXTRAS = [
  {id:'mini-jatos', icon:'droplet', name:'Mini jatos', price:null, desc:'Jatos menores para pontos específicos — configuração sob consulta', included:false},
  {id:'cromo', icon:'light', name:'Cromoterapia adicional', price:590, desc:'Mais pontos de iluminação para ampliar a experiência', included:false},
  {id:'led', icon:'light', name:'LED adicional', price:490, desc:'Iluminação LED adicional para o projeto', included:false},
  {id:'filtro-normal', icon:'shield', name:'Filtro normal', price:1600, desc:'Sistema de filtragem padrão · valor de referência pesquisado', included:false},
  {id:'filtro-areia', icon:'waterfall', name:'Filtro de areia', price:1750, desc:'Filtragem de maior capacidade e eficiência · valor de referência pesquisado', included:false},
  {id:'ozonio', icon:'droplet', name:'Tratamento com ozônio', price:980, desc:'Sistema complementar para tratamento da água · valor de referência pesquisado', included:false},
  {id:'ionizador', icon:'light', name:'Tratamento ionizador', price:395.56, desc:'Sistema complementar de tratamento da água · valor de referência pesquisado', included:false},
  {id:'blauer', icon:'spa', name:'Blauer · motor + 10 borbulhadores', price:1750, desc:'Motor + 10 borbulhadores · valor de referência pesquisado', included:false},
  {id:'aquecedor', icon:'heat', name:'Aquecedor', price:0, desc:'Aquecimento da água para uso confortável', included:true},
  {id:'capa', icon:'cover', name:'Cobertura térmica', price:0, desc:'Proteção e conservação da temperatura', included:true},
  {id:'smart', icon:'phone', name:'SmartTub™', price:1490, desc:'Controle e acompanhamento pelo aplicativo', included:false},
  {id:'clearray', icon:'shield', name:'Purificação UV', price:990, desc:'Purificação da água, conforme a configuração', included:false},
  {id:'escada', icon:'steps', name:'Escada', price:690, desc:'Acesso confortável ao SPA', included:false},
  {id:'fechamento', icon:'layers', name:'Fechamento lateral', price:2490, desc:'Acabamento externo para instalação', included:false}
];
const BASE_JETS = 0;
const MAX_JETS = 12;
const EXTRA_JET_PRICE = 290;
const CUSTOMIZER_GALLERY = [
  'assets/modelos/banheira-0-jatos.jpg',
  'assets/modelos/banheira-4-jatos.jpg',
  'assets/modelos/banheira-8-jatos.jpg',
  'assets/modelos/banheira-12-jatos.jpg'
];
const JET_VARIANTS = [0,4,8,12];
const JET_VARIANT_IMAGE = n => `assets/modelos/banheira-${n}-jatos.jpg`;
const JET_POINTS = [
  [48,14],[17,40],[17,66],[82,40],[82,66],
  [48,88],[30,28],[67,28],[29,54],[71,54],[31,78],[69,78]
];


const BRL=n=>n.toLocaleString('pt-BR',{style:'currency',currency:'BRL'});
const moneyOrQuote=n=>n?BRL(n):'Sob consulta';
const getCart=()=>JSON.parse(localStorage.getItem('marevya_cart')||'[]');
const setCart=c=>localStorage.setItem('marevya_cart',JSON.stringify(c));
const getProduct=id=>PRODUCTS.find(p=>p.id===id)||PRODUCTS[0];
const icon=(name,cls='')=>{const map={search:'<circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/>',user:'<circle cx="12" cy="7" r="4"/><path d="M5 21a7 7 0 0 1 14 0"/>',cart:'<path d="M3 4h2l2 11h10l3-8H7"/><circle cx="9" cy="20" r="1"/><circle cx="18" cy="20" r="1"/>',arrow:'<path d="M5 12h14M13 6l6 6-6 6"/>',check:'<path d="m5 12 4 4L19 6"/>',spa:'<path d="M12 20c5-2 7-6 7-10-4 0-7 2-7 6 0-4-3-6-7-6 0 4 2 8 7 10Z"/>',droplet:'<path d="M12 2s7 7 7 12a7 7 0 1 1-14 0c0-5 7-12 7-12Z"/>',ruler:'<path d="m3 21 18-18"/><path d="m7 17 3 3M10 14l3 3M13 11l3 3M16 8l3 3"/>',light:'<path d="M9 18h6M10 22h4M8 14a6 6 0 1 1 8 0c-1 1-2 2-2 4h-4c0-2-1-3-2-4Z"/>',heat:'<path d="M12 3v5m0 8v5M6 6l3 3m6 6 3 3M3 12h5m8 0h5M6 18l3-3m6-6 3-3"/>',shield:'<path d="M12 3 20 6v6c0 5-3 8-8 9-5-1-8-4-8-9V6l8-3Z"/><path d="m9 12 2 2 4-4"/>',waterfall:'<path d="M5 5v7a7 7 0 0 0 14 0V5"/><path d="M8 17v2M12 16v4M16 17v2"/>',cover:'<path d="M4 8h16M6 8v8h12V8M8 5h8M9 12h6"/>',phone:'<rect x="7" y="2" width="10" height="20" rx="2"/><path d="M11 18h2"/>',steps:'<path d="M4 19h16M4 15h12M4 11h8M4 7h4"/>',layers:'<path d="m4 8 8-4 8 4-8 4-8-4Z"/><path d="m4 12 8 4 8-4M4 16l8 4 8-4"/>'};return `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">${map[name]||map.spa}</svg>`};

function updateBadges(){const n=getCart().reduce((s,i)=>s+i.qty,0);document.querySelectorAll('.badge').forEach(b=>b.textContent=n);}
function addToCart(id,config={}){const c=getCart();const key=id+'|'+JSON.stringify(config);const found=c.find(i=>i.key===key);if(found)found.qty++;else c.push({key,id,qty:1,config});setCart(c);updateBadges();showToast('Configuração adicionada ao carrinho.');}
function showToast(msg){let t=document.querySelector('#toast');if(!t){t=document.createElement('div');t.id='toast';document.body.appendChild(t)}t.textContent=msg;t.classList.add('show');clearTimeout(window.__toast);window.__toast=setTimeout(()=>t.classList.remove('show'),2400)}

function productCard(p){return `<article class="product-card"><a class="product-image" href="produto.html?id=${p.id}"><img src="${p.image}" alt="${p.name} - SPA" loading="lazy" onerror="this.src='https://www.jacuzzi.com.br/wp-content/webp-express/webp-images/uploads/2024/07/J-220-novo-scaled.png.webp'"><span class="tag">${p.family}</span></a><div class="product-body"><div class="eyebrow">${'MAREVYA'}</div><h3>${p.name}</h3><p>${p.people?`${p.people} pessoas · `:''}${p.size}</p><div class="spec-row"><span>${icon('spa')} ${p.jets}</span><span>${p.note.split('·')[0]}</span></div><div class="price-row"><span>A partir de</span><strong>${moneyOrQuote(p.price)}</strong></div><div class="installment-note">Consulte parcelamento no WhatsApp</div><div class="product-actions"><a href="produto.html?id=${p.id}">Detalhes ${icon('arrow')}</a><a class="mini-custom" href="personalizador.html?id=${p.id}">Personalizar</a></div></div></article>`}

function renderCatalog(){const el=document.querySelector('#catalogGrid');if(!el)return;const search=document.querySelector('#catalogSearch'), family=document.querySelector('#familyFilter');const draw=()=>{const q=(search?.value||'').toLowerCase();const f=family?.value||'all';el.innerHTML=PRODUCTS.filter(p=>(f==='all'||p.family===f)&&(`${p.name} ${p.family} ${p.desc}`.toLowerCase().includes(q))).map(productCard).join('')};search?.addEventListener('input',draw);family?.addEventListener('change',draw);draw();}

function renderProduct(){const root=document.querySelector('#productPage');if(!root)return;const p=getProduct(new URLSearchParams(location.search).get('id'));root.innerHTML=`<section class="product-detail"><div class="detail-photo"><img src="${p.image}" alt="${p.name}"></div><div class="detail-copy"><div class="eyebrow">${p.family}</div><h1>${p.name}</h1><p class="lead">${p.desc}</p><div class="quick-specs"><div>${icon('user')}<b>${p.people||'—'}</b><span>pessoas</span></div><div>${icon('ruler')}<b>${p.size}</b><span>dimensão</span></div><div>${icon('spa')}<b>${p.jets}</b><span>hidroterapia</span></div></div><div class="detail-note">${p.note}</div><div class="detail-price"><span>Preço de referência</span><strong>${moneyOrQuote(p.price)}</strong><small>Instalação, frete e opcionais podem alterar o valor final.</small></div><div class="detail-actions"><a class="btn dark" href="personalizador.html?id=${p.id}">Personalizar este modelo ${icon('arrow')}</a><a class="btn light" target="_blank" rel="noopener" href="https://wa.me/554988814100?text=${encodeURIComponent('Olá! Quero saber mais sobre o SPA Marevya '+p.name+'.')}">Consultar pelo WhatsApp ${icon('arrow')}</a></div><p class="tiny">Valores de vitrine cadastrados pela Marevya para apresentação no site. Confirme disponibilidade, frete, instalação e condições comerciais antes da compra.</p></div></section>`;}

function renderCustomizer(){
  const root=document.querySelector('#customizer');
  if(!root)return;
  const requestedId=new URLSearchParams(location.search).get('id');
  let current=getProduct(requestedId||'aurea-495');
  let jetCount=0;
  let selected=new Set();

  const jetPresets=[0,4,8,12];
  const systemIds=['filtro-normal','filtro-areia','ozonio','ionizador','blauer'];

  root.innerHTML=`
    <section class="config-page">
      <div class="config-breadcrumb"><span>⌂</span><span>Início</span><b>›</b><span>SPAs</span><b>›</b><span id="crumbModel">${current.name}</span><b>›</b><strong>Personalizar</strong></div>
      <div class="config-shell">
        <div class="config-visual-col">
          <div class="config-photo" id="visualPreview">
            <img id="summaryImg" src="${JET_VARIANT_IMAGE(0)}" alt="${current.name} — 0 jatos">
            <button class="config-arrow config-arrow-left" id="prevPhoto" type="button" aria-label="Foto anterior">←</button>
            <button class="config-arrow config-arrow-right" id="nextPhoto" type="button" aria-label="Próxima foto">→</button>
            <div class="photo-caption"><span>Visualização do projeto</span><strong id="photoCaptionCount">0 jatos</strong></div>
          </div>
          <div class="config-thumbs" id="photoThumbs">${JET_VARIANTS.map((n,i)=>`<button type="button" class="config-thumb ${i===0?'active':''}" data-photo-index="${i}" aria-label="Ver ${n} jatos"><img src="${JET_VARIANT_IMAGE(n)}" alt="${n} jatos"><b>${n} jatos</b></button>`).join('')}</div>
        </div>

        <div class="config-controls">
          <div class="config-steps">
            <div class="config-step done"><span>1</span><b>Modelo</b></div><i></i>
            <div class="config-step active"><span>2</span><b>Jatos e motor</b></div><i></i>
            <div class="config-step"><span>3</span><b>Opcionais</b></div><i></i>
            <div class="config-step"><span>4</span><b>Resumo</b></div>
          </div>

          <div class="config-title">
            <div class="eyebrow">MAREVYA SIGNATURE</div>
            <h1>2. Jatos e motor</h1>
            <p>Escolha a quantidade de jatos e personalize seu spa.</p>
          </div>

          <div class="motor-card">
            <div class="motor-icon">⚙</div>
            <div><strong>Motor incluso</strong><span>O motor já está incluído no valor do modelo.</span></div>
          </div>

          <div class="jet-main-card">
            <div class="jet-counter-row">
              <div class="jet-title"><span class="jet-photo-icon">◉</span><div><strong>Quantidade de jatos</strong><small>De 0 a 12 jatos.</small></div></div>
              <div class="big-counter"><button id="removeJet" type="button" aria-label="Remover jatos">−</button><b id="jetCount">0</b><button id="addJet" type="button" aria-label="Adicionar jatos">+</button></div>
            </div>
            <div class="jet-help">Escolha entre 0, 4, 8 ou 12 jatos conforme sua preferência.</div>
            <div class="jet-divider"></div>
            <div class="position-head"><div><strong>Posição dos jatos</strong><small>As posições seguem o padrão do modelo.</small></div><div class="jet-price">Cada jato<br><b>${BRL(EXTRA_JET_PRICE)}</b></div></div>
            <div class="preset-grid">${jetPresets.map(n=>`<button type="button" class="preset-card ${n===0?'active':''}" data-preset="${n}"><span class="preset-image"><img src="${JET_VARIANT_IMAGE(n)}" alt="Banheira com ${n} jatos"></span><b>${n} jatos</b></button>`).join('')}</div>
            <div class="legend-row"><span><i class="legend-dot included"></i>Jato selecionado</span><span><i class="legend-dot add">+</i>Adicionar jato</span><span><i class="legend-dot remove"></i>Remover jato</span></div>
          </div>

          <div class="mini-jet-card">
            <div class="mini-jet-icon">◉</div>
            <div><strong>Mini jatos <em>(opcional)</em></strong><span>Jatos menores para pontos específicos, ideais para relaxamento localizado.</span><b class="mini-jet-price">Sob consulta</b></div>
            <label class="switch"><input type="checkbox" data-extra="mini-jatos"><span></span></label>
          </div>

          <details class="config-optionals systems-panel" open>
            <summary><span class="summary-icon">✦</span><div><strong>Sistemas complementares</strong><small>Escolha os sistemas que deseja adicionar ao seu projeto.</small></div><span class="summary-chevron">⌃</span></summary>
            <div class="config-extra-grid system-grid">${EXTRAS.filter(x=>systemIds.includes(x.id)).map(x=>`<label class="extra system-extra"><input type="checkbox" data-extra="${x.id}"><div class="extra-icon">${icon(x.icon)}</div><div><strong>${x.name}</strong><small>${x.desc}</small><b class="system-price">${x.price?BRL(x.price):'Sob consulta'}</b></div><i>+</i></label>`).join('')}</div><p class="price-source-note">Preços de referência pesquisados em 23/09/2026; o valor final da Marevya pode variar conforme marca, instalação, voltagem, frete e configuração.</p>
          </details>

          <details class="config-optionals more-options">
            <summary>Mais recursos opcionais <span>opcional</span></summary>
            <div class="config-extra-grid">${EXTRAS.filter(x=>!systemIds.includes(x.id)&&x.id!=='mini-jatos').map(x=>`<label class="extra ${selected.has(x.id)?'active':''}"><input type="checkbox" data-extra="${x.id}" ${selected.has(x.id)?'checked':''}><div class="extra-icon">${icon(x.icon)}</div><div><strong>${x.name}</strong><small>${x.desc}${x.price?` · +${BRL(x.price)}`:''}</small></div><i>${selected.has(x.id)?'✓':'+'}</i></label>`).join('')}</div>
          </details>

          <details class="config-optionals">
            <summary>Informações do ambiente <span>opcional</span></summary>
            <div class="measure-grid"><label>Comprimento <em>(opcional)</em><input id="roomW" type="number" min="0" inputmode="numeric" placeholder="Opcional"><span>cm</span></label><label>Largura <em>(opcional)</em><input id="roomD" type="number" min="0" inputmode="numeric" placeholder="Opcional"><span>cm</span></label></div>
          </details>

          <div class="config-model-row">
            <label>Modelo<select id="modelSelect">${PRODUCTS.map(p=>`<option value="${p.id}" ${p.id===current.id?'selected':''}>${p.name}</option>`).join('')}</select></label>
            <div class="model-price"><span>Valor estimado</span><b id="estimate">${moneyOrQuote(current.price)}</b></div>
          </div>

          <div class="live-card"><span class="live-icon">◉</span><div><strong>Visualização em tempo real</strong><span>A imagem é atualizada conforme você escolhe a quantidade de jatos.</span></div></div>
          <div class="config-actions"><button class="btn light" type="button" id="configBack">← Voltar</button><a class="btn dark" id="whatsProject" target="_blank" rel="noopener">Encaminhar para a vendedora →</a></div>
        </div>
      </div>
    </section>`;

  const img=document.querySelector('#summaryImg');
  const refresh=()=>{
    const idx=Math.max(0,JET_VARIANTS.indexOf(jetCount));
    const target=JET_VARIANT_IMAGE(jetCount);
    if(img && img.getAttribute('src')!==target){img.classList.remove('photo-switch');void img.offsetWidth;img.src=target;img.classList.add('photo-switch');}
    document.querySelector('#jetCount').textContent=jetCount; document.querySelector('#removeJet').disabled=jetCount===0; document.querySelector('#addJet').disabled=jetCount===MAX_JETS;
    document.querySelector('#photoCaptionCount').textContent=`${jetCount} jatos`;
    document.querySelector('#crumbModel').textContent=current.name;
    document.querySelectorAll('[data-photo-index]').forEach(b=>b.classList.toggle('active',Number(b.dataset.photoIndex)===idx));
    document.querySelectorAll('[data-preset]').forEach(b=>b.classList.toggle('active',Number(b.dataset.preset)===jetCount));
    const extras=[...document.querySelectorAll('[data-extra]:checked')].map(i=>EXTRAS.find(x=>x.id===i.dataset.extra)).filter(Boolean);
    const extraPrice=extras.reduce((s,x)=>s+(x.price||0),0);
    const totalPrice=(current.price||0)+(jetCount*EXTRA_JET_PRICE)+extraPrice;
    document.querySelector('#estimate').textContent=moneyOrQuote(totalPrice);
    document.querySelectorAll('[data-extra]').forEach(i=>{const box=i.closest('.extra');if(box){box.classList.toggle('active',i.checked);const mark=box.querySelector('i');if(mark)mark.textContent=i.checked?'✓':'+';}});
    const roomW=document.querySelector('#roomW')?.value||'',roomD=document.querySelector('#roomD')?.value||'';
    const room=roomW||roomD?` Espaço informado: ${roomW||'?'} x ${roomD||'?'} cm.`:'';
    const systems=extras.map(x=>x.name).join(', ')||'nenhum';
    const msg=`Olá! Quero encaminhar um projeto Marevya para orçamento. Modelo: ${current.name}. Jatos: ${jetCount}. Motor: incluso. Recursos e sistemas: ${systems}. Valor estimado: ${moneyOrQuote(totalPrice)}.${room} Quero confirmar disponibilidade, medidas, instalação e acabamento.`;
    document.querySelector('#whatsProject').href='https://wa.me/554988814100?text='+encodeURIComponent(msg);
  };
  const setJets=n=>{jetCount=Math.max(0,Math.min(MAX_JETS,n));refresh();};
  document.querySelector('#addJet').onclick=()=>setJets(jetCount+4);
  document.querySelector('#removeJet').onclick=()=>setJets(jetCount-4);
  document.querySelectorAll('[data-preset]').forEach(b=>b.onclick=()=>setJets(Number(b.dataset.preset)));
  document.querySelectorAll('[data-photo-index]').forEach(b=>b.onclick=()=>setJets(JET_VARIANTS[Number(b.dataset.photoIndex)]));
  document.querySelector('#prevPhoto').onclick=()=>setJets(JET_VARIANTS[(JET_VARIANTS.indexOf(jetCount)+JET_VARIANTS.length-1)%JET_VARIANTS.length]);
  document.querySelector('#nextPhoto').onclick=()=>setJets(JET_VARIANTS[(JET_VARIANTS.indexOf(jetCount)+1)%JET_VARIANTS.length]);
  document.querySelectorAll('[data-extra]').forEach(i=>i.onchange=refresh);
  document.querySelector('#modelSelect').onchange=e=>{current=getProduct(e.target.value);setJets(0);};
  document.querySelectorAll('#roomW,#roomD').forEach(i=>i.oninput=refresh);
  document.querySelector('#configBack').onclick=()=>history.back();
  refresh();
}

function renderCart(){const root=document.querySelector('#cartPage');if(!root)return;const c=getCart();if(!c.length){root.innerHTML=`<div class="empty-state"><div class="empty-icon">${icon('spa')}</div><h1>Seu carrinho está vazio.</h1><p>Escolha um SPA e monte seu projeto.</p><a class="btn dark" href="banheiras.html">Ver modelos ${icon('arrow')}</a></div>`;return}root.innerHTML=`<div class="cart-wrap"><div><div class="eyebrow">SEU PROJETO</div><h1>Carrinho</h1>${c.map((item,index)=>{const p=getProduct(item.id);return `<article class="cart-item"><img src="${p.image}" alt="${p.name}"><div class="cart-info"><div class="eyebrow">MAREVYA</div><h3>${p.name}</h3><p>${p.note}</p><div class="cart-price">${moneyOrQuote(p.price)}</div><div class="cart-config">${(item.config?.extras||[]).map(x=>EXTRAS.find(e=>e.id===x)?.name).filter(Boolean).map(x=>`<span>${x}</span>`).join('')}</div></div><div class="cart-qty">${item.qty}×<button data-remove="${index}">Remover</button></div></article>`}).join('')}</div><aside class="cart-side"><div class="eyebrow">ATENDIMENTO</div><h2>Finalize seu projeto com um especialista.</h2><p>Os valores são confirmados de acordo com modelo, instalação e região.</p><a class="btn olive full" target="_blank" href="https://wa.me/554988814100?text=${encodeURIComponent('Olá! Quero orçamento de um projeto Marevya com os modelos escolhidos no carrinho.')}">Falar no WhatsApp ${icon('arrow')}</a><a class="btn light full" href="personalizador.html">Continuar personalizando</a></aside></div>`;document.querySelectorAll('[data-remove]').forEach(b=>b.onclick=()=>{c.splice(+b.dataset.remove,1);setCart(c);updateBadges();renderCart()})}

function header(){document.querySelectorAll('.header').forEach(h=>{window.addEventListener('scroll',()=>h.classList.toggle('scrolled',scrollY>12));const nav=h.querySelector('.nav');const links=h.querySelector('.navlinks');if(nav&&!nav.querySelector('.mobile-nav')&&links){const mobile=document.createElement('div');mobile.className='mobile-nav';mobile.innerHTML=links.innerHTML;nav.appendChild(mobile);}});document.querySelectorAll('.menu-btn').forEach(b=>b.onclick=()=>document.querySelector('.mobile-nav')?.classList.toggle('open'));document.querySelectorAll('.mobile-nav a').forEach(a=>a.addEventListener('click',()=>document.querySelector('.mobile-nav')?.classList.remove('open')))}
function home(){const grid=document.querySelector('#homeProducts');if(grid)grid.innerHTML=PRODUCTS.slice(0,5).map(productCard).join('');const feat=document.querySelector('#featureIcons');if(feat)feat.innerHTML=[['spa','Design & conforto','Modelos pensados para projetos residenciais.'],['droplet','Hidroterapia','Jatos e sistemas de relaxamento por modelo.'],['light','Personalização','Configure recursos e ambiente.'],['shield','Atendimento','Do projeto ao pós-venda.']].map(x=>`<div class="feature">${icon(x[0])}<div><b>${x[1]}</b><span>${x[2]}</span></div></div>`).join('');}

document.addEventListener('DOMContentLoaded',()=>{header();home();renderCatalog();renderProduct();renderCustomizer();renderCart();updateBadges();});

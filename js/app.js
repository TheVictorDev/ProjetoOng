// Basic SPA loader - intercepts links with data-spa attribute and loads pages into #main
document.addEventListener('DOMContentLoaded', ()=>{

  const main = document.getElementById('main');

  // Intercept SPA links
  document.querySelectorAll('a[data-spa]').forEach(a=>{
    a.addEventListener('click', async (e)=>{
      e.preventDefault();
      const href = a.getAttribute('href');
      history.pushState({href}, '', href);
      await loadPage(href);
      setActiveNav(href);
    });
  });

  // Handle back button
  window.addEventListener('popstate', (ev)=>{
    const href = (ev.state && ev.state.href) || location.pathname.split('/').pop() || 'index.html';
    loadPage(href);
    setActiveNav(href);
  });

  // ------------ FIX DO PROBLEMA DO "->" ------------
  async function loadPage(href){
    try{
      const r = await fetch(href);
      let text = await r.text();

      // Remove BOM ou caracteres invisíveis no início
      text = text.replace(/^[\ufeff]+/, '');

      // Marcadores
      const startMarker = '<!-- main-start -->';
      const endMarker   = '<!-- main-end -->';

      const start = text.indexOf(startMarker);
      const end   = text.indexOf(endMarker);

      if(start > -1 && end > -1 && end > start){
        // Recorta exatamente o conteúdo entre os marcadores
        const html = text.substring(start + startMarker.length, end);
        main.innerHTML = html.trim();
      } else {
        // Se der erro, mostra o arquivo inteiro (fallback)
        main.innerHTML = text;
      }

      setupForm();
      window.scrollTo({ top: 0, behavior: 'smooth' });

    }catch(err){
      main.innerHTML = '<p>Erro ao carregar a página.</p>';
      console.error(err);
    }
  }
  // --------------------------------------------------

  function setActiveNav(href){
    document.querySelectorAll('.nav a').forEach(a=>a.removeAttribute('aria-current'));
    document.querySelectorAll('.nav a').forEach(a=>{
      if(a.getAttribute('href')===href) a.setAttribute('aria-current','page');
    });
  }

  // mobile menu toggle
  const ham = document.getElementById('hamburger');
  if(ham){
    ham.addEventListener('click', ()=>{
      const mn = document.getElementById('mobile-nav');
      mn.style.display = mn.style.display === 'block' ? 'none' : 'block';
    });
  }

  // Setup forms: masks and localStorage save
  function setupForm(){
    const form = document.querySelector('form[data-save]');
    if(!form) return;

    const cpf = form.querySelector('input[name="cpf"]');
    const phone = form.querySelector('input[name="telefone"]');
    const cep = form.querySelector('input[name="cep"]');

    function maskCPF(v){ return v.replace(/\D/g,'').replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4').slice(0,14); }
    function maskPhone(v){
      v=v.replace(/\D/g,'');
      if(v.length>10) return v.replace(/(\d{2})(\d{5})(\d{4})/,'($1) $2-$3').slice(0,15);
      return v.replace(/(\d{2})(\d{4})(\d{0,4})/,'($1) $2-$3').slice(0,14);
    }
    function maskCEP(v){ return v.replace(/\D/g,'').replace(/(\d{5})(\d{3})/,'$1-$2').slice(0,9); }

    if(cpf) cpf.addEventListener('input', e=> e.target.value = maskCPF(e.target.value));
    if(phone) phone.addEventListener('input', e=> e.target.value = maskPhone(e.target.value));
    if(cep) cep.addEventListener('input', e=> e.target.value = maskCEP(e.target.value));

    // Save to localStorage on submit
    form.addEventListener('submit', (e)=>{
      if(!form.checkValidity()){
        e.stopPropagation();
        form.classList.add('was-validated');
        return;
      }
      e.preventDefault();
      const data = Object.fromEntries(new FormData(form));
      localStorage.setItem('cadastro', JSON.stringify(data));
      alert('Cadastro salvo localmente (simulação).');
      form.reset();
    });

    // Load saved data
    const saved = localStorage.getItem('cadastro');
    if(saved){
      try{
        const obj = JSON.parse(saved);
        Object.keys(obj).forEach(k=>{
          const el = form.querySelector(`[name="${k}"]`);
          if(el) el.value = obj[k];
        });
      }catch(e){}
    }
  }

  // initial setup on index: if loaded statically
  setupForm();
});

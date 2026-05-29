/* hero.jsx — Hero com 3 variantes + headlines A/B/C + fundo etéreo
   Exporta: window.Hero, window.HEADLINES, window.SUBHEAD, window.goForm  */

function goForm(){
  const el = document.getElementById("simular");
  if (el){
    const y = el.getBoundingClientRect().top + window.scrollY - 14;
    window.scrollTo({ top: y, behavior: "smooth" });
  }
}
window.goForm = goForm;

const HEADLINES = {
  A: <>Pare de pagar aluguel e tenha seu apartamento em Luziânia <span className="hl">sem dar entrada.</span></>,
  B: <>Seu apartamento de 2 quartos em Luziânia começa <span className="hl">com R$0 de entrada e documentação grátis.</span></>,
  C: <>A chave do seu apê na mão antes do que você imagina — <span className="hl">e a parcela cabendo no seu bolso.</span></>,
};
window.HEADLINES = HEADLINES;

const SUBHEAD = "Apartamentos novos de 2 quartos no Parque Alvorada I, prontos pra morar, financiados em até 100% pela Caixa — com subsídio do governo de até R$ 55 mil e aceitando seu FGTS. A documentação é por nossa conta.";
window.SUBHEAD = SUBHEAD;

const HERO_BADGES = [
  { ic: "key", t: "R$0 de entrada" },
  { ic: "file-check", t: "Documentação grátis" },
  { ic: "landmark", t: "Subsídio até R$ 55 mil" },
];

function Badges(){
  const Icon = window.Icon;
  return (
    <div className="badge-row">
      {HERO_BADGES.map(b => (
        <span className="badge" key={b.t}><span className="ic"><Icon name={b.ic} /></span>{b.t}</span>
      ))}
    </div>
  );
}

function HeroBg({ bg, etherColor, patternVariant }){
  const EtherealShadow = window.EtherealShadow;
  const BGPattern = window.BGPattern;
  if (bg === "facade"){
    return (
      <div className="hero-ether">
        <image-slot id="hero-facade" src={window.R("photos/p16.jpg")} fit="cover" style={{width:"100%",height:"100%"}} placeholder="foto da fachada"></image-slot>
      </div>
    );
  }
  if (bg === "pattern"){
    const v = patternVariant || "grid";
    return (
      <div className="hero-ether">
        <div style={{position:"absolute", inset:0, background:"radial-gradient(85% 78% at 66% 26%, rgba(13,148,136,.14), transparent 70%)"}} />
        {BGPattern && <BGPattern variant={v} mask="fade-edges" size={v==="dots"?22:46} fill="rgba(13,148,136,.2)" />}
      </div>
    );
  }
  return (
    <div className="hero-ether">
      {EtherealShadow && (
        <EtherealShadow
          color={etherColor || "rgba(45,140,140,1)"}
          grain={0.07}
          blur={24}
        />
      )}
    </div>
  );
}

function Hero({ variant, headlineKey, etherColor, bg, patternVariant }){
  const H = HEADLINES[headlineKey] || HEADLINES.B;
  const LeadForm = window.LeadForm;

  /* ---------- A: IMERSIVO ---------- */
  if (variant === "immersive"){
    return (
      <section className="hero hero--immersive" data-screen-label="Hero (imersivo)">
        <HeroBg bg={bg} etherColor={etherColor} patternVariant={patternVariant} />
        <div className="hero-scrim"></div>
        <div className="hero-inner wrap">
          <div className="hero-copy">
            <Badges/>
            <h1>{H}</h1>
            <p className="hero-sub">{SUBHEAD}</p>
            <div className="hero-cta">
              <button className="btn btn-primary btn-lg" onClick={goForm}>
                Quero sair do aluguel — ver se eu aprovo <span className="arw"><window.Icon name="arrow-right" size={18}/></span>
              </button>
              <div className="microcopy">
                <span><span className="dot"></span>Simulação gratuita e sem compromisso</span>
                <span><span className="dot"></span>Resposta no seu WhatsApp</span>
                <span><span className="dot"></span>Menos de 1 minuto</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  /* ---------- B: DIVIDIDO ---------- */
  if (variant === "split"){
    return (
      <section className="hero hero--split" data-screen-label="Hero (dividido)">
        <HeroBg bg={bg} etherColor={etherColor} patternVariant={patternVariant} />
        <div className="hero-scrim"></div>
        <div className="hero-inner wrap">
          <div className="hero-copy">
            <Badges/>
            <h1>{H}</h1>
            <p className="hero-sub">{SUBHEAD}</p>
            <div className="hero-photostrip">
              <image-slot id="hero-strip-1" src={window.R("photos/p14.jpg")} fit="cover" placeholder="fachada"></image-slot>
              <image-slot id="hero-strip-2" src={window.R("photos/p07.jpg")} fit="cover" placeholder="sala"></image-slot>
              <image-slot id="hero-strip-3" src={window.R("photos/p09.jpg")} fit="cover" placeholder="cozinha"></image-slot>
            </div>
          </div>
          <div className="hero-formcard">
            <div className="fc-head">
              <h3>Veja se você já aprova</h3>
              <p>Simulação gratuita • leva menos de 1 minuto • resposta no WhatsApp</p>
            </div>
            {LeadForm && <LeadForm compact />}
          </div>
        </div>
      </section>
    );
  }

  /* ---------- C: CARTÃO ---------- */
  return (
    <section className="hero hero--card" data-screen-label="Hero (cartão)">
      <HeroBg bg={bg} etherColor={etherColor} patternVariant={patternVariant} />
      <div className="hero-scrim"></div>
      <div className="hero-inner wrap">
        <div className="hero-copy">
          <Badges/>
          <h1>{H}</h1>
          <p className="hero-sub">{SUBHEAD}</p>
          <div className="trust-mini">
            <div><b>2 quartos</b><span>~58m² + garagem</span></div>
            <div><b>Pronto</b><span>pra morar agora</span></div>
            <div><b>R$ 570</b><span>parcela a partir de</span></div>
          </div>
        </div>
        <div className="hero-formcard">
          <div className="fc-head">
            <h3>Veja se você já aprova</h3>
            <p>Simulação gratuita • leva menos de 1 minuto • resposta no WhatsApp</p>
          </div>
          {LeadForm && <LeadForm compact />}
        </div>
      </div>
    </section>
  );
}

window.Hero = Hero;

/* app.jsx — monta a landing, integra Tweaks, scroll-reveal, topbar, sticky CTA */

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "heroVariant": "card",
  "heroBg": "ether",
  "patternVariant": "grid",
  "headline": "B",
  "urgency": true,
  "accent": ["#c9a86a", "#b08f4f", "rgba(201,168,106,.14)"],
  "ether": "#d0c19c"
}/*EDITMODE-END*/;

function useReveal(dep){
  React.useEffect(() => {
    let lastRun = 0;
    const reveal = () => {
      lastRun = performance.now();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      document.querySelectorAll(".reveal:not(.in), .pain-item:not(.in)").forEach(el => {
        const r = el.getBoundingClientRect();
        if (r.top < vh * 0.92 && r.bottom > 0) el.classList.add("in");
      });
    };
    // chamada síncrona e throttled por tempo (rAF é pausado em iframe em 2º plano)
    const onScroll = () => { if (performance.now() - lastRun > 90) reveal(); };
    const t0 = setTimeout(reveal, 60);
    const warm = setInterval(reveal, 250);
    const stopWarm = setTimeout(() => clearInterval(warm), 3500);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      clearTimeout(t0); clearInterval(warm); clearTimeout(stopWarm);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [dep]);
}

function Topbar(){
  return (
    <header className="topbar">
      <div className="wrap">
        <div className="brand">
          <image-slot id="logo-top" placeholder="logo AJMG"></image-slot>
          <span className="tag">Parque Alvorada I<br/>Luziânia–GO</span>
        </div>
        <div className="top-cta">
          <a className="top-phone" href="https://wa.me/5561991731449" target="_blank" rel="noopener">
            {window.WaIcon && <window.WaIcon/>}<span className="lbl">(61) 99173-1449</span>
          </a>
          <button className="btn btn-primary" onClick={window.goForm}>Simular grátis</button>
        </div>
      </div>
    </header>
  );
}

function StickyCta(){
  return (
    <div className="sticky-cta">
      <div className="sc-txt">
        <b>Saia do aluguel sem entrada</b>
        <span>Simulação grátis • 1 minuto</span>
      </div>
      <button className="btn btn-primary" onClick={window.goForm}>Simular agora</button>
    </div>
  );
}

const ACCENTS = [
  ["#c9a86a", "#b08f4f", "rgba(201,168,106,.14)"], // champanhe / dourado
  ["#c98a5f", "#b06f43", "rgba(201,138,95,.14)"],  // bronze / cobre
  ["#a8a07e", "#8a8260", "rgba(168,160,126,.16)"], // taupe / pedra
  ["#9fb083", "#7f9263", "rgba(159,176,131,.16)"], // verde sálvia
];
const ETHERS = ["#d0c19c", "#cda85e", "#b6ad97", "#c79a6a"];

function App(){
  const { useTweaks, TweaksPanel, TweakSection, TweakRadio, TweakToggle, TweakColor, TweakSelect } = window;
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  // aplica acento + urgência ao :root / body
  React.useEffect(() => {
    const acc = Array.isArray(t.accent) ? t.accent : ACCENTS[0];
    const root = document.documentElement;
    root.style.setProperty("--accent", acc[0]);
    root.style.setProperty("--accent-deep", acc[1]);
    root.style.setProperty("--accent-soft", acc[2]);
  }, [t.accent]);

  React.useEffect(() => {
    document.body.setAttribute("data-urgency", t.urgency ? "on" : "off");
  }, [t.urgency]);

  useReveal(`${t.heroVariant}|${t.headline}|${t.urgency}`);

  const heroOpts = [
    { value: "immersive", label: "Imersivo" },
    { value: "split", label: "Dividido" },
    { value: "card", label: "Cartão" },
  ];
  const heroBgOpts = [
    { value: "ether", label: "Sombra" },
    { value: "facade", label: "Fachada" },
    { value: "pattern", label: "Padrão" },
  ];
  const patternOpts = [
    { value: "grid", label: "Grade" },
    { value: "dots", label: "Pontos" },
    { value: "diagonal-stripes", label: "Listras diagonais" },
    { value: "horizontal-lines", label: "Linhas horizontais" },
    { value: "vertical-lines", label: "Linhas verticais" },
    { value: "checkerboard", label: "Xadrez" },
  ];
  const headlineOpts = [
    { value: "A", label: "A · fim do aluguel" },
    { value: "B", label: "B · barreira removida" },
    { value: "C", label: "C · sonho + segurança" },
  ];

  return (
    <>
      <Topbar/>
      <main>
        <window.Hero variant={t.heroVariant} headlineKey={t.headline} etherColor={t.ether} bg={t.heroBg} patternVariant={t.patternVariant} />
        <window.ValueSection/>
        <window.PainSection/>
        <window.SolutionSection/>
        <window.BenefitsSection/>
        <window.SimularBand/>
        <window.ProofSection/>
        <window.OfferSection/>
        <window.ObjectionsSection/>
        <window.GuaranteeSection/>
        <window.UrgencySection/>
        <window.FaqSection/>
        <window.FinalCta/>
        <window.PsFooter/>
      </main>
      <StickyCta/>

      <TweaksPanel>
        <TweakSection label="Seção principal (hero)" />
        <TweakRadio label="Layout do hero" value={t.heroVariant}
          options={heroOpts}
          onChange={(v) => setTweak("heroVariant", v)} />
        <TweakRadio label="Fundo do hero" value={t.heroBg}
          options={heroBgOpts}
          onChange={(v) => setTweak("heroBg", v)} />
        {t.heroBg === "pattern" && (
          <TweakSelect label="Estilo do padrão" value={t.patternVariant}
            options={patternOpts}
            onChange={(v) => setTweak("patternVariant", v)} />
        )}
        <TweakRadio label="Headline (teste A/B)" value={t.headline}
          options={headlineOpts}
          onChange={(v) => setTweak("headline", v)} />

        <TweakSection label="Conversão" />
        <TweakToggle label="Mostrar urgência (6 unidades)" value={t.urgency}
          onChange={(v) => setTweak("urgency", v)} />

        <TweakSection label="Identidade" />
        <TweakColor label="Cor de destaque" value={t.accent}
          options={ACCENTS}
          onChange={(v) => setTweak("accent", v)} />
        <TweakColor label="Cor da sombra (fundo)" value={t.ether}
          options={ETHERS}
          onChange={(v) => setTweak("ether", v)} />
      </TweaksPanel>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App/>);

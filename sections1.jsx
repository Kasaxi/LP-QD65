/* sections1.jsx — Valor, Dor, Solução, Benefícios, Banda de simulação, Prova social
   Exporta os componentes em window.* */

const Icon1 = (props) => { const I = window.Icon; return I ? <I {...props} /> : null; };

/* ---------------- 3. ABERTURA / VALOR ---------------- */
function ValueSection(){
  return (
    <section className="section value-section">
      <div className="wrap value-grid">
        <div className="value-copy reveal">
          <p className="eyebrow">O jogo do aluguel</p>
          <h2 className="h2">O dinheiro do aluguel está construindo o patrimônio de <span className="text-accent">outra pessoa</span>.</h2>
          <p>Todo mês é a mesma conta: você trabalha, recebe e uma parte boa do seu salário vai embora pagar a casa de outra pessoa. No fim do ano, são <strong>milhares de reais que nunca mais voltam</strong> — e o imóvel continua não sendo seu.</p>
          <p>E quando você pensa em comprar, vem aquele bloqueio: <em>“mas eu não tenho dinheiro guardado pra entrada, nem pra documentação.”</em></p>
          <p>É exatamente esse bloqueio que a gente tirou do caminho. Aqui você <strong>não paga entrada, não paga documentação</strong> e ainda usa o subsídio do governo e o seu FGTS. O dinheiro que hoje vira aluguel passa a construir o <strong>seu</strong> patrimônio.</p>
          <button className="btn btn-primary" onClick={window.goForm} style={{marginTop: 6}}>
            Descobrir se eu me encaixo <span className="arw">→</span>
          </button>
          <p className="microcopy"><span><span className="dot"></span>Grátis e sem compromisso • leva menos de 1 minuto</span></p>
        </div>
        <div className="flip-card reveal">
          <div className="row">
            <span className="ic bad"><Icon1 name="trend-down" /></span>
            <div><b>Hoje: pagando aluguel</b><span>O dinheiro sai todo mês e não volta. O imóvel nunca é seu.</span></div>
          </div>
          <div className="row">
            <span className="ic bad"><Icon1 name="trend-up" /></span>
            <div><b>Todo ano o aluguel aumenta</b><span>O contrato renova, o valor sobe e o salário não acompanha.</span></div>
          </div>
          <div className="row">
            <span className="ic good"><Icon1 name="check" /></span>
            <div><b>No Parque Alvorada I: é seu</b><span>A mesma parcela constrói o seu patrimônio — começando sem entrada.</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- 5. DOR ---------------- */
const PAINS = [
  "Você já fez a conta de quanto pagou de aluguel nos últimos anos — e sentiu um aperto no peito.",
  "Toda vez que o contrato renova, o aluguel aumenta e o salário não acompanha.",
  "Você sonha com um lugar seu, pra pintar a parede da cor que quiser e ninguém mandar você sair.",
  "Você até pensou em comprar, mas travou no “não tenho dinheiro pra entrada”.",
  "Tem medo de não conseguir aprovar o financiamento e nem tenta.",
  "Cansou de morar apertado, sem garagem, sem segurança e sem conforto pra família.",
];
function PainSection(){
  return (
    <section className="section pain" data-screen-label="Dor">
      <div className="wrap narrow center">
        <p className="eyebrow" style={{justifyContent:"center"}}>Se você se reconhecer aqui…</p>
        <h2 className="h2" style={{margin:"0 auto"}}>…esse anúncio chegou na hora certa.</h2>
      </div>
      <div className="wrap">
        <ul className="pain-list">
          {PAINS.map((p, idx) => (
            <li className="pain-item" key={idx}><span className="mk"><Icon1 name="arrow-right" size={16} /></span><p>{p}</p></li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ---------------- 6. SOLUÇÃO ---------------- */
const REMOVED = [
  { strike: "“Preciso de dinheiro guardado pra entrada.”", fix: "Financiamos até 100% pela Caixa." },
  { strike: "“Vou gastar uma fortuna em cartório e papelada.”", fix: "A documentação é por nossa conta." },
  { strike: "“Não existe ajuda pra quem é como eu.”", fix: "Subsídio do governo de até R$ 55 mil." },
  { strike: "“Meu FGTS está parado, não serve pra nada.”", fix: "Seu FGTS é aceito e reduz o financiamento." },
];
const GALLERY = [
  { id: "gal-video", src: "photos/p14.jpg", label: "Vídeo-tour do apê", video: true },
  { id: "gal-sala", src: "photos/p07.jpg", label: "Sala de estar" },
  { id: "gal-cozinha", src: "photos/p09.jpg", label: "Cozinha com bancada" },
  { id: "gal-quarto", src: "photos/p06.jpg", label: "Quarto" },
  { id: "gal-suite", src: "photos/p04.jpg", label: "Suíte com sacada" },
  { id: "gal-banheiro", src: "photos/p02.jpg", label: "Banheiro no blindex" },
  { id: "gal-escada", src: "photos/p03.jpg", label: "Acesso interno" },
  { id: "gal-hall", src: "photos/p10.jpg", label: "Hall de entrada" },
  { id: "gal-sacada", src: "photos/p01.jpg", label: "Sacada e vaga" },
];
function SolutionSection(){
  return (
    <section className="section solution">
      <div className="wrap">
        <div className="narrow reveal">
          <p className="eyebrow">A solução</p>
          <h2 className="h2">Conheça o Parque Alvorada I — feito pra quem quer sair do aluguel <span className="text-accent">sem complicação</span>.</h2>
          <p className="lead">A gente removeu, um por um, todos os motivos que te impediam de comprar. O resultado: o que sobrava no aluguel, agora paga o <strong>seu</strong> apartamento.</p>
        </div>
        <div className="removed-grid reveal">
          {REMOVED.map((r, idx) => (
            <div className="removed" key={idx}>
              <div className="strike">{r.strike}</div>
              <div className="fix"><span className="chk"><Icon1 name="check" /></span>{r.fix}</div>
            </div>
          ))}
        </div>

        <div className="gallery reveal">
          <div className="gallery-head">
            <h3 style={{fontSize:"1.6rem"}}>Por dentro do apartamento</h3>
            <span className="muted" style={{fontSize:".92rem"}}>2 quartos • ~58m² • banheiro no blindex • 1 vaga</span>
          </div>
          <div className="gallery-grid">
            {GALLERY.map((g) => (
              <div className="gtile" key={g.id}>
                <image-slot id={g.id} src={window.R(g.src)} fit="cover" placeholder={g.label}></image-slot>
                {g.video && <span className="play-badge"><span className="pb"><Icon1 name="play" /></span></span>}
                <span className="cap">{g.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- 7. BENEFÍCIOS ---------------- */
const BENEFITS = [
  { ic: "wallet", t: "R$0 de entrada", d: "Você começa a realizar o sonho hoje, sem precisar juntar dinheiro por anos." },
  { ic: "file-check", t: "R$0 de documentação", d: "Zero surpresa de custo escondido — a construtora assume o cartório por você." },
  { ic: "landmark", t: "Subsídio + FGTS", d: "Até R$ 55 mil do governo e seu FGTS trabalhando a favor, reduzindo o que você financia." },
  { ic: "building", t: "Prédio baixo e reservado", d: "Só 2 pavimentos e 6 unidades: mais sossego, privacidade e poucos vizinhos." },
  { ic: "expand", t: "Espaço de verdade", d: "2 quartos, ~58m², 1 vaga e tudo no blindex. Acabamento moderno, sem reformar nada." },
  { ic: "key", t: "Pronto pra morar", d: "Nada de esperar anos de obra: você pega a chave e já se muda." },
  { ic: "pin", t: "Localização privilegiada", d: "Em Luziânia, com comércio, escola e transporte por perto — o dia a dia resolvido." },
];
function BenefitsSection(){
  return (
    <section className="section benefits">
      <div className="wrap">
        <div className="narrow center reveal" style={{margin:"0 auto"}}>
          <p className="eyebrow" style={{justifyContent:"center"}}>O que muda na sua vida</p>
          <h2 className="h2">Não é uma lista de características. É uma <span className="text-accent">transformação</span>.</h2>
        </div>
        <div className="ben-grid">
          {BENEFITS.map((b, idx) => (
            <div className="ben reveal" key={idx} style={{transitionDelay: `${(idx%3)*60}ms`}}>
              <div className="ic"><Icon1 name={b.ic} /></div>
              <h3>{b.t}</h3>
              <p>{b.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- BANDA DE SIMULAÇÃO (#simular) ---------------- */
function SimularBand(){
  const LeadForm = window.LeadForm;
  return (
    <section className="section" id="simular" style={{background:"var(--bg-2)"}} data-screen-label="Simulação">
      <div className="wrap value-grid">
        <div className="reveal">
          <p className="eyebrow">Sua simulação gratuita</p>
          <h2 className="h2">Em menos de 1 minuto você descobre <span className="text-accent">se já aprova</span>.</h2>
          <p className="lead">Responda 5 perguntinhas rápidas. Um consultor te chama no WhatsApp com o resultado e tira todas as suas dúvidas — sem compromisso nenhum.</p>
          <ul style={{listStyle:"none", padding:0, margin:"22px 0 0", display:"grid", gap:"12px"}}>
            {["Não precisa de dinheiro guardado","Mesmo com restrição, vale tentar","Resposta direto no seu WhatsApp"].map(x => (
              <li key={x} style={{display:"flex", gap:"11px", alignItems:"center", fontWeight:500}}>
                <span style={{color:"var(--success)", display:"inline-flex", flex:"none"}}><Icon1 name="check" size={20} /></span>{x}
              </li>
            ))}
          </ul>
        </div>
        <div className="hero-formcard reveal" style={{boxShadow:"var(--shadow)"}}>
          <div className="fc-head">
            <h3>Veja se você já aprova</h3>
            <p>Simulação gratuita • leva menos de 1 minuto • resposta no WhatsApp</p>
          </div>
          {LeadForm && <LeadForm />}
        </div>
      </div>
    </section>
  );
}

/* ---------------- 8. PROVA SOCIAL ---------------- */
const STATS = [
  { num: "+350", lbl: "famílias já realizaram o sonho com a AJMG" },
  { num: "12", lbl: "empreendimentos entregues em Luziânia e região" },
  { num: "100%", lbl: "entregues e habitados — nada no papel" },
];
const TESTIS = [
  { q: "Eu achava que nunca ia sair do aluguel. Não paguei entrada e hoje a parcela é menor do que eu pagava de aluguel.", n: "Mariana S.", w: "Jardim Ingá", in: "MS" },
  { q: "Tinha certeza que não ia aprovar por causa do meu nome. O consultor me orientou e deu certo. Hoje a casa é nossa.", n: "Rodrigo P.", w: "Luziânia", in: "RP" },
  { q: "Prédio baixo, poucos vizinhos, acabamento ótimo. Minha família tem espaço e sossego de verdade.", n: "Cleide M.", w: "Parque Alvorada", in: "CM" },
];
function monogram(initials){
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='96' height='96'>`
    + `<circle cx='48' cy='48' r='47' fill='%231a1e25' stroke='%230e7490' stroke-opacity='0.45'/>`
    + `<text x='48' y='60' font-family='Georgia, serif' font-size='34' fill='%230e7490' text-anchor='middle'>${initials}</text>`
    + `</svg>`;
  return "data:image/svg+xml," + svg.replace(/ /g, "%20").replace(/</g, "%3C").replace(/>/g, "%3E").replace(/#/g, "%23").replace(/"/g, "'");
}
function ProofSection(){
  return (
    <section className="section proof">
      <div className="wrap">
        <div className="narrow center reveal" style={{margin:"0 auto 8px"}}>
          <p className="eyebrow" style={{justifyContent:"center"}}>Construtora AJMG</p>
          <h2 className="h2">Quem confiou, hoje tem a <span className="text-accent">chave na mão</span>.</h2>
        </div>
        <div className="stats">
          {STATS.map((s, idx) => (
            <div className="stat reveal" key={idx} style={{transitionDelay:`${idx*70}ms`}}>
              <div className="num">{s.num}</div>
              <div className="lbl">{s.lbl}</div>
            </div>
          ))}
        </div>
        <div className="testi-grid">
          {TESTIS.map((t, idx) => (
            <div className="testi reveal" key={idx} style={{transitionDelay:`${idx*70}ms`}}>
              <div className="stars">{[0,1,2,3,4].map(s=><Icon1 key={s} name="star" />)}</div>
              <p className="quote">“{t.q}”</p>
              <div className="who">
                <image-slot id={`testi-${idx}`} src={monogram(t.in)} shape="circle" placeholder={`foto de ${t.n}`}></image-slot>
                <div><b>{t.n}</b><span>{t.w}</span></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { ValueSection, PainSection, SolutionSection, BenefitsSection, SimularBand, ProofSection });

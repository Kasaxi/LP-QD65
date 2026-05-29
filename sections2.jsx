/* sections2.jsx — Oferta, Objeções, Garantia, Urgência, FAQ, CTA final, PS, Footer
   Exporta os componentes em window.* */

const Icon2 = (props) => { const I = window.Icon; return I ? <I {...props} /> : null; };

/* ---------------- 9. OFERTA ---------------- */
const OFFER_ITEMS = [
  { lbl: "Apartamento novo 2 quartos, ~58m², com vaga", val: "incluso", zero: false },
  { lbl: "Entrada", val: "R$ 0", zero: true },
  { lbl: "Documentação / cartório", val: "R$ 0", zero: true },
  { lbl: "Financiamento", val: "até 100% Caixa", zero: false },
  { lbl: "Subsídio do governo", val: "até R$ 55 mil", zero: false },
  { lbl: "FGTS", val: "aceito", zero: false },
];
function OfferSection(){
  return (
    <section className="section offer" data-screen-label="Oferta">
      <div className="wrap">
        <div className="narrow center reveal" style={{margin:"0 auto"}}>
          <p className="eyebrow" style={{justifyContent:"center"}}>As condições do lançamento</p>
          <h2 className="h2">Tudo o que está incluso na sua conquista</h2>
        </div>
        <div className="offer-card reveal" style={{maxWidth: 720, margin:"8px auto 0"}}>
          <ul className="offer-list">
            {OFFER_ITEMS.map((it, idx) => (
              <li key={idx}>
                <span className="chk"><Icon2 name="check" /></span>
                <span className="lbl">{it.lbl}</span>
                <span className={"val" + (it.zero ? " zero" : "")}>{it.val}</span>
              </li>
            ))}
          </ul>
          <div className="offer-price">
            <div className="cap">Parcela mensal a partir de</div>
            <div className="big">R$ 570<small>/mês</small></div>
            <div className="note">Em muitos casos, igual ou menor que o seu aluguel de hoje.</div>
          </div>
          <button className="btn btn-primary btn-lg btn-block" onClick={window.goForm} style={{marginTop: 18}}>
            Quero simular minha parcela <span className="arw"><Icon2 name="arrow-right" size={18} /></span>
          </button>
        </div>
        <p className="offer-kicker reveal">Pra começar, você não tira nada do bolso. A única coisa que muda é o destino do dinheiro — em vez de pagar aluguel, você paga o que é <strong>seu</strong>.</p>
      </div>
    </section>
  );
}

/* ---------------- 10. OBJEÇÕES ---------------- */
const OBJECTIONS = [
  { q: "“Mas será que eu aprovo o financiamento?”", a: "É justamente pra isso que serve a simulação gratuita. Nosso consultor analisa seu caso e te diz na hora. A maioria das pessoas se surpreende ao descobrir que já se encaixa — e quem ainda não, a gente orienta o caminho." },
  { q: "“Tenho restrição no nome / nome sujo.”", a: "Não desista por causa disso. Existem caminhos e em muitos casos dá pra resolver e aprovar mesmo assim. Faça a simulação e deixe a gente te orientar — é de graça e sem compromisso." },
  { q: "“Acho que é longe do meu trabalho.”", a: "Luziânia tem ótima estrutura e o Parque Alvorada I fica numa região com tudo por perto. Vale conhecer a localização antes de decidir — você pode se surpreender com a facilidade do dia a dia." },
  { q: "“Vou esperar pra ver.”", a: "Cada mês de espera é mais um aluguel pago pra outra pessoa — e são só 6 unidades por prédio. Esperar costuma custar caro. O melhor momento pra parar de pagar aluguel é agora." },
];
function ObjectionsSection(){
  return (
    <section className="section">
      <div className="wrap">
        <div className="narrow center reveal" style={{margin:"0 auto"}}>
          <p className="eyebrow" style={{justifyContent:"center"}}>Aquela dúvida na sua cabeça</p>
          <h2 className="h2">Vamos resolver agora, com sinceridade.</h2>
        </div>
        <div className="obj-grid">
          {OBJECTIONS.map((o, idx) => (
            <div className="obj reveal" key={idx} style={{transitionDelay:`${(idx%2)*60}ms`}}>
              <p className="q"><span className="qm"><Icon2 name="quote" /></span>{o.q.replace(/[“”]/g,"")}</p>
              <p>{o.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- 11. GARANTIA ---------------- */
function GuaranteeSection(){
  return (
    <section className="section guarantee">
      <div className="wrap">
        <div className="guarantee-card reveal">
          <div className="seal"><Icon2 name="shield-check" /></div>
          <div>
            <h2>Você não corre risco nenhum em descobrir.</h2>
            <p>A simulação é 100% gratuita e sem compromisso — você preenche, recebe a resposta no WhatsApp e decide com calma. E se aprovar, a documentação é por nossa conta e a entrada é zero: você não tira dinheiro do bolso pra começar. <strong>O risco é todo nosso; a conquista é toda sua.</strong></p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- 12. URGÊNCIA ---------------- */
function UrgencySection(){
  return (
    <section className="section urgency" data-screen-label="Urgência">
      <div className="wrap">
        <div className="icon"><Icon2 name="alert" /></div>
        <div style={{maxWidth: 760}}>
          <h2>Atenção: são apenas 6 unidades por prédio.</h2>
          <p>Condições como R$0 de entrada e documentação grátis costumam esgotar rápido, porque é raro. Conforme as unidades são reservadas, as condições de lançamento podem mudar. Quem entra agora garante as melhores escolhas — térreo ou 1º andar.</p>
          <div className="units-row">
            <span className="unit-dot avail">1</span>
            <span className="unit-dot avail">2</span>
            <span className="unit-dot avail">3</span>
            <span className="unit-dot avail">4</span>
            <span className="unit-dot taken">5</span>
            <span className="unit-dot taken">6</span>
          </div>
        </div>
        <button className="btn btn-primary" onClick={window.goForm}>
          Garantir minha unidade <span className="arw"><Icon2 name="arrow-right" size={18} /></span>
        </button>
      </div>
    </section>
  );
}

/* ---------------- 13. FAQ ---------------- */
const FAQS = [
  { q: "Preciso ter dinheiro guardado pra entrada?", a: "Não. A entrada é R$0. Você não precisa de dinheiro guardado pra começar." },
  { q: "Quanto vou pagar de parcela?", a: "A partir de R$ 570,00. Em muitos casos, é parecido ou menor que o aluguel que você já paga. Na simulação a gente te passa o valor exato do seu caso." },
  { q: "Tenho restrição no nome, ainda dá?", a: "Pode dar sim. Não descarte antes de simular — muita gente aprova mesmo com restrição, ou a gente orienta como resolver. É grátis tentar." },
  { q: "Posso usar meu FGTS?", a: "Sim, o FGTS é aceito e ajuda a reduzir o valor financiado." },
  { q: "O apartamento está pronto?", a: "Sim, é praticamente pronto pra morar — nada de esperar anos de obra." },
  { q: "Como funciona depois que eu preencho?", a: "Um consultor entra em contato pelo seu WhatsApp, tira suas dúvidas e faz a simulação da sua aprovação. Simples e sem compromisso." },
  { q: "Quanto custa pra fazer a simulação?", a: "Nada. É 100% gratuita." },
];
function FaqSection(){
  const [open, setOpen] = React.useState(0);
  return (
    <section className="section">
      <div className="wrap">
        <div className="narrow center reveal" style={{margin:"0 auto"}}>
          <p className="eyebrow" style={{justifyContent:"center"}}>Perguntas frequentes</p>
          <h2 className="h2">Ainda com dúvida? A gente responde.</h2>
        </div>
        <div className="faq-list">
          {FAQS.map((f, idx) => (
            <div className={"faq-item" + (open === idx ? " open" : "")} key={idx}>
              <button className="faq-q" onClick={() => setOpen(open === idx ? -1 : idx)}>
                {f.q}<span className="pm"><Icon2 name="plus" /></span>
              </button>
              <div className="faq-a" style={{ maxHeight: open === idx ? "260px" : "0" }}>
                <p>{f.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- 14. CTA FINAL ---------------- */
function FinalCta(){
  return (
    <section className="section final" data-screen-label="CTA final">
      <div className="final-media">
        <image-slot id="final-bg" src={window.R("photos/p16.jpg")} fit="cover" placeholder="Família feliz / entrega de chave (paisagem)"></image-slot>
      </div>
      <div className="final-scrim"></div>
      <div className="wrap">
        <h2>A chave do SEU apartamento na sua mão. E o aluguel? Nunca mais.</h2>
        <p className="lead">Isso pode começar hoje, sem entrada e sem documentação. Só falta você dar o primeiro passo — e ele leva menos de 1 minuto.</p>
        <button className="btn btn-primary btn-lg" onClick={window.goForm}>
          Quero minha simulação gratuita agora <span className="arw"><Icon2 name="arrow-right" size={18} /></span>
        </button>
        <div className="microcopy" style={{justifyContent:"center"}}>
          <span><span className="dot"></span>Sem compromisso</span>
          <span><span className="dot"></span>Resposta no WhatsApp</span>
          <span className="urg-only"><span className="dot"></span>São apenas 6 unidades por prédio</span>
        </div>
      </div>
    </section>
  );
}

/* ---------------- 15. PS + FOOTER ---------------- */
function PsFooter(){
  return (
    <>
      <section className="section ps">
        <div className="wrap">
          <div className="ps-card reveal">
            <span className="ps-tag">P.S. —</span>
            <p>Enquanto você decide, o aluguel continua saindo do seu bolso todo mês pra pagar o imóvel de outra pessoa. No Parque Alvorada I você inverte esse jogo: sem entrada, sem documentação, com subsídio de até R$ 55 mil e FGTS aceito. <span className="urg-only">São só 6 unidades por prédio — </span>preencha a simulação gratuita agora e descubra, em menos de 1 minuto, que o sonho da casa própria está mais perto do que você imagina.</p>
          </div>
        </div>
      </section>
      <footer className="footer">
        <div className="wrap">
          <image-slot id="logo-footer" placeholder="logo AJMG"></image-slot>
          <p className="legal">Construtora AJMG • Parque Alvorada I, Luziânia–GO. Imagens meramente ilustrativas. Condições sujeitas a análise de crédito e à disponibilidade de unidades. Subsídio e financiamento conforme regras do programa habitacional vigente / Caixa Econômica Federal.</p>
        </div>
      </footer>
    </>
  );
}

Object.assign(window, { OfferSection, ObjectionsSection, GuaranteeSection, UrgencySection, FaqSection, FinalCta, PsFooter });

/* lead-form.jsx — Formulário de captação multi-etapas (formato conversa)
   Exporta: window.LeadForm
   Props: { waNumber, onAnyChange }  */

const { useState, useRef, useEffect } = React;

const WA_DIGITS = "5561991731449"; // +55 61 99173-1449

// Endpoint do Google Apps Script — grava cada lead numa planilha.
const LEAD_ENDPOINT = "https://script.google.com/macros/s/AKfycbx7Af7ta7dfUoQK9vjKNhJb6DwWQnGZxkb9cTPz83l9mHLoLG0Ahz3JhSVqG1Mdg4OfUg/exec";

function enviarLead(data){
  try {
    fetch(LEAD_ENDPOINT, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify({
        nome: data.nome || "",
        whatsapp: data.whatsapp || "",
        renda: data.renda || "",
        carteira: data.carteira || "",
        nomeLimpo: data.nomeLimpo || "",
        origem: "Landing Parque Alvorada I",
      }),
    }).catch(() => {});
  } catch (e) { /* nunca bloqueia o fluxo do usuário */ }
}

function maskPhone(v){
  const d = v.replace(/\D/g, "").slice(0, 11);
  if (d.length <= 2) return d.length ? `(${d}` : d;
  if (d.length <= 6) return `(${d.slice(0,2)}) ${d.slice(2)}`;
  if (d.length <= 10) return `(${d.slice(0,2)}) ${d.slice(2,6)}-${d.slice(6)}`;
  return `(${d.slice(0,2)}) ${d.slice(2,7)}-${d.slice(7)}`;
}

const STEPS = [
  { key: "nome", type: "text", q: "Qual é o seu nome?", hint: "Pra gente te chamar pelo nome.", placeholder: "Seu nome completo" },
  { key: "whatsapp", type: "tel", q: "Em qual número podemos te chamar no WhatsApp?", hint: "É por lá que o consultor te responde.", placeholder: "(61) 90000-0000" },
  { key: "renda", type: "opts", q: "Qual é a sua renda familiar aproximada?", hint: "Some o que entra na casa por mês.",
    options: ["Até R$ 2.000", "De R$ 2.000 a R$ 4.000", "Acima de R$ 4.000"] },
  { key: "carteira", type: "opts", q: "Você trabalha de carteira assinada?", hint: "Qualquer resposta serve — só pra entender seu caso.",
    options: ["Sim, CLT", "Não", "Autônomo", "MEI"] },
  { key: "nomeLimpo", type: "opts", q: "Seu nome está limpo (sem restrição)?", hint: "Mesmo com restrição dá pra tentar — não se preocupe.",
    options: ["Sim, está limpo", "Não", "Não tenho certeza"] },
];

function LeadForm({ compact, onAnyChange }){
  const [i, setI] = useState(0);
  const [data, setData] = useState({});
  const [err, setErr] = useState("");
  const [done, setDone] = useState(false);
  const inputRef = useRef(null);
  const sentRef = useRef(false);

  useEffect(() => {
    if (inputRef.current) inputRef.current.focus();
  }, [i]);

  // grava o lead na planilha assim que termina (uma única vez),
  // independente de o usuário clicar no botão do WhatsApp depois.
  useEffect(() => {
    if (done && !sentRef.current){
      sentRef.current = true;
      enviarLead(data);
    }
  }, [done]);

  const step = STEPS[i];
  const total = STEPS.length;

  function set(key, val){
    setData(d => ({ ...d, [key]: val }));
    setErr("");
    if (onAnyChange) onAnyChange();
  }

  function next(){
    const v = (data[step.key] || "").trim();
    if (step.type === "text"){
      if (v.length < 2){ setErr("Por favor, escreva seu nome."); return; }
    }
    if (step.type === "tel"){
      const digits = v.replace(/\D/g, "");
      if (digits.length < 10){ setErr("Digite um WhatsApp válido com DDD."); return; }
    }
    if (i < total - 1){ setI(i + 1); }
    else { setDone(true); }
  }

  function chooseOpt(val){
    set(step.key, val);
    // auto-avança nas opções
    setTimeout(() => {
      if (i < total - 1) setI(i + 1);
      else setDone(true);
    }, 230);
  }

  const Icon = window.Icon;
  if (done){
    const nome = (data.nome || "").trim().split(" ")[0] || "tudo certo";
    const linhas = [
      "Olá! Acabei de fazer a simulação do Parque Alvorada I e quero saber se aprovo.",
      "",
      "*Meus dados:*",
      `• Nome: ${data.nome || "—"}`,
      `• WhatsApp: ${data.whatsapp || "—"}`,
      `• Renda familiar: ${data.renda || "—"}`,
      `• Trabalho: ${data.carteira || "—"}`,
      `• Nome limpo: ${data.nomeLimpo || "—"}`,
    ];
    const msg = encodeURIComponent(linhas.join("\n"));
    return (
      <div className="msf-done">
        <div className="pop"><Icon name="check" /></div>
        <h3>Pronto, {nome}!</h3>
        <p>Recebemos seus dados. Um consultor vai te chamar no WhatsApp pra te mostrar tudo e simular sua aprovação.</p>
        <a className="btn btn-wa btn-lg btn-block" href={`https://wa.me/${WA_DIGITS}?text=${msg}`} target="_blank" rel="noopener">
          <WaIcon/> Falar agora no WhatsApp
        </a>
        <p style={{marginTop: 14, fontSize: ".82rem"}}>Atendimento rápido • Sem compromisso</p>
      </div>
    );
  }

  return (
    <div className="msf">
      <div className="msf-progress" aria-hidden="true">
        {STEPS.map((s, idx) => (
          <div key={s.key} className={"seg" + (idx < i ? " done" : idx === i ? " active" : "")}>
            <span className="fill"></span>
          </div>
        ))}
      </div>

      <div className="msf-step" key={step.key}>
        <p className="msf-q">{step.q}</p>
        <p className="msf-hint">{step.hint}</p>

        {step.type === "text" && (
          <input ref={inputRef} type="text" value={data[step.key] || ""}
            placeholder={step.placeholder}
            onChange={e => set(step.key, e.target.value)}
            onKeyDown={e => { if (e.key === "Enter") next(); }} />
        )}
        {step.type === "tel" && (
          <input ref={inputRef} type="tel" inputMode="numeric" value={data[step.key] || ""}
            placeholder={step.placeholder}
            onChange={e => set(step.key, maskPhone(e.target.value))}
            onKeyDown={e => { if (e.key === "Enter") next(); }} />
        )}
        {step.type === "opts" && (
          <div className="msf-opts">
            {step.options.map(opt => (
              <button key={opt} type="button"
                className={"msf-opt" + (data[step.key] === opt ? " sel" : "")}
                onClick={() => chooseOpt(opt)}>
                <span className="tick"><Icon name="check" /></span>
                {opt}
              </button>
            ))}
          </div>
        )}

        {err && <div className="err">{err}</div>}

        {step.type !== "opts" && (
          <div className="msf-nav">
            {i > 0 && <button type="button" className="msf-back" onClick={() => setI(i - 1)}>← Voltar</button>}
            <button type="button" className="btn btn-primary btn-block" onClick={next}>
              {i < total - 1 ? "Continuar" : "Ver minha aprovação"} <span className="arw">→</span>
            </button>
          </div>
        )}
        {step.type === "opts" && i > 0 && (
          <div className="msf-foot"><button type="button" className="msf-back" onClick={() => setI(i - 1)}>← Voltar</button></div>
        )}
      </div>
    </div>
  );
}

function WaIcon(){
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21 5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2zm5.8 14.04c-.24.68-1.4 1.3-1.93 1.38-.51.08-1.13.11-1.82-.11-.42-.13-.96-.31-1.65-.61-2.9-1.25-4.79-4.17-4.94-4.36-.14-.19-1.18-1.57-1.18-2.99 0-1.42.74-2.12 1.01-2.41.27-.29.59-.36.78-.36.2 0 .39 0 .56.01.18.01.42-.07.66.5.24.59.82 2.03.89 2.17.07.15.12.32.02.51-.09.19-.14.31-.28.48-.14.17-.29.37-.42.5-.14.14-.28.29-.12.57.16.27.71 1.18 1.53 1.91 1.05.94 1.94 1.23 2.21 1.37.27.14.43.12.59-.07.16-.19.68-.79.86-1.06.18-.27.36-.22.61-.13.25.09 1.59.75 1.86.89.27.14.45.21.52.32.07.12.07.66-.17 1.34z"/>
    </svg>
  );
}

window.LeadForm = LeadForm;
window.WaIcon = WaIcon;

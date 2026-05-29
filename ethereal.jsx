/* ethereal.jsx — fundo de "sombras etéreas" (efeito do componente Framer),
   recriado de forma performática e 100% autocontido.
   Camadas de gradiente radial na cor do tema → distorcidas por um filtro SVG
   feTurbulence + feDisplacementMap aplicado UMA vez (estático, não por-frame),
   com deriva lenta via transforms CSS (GPU). Dá a fumaça orgânica "fluindo"
   sem o custo que travava (re-render do filtro a cada frame). + grão estático.
   Exporta: window.EtherealShadow
   Props: { color, grain, blur, distort, style, className } */

const { useRef: _useRef } = React;

const GRAIN_URI = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E";

function EtherealShadow({
  color = "rgba(45,140,140,1)",
  grain = 0.06,
  blur = 16,
  distort = 140,
  style,
  className,
}){
  const idRef = _useRef("ether-" + Math.random().toString(36).slice(2, 9));
  const id = idRef.current;

  const layerBase = {
    position: "absolute", inset: "-40%",
    filter: `url(#${id}) blur(${blur}px)`,
    willChange: "transform",
  };
  const aBg = {
    background:
      `radial-gradient(52% 60% at 30% 36%, ${color} 0%, transparent 70%),` +
      `radial-gradient(48% 56% at 72% 66%, ${color} 0%, transparent 72%)`,
    opacity: 1,
  };
  const bBg = {
    background:
      `radial-gradient(56% 62% at 66% 28%, ${color} 0%, transparent 72%),` +
      `radial-gradient(50% 58% at 26% 78%, ${color} 0%, transparent 74%)`,
    opacity: 0.8,
  };

  return (
    <div className={className} style={{ overflow: "hidden", position: "relative", width: "100%", height: "100%", ...style }}>
      {/* filtro estático (rasteriza uma vez; só os transforms animam) */}
      <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true">
        <defs>
          <filter id={id} x="-30%" y="-30%" width="160%" height="160%" colorInterpolationFilters="sRGB">
            <feTurbulence type="fractalNoise" baseFrequency="0.011 0.017" numOctaves="3" seed="7" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale={distort} xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </defs>
      </svg>
      <div className="ether-layer ether-a" style={{ ...layerBase, ...aBg }} />
      <div className="ether-layer ether-b" style={{ ...layerBase, ...bBg }} />
      {grain > 0 && (
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: `url("${GRAIN_URI}")`,
          backgroundSize: "140px 140px",
          opacity: grain,
          mixBlendMode: "overlay",
        }} />
      )}
    </div>
  );
}

window.EtherealShadow = EtherealShadow;

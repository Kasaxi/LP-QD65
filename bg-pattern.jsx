/* bg-pattern.jsx — padrões de fundo em CSS (grid, dots, listras, etc.) com máscara de fade.
   Reimplementação nativa do componente BGPattern (sem Tailwind/TS).
   Exporta: window.BGPattern
   Props: { variant, mask, size, fill, style, className } */

function _bgImage(variant, fill, size){
  switch (variant){
    case "dots": return `radial-gradient(${fill} 1px, transparent 1px)`;
    case "grid": return `linear-gradient(to right, ${fill} 1px, transparent 1px), linear-gradient(to bottom, ${fill} 1px, transparent 1px)`;
    case "diagonal-stripes": return `repeating-linear-gradient(45deg, ${fill}, ${fill} 1px, transparent 1px, transparent ${size}px)`;
    case "horizontal-lines": return `linear-gradient(to bottom, ${fill} 1px, transparent 1px)`;
    case "vertical-lines": return `linear-gradient(to right, ${fill} 1px, transparent 1px)`;
    case "checkerboard": return `linear-gradient(45deg, ${fill} 25%, transparent 25%), linear-gradient(-45deg, ${fill} 25%, transparent 25%), linear-gradient(45deg, transparent 75%, ${fill} 75%), linear-gradient(-45deg, transparent 75%, ${fill} 75%)`;
    default: return undefined;
  }
}

// máscaras: o que importa é o alpha (preto = visível, transparent = oculto)
const _MASKS = {
  "fade-edges": "radial-gradient(ellipse at center, #000, transparent)",
  "fade-center": "radial-gradient(ellipse at center, transparent, #000)",
  "fade-top": "linear-gradient(to bottom, transparent, #000)",
  "fade-bottom": "linear-gradient(to bottom, #000, transparent)",
  "fade-left": "linear-gradient(to right, transparent, #000)",
  "fade-right": "linear-gradient(to right, #000, transparent)",
  "fade-x": "linear-gradient(to right, transparent, #000, transparent)",
  "fade-y": "linear-gradient(to bottom, transparent, #000, transparent)",
  "none": "",
};

function BGPattern({ variant = "grid", mask = "none", size = 24, fill = "rgba(201,168,106,.25)", style, className }){
  const m = _MASKS[mask] || "";
  const bgImage = _bgImage(variant, fill, size);
  const isCheck = variant === "checkerboard";
  const bgSize = isCheck ? `${size}px ${size}px, ${size}px ${size}px, ${size}px ${size}px, ${size}px ${size}px` : `${size}px ${size}px`;
  const bgPos = isCheck ? `0 0, 0 ${size/2}px, ${size/2}px ${-size/2}px, ${-size/2}px 0px` : undefined;
  return (
    <div
      className={className}
      style={{
        position: "absolute", inset: 0, width: "100%", height: "100%",
        backgroundImage: bgImage,
        backgroundSize: bgSize,
        backgroundPosition: bgPos,
        WebkitMaskImage: m || undefined, maskImage: m || undefined,
        ...style,
      }}
    />
  );
}

window.BGPattern = BGPattern;

/* icons.jsx — ícones de linha (estilo lucide), substituindo emojis.
   Exporta: window.Icon  →  <Icon name="key" size={22} />  */

function Icon({ name, size = 24, stroke = 1.6, style, className }){
  const line = {
    width: size, height: size, viewBox: "0 0 24 24",
    fill: "none", stroke: "currentColor", strokeWidth: stroke,
    strokeLinecap: "round", strokeLinejoin: "round",
    style, className, "aria-hidden": true, focusable: false,
  };
  const solid = { width: size, height: size, viewBox: "0 0 24 24", fill: "currentColor", style, className, "aria-hidden": true };

  switch (name){
    case "key": return (<svg {...line}><circle cx="7.5" cy="15.5" r="4.5"/><path d="M10.7 12.3 21 2"/><path d="m16.5 6.5 2 2"/><path d="m13.5 9.5 2 2"/></svg>);
    case "file-check": return (<svg {...line}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="m9 15 2 2 4-4"/></svg>);
    case "landmark": return (<svg {...line}><line x1="3" y1="22" x2="21" y2="22"/><line x1="6" y1="18" x2="6" y2="11"/><line x1="10" y1="18" x2="10" y2="11"/><line x1="14" y1="18" x2="14" y2="11"/><line x1="18" y1="18" x2="18" y2="11"/><polygon points="12 2 20 7 4 7"/></svg>);
    case "wallet": return (<svg {...line}><path d="M19 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H5a2 2 0 0 1-2-2V5"/><path d="M3 7v11a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"/><circle cx="16.5" cy="13" r="1" fill="currentColor" stroke="none"/></svg>);
    case "building": return (<svg {...line}><rect x="5" y="3" width="14" height="18" rx="1"/><path d="M9 21v-4h6v4"/><path d="M9 7h.01M15 7h.01M9 11h.01M15 11h.01"/></svg>);
    case "expand": return (<svg {...line}><path d="M8 3H5a2 2 0 0 0-2 2v3"/><path d="M21 8V5a2 2 0 0 0-2-2h-3"/><path d="M3 16v3a2 2 0 0 0 2 2h3"/><path d="M16 21h3a2 2 0 0 0 2-2v-3"/></svg>);
    case "pin": return (<svg {...line}><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>);
    case "shield-check": return (<svg {...line}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/></svg>);
    case "alert": return (<svg {...line}><path d="m21.7 18-8-14a2 2 0 0 0-3.4 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.7-3Z"/><line x1="12" y1="9" x2="12" y2="13.5"/><circle cx="12" cy="17" r=".6" fill="currentColor" stroke="none"/></svg>);
    case "check": return (<svg {...line}><path d="M20 6 9 17l-5-5"/></svg>);
    case "x": return (<svg {...line}><path d="M18 6 6 18M6 6l12 12"/></svg>);
    case "arrow-right": return (<svg {...line}><path d="M5 12h14M13 5l7 7-7 7"/></svg>);
    case "trend-down": return (<svg {...line}><path d="M16 17h6v-6"/><path d="m22 17-8.5-8.5-5 5L2 7"/></svg>);
    case "trend-up": return (<svg {...line}><path d="M16 7h6v6"/><path d="m22 7-8.5 8.5-5-5L2 17"/></svg>);
    case "quote": return (<svg {...line}><path d="M10 11c0-2.2-1.8-4-4-4s-4 1.8-4 4 1.8 4 4 4c0 2-1 3-3 4"/><path d="M22 11c0-2.2-1.8-4-4-4s-4 1.8-4 4 1.8 4 4 4c0 2-1 3-3 4"/></svg>);
    case "plus": return (<svg {...line}><path d="M12 5v14M5 12h14"/></svg>);
    case "phone": return (<svg {...line}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z"/></svg>);
    case "sparkle": return (<svg {...line}><path d="M12 3v4M12 17v4M3 12h4M17 12h4"/><path d="M12 8a4 4 0 0 0 4 4 4 4 0 0 0-4 4 4 4 0 0 0-4-4 4 4 0 0 0 4-4Z"/></svg>);
    case "star": return (<svg {...solid}><path d="M12 2.5l2.6 5.9 6.4.6-4.8 4.3 1.4 6.3L12 16.9 6.4 19.6l1.4-6.3L3 9l6.4-.6z"/></svg>);
    case "play": return (<svg {...solid} viewBox="0 0 24 24"><path d="M7 4.5v15a1 1 0 0 0 1.5.86l12-7.5a1 1 0 0 0 0-1.72l-12-7.5A1 1 0 0 0 7 4.5Z"/></svg>);
    default: return null;
  }
}

window.Icon = Icon;

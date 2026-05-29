# Parque Alvorada I — Landing Page

Landing page de lançamento dos apartamentos de 2 quartos do **Parque Alvorada I** (Luziânia–GO), Construtora AJMG. Ângulo de venda: *"saia do aluguel sem entrada"* — R$0 de entrada, R$0 de documentação, subsídio de até R$ 55 mil e FGTS aceito.

## Deploy

O arquivo **`index.html`** é autossuficiente — todas as imagens, fontes, CSS e JavaScript estão embutidos nele. Basta publicá-lo em qualquer host de site estático:

- **Netlify / Vercel / Cloudflare Pages:** conecte este repositório; sem comando de build, diretório de publicação = raiz.
- **GitHub Pages:** ative em *Settings → Pages*, branch `main`, pasta `/ (root)`.

Não há etapa de build: é só servir o `index.html`.

## Captação de leads

O formulário de simulação é multi-etapas e, ao final, abre o **WhatsApp (+55 61 99173-1449)** com os dados do lead já preenchidos na mensagem.

> ⚠️ **Atenção:** os dados só chegam ao WhatsApp se o visitante clicar no botão final e enviar a mensagem. Não há backup em planilha/e-mail/CRM — se a pessoa não enviar, o lead não fica registrado. Para tráfego pago, considere adicionar backup de leads e pixel de conversão futuramente.

## Estrutura do projeto

| Arquivo | Descrição |
|---|---|
| `index.html` | **Versão de produção** — tudo embutido, pronta pra deploy. |
| `Parque Alvorada I - Standalone.html` | Mesma versão de produção (origem do `index.html`). |
| `Parque Alvorada I.html` | Versão de edição — carrega os `.jsx` soltos (para desenvolvimento). |
| `*.jsx` | Componentes React (hero, seções, formulário, painel de ajustes). |
| `styles.css` | Estilos. |
| `image-slot.js` | Web component para gerenciamento das imagens. |
| `photos/` | Fotos do empreendimento. |

### Editar a página

A versão de edição usa React + Babel direto no navegador (sem build). Para alterar conteúdo, edite os arquivos `.jsx` e, ao finalizar, regenere o `index.html` a partir do Standalone.

---

Construtora AJMG • Parque Alvorada I, Luziânia–GO.

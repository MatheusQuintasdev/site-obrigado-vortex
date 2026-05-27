# VORTEX — Página de Obrigado (Pós-Checkout)

Página de confirmação de pagamento para **VORTEX Digital Innovations**, construída com React, Vite e Tailwind CSS.

## Desenvolvimento

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Deploy (Netlify)

**Produção:** https://glittery-duckanoo-960197.netlify.app

Configuração em `netlify.toml` (build: `npm run build`, publish: `dist`).

```bash
npx netlify-cli deploy --build --prod
```

## Conteúdo dinâmico (CMS / Backend)

Todos os textos, links e valores ficam em `src/data/pageContent.json`. Importe esse JSON no seu CMS ou substitua via API passando a prop `content` para `<ThankYouPage />`.

## Personalização rápida

- **WhatsApp:** altere `cta.href` no JSON (número e mensagem pré-preenchida).
- **Manutenção:** bloco `maintenance` com link HeroSpark da assinatura mensal.
- **WhatsApp:** bloco `whatsappCta` para envio de materiais.
- **Links do rodapé:** `footer.supportLinks`.

# Landing Page Premium — Espaço Sueli Pereira

Landing page única (rota `/`), em português, mobile-first, com foco total em um objetivo: agendamento pelo WhatsApp.

## Identidade visual

- Paleta (tokens semânticos no design system): #F2E0D5 (fundos suaves), #D9B6A9 (detalhes/bordas/hover), #A6442E (ações/CTAs), #59302D (títulos, header, footer), #BF6060 (ícones/badges pontuais). Base predominante clara e respirável.
- Tipografia: Playfair Display (títulos) + DM Sans (corpo/UI), carregadas via `<link>` no root.
- Cantos arredondados moderados, sombras muito suaves, composição editorial, formas curvas discretas. Sem gradientes fortes, neon ou glassmorphism.

## Estrutura da página

1. Navbar sticky — logo, menu (Início, Sobre, Serviços, Depoimentos, Contato) com scroll suave e underline animado, CTA "Agendar consulta" com ícone WhatsApp. Mobile: hamburger + CTA sempre visível. Sombra/transparência ao rolar.
2. Hero — eyebrow das três especialidades, headline com destaque em "dores", "movimento", "bem-estar", subheadline, CTA primário (WhatsApp) e secundário (→ serviços), imagem com cantos arredondados e parallax leve.
3. TrustBar — 4 benefícios rápidos com ícones lineares.
4. Sobre (`#sobre`) — imagem + texto, assinatura "Cuidado que começa entendendo você.", CTA.
5. Serviços (`#servicos`) — 7 cards (3/2/1 colunas), ícone, título, descrição, CTA por serviço com mensagem WhatsApp contextual.
6. "Talvez você esteja procurando exatamente isso" — 7 itens de identificação + CTA de avaliação.
7. Diferenciais — 4 blocos.
8. Processo — timeline horizontal (desktop) / vertical (mobile), 4 passos.
9. Depoimentos (`#depoimentos`) — componente preparado para dados reais do Google; sem lista de avaliações, exibe estado vazio administrativo e CTA "Ver mais avaliações no Google" com o link fornecido. Carousel no mobile, 3 por vez no desktop quando houver dados.
10. Localização (`#contato`) — endereço + botão "Como chegar" e iframe do mapa fornecido (lazy).
11. Horários — card com destaque dinâmico do dia atual e status "Aberto agora"/"Fechado agora" no fuso de Londrina.
12. Bloco de acolhimento — "Um espaço para você se sentir à vontade." (espaço seguro LGBTQ+, atendimento respeitoso), discreto.
13. Formas de pagamento — bloco compacto com bandeiras/métodos.
14. CTA final — fundo #F2E0D5, headline emocional, CTA WhatsApp grande + secundário.
15. Footer — marca, navegação, contato (WhatsApp +55 43 9616-9287), endereço, Instagram informado, horários, copyright 2026, links de Política de Privacidade e Termos (âncoras preparadas).
16. FloatingWhatsApp (desktop, tooltip) + MobileCTA sticky — nunca simultâneos.

## Conteúdo e imagens

- Copy exatamente conforme o briefing (Dor → Desejo → Solução → Confiança → Ação).
- Fotos enviadas de Sueli Pereira usadas como retrato na seção Sobre e no hero (as reais têm prioridade sobre genéricas). Imagens complementares de atendimento serão geradas em estética natural e sofisticada, coerentes com a paleta.
- Nada inventado: sem depoimentos, certificações, anos de experiência ou promessas de resultado.

## Detalhes técnicos

- Config centralizada em `src/config/business.ts`: WhatsApp (número + gerador de link com mensagem por contexto), endereço, horários, redes sociais, lista de serviços, URL do Google Maps/avaliações.
- Componentes em `src/components/landing/*` conforme a lista do briefing.
- Animações com Framer Motion (fade-in/slide-up sutil no viewport, hover de 1–2px, 300–700ms, easing suave), respeitando `prefers-reduced-motion`.
- Tokens de cor e fontes adicionados em `src/styles.css` (oklch, `@theme inline`); nenhuma cor hardcoded nos componentes.
- SEO: `head()` da rota com title/description do briefing, og/twitter, canonical, H1 único, HTML semântico, alt text, JSON-LD `LocalBusiness`/`HealthAndBeautyBusiness` apenas com dados reais fornecidos.
- Performance: lazy loading de imagens e do mapa, imagens responsivas, sem bibliotecas extras além de Framer Motion.
- Acessibilidade: focus states, aria-labels em ícones, alvos de toque adequados, contraste verificado, sem overflow horizontal de 320px a ultrawide.

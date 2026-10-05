// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },

    // Habilita a geração estática (SSG) das rotas.
    prerender: {
      // Liga a pré-renderização. O padrão é false.
      enabled: true,
      // Descobre automaticamente as rotas estáticas e as pré-renderiza todas.
      autoStaticPathsDiscovery: true,
      // Segue os links internos a partir das páginas já pré-renderizadas.
      crawlLinks: true,
      // Gera /pagina/index.html em vez de /pagina.html.
      autoSubfolderIndex: true,
      // Se uma rota falhar, o build para e mostra o erro (útil para não publicar quebrado).
      failOnError: true,
      // Número de tentativas em caso de falha.
      retryCount: 2,
      // Atraso entre tentativas (ms).
      retryDelay: 1000,
    },
  },

  // Opcional: força o Nitro a gerar uma saída puramente estática.
  // Isso garante que não sobre nenhum servidor Node.js no output.
  nitro: {
    static: true,
  },
});


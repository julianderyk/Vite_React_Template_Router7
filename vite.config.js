import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";

/**
 * Auto-Reload Plugin für Context HMR-Fehler
 * Lädt die Seite automatisch neu wenn Context Provider Fehler auftreten
 */
function autoReloadOnContextError() {
  return {
    name: 'auto-reload-on-context-error',
    transformIndexHtml(html) {
      return html.replace(
        '</head>',
        `<script>
          // Überwache Console Errors und reloade bei Context-Fehlern
          const originalError = console.error;
          console.error = function(...args) {
            const message = args.join(' ');
            if (message.includes('LanguageProvider') || 
                message.includes('useContext') ||
                message.includes('must be used within')) {
              console.warn('[Auto-Reload] Context Provider Fehler erkannt - Seite wird neu geladen...');
              setTimeout(() => window.location.reload(), 100);
            }
            originalError.apply(console, args);
          };
        </script></head>`
      );
    }
  };
}

/**
 * Vite Configuration
 * - Tailwind CSS v4 mit Vite Plugin
 * - React Router 7 Development Tools
 * - Auto-Reload bei Context-Fehlern (DEV only)
 */
export default defineConfig(({ mode }) => ({
  plugins: [
    tailwindcss(), 
    reactRouter(),
    mode === 'development' && autoReloadOnContextError()
  ].filter(Boolean),
}));

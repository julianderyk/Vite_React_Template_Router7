import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";
import { LanguageProvider } from "./context/LanguageContext";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import "./app.css";

/**
 * Links für externe Ressourcen (Fonts, etc.)
 */
export const links = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
];

/**
 * Layout Component
 * Wrapped die gesamte App mit LanguageProvider, Navigation und Footer
 */
export function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <LanguageProvider>
          <div className="min-h-screen bg-background text-foreground flex flex-col">
            <Navigation />
            <main className="container mx-auto p-8 max-w-7xl flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </LanguageProvider>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

/**
 * Root Component
 * Rendert die Outlet für React Router
 */
export default function App() {
  return <Outlet />;
}

/**
 * Error Boundary
 * Zeigt Fehlerseite bei Routing-Fehlern
 */
export function ErrorBoundary({ error }) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="min-h-screen bg-background text-foreground flex items-center justify-center p-8">
      <div className="bg-card p-10 rounded-lg shadow-light dark:shadow-dark border border-border max-w-2xl w-full">
        <h1 className="text-4xl font-bold text-foreground mb-4">{message}</h1>
        <p className="text-xl text-muted-foreground mb-6">{details}</p>
        {stack && (
          <pre className="mt-6 p-4 bg-bg-secondary dark:bg-bg-dark-secondary rounded-md overflow-auto text-sm text-foreground">
            {stack}
          </pre>
        )}
        <a 
          href="/" 
          className="inline-block mt-6 px-6 py-3 bg-accent hover:bg-accent-hover text-black font-semibold rounded-md transition-colors"
        >
          Go to Home
        </a>
      </div>
    </main>
  );
}

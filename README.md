# Template Web App - React Router 7 + Tailwind CSS v4

Eine moderne, browser-basierte Template-Anwendung mit React Router 7, Vite und Tailwind CSS v4.

## 🎯 Features

- ⚡️ **React Router 7** - File-based Routing mit SSR Support
- 🎨 **Tailwind CSS v4** - Neueste Version mit Vite Plugin
- 🌍 **Internationalisierung (i18n)** - Deutsch & Englisch Support
- 🌓 **Dark Mode** - Vollständiger Dark/Light Mode Support mit localStorage Persistenz
- 🎭 **Design System** - Custom CSS Variables für konsistentes Styling
- 📱 **Responsive** - Mobile-first Design
- ⚡️ **Hot Module Replacement (HMR)** - Schnelle Entwicklung mit Vite
- 📝 **JSX/JavaScript** - Kein TypeScript, pure JavaScript
- 🎯 **Anonymous Pro Font** - Self-hosted für DSGVO-Konformität
- 🎨 **Iconify React** - Umfangreiche Icon-Bibliothek

## 🚀 Tech Stack

- **React 19.x** - UI Framework
- **React Router 7.x** - File-based Routing & SSR
- **Vite 7.x** - Build Tool & Dev Server
- **Tailwind CSS v4** - Styling mit @tailwindcss/vite Plugin
- **JSX/JavaScript** - Kein TypeScript, pure JavaScript für maximale Einfachheit
- **@iconify/react** - Icons
- **@fontsource/anonymous-pro** - Typography

## 📦 Installation

Installiere die Dependencies:

```bash
npm install
```

## 🛠️ Development

Starte den Development Server:

```bash
npm run dev
```

Die Anwendung ist verfügbar unter `http://localhost:5173`.

## 🏗️ Build für Production

Erstelle einen Production Build:

```bash
npm run build
```

Starte den Production Server:

```bash
npm run start
```

## 📁 Projektstruktur

```
app/
├── components/          # Wiederverwendbare Komponenten
│   ├── ui/             # UI Komponenten (Input, etc.)
│   ├── Navigation.jsx  # Haupt-Navigation
│   ├── Footer.jsx      # Footer mit Links und Social Media
│   ├── DarkModeToggle.jsx
│   └── LanguageToggle.jsx
├── config/             # Konfigurationsdateien
│   └── languages.js    # Sprachkonfiguration
├── context/            # React Contexts
│   └── LanguageContext.jsx
├── hooks/              # Custom Hooks
│   └── useTranslation.js
├── lib/                # Utility Functions
│   ├── i18n.js        # Internationalisierung
│   └── utils.js       # Helper Functions
├── locales/           # Übersetzungen
│   ├── de.json
│   └── en.json
├── routes/            # React Router Routes
│   ├── home.jsx
│   ├── about.jsx
│   └── demo.jsx
├── app.css            # Globale Styles & Tailwind Config
├── root.jsx           # Root Layout mit Providern
└── routes.js          # Routes Konfiguration
```

## 🎨 Styling

### Tailwind CSS v4

Dieses Projekt verwendet **Tailwind CSS v4** mit dem neuen **@tailwindcss/vite Plugin**. Die wichtigsten Unterschiede:

- **Keine separate `tailwind.config.ts`** mehr benötigt
- **`@import "tailwindcss"`** statt `@tailwind` Direktiven
- **Custom Utilities** werden in `@layer utilities` definiert
- **CSS Variables** für das Design System

### Design System

Das Projekt verwendet ein vollständiges Design System mit:

- **CSS Custom Properties** für Farben (`--background`, `--foreground`, etc.)
- **Dark/Light Mode Support** via `.dark` und `.light` Klassen
- **Custom Utility Classes** für konsistentes Styling
- **Accent Color**: `#CFFF04` (Neon-Gelb/Grün)

### Custom Animations

- `slideInFromTop` - Smooth slide-in für neue Elemente
- `highlightPulse` - Highlight-Animation
- `progressBar` - Fortschrittsbalken-Animation
- `circularProgress` - Kreisförmiger Fortschritt

## 🌍 Internationalisierung

Das i18n-System unterstützt:

- **Mehrere Sprachen** mit einfacher Erweiterbarkeit
- **localStorage Persistenz** für Sprachauswahl
- **Dynamischer Sprachwechsel** ohne Page Reload
- **Verschachtelte Translation Keys** mit Dot-Notation
- **Variable Replacements** (z.B. `{{year}}`)
- **Intelligente UI**: Toggle für 2 Sprachen, Dropdown für 3+ Sprachen

### Aktuelle Sprachen
- 🇬🇧 English (EN)
- 🇩🇪 Deutsch (DE)
- 🇫🇷 Français (FR)
- 🇪🇸 Español (ES)
- 🇵🇹 Português (PT)

### Neue Sprache hinzufügen

1. **Sprachkonfiguration erweitern** (`app/config/languages.js`):
```javascript
{
    code: 'fr',
    name: 'French',
    nativeName: 'Français',
    flag: 'circle-flags:fr',
    default: false
}
```

2. **Übersetzungsdatei erstellen** (`app/locales/fr.json`):
```json
{
    "common": {
        "loading": "Chargement...",
        "error": "Erreur",
        ...
    }
}
```

3. **In i18n.js importieren** (`app/lib/i18n.js`):
```javascript
import frTranslations from '../locales/fr.json';

const translations = {
    en: enTranslations,
    de: deTranslations,
    fr: frTranslations,  // Neu
};
```

Das war's! Der LanguageToggle passt sich automatisch an:
- **2 Sprachen**: Toggle-Button zum schnellen Wechseln
- **3+ Sprachen**: Dropdown-Menü mit Flaggen und Namen

### Verwendung

```jsx
import { useTranslation } from '../hooks/useTranslation';

function MyComponent() {
  const t = useTranslation();
  
  return (
    <div>
      <h1>{t('home.title')}</h1>
      <p>{t('footer.copyright', { year: 2024 })}</p>
    </div>
  );
}
```

## 🌓 Dark Mode

Der Dark Mode:

- **localStorage Persistenz** - Präferenz wird gespeichert
- **Automatische HTML Class** - `.dark` oder `.light`
- **CSS Variables** - Automatische Anpassung aller Farben
- **Toggle Component** - `DarkModeToggle.tsx`

## 📝 Verfügbare Seiten

- **Home (`/`)** - Landing Page mit Features und CTA
- **About (`/about`)** - Über die App & Tech Stack
- **Demo (`/demo`)** - Komponenten-Demo (Counter, Inputs, Colors, Animations)

## 🔧 Scripts

- `npm run dev` - Development Server starten
- `npm run build` - Production Build erstellen
- `npm run start` - Production Server starten

## 📚 Wichtige Libraries

### Dependencies
- `react` & `react-dom` - UI Framework
- `react-router` - Routing
- `@iconify/react` - Icons
- `@fontsource/anonymous-pro` - Typography
- `clsx` & `tailwind-merge` - Utility für Class Names
- `class-variance-authority` - Variants für Komponenten

### DevDependencies
- `@react-router/dev` - React Router Development Tools
- `@tailwindcss/vite` - Tailwind CSS v4 Vite Plugin
- `tailwindcss` - Tailwind CSS Core
- `tailwindcss-animate` - Animation Utilities
- `vite` - Build Tool

## 🚢 Deployment

### Docker Deployment

```bash
docker build -t template-app .
docker run -p 3000:3000 template-app
```

### Platforms

- AWS ECS
- Google Cloud Run
- Azure Container Apps
- Vercel
- Netlify
- Railway
- Fly.io

## 📖 Dokumentation

- [React Router Docs](https://reactrouter.com/)
- [Tailwind CSS v4 Docs](https://tailwindcss.com/)
- [Vite Docs](https://vitejs.dev/)
- [Iconify React](https://iconify.design/docs/icon-components/react/)

## 🎯 Best Practices

### CSS Custom Properties
Alle Farben werden über CSS Variables definiert für einfache Theme-Anpassung.

### JavaScript/JSX
Pures JavaScript ohne TypeScript für maximale Einfachheit und schnellere Entwicklung.

### Component Structure
Klare Trennung zwischen UI Components, Routes und Business Logic.

### Accessibility
Semantisches HTML und ARIA-Attribute wo nötig.

### Performance
- Server-Side Rendering für schnelle Initial Loads
- Code Splitting via React Router
- Optimierte Assets via Vite

---

Built with ❤️ using React Router 7, Vite & Tailwind CSS v4

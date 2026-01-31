import { index } from "@react-router/dev/routes";

/**
 * Routes Configuration für React Router 7
 * Definiert die File-based Routing Struktur
 */
export default [
  index("routes/home.jsx"),
  { path: "about", file: "routes/about.jsx" },
  { path: "demo", file: "routes/demo.jsx" },
];

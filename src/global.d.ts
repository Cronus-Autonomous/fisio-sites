// src/vite-env.d.ts ou src/global.d.ts

interface Window {
  gtag?: (...args: any[]) => void;
  dataLayer?: any[];
}
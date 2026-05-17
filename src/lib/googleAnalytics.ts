const DEFAULT_GA_MEASUREMENT_ID = 'G-HXQX92DZ7W';
const GA_MEASUREMENT_ID = (import.meta.env.VITE_GA_MEASUREMENT_ID || DEFAULT_GA_MEASUREMENT_ID).trim();

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

let isInitialized = false;
let lastTrackedPath: string | null = null;

const getPageUrl = (path: string) => `${window.location.origin}${path}`;

const getPagePath = (path: string) => {
  if (!path) {
    return `${window.location.pathname}${window.location.search}${window.location.hash}`;
  }

  return path.startsWith('/') ? path : `/${path}`;
};

const getDataLayer = () => {
  window.dataLayer = window.dataLayer || [];
  return window.dataLayer;
};

const appendGoogleAnalyticsScript = () => {
  if (!GA_MEASUREMENT_ID) {
    return;
  }

  const scriptId = 'google-analytics-gtag';

  if (document.getElementById(scriptId)) {
    return;
  }

  const script = document.createElement('script');
  script.id = scriptId;
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(GA_MEASUREMENT_ID)}`;
  document.head.appendChild(script);
};

export const initializeGoogleAnalytics = () => {
  if (isInitialized) {
    return;
  }

  getDataLayer();

  window.gtag =
    window.gtag ||
    ((...args: unknown[]) => {
      getDataLayer().push(args);
    });

  if (GA_MEASUREMENT_ID) {
    appendGoogleAnalyticsScript();
    window.gtag('js', new Date());
    window.gtag('config', GA_MEASUREMENT_ID, { send_page_view: false });
  }

  isInitialized = true;
};

export const trackPageView = (path: string) => {
  const pagePath = getPagePath(path);

  if (lastTrackedPath === pagePath) {
    return;
  }

  lastTrackedPath = pagePath;

  const pageViewParameters = {
    page_location: getPageUrl(pagePath),
    page_path: pagePath,
    page_title: document.title,
  };

  if (GA_MEASUREMENT_ID && window.gtag) {
    window.gtag('event', 'page_view', pageViewParameters);
  }
};

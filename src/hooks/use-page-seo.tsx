import { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface PageSEOProps {
  title: string;
  description: string;
  ogImage?: string;
  ogType?: string;
  jsonLd?: Record<string, unknown>;
}

const SITE_URL = "https://thekarowgroup.com";

const usePageSEO = ({ title, description, ogImage, ogType = "website", jsonLd }: PageSEOProps) => {
  const location = useLocation();

  useEffect(() => {
    const prevTitle = document.title;
    const metaDesc = document.querySelector('meta[name="description"]');
    const prevDesc = metaDesc?.getAttribute("content") || "";

    // Title & description
    document.title = title;
    if (metaDesc) {
      metaDesc.setAttribute("content", description);
    }

    // Canonical
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", `${SITE_URL}${location.pathname}`);

    // OG tags
    const setMeta = (selector: string, content: string) => {
      let el = document.querySelector(selector) as HTMLMetaElement | null;
      if (el) {
        el.setAttribute("content", content);
      }
    };

    setMeta('meta[property="og:title"]', title);
    setMeta('meta[property="og:description"]', description);
    setMeta('meta[property="og:type"]', ogType);
    setMeta('meta[property="og:url"]', `${SITE_URL}${location.pathname}`);
    if (ogImage) {
      setMeta('meta[property="og:image"]', ogImage);
      setMeta('meta[name="twitter:image"]', ogImage);
    }
    setMeta('meta[name="twitter:card"]', "summary_large_image");

    // JSON-LD
    let scriptEl: HTMLScriptElement | null = null;
    if (jsonLd) {
      scriptEl = document.createElement("script");
      scriptEl.type = "application/ld+json";
      scriptEl.textContent = JSON.stringify(jsonLd);
      document.head.appendChild(scriptEl);
    }

    return () => {
      document.title = prevTitle;
      if (metaDesc) {
        metaDesc.setAttribute("content", prevDesc);
      }
      if (scriptEl) {
        document.head.removeChild(scriptEl);
      }
    };
  }, [title, description, ogImage, ogType, jsonLd, location.pathname]);
};

export default usePageSEO;

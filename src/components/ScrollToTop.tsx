import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Scrolls to the top of the page on every route (pathname) change —
 * EXCEPT when the navigation is targeting a specific section
 * (via location.state.scrollTo, set by the nav menu, or a URL hash).
 * In those cases the destination page's own section-scroll logic
 * handles positioning, so we leave it alone.
 */
const ScrollToTop = () => {
  const { pathname, hash, state } = useLocation();

  useEffect(() => {
    const hasSectionTarget =
      Boolean((state as { scrollTo?: string } | null)?.scrollTo) || Boolean(hash);
    if (hasSectionTarget) return;
    window.scrollTo({ top: 0, left: 0 });
  }, [pathname, hash, state]);

  return null;
};

export default ScrollToTop;

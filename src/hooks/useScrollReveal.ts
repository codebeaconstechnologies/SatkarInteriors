import { useEffect } from 'react';

/**
 * Fades in elements marked `data-reveal` as they enter the viewport.
 *
 * Elements are only hidden when <html> has the `reveal-ready` class, which an inline
 * script in index.html adds unless the visitor prefers reduced motion. Without JS,
 * or for crawlers, everything stays visible.
 */
export function useScrollReveal(routeKey: string) {
  useEffect(() => {
    const root = document.documentElement;
    if (!root.classList.contains('reveal-ready')) return;

    const reveal = (el: Element) => el.setAttribute('data-revealed', '');

    if (!('IntersectionObserver' in window)) {
      document.querySelectorAll('[data-reveal]').forEach(reveal);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          reveal(entry.target);
          io.unobserve(entry.target);
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
    );

    const observeWithin = (scope: ParentNode) =>
      scope.querySelectorAll('[data-reveal]:not([data-revealed])').forEach((el) => io.observe(el));

    observeWithin(document);

    // Content that appears later (e.g. a gallery filter) is observed too.
    const mo = new MutationObserver((mutations) => {
      for (const m of mutations) {
        m.addedNodes.forEach((node) => {
          if (!(node instanceof Element)) return;
          if (node.matches('[data-reveal]:not([data-revealed])')) io.observe(node);
          observeWithin(node);
        });
      }
    });
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, [routeKey]);
}

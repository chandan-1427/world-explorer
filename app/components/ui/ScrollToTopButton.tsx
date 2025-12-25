import { useEffect, useState } from "react";

export function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
    if (document.body.scrollHeight <= window.innerHeight) return;
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setVisible(window.scrollY > 300);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    const isReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    window.scrollTo({
      top: 0,
      behavior: isReducedMotion ? "auto" : "smooth",
    });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`
        fixed bottom-6 right-6 z-50
        flex items-center justify-center
        h-12 w-12 rounded-full
        bg-blue-600 text-white shadow-xl cursor-pointer
        transition-all duration-500 cubic-bezier(0.4, 0, 0.2, 1)
        hover:bg-blue-700 hover:-translate-y-1 active:scale-95
        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
        ${
          visible
            ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
            : "opacity-0 translate-y-10 scale-50 pointer-events-none"
        }
      `}
    >
      <svg 
        className="w-6 h-6 transition-transform group-hover:-translate-y-1" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 10l7-7m0 0l7 7m-7-7v18" />
      </svg>
    </button>
  );
}
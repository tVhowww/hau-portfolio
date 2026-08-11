import { AnimatePresence, motion } from "framer-motion";
import { useEffect, type ReactNode } from "react";
import { useLocation } from "react-router-dom";

/**
 * PageTransition - wraps the routed page content and provides the two
 * required route-transition animations, triggered on every navigation
 * (both navbar links and CTA buttons, since both go through React Router):
 *
 * 1. Page content fades + slides up slightly on enter, fades + slides down
 *    slightly on exit
 * 2. A progress bar sweeps across the top of the viewport on every route
 *    change, echoing a "page loading" cue without covering content
 *
 * Also resets scroll position to the top on every route change (replaces
 * a separate ScrollToTop component).
 */
export function PageTransition({ children }: { children: ReactNode }) {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname]);

  return (
    <>
      {/* Transition #2: progress bar sweeping across the top */}
      <motion.div
        key={`bar-${pathname}`}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-50 h-1 bg-primary shadow-[0_0_8px_var(--color-primary)]"
        initial={{ scaleX: 0, opacity: 1 }}
        animate={{ scaleX: 1, opacity: 0 }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
        style={{ transformOrigin: "left", width: "100%" }}
      />

      {/* Transition #1: content fade + vertical slide */}
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={pathname}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  );
}

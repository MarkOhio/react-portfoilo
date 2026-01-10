
import { useRef, useEffect } from "react";
import { useAnimation, Variants } from "framer-motion";
import { useInView } from "framer-motion";

type HookReturn = {
  ref: React.RefObject<HTMLDivElement | null>;
  controls: ReturnType<typeof useAnimation>;
  listVariant: Variants;
  itemVariant: Variants;
};

/**
* useSocialMediaAnimation
* - returns a ref to attach to the container, an animation controller, and variants.
* - triggers on page load OR when the container scrolls into view (whichever happens first).
* - uses Framer Motion's useAnimation + useInView for reliability.
*/
export default function useSocialMediaAnimation(): HookReturn {
  const ref = useRef<HTMLDivElement | null>(null);
  const controls = useAnimation();
  // `useInView` will watch the ref and mark true when the element is visible
  const inView = useInView(ref, { once: true, margin: "-10% 0px -10% 0px" });

  // parent variant coordinates stagger
  const listVariant: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.08,
      },
    },
  };

  // each item fades in; we will animate internal parts using layout or child variants
  const itemVariant: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 320, damping: 28, duration: 0.4 },
    }),
  };

  useEffect(() => {
    // If already in view => start
    if (inView) {
      controls.start("visible");
      return;
    }

    // otherwise also start on full page load (if the element might already be visible at load)
    const onLoad = () => {
      // small delay so the app has settled
      setTimeout(() => controls.start("visible"), 90);
    };

    // start on DOMContentLoaded (if loading)
    if (document.readyState === "complete" || document.readyState === "interactive") {
      // if interactive, schedule a short delay to start animation
      onLoad();
    } else {
      window.addEventListener("load", onLoad, { once: true });
    }

    // cleanup
    return () => {
      window.removeEventListener("load", onLoad);
    };
  }, [controls, inView]);

  return { ref, controls, listVariant, itemVariant };
}

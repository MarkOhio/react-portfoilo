import { useEffect } from "react";

export default function useLazyLoad() {
  useEffect(() => {
    const images = document.querySelectorAll<HTMLImageElement>("img[data-src]");

    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            img.src = img.dataset.src || "";
            observer.unobserve(img);
          }
        });
      },
      { rootMargin: "100px" }
    );

    images.forEach((img) => observer.observe(img));
    return () => observer.disconnect();
  }, []);
}
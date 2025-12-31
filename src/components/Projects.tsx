
import { useEffect, useRef, useState } from "react";
import "../styles/projects.css";
import useLazyLoad from "../hooks/useLazyLoad"; 

type Project = {
  title: string;
  description: string;
  image: string;
  demoLink: string;
  githubLink: string;
};

const projectList: Project[] = [
  {
    title: "DeMARK Shop",
    description:
      "An e-commerce tech store with theme toggle, lazy loading, and local storage cart.",
    image: "flat.jpg",
    demoLink: "#",
    githubLink: "#",
  },
  {
    title: "Budget Tracker",
    description:
      "A responsive budget app with animated charts and CSV import/export using localStorage. ntrhtre rthbrthbeger gbrtbtbdf  gervd",
    image: "tall.jpg",
    demoLink: "#",
    githubLink: "#",
  },
  {
    title: "Portfolio V1",
    description:
      "First personal site prototype — polished classic design using pure HTML + CSS.",
    image: "logo.png",
    demoLink: "#",
    githubLink: "#",
  },
];

export default function Projects() {
  useLazyLoad();
  const trackRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);
  const [cardWidth, setCardWidth] = useState(0);
  const speed = 25 / 60; // px per frame (25 px/s)
  let animationFrame: number;

  // Infinite scroll function
  const step = () => {
    const track = trackRef.current;
    if (!track || paused) return;

    track.scrollLeft += speed;

    // Reset seamlessly when scrolled past half the track
    if (track.scrollLeft >= track.scrollWidth / 2) {
      track.scrollLeft = 0;
    }

    animationFrame = requestAnimationFrame(step);
  };

  // Start / stop animation
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // Clone all cards to create infinite loop
    track.innerHTML += track.innerHTML;

    // Respect user motion preference
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!prefersReduced.matches) animationFrame = requestAnimationFrame(step);

    // Debounce resize recalculation
    const resize = () => {
      clearTimeout((resize as any)._timer);
      (resize as any)._timer = setTimeout(() => {
        if (track.firstElementChild)
          setCardWidth(
            (track.firstElementChild as HTMLElement).offsetWidth +
              parseFloat(getComputedStyle(track).gap || "0")
          );
      }, 250);
    };

    window.addEventListener("resize", resize);
    resize();

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
    };
  }, [paused]);

  // Hover / touch pause logic
  const handlePause = () => {
    setPaused(true);
    setTimeout(() => setPaused(false), 2000);
  };

  // Manual navigation
  const moveBy = (dir: number) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollBy({ left: dir * cardWidth, behavior: "smooth" });
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") moveBy(-1);
      if (e.key === "ArrowRight") moveBy(1);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  });

  // Swipe navigation
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let startX = 0;
    let deltaX = 0;

    const onTouchStart = (e: TouchEvent) => {
      startX = e.touches[0].clientX;
    };
    const onTouchMove = (e: TouchEvent) => {
      deltaX = e.touches[0].clientX - startX;
    };
    const onTouchEnd = () => {
      if (Math.abs(deltaX) > 40) moveBy(deltaX > 0 ? -1 : 1);
      deltaX = 0;
    };

    track.addEventListener("touchstart", onTouchStart);
    track.addEventListener("touchmove", onTouchMove);
    track.addEventListener("touchend", onTouchEnd);
    return () => {
      track.removeEventListener("touchstart", onTouchStart);
      track.removeEventListener("touchmove", onTouchMove);
      track.removeEventListener("touchend", onTouchEnd);
    };
  }, [cardWidth]);

  return (
    <section id="projects" className="projects-section">
    

      <div className="carousel-wrapper">
        <button
          className="nav-btn prev"
          aria-label="Previous project"
          onClick={() => moveBy(-1)}
        >
          ← Prev
        </button>

        <div
          className="carousel-track"
          ref={trackRef}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={handlePause}
          onTouchStart={() => setPaused(true)}
          onTouchEnd={handlePause}
          aria-live="polite"
        >
         
{projectList.map((project, index) => (
  <div
    className="project-card"
    key={index}
    style={{
      backgroundImage: `url(${project.image})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    {/* Buttons always visible */}
    <div className="project-buttons-overlay">
      <a
        href={project.demoLink}
        className="btn-outline"
        target="_blank"
        rel="noopener noreferrer"
      >
        Live
      </a>
      <a
        href={project.githubLink}
        className="btn-solid"
        target="_blank"
        rel="noopener noreferrer"
      >
      Demo
      </a>
    </div>

    {/* Title + description (hidden until hover) */}
    <div className="project-hover-overlay">
      <h3 className="project-title">{project.title}</h3>
      <p className="project-description">{project.description}</p>
    </div>
  </div>
))}
        </div>

        <button
          className="nav-btn next"
          aria-label="Next project"
          onClick={() => moveBy(1)}
        >
          Next →
        </button>
      </div>
    </section>
  );
}

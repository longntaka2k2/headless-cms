import { useEffect, useRef, useState } from "react";

function useScrollTracker(selectorExpression?: string) {
  const [currentSection, setCurrentSection] = useState("");
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "10px",
      threshold: [0.5],
    };

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setCurrentSection(entry.target.id);
        }
      });
    }, observerOptions);

    return () => {
      if (observerRef?.current) {
        observerRef.current?.disconnect();
      }
    };
  }, [observerRef]);

  useEffect(() => {
    const sections = document.querySelectorAll(selectorExpression ?? "div[id]");
    sections.forEach((section) => {
      observerRef.current?.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observerRef.current?.unobserve(section);
      });
    };
  }, [selectorExpression]);

  return currentSection;
}

export default useScrollTracker;

import { useEffect, useRef, useState } from "react";

interface Props {
  root: any;
  rootMargin: string;
  threshold: number | number[];
}

function useScrollTracker(option?: Props) {
  const [currentSection, setCurrentSection] = useState("");
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setCurrentSection(entry.target.id);
        }
      });
    }, option ?? observerOptions);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [option]);

  useEffect(() => {
    const sections = document.querySelectorAll("div[id]");
    sections.forEach((section) => {
      observerRef.current?.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observerRef.current?.unobserve(section);
      });
    };
  }, []);

  return currentSection;
}

export default useScrollTracker;

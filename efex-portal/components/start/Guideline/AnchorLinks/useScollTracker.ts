import { useEffect, useRef, useState } from 'react';

function useScrollTracker() {
  const [currentSection, setCurrentSection] = useState('');
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setCurrentSection(entry.target.id);
        }
      });
    }, observerOptions);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll('div[id]');
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

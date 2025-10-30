/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import { useTranslation } from "next-i18next";
import Image from "next/image";

export const HeroSlidePOD = () => {
  const { t } = useTranslation("common");
  const elementRef = useRef(null);
  const [isVisible, setVisible] = useState(false);
  const strapiDomain = "https://cms-strapi.ichiba.net";

  // Sample data - replace with your actual data
  const slideItems = [
    { image: "/uploads/Rectangle_52729_5b093ff5f6.svg" },
    { image: "/uploads/Rectangle_52730_4e2cd6e352.svg" },
    { image: "/uploads/Rectangle_52731_1aa9153ba5.svg" },
    { image: "/uploads/Rectangle_52732_bdcffeefd7.svg" },
    { image: "/uploads/Rectangle_52733_ffcc88180a.svg" },
    { image: "/uploads/Rectangle_52734_81f755c76f.svg" },
    { image: "/uploads/Rectangle_52729_5b093ff5f6.svg" },
    { image: "/uploads/Rectangle_52730_4e2cd6e352.svg" },
    { image: "/uploads/Rectangle_52731_1aa9153ba5.svg" },
  ];

  useEffect(() => {
    // Intersection Observer for animation on scroll into view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 1 / 3 },
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    // Arc animation on scroll
    const handleArcScroll = () => {
      const slideItems = document.querySelectorAll(".hero-slide-item");
      const valueY = window.scrollY;
      const maxScroll = 1500;

      if (valueY < maxScroll) {
        // Fixed distance between items (in pixels)
        const fixedDistance = 350; // Adjust this value as needed

        // Calculate base radius that will change with scroll
        const baseRadius = 1400 - valueY * 0.3;

        slideItems.forEach((item, index) => {
          const element = item as HTMLElement;

          // Calculate the arc angle based on fixed distance
          // As radius decreases, we need to increase the angle to maintain fixed distance
          const itemWidth = 250; // Approximate width of each item
          const circumference = 1.5 * Math.PI * baseRadius;
          const angleStep =
            ((fixedDistance + itemWidth) / circumference) * Math.PI;
          const angle = index * angleStep;

          // Center position adjustments based on scroll
          const centerOffsetX = -valueY * 0.2;

          // Calculate position on the inverted arc
          const x = centerOffsetX + baseRadius * Math.cos(angle);
          const y = -baseRadius * Math.sin(angle) + baseRadius;

          // Apply rotation to make items face inward toward the arc center
          const rotation = -((angle * 180) / Math.PI - 90);

          // Add a z-index based on position to prevent visual overlap
          element.style.zIndex = `${Math.floor(10 + 10 * Math.sin(angle))}`;
          element.style.transform = `translate(${x}px, ${y}px) rotate(${rotation}deg)`;
        });
      }
    };

    window.addEventListener("scroll", handleArcScroll);
    // Initial call to position items
    handleArcScroll();

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
      window.removeEventListener("scroll", handleArcScroll);
    };
  }, []);

  return (
    <section
      className="tw-relative scroll-smooth tw-overflow-hidden tw-pb-28"
      ref={elementRef}
    >
      <div
        className={clsx(
          "tw-animate-showOn tw-transition-all tw-duration-300 tw-relative tw-h-[675px] tw-mt-0",
          isVisible
            ? "tw-scale-100 tw-opacity-100"
            : "tw-opacity-0 tw-scale-75",
        )}
      >
        {/* Background arc of product images */}
        <div className="tw-absolute tw-w-full tw-h-full tw-top-0 tw-left-0">
          {slideItems.map((item, index) => (
            <div
              key={index}
              className="tw-absolute tw-min-w-[134px] tw-min-h-[188px] lg:tw-min-w-[305px] lg:tw-min-h-[426px] tw-rounded-lg hero-slide-item"
              style={{
                backgroundImage: `url(${strapiDomain}${item.image})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
                left: "50%",
                top: "5%",
                transformOrigin: "center",
                transition: "transform 0.2s ease-out",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                border: "1px solid #e0e0e0",
                opacity: "0.9", // Slightly transparent to enhance depth
              }}
            />
          ))}
        </div>
      </div>
      <Image
        src={"https://cms-strapi.ichiba.net/uploads/Mk_1d55b40171.svg"}
        width={1059}
        height={603}
        className="tw-absolute tw-bottom-5 tw-left-[50%] tw-translate-x-[-50%] tw-z-50"
        alt="#"
      />
    </section>
  );
};

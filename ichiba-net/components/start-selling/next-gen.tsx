"use client";
import { useEffect, useRef, useState } from "react";
import Image, { StaticImageData } from "next/image";
import clsx from "clsx";
import Link from "next/link";
import MultiMarketplace from "./assets/multi-marketplace.png";
import SmartCrossDocking from "./assets/smart-cross-docking.png";
import FasterMulti from "./assets/faster-multi.png";
import VerifyProduct from "./assets/verify-product.png";

interface Contents {
  image: StaticImageData;
  title: string;
  des: string;
  link: string;
}

const contents: Contents[] = [
  {
    image: MultiMarketplace,
    title: "Multi-marketplace sync",
    des: "Publish listings across multiple platforms in one click. Connects all your stores while keeping product data consistent, so you can sell everywhere without managing separate data.",
    link: "#",
  },
  {
    image: SmartCrossDocking,
    title: "Smart cross-docking routing",
    des: "Automatically fulfilled orders direct from the nearest or most cost-effective store/warehouse (JP/US/VN), bypassing central storage. Faster delivery, lower shipping cost, and reduced handling time for every order.",
    link: "#",
  },
  {
    image: FasterMulti,
    title: "Faster multi-store scaling",
    des: "Expand to new marketplaces or stores without extra overhead. The platform handles cross-docking, syncing, and fulfillment automatically, letting you grow your business efficiently.",
    link: "#",
  },
  {
    image: VerifyProduct,
    title: "Verified products",
    des: "All items from our Japanese and Vietnamese marketplace sources are carefully verified, giving sellers confidence that they’re high-quality and reliable.",
    link: "#",
  },
];

const NextGen = ({ lang }: any) => {
  const [visibleSections, setVisibleSections] = useState<boolean[]>([]);
  const [isHeaderVisible, setHeaderVisible] = useState(false);

  const headerRef = useRef<HTMLDivElement | null>(null);

  // Quan sát heading
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setHeaderVisible(true);
          observer.unobserve(entries[0].target);
        }
      },
      { threshold: 0.3 }
    );
    if (headerRef.current) observer.observe(headerRef.current);
    return () => observer.disconnect();
  }, []);

  // Quan sát từng section
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    contents.forEach((_, index) => {
      const element = document.querySelector(`#section-${index}`);
      if (element) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setVisibleSections((prev) => {
                  const updated = [...prev];
                  updated[index] = true;
                  return updated;
                });
                observer.unobserve(entry.target);
              }
            });
          },
          { threshold: 0.3 }
        );
        observer.observe(element);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <div className="relative py-10 lg:pt-11 lg:pb-20 px-4">
      <div className="container grid gap-6 lg:gap-12 items-center">
        {/* Heading Section */}
        <div
          ref={headerRef}
          className={clsx(
            "text-center transition-all duration-700 ease-out",
            isHeaderVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          )}
        >
          <h2
            className={clsx(
              "mb-4 transition-all duration-700 delay-200 ease-out",
              isHeaderVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            )}
          >
            Next-gen platform for{" "}
            <span className="text-brand-primary">
              cross-docking dropshipping
            </span>{" "}
            among stores
          </h2>
          <p
            className={clsx(
              "lg:w-[70%] mx-auto transition-all duration-700 delay-500 ease-out",
              isHeaderVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            )}
          >
            With 10+ years of experience in cross-border ecommerce, partner with
            5+ top trusted Japan marketplace, IChiba next-generation
            cross-docking model enables sellers to move products seamlessly
            across marketplaces - Amazon, eBay, TikTok Shop US, Shopify, and
            more without extra inventory or manual uploads.
          </p>
        </div>

        {/* Sections */}
        <div className="grid gap-8 lg:gap-12">
          {contents.map((item, index) => {
            const isVisible = visibleSections[index];
            return (
              <div
                key={index}
                id={`section-${index}`}
                className={clsx(
                  "flex flex-col lg:items-center gap-3 lg:gap-0",
                  index % 2 ? "lg:flex-row-reverse" : "lg:flex-row"
                )}
              >
                {/* Image */}
                <div
                  className={clsx(
                    "lg:flex-1 transition-all duration-700 ease-out delay-200",
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-20"
                  )}
                >
                  <Image
                    src={item.image}
                    width={580}
                    height={380}
                    className="mx-auto"
                    alt={item.title}
                  />
                </div>

                {/* Text */}
                <div
                  className={clsx(
                    "lg:flex-1 lg:p-10 transition-all duration-700 ease-out delay-500",
                    index % 2 ? "lg:pr-20" : "lg:pl-20",
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-20"
                  )}
                >
                  <h3 className="mb-2 lg:mb-4">{item.title}</h3>
                  <p className="mb-3 lg:mb-6">{item.des}</p>
                  <Link
                    href={item.link || "#"}
                    className="text-sm text-primary-6 underline"
                  >
                    Read more
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default NextGen;

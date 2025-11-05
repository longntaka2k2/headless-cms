"use client";
import { useEffect, useRef, useState } from "react";
import LabelTag from "@/components/commons/label-tag";
import ProofCard from "./proof-card";
import clsx from "clsx";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { StaticImageData } from "next/image";
import Thumnail1 from "../assets/proof/thumnail1.webp";
import Thumnail2 from "../assets/proof/thumnail2.webp";
import Thumnail3 from "../assets/proof/thumnail3.webp";
import Thumnail4 from "../assets/proof/thumnail4.webp";
import Thumnail5 from "../assets/proof/thumnail5.webp";
import Thumnail6 from "../assets/proof/thumnail6.webp";
import Thumnail7 from "../assets/proof/thumnail7.webp";
import Thumnail8 from "../assets/proof/thumnail8.webp";

interface Proofs {
  thumnail: StaticImageData;
  userName: string;
  career: string;
  textarea: string;
  star: number;
}

export const listProof: Proofs[] = [
  {
    thumnail: Thumnail1,
    userName: "Maria Gonzales, Spain",
    career: "Small business owner",
    textarea:
      "“As a small business owner, I was worried about managing logistics. IChiba’s fulfillment service saved me so much time and allowed me to focus on marketing and growing my brand.”",
    star: 5.0,
  },
  {
    thumnail: Thumnail2,
    userName: "Kenji Watanabe",
    career: "Store owner",
    textarea:
      "“Before using IChiba, I struggled to find high-quality products for my niche. Now, I have access to unique items that my customers love, and fulfillment is completely automated.”",
    star: 5.0,
  },
  {
    thumnail: Thumnail3,
    userName: "David Chen, Singapore",
    career: "R&D manager",
    textarea:
      "“I’ve tried other platforms, but IChiba stands out with its private suppliers and smooth integrations. It’s a one-stop solution for scaling a global dropshipping business.”",
    star: 5.0,
  },
  {
    thumnail: Thumnail4,
    userName: "Sarah L., USA ",
    career: "Online store owner",
    textarea:
      "“IChiba made it so easy to start my dropshipping store. I was able to connect with reliable suppliers from Vietnam and Japan, and my sales grew steadily within just a few months.”",
    star: 5.0,
  },
  {
    thumnail: Thumnail5,
    userName: "Emily Brown, UK",
    career: "Fashion POD store founder",
    textarea:
      "“Thanks to IChiba, I expanded my online store to international markets without huge upfront costs. The platform is user-friendly and the support team is always responsive.”",
    star: 5.0,
  },
  {
    thumnail: Thumnail6,
    userName: "Michael Tran, Australia",
    career: "POD seller",
    textarea:
      "“The POD (print-on-demand) options on IChiba are amazing. I launched a custom product line quickly, and it’s been a game-changer for my eCommerce journey.”",
    star: 5.0,
  },
  {
    thumnail: Thumnail7,
    userName: "Aisha Karim, Canada",
    career: "E-commerce entrepreneur",
    textarea:
      "“IChiba made dropshipping simple, connecting me with reliable Vietnamese and Japanese suppliers and clear shipping to grow sales fast.”",
    star: 5.0,
  },
  {
    thumnail: Thumnail8,
    userName: "Marco Reyes, South African",
    career: "Dropshipping store owner",
    textarea:
      "“With IChiba, I quickly sourced quality products and managed orders. Reliable logistics and support let me focus on marketing while dropshipping revenue kept climbing.”",
    star: 5.0,
  },
];

const Proof = ({ lang }: any) => {
  const [isVisible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<HTMLDivElement[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setPaused] = useState(false);

  // Animation on visible
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Scroll to a specific card
  const scrollToCard = (index: number) => {
    if (!scrollRef.current || !cardRefs.current[index]) return;
    scrollRef.current.scrollTo({
      left: cardRefs.current[index].offsetLeft,
      behavior: "smooth",
    });
  };

  const scroll = (direction: "left" | "right") => {
    let newIndex =
      direction === "left"
        ? Math.max(currentIndex - 1, 0)
        : Math.min(currentIndex + 1, listProof.length - 1);
    setCurrentIndex(newIndex);
    scrollToCard(newIndex);
  };

  // 🔹 Auto slide every 4s
  useEffect(() => {
    if (isPaused) return; // paused on hover
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const next = prev + 1 >= listProof.length ? 0 : prev + 1;
        scrollToCard(next);
        return next;
      });
    }, 4000);
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <div
      ref={sectionRef}
      className={clsx(
        "relative py-6 lg:pt-15 lg:pb-10",
        "relative transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
        "bg-[linear-gradient(0deg,_#F3F3FF_0%,_rgba(226,_221,_255,_0.00)_100%)] flex flex-col gap-6 lg:gap-10",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      )}
    >
      <div className="container px-4 text-center">
        <LabelTag
          value="PROOF"
          borderGradient
          className="mx-auto mb-4"
          background="bg-primary-2"
        />
        <h2 className="mb-3">
          Real value - <span className="text-brand-primary">Real customer</span>
        </h2>
        <p className="text-ic-ink-5 lg:w-[70%] mx-auto">
          See how real suppliers are achieving more with IChiba, from reaching
          international customers to simplifying cross-border fulfillment.
        </p>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scroll-smooth no-scrollbar items-stretch py-4"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {listProof.map((item, index) => (
          <div
            key={index}
            ref={(el) => {
              if (el) cardRefs.current[index] = el;
            }}
            className="flex-shrink-0 h-full"
          >
            <ProofCard lang={lang} data={item} />
          </div>
        ))}
      </div>

      <div className="flex gap-3 lg:gap-6 justify-center">
        <div
          className="w-9 h-9 lg:w-12 lg:h-12 rounded-full flex items-center justify-center bg-ic-ink-2 hover:bg-brand-primary cursor-pointer"
          onClick={() => scroll("left")}
        >
          <FontAwesomeIcon
            icon={faArrowLeft}
            width={24}
            height={24}
            className="text-white"
          />
        </div>
        <div
          className="w-9 h-9 lg:w-12 lg:h-12 rounded-full flex items-center justify-center bg-ic-ink-2 hover:bg-brand-primary cursor-pointer"
          onClick={() => scroll("right")}
        >
          <FontAwesomeIcon
            icon={faArrowRight}
            width={24}
            height={24}
            className="text-white"
          />
        </div>
      </div>
    </div>
  );
};

export default Proof;

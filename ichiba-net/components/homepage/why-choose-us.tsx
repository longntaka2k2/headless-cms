'use client';
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import { motion, AnimatePresence } from "framer-motion";
import IllusForSellers from "./assets/illus-for-sellers.webp";
import IllusForSuppliers from "./assets/illus-for-suppliers.webp";

const listType = [
  {
    label: "For sellers",
    image: IllusForSellers,
    items: [
      {
        title: ["Diverse, trusted sources"],
        content: [
          "Access ",
          "1M+ products ",
          "directly from verified Japanese & Vietnamese suppliers.",
        ],
      },
      {
        title: ["End-to-end platform"],
        content: [
          "From product sourcing to POD to multi-channel order management and fulfillment - monitor everything in one place.",
        ],
      },
      {
        title: ["Faster fulfillment"],
        content: [
          "6+ warehouses across US, Japan, Vietnam ensure your orders ship quickly & reliably.",
        ],
      },
      {
        title: ["Global expansion"],
        content: [
          "Unique products from Japan & Vietnam help you stand out in crowded global marketplaces.",
        ],
      },
    ],
  },
  {
    label: "For suppliers",
    image: IllusForSuppliers,
    items: [
      {
        title: ["Go global without ads"],
        content: ["US/EU/JP reach via Amazon, TikTok Shop, Etsy, eBay & more."],
        italic: true,
        note: ["• Zero marketing spend", "• No new store setup"],
      },
      {
        title: ["No subscription"],
        content: ["Pay as you grow. Pay % per fulfilled order & only for services you use."],
      },
      {
        title: ["Direct access to ", "1000+ ", "sellers"],
        content: ["Just list your products once - IChiba sellers will bring them to the world."],
      },
      {
        title: ["Automated operations"],
        content: [
          "IChiba handles order processing, fulfillment, and shipping so you can focus on your products.",
        ],
      },
    ],
  },
];

export default function WhyChooseUs({ lang, locale }: { lang: any; locale: string }) {
  const [active, setActive] = useState(0);
  const [isVisible, setVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement | null>(null);

  // Hiệu ứng hiện khi scroll tới
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      });
    });
    if (elementRef.current) observer.observe(elementRef.current);
    return () => observer.disconnect();
  }, []);

  const content = listType[active];

  // Variants cho animation của từng box
  const boxVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: i * 0.15, // mỗi box trễ nhẹ để tạo hiệu ứng lần lượt
        ease: "easeOut",
      },
    }),
    exit: { opacity: 0, y: 20, transition: { duration: 0.3 } },
  };

  return (
    <div
      ref={elementRef}
      className={clsx(
        "container transition-all duration-300 pt-6 pb-10 lg:pt-15 lg:pb-10",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      )}
    >
      <h2 className="text-center mb-2">Why choose us</h2>
      <p className="text-center lg:w-[80%] mx-auto mb-6">
        We connect sellers and suppliers through a next-gen dropshipping platform, making sourcing, fulfillment, and global growth easier than ever.
      </p>

      {/* Tabs */}
      <div className="bg-ic-ink-1 rounded-[30px] flex w-max mx-auto relative z-1 mb-6 lg:mb-10 overflow-hidden">
        {listType.map((item, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={clsx(
              "py-2 px-4 lg:py-3 lg:px-6 text-sm lg:text-lg font-medium rounded-[30px] transition-all duration-300 relative",
              active === i ? "text-white bg-brand-primary" : "text-ic-ink-5"
            )}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* Boxes + Animation */}
      <div className="relative lg:h-[520px] box-animation">
        <AnimatePresence mode="wait">
          {isVisible && (
            <motion.div
              key={active}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="grid gap-4 mb-6 lg:mb-0"
            >
              {content.items.map((item, index) => (
                <motion.div
                  key={index}
                  variants={boxVariants}
                  custom={index}
                  className={clsx(
                    "lg:absolute p-5 rounded-2xl shadow-[0_4px_20px_0_rgba(19,_17,_61,_0.08)] bg-white lg:max-w-[395px] transition-transform duration-500",
                    content === listType[0] && [
                      index === 0 && "lg:top-[50px] lg:left-5",
                      index === 1 && "lg:top-3 lg:right-[70px]",
                      index === 2 && "lg:bottom-0 lg:left-[60px]",
                      index === 3 && "lg:bottom-20 lg:right-4",
                    ],
                    content === listType[1] && [
                      index === 2 && "lg:top-[50px] lg:left-5",
                      index === 1 && "lg:top-3 lg:right-[70px]",
                      index === 3 && "lg:bottom-0 lg:left-[60px]",
                      index === 0 && "lg:bottom-20 lg:right-4",
                    ]
                  )}
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-lg lg:text-xl font-medium mb-2">
                    {item.title.map((t, i) => (
                      <span key={i} className={i === 1 ? "text-brand-primary" : ""}>
                        {t}
                      </span>
                    ))}
                  </p>
                  <p
                    className={clsx(
                      "text-ic-ink-5",
                      item.note ? "" : "mb-2",
                      item.italic && "italic"
                    )}
                  >
                    {item.content.map((t, i) => (
                      <span key={i} className={i === 1 ? "text-brand-primary" : ""}>
                        {t}
                      </span>
                    ))}
                  </p>
                  {item.note && (
                    <div className="flex flex-col gap-1 text-sm text-ic-ink-5">
                      {item.note.map((n, i) => (
                        <p key={i}>{n}</p>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Image chuyển mượt */}
        <AnimatePresence mode="wait">
          <motion.div
            key={content.image.src}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src={content.image}
              width={720}
              height={510}
              alt={content.label}
              className="mx-auto select-none pointer-events-none"
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

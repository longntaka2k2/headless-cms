"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { usePathname } from "next/navigation";

const PopupModal: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const pathname = usePathname();
  const locale = pathname.split("/")[1] || "en";

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercentage =
        (window.scrollY /
          (document.documentElement.scrollHeight - window.innerHeight)) *
        100;
      if (scrollPercentage >= 50) {
        setShowModal(true);
        window.removeEventListener("scroll", handleScroll);
      }
    };

    // Show popup after 10 seconds
    const timer = setTimeout(() => {
      setShowModal(true);
      window.removeEventListener("scroll", handleScroll);
    }, 10000);

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, []);

  if (!showModal) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
        <div className="relative rounded-lg max-w-md w-full">
          <button
            onClick={() => setShowModal(false)}
            className="absolute -top-5 -right-5 w-[40px] h-[40px] bg-white hover:bg-slate-200 rounded-full p-2 shadow-md"
          >
            <FontAwesomeIcon icon={faClose} className="w-4 h-4" />
          </button>
          <Link href={`/${locale}/contact-sales`} target="_blank">
            <Image
              src="https://strapi-efex.ichiba.net/uploads/POPUP_cf90042393.png"
              alt=""
              width={512}
              height={512}
              className="mx-auto w-full h-full"
            />
          </Link>
        </div>
      </div>
    </>
  );
};

export default PopupModal;

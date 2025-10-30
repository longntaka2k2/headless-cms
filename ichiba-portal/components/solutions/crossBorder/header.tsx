import Image from "next/image";

import logo from "@/public/icons/solutions/logo-cross-border-ecom.svg";
import { useEffect, useState } from "react";
import React from "react";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import Link from "next/link";

function useScrollCount() {
  const [scrollCount, setScrollCount] = useState(0);

  useEffect(() => {
    function handleScroll() {
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      setScrollCount(scrollTop);
    }

    window.addEventListener("scroll", handleScroll);
  }, []);

  return scrollCount;
}
interface MyComponentProps {
  children?: any;
  onClick?: () => void;
  className?: string;
  // Các props khác
}

// eslint-disable-next-line react/display-name
const CustomToggle = React.forwardRef<null, MyComponentProps>((props, ref) => (
  // Dùng props.children và props.onClick ở đây
  <span className=" " onClick={props.onClick}>
    {props.children}
  </span>
));

export default function HeaderShip4p() {
  const { t } = useTranslation("common");
  const [rotateChevron, setRotateChevron] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  let host = typeof window !== "undefined" ? window.location.origin : "";
  const handleRotate = async () => {
    await setRotateChevron(!rotateChevron);
    setIsOpen(!isOpen);
  };
  const rotate = rotateChevron === true ? "rotate(180deg)" : "rotate(0)";
  const scrollCount = useScrollCount();
  return (
    <>
      <div
        className={`${scrollCount > 99 ? "header-fixed" : ""
          } secondary-header d-sm-none d-md-block`}
      >
        <div className="container">
          <div className="d-flex justify-content-between">
            <div className="d-flex logo">
              <Link
                rel="canonical"
                href="/solutions/cross-border-ecommerce"
                className="d-flex align-items-center gap-1"
                passHref
              >
                <Image
                  src={logo}
                  alt="logo"
                  className="cursor"
                  loading="lazy"
                  width={"32"}
                  height={32}
                />
                <h1 className="w-100 fs-20 fw-900 lg-24">
                  {t("solutions.cbe.crossBorderEcommerce")}
                </h1>
              </Link>
            </div>
            <div className="d-flex align-self-center ctas">
              <Link
                href={
                  host === "https://ichiba.vn"
                    ? "https://api.ichiba.vn/account/login?redirectUrl=https://app.ichiba.net"
                    : "https://api.ichiba.net/account/login?redirectUrl=https://app.ichiba.net"
                }
                target="_black"
                className="text-decoration-none p-2 cta cta-get-start cursor mx-3"
                rel="nofollow"
              >
                {t("getStart")}
              </Link>
              <Link
                rel="canonical"
                href="/contact-sales"
                className=" p-2 cta cta-contact cursor text-decoration-none "
                style={{ color: "#FFFFFF" }}
                passHref
              >
                {t("contactSale")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

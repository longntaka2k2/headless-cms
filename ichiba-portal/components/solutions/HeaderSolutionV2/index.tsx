import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import React from "react";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import Link from "next/link";
import clsx from "clsx";
import { useScrollDirection } from "@/hooks/useScrollDirection";
import useWidth from "@/hooks/useWidth";

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

export interface Props {
  name: string;
  icons: any;
  link: string;
}

export default function HeaderSolutionV2(props: Props) {
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
  const refCta = useRef<HTMLInputElement>(null);
  const scrollDirection = useScrollDirection();
  const width = useWidth();
  const [botBarVisible, setBotBarVisible] = useState(true);

  useEffect(() => {
    if (width < 576) {
      setBotBarVisible(scrollDirection == "up");
    }
  }, [scrollDirection, width]);
  return (
    <>
      <div
        className={`${
          scrollCount > 99 ? "tw-fixed  tw-z-[152] tw-top-0" : ""
        } secondary-header d-sm-none d-md-block`}
      >
        <div className="lg:tw-container ">
          <div className="d-flex justify-content-between">
            <div className="d-flex logo md:tw-min-w-max tw-mx-4 lg:tw-mx-0">
              <Link
                href={props.link}
                rel="canonical"
                className="d-flex align-items-center gap-1 color-black tw-no-underline"
                passHref
              >
                <Image
                  src={props.icons}
                  alt="logo"
                  className="cursor"
                  loading="lazy"
                  width={"32"}
                  height={32}
                />
                <h1 className="tw-font-bold tw-text-xl tw-ms-2 tw-mb-0">
                  {props.name}
                </h1>
              </Link>
            </div>
            <div
              ref={refCta}
              className={clsx(
                "tw-fixed tw-bottom-0 tw-z-[15a0] md:tw-static",
                [
                  botBarVisible ? "tw-flex " : "tw-hidden",
                  "lg:align-self-center lg:tw-justify-end tw-justify-evenly tw-gap-4 lg:tw-gap-2",
                ],
                "tw-bg-white   tw-px-4 tw-pb-4 tw-pt-2 lg:tw-px-0 lg:tw-py-0 tw-w-full ",
                "tw-text-center",
              )}
            >
              <Link
                role="button"
                className={clsx(
                  "p-2 btn-contact cursor tw-flex-grow lg:tw-flex-grow-0",
                  "tw-border-2 tw-border-solid tw-border-brand-primary tw-rounded-lg  tw-px-2 tw-py-3 tw-min-w-[92px] tw-no-underline",
                  "tw-text-brand-primary",
                )}
                target="_blank"
                href={"/contact-sales"}
                rel="canonical"
              >
                {t("contactSale")}
              </Link>
              <Link
                role="button"
                href={"/book-demo"}
                target="_blank"
                className={clsx(
                  "p-2 btn-get-start cursor me-3 tw-flex-grow lg:tw-flex-grow-0",
                  "tw-border-2 tw-border-solid tw-border-brand-primary tw-rounded-lg  tw-px-2 tw-py-3 tw-min-w-[92px] tw-no-underline",
                  "tw-bg-brand-primary tw-text-white",
                )}
                rel="canonical"
              >
                {t("bookDemo")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

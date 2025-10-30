/* eslint-disable @next/next/link-passhref */
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { clsx } from "clsx";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function IChibaSaas() {
  const n = useTranslation("new-home-page").t;
  const [onHover, setHover] = useState("");
  const [isVisible, setVisible] = useState(false);
  const elementRef = useRef(null);
  const classHover =
    "tw-absolute tw-pointer-events-none tw-items-center tw-left-[35%] tw-justify-center tw-top-[40%] tw-w-max lg:tw-text-[#F57C00] lg:tw-gap-2 tw-bg-white tw-whitespace-nowrap tw-flex tw-py-2 tw-px-3 tw-rounded-lg tw-border tw-border-[#F57C00] tw-transition-all tw-duration-300 ";
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 1 / 7 },
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={elementRef}
      className={clsx(
        "tw-py-6 tw-px-4 lg:tw-px-0 lg:tw-py-20 lg:tw-bg-[url(https://cms-strapi.ichiba.net/uploads/Light_Background_2_1_1_c31c2f8cd1.png)] tw-bg-cover",
        "tw-bg-[url(https://cms-strapi.ichiba.net/uploads/Light_Background_2_1_2_21eef0d924.png)] tw-bg-[#F4F5FB]",
      )}
    >
      <div
        className={clsx(
          "tw-transition-all tw-duration-500 tw-delay-400 lg:tw-container",
          isVisible
            ? "tw-translate-y-0 tw-opacity-100"
            : "tw-opacity-0 tw-translate-y-14",
        )}
      >
        <div>
          <div className="lg:tw-flex tw-justify-between tw-items-center">
            <div>
              <h2 className="tw-font-bold tw-text-2xl lg:tw-text-4xl">
                {n("ichibaProduct.title")}
              </h2>
              <div className="tw-text-sm tw-mt-2 lg:tw-text-base lg:tw-max-w-[550px]">
                {n("ichibaProduct.subtitle")}
              </div>
            </div>
            <Link
              href={"/products"}
              className="tw-no-underline tw-text-sm tw-text-white lg:tw-px-8 lg:tw-py-4 tw-bg-[#F57C00] tw-rounded-lg lg:tw-text-base lg:tw-gap-3 tw-w-max tw-p-3 tw-mt-6 tw-flex tw-gap-2 tw-items-center tw-whitespace-nowrap"
            >
              <div>{n("ichibaProduct.viewMore")}</div>
              <FontAwesomeIcon icon={faArrowRight} />
            </Link>
          </div>
        </div>
        <div className="tw-mt-6 lg:tw-mt-15">
          <div className="tw-text-xs lg:tw-text-base tw-font-bold tw-flex tw-items-center tw-gap-2">
            <div className="tw-text-[#666] ">
              {n("ichibaProduct.forSeller")}
            </div>
            <div className="tw-w-14 tw-h-[1px] tw-bg-[#666]"></div>
          </div>
          <div className="tw-grid tw-gap-4 lg:tw-gap-6 tw-mt-4 ">
            <div className="lg:tw-flex tw-gap-6">
              <Link
                href={n("ichibaProduct.commerceLayer.link") as string}
                className="tw-rounded-lg tw-bg-[rgba(255,255,255,0.70)] tw-text-[#333] tw-no-underline "
              >
                <div className="tw-flex tw-gap-2 tw-p-4 lg:tw-p-7">
                  <Image
                    src={n("ichibaProduct.commerceLayer.icons") || ""}
                    alt=""
                    className="lg:tw-w-[48px]"
                    width={40}
                    height={40}
                  />
                  <div>
                    <div className="tw-text-lg tw-font-bold ">
                      {n("ichibaProduct.commerceLayer.title")}
                    </div>
                    <div className="tw-text-sm">
                      {n("ichibaProduct.commerceLayer.content")}
                    </div>
                  </div>
                </div>
                <div
                  className={clsx("lg:tw-relative")}
                  onMouseEnter={() => setHover("commerceLayer")}
                  onMouseLeave={() => setHover("")}
                >
                  <Image
                    src={n("ichibaProduct.commerceLayer.img") || ""}
                    alt=""
                    className={clsx(
                      onHover === "commerceLayer" ? "lg:hover:tw-blur" : "",
                    )}
                    width={560}
                    height={693}
                  />
                  <div
                    className={clsx(
                      classHover,
                      onHover === "commerceLayer"
                        ? "tw-opacity-100"
                        : "tw-opacity-0",
                    )}
                  >
                    <div>{n("ichibaProduct.viewMore")}</div>
                    <FontAwesomeIcon icon={faArrowRight} />
                  </div>
                </div>
              </Link>
              <div className="tw-grid tw-gap-4 lg:tw-gap-6">
                <Link
                  href={n("ichibaProduct.ship4p.link") as string}
                  className="tw-rounded-lg tw-bg-[rgba(255,255,255,0.70)] tw-no-underline tw-text-[#333] lg:tw-flex lg:tw-items-center lg:tw-gap-[100px] tw-overflow-hidden"
                >
                  <div className="tw-flex tw-gap-2 tw-p-4 lg:tw-p-7">
                    <Image
                      src={n("ichibaProduct.ship4p.icons") || ""}
                      alt=""
                      className="lg:tw-w-[48px]"
                      width={40}
                      height={40}
                    />
                    <div>
                      <div className="tw-text-lg tw-font-bold ">
                        {n("ichibaProduct.ship4p.title")}
                      </div>
                      <div className="tw-text-sm">
                        {n("ichibaProduct.ship4p.content")}
                      </div>
                    </div>
                  </div>
                  <div
                    className="lg:tw-relative"
                    onMouseEnter={() => setHover("ship4p")}
                    onMouseLeave={() => setHover("")}
                  >
                    <Image
                      src={n("ichibaProduct.ship4p.img") || ""}
                      alt=""
                      width={557}
                      height={248}
                      className={onHover === "ship4p" ? "lg:hover:tw-blur" : ""}
                    />
                    <div
                      className={clsx(
                        classHover,
                        onHover === "ship4p"
                          ? "tw-opacity-100"
                          : "tw-opacity-0",
                      )}
                    >
                      <div>{n("ichibaProduct.viewMore")}</div>
                      <FontAwesomeIcon icon={faArrowRight} />
                    </div>
                  </div>
                </Link>

                <Link
                  href={n("ichibaProduct.storeFront.link") as string}
                  className="tw-rounded-lg tw-bg-[rgba(255,255,255,0.70)] tw-no-underline tw-text-[#333] lg:tw-flex lg:tw-items-center lg:tw-gap-[100px] tw-overflow-hidden"
                >
                  <div className="tw-flex tw-gap-2 tw-p-4 lg:tw-p-7 lg:tw-whitespace-nowrap">
                    <Image
                      src={n("ichibaProduct.storeFront.icons") || ""}
                      alt=""
                      className="lg:tw-w-[48px]"
                      width={40}
                      height={40}
                    />
                    <div>
                      <div className="tw-text-lg tw-font-bold ">
                        {n("ichibaProduct.storeFront.title")}
                      </div>
                      <div className="tw-text-sm">
                        {n("ichibaProduct.storeFront.content")}
                      </div>
                    </div>
                  </div>
                  <div
                    className="lg:tw-relative"
                    onMouseEnter={() => setHover("storeFront")}
                    onMouseLeave={() => setHover("")}
                  >
                    <Image
                      src={n("ichibaProduct.storeFront.img") || ""}
                      alt=""
                      className={clsx(
                        "lg:tw-max-w-[512px] lg:tw-flex-1",
                        onHover === "storeFront" ? "lg:hover:tw-blur" : "",
                      )}
                      width={768}
                      height={430}
                    />
                    <div
                      className={clsx(
                        classHover,
                        onHover === "storeFront"
                          ? "tw-opacity-100"
                          : "tw-opacity-0",
                      )}
                    >
                      <div>{n("ichibaProduct.viewMore")}</div>
                      <FontAwesomeIcon icon={faArrowRight} />
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="tw-mt-6 lg:tw-mt-10">
          <div className="tw-text-xs lg:tw-text-base tw-font-bold tw-flex tw-items-center tw-gap-2">
            <div className="tw-text-[#666] ">
              {n("ichibaProduct.forOperator")}
            </div>
            <div className="tw-w-14 tw-h-[1px] tw-bg-[#666]"></div>
          </div>
          <div className="tw-grid tw-gap-4 lg:tw-gap-6 tw-mt-4 lg:tw-grid-cols-2">
            <Link
              href={n("ichibaProduct.wms.link") as string}
              className="tw-rounded-lg tw-bg-[rgba(255,255,255,0.70)] tw-no-underline tw-text-[#333]"
            >
              <div className="tw-flex tw-gap-2 tw-p-4 lg:tw-p-7">
                <Image
                  src={n("ichibaProduct.wms.icons") || ""}
                  alt=""
                  className="lg:tw-w-[48px]"
                  width={40}
                  height={40}
                />
                <div>
                  <div className="tw-text-lg tw-font-bold ">
                    {n("ichibaProduct.wms.title")}
                  </div>
                  <div className="tw-text-sm">
                    {n("ichibaProduct.wms.content")}
                  </div>
                </div>
              </div>
              <div
                className="lg:tw-relative"
                onMouseEnter={() => setHover("wms")}
                onMouseLeave={() => setHover("")}
              >
                <Image
                  src={n("ichibaProduct.wms.img") || ""}
                  alt=""
                  width={783}
                  height={411}
                  className={onHover === "wms" ? "lg:hover:tw-blur" : ""}
                />
                <div
                  className={clsx(
                    classHover,
                    onHover === "wms" ? "tw-opacity-100" : "tw-opacity-0",
                  )}
                >
                  <div>{n("ichibaProduct.viewMore")}</div>
                  <FontAwesomeIcon icon={faArrowRight} />
                </div>
              </div>
            </Link>
            <Link
              href={n("ichibaProduct.smartcb.link") as string}
              className="tw-rounded-lg tw-bg-[rgba(255,255,255,0.70)] tw-no-underline tw-text-[#333]"
            >
              <div className="tw-flex tw-gap-2 tw-p-4 lg:tw-p-7">
                <Image
                  src={n("ichibaProduct.smartcb.icons") || ""}
                  alt=""
                  className="lg:tw-w-[48px]"
                  width={40}
                  height={40}
                />
                <div>
                  <div className="tw-text-lg tw-font-bold ">
                    {n("ichibaProduct.smartcb.title")}
                  </div>
                  <div className="tw-text-sm">
                    {n("ichibaProduct.smartcb.content")}
                  </div>
                </div>
              </div>
              <div
                className="lg:tw-relative"
                onMouseEnter={() => setHover("smartcb")}
                onMouseLeave={() => setHover("")}
              >
                <Image
                  src={n("ichibaProduct.smartcb.img") || ""}
                  alt=""
                  width={783}
                  height={411}
                  className={onHover === "smartcb" ? "lg:hover:tw-blur" : ""}
                />
                <div
                  className={clsx(
                    classHover,
                    onHover === "smartcb" ? "tw-opacity-100" : "tw-opacity-0",
                  )}
                >
                  <div>{n("ichibaProduct.viewMore")}</div>
                  <FontAwesomeIcon icon={faArrowRight} />
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="tw-mt-6">
          <div className="tw-text-xs lg:tw-text-base tw-font-bold tw-flex tw-items-center tw-gap-2">
            <div className="tw-text-[#666] ">
              {n("ichibaProduct.capabilites")}
            </div>
            <div className="tw-w-14 tw-h-[1px] tw-bg-[#666]"></div>
          </div>
          <div className="tw-grid tw-gap-4 lg:tw-gap-6 tw-mt-4 lg:tw-grid-cols-2">
            <Link
              href={n("ichibaProduct.invoiceBilling.link") as string}
              className="tw-rounded-lg tw-bg-[rgba(255,255,255,0.70)] tw-no-underline tw-text-[#333]"
            >
              <div className="tw-flex tw-gap-2 tw-p-4 lg:tw-p-7">
                <Image
                  src={n("ichibaProduct.invoiceBilling.icons") || ""}
                  alt=""
                  className="lg:tw-w-[48px]"
                  width={40}
                  height={40}
                />
                <div>
                  <div className="tw-text-lg tw-font-bold ">
                    {n("ichibaProduct.invoiceBilling.title")}
                  </div>
                  <div className="tw-text-sm">
                    {n("ichibaProduct.invoiceBilling.content")}
                  </div>
                </div>
              </div>
              <div
                className="lg:tw-relative"
                onMouseEnter={() => setHover("invoiceBilling")}
                onMouseLeave={() => setHover("")}
              >
                <Image
                  src={n("ichibaProduct.invoiceBilling.img") || ""}
                  alt=""
                  width={783}
                  height={411}
                  className={
                    onHover === "invoiceBilling" ? "lg:hover:tw-blur" : ""
                  }
                />
                <div
                  className={clsx(
                    classHover,
                    onHover === "invoiceBilling"
                      ? "tw-opacity-100"
                      : "tw-opacity-0",
                  )}
                >
                  <div>{n("ichibaProduct.viewMore")}</div>
                  <FontAwesomeIcon icon={faArrowRight} />
                </div>
              </div>
            </Link>
            <Link
              href={n("ichibaProduct.integrations.link") as string}
              className="tw-rounded-lg tw-bg-[rgba(255,255,255,0.70)] tw-no-underline tw-text-[#333]"
            >
              <div className="tw-flex tw-gap-2 tw-p-4 lg:tw-p-7">
                <Image
                  src={n("ichibaProduct.integrations.icons") || ""}
                  alt=""
                  className="lg:tw-w-[48px]"
                  width={40}
                  height={40}
                />
                <div>
                  <div className="tw-text-lg tw-font-bold ">
                    {n("ichibaProduct.integrations.title")}
                  </div>
                  <div className="tw-text-sm">
                    {n("ichibaProduct.integrations.content")}
                  </div>
                </div>
              </div>
              <div
                className="lg:tw-relative"
                onMouseEnter={() => setHover("integrations")}
                onMouseLeave={() => setHover("")}
              >
                <Image
                  src={n("ichibaProduct.integrations.img") || ""}
                  alt=""
                  width={783}
                  height={411}
                  className={
                    onHover === "integrations" ? "lg:hover:tw-blur" : ""
                  }
                />
                <div
                  className={clsx(
                    classHover,
                    onHover === "integrations"
                      ? "tw-opacity-100"
                      : "tw-opacity-0",
                  )}
                >
                  <div>{n("ichibaProduct.viewMore")}</div>
                  <FontAwesomeIcon icon={faArrowRight} />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

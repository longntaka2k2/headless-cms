/* eslint-disable @next/next/link-passhref */

import Image from "next/image";
import { useEffect, useState } from "react";
import { useTranslation } from "next-i18next";
import useWidth from "@/const/withCount";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import userIcon from "@/public/icons/products/digital-commerce/user.svg";
import itemIcon from "@/public/icons/products/digital-commerce/items.svg";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import CountUp from "react-countup";

const SideBarItems = (props: {
  numb: number;
  prefix?: string;
  suffix?: string;
  des: string;
  icon: string | StaticImport;
  className?: string;
}) => (
  <div
    className={clsx("tw-flex-1 tw-flex  tw-gap-2 lg:tw-gap-6", props.className)}
  >
    <div className="">
      <div className="tw-rounded tw-p-3 tw-bg-[#F0F5FF]">
        <Image src={props.icon} alt="" width={32} height={32} />
      </div>
    </div>
    <div className="tw-flex-grow">
      <CountUp
        className="tw-font-bold lg:tw-text-xl"
        duration={2}
        start={0}
        end={props.numb}
        suffix={props.suffix}
        prefix={props.prefix}
      />
      <p className="tw-mb-0 tw-text-sm lg:tw-text-base">{props.des}</p>
    </div>
  </div>
);

export default function CustomerSay(props: any) {
  let host = typeof window !== "undefined" ? window.location.origin : "";
  const [isOpen, setIsOpen] = useState(0);
  const { t } = useTranslation("digital");
  const tt = (key: string) => t(key, { returnObjects: true });

  const widthCount = useWidth();
  const [selectedProduct, setSelectedProduct] = useState<any>(undefined);
  const [activeProduct, setActiveProduct] = useState(0);

  const contents: any[] = [
    {
      ...tt("ourCustomer.contents.0"),
      user: 10000,
      items: 120,
      img: "https://cms-strapi.ichiba.net/uploads/Rectangle_6657_83e4e9a9a1.png",
      itemsSuffix: t("ourCustomer.item"),
    },
    {
      ...tt("ourCustomer.contents.1"),
      user: 60000,
      items: 15,
      img: "https://cms-strapi.ichiba.net/uploads/Rectangle_6649_1_d3080ecb8e.png",
      itemsSuffix: t("ourCustomer.milItems"),
    },
  ];

  useEffect(() => {
    let selectedProductIndex = 0;
    setActiveProduct(selectedProductIndex);

    const intervalId = setInterval(() => {
      selectedProductIndex++;

      if (selectedProductIndex >= (contents.length ?? 0)) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        selectedProductIndex = 0;
      }
      setActiveProduct(selectedProductIndex);
    }, 7000);
    return () => {
      clearInterval(intervalId);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSmoothScroll = (value: string) => {
    let selectedProductIndex = activeProduct;
    if (value === "left") {
      if (activeProduct <= 0) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        selectedProductIndex = contents.length;
      }
      setActiveProduct(selectedProductIndex - 1);
    } else {
      if (selectedProductIndex === contents.length - 1) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        setActiveProduct(0);
      } else {
        setActiveProduct(selectedProductIndex + 1);
      }
    }
  };

  return (
    <section
      className={clsx(
        "tw-bg-[url('https://cms-strapi.ichiba.net/uploads/BG_Platform_1_bdc94081cd.png')]",
        "lg:tw-bg-[url('https://cms-strapi.ichiba.net/uploads/BG_desktop_92b4316c6c.png')]",
        "tw-object-cover tw-bg-no-repeat tw-bg-center",
      )}
    >
      <div className="tw-py-6 md:tw-py-16 customer-say lg:tw-py-[40px]">
        <div className="container">
          <h2 className="tw-text-center tw-font-bold tw-text-2xl lg:tw-text-4xl lg:tw-mb-14">
            {t("ourCustomer.heading")}
          </h2>

          <div className="tw-flex tw-pb-6 tw-w-full lg:tw-w-[50%] lg:tw-mx-auto">
            {contents.map((x, idx) => (
              <div
                key={idx}
                className={clsx(
                  "tw-pb-3 tw-text-sm tw-text-center tw-grow  tw-cursor-pointer",
                  "lg:tw-uppercase lg:tw-text-xl",
                  activeProduct == idx
                    ? "tw-border-b-[4px] tw-border-primary-6 tw-text-primary-6"
                    : "tw-border-b-[1px] tw-border-pending-5 tw-text-pending-5",
                )}
                onClick={() => setActiveProduct(idx)}
              >
                <span className="">
                  <span className="tw-hidden md:tw-inline ">{`${
                    idx + 1
                  }. `}</span>
                  <span>{x.title}</span>
                </span>
              </div>
            ))}
          </div>

          <div
            className={clsx(
              "tw-flex tw-flex-col md:tw-flex-row lg:tw-gap-3",
              "my-lg-3 my-2 ",
            )}
          >
            <div className="tw-w-full lg:tw-w-[25%] tw-mb-4  tw-flex tw-items-center">
              <div className="tw-flex-grow">
                <div className="lg:tw-mb-10 tw-mb-4">
                  <div className="tw-mb-1 tw-font-bold lg:tw-text-xl">
                    {contents[activeProduct].title}
                  </div>
                  <div className="tw-text-sm lg:tw-text-base tw-text-pending-5">
                    {contents[activeProduct].des}
                  </div>
                </div>
                <div className="tw-flex md:tw-flex-col tw-gap-4 lg:tw-gap-10">
                  <SideBarItems
                    icon={userIcon}
                    numb={contents[activeProduct].user}
                    des={t("ourCustomer.user")}
                    prefix={t("ourCustomer.over") + " "}
                  />
                  <SideBarItems
                    icon={itemIcon}
                    numb={contents[activeProduct].items}
                    des={contents[activeProduct].itemsSuffix}
                    suffix={"+"}
                  />
                </div>
              </div>
            </div>

            <div className="tw-flex-grow">
              <div className="d-none d-md-block">
                <div className="">
                  <div className="slider">
                    {contents?.map((value: any, index: number) => (
                      <div
                        className={`slide ${
                          activeProduct === index ? "active" : ""
                        } say${index}`}
                        key={index}
                        onClick={() => setActiveProduct(index)}
                        style={{
                          backgroundImage: `url(${value.img})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                          backgroundRepeat: "no-repeat",
                        }}
                      >
                        <div className="say">
                          <div className="bg tw-grid  tw-content-between">
                            <div>
                              <div className="fs-30">“</div>
                              <blockquote
                                className="md:tw-line-clamp-[8]"
                                dangerouslySetInnerHTML={{
                                  __html: value?.content,
                                }}
                              />
                              <div className="fs-30 tw-float-right">”</div>
                            </div>
                            <div className="author">
                              <div className="fs-7">{value.author}</div>
                              <div>{value.bio}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="arrow-next d-md-flex tw-items-center tw-justify-between tw-h-[32px] tw-relative tw-bottom-12 d-none">
                    <button onClick={() => handleSmoothScroll("left")}>
                      <FontAwesomeIcon
                        className={"icon-scroll"}
                        icon={faAngleLeft}
                      />
                    </button>

                    <button onClick={() => handleSmoothScroll("right")}>
                      <FontAwesomeIcon
                        className={"icon-scroll"}
                        icon={faAngleRight}
                      />
                    </button>
                  </div>
                </div>
              </div>
              <div className="d-md-none">
                <Image
                  src={contents[activeProduct].img}
                  alt={contents[activeProduct].img}
                  className={
                    "tw-rounded-lg tw-h-[250px] tw-object-cover tw-object-center"
                  }
                  width={1000}
                  height={1000}
                />
                <div className="tw-mt-6">
                  <div>
                    <p>
                      <span className="tw-font-bold tw-text-3xl">“</span>
                      {contents[activeProduct]?.content}
                      <span className="tw-font-bold tw-text-[30px] tw-leading-4">
                        ”
                      </span>
                    </p>
                  </div>
                  <div className="author-mobile tw-mt-6">
                    <div className="tw-font-bold">
                      {contents[activeProduct]?.author}
                    </div>
                    <div className="tw-font-semibold">
                      {contents[activeProduct]?.bio}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import clsx from "clsx";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Form from "./Form";

export default function Banner({ onButtonClick }: any) {
  const elementRef = useRef(null);
  const [isVisible, setVisible] = useState(false);
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
      { threshold: 1 / 3 },
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
  const listCustomers1 = [
    { image: "https://cms-strapi.ichiba.net/uploads/wms_1_d6dc3dbdd1.svg" },
    { image: "https://cms-strapi.ichiba.net/uploads/wms_5_fece1c2f86.svg" },
    { image: "https://cms-strapi.ichiba.net/uploads/wms_11_624cf1c0f4.svg" },
    { image: "https://cms-strapi.ichiba.net/uploads/wms_7_13dc28d1b9.svg" },
    { image: "https://cms-strapi.ichiba.net/uploads/wms_10_7b71f541cd.svg" },
    { image: "https://cms-strapi.ichiba.net/uploads/wms_6_5334dbae47.svg" },
    { image: "https://cms-strapi.ichiba.net/uploads/wms_1_d6dc3dbdd1.svg" },
    { image: "https://cms-strapi.ichiba.net/uploads/wms_5_fece1c2f86.svg" },
    { image: "https://cms-strapi.ichiba.net/uploads/wms_11_624cf1c0f4.svg" },
    { image: "https://cms-strapi.ichiba.net/uploads/wms_7_13dc28d1b9.svg" },
    { image: "https://cms-strapi.ichiba.net/uploads/wms_10_7b71f541cd.svg" },
    { image: "https://cms-strapi.ichiba.net/uploads/wms_6_5334dbae47.svg" },
  ];

  const listCustomers2 = [
    { image: "https://cms-strapi.ichiba.net/uploads/wms_8_6ccdb45c58.svg" },
    { image: "https://cms-strapi.ichiba.net/uploads/wms_3_852413f8ca.svg" },
    { image: "https://cms-strapi.ichiba.net/uploads/wms_12_d294948bfe.svg" },
    { image: "https://cms-strapi.ichiba.net/uploads/wms_13_c1e6ed5268.svg" },
    { image: "https://cms-strapi.ichiba.net/uploads/wms_4_bc974c50b5.svg" },
    { image: "https://cms-strapi.ichiba.net/uploads/wms_9_cae973c9bd.svg" },
    { image: "https://cms-strapi.ichiba.net/uploads/wms_8_6ccdb45c58.svg" },
    { image: "https://cms-strapi.ichiba.net/uploads/wms_3_852413f8ca.svg" },
    { image: "https://cms-strapi.ichiba.net/uploads/wms_12_d294948bfe.svg" },
    { image: "https://cms-strapi.ichiba.net/uploads/wms_13_c1e6ed5268.svg" },
    { image: "https://cms-strapi.ichiba.net/uploads/wms_4_bc974c50b5.svg" },
    { image: "https://cms-strapi.ichiba.net/uploads/wms_9_cae973c9bd.svg" },
  ];
  return (
    <div className="tw-py-6 lg:tw-pt-20 lg:tw-pb-10 tw-px-4 lg:tw-px-0">
      <div className="tw-relative tw-container tw-flex tw-flex-col lg:tw-flex-row tw-gap-6">
        <div className="lg:tw-w-[60%]">
          <h2 className="tw-text-2xl lg:tw-text-5xl tw-font-bold tw-leading-8 lg:tw-leading-tight tw-mb-4 lg:tw-mb-6">
            Quản lý kho vận chính xác, hiệu quả cho doanh nghiệp <br />
            <span className="text__gradient tw-pl-1">TMĐT và Logistics</span>
          </h2>
          <div className="tw-grid tw-gap-2 lg:tw-gap-4 tw-mb-4 lg:tw-mb-6">
            <div className="tw-flex tw-items-center">
              <Image
                src={"https://cms-strapi.ichiba.net/uploads/up_5d3292370d.svg"}
                width={24}
                height={24}
                alt="icon"
                className="tw-w-7 tw-h-7"
              />
              <div className="tw-text-sm lg:tw-text-xl">
                <span className="tw-text-base lg:tw-text-2xl tw-font-bold tw-pr-1">
                  X10
                </span>
                năng suất kho
              </div>
            </div>
            <div className="tw-flex tw-items-center">
              <Image
                src={"https://cms-strapi.ichiba.net/uploads/up_5d3292370d.svg"}
                width={24}
                height={24}
                alt="icon"
                className="tw-w-7 tw-h-7"
              />
              <div className="tw-text-sm lg:tw-text-xl">
                <span className="tw-text-base lg:tw-text-2xl tw-font-bold tw-pr-1">
                  X3
                </span>
                tốc độ xử lý đơn hàng
              </div>
            </div>
            <div className="tw-flex tw-items-center">
              <Image
                src={
                  "https://cms-strapi.ichiba.net/uploads/Group_42d0bf55a1.svg"
                }
                width={24}
                height={24}
                alt="icon"
                className="tw-w-7 tw-h-7"
              />
              <div className="tw-text-sm lg:tw-text-xl">
                Giảm
                <span className="tw-text-base lg:tw-text-2xl tw-font-bold tw-px-1">
                  70%
                </span>
                chi phí vận hành
              </div>
            </div>
            <div className="tw-flex tw-items-center">
              <Image
                src={
                  "https://cms-strapi.ichiba.net/uploads/Group_42d0bf55a1.svg"
                }
                width={24}
                height={24}
                alt="icon"
                className="tw-w-7 tw-h-7"
              />
              <div className="tw-text-sm lg:tw-text-xl">
                Giảm
                <span className="tw-text-base lg:tw-text-2xl tw-font-bold tw-px-1">
                  95%
                </span>
                lỗi kiểm kê
              </div>
            </div>
          </div>
          <p className="tw-text-sm lg:tw-text-lg">
            Hỗ trợ nhà bán lẻ, TMĐT, Logistics tối ưu hoá quy trình vận hành
            kho, quản lý tồn kho và xuất nhập hàng chính xác, tự động hoá toàn
            bộ hoạt động trong kho.
          </p>
        </div>
        <Image
          src={"https://cms-strapi.ichiba.net/uploads/Group_28d4f31977.svg"}
          width={370}
          height={350}
          alt=""
          className={clsx(
            "tw-absolute -tw-z-1 tw-hidden lg:tw-block",
            "md:tw-bottom-[-65%] md:tw-w-[240px] md:tw-h-[210px]",
            "lg:tw-w-[370px] lg:tw-h-[350px] lg:tw-bottom-[-20%] tw-left-[50%] tw-translate-x-[-50%]",
          )}
        />
        <div className="lg:tw-w-[40%]">
          <Form />
        </div>
      </div>

      <div className="tw-relative tw-mt-20 tw-mb-10 md:tw-mt-28 lg:tw-mt-44 lg:tw-mb-20">
        <div className="inf-slider">
          <div className="slider">
            <div className="slide-track">
              {listCustomers1.map((item, idx) => (
                <div key={idx}>
                  <Image
                    src={item.image}
                    width={1087}
                    height={634}
                    alt="Image slide"
                  />
                </div>
              ))}
            </div>
            <div className="slide-track">
              {listCustomers2.map((item, idx) => (
                <div key={idx}>
                  <Image
                    src={item.image}
                    width={1087}
                    height={634}
                    alt="Image slide"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="tw-container tw-absolute tw-top-[50%] tw-translate-y-[-50%] tw-left-[50%] tw-translate-x-[-50%] tw-px-4 lg:tw-px-15">
          <Image
            src={
              "https://cms-strapi.ichiba.net/uploads/screen_WMS_995f41204f.png"
            }
            width={2196}
            height={1256}
            alt="Image Banner"
            className="tw-w-full tw-max-w-[340px] md:tw-max-w-[850px] lg:tw-max-w-[1078px] tw-mx-auto "
          />
        </div>
      </div>
    </div>
  );
}

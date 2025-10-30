/* eslint-disable @next/next/link-passhref */
import Image from "next/image";
import clsx from "clsx";
import logo from "@/public/icons/Logo.svg";
import Link from "next/link";

export default function Solution() {
  const items = [
    {
      label: "Giảm",
      title: "95%",
      subTitle: "Lỗi kiểm kê",
    },
    {
      label: "Tiết kiệm",
      title: "25%",
      subTitle: "Chi phí lưu trữ hàng hoá",
    },
    {
      label: "Dữ liệu cập nhật",
      title: "<60s",
      subTitle: "",
    },
    {
      label: "Tối ưu",
      title: "43%",
      subTitle: "Không gian kho",
    },
  ];
  return (
    <div className="tw-px-4 lg:tw-px-0 tw-py-6 lg:tw-py-15">
      <div className="tw-container">
        <h2 className="tw-text-2xl lg:tw-text-4xl tw-font-bold tw-leading-8 lg:tw-leading-tight tw-mb-2 tw-text-center">
          Giải pháp phần mềm kho vận toàn diện IChiba WMS
        </h2>
        <p className="tw-text-sm lg:tw-text-base tw-text-ic-ink-5 tw-mb-6 lg:tw-mb-10 tw-text-center">
          Dễ sử dụng - Dễ cài đặt - Chính xác 100% - Tích hợp đa kênh
        </p>

        <div className="tw-grid lg:tw-grid-cols-2 tw-gap-4 lg:tw-gap-[72px] tw-items-center">
          <Image
            src={"https://cms-strapi.ichiba.net/uploads/Image_ee74ccac80.svg"}
            width={568}
            height={362}
            alt="Image"
            className="tw-mx-auto"
          />

          <div className="tw-grid tw-grid-cols-2 tw-gap-4 lg:tw-gap-6">
            {items.map((item, idx) => (
              <div
                key={idx}
                className="tw-flex tw-items-center tw-gap-3 lg:tw-gap-5"
              >
                <div className="tw-w-1 tw-h-14 lg:tw-w-[6px] lg:tw-h-[75px] tw-rounded tw-bg-[linear-gradient(0deg,_#FF7400_-0.66%,_#FFAB52_99.49%)]"></div>
                <div className="tw-grid tw-gap-[2px] lg:tw-gap-1">
                  <p className="tw-text-sm lg:tw-text-base tw-mb-0">
                    {item.label}
                  </p>
                  <h3 className="tw-text-xl lg:tw-text-3xl tw-mb-0 tw-font-bold">
                    {item.title}
                  </h3>
                  <p className="tw-text-sm lg:tw-text-lg tw-mb-0 tw-font-medium">
                    {item.subTitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

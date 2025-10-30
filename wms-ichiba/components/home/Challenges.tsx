import Image from "next/image";
import clsx from "clsx";
import { useState } from "react";
import eCommerce from "@/public/images/eCommerce.svg";
import Logistics from "@/public/images/Logistics.svg";

export const itemsChallenge = [
  {
    title: "Doanh nghiệp TMĐT",
    content: [
      "Quản lý tồn kho thiếu chính xác",
      "Xử lý đơn hàng chậm trễ (cập nhật đơn hàng chậm)",
      "Tối ưu hoá không gian kho",
      "Mất nhiều thời gian quản lý nhiều cửa hàng thủ công qua excel",
      "Khó kiểm soát hết các đơn hàng trong đợt cao điểm/ chương trình khuyến mãi",
    ],
    image: eCommerce,
  },
  {
    title: "Doanh nghiệp Logistics",
    content: [
      "Quản lý kho thủ công và thiếu chính xác",
      "Không nắm được thông tin của nhiều loại mặt hàng",
      "Không tối ưu hoá được không gian kho, tiết kiệm diện tích",
      "Không đáp ứng được các hình thức nhập xuất hàng khác nhau",
    ],
    image: Logistics,
  },
];

export default function Challenges() {
  const [active, setActive] = useState(0);

  return (
    <div className="tw-px-4">
      <div className="tw-px-4 lg:tw-px-0 tw-bg-[#F0F5FF] tw-w-full tw-max-w-[1520px] tw-mx-auto tw-rounded-[24px] tw-py-6 lg:tw-py-15">
        <div className="tw-container">
          <h2 className="tw-text-2xl lg:tw-text-4xl tw-font-bold tw-leading-8 lg:tw-leading-tight tw-mb-4 lg:tw-mb-6 tw-text-center">
            Khó khăn của doanh nghiệp TMĐT & Logistics khi vận hành kho
          </h2>

          <div className=" tw-bg-white tw-p-1 tw-rounded-full tw-shadow-[0px_8px_16px_0px_rgba(0,0,0,0.05)] tw-text-center tw-flex tw-max-w-max tw-mx-auto tw-z-1">
            <div
              className={clsx(
                "tw-py-[10px] tw-px-4 lg:tw-px-6 tw-text-sm lg:tw-text-lg tw-font-bold tw-rounded-full tw-cursor-pointer",
                active === 0
                  ? "tw-text-white tw-bg-[linear-gradient(256deg,_#0364F6_-18.06%,_#FF9528_44.04%)]"
                  : "tw-text-[#00194F]",
              )}
              onClick={() => setActive(0)}
            >
              {itemsChallenge[0].title}
            </div>
            <div
              className={clsx(
                "tw-py-[10px] tw-px-4 lg:tw-px-6 tw-text-sm lg:tw-text-lg tw-font-bold tw-rounded-full tw-cursor-pointer",
                active === 1
                  ? "tw-text-white tw-bg-[linear-gradient(256deg,_#0364F6_-18.06%,_#FF9528_44.04%)]"
                  : "tw-text-[#00194F]",
              )}
              onClick={() => setActive(1)}
            >
              {itemsChallenge[1].title}
            </div>
          </div>

          <div className="tw-p-2 lg:tw-p-6 tw-bg-[linear-gradient(148deg,_#B1D1F6_27.99%,_#C5C8FD_72.71%)] tw-rounded-3xl tw-mt-6 lg:tw-mt-10">
            <div
              className={clsx(
                "tw-flex lg:tw-flex-row tw-gap-6 lg:tw-gap-0",
                active === 1 ? "tw-flex-col-reverse" : "tw-flex-col",
              )}
            >
              <div className="tw-grid tw-gap-4 lg:tw-gap-6 tw-bg-white tw-py-6 tw-px-4 lg:tw-p-10 tw-rounded-2xl lg:tw-w-[50%]">
                {itemsChallenge[active].content.map((item, idx) => (
                  <div
                    key={idx}
                    className="tw-flex tw-items-center tw-gap-3 lg:tw-gap-4"
                  >
                    <Image
                      src={
                        "https://cms-strapi.ichiba.net/uploads/Objects_ea580dfb2f.svg"
                      }
                      width={24}
                      height={24}
                      alt="Icon"
                    />
                    <p className="tw-text-sm lg:tw-text-lg tw-mb-0">{item}</p>
                  </div>
                ))}
              </div>

              <div className="lg:tw-w-[50%]">
                <Image
                  src={itemsChallenge[active].image}
                  width={512}
                  height={364}
                  alt="Image"
                  className="tw-mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

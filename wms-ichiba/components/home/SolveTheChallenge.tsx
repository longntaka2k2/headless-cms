import clsx from "clsx";
import { useTranslation } from "next-i18next";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function SolveTheChallenge() {
  const [active, setActive] = useState(0);
  const { t } = useTranslation("dropshipping");
  const items = [
    {
      label: "Tối ưu hoá vận hành kho",
      title: "Tối ưu hoá quản lý kho với công nghệ mã vạch",
      content: [
        "Tích hợp với các thiết bị PDA, quét mã vạch.",
        "Dễ dàng tìm kiếm và truy xuất hàng hoá.",
        "Khả năng lưu trữ hàng ngàn mã SKUs, đảm bảo thông tin chính xác 100%.",
      ],
      image: "https://cms-strapi.ichiba.net/uploads/Scan_e6b4307a53.svg",
    },
    {
      label: "Tiết kiệm chi phí vận hành",
      title: "Tiết kiệm đến 70% chi phí vận hành",
      content: [
        "Tối ưu diện tích và khả năng lưu trữ kho.",
        "Gợi ý lộ trình lấy hàng, giảm 50% thời gian tìm và cất hàng.",
        "Khả năng xử lý không giới hạn số lượng đơn hàng.",
        "Tăng hiệu quả sử dụng lao động, giúp nhân viên kho có năng suất cao hơn.",
        "Giảm đến 60% thời gian xử lý đơn hàng.",
      ],
      image: "https://cms-strapi.ichiba.net/uploads/Scan1_7ef9d61f84.svg",
    },
    {
      label: "Quản lý tồn kho theo thời gian thực",
      title: "Cập nhật ngay lập tức khi có sự thay đổi về tồn kho",
      content: [
        "Cập nhật dữ liệu tồn kho trong vòng 60s.",
        "Lên kế hoạch tồn kho cho mùa bán cao điểm.",
        "Cảnh báo về các mặt hàng tồn kho sắp hết hạn sử dụng.",
      ],
      image: "https://cms-strapi.ichiba.net/uploads/Scan2_9a12e0dbe7.svg",
    },
    {
      label: "X3 tốc độ xử lý đơn hàng",
      title: "Tăng tốc độ xử lý đơn hàng",
      content: [
        "Rút ngắn thời gian xử lý đơn hàng xuống còn 35%.",
        "Xử lý đơn hàng ngay trong ngày kể từ khi có đơn phát sinh.",
        "Đảm bảo 100% SLA đa sàn.",
        "Khả năng xử lý không giới hạn số lượng đơn hàng.",
        "Tận dụng tối đa khả năng lưu trữ của kho vận.",
      ],
      image: "https://cms-strapi.ichiba.net/uploads/Scan3_66a2fa8c8b.svg",
    },
    {
      label: "Quản lý vận hành đơn từ nhiều kênh bán",
      title: "Tập trung vận hành đơn từ nhiều kênh bán về một nơi",
      content: [
        "Kết nối và đồng bộ thông tin đơn hàng từ hàng chục kênh bán như Shopee, Lazada, TikTok shop, website bán hàng,...",
        "Dữ liệu đơn hàng đẩy về trong vòng 1 phút.",
        "Quản lý nhiều đối tác gửi hàng trong kho.",
      ],
      image: "https://cms-strapi.ichiba.net/uploads/Image_a59b37abb7.svg",
    },
  ];
  const [isVisible, setVisible] = useState(false);
  const [showOn, setShowOn] = useState("");

  const elementRef = useRef(null);

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
  useEffect(() => {
    setShowOn("tw-opacity-0");
    const timeout = setTimeout(() => {
      setShowOn("tw-animate-showOn");
    }, 50);

    return () => clearTimeout(timeout); // Clear timeout nếu active thay đổi trước khi timeout được kích hoạt
  }, [active]);
  const renderContent = () => {
    return (
      <div
        className={clsx(
          "tw-shadow-[0px_8px_16px_0px_rgba(0,_0,_0,_0.05)] tw-bg-white tw-rounded-3xl tw-mt-6 tw-p-6 lg:tw-px-10",
          "tw-flex tw-flex-col lg:tw-flex-row tw-gap-6 lg:tw-gap-[46px] tw-items-center",
          showOn,
        )}
      >
        <div className="tw-mb-4">
          <h3 className="tw-mb-4 tw-text-2xl tw-font-bold">
            {items[active].title}
          </h3>
          <div className="tw-grid tw-gap-2 lg:tw-gap-4">
            {items[active].content.map((item, idx) => (
              <div
                key={idx}
                className="tw-flex tw-items-center tw-gap-3 tw-text-sm lg:tw-text-base"
              >
                <Image
                  src={
                    "https://cms-strapi.ichiba.net/uploads/Check_3f106cf0e0.svg"
                  }
                  alt="icon-check"
                  width={28}
                  height={28}
                  className="tw-w-5 tw-h-5 lg:tw-w-7 lg:tw-h-7"
                />
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className="lg:tw-min-w-[586px] lg:tw-h-[400px] tw-overflow-hidden">
          <Image
            src={items[active].image}
            alt={items[active].title}
            width={612}
            height={428}
            className="tw-w-full tw-h-full"
          />
        </div>
      </div>
    );
  };
  useEffect(() => {
    renderContent();
  }, [active]);
  return (
    <div
      ref={elementRef}
      className="tw-bg-[linear-gradient(180deg,_#F2F2F2_0%,_#FFF_133.53%)] tw-py-6 lg:tw-py-15"
    >
      <div className="tw-container">
        <h2 className="tw-text-2xl lg:tw-text-4xl lg:tw-leading-[48px] lg:tw-w-[80%] tw-mx-auto tw-text-center tw-font-bold tw-mb-6 lg:tw-mb-10">
          Giải quyết những thách thức của doanh nghiệp trong quản trị và tối ưu
          vận hành kho
        </h2>
        <div
          className={clsx(
            "tw-flex tw-gap-2 lg:tw-gap-3",
            "tw-overflow-x-scroll tw-mx-auto tw-pb-2",
          )}
        >
          {items.map((value: any, index: number) => (
            <div
              className={clsx(
                active === index
                  ? "tw-bg-gradient-to-b tw-from-[#FAC286] tw-to-[#F57C00] tw-text-white tw-font-bold"
                  : "tw-bg-white",
                "tw-flex tw-items-center tw-justify-center",
                "tw-p-2 lg:tw-py-[10px] lg:tw-px-3 tw-cursor-pointer tw-transition-colors tw-duration-500 tw-ease",
                "tw-text-sm lg:tw-text-base tw-rounded-lg tw-text-ic-ink-6",
                isVisible ? "tw-animate-showOn" : "tw-opacity-0 ",
              )}
              key={index}
              onClick={() => setActive(index)}
            >
              <h3
                className={clsx("tw-text-sm lg:tw-text-base tw-w-max tw-mb-0")}
              >
                {value.label}
              </h3>
            </div>
          ))}
        </div>
        {isVisible && renderContent()}
      </div>
    </div>
  );
}

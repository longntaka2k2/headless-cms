import Image from "next/image";
import clsx from "clsx";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function OutstandingFeatures() {
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

  return (
    <div className="tw-py-6 lg:tw-py-10 tw-px-4 lg:tw-px-0 tw-bg-[linear-gradient(180deg,_#F0F5FF_0.24%,_#FFF_112.36%)]">
      <div className="tw-container">
        <h2 className="tw-text-2xl lg:tw-text-4xl tw-font-bold tw-leading-8 lg:tw-leading-tight lg:tw-w-[95%] tw-mx-auto tw-mb-6 lg:tw-mb-10 tw-text-center">
          Tính năng vượt trội giúp doanh nghiệp logistics và TMĐT quản lý vận
          hành kho toàn diện
        </h2>

        <div className="tw-grid tw-gap-6">
          <div className="tw-grid lg:tw-grid-cols-3 tw-gap-6">
            <div
              className={clsx(
                "lg:tw-col-span-1 tw-bg-[rgba(255,_255,_255,_0.30)] tw-shadow-[0px_4px_16px_0px_#CDE1FF]",
                "tw-rounded-2xl tw-overflow-hidden",
              )}
            >
              <div className="tw-py-6 tw-px-4 lg:tw-p-10">
                <h3 className="tw-text-xl lg:tw-text-2xl tw-font-bold tw-mb-2 lg:tw-mb-4">
                  Tự động sắp xếp vị trí lưu kho và lộ trình lấy hàng tối ưu
                </h3>
                <p className="tw-text-sm lg:tw-text-base tw-mb-0">
                  Tự động gợi ý vị trí cất hàng thuận lợi nhất tuỳ theo từng mặt
                  hàng và lộ trình lấy hàng tối ưu, giúp tiết kiệm không gian
                  kho và thời gian xử lý đơn hàng.
                </p>
              </div>
              <Image
                src={
                  "https://cms-strapi.ichiba.net/uploads/Image_c6ac05cb3b.svg"
                }
                width={384}
                height={503}
                alt="image"
                className="tw-ml-auto"
              />
            </div>
            <div className="lg:tw-col-span-2 tw-grid tw-gap-6">
              <div className="tw-relative tw-bg-[rgba(255,_255,_255,_0.30)] tw-shadow-[0px_4px_16px_0px_#CDE1FF] tw-rounded-2xl">
                <div
                  className={clsx(
                    "tw-absolute tw-w-[268px] lg:tw-w-[325px]",
                    "tw-top-6 tw-left-4 lg:tw-top-10 lg:tw-left-10",
                  )}
                >
                  <h3 className="tw-text-xl lg:tw-text-2xl tw-font-bold tw-mb-2 lg:tw-mb-4">
                    Báo cáo theo thời gian thực
                  </h3>
                  <p className="tw-text-sm lg:tw-text-base tw-mb-0">
                    Tải báo cáo bất kỳ thời gian nào trong ngày về kiểm kho,
                    hiệu suất vận hành, xuất-nhập kho,...
                  </p>
                </div>
                <Image
                  src={"https://cms-strapi.ichiba.net/uploads/Image_8fa61714db.svg"}
                  width={586}
                  height={411}
                  alt="image"
                  className="tw-min-h-[250px] tw-pt-[100px] tw-ml-auto"
                />
              </div>
              <div className="tw-grid lg:tw-grid-cols-2 tw-gap-6">
                <div className="tw-bg-[rgba(255,_255,_255,_0.30)] tw-shadow-[0px_4px_16px_0px_#CDE1FF] tw-rounded-2xl tw-py-6 tw-px-4 lg:tw-p-10">
                  <h3 className="tw-text-xl lg:tw-text-2xl tw-font-bold tw-mb-2 lg:tw-mb-4">
                    Quản lý đa kho hàng tại đa quốc gia
                  </h3>
                  <p className="tw-text-sm lg:tw-text-base tw-mb-0">
                    Không giới hạn số lượng kho hàng và quốc gia, quản lý tập
                    trung tất cả dữ liệu chỉ tại một màn hình duy nhất.
                  </p>
                </div>
                <div className="tw-bg-[rgba(255,_255,_255,_0.30)] tw-shadow-[0px_4px_16px_0px_#CDE1FF] tw-rounded-2xl tw-py-6 tw-px-4 lg:tw-p-10">
                  <h3 className="tw-text-xl lg:tw-text-2xl tw-font-bold tw-mb-2 lg:tw-mb-4">
                    Đóng gói linh hoạt
                  </h3>
                  <p className="tw-text-sm lg:tw-text-base tw-mb-0">
                    Cho phép cài đặt linh hoạt các phương thức đóng gói để đáp
                    ứng nhu cầu đa dạng của người mua và đảm bảo an toàn cho
                    từng loại hàng hóa.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            className={clsx(
              "tw-bg-[rgba(255,_255,_255,_0.30)] tw-shadow-[0px_4px_16px_0px_#CDE1FF] tw-rounded-2xl",
              "tw-flex tw-flex-col lg:tw-flex-row tw-items-center",
            )}
          >
            <div className="lg:tw-w-[45%] tw-px-4 tw-py-6 lg:tw-px-10">
              <h3 className="tw-text-xl lg:tw-text-2xl tw-font-bold tw-mb-2 lg:tw-mb-4">
                Dự đoán và đưa ra chiến lược tồn kho chuẩn xác theo nhu cầu thị
                trường
              </h3>
              <p className="tw-text-sm lg:tw-text-base tw-mb-0">
                Dự đoán các sản phẩm có thể bán chạy/bán chậm, có bức tranh tổng
                thể về kế hoạch nhập hàng/xả bớt hàng.
              </p>
            </div>
            <div className="lg:tw-w-[45%] tw-py-3">
              <Image
                src={
                  "https://cms-strapi.ichiba.net/uploads/Image_35fe323e6e.png"
                }
                width={686}
                height={392}
                alt="image"
                className="tw-ml-auto"
              />
            </div>
          </div>

          <div className="tw-grid lg:tw-grid-cols-2 tw-gap-6">
            <div className="tw-bg-[rgba(255,_255,_255,_0.30)] tw-shadow-[0px_4px_16px_0px_#CDE1FF] tw-rounded-2xl">
              <div className="tw-py-6 tw-px-4 lg:tw-pt-12 lg:tw-px-10 lg:tw-pb-9">
                <h3 className="tw-text-xl lg:tw-text-2xl tw-font-bold tw-mb-2 lg:tw-mb-4">
                  Tích hợp đa hãng vận chuyển
                </h3>
                <p className="tw-text-sm lg:tw-text-base tw-mb-0">
                  Kết nối với nhiều đơn vị vận chuyển trong và ngoài nước, nhanh
                  chóng gán đơn hàng với đơn vị vận chuyển phù hợp nhất.
                </p>
              </div>
              <div className="lg:tw-pl-12 lg:tw-pr-10">
                <Image
                  src={
                    "https://cms-strapi.ichiba.net/uploads/Frame_1171276782_9ce2c14c77.svg"
                  }
                  width={530}
                  height={245}
                  alt="image"
                  className="tw-ml-auto"
                />
              </div>
            </div>
            <div className="tw-grid lg:tw-grid-cols-2 tw-gap-6">
              <div className="tw-w-full tw-bg-[rgba(255,_255,_255,_0.30)] tw-shadow-[0px_4px_16px_0px_#CDE1FF] tw-rounded-2xl tw-py-6 tw-px-4 lg:tw-p-10">
                <h3 className="tw-text-xl lg:tw-text-2xl tw-font-bold tw-mb-2 lg:tw-mb-4">
                  Quản lý nhập-xuất kho
                </h3>
                <p className="tw-text-sm lg:tw-text-base tw-mb-0">
                  Số hoá toàn bộ quy trình từ lúc nhập hàng đến lúc xuất kho,
                  đảm bảo các dữ liệu chính xác và được cập nhật theo thời gian
                  thực.
                </p>
              </div>
              <div className="tw-w-full tw-bg-[rgba(255,_255,_255,_0.30)] tw-shadow-[0px_4px_16px_0px_#CDE1FF] tw-rounded-2xl tw-py-6 tw-px-4 lg:tw-p-10">
                <h3 className="tw-text-xl lg:tw-text-2xl tw-font-bold tw-mb-2 lg:tw-mb-4">
                  Quản lý sản phẩm, chứng từ sản phẩm
                </h3>
                <p className="tw-text-sm lg:tw-text-base tw-mb-0">
                  Quản lý chi tiết toàn bộ các thông tin của từng sản phẩm trong
                  kho, bảo gồm cả chứng từ, hóa đơn, phiếu nhập-xuất kho,....
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

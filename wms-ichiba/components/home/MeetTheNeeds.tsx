import Image from "next/image";
import clsx from "clsx";
import Link from "next/link";

export default function MeetTheNeeds() {
  const items = [
    {
      label: "Doanh nghiệp Logistics",
      contents: [
        {
          title:
            "Quản lý các mặt hàng khác nhau theo yêu cầu riêng của từng khách hàng,",
          subTitle:
            " hỗ trợ phân loại theo lô, theo hạn sử dụng, hoặc yêu cầu vận chuyển đặc biệt.",
        },
        {
          title: "Dễ dàng tra cứu và quản lý tài liệu.",
          subTitle:
            " Lưu trữ các chứng từ điện tử theo từng lô hàng hoặc đối tác, giúp nhân viên logistics dễ dàng truy xuất thông tin khi cần và giảm thiểu thời gian tìm kiếm, đối chiếu.",
        },
        {
          title:
            "Phân tích hiệu quả vận hành với báo cáo chi tiết về luồng hàng và hiệu suất kho hàng",
          subTitle:
            " với các báo cáo chuyên sâu, giúp doanh nghiệp đưa quyết định chiến lược.",
        },
      ],
    },
    {
      label: "Doanh nghiệp TMĐT",
      contents: [
        {
          title: "Đảm bảo trải nghiệm mua hàng tối ưu",
          subTitle:
            " với quy trình quản lý được số hoá hoàn toàn, giúp rút ngắn thời gian xử lý và giảm thiểu sai sót hay chậm trễ.",
        },
        {
          title: "Giảm thời gian quản lý thủ công",
          subTitle:
            " trên từng kênh bán hàng nhờ tích hợp với đa kênh bán: Shopee, Lazada, TikTok Shop, Amazon,...",
        },
        {
          title: "Dễ dàng phân tích và tối ưu hiệu quả kinh doanh theo kênh",
          subTitle:
            " với báo cáo doanh thu và tồn kho chi tiết cho từng kênh bán.",
        },
        {
          title: "Quản lý tồn kho",
          subTitle:
            " khoa học nhờ tính năng đề xuất/ nhập kho ứng dụng AI tiên tiến.",
        },
      ],
    },
  ];
  return (
    <div className="tw-py-6 lg:tw-py-15 tw-px-4 lg:tw-px-0">
      <div className="tw-container">
        <h2 className="tw-text-2xl lg:tw-text-4xl lg:tw-leading-[48px] tw-text-center lg:tw-w-[70%] tw-mx-auto tw-font-bold tw-mb-6 lg:tw-mb-12">
          Dù là doanh nghiệp Logistics hay TMĐT, IChiba WMS đều có thể đáp ứng
          nhu cầu của bạn
        </h2>
        <div className="tw-grid lg:tw-grid-cols-2 tw-gap-4 lg:tw-gap-12">
          {items.map((item, index) => (
            <div key={index} className="tw-flex tw-flex-col tw-h-full">
              <div
                className={clsx(
                  "tw-py-3 tw-rounded-t-2xl tw-text-xl tw-font-bold tw-text-white tw-text-center",
                  "lg:tw-py-5 lg:tw-rounded-t-3xl lg:tw-text-2xl",
                  index === 0
                    ? "tw-bg-[linear-gradient(270deg,_#F3912C_15.48%,_#FDB66B_81.38%)]"
                    : "tw-bg-[linear-gradient(91deg,_#B1D1F6_24.67%,_#C5C8FD_77.28%)]",
                )}
              >
                {item.label}
              </div>
              <div
                className={clsx(
                  "tw-flex-1 tw-grid tw-gap-5 lg:tw-gap-6 tw-rounded-b-2xl lg:tw-rounded-b-3xl",
                  "tw-px-4 tw-py-6 lg:tw-p-10 tw-shadow-[0px_0px_20px_0px_rgba(0,_0,_0,_0.11)]",
                  index === 0 ? "tw-bg-[#FFF7E6]" : "tw-bg-[#F8F8FF]",
                )}
              >
                {item.contents.map((value, idx) => (
                  <div key={idx} className="tw-flex tw-gap-3">
                    <Image
                      src={
                        "https://cms-strapi.ichiba.net/uploads/Objects_86d3bc77b9.svg"
                      }
                      width={28}
                      height={28}
                      alt="icon-check"
                      className="tw-w-5 tw-h-5 lg:tw-w-7 lg:tw-h-7"
                    />
                    <div className="tw-text-sm lg:tw-text-base">
                      <span className="tw-font-bold">{value.title}</span>
                      {value.subTitle}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

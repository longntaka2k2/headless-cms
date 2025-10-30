import Image from "next/image";
import { useEffect } from "react";

export default function SolutionICBNew() {
  useEffect(() => {}, []);
  return (
    <div id="solution-new">
      <div className="container user-select-none text-center">
        <h2 className="h1-section">Giải pháp sáng tạo phát triển kinh doanh</h2>
        <div className="row">
          <div className="col-sm-12 col-md-6 px-0 py-2 d-none d-md-block">
            <Image
              width={553}
              height={560}
              src="https://cms-strapi.ichiba.net/uploads/Art_work_998800a4d5.svg"
              alt="art-work"
            />
          </div>
          <div className="col-sm-12 col-md-6 p-0 text-start">
            <div className="solution-item">
              <div className="d-block d-md-none">
                <Image
                  width={40}
                  height={40}
                  src="https://cms-strapi.ichiba.net/uploads/Solution_icon1_d2d6788400.svg"
                  alt="art-work"
                />
              </div>
              <div>
                <h3 className="h3-section">
                  Quản lý bán hàng đa kênh online & offline
                </h3>
                <p className="mb-0">
                  Các công cụ trọn gói giúp toàn bộ các doanh nghiệp B2B & B2C
                  đa lĩnh vực tối ưu quản lý và kiểm soát bán hàng đa kênh
                  online & offline mà không cần hỗ trợ về kỹ thuật.
                </p>
              </div>
            </div>
            <div className="solution-item">
              <div className="d-block d-md-none">
                <Image
                  width={40}
                  height={40}
                  src="https://cms-strapi.ichiba.net/uploads/Solution_icon1_d2d6788400.svg"
                  alt="art-work"
                />
              </div>
              <div>
                <h3 className="h3-section">
                  Xây dựng website bán hàng xuyên biên giới
                </h3>
                <p className="mb-0">
                  Tạo cửa hàng thương mại điện tử xuyên biên giới chỉ với vài
                  bước đơn giản mà không cần kiến thức về công nghệ.
                </p>
              </div>
            </div>
            <div className="solution-item">
              <div className="d-block d-md-none">
                <Image
                  width={40}
                  height={40}
                  src="https://cms-strapi.ichiba.net/uploads/Solution_icon1_d2d6788400.svg"
                  alt="art-work"
                />
              </div>
              <div>
                <h3 className="h3-section">
                  Quản lý vận hành chuỗi cung ứng và fulfillment
                </h3>
                <p className="mb-0">
                  Dịch vụ hậu cần và nền tảng hỗ trợ từ A-Z cung cấp các giải
                  pháp logistics và fulfillment đa kênh hiệu quả, trơn tru.
                </p>
              </div>
            </div>
            <div className="solution-item">
              <div className="d-block d-md-none">
                <Image
                  width={40}
                  height={40}
                  src="https://cms-strapi.ichiba.net/uploads/Solution_icon1_d2d6788400.svg"
                  alt="art-work"
                />
              </div>
              <div>
                <h3 className="h3-section">
                  Giải pháp tăng trưởng kinh doanh online
                </h3>
                <p className="mb-0">
                  Hệ sinh thái công nghệ hiện đại có khả năng tạo ra các chiến
                  dịch quảng cáo được nhắm mục tiêu cực kỳ chính xác.
                </p>
              </div>
            </div>
            <div className="solution-item">
              <div className="d-block d-md-none">
                <Image
                  width={40}
                  height={40}
                  src="https://cms-strapi.ichiba.net/uploads/Solution_icon1_d2d6788400.svg"
                  alt="art-work"
                />
              </div>
              <div>
                <h3 className="h3-section">Giải pháp quản lý thanh toán</h3>
                <p className="mb-0">
                  Tích hợp nhiều cổng thanh toán và mã QR trên các kênh bán
                  hàng, mang lại trải nghiệm tốt cho khách mua hàng đa quốc gia.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 px-0 d-block d-md-none">
            <Image
              className="img-fluid  position-static"
              fill={true}
              src="https://cms-strapi.ichiba.net/uploads/art_work_mobile_a27c79e947.svg"
              alt="art-work"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

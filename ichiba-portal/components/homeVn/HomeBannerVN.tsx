import { clsx } from "clsx";
import Image from "next/image";
import { useRouter } from "next/router";

const HomeBannerVN = () => {
  const router = useRouter();
  const locale = router.locale;
  return (
    <div
      key="home-vn.banner-vn"
      className={clsx(
        "home-banner-vn lg:tw-pt-[100px] lg:tw-mb-15 lg:tw-pb-0 tw-py-6 tw-overflow-hidden tw-relative",
        "after:lg:tw-absolute after:tw-right-0 after:tw-h-[95%] after:tw-top-0 after:tw-bottom-10 after:tw-z-[-1] after:tw-w-[43%] after:tw-rounded-[0px_0px_0px_40px]",
        " after:tw-bg-[linear-gradient(103deg,#FDE9D3_10.97%,rgba(233,238,255,0.60)_76.49%)]",
      )}
    >
      <div className="lg:tw-container tw-flex tw-flex-col lg:tw-flex-row tw-justify-between tw-gap-6 lg:tw-gap-15 ">
        <div className="content-block lg:tw-max-w-[690px] tw-px-4 tw-pt-6 lg:tw-p-0">
          <div className="">
            <h1 className="heading tw-text-[24px] fw-bold lg-1 lg:tw-text-[40px]">
              <p>
                Nền tảng{" "}
                <span className="color-brand-primary">
                  hỗ trợ thương mại điện tử toàn diện{" "}
                </span>
                cho doanh nghiệp vừa và lớn
              </p>
            </h1>
            <div className="subHeading mb-3">
              <p className="fs-phone-14">
                IChiba OnePlatform - Hệ sinh thái công nghệ hàng đầu mang đến
                giải pháp hỗ trợ thương mại điện tử toàn diện, giúp các doanh
                nghiệp mở khóa tiềm năng tăng trưởng và phát triển bền vững.
              </p>
            </div>
            <div className="tags d-flex gap-3">
              <p>Thương mại điện tử</p>
              <p>Logistics</p>
              <p>Tăng trưởng doanh thu</p>
            </div>
            <div className="ctas">
              <a
                className="cta-1"
                href="https://org.ichiba.net"
                target="_blank"
                rel="noreferrer noopener nofollow"
              >
                Dùng thử miễn phí
              </a>
              <a
                href="/contact-sales"
                target="_blank"
                rel="noreferrer noopener canonical"
                className="cta-2"
              >
                Liên hệ
              </a>
            </div>
          </div>
        </div>
        <div className={clsx()}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <Image
            style={{ width: "100%" }}
            src={
              "https://cms-strapi.ichiba.net/uploads/Group_19710_fd125e9f63.png"
            }
            alt="home_Banner_Vn"
            width={779}
            height={786}
            className="lg:tw-block tw-hidden"
          />
          <Image
            src={"https://cms-strapi.ichiba.net/uploads/Image_8d890b9dd3.png"}
            alt="home_Banner_Vn"
            width={561}
            height={587}
            className="lg:tw-hidden tw-pl-4 lg:tw-pl-0 tw-w-full"
          />
        </div>
      </div>
    </div>
  );
};
export default HomeBannerVN;

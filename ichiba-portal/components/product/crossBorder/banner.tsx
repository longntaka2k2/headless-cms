import { useTranslation } from "next-i18next";
import Image from "next/image";
import banner from "@/public/icons/crossBorder/banner.png";
import router, { useRouter } from "next/router";
import Link from "next/link";
import { useEffect } from "react";
import LottieRenderer from "@/components/common/lottieRenderer";

export default function Banner(props: any) {
  const { t } = useTranslation("common");
  // let host = typeof window !== "undefined" ? window.location.origin : "";
  // const media = props.media.data.attributes;
  const router = useRouter();
  return (
    <div>
      <div className="tw-py-6 lg:tw-pt-10 lg:tw-pb-14 tw-bg-cover lg:tw-bg-[url(https://cms-strapi.ichiba.net/uploads/Section_banner_c76327a7d6.png)]">
        <div className="container">
          {/* <div className="row">
          <div className="col-lg-6">
            {props?.content && (
              <div dangerouslySetInnerHTML={{ __html: props.content }} />
            )}
            <div className="py-4 cursor">
              <Link
                href={
                  host === "https://ichiba.net"
                    ? "https://api.ichiba.net/account/login?redirectUrl=https%3A%2F%2Forg.ichiba.net"
                    : "https://api.ichiba.vn/account/login?redirectUrl=https%3A%2F%2Forg.ichiba.net"
                }
                className="d-inline-block btn-janbox py-2 px-5 text-decoration-none"
                rel="nofollow"
              >
                {t("crossBorder.banner.explore")}
              </Link>
            </div>
          </div>
          <div className="col-lg-6">
            {props?.media && (
              <Image
                src={media.url}
                alt={media.url ? media.url : "media"}
                width={media?.width}
                height={media?.height}
              />
            )}
          </div>
        </div> */}
          <div className="tw-text-center ">
            <div className="lg:tw-text-center tw-font-bold tw-text-[24px] lg:tw-text-[36px]">
              {t("smartCrossBorder.banner.title")}
            </div>
            <div className="lg:tw-text-[24px] tw-mt-4 lg:tw-mt-2">
              {t("smartCrossBorder.banner.subtitle")}
            </div>
            <div className="lg:tw-max-w-[792px] lg:tw-mx-auto">
              <div className="lg:tw-text-base tw-text-sm tw-text-[#666] tw-mt-3">
                {t("smartCrossBorder.banner.content")}
              </div>
              <div className="lg:tw-text-base tw-text-sm tw-text-[#666] tw-mt-1">
                {t("smartCrossBorder.banner.subcontent")}
              </div>
            </div>
          </div>
          <div className="tw-flex tw-justify-between tw-mt-6 lg:tw-max-w-[424px] lg:tw-mx-auto">
            <Link
              href={"/book-demo"}
              className="hover:tw-opacity-80 tw-w-[167px] lg:tw-w-[200px] tw-rounded-lg tw-bg-[#F57C00] tw-no-underline tw-text-white text-center tw-py-3"
              target="_blank"
            >
              {t("smartCrossBorder.banner.getDemo")}
            </Link>
            <Link
              href={"https://org.ichiba.net"}
              target="_blank"
              className="hover:tw-opacity-80 tw-w-[166px] lg:tw-w-[199px] tw-rounded-lg tw-border tw-border-[#F57C00] tw-no-underline text-center tw-py-3 tw-text-[#F57C00]"
            >
              {t("smartCrossBorder.banner.freeTrial")}
            </Link>
          </div>
        </div>
      </div>
      <div className="lg:tw-container">
        <LottieRenderer
          path={router.locale === "en" ? "https://cms-strapi.ichiba.net/uploads/web_EN_5073c19bc8.json" : "https://cms-strapi.ichiba.net/uploads/web_VN_07dad0cbd1.json"}
          style={{ width: "100%", height: "auto" }}
          className="lg:tw-block tw-hidden"
        />
        <LottieRenderer
          path={router.locale === "en" ? "https://cms-strapi.ichiba.net/uploads/Moblie_EN_a8a744a101.json" : "https://cms-strapi.ichiba.net/uploads/Moblie_VN_c0eb4c5d6b.json"}
          style={{ width: "100%", height: "auto" }}
          className="lg:tw-hidden tw-px-4"
        />
      </div>
      <div className="tw-py-4 lg:tw-py-[80px]  tw-overflow-x-scroll scroll scroll-1 tw-flex tw-items-center lg:tw-bg-[linear-gradient(270deg,_rgba(235,_238,_250,_0.00)_0.05%,_rgba(172,_190,_255,_0.50)_99.96%)]">
        <Image
          src={
            "https://cms-strapi.ichiba.net/uploads/brand_3_1_fa9f8f3e88.png"
          }
          alt=""
          width={560}
          height={400}
          quality={100}
          className="tw-max-w-[290px] tw-max-h-[223px] lg:tw-max-w-[520px] lg:tw-max-h-[400px] w-full tw-px-2 lg:tw-px-3"
        />
        <Image
          src={
            "https://cms-strapi.ichiba.net/uploads/Group_19795_ed49977604.png"
          }
          alt=""
          width={560}
          height={400}
          quality={100}
          className="tw-max-w-[290px] tw-max-h-[223px] lg:tw-max-w-[520px] lg:tw-max-h-[400px] tw-w-full tw-px-2 lg:tw-px-3"
        />
        <Image
          src={
            "https://cms-strapi.ichiba.net/uploads/Group_19790_d4bb45c1c8.png"
          }
          alt=""
          width={560}
          height={400}
          quality={100}
          className="tw-max-w-[290px] tw-max-h-[223px] lg:tw-max-w-[520px] lg:tw-max-h-[400px] tw-w-full tw-px-2 lg:tw-px-3"
        />
        <Image
          src={
            "https://cms-strapi.ichiba.net/uploads/Group_19794_e4d7f25922.png"
          }
          alt=""
          width={560}
          height={400}
          quality={100}
          className="tw-max-w-[290px] tw-max-h-[223px] lg:tw-max-w-[520px] lg:tw-max-h-[400px] tw-w-full tw-px-2 lg:tw-px-3"
        />
      </div>
    </div>
  );
}

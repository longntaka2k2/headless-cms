/* eslint-disable @next/next/no-html-link-for-pages */
import clsx from "clsx";
import { useTranslation } from "next-i18next";
import Image from "next/image";

export default function HomeBannerEN() {
  const n = useTranslation("new-home-page").t;

  return (
    <div id="home-banner-net">
      <div className="md:tw-bg-[#fafbff] lg:tw-min-w-[1764px] tw-pt-6 lg:tw-pt-20">
        <h1 className="tw-container tw-text-2xl lg:tw-text-4xl tw-font-bold tw-pb-4 mb-0  md:tw-max-w-[75%] lg:tw-max-w-[980px] tw-mx-auto md:tw-text-center">
          {n("banner.title.0")}
          <span className="color-brand-primary">{n("banner.title.1")}</span>
          {n("banner.title.2")}
        </h1>
      </div>
      <div className="container-custom user-select-none text-center d-none d-md-block tw-mb-[980px]">
        <div className="text-content">
          <div className="tw-max-w-[900px] tw-mx-auto">
            <h2 className="mb-3 tw-text-sm lg:tw-text-lg tw-font-normal">
              {n("banner.content")}
            </h2>
          </div>
          <div className="mt-1 keyword mb-5">
            <span className="fs-14">{n("banner.tag.0")}</span>
            <span className="fs-14">{n("banner.tag.1")}</span>
            <span className="fs-14">{n("banner.tag.2")}</span>
          </div>
          <div className="button-cta">
            <div className="secondary">
              <a
                href="https://org.ichiba.net"
                target="_blank"
                rel="noreferrer noopener nofollow"
              >
                {n("banner.getFree")}
              </a>
            </div>
            <div className="primary">
              <a
                href="/contact-sales"
                target="_blank"
                rel="noreferrer noopener canonical"
              >
                {n("banner.contactSale")}
              </a>
            </div>
          </div>
          <Image
            className="img-right d-none d-md-block"
            width={352}
            height={244}
            // src="https://cms-strapi.ichiba.net/uploads/Frame_21080_b60191d9ba.png"
            src="https://cms-strapi.ichiba.net/uploads/img_right_93871afe44.svg"
            alt="img_right"
          />
          <Image
            className="img-left d-none d-md-block"
            width={283}
            height={353}
            // src="https://cms-strapi.ichiba.net/uploads/org_28ee1b6f5d.png"
            src="https://cms-strapi.ichiba.net/uploads/img_left_a460129baf.svg"
            alt="img_left"
          />
          <Image
            className="img-center d-none d-md-block"
            width={1238}
            height={1111}
            // src="https://cms-strapi.ichiba.net/uploads/Frame_427318498_63bea74ebc.png"
            src="https://cms-strapi.ichiba.net/uploads/img_center_ca41a355ad.svg"
            alt="img_center"
          />
          <Image
            className="img-bg d-none d-md-block"
            width={1235}
            height={813}
            // src="https://cms-strapi.ichiba.net/uploads/Dashboard_67a93a37b2.png"
            src="https://cms-strapi.ichiba.net/uploads/standard_5dbfcb7a2d.svg"
            alt="img_bg"
          />
        </div>
      </div>
      {/* mobile */}
      <div className="container user-select-none text-center d-block d-md-none mobile">
        <div className="text-content">
          <div className="mb-2 p-phone mb-phone-16">{n("banner.content")}</div>
          <div className="button-cta">
            <a
              href="https://org.ichiba.net"
              className="primary"
              target="_blank"
              rel="noreferrer noopener nofollow"
            >
              {n("banner.getFree")}
            </a>
          </div>
          <Image
            width={390}
            height={339}
            className="tw-w-full tw-mt-10"
            src="https://cms-strapi.ichiba.net/uploads/banner1_mobile_7630e25ca1.svg"
            alt="banner1_mobile"
          />
          <Image
            width={390}
            height={271}
            className="tw-w-full"
            src="https://cms-strapi.ichiba.net/uploads/banner2_mobile_db51ef53c5.svg"
            alt="banner2_mobile"
          />
        </div>
      </div>
    </div>
  );
}



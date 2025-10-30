import checked from "@/public/images/icons/solutions/checked.svg";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import iconEzTracking from "@/public/images/x-border-shipping/ezTracking.svg";
import iconFastDelivery from "@/public/images/x-border-shipping/fastDelivery.svg";
import iconSupport from "@/public/images/x-border-shipping/support.svg";
import EzImage from "@/components/commons/EzImage";
import { Fragment } from "react";
import Script from "next/script";

const StayWithin = ({ lang, params }: { lang: any; params: any }) => {
  const contents = [
    lang.setup,
    lang.software,
    lang.hiddenFee,
    lang.onboarding,
    lang.receiving,
    lang.minimumVolume,
  ];
  const icons = [iconEzTracking, iconFastDelivery, iconSupport];

  return (
    <>
      <section className="container text-white px-4 pt-6 pb-8 lg:pt-0 lg:pb-10">
        {/**mobile */}
        <div className="relative rounded-xl px-4 pt-5 pb-7 bg-[#122244] overflow-hidden lg:hidden">
          <h2 className="relative z-10 text-xl font-bold">
            {lang.heading} <br />
            {lang.heading2}
          </h2>
          <div
            className={clsx(
              "relative z-10 ",
              "grid grid-cols-2 gap-y-5",
              "mt-5 px-4 lg:px-0 py-4 rounded-xl bg-[rgba(28,51,100,0.7)] text-center"
            )}
          >
            <div className="col-span-1">
              <EzImage
                src={iconFastDelivery}
                alt=""
                width={32}
                height={32}
                className="mb-2 mx-auto"
              />
              <p>{lang.contents[0]}</p>
            </div>
            <div className="col-span-1 border-l">
              <EzImage
                src={iconEzTracking}
                alt=""
                width={32}
                height={32}
                className="mb-2 mx-auto"
              />
              <p>{lang.contents[1]}</p>
            </div>
            <div className="col-span-2">
              <EzImage
                src={iconSupport}
                alt=""
                width={32}
                height={32}
                className="mb-2 mx-auto"
              />
              <p>{lang.contents[2]}</p>
            </div>
          </div>
          <Link
            href={`/${params.lang}/contact-sales`}
            id="CrossBorderShippingContactButton"
            target="_blank"
            className="relative z-10 w-fit block mx-auto mt-5 rounded-lg bg-brand-primary px-3 py-2  text-sm font-medium"
          >
            {lang.cta}
          </Link>
          <Image
            src="https://strapi-efex.ichiba.net/uploads/Group_19603_36ad13824d.svg"
            alt=""
            width={136}
            height={86}
            className="absolute top-0 left-0 -z-0"
          />
          <Image
            src="https://strapi-efex.ichiba.net/uploads/Group_19604_172a6fc98b.svg"
            alt=""
            width={157}
            height={230}
            className="absolute bottom-0 right-0 -z-0"
          />
        </div>

        {/**desktop */}
        <div
          className={clsx(
            "relative",
            "hidden lg:flex justify-between items-center",
            "h-[361px]  rounded-xl bg-[#122244]  overflow-hidden "
          )}
        >
          <div className="ml-[60px]">
            <h2 className="relative z-10 text-2xl leading-[38px] font-bold max-w-lg">
              {lang.heading} <br />
              {lang.heading2}
            </h2>
            <Link
              href={`/${params.lang}/contact-sales`}
              id="CrossBorderShippingContactButton"
              target="_blank"
              className="mt-[34px] z-10 w-[200px] rounded-lg bg-brand-primary p-3 flex justify-center items-center text-sm font-medium hover:bg-brand-primary-active transition-all"
            >
              {lang.cta}
            </Link>
          </div>
          <div
            className={clsx(
              "relative z-10",
              "flex gap-x-0 gap-y-5 items-center",
              "mr-[69px] px-10 pt-6 pb-7 w-[495px] h-fit rounded-xl bg-[rgba(28,51,100,0.70)] text-white"
            )}
          >
            {icons.map((x, idx) => (
              <Fragment key={idx}>
                <div>
                  <EzImage
                    src={x}
                    alt=""
                    width={32}
                    height={32}
                    className="mb-2 mx-auto"
                  />
                  <p className="text-center">{lang.contents[idx]}</p>
                </div>
                {icons.length != idx + 1 && (
                  <div
                    key={idx}
                    className="flex-shrink-0 bg-white bg-opacity-60  w-[1px] min-w-[1px] mx-6 h-[50px]"
                  ></div>
                )}
              </Fragment>
            ))}
          </div>
          <EzImage
            src="/uploads/promise_1_lg_33582d8ff2.svg"
            alt=""
            width={281}
            height={201}
            className="absolute top-0 left-0 -z-0"
          />
          <EzImage
            src="/uploads/promise_2_lg_c66eb34ecd.svg"
            alt=""
            width={317}
            height={361}
            className="absolute bottom-0 right-0 -z-0"
          />
        </div>
      </section>

      <script
        dangerouslySetInnerHTML={{
          __html: `
          document.getElementById('CrossBorderShippingContactButton').addEventListener('click', function() {
            fbq('track', 'CrossBorderShipping_Contact_Button');
          });
        `,
        }}
      />
    </>
  );
};

export default StayWithin;

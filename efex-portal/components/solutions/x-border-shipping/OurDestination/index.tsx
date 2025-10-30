"use client";
import { Cta } from "@/components/commons/Cta";
import EzImage from "@/components/commons/EzImage";
import brLineTop from "@/public/images/x-border-shipping/breakline_top.svg";
import brLineBottom from "@/public/images/x-border-shipping/breakline_bottom.svg";
import clsx from "clsx";
import useWidth from "@/hooks/useWidth";
import { usePathname } from "next/navigation";
import Script from "next/script";

const Content = ({ lang, className, locale, id }: any) => (
  <div
    className={clsx(
      "relative z-4",
      "max-w-[1000px] mx-auto -mt-32 px-4 md:px-0",
      className
    )}
  >
    <div
      className={clsx(
        " py-10  md:p-15",
        "bg-[url('https://strapi-efex.ichiba.net/uploads/southeast_asia_map_with_china_2_62440d2d54.svg')]",
        "bg-brand-secondary bg-cover bg-center rounded-2xl"
      )}
    >
      <EzImage
        src={brLineTop}
        alt=""
        className="absolute left-1/2 top-0 -translate-x-1/2"
      />
      <EzImage
        src={brLineBottom}
        alt=""
        className="absolute left-1/2 top-[100%] -translate-x-1/2"
      />
      <div className="text-white text-center mb-4 md:mb-10 ">
        <h3 className="font-bold text-[30px] md:w-[681px] text-xl md:text-[30px] lg mx-auto mb-6 w-[85%] leading-7 lg:leading-[38px]">
          {lang.content.heading}
        </h3>
        <p className="md:text-lg">{lang.content.subHeading}</p>
        <p>
          {lang.content.content[0]}{" "}
          <span className="text-[#3F8CFF] text-xl md:text-4xl font-bold">
            80%
          </span>{" "}
          {lang.content.content[1]}
        </p>
      </div>
      <Cta href={`/${locale}/contact-sales`} id={id} className="mx-auto">
        {lang.content.cta}
      </Cta>
    </div>
  </div>
);

const OurDestination = ({ lang }: any) => {
  const width = useWidth();
  const locale = usePathname().slice(1, 3);

  return (
    <>
      <section>
        <div className="relative lg:bg-inherit bg-[linear-gradient(180deg,_#F5F6F8_0%,_#FFF_150%)]">
          <div className="overflow-hidden">
            <EzImage
              src={"/uploads/Frame_427318720_1_efc8edbf27.png"}
              alt=""
              width={1920}
              height={1023}
              quality={100}
              className="scale-x-[1.3] scale-y-[1.4] mt-7 lg:mt-0 lg:scale-x-100 lg:scale-y-100"
              unoptimized
            />
          </div>
          <div
            className={clsx(
              " relative md:absolute md:right-1/4 md:bottom-1/4",
              " px-4 md:px-0",
              "container md:flex justify-end lg:bg-inherit "
            )}
          >
            <div className="md:w-[428px] mb-16 md:mb-0">
              <EzImage
                src={"/uploads/Group_7dfb2796f2.svg"}
                alt=""
                width={50}
                height={50}
                className="mb-4"
              />
              <h2 className="text-2xl md:text-4xl font-bold mb-2">
                {lang.heading}
              </h2>
              <p className="text-sm md:text-lg">{lang.subHeading}</p>
            </div>
            <Content
              lang={lang}
              id="CrossBorderShippingContactButton"
              className={"block md:hidden mt-0 !px-0"}
              locale={locale}
            />
          </div>
        </div>
        <Content
          lang={lang}
          id="CrossBorderShippingContactButton"
          className={"hidden md:block"}
          locale={locale}
        />
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
export default OurDestination;

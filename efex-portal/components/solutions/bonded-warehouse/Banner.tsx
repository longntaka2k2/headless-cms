import { getDictionary } from "@/app/getDictionary";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import EzImage from "@/components/commons/EzImage";

const Banner = async ({ params }: { params: any }) => {
  const lang = await getDictionary(params?.lang ? params?.lang : "en");

  return (
    <section
      className={clsx(
        "py-6 lg:py-[95px] px-4 lg:px-0",
        "bg-[url('https://strapi-efex.ichiba.net/uploads/Hero_banner_1_fe7ce53d81.png')]",
        "bg-no-repeat bg-cover lg:bg-left"
      )}
    >
      <div className="container flex flex-col lg:flex-row lg:justify-between gap-6 lg:gap-0">
        <div className="lg:flex-1 lg:py-[31px] lg:pr-[126px]">
          <h1 className="font-bold text-2xl lg:text-5xl leading-8 lg:leading-56 mb-4 lg:mb-8">
            {lang.bonded.banner.heading}
          </h1>
          <p className="text-sm lg:text-base leading-5 lg:leading-6 mb-6 lg:mb-10">
            {lang.bonded.banner.subHeading}
          </p>
          <Link
            role="button"
            href={`/${params?.lang}/contact-sales`}
            target="_blank"
            className={clsx(
              "block",
              "px-3 lg:py-[14px] py-[10px] lg:w-[240px] w-[190px]",
              "text-sm lg:text-base text-center text-white font-medium",
              "bg-brand-primary hover:to-brand-primary-active rounded-lg capitalize"
            )}
          >
            {lang.bonded.banner.cta}
          </Link>
        </div>
        <div className="lg:flex-1">
          <EzImage
            src={"/uploads/Frame_427318710_2_d517ffbc0d.png"}
            className="mx-auto"
            alt=""
            width={621}
            height={370}
            quality={100}
          />
        </div>
      </div>
    </section>
  );
};
export default Banner;

import banner from "@/public/images/sell-in-vietnam/banner.webp";
import bannerbg from "@/public/images/sell-in-vietnam/bannerbg.webp";
import vietnam from "@/public/images/sell-in-vietnam/vietnam.svg";
import bgmobile from "@/public/images/sell-in-vietnam/bgmobile.webp";

import Image from "next/image";
import Link from "next/link";
const Banner = ({ lang, locale }: { lang: any; locale: string }) => {
  return (
    <div className="banner ">
      <div
        className="lg:hidden"
        style={{ backgroundImage: `url(${bgmobile.src})` }}
      >
        <div className="px-4 pb-4 pt-10 text-center">
          <div>
            <div className="font-bold text-2xl">
              <Image
                src={vietnam}
                alt="vietnam"
                quality={100}
                className="mx-auto"
              />
              <h1>{lang.banner.title}</h1>
            </div>
            <div className="text-[#1D39C4] font-medium">
              {lang.banner.subTitle}
            </div>
            <div className="mt-2">{lang.banner.content}</div>
            <Link
              href={`/${locale}/contact-sales`}
              target="_blank"
              className="inline-block mt-8 rounded-lg bg-contact text-white px-5 py-2 text-sm"
            >
              {lang.getStart}
            </Link>
            <div className="mt-9">
              <Image
                src={banner}
                alt="banner"
                quality={100}
                className="rounded-lg border-[0.389px] border-[#CCC]"
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className="hidden lg:block"
        style={{
          backgroundImage: `url(${bannerbg.src}) `,
          backgroundSize: "cover",
        }}
      >
        <div className="pb-8 pt-[100px] ">
          <div className="container text-center">
            <div className="font-bold text-[56px] mx-auto">
              <span>
                <Image
                  src={vietnam}
                  alt="vietnam"
                  className="inline-block pb-2"
                  quality={100}
                />{" "}
                {lang.banner.title}
              </span>
            </div>
            <div className="text-[#1D39C4] text-2xl font-medium">
              {lang.banner.subTitle}
            </div>
            <div className="mt-8 text-lg">{lang.banner.content}</div>
            <Link
              href={`/${locale}/contact-sales`}
              target="_blank"
              className="inline-block mt-10 rounded-lg bg-brand-primary text-white px-14 py-[14px] hover:bg-brand-primary-active"
            >
              {lang.getStart}
            </Link>
            <div className="mt-[53px]">
              <Image
                src={banner}
                alt="banner"
                className="rounded-lg border-[0.389px] border-[#CCC] mx-auto"
                quality={100}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

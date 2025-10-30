"use client";
import clsx from "clsx";
import Link from "next/link";
import EzImage from "../commons/EzImage";
import { usePathname } from "next/navigation";

const DownloadEzbuy = ({
  lang,
  className,
}: {
  lang: any;
  className?: string;
}) => {
  const locale = usePathname().split("/")[1];
  return (
    <section
      className={clsx(
        "grid lg:grid-cols-2 gap-4 lg:justify-between justify-center items-center",
        "pt-6 lg:pt-12 container px-4 lg:px-auto",
        className
      )}
    >
      <div>
        <h2 className="text-2xl font-bold pb-4">{lang.heading}</h2>
        <p className="text-sm text-[#687077] pb-12">{lang.subHeading}</p>
        <div className="flex lg:flex-col lg:gap-6 justify-start">
          <div className="flex gap-6 w-2/5 lg:w-auto">
            <div className="lg:flex lg:flex-1 gap-4 items-center w-full">
              <div>
                <EzImage
                  alt="Android"
                  src={"/uploads/android_d95853c77d.jpg"}
                  width={104}
                  height={104}
                  quality={100}
                  className="w-[100px] lg:w-auto mx-auto"
                />
                <EzImage
                  alt="iOS"
                  src={"/uploads/ios_0dc6873008.jpg"}
                  width={104}
                  height={104}
                  quality={100}
                  className="w-[100px] lg:w-auto lg:hidden mx-auto"
                />
              </div>
              <div className="hidden lg:block text-sm">
                <p className="text-[#687077]">{lang.scan}</p>
                <p className="text-[#005DF8] font-bold">{lang.device[0]}</p>
              </div>
            </div>
            <div className="hidden lg:flex flex-1 gap-4 items-center">
              <EzImage
                src={"/uploads/ios_0dc6873008.jpg"}
                alt="iOS"
                width={104}
                height={104}
                className="w-full lg:w-auto"
              />
              <div className="text-sm">
                <p className="text-[#687077]">{lang.scan}</p>
                <p className="text-[#005DF8] font-bold">{lang.device[1]}</p>
              </div>
            </div>
          </div>
          <div className="flex flex-grow lg:flex-grow-0 lg:items-center gap-4 lg:gap-6 flex-col lg:flex-row">
            <Link
              href={
                "https://play.google.com/store/apps/details?id=com.ichiba.ezbuyjapan&hl=vi-VN"
              }
              target="_blank"
              role="button"
              className="flex-1 bg-[#DAE3F4] rounded-lg py-3 px-5 flex items-center"
            >
              <EzImage
                src={"/uploads/Group_16372_e40a7a9cda.svg"}
                alt={lang.downloadIt}
                width={40}
                height={40}
              />
              <div className="ml-3">
                <p className="text-[10px]">{lang.downloadIt}</p>
                <p className="font-bold text-sm">Google Play</p>
              </div>
            </Link>
            <Link
              href={"https://apps.apple.com/us/app/ezbuy-japan/id6476340865"}
              target="_blank"
              role="button"
              className="flex-1 bg-[#333A3F] rounded-lg py-3 px-5 flex items-center"
            >
              <EzImage
                src={"/uploads/Group_16374_c70e71eb8b.svg"}
                alt={lang.downloadIt}
                width={40}
                height={40}
              />
              <div className="ml-3 text-white">
                <p className="text-[10px]">{lang.downloadIt}</p>
                <p className="font-bold text-sm">App Store</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <EzImage
        src={
          locale === "vi"
            ? "/uploads/Group_1171276004_eae764ca2e.png"
            : "/uploads/Group_1171276009_477f8d2def.png"
        }
        alt="Ezbuy"
        width={658}
        height={553}
        quality={100}
        className="lg:w-[548px] lg:h-[358px] mx-auto object-cover object-top"
      />
    </section>
  );
};
export default DownloadEzbuy;

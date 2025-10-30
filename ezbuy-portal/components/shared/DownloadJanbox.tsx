"use client";
import clsx from "clsx";
import Link from "next/link";
import EzImage from "../commons/EzImage";
import { usePathname } from "next/navigation";

const DownloadJanbox = ({
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
              <div className="grid gap-3">
                <EzImage
                  alt="Android"
                  src={"/uploads/image_12_59c4dc580a.png"}
                  width={104}
                  height={104}
                  quality={100}
                  className="w-[100px] lg:w-[128px] mx-auto"
                />
                <EzImage
                  alt="iOS"
                  src={"/uploads/janbox_ios_41465a6ce5.png"}
                  width={104}
                  height={104}
                  quality={100}
                  className="w-[100px] lg:w-full lg:hidden mx-auto border rounded-2xl"
                />
              </div>
              <div className="hidden lg:block text-sm">
                <p className="text-[#687077]">{lang.scan}</p>
                <p className="text-[#005DF8] font-bold">{lang.device[0]}</p>
              </div>
            </div>
            <div className="hidden lg:flex flex-1 gap-4 items-center">
              <EzImage
                src={"/uploads/janbox_ios_41465a6ce5.png"}
                alt="iOS"
                width={104}
                height={104}
                className="w-full lg:w-auto border rounded-2xl"
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
                "https://play.google.com/store/apps/details?id=com.ezbuyrn"
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
              href={"https://apps.apple.com/us/app/janbox-cross-border-ecommerce/id1566543402"}
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
        src="/uploads/Mockup_Phone_bf073e5712.png"
        alt="Ezbuy"
        width={589}
        height={366}
        quality={100}
        className="mx-auto mb-4"
      />
    </section>
  );
};
export default DownloadJanbox;

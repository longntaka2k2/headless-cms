import Link from "next/link";
import EzImage from "../EzImage";
import clsx from "clsx";

const DownloadEzbuy = ({
  lang,
  className,
}: {
  lang: any;
  className: string;
}) => {
  return (
    <div className={clsx("", className)}>
      <p className="font-semibold pb-4">{lang.heading}</p>
      <div className="flex gap-1 items-center">
        <div className="grid gap-3">
          <EzImage
            src={"/uploads/android_d95853c77d.jpg"}
            className="flex-1 hidden lg:block"
            alt="Android"
            width={50}
            height={50}
            unoptimized
          />
          <EzImage
            src={"/uploads/ios_0dc6873008.jpg"}
            className="flex-1 hidden lg:block"
            alt="iOS"
            width={50}
            height={50}
            unoptimized
          />
        </div>
        <div className="flex lg:flex-col  gap-2 justify-center w-full lg:w-auto">
          <Link
            href={"https://play.google.com/store/apps/details?id=com.ichiba.ezbuyjapan&hl=vi-VN"}
            target="_blank"
            role="button"
            className="flex-1 bg-[#DAE3F4] rounded-lg py-3 px-5 flex gap-3 items-center"
          >
            <EzImage
              src={"/uploads/Group_16372_e40a7a9cda.svg"}
              alt="Ezbuy"
              width={30}
              height={30}
            />
            <div className="">
              <p className="text-[10px]">{lang.downloadIt}</p>
              <p className="font-bold text-sm">Google Play</p>
            </div>
          </Link>
          <Link
            href={"https://apps.apple.com/us/app/ezbuy-japan/id6476340865"}
            target="_blank"
            role="button"
            className="flex-1 bg-[#333A3F] rounded-lg py-3 px-5 flex gap-3 items-center"
          >
            <EzImage
              src={"/uploads/Group_16374_c70e71eb8b.svg"}
              alt="Ezbuy"
              width={30}
              height={30}
            />
            <div className="text-white">
              <p className="text-[10px]">{lang.downloadIt}</p>
              <p className="font-bold text-sm">App Store</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default DownloadEzbuy;

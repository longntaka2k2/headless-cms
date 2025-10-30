import clsx from "clsx";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import Link from "next/link";
const Ship4p = () => {
  const a = useTranslation("all-in-one").t;

  return (
    <div
      className={clsx(
        "tw-py-6 tw-px-4 lg:tw-container lg:tw-px-0 lg:tw-py-[80px] lg:tw-flex tw-items-center",
      )}
    >
      <div className="">
        <div className="tw-flex tw-items-center tw-gap-3">
          <Image
            src={"https://cms-strapi.ichiba.net/uploads/Logo_7558a78e8c.svg"}
            className="lg:tw-w-[56px]"
            alt=""
            width={40}
            height={40}
          />
          <div className="tw-text-[#FF7400] tw-text-2xl tw-font-bold lg:tw-text-4xl">
            {a("ship4p.title")}
          </div>
        </div>
        <div className="tw-mt-2 lg:tw-mt-5 tw-text-xl tw-font-bold lg:tw-text-3xl">
          {a("ship4p.subtitle")}
        </div>
        <Link
        href={'/products/ship4p/overview'}
          className={clsx(
            "tw-mt-5 tw-block tw-no-underline lg:tw-mt-10 tw-rounded-lg tw-bg-[#F57C00] tw-text-white ",
            "tw-text-sm lg:tw-text-base tw-max-w-[160px] lg:tw-max-w-[200px] tw-text-center tw-py-3 tw-font-medium",
          )}
        >
          {a("ship4p.explore")}
        </Link>
      </div>
      <Image
        src={
          "https://cms-strapi.ichiba.net/uploads/Frame_1171276513_98c201f932.svg"
        }
        className="tw-mt-5 lg:tw-hidden"
        alt=""
        width={374}
        height={331}
      />
      <Image
        src={
          "https://cms-strapi.ichiba.net/uploads/Group_1171275901_1_d6e9b8e4e7.svg"
        }
        className="tw-mt-5 lg:tw-block tw-hidden"
        alt=""
        width={830}
        height={514}
      />
    </div>
  );
};

export default Ship4p;

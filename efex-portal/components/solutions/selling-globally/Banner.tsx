import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

const Banner = ({ lang }: { lang: any }) => {
  return (
    <div
      className={clsx(
        "bg-[url(https://strapi-efex.ichiba.net/uploads/Quote_2_118f54a60c.svg)]",
        "lg:bg-[url(https://strapi-efex.ichiba.net/uploads/Quote_1_f025ea6909.svg)]",
        "bg-no-repeat bg-cover py-4 lg:py-6 mb-[50px] lg:mb-[100px]"
      )}
    >
      <div className="relative container flex gap-[10px] lg:gap-[100px] pl-8 pr-6">
        <Image
          src="https://strapi-efex.ichiba.net/uploads/EFEX_72d732ec93.svg"
          alt="EFEX"
          width={187}
          height={177}
          className="w-[84px] h-[78px] lg:w-[186px] lg:h-[176px] absolute bottom-[-50px] lg:bottom-[-58%] xl:bottom-[-100px]"
        />
        <div className="text-white pl-[100px] lg:pl-[200px]">
          <p className="text-base lg:text-2xl font-bold">
            {lang.heading[0]} <br />
            {lang.heading[1]}
          </p>

          <Link
            href={"/"}
            target="_blank"
            className="relative w-fit block rounded-lg bg-brand-primary px-5 py-2 lg:py-[14px] text-sm font-medium mt-6"
          >
            {lang.getStarted}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;

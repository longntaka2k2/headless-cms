import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

const RemoveingAnyBarriers = ({
  locale,
  lang,
}: {
  locale: string;
  lang: any;
}) => {
  return (
    <div className="container text-white px-3 my-6 lg:my-15">
      <div
        className={clsx(
          "bg-[url(https://strapi-efex.ichiba.net/uploads/Background_c9b10d1cf0.svg)]",
          "rounded-xl bg-cover bg-no-repeat px-6 py-8 lg:px-15 lg:py-[74px] flex flex-col lg:flex-row gap-6 items-center"
        )}
      >
        <div>
          <h2 className="mb-6 lg:mb-8 font-bold text-2xl">{lang.heading}</h2>
          <Link
            href={`/${locale}/contact-sales`}
            target="_blank"
            className="relative w-fit block rounded-lg bg-brand-primary px-5 py-2 lg:py-[14px] text-sm font-medium mt-6"
          >
            {lang.getStarted}
          </Link>
        </div>
        <div>
          <Image
            src="https://strapi-efex.ichiba.net/uploads/Frame_427318689_59ffbc1d12.png"
            alt="EFEX"
            width={1098}
            height={247}
            className="mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default RemoveingAnyBarriers;

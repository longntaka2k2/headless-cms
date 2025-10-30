import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";

const LetHelp = ({ locale, lang }: { locale: string; lang: any }) => {
  return (
    <div
      style={{
        background: "linear-gradient(180deg, #FFF 0%, #87AFFD 100%)",
      }}
      className="py-6 lg:py-15"
    >
      <div className="container px-3 grid gap-6 lg:gap-10">
        <h2 className="text-2xl font-bold lg:text-4xl lg:leading-[48px] lg:w-[80%] mx-auto lg:text-center">
          {lang.heading}
        </h2>
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-10">
          {lang.items.map((item: any, index: number) => {
            return (
              <div
                key={index}
                className="flex w-full h-full gap-5 bg-[linear-gradient(239deg,#537CD7_-11.58%,_#DA4D4D_112.83%)] p-4 lg:p-7 rounded-xl lg:rounded-[20px]"
              >
                <div
                  className={clsx(
                    "min-w-[24px] min-h-[24px] max-h-[24px] lg:min-w-[40px] lg:max-h-[40px] lg:min-h-[40px] flex items-center justify-center bg-white",
                    "text-sm lg:text-base font-bold text-primary-5 rounded-full"
                  )}
                >
                  <span>{item.step}</span>
                </div>
                <p className="text-sm lg:text-base font-medium text-white">
                  {item.content}
                </p>
              </div>
            );
          })}
        </div>
        <div className=" lg:w-[80%] mx-auto rounded-xl lg:rounded-2xl bg-ic-white-6 py-10 px-4 grid gap-4 lg:gap-6 text-center">
          <div className="flex gap-4 mx-auto items-center">
            <Image
              src="https://strapi-efex.ichiba.net/uploads/image_862_d50f30cd89.svg"
              alt="EFEX"
              width={111}
              height={56}
            />
            <Image
              src="https://strapi-efex.ichiba.net/uploads/Times_Close_Delete_33841a0fbc.svg"
              alt="EFEX"
              width={25}
              height={24}
            />
            <Image
              src="https://strapi-efex.ichiba.net/uploads/Group_3_eaf83b931a.svg"
              alt="EFEX"
              width={124}
              height={40}
            />
          </div>
          <h2 className="text-2xl font-black lg:text-4xl lg:leading-[48px] lg:w-[80%] mx-auto lg:text-center">
            {lang.title}
          </h2>
          <p className="text-sm lg:text-base font-medium">{lang.subTitle}</p>
          <Link
            href={`/${locale}/contact-sales`}
            target="_blank"
            className="relative z-10 w-fit block mx-auto rounded-lg bg-brand-primary px-4 py-[14px] text-white text-sm font-medium"
          >
            {lang.btnText}
          </Link>
          <p className="text-sm lg:text-base font-medium">{lang.willFulfill}</p>

          <div className="flex gap-4 items-center mx-auto">
            <Image
              src="https://strapi-efex.ichiba.net/uploads/Frame_427318798_d51f365e5a.svg"
              alt="EFEX"
              width={400}
              height={86}
            />
          </div>
          <div className="w-full lg:w-[80%] mx-auto h-[1px] bg-primary-2"></div>
        </div>
      </div>
    </div>
  );
};

export default LetHelp;

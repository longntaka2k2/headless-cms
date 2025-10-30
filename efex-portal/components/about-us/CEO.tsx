import Link from "next/link";
import EzImage from "../commons/EzImage";
import clsx from "clsx";
import Image from "next/image";
const CEO = ({ lang }: { lang: any }) => {
  return (
    <div className="relative pt-4 pb-10 lg:pt-20 lg:pb-15 px-4 overflow-hidden">
      <div className="container">
        <div
          className={clsx(
            "lg:w-[60%] lg:ml-auto mb-4 lg:mb-9 sm:bg-white sm:p-4 sm:rounded-2xl",
            "shadow-none sm:shadow-[0px_17px_30px_0px_rgba(0,_0,_0,_0.07)] md:shadow-none"
          )}
        >
          <p className="text-base lg:text-xl font-bold">{lang.name}</p>
          <p className="text-base lg:text-xl font-bold">{lang.position}</p>

          <p className="text-sm lg:text-base mt-3 lg:mt-8">
            {lang.speech[0]} <br />
            {lang.speech[1]}
            <span className="text-brand-primary font-bold">
              {lang.speech[2]}
            </span>
            {lang.speech[3]}
          </p>
        </div>

        <Image
          src="https://strapi-efex.ichiba.net/uploads/Group_260913_5ab1648f5c.svg"
          width={671}
          height={590}
          alt="EFEX"
          className={clsx(
            "lg:absolute top-20 left-5 -z-1 mb-5",
            "w-[358px] h-[285px] lg:w-[671px] lg:h-[590px] mx-auto"
          )}
        />

        <div
          style={{
            background: "linear-gradient(97deg, #F1F5FE 5.46%, #D7D9FC 76.8%)",
          }}
          className="relative lg:w-[60%] mx-auto p-4 lg:p-8 rounded-lg lg:rounded-2xl text-sm lg:text-lg font-medium italic"
        >
          {lang.content}

          <Image
            src="https://strapi-efex.ichiba.net/uploads/Group_d992ca7f43.svg"
            width={88}
            height={65}
            alt="EFEX"
            className={clsx(
              "absolute -bottom-[22px] right-4 lg:-bottom-8 lg:right-[-55px]",
              "w-[55px] h-[40px] lg:w-[88px] lg:h-[65px]"
            )}
          />
        </div>
      </div>
      <Image
        src="https://strapi-efex.ichiba.net/uploads/Background_f90260ac1c.svg"
        width={847}
        height={841}
        alt="EFEX"
        className={clsx(
          "absolute top-[-12%] right-[-13%] lg:top-0 lg:right-[-12%] -z-1",
          "w-[292px] h-[287px] lg:w-[847px] lg:h-[841px] mx-auto"
        )}
      />
    </div>
  );
};

export default CEO;

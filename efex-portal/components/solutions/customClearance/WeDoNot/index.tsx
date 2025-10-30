import EzImage from "@/components/commons/EzImage";
import clsx from "clsx";
import iconEfex from "@/public/images/icons/icon.svg";

const WeDoNot = ({lang} : any) => {
  return (
    <section className="flex pb-15 lg:pb-24">
      <div
        className={clsx(
          "relative",
          "bg-[linear-gradient(280deg,#AA0606_-53.09%,#00194F_66.62%)] bg-cover bg-no-repeat",
          "w-1/3"
        )}
      >
        <EzImage
          src={iconEfex}
          alt=""
          className={clsx(
            "absolute -bottom-[42px] -right-[42px] lg:-bottom-[80px] lg:-right-[70px]",
            "w-[84px] h-[84px] lg:w-[186px] lg:h-[176px] "
          )}
        />
      </div>
      <div
        className={clsx(
          "pl-12 pr-5 lg:px-[235px] py-5 lg:py-[68px] w-2/3",
          "bg-[url('https://strapi-efex.ichiba.net/uploads/61_3_0b7da4e5ce.png')]",
          "lg:bg-[url('https://strapi-efex.ichiba.net/uploads/61_3_1_6a6ee2da55.png')]",
          "bg-cover bg-no-repeat"
        )}
      >
        <span className="font-bold  lg:text-2xl text-white">
          {lang}
        </span>
      </div>
    </section>
  );
};

export default WeDoNot;

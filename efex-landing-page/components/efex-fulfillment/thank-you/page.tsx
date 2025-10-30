"use client";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
const ThankYouCPN = ({ lang }: any) => {
  return (
    <div className="relative px-4 lg:p-10 bg-[url('https://strapi-efex.ichiba.net/uploads/Thank_you_e221de9987.svg')] bg-cover bg-bottom bg-no-repeat">
      <Image
        src={"https://strapi-efex.ichiba.net/uploads/Group_1_8315320315.svg"}
        width={114}
        height={36}
        alt="EFEX"
        className="mx-auto lg:hidden py-3"
      />

      <Image
        src={"https://strapi-efex.ichiba.net/uploads/Group_21_633e81a61f.svg"}
        width={51}
        height={24}
        alt="EFEX"
        className="absolute bottom-4 right-4 lg:bottom-10 lg:right-10"
      />
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 mt-7 lg:mt-0">
        <Image
          src={"https://strapi-efex.ichiba.net/uploads/Image_4d973c1317.svg"}
          width={842}
          height={1000}
          alt="EFEX"
          className="mx-auto"
        />
        <div className="relative text-center flex flex-col justify-center pb-44 lg:pb-0">
          <h1 className="text-2xl lg:text-[40px] font-bold gradient-text lg:leading-56">
            {lang.efexFulfillment.thankYou.title}
          </h1>
          <p className="text-sm lg:text-lg mb-9 lg:mb-14">
            {lang.efexFulfillment.thankYou.subTitle}
          </p>

          <div className="flex justify-center">
            <Link
              href={"https://efex.vn/vi"}
              className="bg-brand-primary py-3 px-6 w-max rounded-lg text-white"
            >
              {lang.efexFulfillment.thankYou.textBtn}
              <FontAwesomeIcon
                icon={faArrowRight}
                className="ml-2"
                width={24}
                height={24}
              />
            </Link>
          </div>

          <Image
            src={
              "https://strapi-efex.ichiba.net/uploads/Group_1_8315320315.svg"
            }
            width={114}
            height={36}
            alt="EFEX"
            className="absolute left-[50%] translate-x-[-50%] top-0 mx-auto hidden lg:block"
          />
        </div>
      </div>
    </div>
  );
};

export default ThankYouCPN;

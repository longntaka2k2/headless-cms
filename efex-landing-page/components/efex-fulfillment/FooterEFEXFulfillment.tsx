"use client";
import Image from "next/image";
import Link from "next/link";
import FormEFEXFulfillment from "./FormEFEXFulfillment";

const FooterEFFEXFulfillment = ({ lang, ref }: any) => {
  return (
    <div
      id="footer"
      ref={ref}
      className="pt-6 pb-10 lg:pt-15 lg:pb-6 overflow-hidden bg-[url('https://strapi-efex.ichiba.net/uploads/Footer_54b32c6078.svg')]"
    >
      <div className="container px-4 lg:px-0 flex flex-col lg:flex-row-reverse gap-6 lg:gap-0 mb-6 lg:mb-10">
        <div className="lg:w-[40%]">
          <FormEFEXFulfillment lang={lang.form} />
        </div>
        <div className="lg:w-[60%] flex flex-col gap-6 justify-between text-white">
          <div>
            <Image
              src={
                "https://strapi-efex.ichiba.net/uploads/Efex_logo_56601627c0.svg"
              }
              width={227}
              height={40}
              alt="EFEX"
              className=""
            />
            <p className="text-sm font-bold mt-3 mb-4 lg:mb-10 leading-5 uppercase">
              {lang.title}
            </p>
            <div className="grid gap-2">
              {lang.address.map((item: any, index: number) => (
                <div key={index} className="flex gap-2 items-center">
                  <Image
                    src={
                      "https://strapi-efex.ichiba.net/uploads/Group_88f6432c2b.svg"
                    }
                    width={24}
                    height={24}
                    alt="EFEX"
                  />
                  <p className="text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-auto">
            <p className="text-sm font-bold mb-4">{lang.connectUs}</p>
            <div className="flex items-center gap-4">
              <Link
                href={"https://zalo.me/4563681100355802014"}
                target="_blank"
              >
                <Image
                  src={
                    "https://strapi-efex.ichiba.net/uploads/Facebook_b2fa26d230.svg"
                  }
                  width={40}
                  height={40}
                  alt="EFEX"
                />
              </Link>
              <Link href={"https://m.me/107382755248848"} target="_blank">
                <Image
                  src={
                    "https://strapi-efex.ichiba.net/uploads/Tiktok_6d954ae6d5.svg"
                  }
                  width={40}
                  height={40}
                  alt="EFEX"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="py-6 border-t border-[rgba(255,_255,_255,_0.20)]">
        <div className="container px-4 lg:px-0">
          <p className="text-sm text-center text-white">
            Copyright 2024 EFEX - eCommerce fulfillment & Express. All rights
            reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FooterEFFEXFulfillment;

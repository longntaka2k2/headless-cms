"use client";
import clsx from "clsx";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";

const LoginNow = ({ lang }: any) => {
  const locale = usePathname().slice(1, 3);
  return (
    <div className="relative px-4 py-6 lg:py-20 text-white overflow-hidden">
      <Image
        src={
          "https://strapi-efex.ichiba.net/uploads/Group_1171276275_aac10904f1.svg"
        }
        width={855}
        height={791}
        className="absolute right-0 top-[50%] translate-y-[-50%] -z-1"
        alt="bg"
      />
      <div
        className={clsx(
          "container bg-[url('https://strapi-efex.ichiba.net/uploads/Frame_2608925_a3cee3f622.svg')] bg-cover bg-no-repeat",
          "py-7 px-4 lg:py-14 lg:px-15 rounded-xl"
        )}
      >
        <div className="grid lg:grid-cols-2 gap-6 items-center">
          <div>
            <h3 className="text-xl lg:text-2xl font-bold mb-2">
              {lang.heading[0]}
              <br /> {lang.heading[1]}
            </h3>
            <p className="text-xl lg:text-2xl font-bold">{lang.label}</p>

            <div className="mt-8 hidden lg:block">
              <Link
                href={"https://app.ichiba.net/welcome"}
                target="_blank"
                className={clsx(
                  "p-3 rounded-lg flex justify-center bg-brand-primary text-sm font-medium cursor-pointer",
                  "text-white w-40 hover:bg-brand-primary-active transition-all"
                )}
              >
                {lang.textBtn}
              </Link>
            </div>
          </div>
          <div>
            <Image
              src={
                "https://strapi-efex.ichiba.net/uploads/Frame_427318689_1704e3af70.svg"
              }
              width={336}
              height={140}
              className="mx-auto"
              alt="image"
            />
            <div className="mt-6 lg:hidden">
              <Link
                href={"https://app.ichiba.net/welcome"}
                target="_blank"
                className={clsx(
                  "p-3 rounded-lg flex justify-center bg-brand-primary text-sm font-medium cursor-pointer",
                  "text-white w-40 hover:bg-brand-primary-active transition-all mx-auto"
                )}
              >
                {lang.textBtn}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginNow;

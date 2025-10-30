import clsx from "clsx";
import Image from "next/image";

const ShoppingCart = ({ lang }: { lang: any }) => {
  return (
    <div className=" py-6 lg:pt-20 px-3">
      <div className="container relative">
        <h2
          className={clsx(
            "lg:absolute top-0",
            "text-xl sm:text-2xl font-bold lg:text-4xl lg:leading-[48px] lg:w-[45%]"
          )}
        >
          {lang.heading}
        </h2>
        <Image
          src="https://strapi-efex.ichiba.net/uploads/Group_1171276005_1_5cb6d63d9a.png"
          alt="EFEX"
          width={894}
          height={1396}
          className="lg:hidden translate-y-5 -translate-x-6 mx-auto"
        />
        <Image
          src="https://strapi-efex.ichiba.net/uploads/Group_1171276004_2cd1954440.png"
          alt="EFEX"
          width={1233}
          height={1103}
          className="hidden lg:block mx-auto"
        />
        <Image
          src="https://strapi-efex.ichiba.net/uploads/Ellipse_964_49e604211b.svg"
          alt="EFEX"
          width={1027}
          height={774}
          className="absolute top-0 right-0 -z-1"
        />
        <Image
          src="https://strapi-efex.ichiba.net/uploads/Ellipse_964_1_427855f6a9.svg"
          alt="EFEX"
          width={711}
          height={712}
          className="absolute bottom-0 right-0 -z-10"
        />
      </div>
    </div>
  );
};

export default ShoppingCart;

import { clsx } from "clsx";
import EzImage from "../commons/EzImage";
import Link from "next/link";

const Tech = ({ lang }: any) => {
  const list = [
    "/uploads/Logo_d0dc2ca843.svg",
    "/uploads/Logo_1_ddc20ba245.svg",
    "/uploads/Logo_2_3618c70343.svg",
    "/uploads/Logo_3_6f505f4c1c.svg",
    "/uploads/Logo_4_65197a8318.svg",
    "/uploads/Logo_5_2f8ff2104a.svg",
  ];
  return (
    <div className="lg:mt-[80px] mt-10 px-4 lg:px-0">
      <div className="text-center lg:max-w-[976px] mx-auto lg:font-black font-bold lg:text-[40px] lg:leading-54 text-2xl  overflow-hidden">
        {lang.title}
      </div>
      <div className="lg:my-6 my-4 lg:text-lg text-sm text-center lg:max-w-[976px] mx-auto">
        {lang.subtitle}
      </div>
      <div className="grid md:grid-cols-3 grid-cols-2 lg:max-w-[828px] mx-auto md:gap-4 gap-0">
        {list.map((value, index) => (
          <EzImage
            width={260}
            height={104}
            quality={100}
            src={value}
            key={index}
            alt={value}
            className="hover:transition-all hover:scale-110 hover:duration-200 hover:ease-linear"
          />
        ))}
      </div>
      <div className="mt-20 lg:mt-10 text-center">
        <div className="max-w-[1176px] mx-auto lg:text-[32px] text-lg font-bold lg:leading-10">
          {lang.with}
        </div>
        <Link
        href={'/contact-sales'}
          className={clsx(
            "lg:mt-8 mt-5 bg-[url(https://strapi-ezbuy.ichiba.net/uploads/Layer_1_2979f088dc.svg)] block",
            " w-full max-w-[400px] py-5 mx-auto lg:text-4xl text-2xl lg:font-black font-bold text-white lg:px-8 px-4",
            "bg-no-repeat bg-cover rounded-full"
          )}
        >
          {lang.ex}
        </Link>
      </div>
    </div>
  );
};
export default Tech;

import Image from "next/image";

const Seamlessly = ({ lang }: { lang: any }) => {
  return (
    <div className="py-6 lg:py-15 px-3">
      <div className="container rounded-xl lg:rounded-[20px] py-6 px-4 lg:py-10 bg-[linear-gradient(239deg,_rgba(89,_141,_255,_0.70)_25.56%,_rgba(83,_124,_215,_0.80)_99.51%)]">
        <h2 className="mb-6 lg:mb-10 text-xl sm:text-2xl font-bold lg:text-4xl lg:leading-[48px] text-white lg:w-[75%] lg:text-center mx-auto">
          {lang.heading}
        </h2>
        <div className="flex flex-col lg:flex-row gap-3 lg:gap-[34px] justify-center items-center mx-auto">
          <div className="grid gap-3 lg:gap-6 w-[300px] lg:w-[240px]">
            <Image
              src="https://strapi-efex.ichiba.net/uploads/Frame_427318726_10_91677181c3.png"
              alt="EFEX"
              width={961}
              height={801}
              className="mx-auto"
            />
            <p className="text-sm lg:text-lg font-bold text-white text-center">
              {lang.steps[0]}
            </p>
          </div>
          <Image
            src="https://strapi-efex.ichiba.net/uploads/Vector_21_1_c91e76f6c3.svg"
            alt="EFEX"
            width={72}
            height={18}
            className="rotate-90 lg:rotate-0 my-7 lg:my-0 lg:-translate-y-14"
          />
          <div className="grid gap-3 lg:gap-6 w-[300px] lg:w-[240px]">
            <Image
              src="https://strapi-efex.ichiba.net/uploads/Frame_427318726_9_c3bfcdf37b.png"
              alt="EFEX"
              width={720}
              height={601}
              className="mx-auto"
            />
            <p className="text-sm lg:text-lg font-bold text-white text-center">
              {lang.steps[1]}
            </p>
          </div>
          <Image
            src="https://strapi-efex.ichiba.net/uploads/Vector_23_7febd554f9.svg"
            alt="EFEX"
            width={72}
            height={18}
            className="rotate-90 lg:rotate-0 my-7 lg:my-0 lg:-translate-y-14"
          />
          <div className="grid gap-3 lg:gap-6 w-[300px] lg:w-[240px]">
            <Image
              src="https://strapi-efex.ichiba.net/uploads/Frame_427318726_3_cec75df2fd.png"
              alt="EFEX"
              width={481}
              height={401}
              className="mx-auto"
            />
            <p className="text-sm lg:text-lg font-bold text-white text-center">
              {lang.steps[2]}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Seamlessly;

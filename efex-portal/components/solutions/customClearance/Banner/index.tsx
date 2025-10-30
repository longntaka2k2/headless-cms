import { Cta } from "@/components/commons/Cta";
import EzImage from "@/components/commons/EzImage";
import clsx from "clsx";

const Banner = async ({ lang, params }: { lang: any; params: any }) => {
  return (
    <section>
      <div className="pb-15 lg:pb-[120px]">
        <div className="bg-[#F2F4F8] pt-6 lg:pt-[96px] rounded-b-[60px] px-4 lg:px-0">
          <div
            className={clsx(
              "flex flex-col lg:flex-row col lg:items-center lg:justify-between gap-6",
              "container "
            )}
          >
            <div className="lg:w-[552px]">
              <h1 className="leading-8 lg:leading-56 mb-4 lg:mb-8">
                {lang.heading}
              </h1>
              <p className="text-sm lg:text-base mb-6 lg:mb-10">
                {lang.subHeading}
              </p>
              <Cta href={`/${params.lang}/contact-sales`} className="">
                {" "}
                {lang.cta}
              </Cta>
            </div>
            <EzImage
              src={"/uploads/shutterstock_2200408077_1_1_e66211643f.png"}
              alt="banner img"
              className="rounded-2xl lg:w-[570px] -mb-8  lg:mb-[-100px]"
              width={610}
              height={649}
            />
          </div>
        </div>
      </div>
      <div
        className={clsx(
          "flex flex-col lg:flex-row lg:justify-between gap-5 lg:gap-6",
          "container px-4 lg:px-0 mb-6 lg:mb-15"
        )}
      >
        {lang.contents.map((x: any, idx: number) => (
          <div className="px-4 lg:py-6 lg:px-5 text-center card-fx" key={idx}>
            <div className="w-20 h-20 lg:w-35 lg:h-35 rounded-full bg-[#D9D9D9] mb-4 lg:mb-6 mx-auto" />

            <p className="font-bold lg:text-2xl mb-2 lg:mb-4">{x.title}</p>
            <p className="text-sm lg:text-base">{x.des}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Banner;

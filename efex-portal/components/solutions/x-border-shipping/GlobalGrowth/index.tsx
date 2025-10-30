import clsx from "clsx";
import EzImage from "@/components/commons/EzImage";
import { Arrow } from "./Arrow";

const GlobalGrowth = ({ lang }: any) => {
  const images = [
    "/uploads/Frame_427318726_5922eebb7e.svg",
    "/uploads/Frame_427318727_ce7345db19.svg",
    "/uploads/Frame_427318728_0769a09ce5.svg",
    "/uploads/Frame_427318729_055b08379a.svg",
  ];
  return (
    <section className="container lg:py-10 lg:pb-20 px-4 lg:px-0">
      <div className="text-center">
        <h2 className="text-center font-bold text-2xl lg:text-4xl lg:leading-12 mb-2">
          {lang.heading}
        </h2>
        <p className="lg:text-base text-sm lg:w-4/5 mx-auto pb-6">{lang.subHeading}</p>
      </div>
      <div className="flex flex-col lg:flex-row  gap-2 lg:gap-0">
        {images.map((x, idx) => (
          <div
            key={idx}
            className={clsx(
              "relative",
              "flex flex-row-reverse flex-1",
              "lg:grid lg:grid-cols-5 ",
              "gap-x-4 gap-y-0 lg:gap-x-0 lg:gap-y-4 ",
              "border-b pb-2 lg:pb-0",
              "after:absolute after:content-['•']",
              "after:text-brand-primary after:text-2xl after:-bottom-1.5 after:lg:-bottom-3.5 after:-left-1.5"
            )}
          >
            <EzImage
              src={images[idx]}
              className="col-span-4 w-[158px] h-[132px] lg:w-[240px] lg:h-[200px]"
              alt=""
              width={240}
              height={200}
            />
            {images.length != idx + 1 && <Arrow reflect={idx % 2 != 0} />}
            <div
              className={clsx(
                " lg:col-span-4 pl-3",
                "border-l-dotted border-l-brand-primary border-l-2 "
              )}
            >
              <div className="text-brand-primary font-bold text-sm lg:text-base mb-1">{`${
                lang.step
              } ${idx + 1}:`}</div>
              <h3 className="lg:text-xl text-base font-bold mb-2">
                {lang.contents[idx].title}
              </h3>
              <p className="text-sm pb-6 lg:pb-5 lg:h-24">{lang.contents[idx].des}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default GlobalGrowth;

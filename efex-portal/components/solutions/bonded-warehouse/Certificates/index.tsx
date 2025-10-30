import EzImage from "@/components/commons/EzImage";
import clsx from "clsx";

const Certificates = ({ lang }: any) => {
  const contents = [
    { img: "/uploads/icon_189b71f5c7.png", width: 80 },
    { img: "/uploads/icon_189b71f5c7.png", width: 80 },
    {
      img: "/uploads/kk9_Tr29sez_Qxjv_LUG_Fum_L59_A_1_97d1fed8eb.png",
      width: 158,
    },
  ];
  return (
    <section className="py-6 lg:py-10 container px-4">
      <h2 className="text-center font-bold text-2xl  lg:text-4xl pb-4 lg:pb-10">
        {lang.heading}
      </h2>
      <div className="flex flex-col lg:flex-row gap-5">
        {contents.map((x, idx) => (
          <div
            key={idx}
            className={clsx(
              "flex flex-1 lg:flex-col items-center lg:items-start gap-4 lg:gap-6",
              "rounded-xl border border-ic-ink-2 card-fx",
              "p-4 lg:p-6"
            )}
          >
            <EzImage
              src={x.img}
              alt=""
              width={x.width}
              height={76}
              quality={100}
            />
            <p className="font-bold lg:text-lg text-sm">{lang.contents[idx]}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certificates;

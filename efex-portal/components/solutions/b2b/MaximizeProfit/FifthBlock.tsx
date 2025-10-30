import EzImage from "@/components/commons/EzImage";
import clsx from "clsx";

export const FifthBlock = ({ lang }: { lang: any }) => {
  const content = [
    {
      style:
        "text-ic-white-6 bg-[linear-gradient(159deg,_#023990_0.78%,_rgba(28,15,104,0.79)_70.45%)]",
      description: (
        <>
          {lang.content[0].before}{" "}
          <span className="font-bold">{lang.content[0].after}</span>
        </>
      ),
      image: (
        <div className="w-full h-full bg-[#F0F1FDF5] flex justify-center items-center">
          <EzImage
            src={"/uploads/Image_dedb3c5e32.png"}
            alt="Management order"
            width={275}
            height={196}
            quality={100}
            className="max-w-[296px] max-h-[211px] lg:max-w-[296px] lg:max-h-[218px]"
          />
        </div>
      ),
    },
    {
      style:
        "border border-primary-2 bg-[linear-gradient(295deg,_#F1F5FE_9.53%,_#D7D9FC_97.99%)]",
      description: lang.content[1],
      image: (
        <div className="w-full h-full  flex justify-center items-center">
          <EzImage
            src={"/uploads/Illustration_c4c5b5373d.png"}
            alt="Management order"
            width={326}
            height={272}
            quality={100}
            className="max-w-[319px] max-h-[228px]"
          />
        </div>
      ),
    },
  ];

  return (
    <div
      className={clsx(
        "relative w-full px-4 pt-6 mt-16 bg-[linear-gradient(180deg,_#F2F4F8_0.44%,_rgba(242,244,248,0.00)_85.38%);]",
        "lg:px-0 lg:py-10 lg:mt-24"
      )}
    >
      <EzImage
        src={"/uploads/manage_orders_bg_c6eefb2bd8.png"}
        alt="Arrow"
        width={526}
        height={644}
        className="hidden lg:block absolute bottom-0 left-0 -z-1"
      />
      <div className="container flex flex-col gap-5 lg:flex-row lg:gap-15">
        <h2 className="flex text-lg leading-6 font-bold gap-3 lg:text-2xl lg:justify-center">
          <p className="text-brand-primary">#5</p>
          <p className="text-brand-secondary">{lang.title}</p>
        </h2>
        <ul className="flex flex-col gap-4 lg:max-w-[792px]">
          {content.map((item, index) => (
            <li
              key={index}
              className={clsx(
                "flex flex-col items-center gap-7 lg:flex-row lg:gap-[52px]",
                "rounded-xl shadow-3 p-4 lg:rounded-[20px] lg:p-7",
                item.style
              )}
            >
              <p className="text-sm lg:text-base">{item.description}</p>
              <div className="w-full h-[272px] lg:basis-[320px] shrink-0 grow-0 lg:h-[218px] rounded-lg lg:rounded-2xl overflow-hidden flex justify-center items-center">
                {item.image}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

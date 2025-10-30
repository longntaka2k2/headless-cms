"use client";
import clsx from "clsx";
import EzImage from "../../commons/EzImage";

const WhyChoose = ({ lang }: any) => {
  const contents = [
    {
      img: "/uploads/icon_17c738b70f.svg",
      title: lang?.services?.airFreight?.cost?.title,
      content: lang?.services?.airFreight?.cost?.content,
    },
    {
      img: "/uploads/icon_1_11e656bfee.svg",
      title: lang?.services?.airFreight?.timely?.title,
      content: lang?.services?.airFreight?.timely?.content,
    },
    {
      img: "/uploads/icon_2_58553d8d39.svg",
      title: lang?.services?.airFreight?.trackAnd?.title,
      content: lang?.services?.airFreight?.trackAnd?.content,
    },
  ];
  return (
    <section className="py-14 lg:py-[120px] container">
      <div className="flex flex-col gap-2 lg:gap-6 items-center pb-6 lg:pb-12 px-4 lg:px-0">
        <h2 className="uppercase font-black text-2xl lg:text-4xl text-center">
          {lang?.services?.airFreight?.whyChoose}
        </h2>
      </div>
      <div className="flex lg:justify-center gap-4 lg:gap-6 w-full lg:flex-wrap items-stretch overflow-auto [&::-webkit-scrollbar]:hidden snap-proximity snap-x">
        {contents.map((x, idx) => (
          <article
            key={idx}
            className={clsx(
              "flex flex-col gap-6 p-4 lg:py-4 justify-start content-center lg:max-w-[22%]",
              " min-w-[284px] lg:min-w-[376px]",
              "transition-all duration-200 hover:scale-[1.015] ease-out snap-center",
              "border-1 hover:shadow-1",
              "shadow-5 bg-[rgba(255,_255,_255,_0.85)]"
            )}
          >
            <div className="w-[40px] h-[40px] self-center">
              <EzImage
                src={x.img}
                alt={x.title}
                width={40}
                height={40}
                className="self-center"
              />
            </div>
            <div>
              <h3 className="font-bold self-center text-center">{x?.title}</h3>
              <p className="text-sm mt-2">{x?.content}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default WhyChoose;

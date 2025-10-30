"use client";
import clsx from "clsx";
import EzImage from "../../commons/EzImage";
const Value = ({ lang }: any) => {
  const contents = [
    {
      img: "/uploads/Order_management_image_3d3f858cf1.jpg",
      imgPc: "/uploads/Order_management_image_4_0175959f13.jpg",
      title: lang?.services?.airFreight?.cost?.title,
      content: lang?.services?.airFreight?.cost?.content,
    },
    {
      img: "/uploads/Order_management_image_3_df974027b9.jpg",
      imgPc: "/uploads/Order_management_image_5_b249ae9904.jpg",
      title: lang?.services?.airFreight?.timely?.title,
      content: lang?.services?.airFreight?.timely?.content,
    },
    {
      img: "/uploads/Order_management_image_2_7be68ba905.jpg",
      imgPc: "/uploads/Order_management_image_6_7d1c324be7.jpg",
      title: lang?.services?.airFreight?.trackAnd?.title,
      content: lang?.services?.airFreight?.trackAnd?.content,
    },
    {
      img: "/uploads/Order_management_image_1_f7582600f7.jpg",
      imgPc: "/uploads/Order_management_image_7_6812ac9036.jpg",
      title: lang?.services?.airFreight?.cost?.title,
      content: lang?.services?.airFreight?.cost?.content,
    },
  ];
  return (
    <section className="pt-10 lg:py-[80px]  bg-[#F5F5F5]">
      <div className="container">
        <div className="flex flex-col gap-6 items-center pb-14 lg:pb-12 px-4 lg:px-0">
          <h2 className="uppercase font-black text-2xl lg:text-4xl text-center">
            {lang?.services?.airFreight?.value?.heading}
          </h2>
          <div className="text-center ">
            {lang?.services?.airFreight?.value?.subHeading}
          </div>
        </div>
        <div className="grid grid-col lg:grid-cols-2 gap-6 ">
          {contents.map((x, idx) => (
            <div
              key={idx}
              className={clsx(
                "h-full lg:bg-white",
                "transition-all duration-200 hover:scale-[1.015] ease-out snap-center",
                "border-1 hover:shadow-1",
                "shadow-5 bg-[rgba(255,_255,_255,_0.85)]"
              )}
            >
              <div className="">
                <EzImage
                  src={x.img}
                  alt={x.title}
                  width={375}
                  height={200}
                  className="lg:hidden object-cover h-[55vw] w-full"
                  quality={100}
                />
                <EzImage
                  src={x.imgPc}
                  alt={x.title}
                  width={576}
                  height={200}
                  className="lg:block hidden"
                />
              </div>
              <div className="px-4 py-6  ">
                <h3 className="font-bold">{x?.title}</h3>
                <p className="text-sm mt-2 ">{x?.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Value;

"use client";
import EzImage from "../commons/EzImage";

const Benefits = ({ lang }: any) => {
  const { heading, items } = lang.services.dropshipping.benefits;

  return (
    <section className="relative bg-[url('https://strapi-ezbuy.ichiba.net/uploads/Frame_427318679_b517b3c819.png')] bg-cover bg-no-repeat overflow-hidden">
      <div className="container px-4 py-6 lg:pt-15 lg:pb-20 text-white z-10 relative">
        <h2 className="text-[28px] lg:text-4xl font-black uppercase lg:text-center pb-6 lg:pb-10">
          {heading}
        </h2>
        <div className="grid lg:grid-cols-3 gap-6">
          {items.map((item: any, index: number) => (
            <div
              key={index}
              style={{
                background: "rgba(255, 255, 255, 0.08)",
              }}
              className="p-6 lg:p-7 rounded-xl border border-[rgba(255,_255,_255,_0.08)] hover:border-red-500"
            >
              <div className="mb-5 w-16 h-16 lg:w-20 lg:h-20 flex items-center justify-center rounded-lg bg-[rgba(255,_255,_255,_0.08)]">
                <EzImage
                  src={item.icon}
                  width={52}
                  height={52}
                  alt="icon"
                  className="w-10 h-10 lg:w-[52px] lg:h-[52px]"
                />
              </div>
              <h3 className="text-lg lg:text-xl font-bold">{item.title}</h3>
              <p className="text-sm lg:text-base">{item.content}</p>
            </div>
          ))}
        </div>
      </div>
      <EzImage
        src="/uploads/Group_19757_0dbdecfd68.svg"
        width={861}
        height={742}
        alt="ezbuy"
        className="absolute bottom-0 right-0 z-0 hidden lg:block"
      />

      <EzImage
        src="/uploads/Group_19757_1069557d57.svg"
        width={299}
        height={223}
        alt="ezbuy"
        className="absolute top-0 right-0 z-0 lg:hidden"
      />
    </section>
  );
};
export default Benefits;

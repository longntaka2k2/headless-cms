"use client";
import EzImage from "../commons/EzImage";

const Customized = ({ lang }: { lang: any }) => {
  const { heading, items } = lang.services.dropshipping.customized;

  return (
    <section className="py-6 lg:py-15">
      <div className="container px-4">
        <h2 className="text-[28px] lg:text-4xl font-black uppercase lg:text-center pb-6 lg:pb-10">
          {heading}
        </h2>

        <div className="grid lg:grid-cols-2 gap-6">
          {items.map((item: any, index: number) => {
            return (
              <div key={index} className="grid gap-4 lg:gap-6">
                <EzImage
                  src={item.image}
                  width={576}
                  height={241}
                  alt="image"
                  className="mx-auto"
                />
                <div className="flex items-start gap-2">
                  <EzImage src={item.icon} width={46} height={47} alt="icon" />
                  <div>
                    <h3 className="text-lg lg:text-2xl font-bold mb-2">
                      {item.title}
                    </h3>
                    <h3 className="text-sm">{item.subTitle}</h3>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default Customized;

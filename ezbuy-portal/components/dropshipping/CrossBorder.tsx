"use client";
import EzImage from "../commons/EzImage";

const CrossBorder = ({ lang }: { lang: any }) => {
  const { heading, subHeading, contents } =
    lang.services.dropshipping.crossBorder;

  return (
    <section className="py-6 lg:py-15 bg-[url('https://strapi-ezbuy.ichiba.net/uploads/Frame_16464_b325b4f40c.svg')] bg-cover bg-no-repeat">
      <div className="container px-4 text-white flex flex-col lg:flex-row gap-6 lg:gap-10">
        <div>
          <h2 className="text-[28px] lg:text-4xl font-black uppercase pb-2 lg:pb-6">
            {heading}
          </h2>
          <p className="text-base lg:text-lg font-bold mb-2">{subHeading}</p>
          {contents.map((item: any, index: number) => {
            return (
              <li key={index} className="text-sm lg:text-base">
                {item}
              </li>
            );
          })}
        </div>
        <EzImage
          src="/uploads/image_826_82b8e7db55.svg"
          width={674}
          height={386}
          className="mx-auto"
          alt="#"
        />
      </div>
    </section>
  );
};
export default CrossBorder;

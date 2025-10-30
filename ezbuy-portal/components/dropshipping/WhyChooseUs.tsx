"use client";
import EzImage from "../commons/EzImage";

const WhyChooseUs = ({ lang }: { lang: any }) => {
  const { heading, subHeading, title, subTitle } =
    lang.services.dropshipping.whyChooseUs;

  return (
    <section className="py-6 lg:py-15 bg-[url('https://strapi-ezbuy.ichiba.net/uploads/Frame_1171276123_ebb724cf84.svg')]">
      <div className="container px-4">
        <h2 className="text-[28px] lg:text-4xl font-black uppercase lg:text-center pb-2">
          {heading}
        </h2>
        <p className="text-sm lg:text-base lg:text-center pb-6 lg:pb-10">
          {subHeading}
        </p>

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-[46px] p-6 lg:p-10 items-center bg-white">
          <div>
            <h3 className="text-lg lg:text-2xl font-bold mb-4">{title}</h3>
            <p className="text-sm lg:text-base">{subTitle}</p>
          </div>
          <EzImage
            src="/uploads/b2b_1_dfa802a57f.svg"
            width={586}
            height={360}
            alt="#"
          />
        </div>
      </div>
    </section>
  );
};
export default WhyChooseUs;


import clsx from "clsx";
import EzImage from "../commons/EzImage";
import CTA from "./CTA";


const GoGlobal = ({ lang }: any) => {

  return (
    <div
      className={clsx(
        "lg:bg-[url(https://strapi-ezbuy.ichiba.net/uploads/Pick_and_pack_fulfillment_guide_4032730b30.svg)]",
        "lg:py-[80px] py-10 bg-[linear-gradient(180deg,_#FFF_29.69%,_#C1DAFF_100%)] px-4 lg:px-0"
      )}
    >
      <div className="container">
        <h1 className="lg:text-4xl font-black text-2xl text-center lg:leading-54 uppercase leading-30 max-w-[1100px] mx-auto">
          {lang.title}
        </h1>
        <EzImage src={'/uploads/Vector_00332d4c18.svg'} alt="/uploads/Vector_00332d4c18.svg" width={700} height={700} quality={100} className="py-4 lg:hidden" />
        <div className="lg:mt-10 mt-6 grid lg:grid-cols-2 lg:max-w-[1000px] mx-auto lg:gap-10 gap-6">
          <EzImage
            src={"/uploads/image_854_497174307d.png"}
            className="mx-auto shadow-1"
            alt="/uploads/image_854_497174307d.png"
            width={480}
            height={370}
            quality={100}
          />
          <EzImage
            src={"/uploads/image_855_da83c7a881.png"}
            className="mx-auto shadow-1"
            alt="/uploads/image_855_da83c7a881.png"
            width={480}
            height={370}
            quality={100}
          />
        </div>
        <div className="lg:my-10 my-6 max-w-[787px] mx-auto lg:text-base text-sm text-center">
          {lang.content1}
        </div>
        <div className="lg:mb-10 mb-6 max-w-[900px] mx-auto text-center lg:text-base text-sm">
          {lang.content2}
        </div>
        <CTA lang={lang.button} />
      </div>
    </div>
  );
};

export default GoGlobal;

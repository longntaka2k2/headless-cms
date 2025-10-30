import EzImage from "@/components/commons/EzImage";
import { Card } from "./Card";
import MobileSlide from "./MobileSlide";

const OurWarehouse = ({ lang }: { lang: any }) => {
  const contents = [
    {
      name: "Hanoi, Vietnam",
      address:
        "No. 8 Le Quang Dao, Phu Do Ward, Nam Tu Liem District, Hanoi, Vietnam",
      image: "/uploads/image_6_502f66ddfc.png",
    },
    {
      name: "TP.HCM, Vietnam",
      address:
        "55 SAM SON, WARD 4, TAN BINH DISTRICT, CITY. HO CHI MINH CITY, VIETNAM",
      image: "/uploads/image_6_1_019e15f8b7.png",
    },
  ];
  return (
    <section className="bg-[#F0F5FF] py-6 ">
      <div className="container lg:py-10 px-4 lg:px-0">
        <div className="mb-10 text-center">
          <h2 className="text-2xl lg:text-4xl font-black mb-2 lg:leading-[48px] uppercase">
            {lang.heading}
          </h2>
          <p className="text-sm lg:text-base">{lang.subHeading}</p>
        </div>
        <div className="relative">
          <Card
            {...contents[0]}
            className="left-[12%] z-10 hidden lg:block absolute w-[376px]"
          />
          <Card
            {...contents[1]}
            className="left-[15%] z-10 bottom-[0%] hidden lg:block absolute w-[376px]"
          />
          <EzImage
            src={"/uploads/Layer_1_1_57b885903f.svg"}
            alt="Ezbuy"
            width={475}
            height={584}
            className="relative left-[40%] h-[584px] hidden lg:block"
          />
          <EzImage
            src={"/uploads/Frame_260914_684794dcac.svg"}
            alt="Ezbuy"
            width={475}
            height={584}
            className="relative h-[343px] lg:hidden block"
          />
        </div>
      </div>
      <MobileSlide contents={contents} className="lg:hidden" />
    </section>
  );
};

export default OurWarehouse;

"use client";
import useWidth from "@/hooks/useWidth";
import Facilities from "../services/Facilities";
import WhyChooseEzBuy from "../services/WhyChooseEzbuy";

const CreateAShipment = ({ lang }: any) => {
  const width = useWidth();
  const whyChooseUsContent = [
    {
      title: lang.services?.xBorderShip?.shipment?.content?.solutions[0],
      content:
        lang.services?.xBorderShip?.shipment?.content?.solutionContents[0],
      image: "/uploads/Rectangle_9_812365deef.png",
    },
    {
      title: lang.services?.xBorderShip?.shipment?.content?.solutions[1],
      content:
        lang.services?.xBorderShip?.shipment?.content?.solutionContents[1],
      image: "/uploads/Rectangle_10_4d9df2c94c.png",
    },
    {
      title: lang.services?.xBorderShip?.shipment?.content?.solutions[2],
      content:
        lang.services?.xBorderShip?.shipment?.content?.solutionContents[2],
      image: "/uploads/Rectangle_11_9fbb6e044e.png",
    },
    {
      title: lang.services?.xBorderShip?.shipment?.content?.solutions[3],
      content:
        lang.services?.xBorderShip?.shipment?.content?.solutionContents[3],
      image: "/uploads/Rectangle_12_70ec6f2a8b.png",
    },
    {
      title: lang.services?.xBorderShip?.shipment?.content?.solutions[4],
      content:
        lang.services?.xBorderShip?.shipment?.content?.solutionContents[4],
      image: "/uploads/Rectangle_13_e9f67e85f3.png",
    },
    {
      title: lang.services?.xBorderShip?.shipment?.content?.solutions[5],
      content:
        lang.services?.xBorderShip?.shipment?.content?.solutionContents[5],
      image: "/uploads/Rectangle_14_eb7a2488dd.png",
    },
    {
      title: lang.services?.xBorderShip?.shipment?.content?.solutions[6],
      content:
        lang.services?.xBorderShip?.shipment?.content?.solutionContents[6],
      image: "/uploads/Rectangle_15_ea3bf21a0e.png",
    },
    {
      title: lang.services?.xBorderShip?.shipment?.content?.solutions[7],
      content:
        lang.services?.xBorderShip?.shipment?.content?.solutionContents[7],
      image: "/uploads/Rectangle_17_e8237f0c4f.png",
    },
  ];
  return (
    <section className="relative">
      <Facilities
        lang={lang.services.xBorderShip.shipment}
        imageUrl={
          width > 600
            ? "https://strapi-ezbuy.ichiba.net/uploads/Rectangle_6548_1_1c11cc53d9.png"
            : "https://strapi-ezbuy.ichiba.net/uploads/Rectangle_6548_47938401c7.png"
        }
        className="mb-[-35%] md:mb-[-15%] lg:mb-[-12%]"
      />
      <WhyChooseEzBuy
        lang={lang}
        heading=""
        subHeading=""
        contents={whyChooseUsContent}
        className="relative z-10 mx-4 lg:mx-0"
      />
    </section>
  );
};
export default CreateAShipment;

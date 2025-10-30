"use client";
import Image from "next/image";
import { Element } from "react-scroll";
import { useWindowSize } from "usehooks-ts";
const OurCulture = ({ aboutUs }: { aboutUs: any }) => {
  const screen = useWindowSize();
  const checkWidthScreen = screen.width < 1024;
  const listOurCulture = [
    {
      id: 1,
      title: aboutUs.innovationCreativity,
      content: aboutUs.contentInnovationCreativity,
      image: "/uploads/Rectangle_13_502a5be6ce.webp",
    },
    {
      id: 2,
      title: aboutUs.sharing,
      content: aboutUs.contentSharing,
      image: "/uploads/Rectangle_13_1_9f134d95f8.webp",
    },
    {
      id: 3,
      title: aboutUs.dareToThinkDareToAct,
      content: aboutUs.contentDareToThinkDareToAct,
      image: "/uploads/Rectangle_13_2_303bcd474d.webp",
    },
    {
      id: 4,
      title: aboutUs.upholdPromoteJapaneseTradition,
      content: aboutUs.contentUpholdPromoteJapaneseTradition,
      image: "/uploads/Rectangle_13_3_0d08e5806a.webp",
    },
    {
      id: 5,
      title: aboutUs.teamwork,
      content: aboutUs.contentTeamwork,
      image: "/uploads/Rectangle_13_4_f8c38aa75c.webp",
    },
  ];

  return (
    <Element className="mt-20 lg:mt-[120px]" name="ourCulture" id="ourCulture">
      <div className="flex lg: justify-center">
        <div className="container">
          <div className="px-4">
            <p className="text-2xl lg:text-4xl lg:leading-54 font-black leading-9 text-gray-10 uppercase">
              {aboutUs.ourCulture}
            </p>
            <p className="mt-2 lg:mt-4 text-sm font-normal lg:text-lg lg:leading-27 lea ding-21 text-gray-10">
              {aboutUs.contentOurCulture}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-6 lg:mt-[52px] flex lg:items-start lg:justify-center">
        <div className="container">
          <div className="px-4">
            {listOurCulture.map((item, index) => (
              <div key={`${item.id}`}>
                <div className="flex flex-col lg:flex-row lg:gap-x-6">
                  <p className="text-lg font-bold leading-27 text-black lg:basis-2/5">
                    {item.title}
                  </p>
                  <p className="mt-3 lg:mt-0 text-sm font-normal leading-21 text-black  lg:basis-2/5">
                    {item.content}
                  </p>
                  <Image
                    className={`w-auto h-auto lg:3/5 hover:scale-105 hover:shadow-[0px_4px_12px_rgba(0,_0,_0,_0.24)] hover:transition-all hover:duration-300 hover:ease-linear ${
                      checkWidthScreen ? "max-w-[343px]" : "max-w-[576px]"
                    } ${
                      checkWidthScreen ? "max-h-[160px]" : "max-h-[200px]"
                    }  object-cover mt-6 lg:mt-0 bg-[#D9D9D9]`}
                    alt="Group_20_f6c3d48328"
                    src={`https://strapi-ezbuy.ichiba.net${item.image}`}
                    width={checkWidthScreen ? 343 : 648}
                    height={checkWidthScreen ? 160 : 200}
                  />
                </div>
                {index + 1 < listOurCulture.length && (
                  <div className="w-full h-[2px] bg-[#D9D9D9] my-6 lg:my-8"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Element>
  );
};
export default OurCulture;

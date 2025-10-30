"use client";
import Image from "next/image";
import { Element } from "react-scroll";
const OurCulture = ({ aboutUs }: { aboutUs: any }) => {
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
    <Element className="mt-20" name="ourCulture" id="ourCulture">
      <div className="px-4">
        <p className="text-2xl font-black leading-9 text-gray-10 uppercase">
          {aboutUs.ourCulture}
        </p>
        <p className="mt-2 text-sm font-normal leading-21 text-gray-10">
          {aboutUs.contentOurCulture}
        </p>
      </div>
      <div className="mt-6 px-4">
        {listOurCulture.map((item, index) => (
          <div key={`${item.id}`}>
            <p className="text-lg font-bold leading-27 text-black">
              {item.title}
            </p>
            <p className="mt-3 text-sm font-normal leading-21 text-black">
              {item.content}
            </p>
            <Image
              className="w-full min-w-[343px] h-[160px] object-cover mt-6 bg-[#D9D9D9]"
              alt="Group_20_f6c3d48328"
              src={`https://strapi-efex.ichiba.net${item.image}`}
              width={343}
              height={160}
              quality={100}
            />
            {index + 1 < listOurCulture.length && (
              <div className="w-full h-1 bg-[#F5F5F5] my-6"></div>
            )}
          </div>
        ))}
      </div>
    </Element>
  );
};
export default OurCulture;

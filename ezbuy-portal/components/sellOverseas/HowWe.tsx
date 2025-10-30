import Link from "next/link";
import EzImage from "../commons/EzImage";

const HowWe = ({ lang }: any) => {
  return (
    <div className="lg:py-10 py-6 px-4 lg:px-0 bg-[linear-gradient(180deg,_#00194F_0%,_#CBDBFF_100%);] ">
      <h2 className="lg:text-4xl font-black text-2xl uppercase text-center text-white container lg:max-w-[1100px]">
        {lang.howWe.title}
      </h2>
      <div className="max-w-[900px] mx-auto">
        <div className="grid lg:grid-cols-2 lg:my-10 my-6 lg:gap-[60px] gap-5">
          {lang.howWe.items.map((value: any, index: number) => (
            <div
              className="flex items-center py-6 border-t border-b border-white"
              key={index}
            >
              <div className="bg-white rounded-full max-w-[24px] w-full h-full max-h-6 text-center mr-4">
                {index + 1}
              </div>
              <div className="lg:text-base text-sm text-white text-left">
                {value}
              </div>
            </div>
          ))}
        </div>
        <div className="rounded-2xl lg:p-10 p-6 bg-white text-center">
          <div className="mx-auto">
            <div className="flex justify-center items-center">
            <EzImage
                src={"/uploads/image_862_ba39989aa4.svg"}
                alt="a"
                width={110}
                height={56}
                className=""
                quality={100}
              />
              <EzImage
                src={"/uploads/Times_Close_Delete_4a00a76e82.svg"}
                alt="a"
                width={24}
                height={24}
                className="mx-6"
              />
              <EzImage
                src={"/uploads/Group_64f5e76c2b.svg"}
                alt="a"
                width={132}
                height={40}
              />
            </div>
          </div>
          <div className="lg:text-4xl text-[#333] font-black text-2xl uppercase  mt-4 lg:mt-6">
            {lang.serve.title}
          </div>
          <div className="lg:text-base text-sm font-medium mt-4 lg:mt-6">
            {lang.serve.shipping}
          </div>
          <div className="mt-6 lg:mt-8">
            <Link
              href={""}
              className=" bg-[url(https://strapi-ezbuy.ichiba.net/uploads/Primary_e56a2ae1d3.svg)] w-max bg-no-repeat mx-auto bg-cover py-3 px-4 text-white text-sm font-bold rounded-lg"
            >
              {lang.serve.howto}
            </Link>
          </div>
          <div className="lg:mt-8 mt-6 lg:text-base text-sm">
            {lang.serve.ezbuy}
          </div>
          <div className="lg:mt-6 mt-4 lg:flex justify-center items-center gap-4">
            <div className="flex gap-4 justify-center">
              <EzImage
                className=""
                width={82}
                height={43}
                src={"/uploads/Group_19752_d178dfa308.svg"}
                alt="/uploads/Group_19752_d178dfa308.svg"
              />
              <EzImage
                width={16}
                height={16}
                src={"/uploads/Vector_20_cbd229e8dd.svg"}
                alt="/uploads/Vector_20_cbd229e8dd.svg"
              />
              <EzImage
                width={56}
                height={53}
                src={"/uploads/Group_19753_e49cc6ddee.svg"}
                alt="/uploads/Group_19753_e49cc6ddee.svg"
              />
              <EzImage
                width={16}
                height={16}
                src={"/uploads/Vector_20_cbd229e8dd.svg"}
                alt="/uploads/Vector_20_cbd229e8dd.svg"
              />
            </div>
            <div className="flex gap-4 justify-center mt-4 lg:mt-0">
              <EzImage
                width={55}
                height={48}
                src={"/uploads/Group_1_a4b7cb1770.svg"}
                alt="/uploads/Group_1_a4b7cb1770.svg"
              />
              <EzImage
                width={16}
                height={16}
                src={"/uploads/Vector_20_cbd229e8dd.svg"}
                alt="/uploads/Vector_20_cbd229e8dd.svg"
              />
              <EzImage
                width={47}
                height={47}
                src={"/uploads/Group_19754_d49b6d8479.svg"}
                alt="/uploads/Group_19754_d49b6d8479.svg"
              />
            </div>
          </div>
          <div className="border-b border-[#D6E4FF] lg:mt-6 mt-4"></div>
          <div className="lg:mt-6 mt-4 lg:text-base text-sm">
            {lang.serve.for}
          </div>
          <div className="text-center mt-2">
            <EzImage
              width={24}
              height={24}
              src={"/uploads/image_852_37d375f8b3.png"}
              alt="/uploads/image_852_37d375f8b3.png"
              className="mx-auto "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowWe;

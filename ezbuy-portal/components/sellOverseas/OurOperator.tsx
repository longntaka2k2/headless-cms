import EzImage from "../commons/EzImage";

const OurOperator = ({ lang }: any) => {
  return (
    <div className=" container ">
      <div className="mx-4 lg:mx-0 bg-[linear-gradient(292deg,_#15274F_54.6%,_#FF4F4F_114.53%,_#B71E1E_114.53%)] px-4 py-6 lg:p-[60px] rounded-[20px] lg:my-10 my-6  ">
        <div className="text-center text-white">
          <h2 className="lg:text-4xl text-2xl font-black uppercase">{lang.title}</h2>
          <div className="lg:text-base text-sm mt-2">{lang.subtitle}</div>
          <div className="flex overflow-x-scroll lg:overflow-visible items-center gap-[28px] lg:mt-10 mt-8">
            <div className="h-full ">
              <EzImage
                src={"/uploads/Frame_427318782_b01604d922.png"}
                alt="/uploads/Frame_427318782_b01604d922.png"
                width={200}
                height={195}
                quality={100}
                className="max-w-[195px]"
              />
              <div className="font-bold lg:text-lg text-sm">{lang.over}</div>
            </div>
            <div className="grid gap-10 h-full ">
              <div className="w-[150px]">
                <div className="text-[11px]">{lang.place}</div>
                <EzImage
                  src={"/uploads/Vector_18_081d01a90e.svg"}
                  className="lg:w-full "
                  alt="/uploads/Vector_18_081d01a90e.svg"
                  width={200}
                  height={10}
                  quality={100}
                />
              </div>
              <div className="h-full">
                <EzImage
                  src={"/uploads/Vector_19_091e0c41ec.svg"}
                  className="w-full"
                  alt="/uploads/Vector_18_081d01a90e.svg"
                  width={200}
                  height={10}
                  quality={100}
                />
                <div className="text-[11px]">{lang.overseas}</div>
              </div>
            </div>
            <div className="">
              <EzImage
                src={"/uploads/Frame_427318787_2_ed2c71131a.png"}
                alt="/uploads/Frame_427318787_88adbd97d3.png"
                width={200}
                className="max-w-[200px]"
                height={195}
                quality={100}
              />
              <div className=" font-bold lg:text-lg text-sm">
                <div>{lang.ezbuy[0]}</div>
                <div>{lang?.ezbuy[1]}</div>
              </div>
            </div>
            <div className="grid gap-10 ">
              <div className="w-[150px]">
                <div className="text-[11px]">{lang.purchase}</div>
                <EzImage
                  src={"/uploads/Vector_18_081d01a90e.svg"}
                  className="w-full"
                  alt="/uploads/Vector_18_081d01a90e.svg"
                  width={200}
                  height={10}
                  quality={100}
                />
              </div>
              <div>
                <EzImage
                  src={"/uploads/Vector_19_091e0c41ec.svg"}
                  className="w-full"
                  alt="/uploads/Vector_18_081d01a90e.svg"
                  width={200}
                  height={10}
                  quality={100}
                />
                <div className="text-[11px]">{lang.domestics}</div>
              </div>
            </div>
            <div>
              <EzImage
                src={"/uploads/Frame_427318785_e36ff17087.png"}
                alt="/uploads/Frame_427318785_e36ff17087.png"
                width={279}
                height={19}
                quality={100}
                className="max-w-[279px]"
              />
              <div className=" font-bold lg:text-lg text-sm">
                {lang.japaneses}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default OurOperator;

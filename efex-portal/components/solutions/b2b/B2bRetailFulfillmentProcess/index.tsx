import EzImage from "@/components/commons/EzImage";
import { MobileProcessList, DesktopProcessList } from "./ProcessList";

const B2bRetailFulfillmentProcess = ({ lang }: { lang: any }) => {
  const processList = lang.b2bRetailFulfillmentProcess.process as string[];
  const mobileList = [
    {
      title: processList[0],
      content: (
        <div className="mt-4 flex justify-end">
          <EzImage
            src={"/uploads/Image_4_d02481ceef.svg"}
            alt={processList[0]}
            width={304}
            height={161}
            quality={100}
          />
        </div>
      ),
    },
    {
      title: processList[1],
      content: (
        <div className="mt-4 flex justify-end">
          <EzImage
            src={"/uploads/Image_2_53cea961b5.svg"}
            alt={processList[1]}
            width={311}
            height={183}
            quality={100}
          />
        </div>
      ),
    },
    {
      title: processList[2],

      content: (
        <div className="mt-1 flex justify-end">
          <EzImage
            src={"/uploads/Image_3_639f41cc88.svg"}
            alt={processList[2]}
            width={300}
            height={238}
            quality={100}
          />
        </div>
      ),
    },
  ];

  return (
    <section className="bg-brand-secondary px-4 py-6 lg:px-0 lg:py-15">
      <div className="text-center">
        <h2 className="mx-auto max-w-[240px] text-2xl font-bold text-ic-white-6 lg:max-w-none lg:text-4xl lg:leading-12">
          {lang.b2bRetailFulfillmentProcess.title}
        </h2>
        <p className="mt-1 text-sm text-ic-white-5 lg:text-lg lg:leading-6">
          {lang.b2bRetailFulfillmentProcess.subtitle}
        </p>
      </div>

      {/** mobile */}
      <div className=" lg:hidden mt-6 bg-ic-white-6 rounded h-[795px] pt-5 pl-4">
        <MobileProcessList list={mobileList} />
      </div>

      {/** desktop */}
      <div className="hidden lg:block container mt-10 bg-ic-white-6 rounded-2xl h-[660px]">
        <DesktopProcessList list={processList} />
      </div>
    </section>
  );
};

export default B2bRetailFulfillmentProcess;

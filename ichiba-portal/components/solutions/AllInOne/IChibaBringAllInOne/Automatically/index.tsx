import { useTranslation } from "next-i18next";
import Image from "next/image";

const Automatically = () => {
  const a = useTranslation("all-in-one").t;

  return (
    <div className="tw-mt-6 tw-mx-4 lg:tw-container lg:tw-mt-[60px]">
      <div className="lg:tw-flex tw-gap-0 lg:tw-mr-[100px]">
        <div>
          <h3 className="tw-font-bold tw-text-lg tw-mt-3 lg:tw-text-2xl tw-mb-0">
            {a("iChibaBring.automatic.title")}
          </h3>
          <div className="tw-grid tw-gap-5 ">
            <div className="tw-grid tw-gap-3 tw-mt-4 tw-ml-6 lg:tw-ml-0">
              {(
                a("iChibaBring.automatic.content", {
                  returnObjects: true,
                }) as string[]
              ).map((value: any, index: number) => (
                <div key={index} className="tw-flex tw-gap-2 tw-items-start lg:tw-px-10 lg:tw-py-5 hover:tw-bg-[#F3F7FE] lg:tw-items-center">
                  <Image
                    src={
                      "https://cms-strapi.ichiba.net/uploads/Group_6a164c2d6e.svg"
                    }
                    alt=""
                    width={24}
                    height={24}
                  />
                  <div className="tw-text-sm lg:tw-text-base">{value}</div>
                </div>
              ))}
            </div>
            <Image
              src={
                "https://cms-strapi.ichiba.net/uploads/Left_content_e3476c0a66.svg"
              }
              alt=""
              width={355}
              height={225}
              className="lg:tw-min-w-[500px] lg:tw-hidden"
            />
          </div>
        </div>
        <Image
            src={
              "https://cms-strapi.ichiba.net/uploads/Left_content_e3476c0a66.svg"
            }
            alt=""
            width={355}
            height={225}
            className="lg:tw-min-w-[500px] tw-hidden lg:tw-block"
          />
      </div>
    </div>
  );
};

export default Automatically;

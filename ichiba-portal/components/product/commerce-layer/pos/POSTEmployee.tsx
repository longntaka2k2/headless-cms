import { useTranslation } from "next-i18next";
import Image from "next/image";
const PosForEmployee = () => {
  const p = useTranslation("pos").t;

  return (
    <div className="tw-py-6 tw-px-4 lg:tw-container lg:tw-pt-10 lg:tw-pb-20">
      <div className="lg:tw-hidden">
        <div className="tw-text-[#1135A8] tw-uppercase tw-text-sm tw-font-medium lg:tw-text-base">
          {p("posforemploy.label")}
        </div>
        <h3 className="tw-font-bold tw-text-2xl lg:tw-text-4xl">
          {p("posforemploy.title")}
        </h3>
      </div>
      <div className="tw-flex tw-flex-col tw-gap-4 lg:tw-gap-6 lg:tw-grid tw-grid-cols-12">
        <div className="lg:tw-col-span-5">
          <div className="lg:tw-block tw-hidden">
            <div className="tw-text-[#1135A8] tw-uppercase tw-text-sm tw-font-medium lg:tw-text-base">
              {p("posforemploy.label")}
            </div>
            <h3 className="tw-font-bold tw-text-2xl lg:tw-text-4xl">
              {p("posforemploy.title")}
            </h3>
          </div>
          <div className="tw-mt-4 lg:tw-mt-15 tw-rounded-lg lg:tw-rounded-2xl tw-bg-[#FFFAF7]">
            <div className="tw-p-4 lg:tw-p-6">
              <div className="tw-font-bold lg:tw-text-xl">
                {p("posforemploy.searchProducts.title")}
              </div>
              <div className="tw-text-sm tw-mt-2 lg:tw-mt-3 lg:tw-text-base">
                {p("posforemploy.searchProducts.content")}
              </div>
            </div>
            <Image
              src={
                "https://cms-strapi.ichiba.net/uploads/Frame_1171276586_1_b07a21c04f.png"
              }
              width={518}
              height={335}
              alt=""
              className="tw-px-4 tw-mx-auto"
            />
          </div>
        </div>
        <div className="tw-flex tw-flex-col tw-gap-4 lg:tw-gap-6 lg:tw-grid lg:tw-col-span-7">
          <div className="tw-grid md:tw-grid-cols-2 tw-gap-4 lg:tw-gap-6 ">
            <div className="tw-border tw-border-[#ddd] tw-p-4 lg:tw-p-6 tw-rounded-lg lg:tw-rounded-2xl lg:tw-flex-col tw-flex tw-items-center lg:tw-items-start tw-gap-4 lg:tw-gap-6">
              <Image
                src={
                  "https://cms-strapi.ichiba.net/uploads/Frame_1171276458_d14523f211.svg"
                }
                alt=""
                className="tw-min-w-[83px] lg:tw-min-w-[122px]"
                width={83}
                height={60}
              />
              <div>
                <div className="tw-font-bold lg:tw-text-xl">
                  {p("posforemploy.searchCustomers.title")}
                </div>
                <div className="tw-text-sm lg:tw-mt-2 lg:tw-text-base">
                  {p("posforemploy.searchCustomers.content")}
                </div>
              </div>
            </div>
            <div className="tw-border tw-border-[#ddd] tw-pt-4 tw-pl-4 lg:tw-pb-6 lg:tw-pt-0 lg:tw-px-6 tw-rounded-lg lg:tw-rounded-2xl">
              <Image
                src={
                  "https://cms-strapi.ichiba.net/uploads/image_158_287d4b69f0.svg"
                }
                alt=""
                width={246}
                height={147}
                className="lg:tw-block tw-hidden"
              />
              <div className="tw-font-bold">
                {p("posforemploy.multiple.title")}
              </div>
              <div className="tw-flex lg:tw-block">
                <div className="tw-text-sm tw-max-w-[177px] tw-mt-3 lg:tw-max-w-full">
                  {p("posforemploy.multiple.content")}
                </div>
                <Image
                  src={
                    "https://cms-strapi.ichiba.net/uploads/image_158_6ad7903fe1.png"
                  }
                  alt=""
                  width={172}
                  height={152}
                  className="lg:tw-hidden"
                />
              </div>
            </div>
          </div>
          <div className="tw-bg-[#F9F5EF] tw-rounded-lg lg:tw-rounded-2xl tw-px-4 lg:tw-px-6 lg:tw-pt-4 tw-pt-4 tw-mb-10">
            <div className="lg:tw-text-xl tw-font-bold">
              {p("posforemploy.inventory.title")}
            </div>
            <div className="tw-mt-2 tw-text-sm lg:tw-text-base">
              {p("posforemploy.inventory.content")}
            </div>
            <div className="tw-max-h-[150px] lg:tw-max-h-[222px] lg:tw-justify-end lg:tw-flex">
              <Image
                src={
                  "https://cms-strapi.ichiba.net/uploads/magestore_pos_inventory_management_1_ce2c7fb435.png"
                }
                width={489}
                height={323}
                alt={""}
                className="tw-mt-6 lg:tw-hidden tw-mx-auto tw-w-[326px] tw-h-[216px]"
              />
              <Image
                src={
                  "https://cms-strapi.ichiba.net/uploads/magestore_pos_inventory_management_1_d8e71ecb3a.png"
                }
                width={452}
                height={298}
                alt={""}
                className="tw-mt-6 lg:tw-block tw-hidden lg:tw-h-[298px] tw-mx-auto tw-w-[452px] tw-h-[298px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PosForEmployee;

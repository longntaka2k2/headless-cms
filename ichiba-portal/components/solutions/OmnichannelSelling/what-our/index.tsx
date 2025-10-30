import { useTranslation } from "next-i18next";
import Image from "next/image";
const WhatOur = () => {
  const o = useTranslation("omnichannel-selling").t;

  return (
    <div className="tw-mt-6 lg:tw-mt-20 tw-mx-4 lg:tw-container lg:tw-mb-[130px]">
      <div className="tw-py-6 tw-px-4 tw-bg-[#F9F5EF] tw-rounded-2xl lg:tw-p-15">
        <h3 className="tw-text-2xl tw-font-bold lg:tw-text-4xl lg:tw-text-center">
          {o("whatOur.title")}
        </h3>
        <div className="tw-mt-6 lg:tw-flex lg:tw-gap-20 lg:tw-mt-10">
          <div>
            <div className="tw-text-sm lg:tw-text-lg">
              {o("whatOur.items.0.content")}
            </div>
            <div className="tw-mt-7 tw-flex tw-gap-4">
              <Image
                src="https://cms-strapi.ichiba.net/uploads/Avatar_341b2eeb8d.png"
                alt=""
                width={40}
                height={40}
              />
              <div className="">
                <div className="tw-font-bold tw-text-sm lg:tw-text-xl">
                  {o("whatOur.items.0.name")}
                </div>
                <div className=" tw-text-xs lg:tw-text-sm">
                  {o("whatOur.items.0.bio")}
                </div>
              </div>
            </div>
          </div>
          <div className="lg:tw-min-w-[435px] lg:tw-h-[340px]">
            <Image
              src="https://cms-strapi.ichiba.net/uploads/Frame_1171276456_337067907f.png"
              alt=""
              width={668}
              height={723}
              className="tw-mt-6 lg:tw-mt-0 tw-w-full "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatOur;

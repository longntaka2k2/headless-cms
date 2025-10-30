import { useTranslation } from "next-i18next";
import Image from "next/image";
const Global = () => {
  const g = useTranslation("global-selling").t;

  return (
    <div className="tw-my-7 tw-mx-4 lg:tw-container lg:tw-mt-[71px]">
      <div className="">
        <h2 className="tw-text-xl tw-font-bold lg:tw-text-4xl tw-mb-0">
          {g("globalSelling.title")}
        </h2>
        <div className="tw-mt-3 tw-grid tw-gap-3 lg:tw-hidden">
          <div className="tw-px-4 tw-py-3 tw-flex tw-gap-4 tw-rounded-lg tw-border tw-border-[#ddd]">
            <Image
              src="https://cms-strapi.ichiba.net/uploads/da_62889eb3fb.svg"
              alt=""
              width={40}
              height={40}
            />
            <h3 className="tw-text-sm tw-font-medium">
              {g("globalSelling.different")}
            </h3>
          </div>
          <div className="tw-pl-4 tw-flex tw-gap-4 tw-rounded-lg tw-border tw-border-[#ddd] tw-items-center tw-justify-between tw-overflow-hidden">
            <h3 className="tw-text-sm tw-font-medium">
              {g("globalSelling.market")}
            </h3>
            <Image
              src="https://cms-strapi.ichiba.net/uploads/Frame_1171276065_0c6bddf293.png"
              alt=""
              width={279}
              height={140}
            />
          </div>
          <div className="tw-px-4 tw-py-3 tw-flex tw-rounded-lg tw-border tw-border-[#ddd] tw-items-center tw-justify-between">
            <h3 className="tw-text-sm tw-font-medium">
              {g("globalSelling.diffcutl")}
            </h3>
            <Image
              src="https://cms-strapi.ichiba.net/uploads/aaa_cdaaf042b6.svg"
              alt=""
              width={74}
              height={68}
            />
          </div>
          <div className="tw-px-4 tw-py-3 tw-flex tw-gap-4 tw-rounded-lg tw-border tw-border-[#ddd]">
            <Image
              src="https://cms-strapi.ichiba.net/uploads/aaa_1e1c79756c.svg"
              alt=""
              width={40}
              height={40}
            />
            <h3 className="tw-text-sm tw-font-medium">
              {g("globalSelling.price")}
            </h3>
          </div>
          <div className="tw-px-4 tw-py-3 tw-flex tw-gap-4 tw-rounded-lg tw-border tw-border-[#ddd]">
            <Image
              src="https://cms-strapi.ichiba.net/uploads/PART_Handling_v2_1_56d332d7a0.svg"
              alt=""
              width={40}
              height={40}
            />
            <h3 className="tw-text-sm tw-font-medium">
              {g("globalSelling.costly")}
            </h3>
          </div>
          <div className="tw-px-4 tw-py-3 tw-gap-4 tw-rounded-lg tw-border tw-border-[#ddd]">
            <Image
              src="https://cms-strapi.ichiba.net/uploads/Frame_1171276407_6b67a493e8.svg"
              alt=""
              width={103}
              height={77}
            />
            <h3 className="tw-text-sm tw-font-medium tw-mt-4">
              {g("globalSelling.language")}
            </h3>
          </div>
          <div className="tw-px-4 tw-pt-3 tw-gap-4 tw-rounded-lg tw-border tw-border-[#ddd]">
            <h3 className="tw-text-sm tw-font-medium tw-mt-4">
              {g("globalSelling.performance")}
            </h3>
            <div className="tw-flex tw-justify-end">
              <Image
                src="https://cms-strapi.ichiba.net/uploads/Seller_Command_Center_1_0b85dd2983.svg"
                alt=""
                width={205}
                height={99}
              />
            </div>
          </div>
          <div className="tw-pl-4 tw-flex tw-gap-4 tw-rounded-lg tw-border tw-border-[#ddd] tw-items-center tw-justify-between tw-overflow-hidden">
            <h3 className="tw-text-sm tw-font-medium">
              {g("globalSelling.complicated")}
            </h3>
            <Image
              src="https://cms-strapi.ichiba.net/uploads/d_37aea66bf3.png"
              alt=""
              width={224}
              height={177}
            />
          </div>
        </div>
        <div className="lg:tw-my-10 tw-hidden lg:tw-block">
          <div className="tw-grid lg:tw-grid-cols-3 tw-gap-6">
            <div className="tw-grid tw-gap-6">
              <div className="tw-p-6 tw-rounded-2xl tw-border tw-border-[#ddd]">
                <Image
                  src="https://cms-strapi.ichiba.net/uploads/da_62889eb3fb.svg"
                  alt=""
                  width={64}
                  height={64}
                />
                <h3 className="tw-text-lg tw-font-medium tw-mt-6">
                  {g("globalSelling.different")}
                </h3>
              </div>
              <div className="tw-p-6 tw-rounded-2xl tw-border tw-border-[#ddd]">
                <Image
                  src="https://cms-strapi.ichiba.net/uploads/aaa_1e1c79756c.svg"
                  alt=""
                  width={64}
                  height={64}
                />
                <h3 className="tw-text-lg tw-font-medium tw-mt-6">
                  {g("globalSelling.price")}
                </h3>
              </div>
            </div>
            <div className="tw-grid tw-gap-6">
              <div className=" tw-rounded-2xl tw-border tw-border-[#ddd] tw-items-center tw-justify-between tw-overflow-hidden">
                <Image
                  src="https://cms-strapi.ichiba.net/uploads/Frame_1171276065_c76ec6e86e.png"
                  alt=""
                  width={384}
                  height={145}
                  className=""
                />
                <h3 className="tw-text-lg tw-font-medium tw-p-6">
                  {g("globalSelling.market")}
                </h3>
              </div>
              <div className="tw-p-6 tw-gap-4 tw-rounded-2xl tw-border tw-border-[#ddd]">
                <Image
                  src="https://cms-strapi.ichiba.net/uploads/PART_Handling_v2_1_56d332d7a0.svg"
                  alt=""
                  width={64}
                  height={64}
                />
                <h3 className="tw-text-lg tw-font-medium tw-mt-6">
                  {g("globalSelling.costly")}
                </h3>
              </div>
            </div>
            <div className="tw-grid tw-gap-6">
              <div className="tw-p-6 tw-flex tw-rounded-2xl tw-border tw-border-[#ddd] tw-items-center tw-justify-between">
                <h3 className="tw-text-lg tw-font-medium tw-max-w-[200px]">
                  {g("globalSelling.diffcutl")}
                </h3>
                <Image
                  src="https://cms-strapi.ichiba.net/uploads/aaa_cdaaf042b6.svg"
                  alt=""
                  width={129}
                  height={118}
                />
              </div>
              <div className="tw-px-6 tw-pt-3 tw-pb-6 tw-gap-4 tw-rounded-2xl tw-border tw-border-[#ddd]">
                <Image
                  src="https://cms-strapi.ichiba.net/uploads/Frame_1171276407_6b67a493e8.svg"
                  alt=""
                  width={185}
                  height={117}
                />
                <h3 className="tw-text-lg tw-font-medium ">
                  {g("globalSelling.language")}
                </h3>
              </div>
            </div>
          </div>
          <div className="tw-grid tw-grid-cols-2 tw-gap-6 tw-mt-6">
            <div className="tw-flex tw-items-center tw-pl-6 tw-gap-4 tw-rounded-2xl tw-border tw-border-[#ddd] tw-overflow-hidden">
              <h3 className="tw-text-lg tw-font-medium tw-mt-4 tw-max-w-[261px]">
                {g("globalSelling.performance")}
              </h3>
              <Image
                src="https://cms-strapi.ichiba.net/uploads/Seller_Command_Center_1_1645138cff.png"
                alt=""
                width={399}
                height={262}
                className="tw-h-full"
              />
            </div>
            <div className="tw-pl-6 tw-flex tw-gap-4 tw-rounded-2xl tw-border tw-border-[#ddd] tw-items-center tw-justify-between tw-overflow-hidden">
              <h3 className="tw-text-lg tw-font-medium">
                {g("globalSelling.complicated")}
              </h3>
              <Image
                src="https://cms-strapi.ichiba.net/uploads/d_37aea66bf3.png"
                alt=""
                width={296}
                height={235}
                className="tw-h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Global;

import { useTranslation } from "next-i18next";
import Image from "next/image";
const WhatProblem = () => {
  const s = useTranslation("multichannel-fulfill").t;

  return (
    <div className="tw-px-4 lg:tw-container lg:tw-px-0">
      <h2 className="tw-font-bold tw-text-xl lg:tw-text-4xl ">
        {s("whatProblems.title.0")}
        <br />
        {s("whatProblems.title.1")}
      </h2>
      <div className="lg:tw-mt-10 tw-mt-4">
        <div className="tw-grid tw-gap-3 lg:tw-hidden">
          <div className="tw-flex tw-bg-[#F8F8FB] tw-rounded-lg tw-pl-3 tw-pt-10">
            <div className="tw-grid tw-gap-10 tw-grid-cols-2">
              <div className="tw-font-medium tw-text-sm">
                {s("whatProblems.fragment")}
              </div>
              <Image
                src="https://cms-strapi.ichiba.net/uploads/Frame_1171276004_8949f7210b.svg"
                alt="fragment"
                width={148}
                height={94}
                className="tw-w-full"
              />
            </div>
          </div>
          <div className="tw-grid tw-grid-cols-2 tw-gap-4">
            <div className="tw-bg-[#F8F8FB] tw-rounded-lg ">
              <Image
                src="https://cms-strapi.ichiba.net/uploads/Frame_1171276003_878afe2c0a.svg"
                alt="fragment"
                width={171}
                height={109}
                className="tw-w-full"
              />
              <div className="tw-font-medium tw-text-sm tw-mt-2 tw-px-3 tw-pb-3">
                {s("whatProblems.unconsolidated")}
              </div>
            </div>
            <div className="tw-bg-[#F8F8FB] tw-rounded-lg ">
              <Image
                src="https://cms-strapi.ichiba.net/uploads/Frame_1171276003_1_b58b92e12e.svg"
                alt="fragment"
                width={155}
                height={99}
                className="tw-w-full"
              />
              <div className="tw-font-medium tw-text-sm tw-mt-2 tw-px-3 tw-pb-3">
                {s("whatProblems.ineffcient")}
              </div>
            </div>
          </div>
          <div className="tw-flex tw-bg-[#F8F8FB] tw-rounded-lg tw-pl-3 tw-justify-between tw-items-center">
            <div className="tw-font-medium tw-text-sm tw-mt-2 tw-pb-3 tw-max-w-[50%]">
              {s("whatProblems.timeDelay")}
            </div>
            <Image
              src="https://cms-strapi.ichiba.net/uploads/Clip_path_group_9dca20769f.svg"
              alt="fragment"
              width={141}
              height={145}
              className=""
            />
          </div>
          <div className="tw-flex tw-bg-[#F8F8FB] tw-rounded-lg tw-pl-3 tw-justify-between tw-items-center">
            <div className="tw-font-medium tw-text-sm tw-mt-2 tw-pb-3 tw-max-w-[50%]">
              {s("whatProblems.integration")}
            </div>
            <Image
              src="https://cms-strapi.ichiba.net/uploads/Group_226b2e32d5.svg"
              alt="fragment"
              width={154}
              height={128}
              className=""
            />
          </div>
          <div className="tw-flex tw-bg-[#F8F8FB] tw-rounded-lg tw-pl-3 tw-pt-10 tw-justify-between tw-overflow-hidden">
            <div className="tw-font-medium tw-text-sm tw-max-w-[50%]">
              {s("whatProblems.timeCost")}
            </div>
            <Image
              src="https://cms-strapi.ichiba.net/uploads/Frame_1171276004_9caf666e6b.svg"
              alt="fragment"
              width={148}
              height={94}
            />
          </div>
          <div className="tw-flex tw-bg-[#F8F8FB] tw-rounded-lg tw-px-3 tw-py-10 tw-gap-4">
            <Image
              src="https://cms-strapi.ichiba.net/uploads/PART_Handling_v2_1_c57f6c6f98.svg"
              alt="fragment"
              width={45}
              height={45}
            />
            <div className="tw-font-medium tw-text-sm tw-max-w-[50%]">
              {s("whatProblems.prohibitively")}
            </div>
          </div>
        </div>
        <div className="tw-hidden lg:tw-grid tw-grid-cols-2 tw-gap-6">
          <div className="tw-grid tw-gap-6">
            <div className="tw-flex tw-bg-[#F8F8FB] tw-rounded-lg tw-pl-7 tw-pt-10">
              <div className="tw-grid tw-gap-10 tw-grid-cols-2">
                <div className="tw-font-medium tw-text-lg">
                  {s("whatProblems.fragment")}
                </div>
                <Image
                  src="https://cms-strapi.ichiba.net/uploads/Frame_1171276004_8949f7210b.svg"
                  alt="fragment"
                  width={244}
                  height={173}
                  className="tw-w-full"
                />
              </div>
            </div>
            <div className="tw-flex tw-bg-[#F8F8FB] tw-rounded-lg tw-pl-7 tw-justify-between tw-items-center">
              <div className="tw-font-medium tw-text-lg tw-max-w-[60%]">
                {s("whatProblems.timeDelay")}
              </div>
              <Image
                src="https://cms-strapi.ichiba.net/uploads/Clip_path_group_9dca20769f.svg"
                alt="fragment"
                width={225}
                height={227}
                className=""
              />
            </div>
            <div className="tw-flex tw-bg-[#F8F8FB] tw-rounded-lg tw-pl-7 tw-pt-10 tw-justify-between tw-items-center tw-overflow-hidden">
              <div className="tw-font-medium tw-text-lg tw-max-w-[50%]">
                {s("whatProblems.timeCost")}
              </div>
              <Image
                src="https://cms-strapi.ichiba.net/uploads/Frame_1171276004_9caf666e6b.svg"
                alt="fragment"
                width={244}
                height={172}
              />
            </div>
          </div>
          <div className="tw-grid tw-gap-6">
            <div className="tw-grid tw-grid-cols-2 tw-gap-4">
              <div className="tw-bg-[#F8F8FB] tw-rounded-lg ">
                <Image
                  src="https://cms-strapi.ichiba.net/uploads/Frame_1171276003_878afe2c0a.svg"
                  alt="fragment"
                  width={282}
                  height={180}
                  className="tw-w-full"
                />
                <div className="tw-font-medium tw-text-lg tw-mt-2 tw-px-7 tw-pb-10">
                  {s("whatProblems.unconsolidated")}
                </div>
              </div>
              <div className="tw-bg-[#F8F8FB] tw-rounded-lg ">
                <Image
                  src="https://cms-strapi.ichiba.net/uploads/Frame_1171276003_1_b58b92e12e.svg"
                  alt="fragment"
                  width={282}
                  height={180}
                  className="tw-w-full"
                />
                <div className="tw-font-medium tw-text-lg tw-mt-2 tw-px-7 tw-pb-10">
                  {s("whatProblems.ineffcient")}
                </div>
              </div>
            </div>
            <div className="tw-flex tw-bg-[#F8F8FB] tw-rounded-lg tw-pl-7 tw-justify-between tw-items-center tw-max-h-[180px] tw-overflow-hidden">
              <div className="tw-font-medium tw-text-lg  tw-max-w-[50%]">
                {s("whatProblems.integration")}
              </div>
              <Image
                src="https://cms-strapi.ichiba.net/uploads/Group_226b2e32d5.svg"
                alt="fragment"
                width={309}
                height={180}
                className="tw-object-cover"
              />
            </div>
            <div className=" tw-bg-[#F8F8FB] tw-grid tw-rounded-lg tw-px-7 tw-py-10 tw-gap-4">
              <Image
                src="https://cms-strapi.ichiba.net/uploads/PART_Handling_v2_1_c57f6c6f98.svg"
                alt="fragment"
                width={45}
                height={45}
              />
              <div className="tw-font-medium tw-text-lg ">
                {s("whatProblems.prohibitively")}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default WhatProblem;

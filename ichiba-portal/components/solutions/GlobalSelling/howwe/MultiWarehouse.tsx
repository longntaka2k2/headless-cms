import { useTranslation } from "next-i18next";
import Image from "next/image";
const MultiWare = () => {
  const g = useTranslation("global-selling").t;

  return (
    <div className="tw-mt-4 lg:tw-container">
      <h3 className="tw-font-bold lg:tw-text-2xl lg:tw-hidden">
        {g("multi.title")}
      </h3>
      <div className="lg:tw-flex tw-items-center lg:tw-px-[50px]">
        <div className="lg:tw-hidden tw-grid tw-gap-3 tw-my-5 lg:tw-my-6">
          <div className="tw-flex tw-gap-2 lg:tw-gap-4 ">
            <Image
              src="https://cms-strapi.ichiba.net/uploads/Group_98d9079556.svg"
              alt=""
              width={24}
              height={24}
            />
            <div className="tw-text-sm lg:tw-text-base">
              {g("multi.automatically")}
            </div>
          </div>
          <div className="tw-flex tw-gap-2 lg:tw-gap-4 ">
            <Image
              src="https://cms-strapi.ichiba.net/uploads/Group_98d9079556.svg"
              alt=""
              width={24}
              height={24}
            />
            <div className="tw-text-sm lg:tw-text-base">
              {g("multi.standar")}
            </div>
          </div>
        </div>
        <div className="tw-mt-4">
          <Image
            src="https://cms-strapi.ichiba.net/uploads/Left_content_a78a21ab91.svg"
            alt=""
            width={359}
            height={255}
            className="lg:tw-w-[500px]"
          />
        </div>
        <div className="lg:tw-block tw-hidden ">
          <h3 className="tw-font-bold lg:tw-text-2xl tw-mb-6 lg:tw-px-10">
            {g("multi.title")}
          </h3>

          <div className="tw-flex tw-gap-2 lg:tw-gap-3 tw-pl-10 tw-pr-6 tw-py-5 hover:tw-bg-[#F3F7FE] hover:tw-shadow-[0px_8px_16px_0px_rgba(0,0,0,0.05)]">
            <Image
              src="https://cms-strapi.ichiba.net/uploads/Group_98d9079556.svg"
              alt=""
              width={24}
              height={24}
            />
            <div className="tw-text-sm lg:tw-text-base">
              {g("multi.automatically")}
            </div>
          </div>
          <div className="tw-flex tw-gap-2 lg:tw-gap-3 tw-pl-10 tw-pr-6 tw-py-5 hover:tw-bg-[#F3F7FE] hover:tw-shadow-[0px_8px_16px_0px_rgba(0,0,0,0.05)]">
            <Image
              src="https://cms-strapi.ichiba.net/uploads/Group_98d9079556.svg"
              alt=""
              width={24}
              height={24}
            />
            <div className="tw-text-sm lg:tw-text-base">
              {g("multi.standar")}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultiWare;

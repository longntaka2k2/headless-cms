import { useTranslation } from "next-i18next";
import Image from "next/image";
import Slider from "react-slick";

const BoostSEO = () => {
  const g = useTranslation("global-selling").t;
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="tw-px-4 tw-py-6 tw-w-full lg:tw-py-15 lg:tw-px-0 tw-bg-[linear-gradient(100deg,#0B162C_0.95%,#050F2A_100%)] tw-relative tw-overflow-hidden">
      <div className="lg:tw-container">
        <div className="lg:tw-flex lg:tw-gap-8 tw-items-center">
          <h2 className="tw-text-2xl lg:tw-text-4xl tw-text-white tw-font-bold lg:tw-min-w-[486px] tw-mb-0">
            {g("global.title")}
          </h2>
          <div className="lg:tw-block tw-hidden ">
            <div className="tw-grid tw-grid-cols-2  tw-gap-4 tw-text-center tw-items-center">
              <div className="tw-min-w-[333px] tw-text-white tw-border-[rgba(255,255,255,0.20)] hover:tw-border-[rgba(225,234,251,0.69)] tw-border tw-rounded-xl tw-px-5 tw-py-7 hover:tw-shadow-[0px_0px_16px_0px_rgba(72,112,172,0.70)]">
                <Image
                  src={"https://cms-strapi.ichiba.net/uploads/Group_59a1acb46e.svg"}
                  alt={g("global.all.title")}
                  width={52}
                  height={52}
                  className=" tw-mx-auto tw-mb-5"
                />
                <div className="tw-text-lg tw-font-bold ">
                  {g("global.all.title")}
                </div>
                <div className="tw-text-sm tw-mt-2">
                  {g("global.all.content")}
                </div>
              </div>
              <div className="tw-grid tw-gap-4">
                <div className=" tw-min-w-[333px] tw-text-white tw-border-[rgba(255,255,255,0.20)] hover:tw-border-[rgba(225,234,251,0.69)] tw-border  tw-rounded-xl tw-py-7 tw-px-5 hover:tw-shadow-[0px_0px_16px_0px_rgba(72,112,172,0.70)]">
                  <Image
                    src={"https://cms-strapi.ichiba.net/uploads/Group_b7bd98093b.svg"}
                    alt={g("global.scale.title")}
                    width={52}
                    height={52}
                    className=" tw-mx-auto tw-mb-5"
                  />
                  <div className="tw-text-lg tw-font-bold ">
                    {g("global.scale.title")}
                  </div>
                  <div className="tw-text-sm tw-mt-2">
                    {g("global.scale.content")}
                  </div>
                </div>
                <div className="tw-min-w-[333px] tw-text-white tw-border-[rgba(255,255,255,0.20)] hover:tw-border-[rgba(225,234,251,0.69)] tw-border  tw-rounded-xl tw-py-7 tw-px-5 hover:tw-shadow-[0px_0px_16px_0px_rgba(72,112,172,0.70)]">
                  <Image
                    src={"https://cms-strapi.ichiba.net/uploads/Group_b82e78a720.svg"}
                    alt={g("commerceSite.boots.increase.title")}
                    width={52}
                    height={52}
                    className=" tw-mx-auto tw-mb-5"
                  />
                  <div className="tw-text-lg tw-font-bold ">
                    {g("global.support.title")}
                  </div>
                  <div className="tw-text-sm tw-mt-2">
                    {g("global.support.content")}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Image
        src="https://cms-strapi.ichiba.net/uploads/Group_1171275897_21756f0a42.svg"
        alt="integrate"
        width={618}
        height={844}
        className="lg:tw-max-h-[644px] tw-max-h-[250px] tw-top-[-40px] lg:tw-top-0 lg:tw-left-[-100px] tw-left-[-150px] tw-absolute"
      />
      <div className="tw-overflow-x-scroll tw-flex tw-gap-4 tw-no-scrollbar tw-py-4 tw-px-4 lg:tw-hidden">
        <div className="tw-min-w-[330px] tw-text-white tw-border-[rgba(225,234,251,0.69)] tw-border-[2px] tw-rounded-xl tw-py-4 tw-px-5 tw-shadow-[0px_0px_16px_0px_rgba(72,112,172,0.70)]">
          <Image
            src={"https://cms-strapi.ichiba.net/uploads/Group_59a1acb46e.svg"}
            alt={g("global.all.title")}
            width={40}
            height={40}
            className=""
          />
          <div className="tw-text-lg tw-font-bold ">
            {g("global.all.title")}
          </div>
          <div className="tw-text-sm tw-mt-2">
            {g("global.all.content")}
          </div>
        </div>
        <div className="tw-min-w-[330px] tw-text-white tw-border-[rgba(225,234,251,0.69)] tw-border-[2px] tw-rounded-xl tw-py-4 tw-px-5 tw-shadow-[0px_0px_16px_0px_rgba(72,112,172,0.70)]">
          <Image
            src={"https://cms-strapi.ichiba.net/uploads/Group_b7bd98093b.svg"}
            alt={g("global.scale.title")}
            width={40}
            height={40}
            className=""
          />
          <div className="tw-text-lg tw-font-bold ">
            {g("global.scale.title")}
          </div>
          <div className="tw-text-sm tw-mt-2">
            {g("global.scale.content")}
          </div>
        </div>
        <div className="tw-min-w-[330px] tw-text-white tw-border-[rgba(225,234,251,0.69)] tw-border-[2px] tw-rounded-xl tw-py-4 tw-px-5 tw-shadow-[0px_0px_16px_0px_rgba(72,112,172,0.70)]">
          <Image
            src={"https://cms-strapi.ichiba.net/uploads/Group_b82e78a720.svg"}
            alt={g("global.support.title")}
            width={40}
            height={40}
            className=""
          />
          <div className="tw-text-lg tw-font-bold ">
            {g("global.support.title")}
          </div>
          <div className="tw-text-sm tw-mt-2">
            {g("global.support.content")}
          </div>
        </div>
      </div>
    </div>
  );
};
export default BoostSEO;

import { useTranslation } from "next-i18next";
import Image from "next/image";

const International = () => {
  const p = useTranslation("proxy-shopping").t;

  return (
    <div className="tw-px-4 lg:tw-container lg:tw-px-0 tw-mb-6 lg:tw-mb-15">
      <div className="tw-grid tw-gap-6 lg:tw-flex lg:tw-gap-[100px]">
        <div className="lg:tw-max-w-[464px]">
          <Image
            src={"https://cms-strapi.ichiba.net/uploads/sss_568e38be3a.png"}
            alt="pricing"
            width={464}
            height={381}
            className="tw-mb-7 lg:tw-block tw-hidden tw-mx-auto "
          />
          <h3 className="tw-text-lg tw-font-bold lg:tw-text-2xl">
            {p("pricing.title")}
          </h3>
          <div className="tw-text-sm lg:tw-text-base">
            {p("pricing.content")}
          </div>
          <Image
            src={"https://cms-strapi.ichiba.net/uploads/sss_568e38be3a.png"}
            alt="pricing"
            width={464}
            height={381}
            className="tw-max-w-[358px] tw-mt-3 lg:tw-hidden tw-mx-auto  tw-w-full"
          />
        </div>
        <div className="tw-rounded-xl tw-bg-[#FFFAF7] tw-bg-[url(https://cms-strapi.ichiba.net/uploads/Group_626254_0493ff1bec_1_4b15bab2af.png)] tw-bg-cover lg:tw-flex-1">
          <div className="tw-px-4 tw-pt-4 lg:tw-px-10 lg:tw-pt-10 lg:tw-max-w-[524px]">
            <h3 className="tw-text-lg tw-font-bold lg:tw-text-2xl">
              {p("international.title")}
            </h3>
            <div className="tw-text-sm lg:tw-text-base">
              {p("international.content")}
            </div>
          </div>
          <Image
            src={
              "https://cms-strapi.ichiba.net/uploads/Macbook_Pro_FREE_985e2fc8cf.png"
            }
            alt="pricing"
            className="tw-mb-6 lg:tw-my-10 lg:tw-float-right tw-w-full lg:tw-max-w-[530px]" 
            width={530}
            height={362}
          />
        </div>
      </div>
    </div>
  );
};

export default International;

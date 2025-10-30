import clsx from "clsx";
import { useTranslation } from "next-i18next";
import Image from "next/image";

const TheBenefits = () => {
  const { t: tWms } = useTranslation("wms");
  return (
    <div className="tw-overflow-hidden">
      <div className="tw-container tw-relative tw-py-6 lg:tw-py-10">
        {/* mobile */}
        <div className="lg:tw-hidden">
          <p className="tw-mb-2 tw-text-xl tw-font-bold">
            {tWms("theBenefits.heading.0")} <br />{" "}
            {tWms("theBenefits.heading.1")}
          </p>
          <p className="tw-mb-4 tw-text-sm">{tWms("theBenefits.subHeading")}</p>

          <Image
            src="https://cms-strapi.ichiba.net/uploads/Group_1171275906_cf3b8b7f59.svg"
            width={358}
            height={225}
            alt="#"
            className="tw-w-[358px] tw-h-[225px] tw-mx-auto"
          />
        </div>

        {/* desktop */}
        <div className="tw-relative tw-hidden max-tw-w-[1200px] tw-mx-auto lg:tw-block">
          <Image
            src="https://cms-strapi.ichiba.net/uploads/Group_1171275934_2b2cab4dd1.svg"
            width={1200}
            height={491}
            alt="#"
          />
          <div className="tw-absolute tw-top-0 tw-left-0 tw-w-[55%]">
            <p className="tw-mb-3 tw-text-3xl tw-font-bold">
              {tWms("theBenefits.heading.0")} <br />{" "}
              {tWms("theBenefits.heading.1")}
            </p>
            <p className="tw-text-lg">{tWms("theBenefits.subHeading")}</p>
          </div>
        </div>

        <Image
          src="https://cms-strapi.ichiba.net/uploads/Group_1171275897_ad8bbdd594.svg"
          width={184}
          height={280}
          alt="#"
          className="tw-hidden lg:tw-block tw-absolute -tw-right-[134px] tw-bottom-[300px]"
        />

        <div className="tw-grid lg:tw-grid-cols-3 tw-gap-4 lg:tw-gap-6 tw-mt-6 lg:tw-mt-[52px]">
          {(
            tWms(`theBenefits.items`, {
              returnObjects: true,
            }) as string[]
          ).map((value: any, index) => (
            <div
              key={index}
              className={clsx(
                "tw-rounded-lg lg:tw-rounded-2xl tw-overflow-hidden",
                "tw-border tw-border-ic-ink-2",
              )}
            >
              <div className="tw-w-full tw-h-[6px] lg:tw-h-2 tw-bg-brand-primary"></div>
              <div className="tw-flex lg:tw-flex-col tw-items-start tw-gap-4 tw-px-4 tw-pb-4 tw-pt-6 lg:tw-px-6 lg:tw-pb-6 lg:tw-pt-10 ">
                <Image
                  src={value.icon}
                  width={30}
                  height={30}
                  alt={value.title}
                  className="tw-col-span-1 tw-h-6 tw-w-6 lg:tw-w-[30px] lg:tw-h-[30px]"
                />
                <div>
                  <p className="tw-text-base lg:tw-text-xl tw-font-bold tw-mb-1 lg:tw-mb-2">
                    {value.title}
                  </p>
                  <p className="tw-text-sm lg:tw-text-base tw-mb-0">
                    {value.subTitle}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TheBenefits;

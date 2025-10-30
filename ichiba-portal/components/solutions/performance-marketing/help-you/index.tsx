import Image from "next/image";
import { useTranslation } from "next-i18next";

export const HelpYou = () => {
  const { t } = useTranslation("performance-marketing");

  return (
    <section
      className="tw-bg-blue-3 tw-text-white tw-py-10 xl:tw-py-15"
      style={{
        background:
          "linear-gradient(90deg, rgba(1,27,48,1) 0%, rgba(55,44,46,1) 49%, rgba(1,27,48,1) 100%)",
      }}
    >
      <div className="tw-container">
        <h2 className="tw-mb-6 xl:tw-mb-15 tw-text-2xl xl:tw-text-4xl tw-font-bold">
          {t("helpYou.title")}
        </h2>

        <div className="tw-relative tw-grid xl:tw-grid-cols-3 tw-gap-4 xl:tw-gap-[90px] xl:tw-pr-15">
          {(
            t(`helpYou.steps`, {
              returnObjects: true,
            }) as string[]
          ).map((step: any, index) => (
            <>
              <div
                key={index}
                className="tw-h-[80px] xl:tw-min-h-[164px] tw-w-full tw-py-5 tw-px-6 lg:tw-p-6 tw-flex tw-items-end tw-rounded-lg tw-bg-[rgba(255,_255,_255,_0.08)]"
              >
                <div className="tw-flex tw-gap-5 tw-items-center tw-pl-6 xl:tw-pl-0">
                  <div className="tw-min-w-[30px] tw-min-h-[32px] xl:tw-min-w-[37px] xl:tw-min-h-[40px]">
                    <Image
                      src={step.icon}
                      width={30}
                      height={32}
                      alt="image"
                      className="tw-w-full tw-h-full tw-mx-auto"
                    />
                  </div>
                  <p className="tw-text-base tw-font-bold tw-mb-0">
                    {step.title}
                  </p>
                </div>
              </div>
            </>
          ))}

          <Image
            src="https://cms-strapi.ichiba.net/uploads/Group_1171275972_9133c8fecf.svg"
            width={35}
            height={520}
            alt="ichiba"
            className="tw-h-full tw-min-w-[35px] tw-absolute tw-top-0 tw-left-0 xl:tw-hidden tw-object-cover"
          />

          <Image
            src="https://cms-strapi.ichiba.net/uploads/Frame_1171276363_01f147b708.svg"
            width={1200}
            height={410}
            alt="ichiba"
            className="tw-absolute tw-top-0 tw-left-0 tw-hidden xl:tw-block"
          />
        </div>
      </div>
    </section>
  );
};

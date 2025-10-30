import clsx from "clsx";
import CardItemSeeHow from "./CardItemSeeHow";
import { useTranslation } from "next-i18next";

export default function SeeHowWeMake() {
  const { t } = useTranslation("retail");

  return (
    <div className="tw-container tw-py-6 lg:tw-py-20">
      <h2
        className={clsx(
          "tw-text-2xl tw-leading-8 tw-font-bold tw-text-center",
          "tw-mb-6 lg:tw-mb-8 lg:tw-text-4xl lg:tw-leading-[48px]",
        )}
      >
        {t("seeHow.title")}
      </h2>

      <div className="tw-flex tw-flex-col tw-gap-6">
        <div className="tw-flex tw-flex-col md:tw-flex-row tw-gap-6">
          <div className="lg:tw-w-3/5">
            <CardItemSeeHow
              bgBox="linear-gradient(274deg, #FDE9D3 26.95%, rgba(233, 238, 255, 0.60) 90%)"
              title={t("seeHow.automatically.title")}
              content={t("seeHow.automatically.content")}
              image={t("seeHow.automatically.image") as string}
              className="tw-w-full tw-h-full tw-flex-col tw-px-5 tw-pt-6 lg:tw-px-6"
              classContent="lg:tw-w-[80%]"
              classImg="tw-translate-x-[25%] sm:tw-translate-x-0 lg:tw-translate-x-[25%] tw-min-w-[331px] tw-max-w-[657px] tw-min-h-[130px] tw-max-h-[258px] tw-mx-auto"
              width={883}
              height={385}
            />
          </div>
          <div className="lg:tw-w-2/5">
            <CardItemSeeHow
              bgBox="linear-gradient(235deg, #EAF5ED 40.42%, #FFE9FA 97.31%)"
              title={t("seeHow.consistent.title")}
              content={t("seeHow.consistent.content")}
              image={t("seeHow.consistent.image") as string}
              className="tw-w-full tw-flex-col tw-justify-between tw-h-full tw-px-5 tw-pt-6 lg:tw-px-6 "
              classContent="lg:tw-w-[85%]"
              classImg="tw-translate-x-[25%] sm:tw-translate-x-0 lg:tw-translate-x-[25%] tw-min-h-[174px] tw-max-h-[234px] tw-min-w-[300px] tw-max-w-[376px] tw-mx-auto"
              width={528}
              height={337}
            />
          </div>
        </div>

        <div className="tw-grid md:tw-grid-cols-2 tw-gap-6">
          <CardItemSeeHow
            bgBox="linear-gradient(281deg, #E1F3F0 38.02%, #F2F3F7 81.95%)"
            title={t("seeHow.manage.title")}
            content={t("seeHow.manage.content")}
            image={t("seeHow.manage.image") as string}
            className="tw-w-full tw-flex-col lg:tw-flex-row tw-justify-between tw-py-6 tw-px-5 lg:tw-p-6"
            classImg="tw-max-h-[316px] lg:tw-max-h-[192px] tw-min-w-[279px] tw-max-width-[318px] tw-m-auto"
            width={274}
            height={193}
          />

          <CardItemSeeHow
            bgBox="linear-gradient(274deg, #FDE9D3 26.95%, rgba(233, 238, 255, 0.60) 90%)"
            title={t("seeHow.automatic.title")}
            content={t("seeHow.automatic.content")}
            image={t("seeHow.automatic.image") as string}
            className="tw-w-full tw-flex-col lg:tw-flex-row tw-justify-between tw-py-6 tw-px-5 lg:tw-p-6"
            classImg="tw-max-h-[316px] lg:tw-max-h-[192px] tw-min-w-[279px] tw-max-width-[318px] tw-m-auto"
            width={274}
            height={193}
          />
        </div>

        <div className="tw-flex tw-flex-col lg:tw-flex-row tw-gap-6">
          <div className="lg:tw-w-2/5">
            <CardItemSeeHow
              bgBox="linear-gradient(274deg, #FDE9D3 26.95%, rgba(233, 238, 255, 0.60) 90%)"
              title={t("seeHow.debt.title")}
              content={t("seeHow.debt.content")}
              image={t("seeHow.debt.image") as string}
              className="tw-w-full tw-h-full tw-flex-col tw-px-5 tw-pt-6 lg:tw-px-6 "
              classContent="lg:tw-w-[80%]"
              classImg="tw-translate-x-[20%] sm:tw-translate-x-0 lg:tw-translate-x-[20%] tw-mx-auto tw-min-w-[343px] tw-max-w-[448px] tw-min-h-[222px] tw-max-h-[297px]"
              width={424}
              height={257}
            />
          </div>
          <div className="lg:tw-w-3/5">
            <CardItemSeeHow
              bgBox="linear-gradient(235deg, #EAF5ED 40.42%, #FFE9FA 97.31%)"
              title={t("seeHow.multiple.title")}
              content={t("seeHow.multiple.content")}
              image={t("seeHow.multiple.image") as string}
              className="tw-w-full tw-flex-col md:tw-flex-row lg:tw-flex-col tw-justify-between tw-h-full tw-px-5 tw-pt-6 lg:tw-px-6"
              classContent="lg:tw-w-[85%]"
              classImg="tw-translate-x-[25%] sm:tw-translate-x-0 lg:tw-translate-x-[25%] tw-min-w-[331px] lg:tw-max-w-[657px] tw-min-h-[130px] tw-max-h-[258px]"
              width={589}
              height={255}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

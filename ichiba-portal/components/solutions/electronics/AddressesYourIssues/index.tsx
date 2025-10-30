import clsx from "clsx";
import CardIssues from "./CardIssues";
import { useTranslation } from "next-i18next";

export default function AddressesYourIssues() {
  const { t } = useTranslation("electronics");

  return (
    <div
      style={{
        background:
          "linear-gradient(180deg, #00237E 13.5%, #A2CCF4 64%, #C6EAF5 100%)",
      }}
      className="tw-py-6 lg:tw-py-10"
    >
      <div className="tw-container">
        <h2
          className={clsx(
            "tw-mb-6 tw-text-2xl tw-leading-8 tw-font-bold tw-text-white",
            "lg:tw-mb-12 lg:tw-text-4xl lg:tw-leading-[48px] lg:tw-text-center",
          )}
        >
          {t("addressesYourIssues.heading")}
        </h2>

        <div className="tw-grid tw-gap-6">
          <div className="tw-grid lg:tw-grid-cols-2 tw-gap-6">
            <CardIssues
              image="https://cms-strapi.ichiba.net/uploads/Frame_427318572_0e1642ec81.svg"
              title={t("addressesYourIssues.item.title.0")}
              subTitle={t("addressesYourIssues.item.subTitle.0")}
              className="tw-flex-col-reverse tw-py-6 tw-px-4 lg:tw-p-6"
              classNameImg=""
              width={541}
              height={379}
            />
            <div className="tw-grid tw-gap-6">
              <CardIssues
                image="https://cms-strapi.ichiba.net/uploads/improve_with_actionable_insights_1_dd8db1cdce.svg"
                title={t("addressesYourIssues.item.title.1")}
                subTitle={t("addressesYourIssues.item.subTitle.1")}
                className="tw-py-6 tw-px-4 lg:tw-p-6"
                classNameImg="tw-min-w-[150px] tw-min-h-[150px] lg:tw-min-w-[228px] lg:tw-min-h-[208px]"
                width={229}
                height={209}
              />
              <CardIssues
                image="https://cms-strapi.ichiba.net/uploads/Group_66c3679a89.svg"
                title={t("addressesYourIssues.item.title.2")}
                subTitle={t("addressesYourIssues.item.subTitle.2")}
                className="tw-py-6 tw-px-4 lg:tw-p-6"
                classNameImg="tw-min-w-[150px] tw-min-h-[150px] lg:tw-min-w-[228px] lg:tw-min-h-[208px]"
                width={229}
                height={209}
              />
            </div>
          </div>
          <CardIssues
            image="https://cms-strapi.ichiba.net/uploads/5b844403765ae0792973aa9b_stickybar_mobile_img_mini_p_1600_1_c40e293cbe.svg"
            title={t("addressesYourIssues.item.title.3")}
            subTitle={t("addressesYourIssues.item.subTitle.3")}
            className="tw-py-6 tw-px-4 lg:tw-px-6 lg:tw-py-0 tw-flex-col lg:tw-flex-row"
            classNameImg="tw-min-h-[150px] tw-w-full lg:tw-h-full lg:tw-min-w-[649px] lg:tw-translate-y-[24px]"
            width={650}
            height={261}
          />
          <div className="tw-grid lg:tw-grid-cols-2 tw-gap-6">
            <CardIssues
              image="https://cms-strapi.ichiba.net/uploads/Frame_427318590_ced4307e22.svg"
              title={t("addressesYourIssues.item.title.4")}
              subTitle={t("addressesYourIssues.item.subTitle.4")}
              className="tw-py-6 tw-px-4 lg:tw-p-6"
              classNameImg="tw-min-w-[150px] tw-min-h-[94px] lg:tw-min-w-[249px] lg:tw-min-h-[157px]"
              width={249}
              height={158}
            />
            <CardIssues
              image="https://cms-strapi.ichiba.net/uploads/Rectangle_52695_0f422a29b2.svg"
              title={t("addressesYourIssues.item.title.5")}
              subTitle={t("addressesYourIssues.item.subTitle.5")}
              className="tw-py-6 tw-px-4 lg:tw-p-6"
              classNameImg="tw-min-w-[150px] tw-min-h-[110px] lg:tw-min-w-[228px] lg:tw-min-h-[164px] tw-border-8 tw-border-[rgba(221, 221, 221, 0.50)]"
              width={245}
              height={180}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

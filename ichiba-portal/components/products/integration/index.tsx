import Image from "next/image";
import clsx from "clsx";
import { useTranslation } from "next-i18next";
import BoxContentEcosystem from "../boxContentEcosystem";
import { useRouter } from "next/router";

export default function Integration() {
  const { t } = useTranslation("products");
  const router = useRouter();

  const listCDXP = [
    { title: t("integration.list.0") },
    { title: t("integration.list.1") },
    { title: t("integration.list.2") },
  ];

  return (
    <div
      className={clsx(
        "tw-container tw-flex tw-flex-col tw-gap-5 tw-overflow-hidden",
        "lg:tw-gap-0 lg:tw-flex-row lg:tw-justify-between lg:tw-items-center",
      )}
    >
      <div className="lg:tw-w-[40%]">
        <BoxContentEcosystem
          icon="https://cms-strapi.ichiba.net/uploads/Group_1171275934_00ef0cd912.svg"
          heading={t("integration.heading").toString()}
          subTitle={t("integration.subTitle").toString()}
          list={listCDXP as []}
          link="/products/integrations"
        />
      </div>

      <div className="lg:tw-w-[49%]">
        <div className="tw-w-full tw-h-[254px] lg:tw-max-h-[441px] lg:tw-h-full tw-rounded-xl tw-overflow-hidden">
          <Image
            src={
              router.locale === "vi"
                ? "https://cms-strapi.ichiba.net/uploads/ichiba_net_6_985c1efe94.png"
                : "https://cms-strapi.ichiba.net/uploads/ichiba_net_5_0067d7f1f1.png"
            }
            width={709}
            height={503}
            alt="IChiba Sensei"
            className="tw-mx-auto"
          />
        </div>
      </div>
    </div>
  );
}

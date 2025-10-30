import { useTranslation } from "next-i18next";
import LottieRenderer from "@/components/common/lottieRenderer";
import {
  StrapiRelationModel,
  StrapiMediaModel,
} from "@/src/lib/models/StrapiModel";
import clsx from "clsx";
import Link from "next/link";

interface Props {
  media: StrapiRelationModel<StrapiMediaModel>;
}
export default function Integration(props: Props) {
  const { t } = useTranslation("common");

  return (
    <div
      className={clsx(
        "integration tw-py-6 md:tw-py-16",
        "tw-bg-[url('https://cms-strapi.ichiba.net/uploads/image_12_d73243bfb7.png')]",
        "tw-bg-cover",
      )}
    >
      <div className="container">
        <div className="text-center fw-7 fs-40">
          {t("crossBorder.banner.integration")}
        </div>
        <div className="py-5">
          {props?.media?.data?.attributes && (
            <LottieRenderer
              path={props?.media?.data?.attributes?.url}
              style={{ width: "100%", height: "auto" }}
            />
          )}
        </div>
        <div className="text-center">
          <Link
            href="/products/integrations"
            target="_blank"
            className="d-inline-block btn-janbox py-3 px-5 cursor tw-no-underline"
          >
            {t("crossBorder.banner.viewAllinte")}
          </Link>
        </div>
      </div>
    </div>
  );
}

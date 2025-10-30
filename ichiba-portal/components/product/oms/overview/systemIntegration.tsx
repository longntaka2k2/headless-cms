import { useTranslation } from "next-i18next";
import img from "@/public/icons/oms/systemIntegration.json";
import imgVi from "@/public/icons/oms/systemIntegrationVi.json";

import { Player, Controls } from "@lottiefiles/react-lottie-player";
import Link from "next/link";
import { useRouter } from "next/router";

export default function SystemIntegration(props: any) {
  const { t } = useTranslation("common");
  const router = useRouter();
  return (
    <div key={`${props.id}_${props.__component}`}>
      {props && (
        <div className="system-integration user-select-none">
          <div className="container">
            <div className="mx-auto container-child text-center">
              <div dangerouslySetInnerHTML={{ __html: props?.content }} />
              <div>
                <Player
                  src={router?.locale === "vi" ? imgVi : img}
                  loop
                  autoplay
                  style={{ width: "100%", height: "auto" }}
                >
                  <Controls />{" "}
                </Player>
              </div>
              <div className="text-center mt-lg-5 mt-3 cursor">
                <Link
                  href="/products/integrations"
                  target="_blank"
                  className="text-decoration-none d-inline-block btn-janbox py-3 px-4"
                  rel="canonical"
                >
                  {t("oms.system.viewAll")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

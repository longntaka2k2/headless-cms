/* eslint-disable @next/next/link-passhref */
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import Image from "next/image";
import img from "@/public/icons/company/discover/openToWork.webp";
import bgOurData from "@/public/icons/company/discover/bgOurData.webp";
import shield from "@/public/icons/company/discover/shield.webp";

import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
export default function OpenToWork() {
  const { t } = useTranslation("common");
  const router = useRouter()
  const urlTrust = router.locale === 'en' ? 'https://ichiba.net/trust-security' : 'https://ichiba.vn/trust-security'
  return (
    <>
      <div className="openToWork">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="fs-16 text-uppercase fw-4">
                {t("discover.howWeWork.howWeWork")}
              </div>
              <h2 className="fs-36 fw-7 pb-3 fs-md-28">
                {t("discover.howWeWork.openToWork")}
              </h2>
              <div className="fs-md-14 pb-3">
                {t("discover.howWeWork.weBelieve")}
              </div>
              <div className="fs-md-14 pb-3">
                {t("discover.howWeWork.openToHas")}
              </div>
              <div className="fs-md-14 pb-3">
                {t("discover.howWeWork.openUp")}
              </div>
              <div className="pt-3">
                <Link
                  href={"/our-life"}
                  className="btn-janbox py-3 px-5 text-decoration-none d-inline-block fs-md-14 fs-16"
                >
                  {t("discover.howWeWork.meetOurTeam")}
                  <FontAwesomeIcon icon={faArrowRight} />
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="img">
                <Image src={img} alt="" width={588} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="our-data"
        style={{
          backgroundImage: `url(${bgOurData.src})`,
          backgroundSize: "cover",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <Image
                src={shield}
                alt=""
                width={408}
                height={408}
                style={{ width: "max-content", maxWidth: "100%" }}
                className="tw-mx-auto"
              />
            </div>
            <div className="offset-lg-1 col-lg-6 align-self-center">
              <h2 className="fw-7 fs-36 fs-md-28 our-data-title">
                {t("discover.ourData.title")}
              </h2>
              <div className="py-3 fs-md-14 fw-4">
                {t("discover.ourData.content")}
              </div>
              <div>
                <Link
                  href={urlTrust}
                  target="_blank"
                  className="d-inline-block text-decoration-none btn-janbox py-3 px-5"
                >
                  {t("discover.ourData.learnMore")}&ensp;
                  <FontAwesomeIcon icon={faArrowRight} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

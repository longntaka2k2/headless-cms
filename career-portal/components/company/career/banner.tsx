import backgroundCareer from "@/public/icons/banner-career.jpg";
import { faArrowRight, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import arrow from "@/public/icons/company/career/arrow.svg";


export default function BannerCareer() {
  const { t } = useTranslation("common");

  const router = useRouter();
  const handleKeyPress = (event: { key: string; }) => {
    if (event.key === 'Enter') {
      handleClick()
    }
  };

  const handleClick = () => {
    // Lấy giá trị URL từ trường input
    const inputUrl = (document.getElementById('searchJob') as HTMLInputElement).value;
    // Chuyển hướng đến URL
    router.push(`/jobs?job=${inputUrl}`);
  };
  return (
    <>
      <div
        className="banner"
        style={{
          backgroundImage: `url(${backgroundCareer.src})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="container">
          <div className="title text-center px-lg-5">
            <div className="fw-7 fs-36 pb-4 title-banner">
              {t("careers.title")}
            </div>
            <div className="bio fs-16 fs-md-14">{t("careers.content")}</div>
            <div className="banner-search d-flex justify-content-between">
              <FontAwesomeIcon
                icon={faSearch}
                className="align-self-center pe-3 fs-16 fs-md-14"
              />
              <input type="text" id="searchJob" className="fs-16 fs-md-14" placeholder={t("careers.searchTitle") as string} 
        onKeyPress={handleKeyPress}/>{" "}
              <div className="d-flex justify-content-between">
                <div
                  className="searc-job cursor me-2"
                  onClick={() => handleClick()}
                >
                  {t("careers.searchJob")}
                </div>
                <div
                  className="view-all cursor tw-flex"
                  onClick={() => router.push("/jobs")}
                >
                  {t("careers.viewAllJob")}
                  <Image
                    src={arrow}
                    alt=''
                    className="ms-1 color-white"
                  />
                </div>
              </div>
            </div>
            <div className="res-mobile d-flex justify-content-between d-none">
              <div
                className="searc-job cursor fs-16 fs-md-14 "
                onClick={() => handleClick()}
              >
                {t("careers.searchJob")}
              </div>
              <div
                className="view-all cursor fs-16 fs-md-14"
                onClick={() => router.push("/jobs")}
              >
                {t("careers.viewAllJob")}{" "}
                <FontAwesomeIcon
                  icon={faArrowRight}
                  style={{ color: "white" }}
                />
              </div>
            </div>
          </div>

          <div></div>
        </div>
      </div>
    </>
  );
}

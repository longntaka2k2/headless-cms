import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import img from "@/public/icons/imgBook.webp";
import Script from "next/script";
import { useTranslation } from "next-i18next";
import Head from "next/head";

export default function BookDemo() {
  const { t } = useTranslation("bookdemo");

  return (
    <div className="book-demo-container">
      <Head>
        <title>{t("meta.title")}</title>
      </Head>
      <div className="tw-grid tw-grid-cols-1 tw-justify-between lg:tw-flex ">
        <div className="lg:tw-max-w-[432px] book-content lg:tw-flex-1">
          <div className="text-uppercase color-note">{t("freeDemo")}</div>
          <h1 className="lg:tw-text-[30px] tw-text-[24px] fw-5 tw-pt-4 tw-leading-9">
            {t("witness")}
          </h1>
          <div className="tw-pb-8 tw-pt-2 fs-md-14">{t("discover")}</div>
          <div>
            <div className="tw-flex lg:tw-pb-4 tw-pb-5">
              <FontAwesomeIcon
                className="color-link tw-pr-4 tw-text-[20px] tw-pt=1"
                icon={faCircleCheck}
              />
              <div className="fs-md-14">{t("aOne")}</div>
            </div>
            <div className="tw-flex lg:tw-pb-4 tw-pb-5">
              <FontAwesomeIcon
                className="color-link tw-pr-4 tw-text-[20px] tw-pt=1"
                icon={faCircleCheck}
              />
              <div className="fs-md-14">{t("understand")}</div>
            </div>
            <div className="tw-flex lg:tw-pb-4 tw-pb-5">
              <FontAwesomeIcon
                className="color-link tw-pr-4 tw-text-[20px] tw-pt=1"
                icon={faCircleCheck}
              />
              <div className="fs-md-14">{t("answer")}</div>
            </div>
          </div>
          <Image
            src={img}
            alt="answer"
            className="tw-pt-3 lg:tw-block tw-hidden tw-mx-auto"
          />
        </div>
        <div className="tw-flex-1 lg:tw-m-0 tw-mt-6 tw-mx-4 tw-md:0">
          <div>
            <div
              className="calendly-inline-widget "
              data-url="https://calendly.com/demo-with-ichiba/demo-with-an-expert"
              style={{ height: "1050px" }}
            ></div>
            <Script
              type="text/javascript"
              src="https://assets.calendly.com/assets/external/widget.js"
              async
            ></Script>
          </div>
        </div>
      </div>
    </div>
  );
}

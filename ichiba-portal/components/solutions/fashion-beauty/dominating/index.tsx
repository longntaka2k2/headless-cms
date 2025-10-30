import clsx from "clsx";
import CardContent from "./CardContent";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import imgBuildYourOwn from "@/public/images/fashion-beauty/imgBuildYourOwn.svg";
import imgUploadProduct from "@/public/images/fashion-beauty/imgUploadProduct.svg";
import imgAutomatic from "@/public/images/fashion-beauty/imgAutomatic.svg";
import imgPrint from "@/public/images/fashion-beauty/imgPrint.svg";
import imgManage from "@/public/images/fashion-beauty/imgManage.svg";
import imgProvide from "@/public/images/fashion-beauty/imgProvide.svg";
import imgRunMarketing from "@/public/images/fashion-beauty/imgRunMarketing.svg";

export default function Dominating() {
  const { t } = useTranslation("fashion-beauty");

  return (
    <div className="tw-container tw-py-6 lg:tw-py-20">
      <h2
        className={clsx(
          "tw-mb-8 tw-text-2xl tw-leading-8 tw-font-bold lg:tw-text-center",
          "lg:tw-text-4xl lg:tw-leading-[48px] lg:tw-w-[80%] tw-mx-auto",
        )}
      >
        {t("dominating.heading")}
      </h2>

      <div className="lg:tw-p-10 tw-grid tw-gap-8 lg:tw-gap-16">
        <div className="tw-flex tw-flex-col lg:tw-flex-row tw-items-center tw-gap-4 lg:tw-gap-10">
          <CardContent
            icon="svg-icon-artwork"
            bgIcon="tw-bg-[#FFF7E6]"
            title={t("dominating.cardContent.0.title").toString()}
            subTitle={t("dominating.cardContent.0.subTitle").toString()}
            textColor="tw-text-[#F57C00]"
          />
          <div className="tw-relative tw-w-[358px] tw-h-[296px] lg:tw-max-w-[450px] lg:tw-w-full lg:tw-h-[372px] tw-rounded-2xl tw-overflow-hidden">
            <Image
              src={imgBuildYourOwn}
              alt="imgBuildYourOwn"
              className="tw-w-full tw-h-full"
            />
            <div
              style={{
                background:
                  "radial-gradient(64.12% 64.12% at 50% 50%, rgba(104, 216, 251, 0.15) 22%, rgba(217, 216, 255, 0.00) 98.61%)",
              }}
              className="tw-absolute tw-left-0 tw-top-0 -tw-z-1 tw-w-full tw-h-full"
            ></div>
          </div>
        </div>

        <div className="tw-flex tw-flex-col-reverse lg:tw-flex-row tw-items-center tw-gap-4 lg:tw-gap-10">
          <div className="tw-w-[358px] tw-h-[309px] lg:tw-max-w-[508px] lg:tw-w-full lg:tw-h-[434px] tw-rounded-2xl tw-overflow-hidden">
            <Image
              src={imgUploadProduct}
              alt="imgUploadProduct"
              className="tw-w-full tw-h-full"
            />
          </div>
          <CardContent
            icon="svg-icon-repo"
            bgIcon="tw-bg-[#E6F3FF]"
            title={t("dominating.cardContent.1.title").toString()}
            subTitle={t("dominating.cardContent.1.subTitle").toString()}
            textColor="tw-text-[#597EF7]"
          />
        </div>

        <div className="tw-flex tw-flex-col lg:tw-flex-row tw-items-center tw-gap-4 lg:tw-gap-10">
          <CardContent
            icon="svg-icon-barcode"
            bgIcon="tw-bg-[#E2FCFA]"
            title={t("dominating.cardContent.2.title").toString()}
            subTitle={t("dominating.cardContent.2.subTitle").toString()}
            textColor="tw-text-[#3EB8B0]"
          />
          <div className="tw-relative tw-w-[358px] tw-h-[247px] lg:tw-max-w-[500px] lg:tw-w-full lg:tw-h-[345px] tw-rounded-2xl tw-overflow-hidden">
            <Image
              src={imgAutomatic}
              alt="imgAutomatic"
              className="tw-w-full tw-h-full"
            />
            <div
              style={{
                background:
                  "radial-gradient(64.12% 64.12% at 50% 50%, #E2FCFA 0%, rgba(255, 255, 255, 0.00) 98.61%)",
              }}
              className="tw-absolute tw-left-0 tw-top-0 -tw-z-1 tw-w-full tw-h-full"
            ></div>
          </div>
        </div>

        <div className="tw-flex tw-flex-col-reverse lg:tw-flex-row tw-items-center tw-gap-4 lg:tw-gap-10">
          <div className="tw-w-[358px] tw-h-[238px] lg:tw-max-w-[500px] lg:tw-w-full lg:tw-h-[333px] tw-bg-[#F3F7FE] tw-rounded-2xl tw-overflow-hidden">
            <Image
              src={imgPrint}
              alt="imgPrint"
              className="tw-w-full tw-h-full"
            />
          </div>
          <CardContent
            icon="svg-icon-note"
            bgIcon="tw-bg-[#F9F0FF]"
            title={t("dominating.cardContent.3.title").toString()}
            subTitle={t("dominating.cardContent.3.subTitle").toString()}
            textColor="tw-text-[#9254DE]"
          />
        </div>

        <div className="tw-flex tw-flex-col lg:tw-flex-row tw-items-center tw-gap-4 lg:tw-gap-10">
          <CardContent
            icon="svg-icon-box"
            bgIcon="tw-bg-[#FFF1F0]"
            title={t("dominating.cardContent.4.title").toString()}
            subTitle={t("dominating.cardContent.4.subTitle").toString()}
            textColor="tw-text-[#FF4D4F]"
          />
          <div className="tw-relative tw-w-[358px] tw-h-[216px] lg:tw-max-w-[621px] lg:tw-w-full lg:tw-h-[376 px] tw-rounded-2xl tw-overflow-hidden">
            <Image
              src={imgManage}
              alt="imgManage"
              className="tw-w-full tw-h-full"
            />
            <div
              style={{
                background:
                  "radial-gradient(48.55% 48.4% at 50% 50%, #FDBCB8 0%, rgba(255, 255, 255, 0.00) 98.61%)",
              }}
              className="tw-absolute tw-left-0 tw-top-0 -tw-z-1 tw-w-full tw-h-full"
            ></div>
          </div>
        </div>

        <div className="tw-flex tw-flex-col-reverse lg:tw-flex-row tw-items-center tw-gap-4 lg:tw-gap-10">
          <div className="tw-relative tw-w-[358px] tw-h-[238px] lg:tw-max-w-[500px] lg:tw-w-full lg:tw-h-[333px] tw-bg-[#F3F7FE] tw-rounded-2xl tw-overflow-hidden">
            <div className="tw-absolute tw-top-0 tw-right-0 tw-w-[313px] tw-h-[294px] lg:tw-w-[438px] lg:tw-h-[411px]">
              <Image
                src={imgProvide}
                alt="imgProvide"
                className="tw-w-full tw-h-full"
              />
            </div>
          </div>
          <CardContent
            icon="svg-icon-payment"
            bgIcon="tw-bg-[#FFF7E6]"
            title={t("dominating.cardContent.5.title").toString()}
            subTitle={t("dominating.cardContent.5.subTitle").toString()}
            textColor="tw-text-[#F57C00]"
          />
        </div>

        <div className="tw-flex tw-flex-col lg:tw-flex-row tw-items-center tw-gap-4 lg:tw-gap-10">
          <CardContent
            icon="svg-icon-loudspeaker"
            bgIcon="tw-bg-[#E6F3FF]"
            title={t("dominating.cardContent.6.title").toString()}
            subTitle={t("dominating.cardContent.6.subTitle").toString()}
            textColor="tw-text-[#597EF7]" 
          />
          <div className="tw-relative tw-w-[330px] tw-h-[192px] lg:tw-max-w-[491px] lg:tw-w-full lg:tw-h-[287px] tw-rounded-2xl tw-overflow-hidden">
            <Image
              src={imgRunMarketing}
              alt="imgRunMarketing"
              className="tw-w-full tw-h-full"
            />
            <div
              style={{
                background:
                  "radial-gradient(48.55% 48.4% at 50% 50%, #CBE0FF 0%, rgba(255, 255, 255, 0.00) 98.61%)",
              }}
              className="tw-absolute tw-left-0 tw-top-0 -tw-z-1 tw-w-full tw-h-full"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

import { faCheck, faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import Link from "next/link";
// import video from "../../../../public/videos/99_VP9.webm";

const Banner = () => {
    const { t } = useTranslation("digital-landingpage");
    const strapiDomain = "https://cms-strapi.ichiba.net";
    return (
        <section className="tw-py-6 lg:tw-py-28"
            style={{
                backgroundImage: `url(${strapiDomain}/uploads/Frame_1171275800_f738a22bb1.png)`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
            }}>
            <div className="lg:tw-flex container tw-items-center tw-justify-center tw-group tw-cursor-pointer">
                <div className="lg:tw-w-[40%] tw-pb-6 lg:tw-pb-0">
                    <p className="tw-text-2xl tw-w-[70%] lg:tw-w-full lg:tw-text-5xl tw-font-bold tw-mb-3 lg:tw-mb-6">
                        {t("banner.heading")}
                    </p>
                    <p className="tw-text-sm lg:tw-text-base tw-mb-3 lg:tw-mb-4">
                        {t("banner.createProfessional")}
                    </p>
                    <ul className="tw-grid tw-gap-3 lg:tw-gap-4 tw-text-sm lg:tw-text-base tw-mb-6 lg:tw-mb-10" style={{ paddingLeft: 0 }}>
                        <li className="tw-flex gap-4 tw-items-center">
                            <FontAwesomeIcon icon={faCheck} className="tw-w-3.5 tw-bg-[#0F62FE] p-1 tw-text-[#fff] tw-rounded-full tw-text-sm" />
                            {t("banner.preDesigned")}
                        </li>
                        <li className="tw-flex gap-4 tw-items-center">
                            <FontAwesomeIcon icon={faCheck} className="tw-w-3.5 tw-bg-[#0F62FE] p-1 tw-text-[#fff] tw-rounded-full tw-text-sm" />
                            {t("banner.simpleDesign")}
                        </li>
                        <li className="tw-flex gap-4 tw-items-center">
                            <FontAwesomeIcon icon={faCheck} className="tw-w-3.5 tw-bg-[#0F62FE] p-1 tw-text-[#fff] tw-rounded-full tw-text-sm" />
                            {t("banner.hightData")}
                        </li>
                        <li className="tw-flex gap-4 tw-items-center">
                            <FontAwesomeIcon icon={faCheck} className="tw-w-3.5 tw-bg-[#0F62FE] p-1 tw-text-[#fff] tw-rounded-full tw-text-sm" />
                            {t("banner.freeHosting")}
                        </li>
                    </ul>
                    <Link
                    href={'https://org.ichiba.net/'}
                        // onClick={handleContactSale}
                        className="tw-text-ic-white-6 tw-w-[200px] tw-py-3 tw-px-3 tw-rounded-lg tw-bg-brand-primary tw-block tw-no-underline tw-text-center"
                    >
                        {t("banner.buttonText")}
                    </Link>
                </div>
                <div className="lg:tw-w-[60%] lg:tw-h-[488px] tw-w-full tw-h-full   
                            tw-rounded-2xl tw-overflow-hidden tw-relative">
                    <Image
                        src={`${strapiDomain}/uploads/Frame_1171275799_c59f582f1d.png`}
                        width={746}
                        height={488}
                        alt=""
                        className="tw-w-full tw-h-full"
                    />
                    <div className="tw-absolute tw-border-2 tw-rounded-full
                                tw-w-[84px] tw-h-[84px] tw-flex tw-items-center tw-justify-center
                                tw-top-[50%] tw-left-[50%] tw-translate-x-[-50%] tw-translate-y-[-50%]
                                group-hover:tw-border-[3px] group-hover:tw-bg-gradient-to-t tw-from-[#FFFFFFE5]">
                        <FontAwesomeIcon icon={faPlay} className="tw-text-[#F57C00] tw-text-3xl" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner;
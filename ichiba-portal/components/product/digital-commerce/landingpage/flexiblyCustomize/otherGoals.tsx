import { useTranslation } from "next-i18next";
import Image from "next/image";

const OtherGoals = () => {
    const { t } = useTranslation("digital-landingpage");
    return (
        <section className="container tw-bg-white tw-rounded-[20px] tw-py-4 lg:tw-py-10"
            style={{
                boxShadow: "0px 8px 16px 0px rgba(0, 0, 0, 0.05)",
            }}>
            <div className="tw-grid lg:tw-grid-cols-2 tw-gap-5 lg:tw-gap-0 tw-items-center">
                <div className="tw-px-4 lg:tw-px-10">
                    <p className="tw-text-lg lg:tw-text-2xl tw-mb-0 tw-font-bold">
                        {t("flexiblyCustomize.ortherGoals.title")}
                    </p>
                    <p className="tw-text-sm lg:tw-text-base tw-mt-2 tw-mb-4 lg:tw-mb-10">
                        {t("flexiblyCustomize.ortherGoals.content")}
                    </p>
                    <a href="https://org.ichiba.net/" className="text-center">
                        <button
                            className="tw-text-ic-white-6 tw-w-[200px] tw-py-3 tw-px-3 tw-rounded-lg tw-bg-brand-primary"
                        >
                            {t("flexiblyCustomize.tryForFree")}
                        </button>
                    </a>
                </div>
                <div className="tw-max-w-[562px] tw-max-h-[372px] tw-w-full tw-h-full 
                                tw-rounded-2xl tw-overflow-hidden">
                    <Image
                        src={"https://cms-strapi.ichiba.net" + t("flexiblyCustomize.ortherGoals.image")}
                        alt={t("flexiblyCustomize.ortherGoals.image")}
                        width={562}
                        height={372}
                        className="tw-w-full tw-h-full tw-max-w-[562px] tw-max-h-[372px]" />
                </div>
            </div>
        </section>
    )
}

export default OtherGoals;
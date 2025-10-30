import { useTranslation } from "next-i18next";
import clear from "@/public/icons/crossBorder/flexible/clear.png";
import easily from "@/public/icons/crossBorder/flexible/easily.png";
import fullcontrol from "@/public/icons/crossBorder/flexible/fullcontrol.png";
import Image from "next/image";
import { clsx } from "clsx";

export default function Flexible() {
  const { t } = useTranslation("common");

  const flexible = [
    { title: "fullControl", img: fullcontrol },
    { title: "clear", img: clear },
    { title: "easily", img: easily },
  ];
  return (
    <div
      className={clsx(
        "flexible",
        "tw-bg-[url('https://cms-strapi.ichiba.net/uploads/flexible_9dde7d0def.webp')]",
        "tw-bg-cover",
      )}
    >
      <div className="container">
        <h2 className="fw-7 fs-40 pb-5 text-center mx-auto container-child">
          {t("crossBorder.flexible.content")}
        </h2>

        <div className="tw-grid tw-grid-cols-3 tw-gap-6">
          {flexible.map((value, index) => (
            <>
              <div
                className={clsx(
                  "tw-py-10 tw-px-6",
                  "tw-rounded-2xl tw-bg-white",
                  "tw-col-span-3 md:tw-col-span-1 text-center tw-flex tw-flex-col tw-items-center",
                )}
              >
                <Image className="tw-pb-6" src={value.img} alt={value.title} />
                <div className="tw-text-xl tw-font-bold ">
                  {t(`crossBorder.flexible.${value.title}.title`)}
                </div>
                <div>{t(`crossBorder.flexible.${value.title}.content`)}</div>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
}

import clsx from "clsx";
import { useTranslation } from "next-i18next";
import Feature from "./Feature";

export default function Index() {
  const { t } = useTranslation("digital-features");

  return (
    <section className={clsx("tw-py-6 lg:tw-px-0 lg:tw-py-16")}>
      <div className="container ">
        <div className=" tw-text-center">
          <h1 className="tw-text-2xl md:tw-text-4xl tw-font-bold lg:tw-mb-6 tw-mb-4 ">
            {t("powerful.heading")}
          </h1>
          <div className=" lg:tw-mb-12 tw-mb-4">
            <p className="tw-mb-0 tw-text-pending-5 lg:tw-text-black lg:tw-mb-6">
              {t("powerful.subHeading")}
            </p>
          </div>
        </div>
      </div>
      <Feature />
    </section>
  );
}

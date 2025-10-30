import Image from "next/image";
import { useTranslation } from "next-i18next";

export interface Props {
  heading: string;
}
const GlobalSelling = () => {
  const { t } = useTranslation("common");

  const items = [
    {
      icon: "/icons/solutions/crossBorderEcommerce/computer.svg",
      title: t("solutions.cbe.globalSelling.item1.title"),
      description: t("solutions.cbe.globalSelling.item1.description"),
    },
    {
      icon: "/icons/solutions/crossBorderEcommerce/earth-cursor-select.svg",
      title: t("solutions.cbe.globalSelling.item2.title"),
      description: t("solutions.cbe.globalSelling.item2.description"),
    },
    {
      icon: "/icons/solutions/crossBorderEcommerce/headphone.svg",
      title: t("solutions.cbe.globalSelling.item3.title"),
      description: t("solutions.cbe.globalSelling.item3.description"),
    },
  ];
  return (
    <section className="global-selling tw-py-[40px] tw-sm:tw-py-[24px]">
      <div className="tw-container tw-mx-auto tw-text-center">
        <h2 className="tw-mb-6 tw-font-bold tw-align-middle tw-text-2xl md:tw-text-4xl">
          {t("solutions.cbe.globalSelling.heading")}
        </h2>
        <div
          className="
              tw-flex tw-gap-6 tw-divide-x-reverse
              md:[&:not(:first-child)]:tw-divide-x-2 
              sm:tw-w-full 
              tw-overflow-auto
              "
        >
          {items.map((x, idx) => (
            <div
              className="tw-flex tw-flex-col 
              tw-columns-auto tw-gap-1 tw-p-3
              tw-min-w-[70vw] md:tw-min-w-0
              "
              key={x.title + idx}
            >
              <Image
                className="tw-self-center"
                src={x.icon}
                width={64}
                height={64}
                alt={x.title}
              />
              <div>
                <p className="tw-mb-0 tw-font-bold tw-sm:text-sm">{x.title}</p>
                <p>{x.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GlobalSelling;

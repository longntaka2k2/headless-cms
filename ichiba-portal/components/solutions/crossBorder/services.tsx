import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "next-i18next";

export interface Props {
  heading: string;
  items: { icon: string; label: string; description: string; link?: string }[];
}
const Services = (props: Props) => {
  const { t } = useTranslation("common");

  return (
    <section className="services tw-py-10 tw-bg-ic-ink-1">
      <div className="container d-flex flex-column align-items-center">
        <h2 className="tw-font-bold tw-text-2xl md:tw-text-4xl md:tw-pb-6">
          {props.heading}
        </h2>
        <div className="d-flex items tw-w-[100vw] md:tw-w-full">
          {props?.items?.map((x, idx) => (
            <div className="item" key={idx + x.label}>
              <div className="icon">
                <Image src={x.icon} alt={x.label} width={64} height={64} />
              </div>
              <div className="tw-flex tw-flex-col tw-h-full tw-justify-between">
                <p className="label">{x.label}</p>
                <p className="description">{x.description}</p>
                <Link href={x.link ?? "#"} passHref>
                  {t("viewMore")} <i className="fa-solid fa-arrow-right" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Services;

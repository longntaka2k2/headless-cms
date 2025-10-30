import { useTranslation } from "next-i18next";
import { Card } from "./Card";

const Architechture = () => {
  const d = useTranslation("digital").t;
  const contents = [
    {
      img: "https://cms-strapi.ichiba.net/uploads/microservice_1_e664010aa3.png",
      ...d("architecture.contents.0", { returnObjects: true }),
    },
    {
      img: "https://cms-strapi.ichiba.net/uploads/response_1_19ac405d51.png",
      ...d("architecture.contents.1", { returnObjects: true }),
    },
    {
      img: "https://cms-strapi.ichiba.net/uploads/response_1_1_3495baf03a.png",
      ...d("architecture.contents.2", { returnObjects: true }),
    },
    {
      img: "https://cms-strapi.ichiba.net/uploads/response_1_2_0903e221d5.png",
      ...d("architecture.contents.3", { returnObjects: true }),
    },
  ];
  return (
    <section className="tw-container tw-px-4 tw-py-6 lg:tw-px-0 lg:tw-py-16">
      <div className="tw-mb-6  lg:tw-mb-14 tw-flex tw-flex-col tw-items-center tw-text-center">
        <h2 className="tw-mb-2 tw-font-bold tw-text-xl lg:tw-text-4xl lg:tw-mb-6">
          <span className="tw-block">{d("architecture.heading")}</span>
          <span>{d("architecture.heading2")}</span>
        </h2>
        <p className="lg:tw-w-4/5 tw-text-sm lg:tw-text-base tw-mb-0">
          {d("architecture.subHeading")}
        </p>
      </div>
      <div className="tw-flex tw-snap-x tw-overflow-x-auto tw-w-full tw-gap-4 tw-no-scrollbar tw-p-1">
        {contents.map((x, idx) => (
          <Card {...x} key={idx} />
        ))}
      </div>
    </section>
  );
};
export default Architechture;

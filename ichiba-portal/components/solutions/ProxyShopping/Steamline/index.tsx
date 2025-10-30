import { useTranslation } from "next-i18next";
import Image from "next/image";

const Steamline = () => {
  const p = useTranslation("proxy-shopping").t;

  return (
    <div className="tw-py-6 tw-px-4 lg:tw-container lg:tw-py-15">
      <h2 className="tw-text-center tw-max-w-[650px] tw-mx-auto tw-font-bold tw-text-2xl lg:tw-text-4xl">
        {p("streamline.title")}
      </h2>
      <div className="tw-grid tw-gap-3 tw-mt-5 lg:tw-grid-cols-3 lg:tw-gap-6 lg:tw-mt-10">
        {(
          p(`streamline.items`, {
            returnObjects: true,
          }) as string[]
        ).map((value: any, index: number) => (
          <div
            key={index}
            className="tw-rounded-lg tw-border tw-border-[#DDD] tw-overflow-hidden lg:tw-rounded-2xl"
          >
            <div className="tw-w-full tw-h-[6px] tw-bg-[linear-gradient(0deg,#F57C00_-0.66%,#FAC286_99.49%)]"></div>
            <div className="tw-px-4 tw-py-4 lg:tw-pt-10 tw-pb-6 lg:tw-px-6">
              <div className="tw-flex tw-items-center tw-gap-4 lg:tw-grid">
                <Image
                  src={value.icon}
                  alt={value.title}
                  className=""
                  width={30}
                  height={28}
                />
                <div className="tw-text-lg tw-font-bold lg:tw-text-2xl">
                  {value.title}
                </div>
              </div>
              <div className="tw-mt-3 lg:tw-mt-2 ">{value.content}</div>
            </div>
          </div>
        ))}
      </div>

      <Image
        src="https://cms-strapi.ichiba.net/uploads/Frame_1171276438_37c761d492.svg"
        alt="whatAre"
        width={358}
        height={1005}
        className="tw-mx-auto tw-w-full tw-max-w-[450px] lg:tw-hidden tw-mt-5"
      />
      <Image
        src="https://cms-strapi.ichiba.net/uploads/Frame_1171276071_4b27f46f09.svg"
        alt="whatAre"
        width={1200}
        height={504}
        className="lg:tw-block tw-hidden tw-mt-10"
      />
    </div>
  );
};

export default Steamline;

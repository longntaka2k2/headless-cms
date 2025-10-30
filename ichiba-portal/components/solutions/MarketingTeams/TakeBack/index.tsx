import clsx from "clsx";
import { useTranslation } from "next-i18next";
import Image from "next/image";

const TakeBack = () => {
  const m = useTranslation("marketing-teams").t;

  return (
    <div className="tw-pt-6 lg:tw-pt-15 lg:tw-pb-20 tw-pb-10 tw-px-4 tw-bg-[url(https://cms-strapi.ichiba.net/uploads/ddd_1fed42c0ec.png)]">
      <div className="lg:tw-container">
        <div className="tw-text-center lg:tw-max-w-[742px] lg:tw-mx-auto">
          <p className="tw-font-bold tw-text-2xl lg:tw-text-4xl tw-mb-0">
            {m("takeBack.title")}
          </p>
          <p className="tw-text-sm tw-text-[#666] tw-mt-2 tw-mb-0">
            {m("takeBack.content")}
          </p>
        </div>
        <div className="tw-overflow-x-scroll tw-no-scrollbar">
          <div className="tw-grid tw-gap-4 tw-mt-5 lg:tw-mt-15 tw-grid-cols-4 tw-w-max lg:tw-w-full ">
            {(
              m("takeBack.items", {
                returnObjects: true,
              }) as string[]
            ).map((value: any, index: number) => (
              <div
                className="tw-py-10 tw-px-3 lg:tw-px-5 lg:tw-pt-20 lg:tw-pb-15 tw-rounded-lg tw-bg-[rgba(255,255,255,0.55)] tw-relative"
                key={index}
              >
                <Image
                  src={
                    "https://cms-strapi.ichiba.net/uploads/Frame_1171275928_09f53fdb5d.png"
                  }
                  className={clsx(
                    "tw-absolute tw-left-[-45px] tw-top-[40%]",
                    index === 0 ? "tw-hidden" : "",
                  )}
                  alt="takeBack"
                  width={72}
                  height={72}
                />
                <div className="tw-font-bold lg:tw-text-2xl">{value.title}</div>
                <div className="tw-grid tw-gap-2 tw-mt-3">
                  {(
                    m(`takeBack.items.${index}.content`, {
                      returnObjects: true,
                    }) as string[]
                  ).map((value: any, index: number) => (
                    <div
                      className="tw-flex tw-gap-1 tw-items-center"
                      key={index}
                    >
                      <Image
                        src={
                          "https://cms-strapi.ichiba.net/uploads/Check_color_24_5e8c3878c6.png"
                        }
                        alt={value}
                        width={48}
                        height={48}
                        className="tw-w-6 "
                      />
                      <div className="tw-text-sm lg:tw-text-base">{value}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TakeBack;

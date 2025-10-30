import clsx from "clsx";
import { useTranslation } from "next-i18next";
import Image from "next/image";
const ECommerce = () => {
  const s = useTranslation("multichannel-fulfill").t;

  return (
    <div
      className=" tw-mt-6 tw-px-4 lg:tw-px-0 tw-py-6 lg:tw-py-[80px] tw-bg-[url(https://cms-strapi.ichiba.net/uploads/Light_Background_2_1_cbd20dcc10.png)] tw-bg-cover"
      style={{ backgroundColor: "#F3F7FE" }}
    >
      <div className="lg:tw-max-w-[800px] tw-mx-auto ">
        <h2 className="tw-text-2xl lg:tw-text-4xl tw-font-bold lg:tw-text-center">
          {s("simplify.ecommerce.title")}
        </h2>
        <div className="tw-text-sm lg:tw-text-base tw-mt-2 lg:tw-text-center">
          {s("simplify.ecommerce.subtitle")}
        </div>
        <div className="tw-mt-7 lg:tw-mt-11">
          <div className="lg:tw-hidden tw-grid tw-ml-7">
            {(
              s(`simplify.ecommerce.items`, {
                returnObjects: true,
              }) as string[]
            ).map((value: any, index: number) => (
              <div
                key={index}
                className={clsx(
                  "tw-pt-5",
                  "tw-relative after:tw-absolute after:tw-w-[1px] after:tw-bg-[#AAC9EE] after:tw-h-full after:tw-top-0 after:tw-left-[-20px]",
                  "before:tw-absolute before:tw-z-1 before:tw-w-3 before:tw-h-3 before:tw-rounded-full before:tw-border before:tw-border-[#AAC9EE] before:tw-bg-white before:tw-left-[-25px] before:tw-top-6",
                )}
              >
                <h3 className="tw-font-bold tw-text-base lg:tw-text-lg">{value.title}</h3>
                <div className="tw-mt-2">{value.subtitle}</div>
                <Image
                  src={value.img}
                  alt={value.title}
                  width={240}
                  height={180}
                  className="tw-mt-5 tw-max-w-[216px] lg:tw-max-w-[240px]"
                />
              </div>
            ))}
          </div>
          <div className="tw-hidden lg:tw-grid tw-gap-0 tw-max-w-[800px] tw-mx-auto">
            {(
              s(`simplify.ecommerce.items`, {
                returnObjects: true,
              }) as string[]
            ).map((value: any, index: number) =>
              index % 2 === 0 ? (
                <div
                  className={clsx(
                    "tw-flex tw-justify-between tw-items-center",
                    "tw-relative after:tw-absolute after:tw-w-[1px] after:tw-bg-[#AAC9EE] after:tw-h-full tw-pt-10 after:tw-top-0 after:tw-left-[50%] ",
                    "before:tw-absolute before:tw-z-1 before:tw-w-3 before:tw-h-3 before:tw-rounded-full before:tw-border before:tw-border-[#AAC9EE] ",
                    "before:tw-bg-white before:tw-translate-x-[-5px] before:tw-left-[50%] before:tw-top-10",
                    "tw-transition-all tw-duration-500",
                  )}
                  key={index}
                  style={{
                    transitionDelay: `${index * 250}ms`,
                  }}
                >
                  <Image
                    src={value.img}
                    alt={value.title}
                    width={240}
                    height={180}
                    className="tw-max-w-[240px] tw-w-full tw-mt-4"
                  />
                  <div className="tw-w-[300px]">
                    <h3 className="tw-font-bold tw-text-base lg:tw-text-lg tw-mt-2">{value.title}</h3>
                    <div className="tw-mt-2 tw-text-sm">{value.subtitle}</div>
                  </div>
                </div>
              ) : (
                <div
                  className={clsx(
                    "tw-flex tw-justify-between",
                    "tw-relative after:tw-absolute after:tw-w-[1px] after:tw-bg-[#AAC9EE] after:tw-h-full tw-pt-10 after:tw-top-0 after:tw-left-[50%] ",
                    "before:tw-absolute before:tw-z-1 before:tw-w-3 before:tw-h-3 before:tw-rounded-full before:tw-border before:tw-border-[#AAC9EE] ",
                    "before:tw-bg-white before:tw-translate-x-[-5px] before:tw-left-[50%] before:tw-top-10",
                    "tw-transition-all tw-duration-500",
                  )}
                  key={index}
                  style={{
                    transitionDelay: `${index * 250}ms`,
                  }}
                >
                  <div className="tw-w-[300px]">
                    <h3 className="tw-font-bold tw-text-base lg:tw-text-lg tw-mt-2">{value.title}</h3>
                    <div className="tw-mt-2 tw-text-sm">{value.subtitle}</div>
                  </div>
                  <Image
                    src={value.img}
                    alt={value.title}
                    width={240}
                    height={180}
                    className="tw-max-w-[240px] tw-w-full tw-mt-4"
                  />
                </div>
              ),
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ECommerce;

import clsx from "clsx";
import { useTranslation } from "next-i18next";
import Image from "next/image";
const BannerAllInOne = () => {
  const a = useTranslation("all-in-one").t;

  return (
    <div
      className={clsx(
        "tw-py-6 tw-px-4 lg:tw-pt-[120px] lg:tw-pb-15 lg:tw-px-0",
        "tw-bg-[url(https://cms-strapi.ichiba.net/uploads/Group_1171275900_fdfd00f605.png)] tw-bg-no-repeat",
        "lg:tw-bg-[url(https://cms-strapi.ichiba.net/uploads/Group_1171275900_12af69cb24.svg)]",
      )}
    >
      <div className="lg:tw-container">
        <h1 className="tw-font-bold tw-text-2xl lg:tw-text-5xl lg:tw-max-w-[1029px]">
          {a("banner.title")}
        </h1>
        <div className="tw-text-sm lg:tw-text-base tw-mt-6 lg:tw-max-w-[584px]">
          {a("banner.subtitle")}
        </div>
        <Image
          src="https://cms-strapi.ichiba.net/uploads/Image_35c1315780.png"
          alt=""
          className="tw-mt-6 lg:tw-hidden"
          width={720}
          height={446}
        />
        <Image
          src="https://cms-strapi.ichiba.net/uploads/Group_1171275898_0b52515e5d.png"
          alt=""
          className="tw-mt-6 lg:tw-block tw-hidden tw-relative tw-left-[10%]"
          width={1132}
          height={585}
        />
        <div className="tw-mt-6 ">
          <h2 className="tw-text-xl tw-font-bold lg:tw-text-3xl lg:tw-hidden">
            {a("allInOne.title.0")}
            <div>{a("allInOne.title.1")}</div>
          </h2>
          <div className="tw-flex tw-items-center lg:tw-justify-between tw-mt-4 tw-gap-10">
            <div className="tw-w-[194px] lg:tw-max-w-[690px] lg:tw-flex-1">
              <h2 className="lg:tw-block tw-hidden tw-text-3xl tw-font-bold lg:tw-max-w-[538px]">
                {a("allInOne.title.0")}
                <div>{a("allInOne.title.1")}</div>
              </h2>
              <div className="tw-grid tw-gap-3 lg:tw-grid-cols-3 lg:tw-mt-10">
                {(
                  a("allInOne.items", {
                    returnObjects: true,
                  }) as string[]
                ).map((value: any, index: number) => (
                  <div className="tw-flex tw-gap-2" key={index}>
                    <div className="tw-w-1 tw-h-full tw-rounded-lg tw-bg-[linear-gradient(207deg,#537CD7_41.34%,rgba(83,124,215,0.00)_136.97%)] lg:tw-w-[6px]"></div>
                    <div>
                      <div className="tw-font-bold tw-text-lg tw-text-[#0F62FE] lg:tw-text-3xl">
                        {value.title}
                      </div>
                      <div className="tw-text-sm lg:tw-text-base">
                        {value.content}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <Image
              src="https://cms-strapi.ichiba.net/uploads/Frame_1171276227_37b2ad1432.png"
              alt="uploads"
              className="tw-h-full tw-max-w-[153px] lg:tw-max-w-[360px]"
              width={360}
              height={320}
            />
          </div>
        </div>
      </div>{" "}
    </div>
  );
};

export default BannerAllInOne;

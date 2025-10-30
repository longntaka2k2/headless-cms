import { clsx } from "clsx";
import { useTranslation } from "next-i18next";
import Image from "next/image";

const Challenges = () => {
  const p = useTranslation("proxy-shopping").t;

  return (
    <div
      className={clsx(
        "tw-pt-[112px] tw-px-4 tw-bg-[url(https://cms-strapi.ichiba.net/uploads/Light_Background_2_1_4f454fc4f0.png)] tw-bg-[#f9f5efcc] tw-bg-cover",
        "tw-pb-6 lg:tw-px-0 lg:tw-pt-[205px] lg:tw-pb-10 ",
      )}
    >
      <div className="lg:tw-container">
        <div className="">
          <h2 className="tw-text-xl tw-font-bold lg:tw-text-4xl lg:tw-mb-10 lg:tw-text-center">
            {p("challenges.title")}
          </h2>
        </div>
        <div className="lg:tw-hidden">
          <div className="tw-mt-3 tw-grid tw-grid-cols-2 tw-gap-4">
            <div className="tw-border tw-border-[#ddd] tw-bg-white tw-rounded-lg tw-px-3 tw-pt-3 ">
              <h3 className="tw-text-center tw-text-sm tw-font-medium tw-mb-5">
                {p("challenges.high")}
              </h3>
              <Image
                src={
                  "https://cms-strapi.ichiba.net/uploads/Group_fd5bc39763.svg"
                }
                alt="challenges"
                width={112}
                height={83}
                className="tw-mx-auto "
              />
            </div>
            <div className="tw-border tw-border-[#ddd] tw-bg-white tw-rounded-lg tw-px-3 tw-pt-3 ">
              <h3 className="tw-text-center tw-text-sm tw-font-medium tw-mb-5">
                {p("challenges.complexities")}
              </h3>
              <Image
                src={
                  "https://cms-strapi.ichiba.net/uploads/OBJECTS_3e4cc7b545.svg"
                }
                alt="complexities"
                width={157}
                height={77}
                className="tw-mx-auto"
              />
            </div>
            <div className="tw-border tw-border-[#ddd] tw-bg-white tw-rounded-lg tw-px-3 tw-pt-3 ">
              <h3 className="tw-text-center tw-text-sm tw-font-medium tw-mb-5">
                {p("challenges.cultural")}
              </h3>
              <Image
                src={
                  "https://cms-strapi.ichiba.net/uploads/Frame_50d011f147.svg"
                }
                alt="cultural"
                width={151}
                height={83}
                className="tw-mx-auto"
              />
            </div>
            <div className="tw-border tw-border-[#ddd] tw-bg-white tw-rounded-lg tw-px-3 tw-pt-3 ">
              <h3 className="tw-text-center tw-text-sm tw-font-medium tw-mb-5">
                {p("challenges.legal")}
              </h3>
              <Image
                src={
                  "https://cms-strapi.ichiba.net/uploads/Group_1_f1b0aa9dfc.svg"
                }
                alt="legal"
                width={119}
                height={78}
                className="tw-mx-auto"
              />
            </div>
          </div>
          <div className="tw-mt-4">
            <div className="tw-border tw-border-[#ddd] tw-bg-white tw-rounded-lg tw-pb-3">
              <Image
                src={
                  "https://cms-strapi.ichiba.net/uploads/Frame_1171276142_d13f2ff1b9.svg"
                }
                alt="currency"
                width={358}
                height={186}
                className="tw-mx-auto"
              />
              <h3 className="tw-text-center tw-text-sm tw-font-medium tw-mt-3">
                {p("challenges.currency")}
              </h3>
            </div>
          </div>
        </div>
        <div className="tw-hidden lg:tw-flex tw-gap-6">
          <div className="tw-grid tw-gap-6">
            <div className="tw-flex tw-gap-6">
              <div className="tw-rounded-lg tw-border tw-border-[#ddd] tw-bg-white tw-px-6 tw-pt-6">
                <h3 className="tw-font-medium tw-text-lg">
                  {p("challenges.high")}
                </h3>
                <Image
                  src={
                    "https://cms-strapi.ichiba.net/uploads/Group_fd5bc39763.svg"
                  }
                  alt="challenges"
                  width={206}
                  height={130}
                  className="tw-mx-auto tw-mt-11"
                />
              </div>
              <div className="tw-border tw-border-[#ddd] tw-bg-white tw-rounded-lg tw-px-6 tw-pt-6 ">
                <h3 className="tw-text-center tw-text-lg tw-font-medium tw-mb-11">
                  {p("challenges.complexities")}
                </h3>
                <Image
                  src={
                    "https://cms-strapi.ichiba.net/uploads/OBJECTS_3e4cc7b545.svg"
                  }
                  alt="complexities"
                  width={336}
                  height={140}
                  className="tw-mx-auto"
                />
              </div>
              
            </div>
            <div className="tw-flex tw-gap-6">
                <div className="tw-rounded-lg tw-border tw-border-[#ddd] tw-bg-white tw-px-6 tw-pt-6">
                  <h3 className="tw-font-medium tw-text-lg">
                    {p("challenges.cultural")}
                  </h3>
                  <Image
                    src={
                      "https://cms-strapi.ichiba.net/uploads/Frame_50d011f147.svg"
                    }
                    alt="challenges"
                    width={309}
                    height={130}
                    className="tw-mx-auto tw-mt-11"
                  />
                </div>
                <div className="tw-border tw-border-[#ddd] tw-bg-white tw-rounded-lg tw-p-6 ">
                  <h3 className="tw-text-center tw-text-lg tw-font-medium tw-mb-11">
                    {p("challenges.legal")}
                  </h3>
                  <Image
                    src={
                      "https://cms-strapi.ichiba.net/uploads/Group_1_f1b0aa9dfc.svg"
                    }
                    alt="legal"
                    width={176}
                    height={115}
                    className="tw-mx-auto"
                  />
                </div>
              </div>
          </div>
            <div className="tw-border tw-border-[#ddd] tw-bg-white tw-rounded-lg tw-pb-10 tw-flex-1">
              <Image
                src={
                  "https://cms-strapi.ichiba.net/uploads/Frame_1171276142_66bef830ea.png"
                }
                alt="currency"
                width={486}
                height={386}
                className="tw-w-full"
              />
              <h3 className="tw-text-center tw-text-lg tw-font-medium tw-mt-7">
                {p("challenges.currency")}
              </h3>
            </div>
        </div>
      </div>
    </div>
  );
};
export default Challenges;

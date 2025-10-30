import clsx from "clsx";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import Link from "next/link";
const OurAPI = ({ data }: any) => {
  const i = useTranslation("integration").t;

  const items = [
    {
      icon: "https://cms-strapi.ichiba.net/uploads/Rectangle_6687_5cda3011a7.png",
      title: "EMS",
      link: "#",
    },
    {
      icon: "https://cms-strapi.ichiba.net/uploads/Group_17474_c61f020891.png",
      title: "DHL",
      link: "#",
    },
    {
      icon: "https://cms-strapi.ichiba.net/uploads/image_26_378f35ab22.png",
      title: "Fedex",
      link: "#",
    },
    {
      icon: "https://cms-strapi.ichiba.net/uploads/Rectangle_6687_1_6a53244b44.png",
      title: "Gojek",
      link: "#",
    },
    {
      icon: "https://cms-strapi.ichiba.net/uploads/Rectangle_6687_2_643f1c8d59.png",
      title: "Grab",
      link: "#",
    },
    {
      icon: "https://cms-strapi.ichiba.net/uploads/Rectangle_6687_3_8170b4d530.png",
      title: "J&T",
      link: "#",
    },
    {
      icon: "https://cms-strapi.ichiba.net/uploads/Group_17479_a61521b61a.png",
      title: "Blue Dart",
      link: "#",
    },
    {
      icon: "https://cms-strapi.ichiba.net/uploads/Group_17476_4885b58334.png",
      title: "Japan Post",
      link: "#",
    },
    {
      icon: "https://cms-strapi.ichiba.net/uploads/Group_17478_259d4f7366.png",
      title: "Nippon Express",
      link: "#",
    },
    {
      icon: "https://cms-strapi.ichiba.net/uploads/Group_17477_853982da31.png",
      title: "Sagawa",
      link: "#",
    },
    {
      icon: "https://cms-strapi.ichiba.net/uploads/Group_17476_1_a5850baa3e.png",
      title: "Yamato",
      link: "#",
    },
    {
      icon: "https://cms-strapi.ichiba.net/uploads/Group_17482_cdd7032304.png",
      title: "China Post",
      link: "#",
    },
    {
      icon: "https://cms-strapi.ichiba.net/uploads/Group_17481_fd7fb9503e.png",
      title: "TNT",
      link: "#",
    },
    {
      icon: "https://cms-strapi.ichiba.net/uploads/Group_17485_4cd2fdf2de.png",
      title: "SF Express",
      link: "#",
    },
    {
      icon: "https://cms-strapi.ichiba.net/uploads/Group_17484_d362adfa54.png",
      title: "Sino Shipping",
      link: "#",
    },
    {
      icon: "https://cms-strapi.ichiba.net/uploads/Group_17476_2_64744d7333.png",
      title: "ZTO Express",
      link: "#",
    },
  ];
  return (
    <div className="tw-py-6 lg:tw-pt-16 lg:tw-pb-10 lg:tw-px-0">
      <h2 className="tw-px-7 tw-text-2xl lg:tw-text-4xl tw-mb-6 lg:tw-mb-10 tw-font-bold tw-text-center">
        {data?.heading}
      </h2>
      <div
        className={clsx(
          "tw-relative tw-bg-[url('https://cms-strapi.ichiba.net/uploads/image_826_3c6d110fe4.svg')]",
          "tw-w-full tw-max-w-[1364px] tw-h-[410px] tw-mx-auto xl:tw-rounded-2xl tw-mb-[180px]",
        )}
      >
        <div
          className={clsx(
            "tw-container tw-min-h-[400px] tw-absolute tw-top-[205px] tw-left-[50%] tw-translate-x-[-50%]",
          )}
        >
          <div
            className={clsx(
              " tw-p-6 tw-bg-white tw-shadow-[0px_8px_16px_0px_rgba(0,_0,_0,_0.05)] tw-rounded-2xl",
            )}
          >
            <div className="tw-overflow-x-scroll tw-no-scrollbar">
              <div className="tw-grid tw-grid-cols-4 tw-w-max lg:tw-w-full tw-gap-2 tw-mx-auto">
                {data?.items.map((value: any, index: number) => (
                  <div
                    className="tw-p-3 tw-min-w-[200px] tw-flex tw-gap-2 tw-justify-between tw-items-center tw-bg-white tw-border tw-border-ic-ink-2 tw-rounded-lg lg:tw-rounded-xl"
                    key={index}
                  >
                    <div className="tw-flex tw-gap-4 tw-items-center">
                      <Image
                        src={
                          value?.logo?.data?.attributes?.url
                            ? `https://cms-strapi.ichiba.net${value?.logo?.data?.attributes?.url}`
                            : "#"
                        }
                        alt="IChiba"
                        width={48}
                        height={48}
                        className="tw-min-w-[48px]"
                      />
                      <div className="tw-font-medium tw-text-base">
                        {value.title}
                      </div>
                    </div>
                    <Link
                      href={value.link === "" ? "#" : value.link}
                      className="tw-no-underline tw-text-sm tw-rounded-lg tw-text-brand-primary tw-border tw-border-brand-primary tw-py-[6px] tw-px-3"
                    >
                      <p className="tw-mb-0 tw-w-max">{i("ourAPI.connect")}</p>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default OurAPI;

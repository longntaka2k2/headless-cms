"use client";
import TheOrder from "./TheOrder";
import WhatIsOrder from "./WhatIsOrder";
import Omnichannel from "./Omnichannel";
import AnchorLinks from "./AnchorLinksOrder";
import { removeAccent } from "@/utils/ultils";
import Track from "./Track";
import Automate from "./Automate";
import Comprehensive from "./Comprehensive";
import Manage from "./Manage";
import WistiaPlayer from "../Video";
import { usePathname } from "next/navigation";

const TheUltimateOrder = ({ lang }: { lang: any }) => {
 const locale = usePathname().split("/")[1];

  return (
    <div className="pt-[64px] lg:pt-[130px]  ">
      <div className="bg-[url(https://strapi-efex.ichiba.net/uploads/Background_fd709fac30.png)] bg-no-repeat">
        <div className="text-center font-bold text-[24px] lg:text-[36px] px-4 lg:px-0">
          {lang?.title}
        </div>
        <div className="px-4 lg:px-0 rounded-[8px]  lg:max-w-[985px] lg:mx-auto lg:mt-10 lg:pb-[165px] lg:mb-6 my-4">
          <WistiaPlayer
            videoId={locale === 'en' ? "7wjfs6c9hy" : 'uveubihqff'}
            wrapper="wistia-player-container-1"
          />
        </div>
      </div>
      <div className="lg:container">
        <div className="lg:flex ">
          <div className="lg:pr-10 px-4 lg:px-0">
            <AnchorLinks
              items={[...lang?.items].map(
                (x) => ({
                  label: x?.label!,
                  href: "#" + removeAccent(x?.label!),
                })
              )}
            />
          </div>
          <div>
            <WhatIsOrder lang={lang?.items[0]} />
            <TheOrder lang={lang?.items[1]} locale={locale} />
            <Omnichannel lang={lang?.items[2]} />
            <Track lang={lang?.items[3]} />
            <Automate lang={lang?.items[4]} />
            <Comprehensive lang={lang?.items[5]} />
            <Manage lang={lang?.items[6]} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheUltimateOrder;

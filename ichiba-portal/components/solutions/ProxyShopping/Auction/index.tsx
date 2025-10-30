import { useTranslation } from "next-i18next";
import Image from "next/image";

const Auction = () => {
  const p = useTranslation("proxy-shopping").t;

  return (
    <div className="tw-px-4 tw-pb-5 lg:tw-container lg:tw-px-0 lg:tw-pb-15">
      <div className="tw-rounded-xl tw-border tw-border-[#DDD] tw-overflow-hidden lg:tw-flex tw-gap-[90px] tw-items-center lg:tw-rounded-3xl">
        <div className="tw-pt-4 tw-px-4 lg:tw-pl-10 lg:tw-max-w-[384px]">
          <div className="tw-flex tw-items-center tw-gap-3 lg:tw-grid">
            <Image
              src={"https://cms-strapi.ichiba.net/uploads/bid_1_71a1720aa0.svg"}
              alt=""
              width={28}
              height={28}
              className="lg:tw-w-12 tw-p-[6px] lg:tw-p-2 tw-rounded-md tw-bg-[#c3deee59]"
            />
            <h3 className="tw-text-lg tw-font-bold lg:tw-text-2xl">{p("auction.title")}</h3>
          </div>
          <div className="tw-mt-3 lg:tw-text-base tw-text-sm">{p("auction.content")}</div>
        </div>
        <div className="tw-mt-8 lg:tw-hidden">
          <Image src="https://cms-strapi.ichiba.net/uploads/Image_bb2c0a691d.png" alt="" width={358} height={290} className="tw-w-full "/>
        </div>
        <div className="tw-hidden lg:tw-block tw-flex-1">
        <Image src="https://cms-strapi.ichiba.net/uploads/Group_1171275946_3a2d9551f7.png" alt="" width={685} height={380} className="tw-w-full "/>
        </div>
      </div>
    </div>
  );
};

export default Auction;

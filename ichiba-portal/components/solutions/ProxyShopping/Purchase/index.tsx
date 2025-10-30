import { useTranslation } from "next-i18next";
import Image from "next/image";
const Purchase = () => {
  const p = useTranslation("proxy-shopping").t;

  return (
    <div className="tw-px-4 tw-pb-6 lg:tw-pb-15">
      <div className="lg:tw-flex lg:tw-container tw-gap-[72px] tw-items-center">
        <div className="lg:tw-block tw-hidden">
          <Image
            src="https://cms-strapi.ichiba.net/uploads/Frame_1171276103_d92c0fd413.png"
            alt="Frame_1171276103_a9ec70bfa7"
            className="tw-max-w-[700px]"
            width={740}
            height={512}
          />
        </div>
        <div>
          <div className="tw-flex lg:tw-grid tw-gap-3 tw-items-center">
            <div className="tw-p-[6px] lg:tw-p-2 tw-rounded-md tw-bg-[#FFF7E6] tw-w-max">
              <Image
                src="https://cms-strapi.ichiba.net/uploads/dd_e2c4e4b229.svg"
                alt="proxy-shopping"
                width={24}
                height={24}
                className="lg:tw-w-[32px]"
              />
            </div>
            <h3 className="tw-text-lg tw-font-bold tw-flex-1 lg:tw-text-2xl">
              {p("purchase.title")}
            </h3>
          </div>
          <div className="tw-text-sm tw-mt-2 lg:tw-text-base ">
            {p("purchase.content")}
          </div>
        </div>
      </div>
      <div className="lg:tw-hidden tw-mt-5 ">
        <Image
          src="https://cms-strapi.ichiba.net/uploads/Frame_1171276103_a9ec70bfa7.png"
          alt="Frame_1171276103_a9ec70bfa7"
          className=""
          width={358}
          height={248}
        />
      </div>
    </div>
  );
};

export default Purchase;

import { useTranslation } from "next-i18next";
import Image from "next/image";
const Streamlined = () => {
  const o = useTranslation("omnichannel-selling").t;

  return (
    <div className="tw-mt-12 tw-mx-4">
      <div className="lg:tw-hidden">
        <div className="tw-flex tw-items-center tw-gap-3">
          <Image
            src="https://cms-strapi.ichiba.net/uploads/Frame_1171276102_57a53b793c.svg"
            alt=""
            width={44}
            height={44}
          />
          <h3 className="tw-text-lg tw-font-bold">
            {o("howdo.streamline.title")}
          </h3>
        </div>
        <div className="tw-text-sm tw-mt-2">
          {o("howdo.streamline.content")}
        </div>
        <Image
          src="https://cms-strapi.ichiba.net/uploads/Group_1171275943_9cc559113c.png"
          alt=""
          width={717}
          height={367}
          className="tw-mt-4"
        />
      </div>
      <div className="lg:tw-block tw-hidden tw-relative tw-container">
        <Image
          src="https://cms-strapi.ichiba.net/uploads/Group_1171275944_91e0a98eb0.png"
          alt=""
          width={1200}
          height={491}
          className=""
        />
        <div className="tw-max-w-[556px] tw-absolute tw-top-[70px] tw-right-[8%]">
          <div className="tw-grid tw-items-center tw-gap-3">
            <Image
              src="https://cms-strapi.ichiba.net/uploads/Frame_1171276102_57a53b793c.svg"
              alt=""
              width={56}
              height={56}
            />
            <h3 className="tw-text-2xl tw-font-bold">
              {o("howdo.streamline.title")}
            </h3>
          </div>
          <div className=" tw-mt-3">{o("howdo.streamline.content")}</div>
        </div>
      </div>
    </div>
  );
};
export default Streamlined;

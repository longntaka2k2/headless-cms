import item from "@/components/layout/header/profileItem";
import clsx from "clsx";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import { useEffect, useState } from "react";

const saleChannels = [
  "https://cms-strapi.ichiba.net/uploads/Logo_merchant_8a6a58890c.png",
  "https://cms-strapi.ichiba.net/uploads/Logo_merchant_1_bb74cba78f.png",
  "https://cms-strapi.ichiba.net/uploads/Logo_merchant_2_c0aa938392.png",
  "https://cms-strapi.ichiba.net/uploads/Logo_merchant_3_eef40bed87.png",
  "https://cms-strapi.ichiba.net/uploads/Logo_merchant_4_00435d3023.png",
  "https://cms-strapi.ichiba.net/uploads/Logo_merchant_1_cad687642c.png",
  "https://cms-strapi.ichiba.net/uploads/Logo_merchant_1_1_7fe4b066b7.png",
  "https://cms-strapi.ichiba.net/uploads/Logo_merchant_2_1_649daaf5ad.png",
  "https://cms-strapi.ichiba.net/uploads/Logo_merchant_3_1_9bfa6ba7d7.png",
  "https://cms-strapi.ichiba.net/uploads/Logo_merchant_4_1_210e3cb881.png",
  "https://cms-strapi.ichiba.net/uploads/Logo_merchant_2_9e08892a60.png",
  "https://cms-strapi.ichiba.net/uploads/Logo_merchant_1_2_a4fb9570f2.png",
  "https://cms-strapi.ichiba.net/uploads/Logo_merchant_2_2_aac9d5f6c3.png",
  "https://cms-strapi.ichiba.net/uploads/Logo_merchant_3_2_9707a60cd7.png",
  "https://cms-strapi.ichiba.net/uploads/Logo_merchant_4_2_cb4972fc1c.png",
];

const carriers = [
  "https://cms-strapi.ichiba.net/uploads/Logo_merchant_3_eef40bed87.png",
  "https://cms-strapi.ichiba.net/uploads/Logo_merchant_8a6a58890c.png",
  "https://cms-strapi.ichiba.net/uploads/Logo_merchant_1_bb74cba78f.png",
  "https://cms-strapi.ichiba.net/uploads/Logo_merchant_2_c0aa938392.png",
  "https://cms-strapi.ichiba.net/uploads/Logo_merchant_1_cad687642c.png",
  "https://cms-strapi.ichiba.net/uploads/Logo_merchant_4_00435d3023.png",
  "https://cms-strapi.ichiba.net/uploads/Logo_merchant_3_1_9bfa6ba7d7.png",
  "https://cms-strapi.ichiba.net/uploads/Logo_merchant_1_1_7fe4b066b7.png",
  "https://cms-strapi.ichiba.net/uploads/Logo_merchant_2_1_649daaf5ad.png",
  "https://cms-strapi.ichiba.net/uploads/Logo_merchant_2_9e08892a60.png",
  "https://cms-strapi.ichiba.net/uploads/Logo_merchant_1_2_a4fb9570f2.png",
  "https://cms-strapi.ichiba.net/uploads/Logo_merchant_2_2_aac9d5f6c3.png",
  "https://cms-strapi.ichiba.net/uploads/Logo_merchant_3_2_9707a60cd7.png",
  "https://cms-strapi.ichiba.net/uploads/Logo_merchant_4_1_210e3cb881.png",
  "https://cms-strapi.ichiba.net/uploads/Logo_merchant_4_2_cb4972fc1c.png",
];

const thirdPartys = [
  "https://cms-strapi.ichiba.net/uploads/Logo_merchant_1_cad687642c.png",
  "https://cms-strapi.ichiba.net/uploads/Logo_merchant_4_00435d3023.png",
  "https://cms-strapi.ichiba.net/uploads/Logo_merchant_1_1_7fe4b066b7.png",
  "https://cms-strapi.ichiba.net/uploads/Logo_merchant_2_1_649daaf5ad.png",
  "https://cms-strapi.ichiba.net/uploads/Logo_merchant_8a6a58890c.png",
  "https://cms-strapi.ichiba.net/uploads/Logo_merchant_1_bb74cba78f.png",
  "https://cms-strapi.ichiba.net/uploads/Logo_merchant_2_c0aa938392.png",
  "https://cms-strapi.ichiba.net/uploads/Logo_merchant_3_1_9bfa6ba7d7.png",
  "https://cms-strapi.ichiba.net/uploads/Logo_merchant_4_1_210e3cb881.png",
  "https://cms-strapi.ichiba.net/uploads/Logo_merchant_3_eef40bed87.png",
  "https://cms-strapi.ichiba.net/uploads/Logo_merchant_4_2_cb4972fc1c.png",
  "https://cms-strapi.ichiba.net/uploads/Logo_merchant_2_2_aac9d5f6c3.png",
  "https://cms-strapi.ichiba.net/uploads/Logo_merchant_3_2_9707a60cd7.png",
  "https://cms-strapi.ichiba.net/uploads/Logo_merchant_1_2_a4fb9570f2.png",
];

const IntegrationCapability = () => {
  const o = useTranslation("omnichannel-selling").t;
  const [active, setActive] = useState(0);
  const [list, setList] = useState(saleChannels);

  useEffect(() => {
    switch (active) {
      case 0:
        setList(saleChannels);
        break;
      case 1:
        setList(carriers);
        break;
      case 2:
        setList(thirdPartys);
        break;
      default:
        break;
    }
  }, [active, setList]);

  return (
    <div className="tw-mx-4 tw-my-6 lg:tw-container">
      <div className="tw-flex tw-gap-2 tw-items-center">
        <Image
          src="https://cms-strapi.ichiba.net/uploads/integrations_icon_2x_1_9925ac327b.png"
          alt=""
          width={44}
          height={44}
        />
        <h3 className="tw-text-2xl tw-font-bold">{o("intergration.title")}</h3>
      </div>
      <div className="tw-mt-4">
        <div className="tw-grid tw-grid-cols-3  tw-text-center lg:tw-max-w-[540px]">
          <div
            className={clsx(
              "tw-text-sm tw-font-bold tw-py-3 tw-border-t tw-cursor-pointer",
              active === 0 &&
                "tw-text-[#1D39C4] tw-border-t tw-border-[#1D39C4]",
            )}
            onClick={() => setActive(0)}
          >
            {o("intergration.sale")}
          </div>
          <div
            className={clsx(
              "tw-text-sm tw-font-bold tw-py-3 tw-border-t tw-cursor-pointer",
              active === 1 &&
                "tw-text-[#1D39C4] tw-border-t tw-border-[#1D39C4]",
            )}
            onClick={() => setActive(1)}
          >
            {o("intergration.carriers")}
          </div>
          <div
            className={clsx(
              "tw-text-sm tw-font-bold tw-py-3 tw-border-t tw-cursor-pointer",
              active === 2 &&
                "tw-text-[#1D39C4] tw-border-t tw-border-[#1D39C4]",
            )}
            onClick={() => setActive(2)}
          >
            {o("intergration.party")}
          </div>
        </div>
        <div className="tw-grid tw-grid-cols-3 lg:tw-grid-cols-5 tw-gap-3 lg:tw-gap-4 tw-mt-2 lg:tw-mt-6">
          {list &&
            list.map((item, index) => {
              return (
                <div key={index}>
                  <Image
                    src={item}
                    alt=""
                    width={111}
                    height={48}
                    className="lg:tw-w-[226px] tw-w-full"
                  />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};
export default IntegrationCapability;

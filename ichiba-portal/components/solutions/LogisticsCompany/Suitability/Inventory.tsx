import { useTranslation } from "next-i18next";
import Image from "next/image";

const Inventory = () => {
  const l = useTranslation("logistics-company").t;

  return (
    <div className="tw-py-6 tw-px-4 lg:tw-py-10 lg:tw-container lg:tw-px-0 lg:tw-flex lg:tw-gap-10 tw-items-center">
      <div className="tw-max-w-[471px]">
        <h3 className="tw-text-lg tw-font-bold lg:tw-text-2xl">
          {l("suitability.inventory.title")}
        </h3>
        <div className="tw-text-sm tw-mt-2 lg:tw-text-base lg:tw-mt-4">
          {l("suitability.inventory.content")}
        </div>
      </div>
      <Image
        src={
          "https://cms-strapi.ichiba.net/uploads/Frame_1171275769_2_94114f21f2.png"
        }
        className="tw-mt-6 lg:tw-mt-0"
        alt=""
        width={689}
        height={364}
      />
    </div>
  );
};

export default Inventory;

import React from "react";
import MixLabel from "../../mix-label";
import Image from "next/image";
import ListItems from "../../list-items";

type CentralizedProductDataCardProps = {
  image: string;
  header: string;
  contentRows: string[];
} & JSX.IntrinsicElements["div"];

const CentralizedProductDataCard: React.FC<CentralizedProductDataCardProps> = ({
  contentRows,
  image,
  header,
  ...props
}) => {
  return (
    <div
      className="tw-p-4 md:tw-p-6 lg:tw-p-10 tw-bg-ic-white-6 tw-rounded-xl tw-w-full lg:tw-max-w-[452px] lg:tw-h-full lg:tw-max-h-[556px] tw-scroll-mt-20"
      {...props}
    >
      <div className="tw-w-20 tw-h-20 md:tw-w-28 md:tw-h-28 lg:tw-w-32 lg:tw-h-32 tw-relative">
        <Image
          className="tw-object-cover tw-rounded-2xl"
          src={image}
          alt="CentralizedProductDataCard"
          width={145}
          height={145}
        />
      </div>
      <MixLabel className="tw-mt-5" label={header}>
        <ListItems items={contentRows} />
      </MixLabel>
    </div>
  );
};

export default CentralizedProductDataCard;

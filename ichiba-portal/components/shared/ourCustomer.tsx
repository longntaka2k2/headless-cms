/* eslint-disable @next/next/no-img-element */
import {
  StrapiMediaModel,
  StrapiRelationModel,
} from "@/src/lib/models/StrapiModel";
import clsx from "clsx";
import Image from "next/image";
interface Props {
  heading: string;
  id: number;
  subHeading?: string;
  items: {
    link?: string;
    image: StrapiRelationModel<StrapiMediaModel>;
  }[];
}

export default function OurCustomer(props: Props) {
  return (
    <div className="tw-py-6 md:tw-my-10 our-customer">
      <div className="tw-container tw-text-start md:tw-text-center">
        <h2
          className={clsx(
            "tw-text-2xl md:tw-text-4xl fw-7 tw-pb-5 title tw-mb-0",
            props?.subHeading ? "" : "tw-pb-5",
          )}
        >
          {props?.heading}
        </h2>
        <div className=" mx-auto container-child sub-heading tw-text-sm md:tw-text-base">
          {props?.subHeading}
        </div>
        <div
          className={clsx(
            "tw-w-full ",
            "tw-overflow-x-auto [&::-webkit-scrollbar]:tw-hidden",
          )}
        >
          <div className="items tw-grid tw-grid-rows-4 tw-grid-flow-col tw-gap-6 tw-py-2 md:tw-py-5">
            {(props?.items?.length as number) > 0 &&
              props?.items?.map((value: any, index: number) => {
                const imageData = (
                  value?.image as StrapiRelationModel<StrapiMediaModel>
                )?.data?.attributes;
                return (
                  <div
                    className=" text-center img 
                  tw-w-[120px] tw-h-[48px] md:tw-w-[180px] md:tw-h-[88px]"
                    key={`${index}_${value?.image?.data?.attributes?.url}`}
                  >
                    {imageData && (
                      <Image
                        src={imageData?.url || ""}
                        alt={imageData?.alternativeText ?? ""}
                        width={imageData?.width}
                        height={imageData?.height}
                      />
                    )}
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}

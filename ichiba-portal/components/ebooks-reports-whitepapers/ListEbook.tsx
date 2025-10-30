"use client";
import { RelativeImagePath } from "@/utils/utils";
import { CardEbook } from "./CardEbook";

const ListEbook = ({ ebooks }: any) => {
  return (
    <div>
      <div className="tw-my-5">
        <div className="tw-grid lg:tw-grid-cols-3 md:tw-grid-cols-2 tw-gap-4 lg:tw-gap-6">
          {ebooks &&
            ebooks?.map((value: any, index: number) => (
              <CardEbook
                key={index}
                thumbnail={RelativeImagePath(
                  value?.attributes?.thumbnail?.data?.attributes?.url,
                )}
                url={`/ebooks-reports-whitepapers/${value?.attributes?.slug}`}
                previewDescription={value?.attributes?.previewDescription}
                title={value?.attributes?.title}
                className="tw-max-w-[92vw] hover:scale-105 tw-transition-all tw-duration-1000 tw-ease-in-out"
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default ListEbook;

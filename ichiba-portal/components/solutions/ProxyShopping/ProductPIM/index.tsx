import clsx from "clsx";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import { useState } from "react";
const ProductPim = () => {
  const p = useTranslation("proxy-shopping").t;
  const [active, setActive] = useState(0);
  return (
    <div className="tw-bg-[#F2F4F8] tw-overflow-x-hidden">
      <div className="tw-pt-6 tw-pb-10 lg:tw-py-15 tw-px-4 lg:tw-container lg:tw-flex lg:tw-items-center lg:tw-gap-20 ">
        <div className="lg:tw-max-w-[500px]">
          <div className="tw-flex tw-gap-3 tw-items-center lg:tw-grid">
            <Image
              src={
                "https://cms-strapi.ichiba.net/uploads/Logo_vertical_c7f108c481.svg"
              }
              alt="uploads"
              width={40}
              height={40}
              className="lg:tw-w-16"
            />
            <h2 className="tw-text-lg tw-font-bold lg:tw-text-3xl">
              {p("product.title")}
            </h2>
          </div>
          <div
            className={clsx(
              "tw-grid tw-gap-4 tw-mt-4 lg:tw-mt-10 tw-pl-[18px] lg:tw-pl-5 tw-relative lg:tw-gap-10",
              "before:tw-absolute before:tw-left-0 before:tw-w-[6px] before:tw-top-0 before:tw-bottom-0",
              "before:tw-bg-[#D9D9D9] before:tw-rounded-lg",
            )}
          >
            {(
              p(`product.items`, {
                returnObjects: true,
              }) as string[]
            )?.map((value: any, index: number) => (
              <div
                key={index}
                className={clsx(
                  "tw-relative ",
                  "before:tw-absolute before:tw-left-[-18px] before:lg:tw-left-[-20px] before:tw-w-[6px] before:tw-top-0 before:tw-bottom-0",
                  active === index
                    ? "before:tw-bg-[#3B4DAB] before:tw-rounded-lg"
                    : "",
                )}
                onClick={() => setActive(index)}
              >
                <h3 className="tw-font-bold lg:tw-text-2xl">{value.title}</h3>
                <div className="tw-text-sm tw-mt-1 lg:tw-mt-4 lg:tw-text-base">{value.content}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="">
          <Image
            src={
              "https://cms-strapi.ichiba.net/uploads/Frame_1171276114_eebc016bb8.png"
            }
            alt="uploads"
            className="tw-mt-10 lg:tw-mt-0"
            width={1003}
            height={616}
          />
        </div>
      </div>
    </div>
  );
};
export default ProductPim;

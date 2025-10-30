/* eslint-disable @next/next/link-passhref */
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { clsx } from "clsx";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import Link from "next/link";

const Product = () =>{
  const g = useTranslation("logistics-company").t;

  return(
    <div
      className={clsx(
        "tw-px-4 tw-pt-6 tw-pb-10 lg:tw-py-20 tw-overflow-hidden tw-bg-cover tw-bg-no-repeat",
        "tw-bg-[url(https://cms-strapi.ichiba.net/uploads/Frame_1171276115_ed20d470f4.svg)]",
        "lg:tw-bg-[url(https://cms-strapi.ichiba.net/uploads/Frame_1171275908_c6b339bba5.svg)]"
      )}
    >
      <div className="lg:tw-container">
        <h2 className="tw-text-2xl tw-font-bold lg:tw-text-4xl lg:tw-text-center">
          {g("product.title")}
        </h2>
        <div className="tw-mt-5 tw-flex lg:tw-grid lg:tw-grid-cols-4 tw-overflow-x-scroll lg:tw-overflow-x-visible tw-gap-4 tw-scroll-px-2 tw-scroll-mx-48 lg:tw-relative lg:tw-pb-5 lg:tw-mt-[50px]">
          {(
            g("product.items", {
              returnObjects: true,
            }) as string[]
          ).map((value: any, index: number) => (
            <div
              key={index}
              className="tw-min-w-[237px] lg:tw-min-w-full lg:tw-w-full tw-rounded-lg tw-border tw-border-[#ddd] tw-p-4 lg:tw-p-6 tw-grid tw-content-between tw-bg-white "
            >
              <div>
                <Image
                  src={value.icon}
                  alt=""
                  width={56}
                  height={56}
                  className=""
                />
                <div className="tw-mt-5 tw-font-bold lg:tw-text-xl">{value.title}</div>
                <div className="tw-mt-2 tw-text-sm lg:tw-text-base">{value.content}</div>
              </div>
              <Link
                href={value.link}
                className="tw-block tw-no-underline tw-text-sm tw-font-medium tw-text-[#F57C00] lg:tw-mt-6"
              >
                {g("product.learnMore")}{" "}
                <FontAwesomeIcon icon={faArrowRight} className="tw-ml-2" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Product
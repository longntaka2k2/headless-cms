/* eslint-disable @next/next/link-passhref */
import Link from "next/link";
import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function ThankYouComponent() {
  return (
    <div>
      <div
        className={clsx(
          "tw-bg-[url('https://cms-strapi.ichiba.net/uploads/Hero2_67a2efdbaa.svg')]",
          "lg:tw-bg-[url('https://cms-strapi.ichiba.net/uploads/Hero_8c9dc91c24.svg')] tw-bg-cover",
          "tw-w-full tw-h-screen tw-flex tw-items-center tw-text-center",
        )}
      >
        <div className="tw-container tw-px-10">
          <h1 className="tw-text-2xl lg:tw-text-5xl lg:tw-leading-[58px] tw-font-bold tw-gradient-text">
            Cảm ơn bạn đã liên hệ với IChiba!
          </h1>
          <p className="tw-text-base tw-mb-6">
            Đội ngũ chuyên gia của chúng tôi đã nhận được yêu cầu và sẽ sớm liên hệ lại bạn!
          </p>

          <div className="tw-flex tw-justify-center tw-text-sm tw-font-medium">
            <Link
              className={clsx(
                "tw-bg-brand-primary tw-px-4 tw-py-2 tw-text-white tw-text-sm lg:tw-text-base",
                "tw-font-medium lg:tw-py-[14px] lg:tw-px-8 tw-rounded-lg tw-no-underline",
              )}
              href="https://ichiba.vn/"
            >
              Về trang chủ
              <FontAwesomeIcon
                icon={faArrowRight}
                width={24}
                height={24}
                className="tw-ml-1 tw-group-hover:tw-translate-x-2 tw-transition-all"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

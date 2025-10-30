/* eslint-disable @next/next/link-passhref */
import Image from "next/image";
import clsx from "clsx";
import logo from "@/public/icons/Logo.svg";
import Link from "next/link";

export default function Header({ onButtonClick }: any) {
  return (
    <div className="tw-sticky tw-bg-white tw-z-50 tw-top-0 tw-px-4 lg:tw-px-0 tw-border-b tw-border-ic-ink-2">
      <div className="tw-container tw-py-3 lg:tw-py-4 tw-flex tw-gap-1 tw-items-center tw-justify-between">
        <Image
          src={logo}
          unoptimized={true}
          alt="logo"
          width={500}
          height={500}
          className="cursor tw-w-24 tw-h-8 lg:tw-w-32 lg:tw-h-10"
        />
        <h2 className="text__gradient tw-text-[10px] lg:tw-text-lg tw-text-center tw-mb-0">
          Phần mềm quản lý vận hành kho chính xác 100%
        </h2>
        <button
          onClick={onButtonClick}
          className={clsx(
            "cursor tw-whitespace-nowrap tw-no-underline tw-text-white tw-bg-brand-primary",
            "tw-text-sm tw-p-2 tw-rounded-lg !tw-border-2 b tw-border-brand-primary tw-w-max",
          )}
        >
          <span className="tw-hidden lg:tw-block">Nhận tư vấn 1 - 1</span>
          <span className="lg:tw-hidden">Tư vấn</span>
        </button>
      </div>
    </div>
  );
}

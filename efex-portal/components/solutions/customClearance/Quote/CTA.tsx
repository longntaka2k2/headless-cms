"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

const CTA = ({lang} : any) => {
  const locale = usePathname().split("/")[1];

  return (
    <Link
      href={`/${locale}/contact-sales`}
      className={clsx(
        "inline-block",
        "mx-auto w-fit px-5 py-[14px] rounded-lg bg-brand-primary ",
        "text-center font-medium text-sm lg:text-base"
      )}
    >
      {lang.get}
    </Link>
  );
};

export default CTA;

"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const  CTA = ({lang} : any) => {
  const locale = usePathname().split("/")[1];

  return(
  <Link
    href={`/${locale}/contact-sales`}
    target="_blank"
    className=" mx-auto w-fit px-5 py-[14px] text-center rounded-lg bg-brand-primary inline-block font-medium"
  >
    {lang}
  </Link>
  )
};

export default CTA
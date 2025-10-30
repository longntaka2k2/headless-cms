'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

const CTA = ({lang} : any) => {
  const locale = usePathname().split("/")[1];
  return(
    <Link
          href={`/${locale}/contact-sales`}
          className="bg-[#B81010] lg:px-8 lg:py-4 py-3 px-6 font-medium uppercase text-white block w-max mx-auto lg:text-base text-sm"
        >
          {lang}
        </Link>
  )
}
export default CTA
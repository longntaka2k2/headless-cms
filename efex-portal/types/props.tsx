/** Type for component/function props/params */

import { StaticImport } from "next/dist/shared/lib/get-img-props";

export interface BlogCardProps {
  title?: string;
  image: string | StaticImport;
  url: string;
  description: string;
  readMore: string;
  className?: string;
}
export interface PageProps {
  params?: any;
  searchParams?: any;
}

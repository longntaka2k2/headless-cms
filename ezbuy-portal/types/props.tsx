/** Type for component/function props/params */

import { ImageProps } from "next/image";

export interface BlogCardProps {
  title: string;
  image: ImageProps["src"];
  url: string;
  description: string;
  className?: string;
}

export type PageProps = {
  params: { slug: string; lang: string };
  searchParams?: { [key: string]: string | string[] | undefined };
};

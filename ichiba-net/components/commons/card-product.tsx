'use client';
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import Rakuten from "@/public/images/commons/logo-rakuten.svg";
import Merceri from "@/public/images/commons/logo-merceri.svg";
import Amazon from "@/public/images/commons/logo-amazon.svg";
import type { StaticImageData } from "next/image";

export type ProductData = {
  origin: string;
  thumnail: StaticImageData;
  category: string;
  productName: string;
  price: string;
  link: string;
};

const ProductCard = ({ data }: { data: ProductData }) => {
  return (
    <div className="p-4 rounded-xl bg-white shadow-[0_4px_20px_rgba(19,17,61,0.08)] w-full max-w-[244px] flex flex-col gap-2 hover:shadow-[0_8px_30px_rgba(19,17,61,0.12)] transition-all duration-300">
      <div className="w-full aspect-square overflow-hidden rounded-lg">
        <Image
          src={data.thumnail}
          alt={data.productName}
          className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
        />
      </div>

      <div className="py-[2px] px-[6px] rounded-lg bg-primary-2 w-max">
        <p className="text-primary-6 text-sm font-medium">{data.category}</p>
      </div>

      <span className="text-base line-clamp-2">{data.productName}</span>

      <p className="text-lg font-bold text-primary-7">{data.price}</p>

      <div className="flex items-center justify-between mt-1">
        <div className="flex gap-1 items-center">
          <Image src={Rakuten} width={24} height={24} alt="Rakuten" />
          <Image src={Merceri} width={24} height={24} alt="Merceri" />
          <Image src={Amazon} width={24} height={24} alt="Amazon" />
        </div>
        <Link
          href={data.link || "#"}
          className="text-primary-6 font-medium underline"
        >
          View detail
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;

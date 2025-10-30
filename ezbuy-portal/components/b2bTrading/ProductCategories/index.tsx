import React, { useContext } from "react";
import { B2bTradingContext } from "../context";
import AspectRatio from "@/components/commons/AspectRatio";
import { useParams } from "next/navigation";
import EzImage from "@/components/commons/EzImage";

const ProductCategories = () => {
  const { lang } = useContext(B2bTradingContext);
  const params = useParams();

  return (
    <div className="flex flex-col gap-8 pt-12 container md:flex-row md:items-center">
      <div className="flex flex-col px-4 flex-1">
        <h3 className="text-2xl font-black uppercase md:text-3xl lg:text-4xl">
          {lang.services?.b2bTrading?.productCategories?.title}
        </h3>
        <span className="mt-2.5">
          {lang.services?.b2bTrading?.productCategories?.subTitle}
        </span>
        <div className="mt-8">
          <a
            target="_blank"
            href={`/${params.lang}/contact-sales`}
            className="min-w-[166px] bg-brand-secondary text-white px-4 py-3 uppercase font-medium"
          >
            {lang.services?.b2bTrading?.btn?.discover}
          </a>
        </div>
      </div>
      <div className="flex-1">
        <AspectRatio x={576} y={384}>
          <EzImage
            alt="Ezbuy"
            fill
            src="/uploads/product_categories_0d4bd6ab14.png"
            className="object-cover"
          />
        </AspectRatio>
      </div>
    </div>
  );
};

export default ProductCategories;

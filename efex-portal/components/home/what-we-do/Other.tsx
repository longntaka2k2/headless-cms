"use client";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Other = ({ data }: { data: any }) => {
  const locale = usePathname().slice(1, 3);

  return (
    <div
      className={clsx(
        "bg-[url('https://strapi-efex.ichiba.net/uploads/Content_86d2a2a879.svg')]",
        "px-4 py-6 lg:px-15 lg:py-12 rounded-2xl lg:rounded-[20px]"
      )}
    >
      <div className="text-lg lg:text-2xl font-bold text-center mb-6 lg:mb-15">
        {data?.title}
      </div>

      <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
        {data.items.map((item: any, index: number) => (
          <div key={index} className="flex flex-col gap-4">
            <Image
              src={item.image}
              width={250}
              height={170}
              alt=""
              className="mx-auto"
            />

            <div className="text-sm p-4 lg:py-6 rounded-2xl bg-[rgba(255,_255,_255,_0.60)] h-full">
              {item.content[0]}
              <span className="font-bold">{item.content[1]}</span>
              {item.content[2]}
              <span className="font-bold">{item.content[3]}</span>
              {item.content[4]}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Other;


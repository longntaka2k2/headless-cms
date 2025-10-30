import customizePackage from "@/public/images/icons/solutions/customizePackage.svg";
import partHandling from "@/public/images/icons/solutions/partHandling.svg";
import transportService from "@/public/images/icons/solutions/transportService.svg";
import clsx from "clsx";
import Image from "next/image";

export const FirstBlock = ({ lang }: { lang: any }) => {
  const content = [partHandling, customizePackage, transportService];

  return (
    <div className="container px-4 lg:px-0">
      <h2 className="flex text-lg leading-6 font-bold gap-3 lg:text-2xl">
        <p className="text-brand-primary">#1</p>
        <p className="text-brand-secondary">{lang.title}</p>
      </h2>
      <ul className="mt-[15px] flex flex-col gap-[15px] lg:flex-row lg:justify-between lg:gap-6">
        {content.map((icon, index) => (
          <li
            key={index}
            className={clsx(
              "p-4 rounded-lg border border-border bg-ic-white-6 flex gap-4",
              "lg:px-6 lg:pt-8 lg:pb-5 lg:flex-col lg:gap-5 lg:flex-1"
            )}
          >
            <Image
              src={icon}
              alt="Multi-channel"
              width={60}
              height={60}
              className="w-10 h-10 lg:w-15 lg:h-15"
              quality={100}
            />
            <p className="text-sm lg:text-base">{lang.content[index]}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

interface OptimizeListProps {
  list: {
    icon: string | StaticImport;
    description: React.ReactNode;
  }[];
  title: string;
  className?: string;
}

export const OptimizeList = ({
  list,
  title,
  className = "",
}: OptimizeListProps) => {
  return (
    <div className={className}>
      <h3 className="font-bold lg:text-xl">{title}</h3>
      <ul className="mt-3 flex flex-col gap-2 lg:mt-7 lg:flex-row lg:gap-5">
        {list.map((item, index) => (
          <li
            key={index}
            className="px-4 py-3 rounded-xl bg-background-light lg:pt-5 lg:px-6 lg:flex-1"
          >
            <Image
              src={item.icon}
              alt=""
              className="w-10 h-10 lg:w-[60px] lg:h-[60px]"
              quality={100}
            />
            <p className="mt-3 text-sm lg:text-base lg:mt-5">
              {item.description}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

import EzImage from "@/components/commons/EzImage";
import clsx from "clsx";
import cartComputer from "@/public/images/icons/solutions/cartComputer.svg";

export const FourthBlock = ({ lang }: { lang: any }) => {
  const content = [cartComputer, cartComputer];

  return (
    <div className="relative container px-4 mt-0 lg:mt-15">
      <div className="bg-[#F3F7FE] px-4 py-6 rounded-lg h-[408px] lg:px-[38px] lg:pb-15 lg:h-fit">
        <h2 className="flex text-lg leading-6 font-bold gap-3 lg:text-2xl lg:justify-center">
          <p className="text-brand-primary">#4</p>
          <p className="text-brand-secondary">{lang.title}</p>
        </h2>
        <ul className="mt-4 flex flex-col gap-4 lg:mt-10 lg:gap-6 lg:max-w-[497px] lg:ml-auto">
          {content.map((icon, index) => (
            <li key={index} className="flex items-center gap-4 lg:gap-6">
              <EzImage
                src={icon}
                alt="Warehouse management system"
                width={40}
                height={40}
                className="w-7 h-7 lg:w-10 lg:h-10"
              />
              <p className="text-sm lg:text-base">{lang.content[index]}</p>
            </li>
          ))}
        </ul>
        <EzImage
          src={"/uploads/warehouse_cc38e4f826.webp"}
          alt=" Warehouse management system"
          width={510}
          height={253}
          className={clsx(
            "absolute rounded-lg w-[326px] h-[162px] mt-5",
            "lg:rounded-xl lg:w-[510px] lg:h-[253px] lg:mt-0 lg:top-24 lg:left-16"
          )}
        />
      </div>
    </div>
  );
};

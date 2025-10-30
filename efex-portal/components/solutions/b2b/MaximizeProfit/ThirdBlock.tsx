import EzImage from "@/components/commons/EzImage";
import clsx from "clsx";

export const ThirdBlock = ({ lang }: { lang: any }) => {
  const content = [
    "/uploads/Frame_427318745_1_1eb45eca1d.webp",
    "/uploads/Frame_427318746_52658d7851.jpg",
  ];

  return (
    <div className="container px-4 lg:px-0">
      <h2 className="flex text-lg leading-6 font-bold gap-3 lg:text-2xl lg:justify-center">
        <p className="text-brand-primary">#3</p>
        <p className="text-brand-secondary">{lang.title}</p>
      </h2>
      <ul className="mt-12 flex flex-col gap-10 lg:flex-row lg:gap-6 lg:justify-between">
        {content.map((url, index) => (
          <li
            key={index}
            className={clsx(
              "bg-[#FAF4E5] p-4 rounded-lg",
              "lg:flex-1 lg:p-5 lg:rounded-xl lg:flex lg:justify-between lg:gap-6"
            )}
          >
            <div>
              <div className="pb-4 h-[216px] lg:pb-0 lg:h-[200px] lg:w-[257px]">
                <div className="relative w-full h-full">
                  <EzImage
                    src={url}
                    alt="Maximize profit"
                    width={263}
                    height={240}
                    className="absolute bottom-0 left-0 w-[263px] h-[240px] rounded-lg"
                    quality={100}
                  />
                </div>
              </div>
            </div>
            <p className="text-sm lg:text-base">{lang.content[index]}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

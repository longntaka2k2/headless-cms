import EzImage from "@/components/commons/EzImage";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const SecondBlock = ({ lang }: { lang: any }) => {
  const content = lang.content as string[];

  return (
    <div className="container flex flex-col items-center gap-5 px-4 lg:flex-row lg:justify-between lg:px-0">
      <div className="lg:max-w-[556px]">
        <h2 className="flex text-lg leading-6 font-bold gap-3 lg:text-2xl">
          <p className="text-brand-primary">#2</p>
          <p className="text-brand-secondary">{lang.title}</p>
        </h2>
        <ul className="mt-4 ml-9 flex flex-col gap-2 lg:mt-6 lg:ml-7 lg:mr-6 lg:gap-3">
          {content.map((item, index) => (
            <li key={index} className="flex gap-2 lg:gap-4">
              <div>
                <div className="flex items-center justify-center w-6 h-6 lg:w-8 lg:h-8">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-brand-brandb text-xl lg:text-2xl"
                  />
                </div>
              </div>
              <p className="text-sm lg:text-base">{item}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="">
        <EzImage
          src={"/uploads/maximize_profit_lg_fa52fcdfe5.png"}
          alt="Maximize profit"
          width={536}
          height={332}
          className=""
        />
      </div>
    </div>
  );
};

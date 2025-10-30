import EzImage from "@/components/commons/EzImage";
import clsx from "clsx";

const Specialists = ({ lang }: any) => {
  return (
    <div className="bg-[linear-gradient(270deg,_#EEEFFC_26.38%,rgba(223,231,246,.41)_54.93%,rgba(249,250,251,0)_97.01%)] py-6 px-4">
      <div className={clsx("container flex flex-col lg:flex-row lg:gap-15")}>
        <div className="my-auto">
          <h3 className="mb-5 lg:mb-0">{lang.title}</h3>
        </div>
        <div
          className={clsx(
            "flex flex-col lg:flex-row gap-7 lg:gap-[52px]",
            "bg-[linear-gradient(180deg,#023990_0%,rgba(28,15,104,.79)_100%)]",
            "p-4 lg:p-7 rounded-[20px]  lg:max-w-[792px]"
          )}
        >
          <p className="text-sm lg:text-base my-auto text-white">{lang.des}</p>
          <EzImage
            src={"/uploads/Illustration_67890dd446.png"}
            alt=""
            width={340}
            height={285}
            className="rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Specialists;

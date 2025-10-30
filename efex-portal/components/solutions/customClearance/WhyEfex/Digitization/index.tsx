import EzImage from "@/components/commons/EzImage";

const Dizitization = ({ lang }: any) => {
  return (
    <div className="flex flex-col lg:flex-row gap-4 lg:gap-15 lg:justify-center container px-4 lg:px-0">
      <div className="flex-1">
        <EzImage
          src={"/uploads/Image_11_f4646430cd.png"}
          alt=""
          width={588}
          height={346}
        />
      </div>
      <div className="flex-1 my-auto lg:pr-10">
        <h3 className="mb-3 font-bold text-lg lg:text-2xl">{lang.title}</h3>
        <p className="text-sm lg:text-base"> {lang.des}</p>
      </div>
    </div>
  );
};
export default Dizitization;

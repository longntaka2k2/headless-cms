import EzImage from "../commons/EzImage";

const WhyJapan = ({ lang }: any) => {
  return (
    <div className="py-10 bg-[#f5f5f5]">
      <div className="xl:flex ">
        <div className="mr-10 xl:mt-[120px] xl:block hidden">
          <EzImage
            src={"/uploads/Mask_group_42e1728e93.png"}
            alt="/uploads/Mask_group_42e1728e93.png"
            className="xl:max-w-[450px] mx-auto 2xl:max-w-[626px] 2xl:w-[626px]"
            width={626}
            height={746}
            quality={100}
          />
        </div>
        <div className="px-4 lg:px-6 xl:px-0 lg:max-w-full max-w-[628px] mx-auto">
          <div className="lg:text-4xl font-black text-2xl uppercase">
            <h2>
              {lang.title[0]} <br />
              {lang.title[1]}
            </h2>
          </div>
          <div className="lg:text-lg font-medium text-sm mt-4 max-w-[900px]">
            {lang.subtitle}
          </div>
          <div className="lg:mt-10 mt-6 grid lg:gap-10 gap-6 ">
            {lang.items.map((value: any, index: number) => (
              <div
                key={index}
                className="grid lg:grid-cols-2 py-6  gap-6 mx-auto bg-white hover:bg-[#F0F5FF] "
              >
                <div className="md:grid xl:grid-cols-2 gap-4 lg:grid-cols-1 px-6 ">
                  <h3 className="font-bold text-lg h-max ">{value.title}</h3>
                  <div className="lg:text-base text-sm md:mt-0 mt-4">
                    {value.subtitle}
                  </div>
                </div>
                <EzImage
                  src={value.img}
                  alt={value.img}
                  width={628}
                  height={200}
                  className="h-full object-cover px-6 xl:px-0"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyJapan;

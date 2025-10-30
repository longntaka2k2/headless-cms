import EzImage from "../commons/EzImage";

const Challenges = ({ lang }: any) => {
  return (
    <div className="lg:bg-[url(https://strapi-ezbuy.ichiba.net/uploads/Import_Export_Service_1838dbd608.png)] bg-no-repeat bg-cover bg-[url(https://strapi-ezbuy.ichiba.net/uploads/Import_Export_Service_de6dfbda13.svg)]">
      <div className="container px-4 lg:px-0 lg:py-10 py-6">
        <h2 className="font-black text-center text-white lg:text-4xl text-2xl uppercase">
          {lang.title}
        </h2>
        <div className="lg:text-base text-center text-sm mt-2 text-white">
          {lang.subtitle}
        </div>
        <div className="lg:grid gap-6 w-1/2 lg:mt-10 mt-6 hidden">
          <div className="lg:relative shadow-1 flex items-center py-3 px-5 bg-white ease-out transition-all  duration-150 hover:scale-110 hover:bg-[#F0F5FF] rounded-xl">
            <EzImage
              width={32}
              height={32}
              quality={100}
              src={"/uploads/Objects_56191c9c82.svg"}
              alt="/uploads/Objects_56191c9c82.svg"
            />
            <div className="ml-4">{lang.content[0]}</div>
          </div>
          <div className="lg:relative shadow-1  flex items-center py-3 px-5 bg-white ease-out transition-all  duration-150 hover:scale-110 hover:bg-[#F0F5FF] rounded-xl">
            <EzImage
              width={32}
              height={32}
              quality={100}
              src={"/uploads/Objects_56191c9c82.svg"}
              alt="/uploads/Objects_56191c9c82.svg"
            />
            <div className="ml-4">{lang.content[1]}</div>
          </div>
          <div className="lg:relative shadow-1  flex items-center py-3 px-5 bg-white ease-out transition-all  duration-150 hover:scale-110 hover:bg-[#F0F5FF] rounded-xl">
            <EzImage
              width={32}
              height={32}
              quality={100}
              src={"/uploads/Objects_56191c9c82.svg"}
              alt="/uploads/Objects_56191c9c82.svg"
            />
            <div className="ml-4">{lang.content[2]}</div>
          </div>
          <div className="lg:relative shadow-1 flex items-center py-3 px-5 bg-white ease-out transition-all  duration-150 hover:scale-110 hover:bg-[#F0F5FF] rounded-xl">
            <EzImage
              width={32}
              height={32}
              quality={100}
              src={"/uploads/Objects_56191c9c82.svg"}
              alt="/uploads/Objects_56191c9c82.svg"
            />
            <div className="ml-4">{lang.content[3]}</div>
          </div>
          <div className="lg:relative shadow-1 flex  items-center py-3 px-5 bg-white ease-out transition-all  duration-150 hover:scale-110 hover:bg-[#F0F5FF] rounded-xl">
            <EzImage
              width={32}
              height={32}
              quality={100}
              src={"/uploads/Objects_56191c9c82.svg"}
              alt="/uploads/Objects_56191c9c82.svg"
            />
            <div className="ml-4">{lang.content[4]}</div>
          </div>
          <div className="lg:relative shadow-1 flex  items-center py-3 px-5 bg-white ease-out transition-all  duration-150 hover:scale-110 hover:bg-[#F0F5FF] rounded-xl">
            <EzImage
              width={32}
              height={32}
              quality={100}
              src={"/uploads/Objects_56191c9c82.svg"}
              alt="/uploads/Objects_56191c9c82.svg"
            />
            <div className="ml-4">{lang.content[5]}</div>
          </div>
          <div className="lg:relative shadow-1 flex  items-center py-3 px-5 bg-white ease-out transition-all  duration-150 hover:scale-110 hover:bg-[#F0F5FF] rounded-xl">
            <EzImage
              width={32}
              height={32}
              quality={100}
              src={"/uploads/Objects_56191c9c82.svg"}
              alt="/uploads/Objects_56191c9c82.svg"
            />
            <div className="ml-4">{lang.content[6]}</div>
          </div>
        </div>
        <div className="lg:hidden">
          <EzImage
            src={"/uploads/aaaa_6cb19212b3.png"}
            alt="aaa"
            width={600}
            height={600}
            quality={100}
            className="mx-auto"
          />
        </div>
        <div className="lg:hidden grid gap-4 bg-white mx-auto rounded-lg p-4 mt-6 shadow-1">
          {lang.content.map((value: any, index: number) => (
            <div key={index} className="flex">
              <EzImage
                width={24}
                height={24}
                quality={100}
                src={"/uploads/Objects_56191c9c82.svg"}
                alt="/uploads/Objects_56191c9c82.svg"
              />
              <div className="ml-3">{value}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Challenges;

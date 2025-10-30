import EzImage from "../commons/EzImage";

const OnAverage = ({ lang }: any) => {
  return (
    <div>
      <div className="flex w-full  lg:h-[240px] h-max">
        <div className="flex-1 bg-[linear-gradient(280deg,_#AA0606_-53.09%,_#00194F_66.62%)] "></div> 
        <div className="lg:w-[72%] w-[79%] bg-[url(https://strapi-efex.ichiba.net/uploads/61_3_3cd6672d4b.png)] bg-center bg-cover ">
            <div className="font-bold text-[18px] lg:text-[30px] text-white text-left py-8 lg:py-0 pl-[48px] pr-[16px] lg:mt-[80px] lg:pl-[232px]">{lang}</div>
        </div>
      </div>
      <div className="relative lg:container h-0 top-[-45px] lg:top-[-98px]">
        <div className="absolute lg:left-[7%] left-[9%] ">
          <EzImage
            src={"/uploads/EFEX_5031bd3696.svg"}
            alt=""
            width={186}
            height={176}
            className="w-[84px] h-[84px] lg:w-[186px] lg:h-[176px]"
          />
        </div>
      </div>
    </div>
  );
};
export default OnAverage;

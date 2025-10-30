import EzImage from "@/components/commons/EzImage";
import { removeAccent } from "@/utils/ultils";
import { faArrowRight, faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const Ecomm = ({ lang, params }: { lang: any; params: any }) => {
  const link =
    params === "en"
      ? "https://www.youtube.com/watch?v=livRERkh1Y4"
      : "https://www.youtube.com/watch?v=W1OaMmE9B98";
  return (
    <div
      className="mt-[80px] py-6 lg:pb-[60px] lg:pt-0 px-4 lg:px-0 scroll-m-[124px]"
      id={removeAccent(lang?.label)}
    >
      <div className="container">
        <div className="flex justify-between">
          <h3 className="text-[18px] lg:text-[24px] font-bold ">
            {lang?.heading}
          </h3>
          <Link
            className=" w-max rounded-[8px] text-sm bg-contact text-white py-2 px-3 lg:px-5 hover:bg-[#A30505] lg:block hidden"
            href={params === 'en' ? 'https://efex.vn/en/blog/ecommerce-order-fulfillment-guide' : 'https://efex.vn/vi/blog/e-fulfillment-la-gi'}
          >
            {lang.viewMore}{" "}
            <FontAwesomeIcon
              icon={faArrowRight}
              className="ml-2"
              width={24}
              height={24}
            />
          </Link>
        </div>
        <div className="grid lg:grid-cols-3 lg:gap-8 gap-3 lg:mt-7 mt-5">
          {lang?.items?.map((value: any, index: number) => (
            <div
              className="border border-[#F2F2F2] rounded-xl lg:py-5 lg:px-6 py-3 px-4"
              key={index}
            >
              <EzImage
                src={value.img}
                alt={value.img}
                width={60}
                height={48}
                className="lg:w-15 w-10 lg:h-12 h-8"
              />
              <div className="lg:mt-5 mt-3 lg:text-base text-sm">
                {value.content}
              </div>
            </div>
          ))}
        </div>
        <Link
          className="mt-5 w-max rounded-[8px] text-sm bg-contact text-white py-2 px-3 lg:px-5 hover:bg-[#A30505] lg:hidden block"
          href={params === 'en' ? 'https://efex.vn/en/blog/ecommerce-fulfillment-guide' : 'https://efex.vn/vi/blog/e-fulfillment-la-gi'}
        >
          {lang.viewMore}{" "}
          <FontAwesomeIcon
            icon={faArrowRight}
            className="ml-2"
            width={24}
            height={24}
          />
        </Link>
      </div>
      <div className="lg:flex lg:container lg:justify-between lg:items-center lg:mt-16 mt-6">
        <div className="lg:px-[36px] lg:py-[82px] rounded-2xl bg-[linear-gradient(136deg,_rgba(193,_222,_255,_0.26)_0%,_rgba(203,_202,_248,_0.49)_100%)] lg:block hidden">
          <EzImage
            src={"/uploads/Image_b37f7165fb.png"}
            alt=""
            width={494}
            height={353}
            className="xl:max-w-[494px] lg:max-w-[293px]"
          />
        </div>
        <div className="lg:max-w-[575px]">
          <div className="px-3 py-1 rounded-[20px] text-[14px] bg-[#E6F3FF] w-max text-brand-secondary">
            {lang?.tag}
          </div>
          <h3 className="mt-2 lg:my-4 text-[18px] lg:text-[24px] font-bold">
            {lang?.title}
          </h3>
          <div className="border-b border-[#af000033] pb-4 lg:pb-10 ">
            <div className="text-[14px]">
              <span>{lang?.subtitle[0]}</span>
              <Link href={link} className="text-contact underline mr-1">
                {lang?.subtitle[1]}
              </Link>
              <span className="text-[#0F62FE] uppercase">
                {lang?.subtitle[2]}
              </span>
              <span>{lang?.subtitle[3]}</span>
            </div>
            <div className="text-[14px] mt-5">{lang?.subtitle2}</div>
          </div>
          <div className="py-4 lg:pt-10 lg:grid lg:grid-cols-2 lg:gap-y-6 lg:max-w-[508px]">
            {lang?.content?.map((value: any, index: number) => (
              <div className="flex items-center" key={index}>
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  style={{ color: "#0F62FE" }}
                  className="p-1 w-[20px] h-[20px] lg:w-[28px] lg:h-[28px]"
                />
                <div className="ml-1 lg:ml-3 text-[14px] lg:text-base">
                  {value}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="px-[20px] py-[50px] rounded-xl bg-[linear-gradient(136deg,_rgba(193,_222,_255,_0.26)_0%,_rgba(203,_202,_248,_0.49)_100%)] lg:hidden">
          <EzImage
            src={"/uploads/Image_b37f7165fb.png"}
            alt=""
            width={494}
            height={353}
          />
        </div>
      </div>
    </div>
  );
};
export default Ecomm;

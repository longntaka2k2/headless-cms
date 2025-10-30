"use client";
import EzImage from "../commons/EzImage";
import { usePathname } from "next/navigation";

const GlobalShipping = ({ lang }: any) => {
    const locale = usePathname().slice(1, 3);

    return (
        <section className="pt-10 pb-14 w-full h-full"
            style={{
                backgroundImage:
                    `url(https://strapi-ezbuy.ichiba.net/uploads/Proxy_Payment_224b37f689.png)`,
            }}
        >
            <div className="container">
                <div className="self-stretch w-[85%] mx-auto">
                    <h1 className="text-xl lg:text-4xl font-black text-center pb-1 uppercase">
                        {lang.crossBorderShipping.heading}
                    </h1>
                    <p className="text-base text-center">{lang.crossBorderShipping.subHeading}</p>
                </div>

                <div className="container px-10 lg:px-32 pb-14 rounded-[20px] bg-gradient-to-t from-white">
                    <div className="relative">
                        <EzImage
                            src="/uploads/Map_1_e6fbaad5ab.png"
                            alt="/uploads/Map_1_e6fbaad5ab.png"
                            width={1070}
                            height={618}
                            className="max-w-[1070px] max-h-[618px] w-full h-full"
                        />
                        <div className="absolute bottom-0 
                                    flex gap-7 items-end justify-center">
                            <div className="hidden xl:block">
                                <EzImage
                                    src="/uploads/Group_64f5e76c2b.svg"
                                    alt="/uploads/Group_64f5e76c2b.svg"
                                    width={123}
                                    height={40}
                                    className="max-w-[123px] max-h-[40px] w-full h-full"
                                />
                            </div>
                            <div>
                                <div className="flex items-end lg:items-center justify-center">
                                    <div className=" hidden sm:block">
                                        <EzImage
                                            src="/uploads/dec52dae_a315_4bf9_a7e8_b4de93057545_1_01c735d732.png"
                                            alt="/uploads/dec52dae_a315_4bf9_a7e8_b4de93057545_1_01c735d732.png"
                                            width={308}
                                            height={286}
                                            className="max-w-[150px] max-h-[120px] lg:max-w-[308px] lg:max-h-[286px] w-full h-full"
                                        />
                                    </div>
                                    <div className="bg-gradient-to-r from-[#FFFFFFE5] to-[#F3F5F7B2] 
                                                py-4 px-5 rounded-2xl max-h-[220px]">
                                        <div className="flex gap-3 justify-between items-end">
                                            <EzImage
                                                src="/uploads/Group_d35e679cc7.svg"
                                                alt="/uploads/Group_d35e679cc7.svg"
                                                width={40}
                                                height={40}
                                                className="max-w-[25px] max-h-[25px] 
                                                        lg:max-w-[40px] lg:max-h-[40px] w-full h-full"
                                            />

                                            <EzImage
                                                src="/uploads/Group_1_ae80003588.svg"
                                                alt="/uploads/Group_1_ae80003588.svg"
                                                width={80}
                                                height={80}
                                                className="max-w-[30px] max-w-[30px] 
                                                        lg:max-w-[80px] lg:max-h-[80px] w-full h-full"
                                            />

                                            <EzImage
                                                src="/uploads/Group_9dd84f6dbd.svg"
                                                alt="/uploads/Group_9dd84f6dbd.svg"
                                                width={40}
                                                height={40}
                                                className="max-w-[25px] max-h-[25px] 
                                                        lg:max-w-[40px] lg:max-h-[40px] w-full h-full"
                                            />
                                        </div>
                                        <div className="flex items-end gap-3 my-4">
                                            <div className="w-[24px] h-[13px] sm:h-[24px] lg:w-[24px] lg:h-[24px] border-2 border-[#AF0000] text-[9px] lg:text-xs
                                                        rounded-full bg-[#fff] text-[#AF0000] font-bold
                                                        flex items-center justify-center" >
                                                1
                                            </div>
                                            <div>
                                                <p className="text-[9px] lg:text-[10px] text-center">Shipping within Japan</p>
                                                <EzImage
                                                    src="/uploads/Vector_500_512a3c6e7b.svg"
                                                    alt="/uploads/Vector_500_512a3c6e7b.svg"
                                                    width={170}
                                                    height={40}
                                                    className="max-w-[170px] max-h-[40px] w-full h-full"
                                                />
                                            </div>
                                            <div className="w-[24px] h-[13px] sm:h-[24px] lg:w-[24px] lg:h-[24px] border-2 border-[#AF0000] text-[9px] lg:text-xs
                                                        rounded-full bg-[#fff] text-[#AF0000] font-bold
                                                        flex items-center justify-center" >
                                                2
                                            </div>
                                            <div>
                                                <p className="text-[9px] lg:text-[10px] text-center">Shipping cross-border</p>
                                                <EzImage
                                                    src="/uploads/Vector_500_512a3c6e7b.svg"
                                                    alt="/uploads/Vector_500_512a3c6e7b.svg"
                                                    width={170}
                                                    height={40}
                                                    className="max-w-[170px] max-h-[40px] w-full h-full"
                                                />
                                            </div>
                                            <div className="w-[24px] h-[13px] sm:h-[24px] lg:w-[24px] lg:h-[24px] border-2 border-[#AF0000] text-[9px] lg:text-xs
                                                        rounded-full bg-[#fff] text-[#AF0000] font-bold
                                                        flex items-center justify-center" >
                                                3
                                            </div>
                                        </div>
                                        <div className="flex gap-1 text-center justify-between">
                                            <p className="text-[9px] sm:text-[10px] lg:text-xs text-[#AF0000] font-bold">
                                                Japanese products
                                            </p>
                                            <div className="w-[24px] h-[24px] lg:bg-[#B3D7FF] rounded-full
                                                        flex items-center justify-center">
                                                <EzImage
                                                    src="/uploads/Group_11b6321c2f.svg"
                                                    alt="/uploads/Group_11b6321c2f.svg"
                                                    width={20}
                                                    height={20}
                                                    className="max-w-[20px] max-h-[20px] w-full h-full"
                                                />
                                            </div>
                                            <p className="text-[9px] sm:text-[10px] lg:text-xs text-[#AF0000] font-bold">
                                                Ezbuy Japan’s Warehouse
                                            </p>
                                            <div className="w-[24px] h-[24px] lg:bg-[#B3D7FF] rounded-full
                                                        flex items-center justify-center">
                                                <EzImage
                                                    src="/uploads/Group_061f4482c9.svg"
                                                    alt="/uploads/Group_061f4482c9.svg"
                                                    width={20}
                                                    height={20}
                                                    className="max-w-[20px] max-h-[20px] w-full h-full"
                                                />
                                            </div>
                                            <p className="text-[9px] sm:text-[10px] lg:text-xs text-[#AF0000] font-bold">
                                                International customers
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full h-1 rounded block
                                        bg-gradient-to-r from-[#00194F] to-[#AF0000]">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid lg:grid-cols-2 gap-10 py-7">
                        <p className="text-base lg:text-lg">
                            <span className="font-bold">{lang.crossBorderShipping.globalShippng}</span>
                            {lang.crossBorderShipping.globalShippngSub}
                        </p>
                        <p className="text-sm lg:text-base">
                            {lang.crossBorderShipping.receiveYourItems}
                        </p>
                    </div>

                    <div className="flex justify-end">
                        <a href={`/${locale}/proxy-payment`}>
                            <button
                                className="cursor-pointer text-sm lg:text-base bg-[#B81010] py-2 px-8 lg:py-3.5 lg:px-12 text-white"
                            // onClick={() => submit()}
                            >
                                {lang.crossBorderShipping.buttonText}
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default GlobalShipping;
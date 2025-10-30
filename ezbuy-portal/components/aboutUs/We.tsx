"use client";
import Image from "next/image";
import Link from "next/link";
import { Element, Link as LinkScroll } from "react-scroll";
import { useWindowSize } from "usehooks-ts";

const We = ({ aboutUs }: { aboutUs: any }) => {
  const screen = useWindowSize();
  const checkWidthScreen = screen.width < 1024;

  return (
    <div id="whoWeAre" className="pt-10 lg:pt-0 lg:mt-20">
      <div className="flex lg:justify-center">
        <div className="container">
          <div className="px-4  lg:px-0 flex flex-col lg:items-center">
            <p className="uppercase text-[28px] lg:text-4xl font-black leading-42 lg:leading-54 text-gray-10">
              {aboutUs.whoWeAre}
            </p>
            <div className="flex flex-col w-full">
              <p className="font-normal text-base text-gray-10 leading-21 mt-4">
                <span className="font-bold">{aboutUs.contentWhoWeAre1[0]}</span>
                {aboutUs.contentWhoWeAre1[1]}
              </p>
              <p className="font-normal text-base text-gray-10 leading-21 mt-2">
                {aboutUs.contentWhoWeAre2}
              </p>
              <p className="font-normal text-base text-gray-10 leading-21 mt-2">
                {aboutUs.contentWhoWeAre3}
              </p>
              {aboutUs.contentWhoWeAre4 != "" && (
                <p className="font-normal text-base text-gray-10 leading-21 mt-2">
                  {aboutUs.contentWhoWeAre4}
                </p>
              )}
            </div>
          </div>
          <div className="mt-10 lg:mt-16">
            {checkWidthScreen ? (
              <Image
                className="w-full h-full"
                alt="GeneralInformation"
                src={
                  "https://strapi-ezbuy.ichiba.net/uploads/Rectangle_2_2_ea4cbfc9ac.webp"
                }
                height={170}
                width={500}
              />
            ) : (
              <Image
                className="w-full h-full"
                alt="GeneralInformation"
                src={
                  "https://strapi-ezbuy.ichiba.net/uploads/Frame_19193_b0841cd74d.webp"
                }
                height={400}
                width={1248}
              />
            )}

            <div className="bg-white shadow-1 mx-4 relative mt-[-45px] lg:mt-[-100px] lg:mx-auto lg:max-w-[712px]">
              <div className="p-6 lg:p-8">
                <p className="text-lg text-black font-bold leading-27 uppercase">
                  {aboutUs.generalInformation}
                </p>
                <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-6">
                  <div className="mt-4">
                    <p className="text-sm font-normal leading-21 text-[#595959]">{`${aboutUs.tradingName}:`}</p>
                    <p className="mt-1 text-[#262626] text-sm font-medium leading-21 uppercase">
                      {aboutUs.contentTradingName}
                    </p>
                  </div>
                  <div className="mt-4">
                    <p className="text-sm font-normal leading-21 text-[#595959]">{`${aboutUs.address}:`}</p>
                    <p className="mt-1 text-[#262626] text-sm font-medium leading-21 uppercase">
                      {aboutUs.contentAddress}
                    </p>
                  </div>
                  <div className="mt-4">
                    <p className="text-sm font-normal leading-21 text-[#595959]">{`${aboutUs.certificateOfBusinessRegistrationNo}:`}</p>
                    <p className="mt-1 text-[#262626] text-sm font-medium leading-21 uppercase">
                      0115 - 01 - 026853
                    </p>
                  </div>
                  {/* <div className="mt-4">
                    <p className="text-sm font-normal leading-21 text-[#595959]">{`${aboutUs.officeInVietnam}:`}</p>
                    <p className="mt-1 text-[#262626] text-sm font-medium leading-21 uppercase">
                      {aboutUs.contentOfficeInVietnam}
                    </p>
                  </div> */}
                  <div className="mt-4">
                    <p className="text-sm font-normal leading-21 text-[#595959]">{`${aboutUs.ownersCharterCapital}:`}</p>
                    <p className="mt-1 text-[#262626] text-sm font-medium leading-21 uppercase">
                      {aboutUs.contentOwnersCharterCapital}
                    </p>
                  </div>
                  <div className="mt-4">
                    <p className="text-sm font-normal leading-21 text-[#595959]">{`${aboutUs.postcode}:`}</p>
                    <p className="mt-1 text-[#262626] text-sm font-medium leading-21 uppercase">
                      {aboutUs.contentPostcode}
                    </p>
                  </div>
                  <div className="mt-4">
                    <p className="text-sm font-normal leading-21 text-[#595959]">{`${aboutUs.website}:`}</p>
                    <Link
                      target="_blank"
                      href={"/"}
                      className="mt-1 text-[#262626] text-sm font-medium leading-21 uppercase"
                    >
                      https://ezbuy.jp
                    </Link>
                  </div>
                </div>
              </div>
              <Image
                className="w-full"
                alt="FooterGeneralInformation"
                src={
                  "https://strapi-ezbuy.ichiba.net/uploads/Group_17_1_3fe8667138.webp"
                }
                height={56}
                width={500}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-14 lg:mt-[120px] flex lg:justify-center md:mx-4">
        <div className="container">
          {checkWidthScreen ? (
            <Image
              className="w-full"
              alt="FooterGeneralInformation"
              src={
                "https://strapi-ezbuy.ichiba.net/uploads/Rectangle_3_b315f6e69e.webp"
              }
              height={170}
              width={500}
            />
          ) : (
            <Image
              className="w-full"
              alt="FooterGeneralInformation"
              src={
                "https://strapi-ezbuy.ichiba.net/uploads/Rectangle_6548_45a194512b.webp"
              }
              height={440}
              width={1548}
            />
          )}
          <div className="px-4 lg:px-0 lg:mt-10">
            <div className="p-6 lg:p-0 flex flex-col lg:flex-row lg:justify-between">
              <div className="lg:w-[476px]">
                <p className="text-base lg:text-lg font-bold not-italic text-gray-10 leading-6 lg:leading-27">
                  {aboutUs.mission}
                </p>
                <p className="mt-2 lg:mt-3 text-sm font-normal not-italic text-gray-10 leading-21">
                  {aboutUs.contentMission}
                </p>
              </div>
              <div className="mt-6 lg:mt-0 lg:w-[476px] lg:ml-[124px]">
                <p className="text-base lg:text-lg font-bold not-italic text-gray-10 leading-6 lg:leading-27">
                  {aboutUs.vision}
                </p>
                <p className="mt-2 lg:mt-3 text-sm font-normal not-italic text-gray-10 leading-21">
                  {aboutUs.contentVision}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="mt-14 lg:mt-[120px] lg:min-h-[700px] 2xl:min-h-[916px] flex flex-col lg:flex-row lg:justify-center"
        style={{
          ...(!checkWidthScreen && {
            backgroundImage:
              "url(https://strapi-ezbuy.ichiba.net/uploads/Group_19608_9edb29413a.webp)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }),
        }}
      >
        <Image
          className="w-full lg:hidden"
          alt="Group_20_f6c3d48328"
          src={
            "https://strapi-ezbuy.ichiba.net/uploads/Group_20_f6c3d48328.webp"
          }
          height={320}
          width={671}
        />
        <div className="lg:relative container">
          <div className="relative lg:absolute mx-4 lg:mx-0 mt-[-150px] lg:mt-0 lg:top-[120px] lg:right-[0] bg-white shadow-1 p-6 lg:w-[676px]">
            <p className="text-xl lg:text-2xl font-bold not-italic uppercase leading-30 lg:leading-9 text-gray-10">
              {aboutUs.ceoStatement}
            </p>
            <div>
              <p className="mt-5 text-sm font-normal leading-21 text-gray-10">
                {aboutUs.statementContent1}
              </p>
              <p className="mt-5 text-sm font-normal leading-21 text-gray-10">
                {aboutUs.statementContent2}
              </p>
              <p className="mt-5 text-sm font-normal leading-21 text-gray-10">
                {aboutUs.statementContent3}
              </p>
            </div>
            <div className="flex justify-end mt-8">
              <div className="flex flex-col items-center w-[221px]">
                <p className="text-sm font-normal leading-21 text-gray-10">
                  {aboutUs.managingDirector}
                </p>
                <Image
                  className="w-auto h-auto"
                  alt="Group_20_f6c3d48328"
                  src={
                    "https://strapi-ezbuy.ichiba.net/uploads/photo_2024_11_28_17_06_07_37b6e66d92.jpg"
                  }
                  height={80}
                  width={122}
                />
                <p className="text-sm font-normal leading-21 text-gray-10">
                  Mr. Hidemi Urano
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default We;

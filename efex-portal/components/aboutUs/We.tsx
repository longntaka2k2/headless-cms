"use client";
import Image from "next/image";
import Link from "next/link";
import { Element } from "react-scroll";
import { useWindowSize } from "usehooks-ts";

const We = ({ aboutUs }: { aboutUs: any }) => {
  const screen = useWindowSize();
  return (
    <Element id="whoWeAre" name="whoWeAre" className="pt-10">
      <div className="px-4">
        <p className="uppercase text-[28px] font-black leading-42 text-gray-10">
          {aboutUs.whoWeAre}
        </p>
        <div>
          <p className="font-normal text-sm text-gray-10 leading-21 mt-4">
            {aboutUs.contentWhoWeAre1}
          </p>
          <p className="font-normal text-sm text-gray-10 leading-21 mt-2">
            {aboutUs.contentWhoWeAre2}
          </p>
          <p className="font-normal text-sm text-gray-10 leading-21 mt-2">
            {aboutUs.contentWhoWeAre3}
          </p>
        </div>
      </div>
      <div className="mt-10">
        <Image
          className="w-full"
          alt="GeneralInformation"
          src={
            screen.width < 1000
              ? "https://strapi-efex.ichiba.net/uploads/Rectangle_2_2_ea4cbfc9ac.webp"
              : "https://strapi-efex.ichiba.net/uploads/Frame_19193_9e408faa7d.webp"
          }
          height={170}
          width={500}
          quality={100}
        />
        <div className="bg-white shadow-1 mx-4 relative mt-[-45px]">
          <div className="p-6">
            <p className="text-lg text-black font-bold leading-27 uppercase">
              {aboutUs.generalInformation}
            </p>
            <div className="mt-4">
              <p className="text-sm font-normal leading-21 text-[#595959]">{`${aboutUs.tradingName}:`}</p>
              <p className="mt-1 text-[#262626] text-sm font-medium leading-21">
                {aboutUs.contentTradingName}
              </p>
            </div>
            <div className="mt-4">
              <p className="text-sm font-normal leading-21 text-[#595959]">{`${aboutUs.address}:`}</p>
              <p className="mt-1 text-[#262626] text-sm font-medium leading-21">
                {aboutUs.contentAddress}
              </p>
            </div>
            <div className="mt-4">
              <p className="text-sm font-normal leading-21 text-[#595959]">{`${aboutUs.certificateOfBusinessRegistrationNo}:`}</p>
              <p className="mt-1 text-[#262626] text-sm font-medium leading-21">
                0115 - 01 - 026853
              </p>
            </div>
            <div className="mt-4">
              <p className="text-sm font-normal leading-21 text-[#595959]">{`${aboutUs.officeInVietnam}:`}</p>
              <p className="mt-1 text-[#262626] text-sm font-medium leading-21">
                {aboutUs.contentOfficeInVietnam}
              </p>
            </div>
            <div className="mt-4">
              <p className="text-sm font-normal leading-21 text-[#595959]">{`${aboutUs.ownersCharterCapital}:`}</p>
              <p className="mt-1 text-[#262626] text-sm font-medium leading-21">
                {aboutUs.contentOwnersCharterCapital}
              </p>
            </div>
            <div className="mt-4">
              <p className="text-sm font-normal leading-21 text-[#595959]">{`${aboutUs.postcode}:`}</p>
              <p className="mt-1 text-[#262626] text-sm font-medium leading-21">
                {aboutUs.contentPostcode}
              </p>
            </div>
            <div className="mt-4">
              <p className="text-sm font-normal leading-21 text-[#595959]">{`${aboutUs.website}:`}</p>
              <Link
                target="_blank"
                rel="canonical"
                href={"https://efex.jp"}
                className="mt-1 text-[#262626] text-sm font-medium leading-21"
              >
                https://efex.jp
              </Link>
            </div>
          </div>
          <Image
            className="w-full"
            alt="FooterGeneralInformation"
            src={
              "https://strapi-efex.ichiba.net/uploads/Group_17_1_3fe8667138.webp"
            }
            height={56}
            width={500}
            quality={100}
          />
        </div>
      </div>
      <div className="mt-14">
        <Image
          className="w-full"
          alt="FooterGeneralInformation"
          src={
            "https://strapi-efex.ichiba.net/uploads/Rectangle_3_b315f6e69e.webp"
          }
          height={170}
          width={500}
          quality={100}
        />
        <div className="px-4">
          <div className="p-6">
            <div>
              <p className="text-base font-bold not-italic text-gray-10 leading-6">
                {aboutUs.mission}
              </p>
              <p className="mt-2 text-sm font-normal not-italic text-gray-10 leading-21">
                {aboutUs.contentMission}
              </p>
            </div>
            <div className="mt-6">
              <p className="text-base font-bold not-italic text-gray-10 leading-6">
                {aboutUs.vision}
              </p>
              <p className="mt-2 text-sm font-normal not-italic text-gray-10 leading-21">
                {aboutUs.contentVision}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-14">
        <Image
          className="w-full"
          alt="Group_20_f6c3d48328"
          src={
            "https://strapi-efex.ichiba.net/uploads/Group_20_f6c3d48328.webp"
          }
          height={320}
          width={671}
          quality={100}
        />
        <div className="relative mx-4 mt-[-150px] bg-white shadow-1 p-6">
          <p className="text-xl font-bold not-italic uppercase leading-30 text-gray-10">
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
                  "https://strapi-efex.ichiba.net/uploads/Screen_Shot_2023_07_29_at_5_41_1_b5571cd6dd.webp"
                }
                height={80}
                width={122}
                quality={100}
              />
              <p className="text-sm font-normal leading-21 text-gray-10">
                Mr. Lex Le
              </p>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
};
export default We;

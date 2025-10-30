import checked from "@/public/images/icons/solutions/checked.svg";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Script from "next/script";

const Promise = ({ lang, params }: { lang: any; params: any }) => {
  const contents = [
    lang.setup,
    lang.software,
    lang.hiddenFee,
    lang.onboarding,
    lang.receiving,
    lang.minimumVolume,
  ];

  return (
    <>
      <section className="container text-white px-4 pt-6 pb-8 lg:py-10 lg:mt-4">
        {/**mobile */}
        <div className="relative rounded-xl px-4 pt-5 pb-7 bg-[#122244] overflow-hidden lg:hidden">
          <h2 className="relative z-10 text-xl font-bold">
            {lang.title1} <br />
            {lang.title2}
          </h2>
          <Link
            id="EcomfulfillmentContactButton"
            href={`/${params.lang}/contact-sales`}
            target="_blank"
            className="relative z-10 w-fit mt-5 rounded-lg bg-brand-primary px-3 py-2 flex justify-center items-center text-sm font-medium"
          >
            {lang.contactUs}
          </Link>
          <div className="relative z-10 mt-5 p-4 pt-3 rounded-xl bg-[rgba(28,51,100,0.70)]">
            <p className="font-bold">{lang.wePromise}</p>
            <ul className="mt-4 flex flex-col gap-3">
              {contents.map((item, index) => (
                <li key={index} className="flex items-center gap-1">
                  <div className="">
                    <Image
                      src={checked}
                      alt="Checked"
                      className="w-5 h-5"
                      quality={100}
                    ></Image>
                  </div>
                  <p className="text-sm">{item}</p>
                </li>
              ))}
            </ul>
          </div>
          <Image
            src="https://strapi-efex.ichiba.net/uploads/Group_19603_36ad13824d.svg"
            alt=""
            width={136}
            height={86}
            className="absolute top-0 left-0 -z-0"
            quality={100}
          />
          <Image
            src="https://strapi-efex.ichiba.net/uploads/Group_19604_172a6fc98b.svg"
            alt=""
            width={157}
            height={230}
            className="absolute bottom-0 right-0 -z-0"
            quality={100}
          />
        </div>

        {/**desktop */}
        <div className="h-[361px] relative rounded-xl bg-[#122244] hidden lg:flex overflow-hidden justify-between items-center">
          <div className="ml-[97px]">
            <h2 className="relative z-10 text-3xl leading-[38px] font-bold max-w-sm">
              {lang.title1} <br />
              {lang.title2}
            </h2>
            <Link
              id="EcomfulfillmentContactButton"
              href={`/${params.lang}/contact-sales`}
              target="_blank"
              className="mt-[34px] z-10 w-[200px] rounded-lg bg-brand-primary p-3 flex justify-center items-center text-sm font-medium hover:bg-brand-primary-active transition-all"
            >
              {lang.contactUs}
            </Link>
          </div>
          <div className="relative z-10 mr-[69px] px-10 pt-6 pb-7 w-[495px] h-fit rounded-xl bg-[rgba(28,51,100,0.70)]">
            <p className="text-xl font-bold">{lang.wePromise}</p>
            <ul
              className={clsx(
                "mt-5 grid grid-rows-3 grid-flow-col",
                params.lang === "vi" ? "gap-x-9" : "gap-y-5 gap-x-20"
              )}
            >
              {contents.map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <Image src={checked} alt="Checked"></Image>
                  <p>{item}</p>
                </li>
              ))}
            </ul>
          </div>
          <Image
            src="https://strapi-efex.ichiba.net/uploads/promise_1_lg_33582d8ff2.svg"
            alt=""
            width={281}
            height={201}
            className="absolute top-0 left-0 -z-0"
            quality={100}
          />
          <Image
            src="https://strapi-efex.ichiba.net/uploads/promise_2_lg_c66eb34ecd.svg"
            alt=""
            width={317}
            height={361}
            className="absolute bottom-0 right-0 -z-0"
            quality={100}
          />
        </div>
      </section>
      <script
        dangerouslySetInnerHTML={{
          __html: `
          document.getElementById('EcomfulfillmentContactButton').addEventListener('click', function() {
            fbq('track', 'Ecomfulfillment_Contact_Button');
          });
        `,
        }}
      />
    </>
  );
};

export default Promise;

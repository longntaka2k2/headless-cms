import EzImage from "@/components/commons/EzImage";
import Link from "next/link";
import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import Script from "next/script";

const CustomClearance = ({ lang, locale }: any) => {
  return (
    <>
      <section className="relative  overflow-hidden px-4 pt-6 pb-7">
        <div
          className={clsx(
            "xl:absolute z-10 top-0 left-0 right-0 bottom-0",
            "container xl:px-0 w-full xl:h-full xl:flex xl:items-center"
          )}
        >
          <div className="xl:w-[40%]">
            <h2 className="font-bold text-2xl xl:text-4xl mb-2">
              {lang.heading}
            </h2>
            <p className="text-sm xl:text-lg mb-4 xl:mb-6">{lang.subHeading}</p>
            <Link
              role="button"
              id="CrossBorderShippingContactButton"
              href={`/${locale}/contact-sales`}
              target="_blank"
              className={clsx(
                "block",
                "px-5 lg:px-3 mb-6 py-[14px] w-fit lg:w-[160px]",
                "text-sm xl:text-base text-center text-white font-medium",
                "bg-brand-primary hover:to-brand-primary-active rounded-lg"
              )}
            >
              {lang.cta}
            </Link>
          </div>
        </div>
        <div
          className={clsx(
            "relative xl:w-[55%] 3xl:w-[954px] xl:ml-auto",
            "flex flex-col xl:flex-row items-center"
          )}
        >
          <div
            className={clsx(
              "relative",
              "rounded-2xl bg-[#001033] px-4 py-6 xl:p-10",
              "text-white mr-4 xl:-mr-12 xl:h-fit xl:mb-4"
            )}
          >
            <p className="font-bold text-lg xl:text-2xl mb-4 xl:mb-7">
              {lang.heading2}
            </p>
            <div className="flex flex-col gap-2 xl:gap-4 ">
              {lang.contents.map((x: any, idx: number) => (
                <div key={idx} className="flex items-center gap-4 ">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    size="sm"
                    className=" bg-brand-primary rounded-full"
                  />
                  <p className="text-sm xl:text-lg">{x}</p>
                </div>
              ))}
            </div>
          </div>
          <EzImage
            src={"/uploads/shutterstock_2200408077_1_53922a585a.png"}
            className="rounded-2xl -mt-10 pl-4 xl:my-12 xl:pl-0 xl:mb-4"
            width={538}
            height={572}
            alt=""
          />
        </div>
        <EzImage
          src={"/uploads/Handle_652a94bddf.svg"}
          className={clsx(
            "absolute top-0 left-[35%] -z-1 w-[822px] h-[298px]",
            "xl:bottom-8 xl:top-[52%] xl:left-[40%]"
          )}
          alt=""
          width="822"
          height={298}
        />
      </section>

      <script
        dangerouslySetInnerHTML={{
          __html: `
          document.getElementById('CrossBorderShippingContactButton').addEventListener('click', function() {
            fbq('track', 'CrossBorderShipping_Contact_Button');
          });
        `,
        }}
      />
    </>
  );
};

export default CustomClearance;

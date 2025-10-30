import { getDictionary } from "@/app/getDictionary";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import EzImage from "@/components/commons/EzImage";
import Script from "next/script";

const Banner = async ({ params }: { params: any }) => {
  const { xBorderShippin } = await getDictionary(
    params?.lang ? params?.lang : "en"
  );

  return (
    <>
      <section
        className={clsx(
          "relative",
          "flex flex-col lg:flex-row  overflow-hidden ",
          "px-4 py-6 lg:px-0 lg:py-10"
        )}
      >
        <div
          className={clsx(
            "lg:absolute top-0 bottom-0 right-0 left-0 z-10",
            "flex flex-col lg:flex-row lg:justify-between gap-6 lg:gap-0",
            "container"
          )}
        >
          <div className="lg:w-1/2 flex  flex-col  justify-center">
            <h1 className="font-bold text-2xl lg:text-5xl pb-4 lg:pb-6 [text-shadow:#FFFFFF_1px_0_10px]">
              {xBorderShippin.banner.heading[0]}{" "}
              <span className="text-brand-primary">
                {xBorderShippin.banner.heading[1]}
              </span>{" "}
              {xBorderShippin.banner.heading[2]}
            </h1>
            <p className="text-sm lg:text-base pb-6 lg:pb-10">
              {xBorderShippin.banner.subHeading}
            </p>
            <Link
              role="button"
              id="CrossBorderShippingContactButton"
              href={`/${params?.lang}/contact-sales`}
              target="_blank"
              className={clsx(
                "block",
                "px-6 py-[14px] w-fit lg:w-[200px]",
                "text-sm lg:text-base text-center text-white font-medium",
                "bg-brand-primary hover:to-brand-primary-active rounded-lg "
              )}
            >
              {xBorderShippin.banner.cta}
            </Link>
          </div>
        </div>
        <EzImage
          src={"/uploads/Frame_427318777_1_c5d3073c35.png"}
          className={clsx(
            "relative lg:block -right-[10%] lg:right-0",
            "lg:ml-auto xl:w-[1050px] xl:h-[710px] lg:max-w-[75vw] lg:max-h-[70vh] ml-auto w-full lg:-mr-[8%] lg:-mt-[8%]"
          )}
          alt=""
          width={1338}
          height={1017}
          quality={100}
          unoptimized
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
export default Banner;

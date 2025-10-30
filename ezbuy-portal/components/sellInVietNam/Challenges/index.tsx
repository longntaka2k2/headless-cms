import clsx from "clsx";
import iconlanguageBarrier from "@/public/images/services/siv/v2/languageBarrier.svg";
import iconCulture from "@/public/images/services/siv/v2/cultureDiff.svg";
import iconLegal from "@/public/images/services/siv/v2/legal.svg";
import iconFulfillment from "@/public/images/services/siv/v2/fulfillment.svg";
import iconDelivery from "@/public/images/services/siv/v2/delivery.svg";
import iconCustomer from "@/public/images/services/siv/v2/customer.svg";
import EzImage from "@/components/commons/EzImage";
import breakLineTop from "@/public/images/services/siv/v2/breakline_top.svg";
import breakLineBottom from "@/public/images/services/siv/v2/breakline_bottom.svg";

const Challenges = ({ lang, locale }: { lang: any; locale: string }) => {
  const icons = [
    iconlanguageBarrier,
    iconCulture,
    iconLegal,
    iconFulfillment,
    iconDelivery,
    iconCustomer,
  ];
  return (
    <section
      className={clsx(
        "relative py-10 lg:py-20",
        "bg-[url('https://strapi-ezbuy.ichiba.net/uploads/Ship_strategically_1_2cbdc281ab.png')]",
        "lg:bg-[url('https://strapi-ezbuy.ichiba.net/uploads/Ship_strategically_68cdbb227c.png')]",
        "bg-cover bg-no-repeat mb-7"
      )}
    >
      <EzImage
        src={breakLineTop}
        alt="brLine"
        className="absolute left-1/2 top-0 -translate-x-1/2"
      />
      <EzImage
        src={breakLineBottom}
        alt="brLine"
        className="absolute left-1/2 top-[100%] -translate-x-1/2"
      />
      <div
        className={clsx(
          "flex flex-col lg:flex-row items-center gap-6 lg:gap-20",
          "container px-4 lg:px-0"
        )}
      >
        <div className="text-white lg:flex-1">
          <h2 className="text-2xl lg:text-4xl font-black mb-2 lg:leading-[48px] uppercase">
            {lang.heading}
          </h2>
          <p className="text-sm lg:text-base">{lang.subHeading}</p>
        </div>
        <div className="grid grid-cols-2 gap-4 lg:gap-x-6 ">
          {icons.map((x, idx) => (
            <div
              key={idx}
              className={clsx(
                "flex flex-col lg:flex-row items-center gap-4",
                "px-4 py-5 lg:p-6 rounded-xl",
                "bg-[#FFE1DE] hover:bg-white lg:w-[340px]"
              )}
            >
              <EzImage src={x} alt="Icon" width={32} height={32} className="" />
              <p className="font-medium text-sm lg:text-base lg:whitespace-nowrap text-brand-secondary  text-center">
                {lang.contents[idx]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Challenges;

import clsx from "clsx";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { Element } from "react-scroll";
import iconSecurity from "@/public/images/aboutUs/trustSecurity/security.svg";
import iconDataPrivacy from "@/public/images/aboutUs/trustSecurity/dataPrivacy.svg";
import iconCompliance from "@/public/images/aboutUs/trustSecurity/compliance.svg";
import iconTransparency from "@/public/images/aboutUs/trustSecurity/transparency.svg";
import EzImage from "@/components/commons/EzImage";
const Card = ({
  icon,
  title,
  des,
}: {
  icon: StaticImport;
  title: string;
  des: string;
}) => {
  return (
    <div
      className={clsx(
        "flex flex-col lg:flex-row gap-4 lg:gap-7",
        "p-6 rounded-xl bg-opacity-[0.08] bg-white lg:justify-start items-start"
      )}
    >
      <EzImage src={icon} alt="icon" width={40} height={40} className="w-fit" />
      <div className="text-white">
        <h3 className="font-bold lg:text-lg text-base">{title}</h3>
        <p className="opacity-80 text-sm lg:text-base">{des}</p>
      </div>
    </div>
  );
};
const TrustSecurity = ({ lang }: any) => {
  const icons = [
    iconSecurity,
    iconDataPrivacy,
    iconCompliance,
    iconTransparency,
  ];
  const images = [
    {
      src: "/uploads/Frame_38cb62c1e4.png",
      width: 143,
      height: 59,
      className: "py-1 px-3 w-fit",
    },
    {
      src: "/uploads/Frame_1_e53a7aa601.png",
      width: 106,
      height: 54,
      className: "py-[6px] px-[30px] w-fit",
    },
    {
      src: "/uploads/Frame_2_68a757d386.png",
      width: 106,
      height: 54,
      className: "lg:w-fit my-auto",
    },
  ];
  return (
    <Element
      name="trust-security"
      className={clsx(
        " px-4 lg:px-0",
        " text-white bg-[#0F1B2D]",
        "bg-[url('https://strapi-efex.ichiba.net/uploads/Background_1_363c2b67fd.png')]",
        "lg:bg-[url('https://strapi-efex.ichiba.net/uploads/Background_dcea9c8c4b.png')]",
        "bg-cover bg-no-repeat "
      )}
    >
      <div className="container py-6 lg:py-15 ">
        <div className="text-center mb-6 lg:mb-10">
          <h2 className="mb-2 ">{lang.heading}</h2>
          <p className="lg:w-[830px] mx-auto text-sm lg:text-lg text-white text-opacity-80">
            {lang.subHeading}
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-5 mb-6 lg:mb-15">
          {icons.map((x, idx) => (
            <Card icon={x} {...lang.contents[idx]} key={idx} />
          ))}
        </div>
        <div>
          <h3 className="font-bold text-xl lg:text-2xl mb-3 lg:mb-4">
            {lang.subContent.heading}
          </h3>
          <div className="flex flex-col lg:flex-row gap-3 lg:gap-20">
            <div className="lg:w-[588px] text-opacity-8 text-sm lg:text-base">
              {lang.subContent.subHeading}
            </div>
            <div className="lg:flex-1 flex justify-between gap-4 max-w-[100vw]">
              {images.map((x, idx) => (
                <div key={idx} className={x.className}>
                  <EzImage
                    src={x.src}
                    alt="icon"
                    unoptimized
                    width={x.width}
                    height={x.height}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
};
export default TrustSecurity;

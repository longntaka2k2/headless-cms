import clsx from "clsx";
import EzImage from "../commons/EzImage";
import CustomizedPackagingIcon from "@/public/images/icons/services/warehouseFulfillment/CustomizedPackaging.svg";
import ProductLabelingBarcodingIcon from "@/public/images/icons/services/warehouseFulfillment/ProductLabelingBarcoding.svg";
import ProductRepackagingIcon from "@/public/images/icons/services/warehouseFulfillment/ProductRepackaging.svg";
import ReturnsProcessingRefurbishmentIcon from "@/public/images/icons/services/warehouseFulfillment/ReturnsProcessingRefurbishment.svg";

const contents = (lang: any) => [
  {
    img: ProductLabelingBarcodingIcon,
    ...lang?.services.warehouseFulfillment?.valueAdded.contents[0],
  },
  {
    img: CustomizedPackagingIcon,
    ...lang?.services.warehouseFulfillment?.valueAdded.contents[1],
  },
  {
    img: ProductRepackagingIcon,
    ...lang?.services.warehouseFulfillment?.valueAdded.contents[2],
  },
  {
    img: ReturnsProcessingRefurbishmentIcon,
    ...lang?.services.warehouseFulfillment?.valueAdded.contents[3],
  },
];
const ValueAdded = ({ lang }: any) => {
  return (
    <section className="py-14 lg:py-32 container">
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-center text-2xl lg:text-4xl font-black uppercase">
          {lang.services.warehouseFulfillment.valueAdded.heading}
        </h2>
        <p className="lg:w-1/2 text-center">
          {lang.services.warehouseFulfillment.valueAdded.subHeading}
        </p>
      </div>
      <div
        className={clsx(
          "pt-6 flex justify-between lg:gap-6 overflow-auto  px-4",
          "[&::-webkit-scrollbar]:hidden snap-proximity snap-x scroll-px-10"
        )}
      >
        {contents(lang).map((x, idx) => (
          <article
            className={clsx(
              "lg:flex-1 flex flex-col gap-6 justify-start items-center min-w-[220px] lg:min-w-0",
              "transition-all duration-200 hover:scale-[1.015] ease-out gap-6 snap-center",
              "border-1 hover:shadow-1 m-1",
              "shadow-5 p-1",
              "bg-[rgba(255,_255,_255,_0.85)]"
            )}
            key={idx}
          >
            <EzImage src={x.img} alt={x.title} width={39} height={39} quality={100} />
            <div className="text-center">
              <h3 className="font-bold text-base">{x.title}</h3>
              <p>{x.des}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
export default ValueAdded;

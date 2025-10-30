import EzImage from "@/components/commons/EzImage";
import clsx from "clsx";
import Link from "next/link";

const HeadingRenderer = ({
  locale,
  heading,
}: {
  locale: string;
  heading: string[];
}) => {
  switch (locale) {
    case "ja":
      return (
        <>
          <span className="block text-lg lg:text-4xl">{heading[0]}</span>
          <span className="block text-[64px] lg:text-8xl">{heading[1]}</span>
        </>
      );
    case "vi":
      return (
        <>
          <span className="block text-[64px] lg:text-8xl">{heading[0]}</span>
          <span className="block text-lg lg:text-4xl">{heading[1]}</span>
        </>
      );
    default:
      return (
        <>
          <span className="block text-lg lg:text-4xl">{heading[0]}</span>
          <span className="block">
            <span className="inline-block text-[64px] lg:text-8xl">
              {heading[1]}
            </span>
            <span className="inline-block text-lg lg:text-4xl pl-2">
              {heading[2]}
            </span>
          </span>
        </>
      );
  }
};

const Quote = ({ lang, locale }: any) => {
  const getImageLink = () => {
    switch (locale) {
      case "ja":
        return "/uploads/Vong_tron_logo_1_ja_33556b5d57.png";
      case "vi":
        return "/uploads/Vong_tron_logo_1_vi_e3b793cec5.png";
      default:
        return "/uploads/Vong_tron_logo_1_en_529de155e2.png";
    }
  };
  return (
    <section
      className={clsx(
        "py-[22px] lg:py-20 px-4",
        "lg:bg-[linear-gradient(276deg,#00194F_46.66%,#B81010_100%)]",
        "bg-[linear-gradient(155deg,rgba(0,25,79,0)_-1.27%,#B81010_-1.26%,#00194F_70.31%)]",
        "mb-[-56px] lg:mb-[-120px]"
      )}
    >
      <div className="container flex flex-col lg:flex-row lg:items-center justify-between">
        <div className="text-white">
          <h2 className="block font-black mb-2">
            <HeadingRenderer heading={lang.heading} locale={locale} />
          </h2>
          <p className="mb-10">{lang.subHeading}</p>
          <Link
            href={"https://ichiba.net/products/oms/overview"}
            target="_blank"
            className={clsx(
              "block",
              "p-4 w-[244px]",
              "text-center uppercase font-medium leading-6 bg-white text-brand-secondary"
            )}
          >
            {lang.cta}
          </Link>
        </div>
        <EzImage
          src={getImageLink()}
          alt="Ezbuy"
          width={500}
          height={500}
          className="aspect-square"
          unoptimized
        />
      </div>
    </section>
  );
};
export default Quote;

import { Cta } from "@/components/commons/Cta";
import EzImage from "@/components/commons/EzImage";
import clsx from "clsx";

const Hero = ({ lang ,locale}: { lang: any ,locale : any}) => {

  const href = `/${locale}/contact-sales`;

  return (
    <section
      className={clsx(
        "realtive w-full h-[640px] relative bg-[url('https://strapi-efex.ichiba.net/uploads/hero_5fe0cf0e30.svg')] bg-[length:100%_auto] bg-no-repeat",
        "lg:h-[622px] lg:bg-[url('https://strapi-efex.ichiba.net/uploads/hero_lg_316b82d755.svg')] lg:bg-[length:auto_100%]",
        "min-[1920px]:bg-cover"
      )}
    >
      <div className="flex flex-col lg:flex-row container px-4 py-6 lg:p-0">
        <div className="items-start lg:mt-[174px] lg:max-w-[48%] relative z-10">
          <h1 className="text-2xl font-bold lg:text-5xl lg:leading-56">
            {lang.hero.title}
          </h1>
          <p className="mt-4 text-sm lg:mt-6 lg:text-base">
            {lang.hero.description}
          </p>
          <Cta href={href} className="mt-6 lg:w-[200px] lg:mt-6">
            {lang.hero.getAQuote}
          </Cta>
        </div>
      </div>
      <div className="hidden lg:block absolute inset-0 overflow-hidden">
        <EzImage
          src={"/uploads/hero_09bbe52c56.webp"}
          alt="hero"
          width={796}
          height={519}
          className="absolute top-1/2 -translate-y-1/2 right-[6.5%] max-w-[47%]"
        />
      </div>
      <div className="lg:hidden container">
        <EzImage
          src={"/uploads/Image_4_513e036dae.png"}
          alt="hero"
          width={700}
          height={700}
          className="mx-auto w-8/10"
          quality={100}
        />
      </div>
    </section>
  );
};

export default Hero;

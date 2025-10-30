import clsx from "clsx";
import CTA from "./CTA";

const Quote = ({lang} : any) => {
  return (
    <section
      className={clsx(
        "py-[22px] lg:py-20 px-4",
        "bg-[url('https://strapi-efex.ichiba.net/uploads/Quote_1_4951bfd602.svg')]",
        "lg:bg-[url('https://strapi-efex.ichiba.net/uploads/Quote_9ca12eea07.svg')]",
        "bg-cover bg-center bg-no-repeat"
      )}
    >
      <div
        className={clsx(
          "container px-4 py-9 text-center text-white rounded-xl",
          "bg-[url('https://strapi-efex.ichiba.net/uploads/Background_2_d61f46f40c.svg')]",
          "lg:bg-[url('https://strapi-efex.ichiba.net/uploads/Background_7fb50c6148.svg')]",
          "bg-cover bg-center bg-no-repeat"
        )}
      >
        <p className="uppercase text-xs lg:text-sm mb-2 lg:mb-4 opacity-80">
        {lang.label}
        </p>
        <p className="text-xl lg:text-[30px] font-bold mb-5 lg:mb-8 mx-auto  leading-[38px]">
          {lang.title}
        <div className="mt-2">{lang.subtitle}</div>
        </p>
        <CTA lang={lang.start} />
      </div>
    </section>
  );
};
export default Quote;

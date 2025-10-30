import clsx from "clsx";
import CTA from "./CTA";

const Quote = ({ lang }: any) => {
  return (
    <section
      className={clsx(
        "py-[22px] lg:py-20 px-4",
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
        <p className=" lg:text-[30px] text-lg font-bold mx-auto lg:w-2/3 leading-[42px]">
          {lang.donlet}
        </p>
        <p className=" lg:text-[30px] text-lg font-bold mb-5 lg:mb-8 mx-auto lg:w-2/3 leading-[42px]">
          {lang.let}
        </p>
        <CTA lang={lang} />
      </div>
    </section>
  );
};
export default Quote;

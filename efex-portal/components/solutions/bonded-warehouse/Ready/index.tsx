import clsx from "clsx";
import Link from "next/link";

const Ready = ({ lang , locale}: any) => {
  return (
    <section className="container px-4 py-8 lg:py-15  text-white">
      <div
        className={clsx(
          "py-8 px-4 rounded-xl ",
          "bg-[url('https://strapi-efex.ichiba.net/uploads/Frame_2608924_1_7c0a38e4bd.svg')]",
          "md:bg-[url('https://strapi-efex.ichiba.net/uploads/Background_3_65e2344f37.svg')]",
          "bg-no-repeat bg-center bg-cover"
        )}
      >
        <h2 className="text-center font-bold text-xl lg:text-3xl pb-5 lg:pb-8">
          {lang.heading}
        </h2>
        <Link
          href={`/${locale}/contact-sales`}
          target="_blank"
          className={clsx(
            "block w-fit",
            "mx-auto px-5 py-3",
            "bg-brand-primary hover:bg-brand-primary-active rounded-lg capitalize"
          )}
        >
          {lang.cta}
        </Link>
      </div>
    </section>
  );
};
export default Ready;

import clsx from "clsx";
import Link from "next/link";

const NeedSupport = ({ lang, params }: any) => {
  return (
    <div
      className={clsx(
        "mt-[56px] lg:mt-[120px]",
        "py-10",
        "lg:bg-[url('https://strapi-ezbuy.ichiba.net/uploads/Frame_19171_cb3b8df233.png')]",
        "bg-[url('https://strapi-ezbuy.ichiba.net/uploads/bg_mobile_781f5a6e52.png')]",
        "bg-cover bg-no-repeat bg-bottom",
        "h-[567px] lg:h-[360px]"
      )}
    >
      <div className="container px-4 lg:text-brand-primary text-white">
        <div className="lg:max-w-[60%] w-full">
          <p className="font-black text-2xl lg:text-4xl mb-6">
            <span className="lg:block">{lang?.needSupport?.title}</span>
            <span>{lang?.needSupport?.title2}</span>
          </p>
          <p className="text-sm lg:text-lg mb-6">
            {lang?.needSupport?.description}
          </p>
        </div>
        <Link
          href={`/${params.lang}/contact-sales`}
          className="py-[13px] px-4 bg-brand-secondary text-white text-sm"
        >
          {lang?.needSupport?.contactSales}
        </Link>
      </div>
    </div>
  );
};
export default NeedSupport;

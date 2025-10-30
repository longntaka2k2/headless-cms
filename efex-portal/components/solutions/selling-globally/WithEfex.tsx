import Image from "next/image";
import Link from "next/link";

const WithEFEX = ({ locale, lang }: { locale: string; lang: any }) => {
  return (
    <div className="py-6 lg:py-15 bg-[url(https://strapi-efex.ichiba.net/uploads/Rectangle_7243_ea53fc1eb5.svg)] bg-no-repeat bg-cover">
      <div className="container px-3">
        <div className="lg:w-[55%] mx-auto">
          <h1 className="text-2xl lg:text-5xl lg:leading-56 font-bold lg:text-center mb-2">
            <span className="headingGradient">{lang.heading[0]} </span>
            {lang.heading[1]}
          </h1>
          <p className="text-sm lg:text-base lg:text-center">
            {lang.subHeading}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-[26px] lg:gap-6 mt-9 lg:mt-11 mb-9">
          {lang?.items.map((item: any, index: number) => {
            return (
              <div
                key={index}
                className="flex items-center gap-3 bg-white rounded-xl p-3"
              >
                <div
                  style={{
                    background:
                      "linear-gradient(207deg, #537CD7 41.34%, rgba(83, 124, 215, 0.00) 136.97%)",
                    boxShadow: "0px 8px 16px 0px rgba(0, 0, 0, 0.05)",
                  }}
                  className="min-w-[46px] min-h-[46px] max-w-[46px] max-h-[46px] rounded-full flex items-center justify-center"
                >
                  <Image src={item.icon} alt="" width={28} height={28} />
                </div>
                <p className="text-sm lg:text-base">{item.content}</p>
              </div>
            );
          })}
        </div>

        <Image
          src="https://strapi-efex.ichiba.net/uploads/Group_1171276004_3b5fd59692.svg"
          alt="efex"
          width={1013}
          height={551}
          className="mx-auto"
        />

        <Link
          href={`/${locale}/contact-sales`}
          target="_blank"
          className="relative z-10 w-fit block mx-auto mt-5 rounded-lg bg-brand-primary px-4 py-[14px] text-white text-sm font-medium"
        >
          {lang.contactSales}
        </Link>
      </div>
    </div>
  );
};

export default WithEFEX;

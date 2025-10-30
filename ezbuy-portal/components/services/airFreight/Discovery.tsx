import clsx from "clsx";

const Discovery = ({ lang, params }: any) => {
  return (
    <section
      className={clsx(
        "pb-[159px] pt-12 px-4 container lg:mt-[120px] lg:py-[64px] lg:px-[200px]",
        "lg:bg-[url('https://strapi-ezbuy.ichiba.net/uploads/Frame_19272_706d34236f.svg')]",
        "bg-[url('https://strapi-ezbuy.ichiba.net/uploads/Frame_19272_bg_mobile_86a8e5bb10.svg')]",
        "bg-cover lg:bg-center bg-left-bottom bg-no-repeat"
      )}
    >
      <div className="text-white font-black text-center text-xl uppercase mb-10 lg:text-[32px] lg:leading-[48px]">
        {lang?.services?.airFreight?.discover?.heading}
      </div>
      <div className="flex justify-center">
        <a
          className="py-[13px] px-4 bg-brand-secondary text-white uppercase text-center min-w-[200px] font-medium"
          href={`/${params.lang}/contact-sales`}
        >
          {lang?.services?.airFreight?.discover?.button}
        </a>
      </div>
    </section>
  );
};

export default Discovery;

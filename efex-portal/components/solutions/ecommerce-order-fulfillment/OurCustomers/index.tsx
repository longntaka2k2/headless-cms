import { WorldMap } from "./WorldMap";

const OurCustomers = ({ lang }: { lang: any }) => {
  return (
    <section className="text-ic-ink-6 py-6 lg:py-[60px]">
      <div className="text-center">
        <h2 className="text-2xl font-bold lg:text-4xl lg:leading-[48px]">
          {lang.title}
        </h2>
        <p className="text-ic-ink-5 text-sm mt-1 lg:text-lg lg:leading-6">
          {lang.subTitle}
        </p>
      </div>

      <WorldMap lang={lang} />
    </section>
  );
};

export default OurCustomers;

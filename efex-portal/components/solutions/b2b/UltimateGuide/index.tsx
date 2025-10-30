import clsx from "clsx";
import { Assist } from "./Assist";
import { Guide } from "./Guide";

const UltimateGuide = ({ lang }: { lang: any }) => {
  return (
    <section className="relative py-6 lg:py-15 overflow-y-hidden">
      <div
        className={clsx(
          "h-full absolute -z-1 top-[212px] bottom-0 left-0 right-0 bg-[url('https://strapi-efex.ichiba.net/uploads/Rectangle_7211_08c2cb2400.svg')] bg-center bg-no-repeat bg-[length:100%_auto] lg:bg-[length:auto_auto]",
          "lg:h-[1074px] lg:top-[348px] lg:bg-[url('https://strapi-efex.ichiba.net/uploads/Rectangle_7210_3f921de64c.svg')]"
        )}
      />
      <Guide lang={lang} />
      <Assist lang={lang} />
    </section>
  );
};

export default UltimateGuide;

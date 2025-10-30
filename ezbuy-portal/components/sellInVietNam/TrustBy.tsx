import clsx from "clsx";
import exp from "constants";
import EzImage from "../commons/EzImage";
import iconHandShake from "@/public/images/services/siv/v2/handshake.svg";
const TrustBy = ({ lang, locale }: { lang: any; locale: string }) => {
  return (
    <section
      className={clsx(
        "bg-[url('https://strapi-efex.ichiba.net/uploads/Frame_427318843_daf1ed041c.png')]",
        "bg-cover bg-no-repeat bg-center"
      )}
    >
      <div className="lg:py-7 py-5 text-center text-white">
        <EzImage
          src={iconHandShake}
          className="w-[72px] h-[72px] mx-auto mb-2"
          alt="Icon"
        />
        <p>
          <span className="text-sm lg:text-base font-medium">
            {lang?.trustByOver}{" "}
          </span>
          <span className="text-2xl lg:text-4xl font-bold">{lang.company}</span>
        </p>
      </div>
    </section>
  );
};

export default TrustBy;

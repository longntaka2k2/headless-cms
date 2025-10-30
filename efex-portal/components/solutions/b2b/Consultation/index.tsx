import { Cta } from "@/components/commons/Cta";
import EzImage from "@/components/commons/EzImage";
import clsx from "clsx";

const Consultation = ({ lang , locale }: { lang: any , locale: string }) => {
  return (
    <section className="relative px-4 py-6 lg:px-0 lg:py-15 overflow-hidden">
      <div
        className={clsx(
          "container flex flex-col gap-6 justify-between rounded-xl px-4 py-5 lg:flex-row lg:items-center lg:rounded-[20px] lg:px-15 lg:py-[54px]",
          "bg-[url('https://strapi-efex.ichiba.net/uploads/consultation_7a0f640fa1.webp')]",
          "lg:bg-[url('https://strapi-efex.ichiba.net/uploads/consultation_lg_eed90bb38e.webp')]"
        )}
      >
        <EzImage
          src={"/uploads/Handle_00e8e240ba.svg"}
          alt="Background"
          width={1246}
          height={476}
          className="absolute -z-1 left-0 top-0 lg:top-1/2"
        />
        <h3 className="text-ic-white-6 font-bold lg:text-2xl max-w-[710px]">
          <p>{lang.consultation.title}</p>
          <p className="mt-4">{lang.consultation.findOut}</p>
        </h3>
        <Cta
          href={`/${locale}/contact-sales`}
          className="self-end lg:self-center min-h-[40px]"
        >
          {lang.consultation.getConsultation}
        </Cta>
      </div>
    </section>
  );
};

export default Consultation;

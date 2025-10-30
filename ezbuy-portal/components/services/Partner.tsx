import clsx from "clsx";
import Link from "next/link";
import React from "react";

function Partner({ lang }: any) {
  return (
    <section
      className={clsx(
        " container px-4 lg:px-10 py-16 lg:py-12 h-[620px] lg:h-[320px]",
        "bg-[url('https://strapi-ezbuy.ichiba.net/uploads/bg_Mobile_f7a114d2c6.svg')]",
        "lg:bg-[url('https://strapi-ezbuy.ichiba.net/uploads/bg_Desktop_1f67394e9e.svg')]",
        "bg-cover bg-no-repeat bg-bottom"
      )}
    >
      <div className="mb-10 lg:w-2/3">
        <h2 className="font-black text-2xl lg:text-4xl uppercase pb-2">
          {lang.services.partner.heading}
        </h2>
        <p>{lang.services.partner.subHeading}</p>
      </div>
      <Link
        href="#"
        className={clsx(
          "bg-brand-secondary text-white",
          "p-4 w-[228px] self-start text-center uppercase block"
        )}
      >
        {lang?.services.partner.discover}
      </Link>
    </section>
  );
}

export default Partner;

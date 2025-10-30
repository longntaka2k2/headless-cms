import EzImage from "@/components/commons/EzImage";
import clsx from "clsx";

const Card = ({
  image,
  title,
  des,
}: {
  image: string;
  title: string;
  des: string;
}) => {
  return (
    <article
      className={clsx(
        "px-4 pt-6 pb-10",
        "border rounded-2xl border-transparent hover:border-[#597EF7]",
        "hover:bg-[#F0F5FF]",
        ""
      )}
    >
      <EzImage
        src={image}
        className="mx-auto mb-2 aspect-square"
        alt={title}
        width={120}
        height={120}
        unoptimized
      />
      <h3 className="font-bold text-lg lg:text-xl">{title}</h3>
      <p className="text-sm lg:text-base">{des}</p>
    </article>
  );
};
const WhatDoes = ({ lang, locale }: { lang: any; locale: string }) => {
  const images = [
    "/uploads/Frame_260914_3cab3fef2b.png",
    "/uploads/Illus_6174bb8c94.png",
    "/uploads/Frame_427318856_bf501aef52.png",
    "/uploads/Frame_427318858_5f9c4b41c1.png",
    "/uploads/Isolation_Mode_d8b32607ef.png",
    "/uploads/Frame_427318861_4e308f9c65.png",
  ];
  return (
    <section className="container px-4 lg:px-0 pt-6 lg:py-10">
      <div className="mb-6 text-center">
        <h2 className="text-[28px] lg:text-4xl font-black mb-2 leading-[48px] uppercase">
          {lang.heading}
        </h2>
        <p className="text-sm lg:text-base">{lang.subHeading}</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {images.map((x, idx) => (
          <Card image={x} {...lang.contents[idx]} key={idx} />
        ))}
      </div>
    </section>
  );
};

export default WhatDoes;

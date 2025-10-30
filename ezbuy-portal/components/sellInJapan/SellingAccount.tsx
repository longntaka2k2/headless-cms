import clsx from "clsx";
import EzImage from "../commons/EzImage";
import { ReactNode } from "react";

const ContentRenderer = ({
  img,
  index,
  children,
}: {
  img: string;
  index: number;
  children: ReactNode;
}) => (
  <article
    className={clsx(
      "flex flex-col gap-6",
      index % 2 == 0 ? "lg:flex-row" : "lg:flex-row-reverse"
    )}
  >
    <EzImage
      src={img}
      alt="Ezbuy"
      width={476}
      height={476}
      className={clsx(
        "object-cover object-center",
        "h-[98vw] w-full lg:w-[476px] lg:h-[476px]"
      )}
    />
    <div className="px-4 lg:p-10">{children}</div>
  </article>
);
interface Content {
  img: string;
  des: string;
  title: string;
}
const SellingAccount = ({ lang }: any) => {
  const { heading, subHeading, step, contents } =
    lang.services.sellInJapan.sellingAccount;

  const contentss = [
    { ...contents[0], img: "/uploads/Rectangle_6529_6eac8f35d2.png" },
    { ...contents[1], img: "/uploads/Rectangle_6529_1_065289af5c.png" },
    { ...contents[2], img: "/uploads/Rectangle_6529_2_acef967c02.png" },
    { ...contents[3], img: "/uploads/Rectangle_6529_3_ed2e70b94d.png" },
    { ...contents[4], img: "/uploads/Rectangle_6529_4_45f50dd8d4.png" },
  ];
  return (
    <section className="container pt-14">
      <div className="px-4 lg:pb-14 mb-10 lg:mb-0 lg:px-0">
        <h1 className="text-2xl lg:text-4xl font-black pb-2 lg:pb-6 uppercase">
          {heading}
        </h1>
        <p className="text-sm lg:text-base leading-21 lg:leading-6">
          {subHeading}
        </p>
      </div>
      <div className="flex gap-10 flex-col">
        {(contentss as Content[]).map(({ title, des, img }, idx) => (
          <ContentRenderer index={idx} img={img} key={idx}>
            <>
              <div className="uppercase pb-2 lg:pb-6">
                <p className="text-gray-13 font-bold text-sm lg:text-xl">
                  {`${step}${idx + 1}:`}
                </p>
                <p className="font-black lg:text-[28px] lg:leading-[42px]">
                  {title}
                </p>
              </div>
              <p className="leading-21 lg:text-lg lg:leading-27">{des}</p>
            </>
          </ContentRenderer>
        ))}
      </div>
    </section>
  );
};

export default SellingAccount;

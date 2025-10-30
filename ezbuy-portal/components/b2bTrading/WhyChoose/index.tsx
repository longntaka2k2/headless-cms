import React, { useContext } from "react";
import { B2bTradingContext } from "../context";
import Image from "next/image";
import classes from "./WhyChoose.module.scss";

const WhyChoose = () => {
  const { lang } = useContext(B2bTradingContext);
  const items = lang.services?.b2bTrading?.whyChoose?.items || [];

  const icons = [
    "https://strapi-ezbuy.ichiba.net/uploads/shop_938e90a021.svg",
    "https://strapi-ezbuy.ichiba.net/uploads/people_fill_0de9469876.svg",
    "https://strapi-ezbuy.ichiba.net/uploads/people_f32a89bc88.svg",
    "https://strapi-ezbuy.ichiba.net/uploads/wallet_a62211e973.svg",
  ];

  return (
    <div className="flex flex-col container px-4 lg:px-0">
      <h3 className="text-2xl font-black text-center uppercase md:text-3xl lg:text-4xl">
        {lang.services?.b2bTrading?.whyChoose?.title}
      </h3>
      <p className="mt-2.5 text-sm lg:text-base text-center max-w-[776px] mx-auto">
        {lang.services?.b2bTrading?.whyChoose?.subTitle}
      </p>
      <div className={classes.scroll}>
        <div
          className="grid w-max gap-3 lg:gap-6 py-3 lg:py-6"
          style={{
            gridTemplateColumns: `repeat(${items.length}, minmax(0, 1fr))`,
          }}
        >
          {items.map((item, index) => (
            <div
              key={index}
              className="flex flex-col w-[276px] rounded"
            >
              <Image
                src={icons[index]}
                alt={item.title!}
                width={40}
                height={40}
                className="lg:mx-auto"
              />
              <h5 className="font-bold mt-6 break-words">{item.title}</h5>
              <span className="text-sm mt-2">{item.content}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;

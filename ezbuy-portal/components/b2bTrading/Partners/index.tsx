import React, { useContext, useEffect, useRef, useState } from "react";
import { B2bTradingContext } from "../context";
import { chunk } from "lodash";
import Image from "next/image";
import classes from "./Partners.module.scss";
import clsx from "clsx";
import EzImage from "@/components/commons/EzImage";

const Partners = () => {
  const { lang } = useContext(B2bTradingContext);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const items = lang.services?.b2bTrading?.partners?.items || [];
  const [containerWidth, setWidth] = useState(100 + "%");
  const [animationState, setPlay] = useState("paused");

  const images = [
    "/uploads/amazon_ab02b98162.png",
    "/uploads/mercari_41f9bd6075.png",
    "/uploads/locondo_ebe80054b3.png",
    "/uploads/muji_e5f419a990.png",
    "/uploads/panpare_mall_0bf4ba629d.png",
    "/uploads/jmty_76830233ef.png",
    "/uploads/plaza_style_7da30732e0.png",
  ];

  const groupSize = Math.ceil(items.length / 2);

  useEffect(() => {
    if (scrollRef.current) {
      setWidth(scrollRef.current.scrollWidth + "px");
      setPlay("running");
    }
  }, []);

  return (
    <div className="px-4">
      <h3 className="text-2xl font-black uppercase md:text-center md:text-3xl lg:text-4xl">
        {lang.services?.b2bTrading?.partners?.title}
      </h3>
      <p className="mt-2 md:text-center">
        {lang.services?.b2bTrading?.partners?.subTitle}
      </p>
      <div
        className={classes.scroll}
        ref={scrollRef}
        // style={{
        //   width: `${containerWidth}`,
        //   animationPlayState: animationState,
        // }}
      >
        {chunk(items, groupSize).map((group, index) => (
          <div
            key={index}
            className="flex gap-6 items-stretch w-max m-auto"
          >
            {group.map((item, idx) => (
              <div key={idx} className="flex flex-col gap-6 py-2.5">
                <div
                  className={clsx(
                    "flex justify-center items-center",
                    "transition-all duration-200 hover:scale-110 ease-out"
                  )}
                >
                  <EzImage
                    alt={item.name!}
                    src={images[idx + index * groupSize]}
                    width={216}
                    height={120}
                    className="rounded-xl"
                  />
                </div>
                <p className="font-bold text-center">{item.name}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partners;

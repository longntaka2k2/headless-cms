import clsx from "clsx";
import Footprint from "./Footprint";
import Facilities from "./Facilities";
import PayAs from "./PayAs";
import Prompt from "./Prompt";
import ValueAdded from "./ValueAdded";

const WhatMake = ({ params, lang }: any) => {
  return (
    <div className={clsx("py-6 lg:pt-10 lg:pb-[60px] overflow-hidden")}>
      <div className="">
        <h2 className="text-center font-bold text-2xl lg:text-4xl leading-8 lg:leading-[48px] mb-6 lg:mb-[60px]   ">
          {lang.bonded.whatMake.heading}
        </h2>
        <div className="flex flex-col gap-6 lg:gap-12">
          <Footprint data={lang.bonded.whatMake.items[0]} />
          <Facilities data={lang.bonded.whatMake.items[1]} />
          <PayAs data={lang.bonded.whatMake.items[2]} />
          <Prompt data={lang.bonded.whatMake.items[3]} />
          <ValueAdded data={lang.bonded.whatMake.items[4]} />
        </div>
      </div>
    </div>
  );
};

export default WhatMake;

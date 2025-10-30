"use client";
import CountUp from "react-countup";
import EzImage from "../commons/EzImage";
import squareIcon from "@/public/images/icons/services/personalization.svg";
import { ReactSVG } from "react-svg";
import clsx from "clsx";
import { useMemo, useState } from "react";
import { createPopper } from "@popperjs/core";
const ShippingNetwork = ({ lang }: any) => {
  const locations = [
    {
      imageUrl: "/uploads/osaka_a509461ade.jpeg",
      id: "osaka",
      name: "Tokyo",
    },
    {
      imageUrl: "/uploads/hanoi_7cd74dcc56.jpeg",
      id: "HN",
      name: "Hà Nội",
    },
    {
      imageUrl: "/uploads/Ho_Chi_Minh_35fe060115.jpeg",
      id: "HCM",
      name: "Tp. Hồ Chí Minh",
    },
    {
      imageUrl: "/uploads/LA_08a294d155.jpeg",
      id: "la",
      name: "Los Angeles",
    },
    {
      imageUrl: "/uploads/Melborlne_198fbb66bf.jpeg",
      id: "melbourne",
      name: "Melbourne",
    },
    {
      imageUrl: "/uploads/moscow_828412f065.jpeg",
      id: "moscow",
      name: "Moscow",
    },
    {
      imageUrl: "/uploads/london_0fe2d109be.jpeg",
      id: "london",
      name: "London",
    },
    {
      imageUrl: "/uploads/new_York_0e2e6feb0c.jpeg",
      id: "newYork",
      name: "New York",
    },
    {
      imageUrl: "/uploads/sao_paolo_99c4e9ba33.jpeg",
      id: "saoPaulo",
      name: "São Paulo",
    },
    {
      imageUrl: "/uploads/dubai_05d0eb7bc6.jpeg",
      id: "dubai",
      name: "Dubai",
    },
    {
      imageUrl: "/uploads/singapo_11c17ad229.jpeg",
      id: "singapo",
      name: "Singapo",
    },
  ];
  const [location, setLocation] = useState(locations[0].id);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const selectedLocation = useMemo(
    () => locations.find((x) => x.id == location),
    [location]
  );
  const createTooltips = (id: string) => {
    const popcorn = document.getElementById(id)!;
    const tooltip = document.getElementById(`$tooltip_${id}`)!;
    tooltip.addEventListener("mouseover", (e) => {
      setLocation(id);
    });
    createPopper(popcorn, tooltip, {
      placement: "right",
      modifiers: [
        {
          name: "offset",
          options: {
            offset: [0, 8],
          },
        },
      ],
    });
  };
  const [tooltipVisible, setTooltipVisible] = useState(false);

  const afterInjection = (svg: SVGSVGElement) => {
    svg.classList.add("w-full", "h-fit");
    const locationPoints = document.querySelectorAll("circle[id]");
    locationPoints?.forEach((node) => {
      node.classList.add("p-2");
      createTooltips(node.id);
    });
    setTooltipVisible(true);
  };
  return (
    <section className=" px-4 py-10 bg-gray-11">
      <div className="container">
        <div className="pb-8 flex flex-col gap-6 items-center">
          <h2 className="text-2xl lg:text-4xl leading-9 lg:leading-54 font-black uppercase">
            {lang.services.xBorderEcom.shipping.heading}
          </h2>
          <p className="text-sm lg:w-[75%] text-center">
            {lang.services.xBorderEcom.shipping.subHeading}
          </p>
        </div>
        <div className="relative">
          <ReactSVG
            id="map"
            src="https://strapi-ezbuy.ichiba.net/uploads/ez_Geo_Location_42b9a63936.svg"
            className="w-full"
            afterInjection={afterInjection}
          />
          {locations.map((x, idx) => (
            <div
              id={`$tooltip_${x.id}`}
              role="tooltip"
              key={`$tooltip_${x.id}`}
              className={clsx(
                "rounded-lg p-2 py-1 hover:bg-white",
                selectedLocation?.name == x.name ? "bg-white z-10" : "bg-gray-1"
              )}
              hidden={!tooltipVisible}
            >
              <div className="text-xs md:text-sm cursor-pointer">
                {x.name}
                <div
                  className={clsx(
                    "absolute",
                    selectedLocation?.name == x.name
                      ? "hidden md:block"
                      : "hidden",
                    "rounded-lg w-[276px] h-[270px] bg-white",
                    "shadow-3 m-1 cursor-pointer"
                  )}
                >
                  <div className="rounded-t-lg ">
                    <EzImage
                      alt={x.name}
                      src={x?.imageUrl ?? ""}
                      width={276}
                      height={166}
                      className="object-cover object-center h-[166px] rounded-t-lg"
                    />
                  </div>
                  <p className="py-3 px-4 font-bold">
                    {selectedLocation?.name}
                  </p>
                </div>
              </div>
              <div
                id={`$arrow_${x.id}`}
                className="absolute before:absolute before:bg-inherit before:w-2 before:h-2 -left-1"
                data-popper-arrow
              ></div>
            </div>
          ))}
        </div>
        <div className="">
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="flex-1 font-black text-2xl lg:text-4xl ">
              <p className="max-w-[300px]">
                {lang.services.xBorderEcom.shipping.fulfillmentCapacity}
              </p>
            </div>
            <div className="flex justify-between flex-1 gap-4">
              <div>
                <CountUp
                  className="font-bold text-lg lg:text-2xl"
                  duration={2}
                  start={0}
                  end={99.96}
                  enableScrollSpy
                  scrollSpyOnce
                  suffix="%"
                />
                <p className="text-sm lg:text-base lg:text-center">
                  {lang.services.xBorderEcom.shipping?.orderAccuracy}
                </p>
              </div>
              <div>
                <CountUp
                  className="font-bold text-lg lg:text-2xl"
                  duration={2}
                  start={0}
                  end={50}
                  enableScrollSpy
                  scrollSpyOnce
                  suffix="+"
                />
                <p className="text-sm lg:text-base lg:text-center">
                  {lang.services.xBorderEcom.shipping?.shippingPartner}
                </p>
              </div>
              <div>
                <CountUp
                  className="font-bold text-lg lg:text-2xl"
                  duration={2}
                  start={0}
                  enableScrollSpy
                  scrollSpyOnce
                  end={80000}
                  suffix=" m2"
                />
                <p className="text-sm lg:text-base lg:text-center">
                  {lang.services.xBorderEcom.shipping?.totalWarehouseSpace}
                </p>
              </div>
            </div>
          </div>
          <div className="h-[6px] lg:h-[8px] bg-black mb-8 mt-6"></div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6  w-full">
            {lang.services.xBorderEcom?.shipping?.items?.map(
              (x: string, idx: number) => (
                <div className="flex items-center justify-start gap-4" key={idx}>
                  <EzImage alt={x} src={squareIcon} width={24} height={24} />
                  <span className="font-medium">{x}</span>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
export default ShippingNetwork;

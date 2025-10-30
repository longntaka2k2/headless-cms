"use client";
import warehouse from "@/public/images/icons/bonded-warehouse/whatDo/warehouse.svg";
import forkliftTruck from "@/public/images/icons/bonded-warehouse/whatDo/forkliftTruck.svg";
import driveInRacking from "@/public/images/icons/bonded-warehouse/whatDo/driveInRacking.svg";
import barcode from "@/public/images/icons/bonded-warehouse/whatDo/barcodeScanner.svg";
import camera from "@/public/images/icons/bonded-warehouse/whatDo/camera.svg";
import truck from "@/public/images/icons/bonded-warehouse/whatDo/truck.svg";
import manageSystem from "@/public/images/icons/bonded-warehouse/whatDo/managementSystem.svg";
import electronicScale from "@/public/images/icons/bonded-warehouse/whatDo/electronicScale.svg";
import boxes from "@/public/images/icons/bonded-warehouse/whatDo/boxes.svg";
import clsx from "clsx";
import EzImage from "@/components/commons/EzImage";
import { ReactSVG } from "react-svg";

const WhatDo = ({ params, lang }: any) => {
  const icons = [
    warehouse,
    forkliftTruck,
    driveInRacking,
    barcode,
    camera,
    truck,
    manageSystem,
    electronicScale,
    boxes,
  ];
  const iconUrls = [
    "/uploads/warehouse_322a93632d.svg",
    "/uploads/forklift_Truck_f6df572145.svg",
    "/uploads/drive_In_Racking_31aa360223.svg",
    "/uploads/barcode_Scanner_8fd43709eb.svg",
    "/uploads/camera_5d6fc8715d.svg",
    "/uploads/truck_8f81272f40.svg",
    "/uploads/management_System_f421b04a97.svg",
    "/uploads/electronic_Scale_cf5b9da7df.svg",
    "/uploads/boxes_0c97fa561a.svg",
  ];
  return (
    <section className="bg-[#091832] py-6 lg:pt-[60px] lg:pb-20">
      <div className="container px-4">
        <h2 className="text-white text-center w-3/5 mb-5 lg:mb-10 mx-auto font-bold text-2xl lg:text-4xl">
          {lang.heading}
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {iconUrls.map((x, idx) => (
            <article
              className={clsx(
                "flex lg:flex-col items-center gap-4 lg:gap-5",
                "p-4 lg:px-5 lg:py-6",
                "rounded-xl  card-fx bg-[#1c2a42] group"
              )}
              key={idx}
            >
              <ReactSVG
                src={`https://strapi-efex.ichiba.net${x}`}
                className="p-5 bg-[#2e3a51] text-[#F0F5FF] group-hover:scale-105 rounded-lg transition-all"
              />
              <div className="text-white lg:text-center">
                <h3 className="lg:text-xl font-bold mb-3 text-base">
                  {lang.contents[idx].title}
                </h3>
                <p className="text-sm lg:text-base">{lang.contents[idx].des}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
export default WhatDo;

"use client";

import EzImage from "@/components/commons/EzImage";
import { useRef, useState } from "react";
import Support from "./Support";
import { removeAccent } from "@/utils/ultils";
import Select from "react-select";
import TableVietNamMB from "./table-vietnam/TableVietNamMB";
import TableVietNamPc from "./table-vietnam/TableVietNamPc";
import TableJapanMB from "./table-japan/TableJapanMB";
import TablePhilippinesMB from "./table-philippines/TablePhilippinesMB";
import TableJapanPC from "./table-japan/TableJapanPC";
import TablePhilippinesPC from "./table-philippines/TablePhilippinesPC";
import TableUSMB from "./table-us/TableUSMB";
import TableUSPC from "./table-us/TableUSPC";

const OurFulfillment = ({ lang }: { lang: any }) => {
  const [option, setOption] = useState(lang.options[0] as any);
  const selectOption = useRef(null);

  return (
    <div className="scroll-m-60" id={removeAccent(lang?.label)}>
      <div className="text-[#333] mt-6 lg:mt-10">
        <div className="px-4 lg:px-0 container ">
          <div className="lg:flex lg:justify-between lg:items-end bg-white">
            <div>
              <div className="text-[24px] font-bold lg:text-[36px]">
                {lang?.title}
              </div>
              <div className="text-xs lg:text-base italic text-[#666]">
                {lang?.subtitle}
              </div>
            </div>
            <div className="flex items-center mt-3 z-50">
              <EzImage
                width={66}
                height={21}
                quality={100}
                src={"/uploads/Group_5e41ea1277.svg"}
                alt="/uploads/Group_5e41ea1277.svg"
                className="mr-2"
              />
              <Select
                ref={selectOption}
                options={lang.options}
                value={option?.value}
                placeholder={option?.label}
                styles={{
                  control: (base) => ({
                    ...base,
                    padding: "5px 0px !important",
                    overflow: "hidden",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: "1",
                    borderRadius: "8px",
                    width: "200px",
                  }),
                }}
                classNames={{
                  control: (state) => "py-1 text-sm",
                }}
                onChange={(newValue) => setOption(newValue)}
              />
            </div>
          </div>
        </div>
        <div className="lg:hidden">
          {option.value === "VietNam" ? (
            <TableVietNamMB lang={lang?.vietNam} />
          ) : option.value === "Japan" ? (
            <TableJapanMB lang={lang?.japan} />
          ) : option.value === "Philippines" ? (
            <TablePhilippinesMB lang={lang?.philippines} />
          ) : option.value === "US" ? (
            <TableUSMB lang={lang?.us} />
          ) : null}
        </div>
        {option.value === "VietNam" ? (
          <TableVietNamPc lang={lang?.vietNam} />
        ) : option.value === "Japan" ? (
          <TableJapanPC lang={lang?.japan} />
        ) : option.value === "Philippines" ? (
          <TablePhilippinesPC lang={lang?.philippines} />
        ) : option.value === "US" ? (
          <TableUSPC lang={lang?.us} />
        ) : null}
      </div>
      <Support lang={lang} />
    </div>
  );
};
export default OurFulfillment;

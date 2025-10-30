import Image from "next/image";
import employee1 from "@/public/icons/company/career/employee1.svg";
import employee2 from "@/public/icons/company/career/employee2.svg";
import employee3 from "@/public/icons/company/career/employee3.svg";
import employee4 from "@/public/icons/company/career/employee4.svg";
import employee5 from "@/public/icons/company/career/employee5.svg";
import employee6 from "@/public/icons/company/career/employee6.svg";
import { useState } from "react";
import { useTranslation } from "next-i18next";
import backgroundCareer from "@/public/icons/company/career/employeeBg.png";

const dataEmployeeLeft = [
  { title: "benefits", img: employee1 },
  { title: "training", img: employee2 },
  { title: "work", img: employee3 },
];
const dataEmployeeRight = [
  { title: "equity", img: employee4 },
  { title: "flexible", img: employee5 },
  { title: "leadership", img: employee6 },
];

export default function EmployeeCareer() {
  const { t } = useTranslation("common");

  return (
    <>
      <div
        className="employee"
        style={{
          backgroundImage: `url(${backgroundCareer.src})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="container user-select-none">
          <div className="row">
            <div className=" color-white d-flex align-items-center">
              <div className="text-center">
                <h2 className="fw-7 fs-36 pb-2 employee-title fs-md-28">
                  {t("careers.employee.title")}
                </h2>
                <div className="fw-6 pb-4 fs-md-16">
                  {" "}
                  {t("careers.employee.content").replaceAll("/", '"')}{" "}
                </div>
                <div className="pb-5 fw-3 fs-md-14">
                  <span className="">{t("careers.employee.recognizing")}</span>
                  <span className="">{t("careers.employee.atIChiba")}</span>
                </div>
              </div>
            </div>
            <div className="col-lg-10 mx-auto">
              <div className="row">
                <div className="col-lg-6">
                  {dataEmployeeLeft.map((value: any, index: number) => (
                    <>
                      <div
                        className="mb-4 employee-item-after text-center"
                        key={index}
                      >
                        <Image src={value.img} alt="" className="tw-mx-auto" />
                        <h3 className="fw-7 fs-20 pb-2 fs-md-16">
                          {t(`careers.employee.${value.title}.title`)}
                        </h3>
                        <div className=" fs-md-14">
                          {t(`careers.employee.${value.title}.content`)}
                        </div>
                      </div>
                    </>
                  ))}
                </div>
                <div className="col-lg-6">
                  {dataEmployeeRight.map((value: any, index: number) => (
                    <>
                      <div
                        className="mb-4 employee-item-after text-center"
                        key={index}
                      >
                        <Image src={value.img} alt="" className="tw-mx-auto" />
                        <h3 className="fw-7 fs-20 pb-2 fs-md-16">
                          {t(`careers.employee.${value.title}.title`)}
                        </h3>
                        <div className=" fs-md-14">
                          {t(`careers.employee.${value.title}.content`)}
                        </div>
                      </div>
                    </>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

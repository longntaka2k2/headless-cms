import { useEffect, useState } from "react";
import { useTranslation } from "next-i18next";
import crack from "@/public/icons/oms/effortless/crack.svg";
import cuts from "@/public/icons/oms/effortless/cuts.svg";
import enjoy from "@/public/icons/oms/effortless/enjoy.svg";
import more from "@/public/icons/oms/effortless/more.svg";
import putCustomer from "@/public/icons/oms/effortless/putCustomer.svg";
import saveTime from "@/public/icons/oms/effortless/saveTime.svg";
import systematization from "@/public/icons/oms/effortless/systematization.svg";
import worlLess from "@/public/icons/oms/effortless/worlLess.svg";
import Image from "next/image";
import b2b from "@/public/icons/oms/suitab/b2b.svg";
import beauty from "@/public/icons/oms/suitab/beauty.svg";
import d2c from "@/public/icons/oms/suitab/d2c.svg";
import ecommerce from "@/public/icons/oms/suitab/ecommerce.svg";
import fashion from "@/public/icons/oms/suitab/fashion.svg";
import fast from "@/public/icons/oms/suitab/fast.svg";
import fourth from "@/public/icons/oms/suitab/fourth.svg";
import omnichannel from "@/public/icons/oms/suitab/omnichannel.svg";
import pharma from "@/public/icons/oms/suitab/pharma.svg";

export default function Suitability(props: any) {
  const [isActive, setActive] = useState(0 as number);

  const { t } = useTranslation("common");
  const changeTab = (value: number) => {
    setActive(value as number);
  };

  return (
    <div key={`${props.id}_${props.__component}`}>
      {props && (
        <div className="suitability">
          <div className="container">
            <h2 className="fw-7 fs-md-28 fs-36 pb-4 text-center">
              {props?.title}
            </h2>
            <div className="row ">
              <div
                className={`simplify col tab ${
                  isActive === 0 ? "active " : ""
                }`}
                onClick={() => changeTab(0)}
              >
                <div className="fw-5 fs-md-18 fs-24 cursor text-center pb-3">
                  {t("oms.howitwork.companyType")}
                </div>
              </div>
              <div
                className={`simplify col tab ${
                  isActive === 1 ? "active " : ""
                }`}
                onClick={() => changeTab(1)}
              >
                <div className="fw-5 fs-md-18 fs-24 cursor text-center pb-3">
                  {t("oms.howitwork.specific")}
                </div>
              </div>
            </div>

            {isActive === 0 ? (
              <div>
                <div className="text-center row justify-content-center pt-lg-5 pt-3">
                  {props?.CompanyType?.map((value: any, index: number) => (
                    <div className="col-4 tw-mb-6" key={index}>
                      <div className="suitability-items">
                        <div>
                          <Image
                            className="mx-auto"
                            alt="suitability-items"
                            src={value?.img?.data?.attributes?.url}
                            width={100}
                            height={100}
                          />
                        </div>
                        <div className="fs-md-14 fw-7 py-2">{value.Title}</div>
                        <div
                          dangerouslySetInnerHTML={{
                            __html: value?.content,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div>
                <div className="text-center row justify-content-center pt-lg-5 pt-3">
                  {props?.Industry?.map((value: any, index: number) => (
                    <div className="col-4 tw-mb-6" key={index}>
                      <div className="suitability-items">
                        <div>
                          <Image
                            className="mx-auto"
                            alt="suitability-items"
                            src={value?.img?.data?.attributes?.url}
                            width={100}
                            height={100}
                          />
                        </div>
                        <div className="fs-md-14 fw-7 py-2">{value.Title}</div>
                        <div
                          dangerouslySetInnerHTML={{
                            __html: value?.content,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

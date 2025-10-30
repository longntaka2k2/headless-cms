import { useEffect, useState } from "react";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import ConnectBest from "./ConnectBest";

export default function Suitability(props: any) {
  const [isActive, setActive] = useState<any>(null);
  const { t } = useTranslation("common");

  const changeTab = (value: string) => {
    setActive(value as string);
  };
  useEffect(() => {
    setActive(props?.items[0] ?? "");
  }, [props]);
  return (
    <div>
      <div
        key={`${props?.id}_${props?.__component}`}
        className="tw-bg-[linear-gradient(270deg,_rgba(235,_238,_250,_0.00)_0.05%,_rgba(172,_190,_255,_0.50)_99.96%)]"
      >
        {props && (
          <div className="tw-py-6 md:tw-py-16 suitability">
            <div className="container">
              <h3 className="fw-7 tw-text-2xl md:tw-text-4xl fs-md-36 fs-24 pb-4 text-center">
                {props?.title}
              </h3>
              <div className="row ">
                {props?.items &&
                  props?.items?.map((x: any, idx: number) => (
                    <div
                      key={`${idx}_${x.Title}`}
                      className={`simplify col tab ${
                        isActive?.Title === x?.Title ? "active " : ""
                      }`}
                      onClick={() => changeTab(x)}
                    >
                      <div className="fw-5 tw-text-sm md:tw-text-2xl  cursor text-center pb-3">
                        {x?.Title}
                      </div>
                    </div>
                  ))}
              </div>

              {isActive && (
                <div>
                  <div className="tw-text-center tw-flex tw-justify-center tw-items-stretch pt-lg-5 pt-3 tw-gap-6 w-full tw-flex-wrap">
                    {isActive?.Items?.map((value: any, index: number) => (
                      <div
                        className="tw-w-full md:tw-w-[28%] suitability-items"
                        key={index}
                      >
                        <div className="">
                          <div className="tw-flex tw-justify-center">
                            <Image
                              alt={
                                value?.Icon?.data?.attributes?.url
                                  ? value?.Icon?.data?.attributes?.url
                                  : "suitability-items"
                              }
                              src={value?.Icon?.data?.attributes?.url}
                              width={100}
                              height={100}
                            />
                          </div>
                          <div className="fs-md-14 fw-7 py-2">
                            {value.Title}
                          </div>
                          <div
                            dangerouslySetInnerHTML={{
                              __html: value?.Description,
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
      <ConnectBest />
    </div>
  );
}

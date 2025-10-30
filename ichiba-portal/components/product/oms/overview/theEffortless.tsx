/* eslint-disable @next/next/link-passhref */
import { useTranslation } from "next-i18next";
import Image from "next/image";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function Effortless(props: any) {
  const { t } = useTranslation("common");

  return (
    <div key={`${props.id}_${props.__component}`}>
      {props && (
        <div className="effortless">
          <div className="container">
            <div className="container-child mx-auto text-center">
              <h2 className="fw-7 fs-36 fs-md-28 mb-5">
                {t("oms.effortless.title")}
              </h2>
            </div>
            <div className="row">
              {props?.itemsEffort?.map((value: any, index: any) =>
                index === 6 ? (
                  <div
                    className="offset-lg-2 col-lg-4 col-md-6 mb-4"
                    key={index}
                  >
                    <div className="effor-item">
                      <div className="effor-img text-center ">
                        <Image
                          src={value?.image?.data?.attributes?.url}
                          alt={t("oms.effortless.title") || ""}
                          width={120}
                          height={125}
                          className="mx-auto"
                        />
                      </div>
                      <div
                        dangerouslySetInnerHTML={{ __html: value?.content }}
                      />
                    </div>
                  </div>
                ) : (
                  <div className=" col-lg-4 col-md-6 mb-4" key={index}>
                    <div className="effor-item">
                      <div className="effor-img text-center ">
                        <Image
                          src={value?.image?.data?.attributes?.url}
                          alt={t("oms.effortless.title") || ""}
                          width={120}
                          height={125}
                          className="mx-auto"
                        />
                      </div>
                      <div
                        dangerouslySetInnerHTML={{ __html: value?.content }}
                      />
                    </div>
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

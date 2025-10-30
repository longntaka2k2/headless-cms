/* eslint-disable @next/next/link-passhref */
import { useTranslation } from "next-i18next";
import Image from "next/image";
export default function WhyChoose(props: any) {
  return (
    <div key={`${props.id}_${props.__component}`}>
      {props && (
        <div className="why-choose-oms">
          <div className="container">
            <div
              className="container-child mx-auto text-center"
              dangerouslySetInnerHTML={{ __html: props?.title }}
            />
            <div className="row">
              {props?.items?.map((value: any, index: number) => (
                <div className="col-lg-6 mb-4 " key={index}>
                  <div className="whychoose-items">
                    <Image
                      src={value?.image?.data?.attributes?.url}
                      alt="whychoose-items"
                      width={1000}
                      height={1000}
                      style={{ width: "100%", height: "auto" }}
                    />
                    <div dangerouslySetInnerHTML={{ __html: value?.content }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

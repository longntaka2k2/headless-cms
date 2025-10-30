/* eslint-disable @next/next/link-passhref */
import { useTranslation } from "next-i18next";
import Faq from "@/components/common/faq";

export default function FAQs(props : any) {
  const { t } = useTranslation("common");
  
  return (
    <div className="py-2 px-2 px-md-0" key={`${props.id}_${props.__component}`}>
      {props && (
      <Faq items={props?.items} link={props?.link} />
    )}
    </div>
  );
}

import { useTranslation } from "next-i18next";
import Link from "next/link";
export default function BannerFeatures(props: any) {
  const { t } = useTranslation("common");
  let host = typeof window !== "undefined" ? window.location.origin : "";
  return (
    <div key={`${props.id}_${props.__component}`}>
      {props && (
       <div dangerouslySetInnerHTML={{ __html: props?.content }}/>
      )}
    </div>
  )
}
/* eslint-disable @next/next/link-passhref */
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import bgQuestion from "@/public/icons/company/trust/bgQuestion.png";


export default function GetStarted(props : any) {
  const { t } = useTranslation("common");
  const free = {
    title:'getStarted'
  }
  return (
    <div key={`${props.id}_${props.__component}`}>
      {props && (
      <div className="container" style={{
            backgroundImage: `url(${bgQuestion.src})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            borderRadius:'20px'
          }}>
       <div dangerouslySetInnerHTML={{ __html: props?.content }}/>
      </div>
      )}
    </div>
  );
}

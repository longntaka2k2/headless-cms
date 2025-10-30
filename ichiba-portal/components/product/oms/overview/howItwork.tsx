import { useTranslation } from "next-i18next";
import Bg from "@/public/icons/crossBorder/howItWorkBg.png";
import { useState } from "react";

export default function HowItWork(props : any) {
  const {t} = useTranslation("common");

  return(
    <div key={`${props.id}_${props.__component}`}>
      {props && (
    <div className="howItWork" style={{
          backgroundImage: `url(${Bg.src})`,
          backgroundSize: "cover",
        }}>
      <div className="container user-select-none ">
        <div className="row" dangerouslySetInnerHTML={{ __html: props?.content }} />
      </div>
    </div>
   )}
   </div>
  )
}

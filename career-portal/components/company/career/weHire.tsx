/* eslint-disable react-hooks/rules-of-hooks */
import apply from "@/public/icons/company/career/apply.svg";
import confirm from "@/public/icons/company/career/confirm.svg";
import contact from "@/public/icons/company/career/contract.svg";
import interview from "@/public/icons/company/career/interview.svg";
import notify from "@/public/icons/company/career/notify.svg";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import { useState } from "react";




export default function weHire() { 
  const {t} = useTranslation("common");

    const hire = [
        {title:'apply' , img:apply},
        {title:'interview' , img:interview},
        {title:'notify' , img:notify},
        {title:'confirm' , img:confirm},
        {title:'contract' , img:contact}
    ]
    return (
        <>
            <div className="we-hire">
                <div className="container">
                <div className="text-center fs-36 fw-7 fs-md-28 pb-4">{t(`careers.weHire.title`)} </div>
                <div className="list-hire tw-whitespace-nowrap">
                    <div className="d-flex">
                    {hire.map((value , index) => (
                        <>
                            <div className="hire-items pb-2 text-center tw-flex-[0_0_240px] tw-w-[240px]" key={index}>
                                <Image src={value.img} alt="" />
                                <div className="fs-20 fw-7 fs-md-16 pb-1 ">
                                    {index + 1 + '. ' } &nbsp; {t(`careers.weHire.${value.title}.title`)} 
                                </div>
                                <div className="fs-md-14 pt-1 px-2 tw-whitespace-pre-wrap">
                                    {t(`careers.weHire.${value.title}.content`)}
                                </div>
                            </div>
                        </>
                    ))}
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}
"use client";
import { useEffect, useState } from "react";
// import { strapiDomain } from "@/constants";
import EzImage from "../commons/EzImage";
import Integration from "./integration";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { FaCalculator } from "react-icons/fa";
import { usePathname } from "next/navigation";

const ProxyPaymentComponent = ({ lang }: any) => {
    const [showAnsewr, setShowAnsewr] = useState(false)
    const [selected, setSelected] = useState()

    const hanldeShowAnswer = (item: any) => {
        setSelected(item);
        if (showAnsewr === false) {
            setShowAnsewr(!showAnsewr)
        }
    }
    const locale = usePathname().slice(1, 3);

    const procedureList = [
        { image: "/uploads/Login_cuate_1_418b15529e.svg", title: lang.proxyPayment.procedureStep.stepOne.title, description: lang.proxyPayment.procedureStep.stepOne.description },
        { image: "/uploads/F1_8f6b9e2e9f.svg", title: lang.proxyPayment.procedureStep.stepTwo.title, description: lang.proxyPayment.procedureStep.stepTwo.description },
        { image: "/uploads/F4_27d651a96c.svg", title: lang.proxyPayment.procedureStep.stepThree.title, description: lang.proxyPayment.procedureStep.stepThree.description },
        { image: "/uploads/F5_46c6eef733.svg", title: lang.proxyPayment.procedureStep.stepFour.title, description: lang.proxyPayment.procedureStep.stepFour.description }
    ]
    const questionsList = [
        {
            question: lang.proxyPayment.questions.questionOne.question,
            answer: lang.proxyPayment.questions.questionOne.answer
        },
        {
            question: lang.proxyPayment.questions.questionTwo.question,
            answer: lang.proxyPayment.questions.questionTwo.answer
        },
        {
            question: lang.proxyPayment.questions.questionThree.question,
            answer: lang.proxyPayment.questions.questionThree.answer
        },
        {
            question: lang.proxyPayment.questions.questionFour.question,
            answer: lang.proxyPayment.questions.questionFour.answer
        },
        {
            question: lang.proxyPayment.questions.questionFive.question,
            answer: lang.proxyPayment.questions.questionFive.answer
        },
        {
            question: lang.proxyPayment.questions.questionSix.question,
            answer: lang.proxyPayment.questions.questionSix.answer
        },
    ]

    return (
        <div>
            <div className="relative">
                <div>
                    <EzImage
                        src={"/uploads/Rectangle_6425_1_d47f188742.png"}
                        alt="/uploads/Rectangle_6425_1_d47f188742.png"
                        width={1200}
                        height={150}
                        className="w-full max-h-[35vh] top-0"
                    />
                </div>
                <div className="absolute text-[#fff] top-[0] left-[0] bg-[#00194F] opacity-70 w-full h-full">
                    <div className="container translate-y-[15vh] px-4 lg:px-0 hidden sm:block">
                        <div className="text-lg lg:text-5xl font-bold">{lang.proxyPayment.title}</div>
                        <div className="text-xs lg:text-base lg:mt-4">{lang.proxyPayment.direction}</div>
                    </div>
                </div>
            </div>

            <div className="container grid lg:grid-cols-2 lg:gap-10 py-5 lg:py-14">
                <div>
                    <EzImage
                        src={"/uploads/Rectangle_6837_ca895e516d.png"}
                        alt="/uploads/Rectangle_6837_ca895e516d.png"
                        width={576}
                        height={374}
                        className="min-w-[138px] min-h-[138px]  mx-auto"
                    />
                </div>
                <div className="px-3">
                    <p className="text-xl lg:text-[32px] font-bold leading-[48px]">
                        {lang.proxyPayment.authorizedPayment.title}
                    </p>
                    <div className="py-3 lg:py-6 text-sm">
                        <p>
                            <span className="font-bold">{lang.proxyPayment.authorizedPayment.servicePay} </span>
                            {lang.proxyPayment.authorizedPayment.meaningServicePay}
                        </p>
                        <p className="py-5 lg:py-10">
                            {lang.proxyPayment.authorizedPayment.charges}
                        </p>
                        <p>{lang.proxyPayment.authorizedPayment.note.title}</p>
                        <ul>
                            <li>{lang.proxyPayment.authorizedPayment.note.client}<span className="font-bold">{lang.proxyPayment.authorizedPayment.note.ezbuyJapan}</span>{lang.proxyPayment.authorizedPayment.note.complete}</li>
                            <li>{lang.proxyPayment.authorizedPayment.note.service}</li>
                        </ul>
                    </div>
                    <a href={`/${locale}/contact-sales`}>
                        <button
                            className="cursor-pointer text-sm lg:text-base bg-[#B81010] py-2 px-8 lg:py-3.5 lg:px-12 text-white text-center uppercase"
                        // onClick={() => submit()}
                        >
                            {lang.proxyPayment.contact}
                        </button>
                    </a>
                </div>
            </div>

            <div className="container py-5 lg:py-[60px] px-3">
                <p className="text-xl lg:text-[32px] font-bold text-center">{lang.proxyPayment.procedure}</p>
                <div className="grid justify-items-center lg:flex py-10">

                    <div className="w-full h-full text-center">
                        <div className="px-12">
                            <EzImage
                                src={`${procedureList[0].image}`}
                                alt={`${procedureList[0].image}`}
                                width={138}
                                height={138}
                                className="min-w-[138px] min-h-[138px]  mx-auto"
                            />
                        </div>
                        <p className="text-base lg:text-lg font-bold py-3">{procedureList[0].title}</p>
                        <p className="text-sm">{procedureList[0].description}</p>
                    </div>
                    <EzImage
                        src={"/uploads/Group_15153_3_7ef846394e.svg"}
                        alt={"/uploads/Group_15153_3_7ef846394e.svg"}
                        width={40}
                        height={22}
                        className="w-10 h-5 mt-7 lg:mt-15 rotate-90 lg:rotate-0"
                    />

                    <div className="w-full h-full text-center">
                        <div className="px-12">
                            <EzImage
                                src={`${procedureList[1].image}`}
                                alt={`${procedureList[1].image}`}
                                width={138}
                                height={138}
                                className="min-w-[138px] min-h-[138px]  mx-auto"
                            />
                        </div>
                        <p className="text-base lg:text-lg font-bold py-3">{procedureList[1].title}</p>
                        <p className="text-sm">{procedureList[1].description}</p>
                    </div>
                    <EzImage
                        src={"/uploads/Group_15153_3_7ef846394e.svg"}
                        alt={"/uploads/Group_15153_3_7ef846394e.svg"}
                        width={40}
                        height={22}
                        className="w-10 h-5 mt-7 lg:mt-15 rotate-90 lg:rotate-0"
                    />

                    <div className="w-full h-full text-center">
                        <div className="px-12">
                            <EzImage
                                src={`${procedureList[2].image}`}
                                alt={`${procedureList[2].image}`}
                                width={138}
                                height={138}
                                className="min-w-[138px] min-h-[138px]  mx-auto"
                            />
                        </div>
                        <p className="text-base lg:text-lg font-bold py-3">{procedureList[2].title}</p>
                        <p className="text-sm">{procedureList[2].description}</p>
                    </div>
                    <EzImage
                        src={"/uploads/Group_15153_3_7ef846394e.svg"}
                        alt={"/uploads/Group_15153_3_7ef846394e.svg"}
                        width={40}
                        height={22}
                        className="w-10 h-5 mt-7 lg:mt-15 rotate-90 lg:rotate-0"
                    />

                    <div className="w-full h-full text-center">
                        <div className="px-12">
                            <EzImage
                                src={`${procedureList[3].image}`}
                                alt={`${procedureList[3].image}`}
                                width={138}
                                height={138}
                                className="min-w-[138px] min-h-[138px]  mx-auto"
                            />
                        </div>
                        <p className="text-base lg:text-lg font-bold py-3">{procedureList[3].title}</p>
                        <p className="text-sm">{procedureList[3].description}</p>
                    </div>

                </div>
                <div className="text-center">
                    <a href={`/${locale}/contact-sales`}>
                        <button
                            className="cursor-pointer text-sm lg:text-base bg-[#B81010] py-2 px-8 lg:py-3.5 lg:px-12 text-white"
                        // onClick={() => submit()}
                        >
                            {lang.proxyPayment.registerService}
                        </button>
                    </a>
                </div>
            </div>

            <div className="px-3"
                style={{
                    backgroundImage:
                        `url(https://strapi-ezbuy.ichiba.net/uploads/Group_19083_65a41cdaa2.png)`,
                }}>
                <Integration lang={lang} />
            </div>

            <div className="container pt-8  lg:pt-[60px] px-3">
                <p className="text-xl lg:text-[32px] font-bold text-center">
                    {lang.proxyPayment.questionTitle}
                </p>
                <div className="grid lg:grid-cols-2 lg:gap-32 gap-5 py-5 lg:py-10">
                    <div>
                        {
                            questionsList.map((item: any, index: number) => {
                                return (
                                    <>
                                        <div className="cursor-pointer" key={index} onClick={() => hanldeShowAnswer(item.question)}>
                                            <div className="flex justify-between py-5">
                                                <p className="text-base font-bold">{item.question}</p>
                                                <span>{selected === item.question && showAnsewr === true ? <FaMinus /> : <FaPlus />}</span>
                                            </div>
                                            <div className={selected === item.question && showAnsewr === true ? "block" : "hidden"}>
                                                <p className="text-sm pb-2">{item.answer}</p>
                                            </div>
                                        </div>
                                        <hr />
                                    </>
                                )
                            })
                        }
                    </div>
                    <div className="mx-auto">
                        <EzImage
                            src="/uploads/Group_19080_b1112fc189.png"
                            alt="/uploads/Group_19080_b1112fc189.png"
                            width={476}
                            height={452}
                            className="max-w-[476px] max-h-[452px] w-full h-full"
                        />
                    </div>
                </div>
                <div className="text-center">
                    <button
                        className="cursor-pointer text-sm lg:text-base bg-[#B81010] py-2 px-8 lg:py-3.5 lg:px-12 text-white"
                    // onClick={() => submit()}
                    >
                        <div className="flex items-center gap-2">
                            <FaCalculator /> {lang.proxyPayment.buttonQuestionsText}
                        </div>
                    </button>
                </div>
            </div >
        </div>
    )
}

export default ProxyPaymentComponent;
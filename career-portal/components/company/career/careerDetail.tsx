/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-key */
import { useTranslation } from "next-i18next";
import Image from "next/image";
import backgroundJoinUs from "@/public/icons/company/career/backgroundJoinUs.jpg";
import bgOffice from "@/public/icons/company/career/bgOffice.png";
import loadingFile from "@/public/icons/company/career/loadingfile.json";
import sendIcon from "@/public/icons/company/career/sendIcon.svg";

import { SetStateAction, useEffect, useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faFileArrowUp,
  faPaperPlane,
  faShareNodes,
} from "@fortawesome/free-solid-svg-icons";
import { Gutter } from "@/components/Gutter";
import RichText from "@/components/RichText";
import { Element, scroller } from "react-scroll";
import { useRouter } from "next/router";
import { ChangeEvent } from "react";
import { assert } from "console";
import createIssue from "../../../pages/api/createIssue";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import Link from "next/link";
import ShareButtonComponent from "./shareFB";
import { Dropdown } from "react-bootstrap";

export default function CareerDetailComponent(data: any) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [portfolio, setPo] = useState("");
  const [phone, setPhone] = useState("");
  const [errorPhone, setErrorPhone] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorName, setErrorName] = useState("");
  const [errorCV, setCV] = useState("");
  const [loading, setLoading] = useState(false);
  const { t } = useTranslation("common");
  const router = useRouter();
  const [selectedFile, setSelectedFile] = useState("");
  const [link, setLink] = useState("");

  const content = data?.data[0]?.layout?.find(
    (x: { blockName: string }) => x.blockName === "content"
  )?.columns[0];
  const headings = data?.data[0]?.layout?.find(
    (x: { blockName: string }) => x.blockName === "heading"
  )?.columns;
  const copyText = async () => {
    await navigator.clipboard.writeText(`https://careers.ichiba.net${router?.locale === 'vi' ? '' :'/en'}${router?.asPath}`);
  };

  const onChangeAvatar = async (e: ChangeEvent<HTMLInputElement>) => {
    const api = process.env.NEXT_PUBLIC_STORAGE_FILE as string;
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0] as File;
      setSelectedFile(file.name);
      const formData = new FormData();
      formData.append("File", file);
      setLoading(true);
      try {
        let response = await fetch(
          api,
          {
            method: "POST",
            body: formData,
            headers:{
              "x-app-id":"careers",
              "x-path":"files",
              "x-role":"public"
            }
          }
        );
        let result = await response.json();
        setLink(result?.uri);
      } catch (error) {
        console.error("Error:", error);
        // Xử lý lỗi nếu có
      }
    }
    setLoading(false);
  };
  const handleScrollToDiv = () => {
    scroller.scrollTo("divToScroll", {
      duration: 0,
      delay: 5,
      smooth: true,
      offset: -50,
    });
  };
  function changeName(event: { target: { value: SetStateAction<string> } }) {
    setFullName(event.target.value);
  }
  function changeEmail(event: { target: { value: SetStateAction<string> } }) {
    setEmail(event.target.value as string);
  }
  function changePhone(event: { target: { value: SetStateAction<string> } }) {
    setPhone(event.target.value);
  }
  function changePortfolio(event: {
    target: { value: SetStateAction<string> };
  }) {
    setPo(event.target.value);
  }
  function deleteSpace(){
    setFullName(fullName.replace(/^\s+|\s+$/g, ''))
    setEmail(email.replace(/\s/g, ''))
    setPhone(phone.replace(/^\s+|\s+$/g, ''))

  }
  function validateEmail(email : String) {
    // Biểu thức chính quy để kiểm tra định dạng email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    // Kiểm tra chuỗi với biểu thức chính quy
    return emailRegex.test(email as string);
  }
  function validateForm() {
    let isValid = true;
    if (fullName === "") {
      setErrorName(t("careers.validForm.name") || "");
      isValid = false;
    } else {
      setErrorName("");
    }
    if (phone === "") {
      setErrorPhone(t("careers.validForm.phone") || "");
      isValid = false;
    } else {
      setErrorPhone("");
    }
    if (!validateEmail(email)) {
      setErrorEmail(t("careers.validForm.email") || "");
      isValid = false;
    } else {
      setErrorEmail("");
    }
    if (link === "") {
      setCV(t("careers.validForm.cv") || "");
      isValid = false;
    } else {
      setCV("");
    }
    return isValid;
  }

  async function submit() {
    const validFrom = validateForm();
    const issueTypeId = Number(process.env.NEXT_PUBLIC_ISSUE_TYPE_ID);
    const jiraProjectKey = process.env.NEXT_PUBLIC_JIRA_PROJECT_KEY;
    const jiraEmail = process.env.NEXT_PUBLIC_JIRA_EMAIL;
    const customFieldId = process.env.NEXT_PUBLIC_CUSTOM_FIELD_ID;
    const labels = process.env.NEXT_PUBLIC_LABELS_CV;
    const dataReq = {
      summary: data?.data[0]?.title,
      description: `Họ tên: ${fullName}\r\n Số điện thoại: ${phone}\r\n Email: ${email}\r\n Link CV: ${link}`,
      issueTypeId: issueTypeId, // cho vào config
      email: email,
      FullName:fullName,
      jiraProjectKey: jiraProjectKey, // cho vào config
      jiraEmail: jiraEmail, // cho vào config
      attachLink: {
        linkAttachment: link,
        customFieldId: customFieldId, // cho vào config
      },
      labels: [
        labels, // cho vào config
      ],
    };
    if (validFrom === true) {
      setLoading(true);
      try {
        const response = await createIssue(dataReq);
        if (!response) {
          toast.error(t("false"), { autoClose: 700 });
          return;
        }
        //@ts-ignore
        if (response?.data?.success) {
          toast.success(t("suscess"), { autoClose: 700 });
          setLink("");
          setPo("");
          setPhone("");
          setEmail("");
          setFullName("");
          setSelectedFile("");
        } else {
          //@ts-ignore
          toast.error(response?.data?.message ? response?.data?.message : t("false"), { autoClose: 700 });
        }
      } catch (error) {
        console.error(error);
        // Xử lý lỗi từ API ở đây
      }
      setLoading(false);
    }
  }
  const goBack = () => {
    router.back();
  };
  
  return (
    <>
      <div id="carrerlv2">
        <div className="container">
          <div className="container-child-md mx-auto">
            <div className="">
              <div onClick={goBack} className="pb-1 cursor ">
                <FontAwesomeIcon icon={faChevronLeft} />
                &ensp; Back
              </div>
              <div className=" job-body">
                <div className="row">
                  <div className="col-lg-7 fs-24 fw-7 fs-md-20" >
                    {data?.data[0]?.title}
                  </div>
                  <div className="col-lg-5 ">
                    <div className="d-flex justify-content-lg-end justify-content-md-between align-items-center ">
                      <div
                        className="apply cursor text-center me-3"
                        onClick={handleScrollToDiv}
                      >
                        <Image src={sendIcon} alt="" width={25} height={25} className="me-1"/>
                        {t("careers.applyNow")}
                      </div>
                      <div className="fs-md-14 cursor" onClick={() => copyText()}>
                        <Dropdown className="cursor" id="dropdown" >
                        <Dropdown.Toggle style={{background:'none' , color:'#333333',border:'none'}}  id="aa">
                        <FontAwesomeIcon
                          icon={faShareNodes}
                          className="fs-20"
                        />{" "}
                        <span className="fs-16 text-decoration-underline">
                          {t("careers.share")}
                        </span>
                          
                        </Dropdown.Toggle>
                        <Dropdown.Menu
                          renderOnMount={true}
                          className=" mt-1 py-2 px-3"
                          style={{
                            
                            width: "max-content",
                            border: "none",
                            boxShadow: "0 2px 10px rgba(0,0,0,.25)",
                            minWidth: "min-content",
                          }}
                        >
                         
                        <ShareButtonComponent />
                            
                        </Dropdown.Menu>
                      </Dropdown>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mx-lg-1 row my-3 date-job">
                  <div className="col-10 d-lg-flex justify-content-between">
                    {headings?.map((value: any, index: number) => (
                      <div key={index}>
                        <div className="fw-6 fs-md-14 pb-3">{value?.quoteHeader}</div>
                        <div className="pb-lg-3 pb-2 fs-md-14">{value?.quoteText}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="">
                  {
                    <Gutter>
                      {content && <RichText content={content?.richText} />}
                    </Gutter>
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
        <Element name="divToScroll">
          <div
            className="join-us"
            style={{
              backgroundImage: `url(${backgroundJoinUs.src})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              marginTop: "40px",
            }}
          >
            <div className="container">
              <div className="submit-form ">
                <div className="text-center fw-7 fs-36 fs-md-28 mb-4">
                  {t("careers.joinUs")}
                </div>
                <div className="text-end color-red pb-1">{errorName}</div>
                <div className="d-sm-flex justify-content-sm-between mb-4">
                  <div className="align-self-center fs-md-14">
                    {t("careers.fullName")} <span className="color-red">*</span>
                  </div>
                  <div className="input-submit">
                    <input
                      type="text"
                      placeholder="Full name ..."
                      onChange={changeName}
                      onBlur={deleteSpace}
                      value={fullName}
                    />
                  </div>
                </div>
                <div className="text-end color-red pb-1">{errorEmail}</div>
                <div className="d-sm-flex justify-content-sm-between mb-4">
                  <div className="align-self-center fs-md-14">
                    Email <span className="color-red">*</span>
                  </div>
                  <div className="input-submit">
                    <input
                      type="text"
                      placeholder="Email ..."
                      onChange={changeEmail}
                      onBlur={deleteSpace}
                      value={email}
                    />
                  </div>
                </div>
                <div className="text-end color-red pb-1">{errorPhone}</div>
                <div
                  className="d-sm-flex justify-content-sm-between pb-4 "
                  style={{ borderBottom: "1px solid #666666" }}
                >
                  <div className="align-self-center fs-md-14">
                    {t("careers.phoneNumber")} <span className="color-red">*</span>
                  </div>
                  <div className="input-submit">
                    <input
                      type="text"
                      placeholder="Your phone number ..."
                      onChange={changePhone}
                      value={phone}
                      onBlur={deleteSpace}
                      onInput={(e : any) => e.target.value = e.target.value.replace(/[^0-9\s()-]/g, '')}
                      required pattern="[0-9]{10}" maxLength={11} 
                    />
                  </div>
                </div>
                <div className="d-sm-flex justify-content-sm-between my-4">
                  <div className="align-self-center fs-md-14">Portfolio</div>
                  <div className="input-submit">
                    <input
                      type="text"
                      placeholder="Your portfolio URL ..."
                      onChange={changePortfolio}
                      value={portfolio}
                    />
                  </div>
                </div>
                <div className="text-end color-red pb-1">{errorCV}</div>
                <div className="d-sm-flex justify-content-sm-between mb-4">
                  <div className="align-self-center fs-md-14">
                    CV <span className="color-red">*</span>
                  </div>
                  <div className="upLoadFile fs-md-14">
                    <label htmlFor="input" className="cursor">
                      <FontAwesomeIcon
                        icon={faFileArrowUp}
                        className="pe-2 fs-24"
                      />
                      {selectedFile !== "" ? selectedFile : " Upload File"}
                    </label>
                    <input
                      onChange={onChangeAvatar}
                      id="input"
                      type={"file"}
                      className=" "
                    />
                  </div>
                </div>
                <div className=" pb-5 d-lg-flex align-items-center justify-content-between">
                  <div className="pe-4 fs-12">{t("careers.bySubmit")}</div>
                  <div className="float-end text-center cursor mt-lg-0 mt-2">
                    <div className="button fs-md-14 " onClick={submit}>
                      {t("careers.submit")} &ensp;{" "}
                      <FontAwesomeIcon icon={faPaperPlane} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Element>
        <div className="our-office">
          <div className="container">
            <div className="text-center">
              {" "}
              <div className="fs-36 fw-6 fs-28">{t("careers.ourOffice")}</div>
            </div>
            <Image
              src={bgOffice}
              alt=""
              style={{ width: "100%", height: "auto" }}
              className="pt-4"
            />
          </div>
        </div>
      </div>
      {loading && (
        <div className="loadding">
          <Player
            src={loadingFile}
            loop
            autoplay
            className="mx-auto "
            style={{
              marginTop: "15%",
              width: "300px",
              height: "300px",
            }}
          >
            <Controls />
          </Player>
        </div>
      )}
      <ToastContainer />
    </>
  );
}

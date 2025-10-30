"use client"
import Link from "next/link";
import { useState, ChangeEvent, useRef, useEffect } from "react";
import Select from "react-select";
import bg from "@/public/icons/bannerSupport.png";
import upfile from "@/public/icons/upfile.png";
import EzImage from "../commons/EzImage";
import Image from "next/image";
import clsx from "clsx";
import './styles.css';
import { sendToWebhookSupport } from "@/public/api/activepieces";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const SupportComponent = ({ lang }: any, { params }: any) => {

  const [option, setOption] = useState([] as any);
  const [subject, setSubject] = useState("");
  const [question, setQuestion] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [link, setLink] = useState("");

  const [optionValid, setOptionValid] = useState("");
  const [subjectValid, setSubjectValid] = useState("");
  const [questionValid, setQuestionValid] = useState("");
  const [firstNameValid, setFirstNameValid] = useState("");
  const [lastNameValid, setLastNameValid] = useState("");
  const [emailValid, setEmailValid] = useState("");

  const [selectedFile, setSelectedFile] = useState("");

  const selectOption = useRef(null);

  const customStyles = {
    control: (base: any, state: any) => ({
      ...base,
      padding: "5px 0px !important",
      overflow: "hidden",
      WebkitBoxOrient: "vertical",
      WebkitLineClamp: "1",
      borderRadius: "8px",
    }),
    valueContainer: (provided: any, state: any) => ({
      ...provided,
      minHeight: "30px",
      height: "30px",
    }),
    singleValue: (provided: any, state: any) => ({
      ...provided,
      marginBottom: "7px",
    }),
    indicatorsContainer: (provided: any, state: any) => ({
      ...provided,
      height: "30px",
    }),
  };

  function validateEmail(email: String) {
    // Biểu thức chính quy để kiểm tra định dạng email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Kiểm tra chuỗi với biểu thức chính quy
    return emailRegex.test(email as string);
  }

  function validateField(value: any, setValidFunction: any) {
    if (value === "" || value.length <= 0) {
      setValidFunction(`${lang.supportRequest.requiredField}` || "");
      return false;
    } else {
      setValidFunction("");
      return true;
    }
  }

  const onChangeAvatar = async (e: ChangeEvent<HTMLInputElement>) => {
    const api = process.env.NEXT_PUBLIC_STORAGE_FILE as string;
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0] as File;
      setSelectedFile(file.name);
      const formData = new FormData();
      formData.append("File", file);
      // setLoading(true);
      try {
        let response = await fetch(api, {
          method: "POST",
          body: formData,
          headers: {
            "x-app-id": "careers",
            "x-path": "files",
            "x-role": "public",
          },
        });
        let result = await response.json();
        setLink(result?.uri);
        console.error("hi:", result);
      } catch (error) {
        console.error("Error:", error);
        // Xử lý lỗi nếu có
      }
    }
    // setLoading(false);
  };


  function validateForm() {

    const isSubjectValid = validateField(subject, setSubjectValid);
    const isQuestionValid = validateField(question, setQuestionValid);
    const isFirstNameValid = validateField(firstName, setFirstNameValid);
    const isLastNameValid = validateField(lastName, setLastNameValid);

    const isOptionValid = validateField(option, setOptionValid);
    const isEmailValid = validateEmail(email);

    // setOptionValid(option?.length > 0 ? "" : `${lang.supportRequest.requiredField}` || "");
    setEmailValid(isEmailValid ? "" : `${lang.supportRequest.requiredField}` || "");

    return (
      // (option.length > 0) &&
      isOptionValid &&
      isSubjectValid &&
      isQuestionValid &&
      isFirstNameValid &&
      isLastNameValid &&
      isEmailValid
    );
  }

  async function submit(event: any) {
    event?.preventDefault();
    const validFrom = validateForm();
    const labels = process.env.NEXT_PUBLIC_JIRA_LABELS;
    if (validFrom) {
      const param = {
        option: option[0]
          ?.map((item: any) => `${item.value}`)
          .join(", "),
        subject: subject,
        question: question,
        firstName: firstName,
        lastName: lastName,
        email: email,
        attachLink: {
          linkAttachment: link,
        },
        labels: [
          labels, // cho vào config
        ],
        selectedFile: selectedFile
      };
      const result = await sendToWebhookSupport(param as any);
      if (result?.success) {
        toast.success(`${lang.supportRequest.toastSuccess}`, { autoClose: 700 });
        setOption([] as any);
        setSubject("");
        setQuestion("");
        setFirstName("");
        setLastName("");
        setEmail("");
        setLink("");
        setSelectedFile("");
        //@ts-ignore
        selectOption?.current?.clearValue();
      } else {
        //@ts-ignore
        toast.error(`${lang.supportRequest.toastFalse}`, { autoClose: 700 });
      }
    }

  }


  return (
    <div className="relative bg-[url(https://strapi-efex.ichiba.net/uploads/Ship_strategically_1e9030418d.png)] bg-no-repeat">

      <div className="absolute z-1 top-[35%] translate-y-[-35%] right-[10%] hidden lg:block">
        <EzImage
          src={"/uploads/Logo_Efex_af89ed8e71.png"}
          className="col-span-7 row-span-3"
          alt="/uploads/Logo_Efex_af89ed8e71.png"
          unoptimized
          width={260}
          height={234}
        />
      </div>

      <div className="relative container px-5 py-8 lg:py-32 lg:px-40">
        <div className="shadow-6 p-6 rounded-xl bg-white">
          <div className="flex justify-between items-center">
            <div className="font-medium text-sm text-brand-primary">
              {lang.supportRequest.efexSupport}
            </div>
            <div className="text-[#666] text-xs lg:text-sm">
              <span className="text text-[#F5222D] text-base font-medium">
                *{" "}
              </span>
              {lang.supportRequest.required}
            </div>
          </div>
          <div className="mt-1 text-lg lg:text-2xl font-bold">
            {lang.supportRequest.titleSubmit}
          </div>
          <div className="text-[#666] text-sm">
            {lang.supportRequest.subTitle}
          </div>

          <form onSubmit={submit}>
            <div className="grid lg:flex gap-4 items-center lg:mt-4 mt-3 w-full lg:w-[70%]">
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-9 bg-gradient-to-r from-[#00194F] to-[#AF0000] rounded-[20px]"></div>
                <div className="text-sm mb-2">
                  {lang.supportRequest.discuss}
                </div>
              </div>

              <div className="w-full lg:w-[70%]">
                <Select
                  placeholder={lang.supportRequest.getChoose}
                  options={lang.supportRequest.options}
                  className={clsx(
                    optionValid !== ""
                      ? "border-[#F5222D] shadow-[0px_0px_0px_2px_rgba(245,_34,_45,_0.16)]"
                      : "border-[#ddd]",
                    "border rounded-lg"
                  )}
                  styles={customStyles}
                  ref={selectOption}
                  classNames={{
                    control: (state) => "py-1 text-sm ",
                  }}
                  onChange={(newValue) => setOption([newValue] as any)}
                  isMulti
                />
                <div className="text-[#F5222D] mt-2">{optionValid}</div>
              </div>
            </div>

            <div className="flex items-center mt-3 lg:mt-5 mb-4">
              <div className="font-bold mr-2 text-lg">
                {lang.supportRequest.issuaeInfor}
              </div>
              <div className="h-[1px] flex-1 bg-[#DDD]"></div>
            </div>

            <div>
              <div className="text-sm">
                {lang.supportRequest.subject}
                <span className="font-medium text-[#F5222D] "> *</span>
              </div>
              <div
                className={clsx(
                  subjectValid
                    ? "border-[#F5222D] shadow-[0px_0px_0px_2px_rgba(245,_34,_45,_0.16)]"
                    : " border-[#ddd] ",
                  " border rounded-lg py-3 px-4 mt-2"
                )}
              >
                <input
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="form-control form-input text-sm w-full"
                  placeholder={lang.supportRequest.subjectPlaceholder}
                />
              </div>
              <div className="text-[#F5222D] mt-2">{subjectValid}</div>
            </div>

            <div className="mt-4">
              <div className="text-sm">
                {lang.supportRequest.question}
                <span className="font-medium text-[#F5222D] "> *</span>
              </div>
              <div
                className={clsx(
                  questionValid
                    ? "border-[#F5222D] shadow-[0px_0px_0px_2px_rgba(245,_34,_45,_0.16)]"
                    : " border-[#ddd] ",
                  " border rounded-lg py-3 px-4 mt-2"
                )}>
                <textarea
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  className="form-control form-input text-sm w-full"
                  placeholder={lang.supportRequest.questionPlaceholder}
                  rows={2}
                ></textarea>
              </div>
              <div className="text-[#F5222D] mt-2">{questionValid}</div>
            </div>

            <div className="mt-3 mt-lg-3">
              <div className="fs-14 fw-5 pb-1 ">
                {lang.supportRequest.supportingRequest}
              </div>
              <div className="upLoadFile fs-md-14">
                <label htmlFor="anySupport" className="cursor-pointer">
                  {selectedFile !== "" ? (
                    <div className="py-8 flex items-center gap-3 justify-center">
                      <p className="text-[#1D39C4] text-base">
                        {selectedFile}
                      </p>
                      <div onClick={() => setSelectedFile("")}
                        className="">
                        <FontAwesomeIcon icon={faX} />
                      </div>
                    </div>
                  ) : (
                    <>
                      <Image
                        src={upfile}
                        alt="anySupport"
                        className="mx-auto my-1"
                      />
                      <div className="fw-5 fs-14">
                        {lang.supportRequest.uploadFile}
                      </div>
                      <div className="fs-12 color-note">
                        {lang.supportRequest.typesAccepted}
                      </div>
                      <div className="fs-12 color-note">
                        {lang.supportRequest.maximumFile}
                      </div>
                    </>
                  )}
                </label>
                <input
                  onChange={onChangeAvatar}
                  id="anySupport"
                  type={"file"}
                  className=" "
                />
              </div>
            </div>

            <div className="flex items-center mt-3 lg:mt-5 mb-4">
              <div className="font-bold mr-2 text-lg">
                {lang.supportRequest.contactInfor}
              </div>
              <div className="h-[1px] flex-1 bg-[#DDD]"></div>
            </div>

            <div className="">
              <div className="lg:mt-4 mt-3 grid lg:grid-cols-2 gap-4">
                <div className="">
                  <div className="text-sm">
                    {lang.supportRequest.firstName}
                    <span className="font-medium text-[#F5222D] "> *</span>
                  </div>
                  <div
                    className={clsx(
                      firstNameValid
                        ? "border-[#F5222D] shadow-[0px_0px_0px_2px_rgba(245,_34,_45,_0.16)]"
                        : " border-[#ddd] ",
                      " border rounded-lg py-3 px-4 mt-2"
                    )}
                  >
                    <input
                      type="text"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      className="form-control form-input text-sm w-full"
                      placeholder={lang.supportRequest.firstNamePlaceholder}
                    />
                  </div>
                  <div className="text-[#F5222D] mt-2">{firstNameValid}</div>
                </div>

                <div className="">
                  <div className="text-sm">
                    {lang.supportRequest.lastName}
                    <span className="font-medium text-[#F5222D]"> *</span>
                  </div>
                  <div
                    className={clsx(
                      lastNameValid
                        ? "border-[#F5222D] shadow-[0px_0px_0px_2px_rgba(245,_34,_45,_0.16)]"
                        : " border-[#ddd] ",
                      " border rounded-lg py-3 px-4 mt-2"
                    )}
                  >
                    <input
                      type="text"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      className="form-control form-input text-sm w-full"
                      placeholder={lang.supportRequest.lastNamePlaceholder}
                    />
                  </div>
                  <div className="text-[#F5222D] mt-2">{lastNameValid}</div>
                </div>
              </div>
            </div>

            <div className="lg:mt-5 mt-3">
              <div className="text-sm">
                {lang.supportRequest.companyEmail}
                <span className="font-medium text-[#F5222D] "> *</span>
              </div>
              <div
                className={clsx(
                  emailValid
                    ? "border-[#F5222D] shadow-[0px_0px_0px_2px_rgba(245,_34,_45,_0.16)]"
                    : " border-[#ddd] ",
                  " border rounded-lg py-3 px-4 mt-2"
                )}
              >
                <input
                  type="text"
                  value={email}
                  onBlur={() => setEmail(email.replace(/^\s+|\s+$/g, ""))}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-control form-input text-sm w-full"
                  placeholder={lang.supportRequest.companyEmailPlaceholder}
                />
              </div>
              <div className="text-[#F5222D] mt-2">{emailValid}</div>
            </div>

            <div className="lg:mt-5 mt-3 lg:flex justify-between items-center">
              <div className="text-sm">
                <span>
                  {lang.supportRequest.bySubmit}
                </span>
                <span className="text-brand-primary font-medium">
                  {" "}
                  {lang.supportRequest.privacy}
                </span>
              </div>
              <button
                type="submit"
                className="cursor-pointer lg:ml-10 mt-4 lg:mt-0 
                    max-h-[44px] h-max px-8 py-2 bg-brand-primary rounded-lg
                     text-white text-center text-sm lg:text-base"
              >
                {lang.supportRequest.submitText}
              </button>
            </div>
          </form>

        </div>
      </div >
      <ToastContainer />
    </div >
  )
}

export default SupportComponent


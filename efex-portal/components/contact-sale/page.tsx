"use client";
import Link from "next/link";
import EzImage from "../commons/EzImage";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import Integration from "./Integration";
import { sendToWebhook } from "@/public/api/activepieces";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { usePathname } from "next/navigation";


const ContactSalesComponent = ({ lang }: any, { id }: any) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [companyWebsite, setCompanyWebsite] = useState("");
  const [des, setDes] = useState("");
  const [firstNameValid, setValidFirstName] = useState(false);
  const [phoneValid, setValidPhone] = useState(false);
  const [emailValid, setValidEmail] = useState(false);
  const [companyWebsiteValid, setCompanyWebsiteValid] = useState(false);

  const validateForm = () => {
    let isValid = true;
    if (name === "") {
      setValidFirstName(true);
      isValid = false;
    } else {
      setValidFirstName(false);
    }
    if (phone === "" || phone.length < 10) {
      setValidPhone(true);
      isValid = false;
    } else {
      setValidPhone(false);
    }
    if (!validateEmail(email)) {
      setValidEmail(true);
      isValid = false;
    } else {
      setValidEmail(false);
    }
    if (companyWebsite === "") {
      setCompanyWebsiteValid(true);
      isValid = false;
    } else {
      setCompanyWebsiteValid(false);
    }
    return isValid;
  };
  const locale = usePathname().split("/")[1];

  function validateEmail(email: String) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email as string);
  }

  async function submit() {
    const validFrom = validateForm();
    if (validFrom) {
      const param = {
        source: `efex.vn/${locale}`,
        name: name,
        email: email,
        phone: phone,
        companyWebsite: companyWebsite,
        description: des,
        label: "EFEX"
      };
      const result = await sendToWebhook(param as any);
      if (result?.success) {
        toast.success(lang.contactsale.success, { autoClose: 700 });
        setName("");
        setEmail("");
        setPhone("");
        setCompanyWebsite("");
        setDes("");
        window.location.href = `/${locale}/thank-you`;
      } else {
        //@ts-ignore
        toast.error(lang.contactsale.false, { autoClose: 700 });
      }
    }
  }

  return (
    <div>
      <div className="lg:bg-[linear-gradient(to_right,#FFF_0%,#FFF_65%,#2A437D_65%,#2A437D_100%)] bg-[linear-gradient(130deg,#FFF,#2a437d5c)]">
        <div className="grid lg:grid-cols-12 lg:gap-[85px] gap-8 container lg:py-20 py-8">
          <div className="lg:col-span-5 px-4 lg:px-0">
            <div className="text-2xl lg:text-4xl font-bold flex items-center">
              {lang.contactsale.title}
              <EzImage
                src={"/uploads/Group_2_db4b693c38.svg"}
                alt=""
                quality={100}
                width={100}
                height={40}
                className={`ml-2  ${locale === "en" ? "hidden" : ""} `}
              />
            </div>
            <div className="text-sm lg:text-base lg:mt-6 mt-4">
              {lang.contactsale.subtitle}
            </div>
            <div className="grid gap-5 mt-4">
              {lang.contactsale.content.map((value: any, index: number) => (
                <div className="flex items-center" key={index}>
                  <EzImage
                    src={"/uploads/Group_1_5cca8dfa88.svg"}
                    alt="/uploads/Group_1_5cca8dfa88.svg"
                    width={24}
                    height={24}
                    quality={100}
                    className="max-w-6 max-h-6 w-6 h-6"
                  />
                  <div className="ml-3">{value}</div>
                </div>
              ))}
            </div>
            <div className="lg:mt-10 mt-5 flex items-center">
              <EzImage
                src={"/uploads/Group_3b6a279b57.svg"}
                alt="/uploads/Group_3b6a279b57.svg"
                width={24}
                height={24}
                quality={100}
                className="max-w-6 max-h-6 w-6 h-6"
              />
              <div className="text-sm lg:text-base ml-3">
                <div>{lang.contactsale.looking}</div>
                <div>
                  <span>{lang.contactsale.visit.visit}</span>
                  <Link
                    href={
                      locale === "en"
                        ? "https://support.efex.vn/en/"
                        : "https://support.efex.vn/vi/"
                    }
                    target="_blank"
                    className="text-brand-primary font-medium underline"
                  >
                    {lang.contactsale.visit.help}
                  </Link>
                  <span>{lang.contactsale.visit.or}</span>
                  <Link
                    href={"mailto:admin@efex.asia"}
                    target="_blank"
                    className="text-brand-primary font-medium underline"
                  >
                    {lang.contactsale.visit.email}
                  </Link>
                </div>
              </div>
            </div>
            <EzImage
              src={"/uploads/Frame_427318597_0e9f1def1d.png"}
              alt="/uploads/Frame_427318597_0e9f1def1d.png"
              className="lg:mt-10 mt-5"
              width={460}
              quality={100}
              height={465}
            />
          </div>
          <div className="lg:col-span-7 mx-4 lg:mx-0 relative z-[1]">
            <div className="shadow-6 p-6 rounded-xl bg-white">
              <div className="flex justify-between items-center">
                <div className="font-medium text-sm text-brand-primary">
                  {lang.contactsale.efexSupport}
                </div>
                <div className="text-[#666] text-xs lg:text-sm">
                  <span className="text text-[#F5222D] text-base font-medium">
                    *{" "}
                  </span>
                  {lang.contactsale.required}
                </div>
              </div>
              <div className="flex items-center mt-3 lg:mt-5">
                <div className="font-bold mr-2 text-lg">
                  {lang.contactsale.contact}
                </div>
                <div className="h-[1px] flex-1 bg-[#DDD]"></div>
              </div>
              <div className="">
                <div className="lg:mt-4 mt-3 grid gap-4">
                  <div className="">
                    <div className="text-sm">
                      {lang.contactsale.fullName}{" "}
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
                        value={name}
                        onBlur={() => setName(name.replace(/^\s+|\s+$/g, ""))}
                        onChange={(e) => setName(e.target.value)}
                        className="form-control form-input text-sm w-full"
                        placeholder={"Ex: " + lang.contactsale.fullName}
                      />
                    </div>
                    <div
                      className={clsx(
                        !firstNameValid
                          ? "hidden"
                          : "text-xs lg:text-sm text-brand-primary mt-1"
                      )}
                    >
                      {lang.contactsale.fieldRequired}
                    </div>
                  </div>
                  <div className="">
                    <div className="text-sm">
                      {lang.contactsale.phone}{" "}
                      <span className="font-medium text-[#F5222D] "> *</span>
                    </div>
                    <div className="mt-2">
                      <PhoneInput
                        inputClass={"form-input text-sm"}
                        inputStyle={{
                          height: "48px",
                          borderRadius: "8px",
                          border: phoneValid
                            ? "1px solid #F5222D"
                            : "1px solid #ddd",
                          boxShadow: phoneValid
                            ? "0px 0px 0px 2px rgba(245, 34, 45, 0.16)"
                            : "",
                          width: "100%",
                        }}
                        onChange={(phone) => setPhone(phone)}
                        country={"vn"}
                        value={phone}
                      />
                    </div>
                  </div>
                  <div className="">
                    <div className="text-sm">
                      {lang.contactsale.email}{" "}
                      <span className="font-medium text-[#F5222D]"> *</span>
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
                        placeholder={"Ex: email@gmail.com"}
                      />
                    </div>
                    <div
                      className={clsx(
                        !emailValid
                          ? "hidden"
                          : "text-xs lg:text-sm text-brand-primary mt-1"
                      )}
                    >
                      {lang.contactsale.fieldRequired}
                    </div>
                  </div>
                  <div className="">
                    <div className="text-sm">
                      {lang.contactsale.companyWebsite}
                      <span className="font-medium text-[#F5222D] "> *</span>
                    </div>
                    <div
                      className={clsx(
                        companyWebsiteValid
                          ? "border-[#F5222D] shadow-[0px_0px_0px_2px_rgba(245,_34,_45,_0.16)]"
                          : " border-[#ddd] ",
                        " border rounded-lg py-3 px-4 mt-2"
                      )}
                    >
                      <input
                        type="text"
                        className="form-control form-input text-sm w-full"
                        placeholder={lang.contactsale.inputCompanyWebsite}
                        value={companyWebsite}
                        onChange={(e) => setCompanyWebsite(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="">
                    <div className="text-sm">{lang.contactsale.serviceInterested} </div>
                    <div className="border border-[#ddd] rounded-lg py-3 px-4 mt-2">
                      <textarea
                        value={des}
                        onChange={(e) => setDes(e.target.value)}
                        className="form-control form-input text-sm w-full"
                        placeholder={lang.contactsale.description}
                        rows={2}
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>


              <div
                id={id}
                className="cursor-pointer mt-4 lg:mt-5 mx-auto w-full max-w-[170px] max-h-[44px] h-max px-8 py-2 bg-brand-primary rounded-lg text-white text-center"
                onClick={() => submit()}
              >
                {lang.contactsale.submit}
              </div>
            </div>
          </div>

          <EzImage
            src={"/uploads/Background_1_dd0ec16ac4.svg"}
            alt="/uploads/Background_1_dd0ec16ac4.svg"
            width={290}
            height={269}
            quality={100}
            className="absolute right-0 bottom-[-185px] w-[450px] hidden lg:block"
          />
        </div>
      </div>
      <Integration lang={lang} />
      <ToastContainer />
    </div>
  );
};

export default ContactSalesComponent;

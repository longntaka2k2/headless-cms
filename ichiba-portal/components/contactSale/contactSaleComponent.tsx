import React, { SetStateAction, useEffect, useRef, useState } from "react";
import { useTranslation } from "next-i18next";
import bg from "@/public/icons/bgContactSale.png";
import ct1 from "@/public/icons/ct1.svg";
import ct2 from "@/public/icons/ct2.svg";
import ct3 from "@/public/icons/ct3.svg";
import svg2 from "@/public/icons/contactSale/svg2.svg";
import svg3 from "@/public/icons/contactSale/svg3.svg";
import svg4 from "@/public/icons/contactSale/svg4.svg";
import svg5 from "@/public/icons/contactSale/svg5.svg";
import svg6 from "@/public/icons/contactSale/svg6.svg";
import svg7 from "@/public/icons/contactSale/svg7.svg";
import svg8 from "@/public/icons/contactSale/svg8.svg";
import svg9 from "@/public/icons/contactSale/svg9.svg";
import svg10 from "@/public/icons/contactSale/svg10.svg";
import svg11 from "@/public/icons/contactSale/svg11.svg";
import Image from "next/image";
import clsx from "clsx";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { usePathname } from "next/navigation";
import { sendToWebhook } from "@/services/activepieces";

const img = [
  { img: svg2 },
  { img: svg3 },
  { img: svg4 },
  { img: svg5 },
  { img: svg6 },
  { img: svg7 },
  { img: svg8 },
  { img: svg9 },
  { img: svg10 },
  { img: svg11 },
];

export default function ContactSaleComponent() {
  const { t } = useTranslation("common");
  const [host, setHost] = useState("");
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
        source: `ichiba.vn`,
        name: name,
        email: email,
        phone: phone,
        companyWebsite: companyWebsite,
        description: des,
        label: "ICHIBA"
      };
      const result = await sendToWebhook(param as any);
      if (result?.success) {
        toast.success(t("contactsale.success"), { autoClose: 700 });
        setName("");
        setEmail("");
        setPhone("");
        setCompanyWebsite("");
        setDes("");
        window.location.href = `/${locale}/thank-you`;
      } else {
        //@ts-ignore
        toast.error(t("contactsale.false"), { autoClose: 700 });
      }
    }
  }

  return (
    <>
      <div
        id="contact-sales"
        style={{
          backgroundImage: `url(${bg.src})`,
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container">
          <div className="row" style={{ paddingTop: "80px" }}>
            <div className="col-md-7">
              <div className="tw-shadow-6 tw-p-6 tw-rounded-xl tw-bg-white">
                <div className="tw-flex tw-justify-between tw-items-center">
                  <div className="tw-font-medium tw-text-sm tw-text-brand-primary">
                    {t("contactsale.ichibaSupport")}
                  </div>
                  <div className="tw-text-[#666] tw-text-xs lg:tw-text-sm">
                    <span className="tw-text tw-text-[#F5222D] tw-text-base tw-font-medium">
                      *
                    </span>
                    {t("contactsale.requied")}
                  </div>
                </div>
                <div className="tw-flex tw-items-center tw-mt-3 lg:tw-mt-5">
                  <div className="tw-font-bold tw-mr-2 tw-text-lg">
                    {t("contactsale.contact")}
                  </div>
                  <div className="tw-h-[1px] tw-flex-1 tw-bg-[#DDD]"></div>
                </div>
                <div className="">
                  <div className="lg:tw-mt-4 tw-mt-3 tw-grid tw-gap-4">
                    <div className="">
                      <div className="tw-text-sm">
                        {t("contactsale.firstName")}
                        <span className="tw-font-medium tw-text-[#F5222D] "> *</span>
                      </div>
                      <div
                        className={clsx(
                          firstNameValid
                            ? "tw-border-[#F5222D] tw-shadow-[0px_0px_0px_2px_rgba(245,_34,_45,_0.16)]"
                            : "tw-border-[#ddd] ",
                          "tw-border tw-rounded-lg tw-mt-2"
                        )}
                      >
                        <input
                          type="text"
                          value={name}
                          onBlur={() => setName(name.replace(/^\s+|\s+$/g, ""))}
                          onChange={(e) => setName(e.target.value)}
                          className="form-control form-input tw-h-11 tw-text-sm tw-w-full"
                          placeholder={"Ex: Nguyen Van A"}
                        />
                      </div>
                      <div
                        className={clsx(
                          !firstNameValid
                            ? "tw-hidden"
                            : "tw-text-xs lg:tw-text-sm tw-text-[#F5222D] tw-mt-1"
                        )}
                      >
                        {t("contactsale.requied")}
                      </div>
                    </div>
                    <div className="">
                      <div className="tw-text-sm">
                        {t("contactsale.phone")}
                        <span className="tw-font-medium tw-text-[#F5222D] "> *</span>
                      </div>
                      <div className="tw-mt-2">
                        <PhoneInput
                          inputClass={"form-input tw-text-sm"}
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
                      <div
                        className={clsx(
                          !phoneValid
                            ? "tw-hidden"
                            : "tw-text-xs lg:tw-text-sm tw-text-[#F5222D] tw-mt-1"
                        )}
                      >
                        {t("contactsale.requied")}
                      </div>
                    </div>
                  </div>
                  <div className="lg:tw-mt-4 tw-mt-3 tw-grid tw-gap-4">
                    <div className="">
                      <div className="tw-text-sm">
                        {t("contactsale.companyEmail")}
                        <span className="tw-font-medium tw-text-[#F5222D]"> *</span>
                      </div>
                      <div
                        className={clsx(
                          emailValid
                            ? "tw-border-[#F5222D] tw-shadow-[0px_0px_0px_2px_rgba(245,_34,_45,_0.16)]"
                            : "tw-border-[#ddd] ",
                          "tw-border tw-rounded-lg tw-mt-2"
                        )}
                      >
                        <input
                          type="text"
                          value={email}
                          onBlur={() => setEmail(email.replace(/^\s+|\s+$/g, ""))}
                          onChange={(e) => setEmail(e.target.value)}
                          className="form-control form-input tw-h-11 tw-text-sm tw-w-full"
                          placeholder={"Ex: email@gmail.com"}
                        />
                      </div>
                      <div
                        className={clsx(
                          !emailValid
                            ? "tw-hidden"
                            : "tw-text-xs lg:tw-text-sm tw-text-[#F5222D] tw-mt-1"
                        )}
                      >
                        {t("contactsale.requied")}
                      </div>
                    </div>
                    <div className="">
                      <div className="tw-text-sm">
                        {t("contactsale.companyWebsite")}
                        <span className="tw-font-medium tw-text-[#F5222D] "> *</span>
                      </div>
                      <div
                        className={clsx(
                          companyWebsiteValid
                            ? "tw-border-[#F5222D] tw-shadow-[0px_0px_0px_2px_rgba(245,_34,_45,_0.16)]"
                            : "tw-border-[#ddd]",
                          "tw-border tw-rounded-lg tw-mt-2"
                        )}
                      >
                        <input
                          type="text"
                          className="form-control form-input tw-h-11 tw-text-sm tw-w-full"
                          placeholder={t("contactsale.inputCompanyWebsite") ?? ""}
                          value={companyWebsite}
                          onChange={(e) => setCompanyWebsite(e.target.value)}
                        />
                      </div>
                      <div
                        className={clsx(
                          !companyWebsiteValid
                            ? "tw-hidden"
                            : "tw-text-xs lg:tw-text-sm tw-text-[#F5222D] tw-mt-1"
                        )}
                      >
                        {t("contactsale.requied")}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="tw-mt-4">
                  <div className="tw-text-sm">{t("contactsale.serviceInterested")}</div>
                  <div className="tw-mt-2">
                    <textarea
                      value={des}
                      onChange={(e) => setDes(e.target.value)}
                      className="form-control form-input tw-text-sm tw-w-full"
                      placeholder={t("contactsale.canHelp") ?? ""}
                      rows={2}
                    ></textarea>
                  </div>
                </div>

                <div
                  className="lg:tw-mt-5 tw-mt-3 tw-cursor-pointer tw-w-full tw-max-w-[200px] tw-max-h-[44px] tw-tw-h-max tw-px-8 tw-py-2 tw-bg-brand-primary tw-rounded-lg tw-text-white tw-text-center tw-mx-auto"
                  onClick={() => submit()}
                >
                  {t("contactsale.submit")}
                </div>
              </div>
            </div>
            <div className="col-md-5 ">
              <div className="help">
                <h2 className="fw-7 fs-24">{t("contactsale.hereToHelp")}</h2>
                <div className="fw-5 py-1 py-lg-2 fs-14">
                  {t("contactsale.ourSale")}
                </div>
                <div>
                  <div className="d-flex py-3">
                    <Image src={ct1} alt="design" className="me-2 mt-1" />
                    <div className="fs-14">{t("contactsale.design")}</div>
                  </div>
                  <div className="d-flex py-3">
                    <Image src={ct2} alt="take" className="me-2 mt-1" />
                    <div className="fs-14">{t("contactsale.take")}</div>
                  </div>
                  <div className="d-flex py-3">
                    <Image src={ct3} alt="provide" className="me-2 mt-1" />
                    <div className="fs-14">{t("contactsale.provide")}</div>
                  </div>
                </div>
              </div>

              <div className="company offset-lg-1 col-md-10 text-center">
                <h3>{t("contactsale.goodCompany2")}</h3>
                <div className="fw-7 fs-24 pb-2">
                  {t("contactsale.goodCompany")}
                </div>
                <div className="row">
                  {img.map((value, index) => (
                    <>
                      <div className="col-6 my-2">
                        <Image
                          src={value.img}
                          alt="goodCompany"
                          style={{ width: "100%", height: "auto" }}
                        />
                      </div>
                    </>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer />
      </div>
    </>
  );
}
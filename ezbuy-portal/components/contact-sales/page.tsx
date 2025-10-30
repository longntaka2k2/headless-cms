"use client";
import Link from "next/link";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useState } from "react";
import EzImage from "@/components/commons/EzImage";
import clsx from "clsx";
import { sendToWebhook } from "@/public/api/activepieces";
import "react-toastify/dist/ReactToastify.css";
import { usePathname } from "next/navigation";
import "react-phone-input-2/lib/style.css";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";
import Integration from "./Integration/index";

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
        source: `ezbuy.jp/${locale}`,
        name: name,
        email: email,
        phone: phone,
        companyWebsite: companyWebsite,
        description: des,
        label: "EZBUY",
      };
      const result = await sendToWebhook(param as any);
      if (result?.success) {
        toast.success(lang.contactSale.success, { autoClose: 700 });
        setName("");
        setEmail("");
        setPhone("");
        setCompanyWebsite("");
        setDes("");
        window.location.href = `/${locale}/thank-you`;
      } else {
        //@ts-ignore
        toast.error(lang.contactSale.false, { autoClose: 700 });
      }
    }
  }
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
            <div className="text-lg lg:text-5xl font-bold">
              {lang.contactSale.title}
            </div>
            <div className="text-xs lg:text-base lg:mt-4">
              {lang.contactSale.direction}
            </div>
          </div>
        </div>
      </div>

      <div className="lg:bg-[linear-gradient(to_right,#FFF_0%,#FFF_65%,#2A437D_65%,#2A437D_100%)] bg-[linear-gradient(130deg,#FFF,#2a437d5c)]">
        <div className="grid lg:grid-cols-12 lg:gap-[85px] gap-8 container lg:py-20 py-8">
          <div className="lg:col-span-5 px-4 lg:px-0">
            <div className="text-2xl lg:text-5xl font-bold">
              {lang.contactSale.title}
            </div>
            <div className="text-sm lg:text-base lg:mt-6 mt-4">
              {lang.contactSale.content}
            </div>
            <div className="grid gap-5 mt-4">
              <div className="flex items-center">
                <EzImage
                  src={"/uploads/Group_b5f0e51077.png"}
                  alt="/uploads/Group_b5f0e51077.png"
                  width={24}
                  height={24}
                  className="max-w-6 max-h-6 w-6 h-6"
                />
                <div className="text-sm ml-3">{lang.contactSale.offer}</div>
              </div>
            </div>
            <div className="lg:mt-10 mt-5 flex items-center">
              <EzImage
                src={"/uploads/Group_b5f0e51077.png"}
                alt="/uploads/Group_b5f0e51077.png"
                width={24}
                height={24}
                className="max-w-6 max-h-6 w-6 h-6"
              />
              <div className="text-sm ml-3">
                {lang.contactSale.multilingualSupport}
              </div>
            </div>
            <div className="lg:mt-10 mt-5 flex items-center">
              <EzImage
                src={"/uploads/Group_90b1fe3f5d.png"}
                alt="/uploads/Group_90b1fe3f5d.png"
                width={24}
                height={24}
                className="max-w-6 max-h-6 w-6 h-6"
              />
              <div className="text-sm ml-3">
                <div>{lang.contactSale.looking}</div>
                <div>
                  <span>{lang.contactSale.visit.visit}</span>
                  <Link
                    href={lang.contactSale.linkHelp}
                    className="text-[#F5222D] font-medium underline"
                  >
                    {lang.contactSale.visit.help}
                  </Link>
                  <span>{lang.contactSale.visit.or}</span>
                  <span className="text-[#F5222D] font-medium">
                    {lang.contactSale.visit.email}
                  </span>
                  <span>{lang.contactSale.visit.contact}</span>
                </div>
              </div>
            </div>

            <div>
              <EzImage
                src={"/uploads/Frame_427318597_695f4ecd4b.png"}
                alt="/uploads/Frame_427318597_695f4ecd4b.png"
                className="lg:mt-10 mt-5"
                width={460}
                height={465}
              />
            </div>
          </div>
          <div className="lg:col-span-7 mx-4 lg:mx-0 relative z-[1]">
            <div className="shadow-6 p-6 rounded-xl bg-white">
              <div className="flex justify-between items-center">
                <div className="font-medium text-sm text-brand-primary">
                  {lang.contactSale.ezbuySupport}
                </div>
                <div className="text-[#666] text-xs lg:text-sm">
                  <span className="text text-[#F5222D] text-base font-medium">
                    *
                  </span>
                  {lang.contactSale.requiredInfomation}
                </div>
              </div>
              <div className="flex items-center mt-3 lg:mt-5">
                <div className="font-bold mr-2 text-lg">
                  {lang.contactSale.contactInformation}
                </div>
                <div className="h-[1px] flex-1 bg-[#DDD]"></div>
              </div>
              <div className="">
                <div className="lg:mt-4 mt-3 grid gap-4">
                  <div className="">
                    <div className="text-sm">
                      {lang.contactSale.fullName}
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
                        placeholder={lang.contactSale.exFullName}
                      />
                    </div>
                    <div
                      className={clsx(
                        !firstNameValid
                          ? "hidden"
                          : "text-xs lg:text-sm text-[#F5222D] mt-1"
                      )}
                    >
                      {lang.contactSale.requiredInfomation}
                    </div>
                  </div>
                  <div className="">
                    <div className="text-sm">
                      {lang.contactSale.phoneNumber}
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
                    <div
                      className={clsx(
                        !phoneValid
                          ? "hidden"
                          : "text-xs lg:text-sm text-[#F5222D] mt-1"
                      )}
                    >
                      {lang.contactSale.requiredInfomation}
                    </div>
                  </div>
                </div>
                <div className="lg:mt-4 mt-3 grid gap-4">
                  <div className="">
                    <div className="text-sm">
                      {lang.contactSale.email}
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
                        placeholder={lang.contactSale.exEmail}
                      />
                    </div>
                    <div
                      className={clsx(
                        !emailValid
                          ? "hidden"
                          : "text-xs lg:text-sm text-[#F5222D] mt-1"
                      )}
                    >
                      {lang.contactSale.requiredInfomation}
                    </div>
                  </div>
                  <div className="">
                    <div className="text-sm">
                      {lang.contactSale.companyWebsite}
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
                        placeholder={lang.contactSale.inputCompanyWebsite}
                        value={companyWebsite}
                        onChange={(e) => setCompanyWebsite(e.target.value)}
                      />
                    </div>
                    <div
                      className={clsx(
                        !companyWebsiteValid
                          ? "hidden"
                          : "text-xs lg:text-sm text-[#F5222D] mt-1"
                      )}
                    >
                      {lang.contactSale.requiredInfomation}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4">
                <div className="text-sm"> {lang.contactSale.serviceInterested}</div>
                <div className="border border-[#ddd] rounded-lg py-3 px-4 mt-2">
                  <textarea
                    value={des}
                    onChange={(e) => setDes(e.target.value)}
                    className="form-control form-input text-sm w-full"
                    placeholder={lang.contactSale.description}
                    rows={2}
                  ></textarea>
                </div>
              </div>
              <div
                id={id}
                className="cursor-pointer mt-4 lg:mt-5 mx-auto w-full max-w-[170px] max-h-[44px] h-max px-8 py-2 bg-brand-primary rounded-lg text-white text-center"
                onClick={() => submit()}
              >
                {lang.contactSale.submit}
              </div>
            </div>
          </div>
        </div>

        <Integration lang={lang} />

        <ToastContainer />
      </div>
    </div>
  );
};

export default ContactSalesComponent;
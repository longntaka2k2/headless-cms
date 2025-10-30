/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import { sendToWebhook } from "@/services/activepieces";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { usePathname } from "next/navigation";

const Form = ({ id }: any) => {
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
        source: "wms.ichiba.vn",
        name: name,
        email: email,
        phone: phone,
        companyWebsite: companyWebsite,
        description: des,
        label: "Landingpage IChiba"
      };
      const result = await sendToWebhook(param as any);
      if (result?.success) {
        toast.success("Gửi yêu cầu thành công", { autoClose: 700 });
        setName("");
        setEmail("");
        setPhone("");
        setCompanyWebsite("");
        setDes("");
        window.location.href = `/thank-you`;
      } else {
        //@ts-ignore
        toast.error("Gửi yêu cầu thất bại", { autoClose: 700 });
      }
    }
  }
  return (
    <>
      <div className="tw-shadow-6 tw-p-6 tw-rounded-xl tw-bg-white">
        <div className="tw-flex tw-justify-between tw-items-center">
          <div className="tw-font-medium tw-text-sm tw-text-brand-primary">
            Tư vấn hỗ trợ
          </div>
          <div className="tw-text-[#666] tw-text-xs lg:tw-text-sm">
            <span className="tw-text tw-text-[#F5222D] tw-text-base tw-font-medium">
              *
            </span>
            Thông tin bắt buộc
          </div>
        </div>
        <div className="tw-flex tw-items-center tw-mt-3 lg:tw-mt-5">
          <div className="tw-font-bold tw-mr-2 tw-text-lg">
            Thông tin liên hệ
          </div>
          <div className="tw-h-[1px] tw-flex-1 tw-bg-[#DDD]"></div>
        </div>
        <div className="">
          <div className="lg:tw-mt-4 tw-mt-3 tw-grid tw-gap-4">
            <div className="">
              <div className="tw-text-sm">
                Họ và tên
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
                Trường bắt buộc
              </div>
            </div>
            <div className="">
              <div className="tw-text-sm">
                Số điện thoại
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
                Trường bắt buộc
              </div>
            </div>
          </div>
          <div className="lg:tw-mt-4 tw-mt-3 tw-grid tw-gap-4">
            <div className="">
              <div className="tw-text-sm">
                Email
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
                Trường bắt buộc
              </div>
            </div>
            <div className="">
              <div className="tw-text-sm">
                Website công ty
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
                  placeholder={"Nhập tên website công ty"}
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
                Trường bắt buộc
              </div>
            </div>
          </div>
        </div>

        <div className="tw-mt-4">
          <div className="tw-text-sm">Yêu cầu của bạn về phần mềm</div>
          <div className="tw-mt-2">
            <textarea
              value={des}
              onChange={(e) => setDes(e.target.value)}
              className="form-control form-input tw-text-sm tw-w-full"
              placeholder={"Hãy cho chúng tôi biết yêu cầu của bạn về phần mềm"}
              rows={2}
            ></textarea>
          </div>
        </div>

        <div
          id={id}
          className="lg:tw-mt-5 tw-mt-3 tw-cursor-pointer tw-w-full tw-max-w-[170px] tw-max-h-[44px] tw-tw-h-max tw-px-8 tw-py-2 tw-bg-brand-primary tw-rounded-lg tw-text-white tw-text-center tw-mx-auto"
          onClick={() => submit()}
        >
          Gửi yêu cầu
        </div>
      </div>

      <ToastContainer />
    </>
  );
};

export default Form;

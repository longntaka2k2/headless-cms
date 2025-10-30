/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import { sendToWebhook } from "@/public/api/activepieces";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { usePathname } from "next/navigation";

const FormEFEXFulfillment = ({ lang }: any, { id }: any) => {
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
        source: "fulfillment.efex.vn",
        name: name,
        email: email,
        phone: phone,
        companyWebsite: companyWebsite,
        description: des,
        label: "Fulfillment EFEX"
      };
      const result = await sendToWebhook(param as any);
      if (result?.success) {
        toast.success("Thành công", { autoClose: 700 });
        setName("");
        setEmail("");
        setPhone("");
        setCompanyWebsite("");
        setDes("");
        window.location.href = `/${locale}/thank-you`;
      } else {
        //@ts-ignore
        toast.error("Đã xảy ra lỗi", { autoClose: 700 });
      }
    }
  }
  return (
    <>
      <div className="shadow-6 p-6 rounded-xl bg-white">
        <div className="flex justify-between items-center">
          <div className="font-medium text-sm text-brand-primary">
            Tư vấn hỗ trợ
          </div>
          <div className="text-[#666] text-xs lg:text-sm">
            <span className="text text-[#F5222D] text-base font-medium">
              *
            </span>
            Thông tin bắt buộc
          </div>
        </div>
        <div className="flex items-center mt-3 lg:mt-5">
          <div className="font-bold mr-2 text-lg">
            Thông tin liên hệ
          </div>
          <div className="h-[1px] flex-1 bg-[#DDD]"></div>
        </div>
        <div className="">
          <div className="lg:mt-4 mt-3 grid gap-4">
            <div className="">
              <div className="text-sm">
                Họ và tên
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
                  placeholder={"Ex: Nguyen Van A"}
                />
              </div>
              <div
                className={clsx(
                  !firstNameValid
                    ? "hidden"
                    : "text-xs lg:text-sm text-brand-primary mt-1"
                )}
              >
                Trường bắt buộc
              </div>
            </div>
            <div className="">
              <div className="text-sm">
                Số điện thoại
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
          </div>
          <div className="lg:mt-4 mt-3 grid gap-4">
            <div className="">
              <div className="text-sm">
                Email
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
                Trường bắt buộc
              </div>
            </div>
            <div className="">
              <div className="text-sm">
                Website công ty
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
                  placeholder={"Nhập tên website công ty"}
                  value={companyWebsite}
                  onChange={(e) => setCompanyWebsite(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <div className="text-sm">Dịch vụ bạn quan tâm</div>
          <div className="border border-[#ddd] rounded-lg py-3 px-4 mt-2">
            <textarea
              value={des}
              onChange={(e) => setDes(e.target.value)}
              className="form-control form-input text-sm w-full"
              placeholder={"Hãy cho chúng tôi biết chúng tôi có thể giúp gì cho bạn"}
              rows={2}
            ></textarea>
          </div>
        </div>

        <div
          id={id}
          className="cursor-pointer lg:ml-auto mt-4 lg:mt-5 w-full max-w-[170px] max-h-[44px] h-max px-8 py-2 bg-brand-primary rounded-lg text-white text-center"
          onClick={() => submit()}
        >
          Gửi yêu cầu
        </div>
      </div>

      <ToastContainer />
    </>
  );
};

export default FormEFEXFulfillment;

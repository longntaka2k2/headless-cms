"use client";
import React, { useState } from "react";
import bg from "@/public/images/background-contact-sales.png";
import ct1 from "@/public/icons/ct1.svg";
import ct2 from "@/public/icons/ct2.svg";
import ct3 from "@/public/icons/ct3.svg";
import Image from "next/image";
import clsx from "clsx";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { usePathname } from "next/navigation";
import { sendToWebhook } from "@/hooks/activepieces";

export default function ContactSaleComponent({ lang }: any) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [companyWebsite, setCompanyWebsite] = useState("");
  const [des, setDes] = useState("");
  const [firstNameValid, setValidFirstName] = useState(false);
  const [phoneValid, setValidPhone] = useState(false);
  const [emailValid, setValidEmail] = useState(false);
  const [companyWebsiteValid, setCompanyWebsiteValid] = useState(false);
  const locale = usePathname().split("/")[1];

  const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validateForm = () => {
    let isValid = true;
    if (name.trim() === "") {
      setValidFirstName(true);
      isValid = false;
    } else setValidFirstName(false);

    if (phone === "" || phone.length < 10) {
      setValidPhone(true);
      isValid = false;
    } else setValidPhone(false);

    if (!validateEmail(email)) {
      setValidEmail(true);
      isValid = false;
    } else setValidEmail(false);

    if (companyWebsite.trim() === "") {
      setCompanyWebsiteValid(true);
      isValid = false;
    } else setCompanyWebsiteValid(false);

    return isValid;
  };

  async function submit() {
    const validFrom = validateForm();
    if (validFrom) {
      const param = {
        source: `ichiba.vn`,
        name,
        email,
        phone,
        companyWebsite,
        description: des,
        label: "ICHIBA",
      };
      const result = await sendToWebhook(param as any);
      if (result?.success) {
        toast.success("Success", { autoClose: 700 });
        setName("");
        setEmail("");
        setPhone("");
        setCompanyWebsite("");
        setDes("");
        window.location.href = `/${locale}/thank-you`;
      } else {
        toast.error("False", { autoClose: 700 });
      }
    }
  }

  return (
    <div
      id="contact-sales"
      style={{
        backgroundImage: `url(${bg.src})`,
        backgroundRepeat: "no-repeat",
      }}
      className="bg-cover bg-center py-20"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* FORM SECTION */}
          <div className="w-full lg:w-3/5">
            <div className="shadow-lg p-6 rounded-xl bg-white">
              {/* Header */}
              <div className="flex justify-between items-center">
                <div className="font-medium text-sm text-brand-primary">
                  IChiba Support
                </div>
                <div className="text-[#666] text-xs lg:text-sm">
                  <span className="text-[#F5222D] text-base font-medium">*</span> Required
                  field
                </div>
              </div>

              {/* Information */}
              <div className="flex items-center mt-5">
                <h3 className="font-bold mr-2 text-lg">Information</h3>
                <div className="h-[1px] flex-1 bg-[#DDD]" />
              </div>

              <div className="mt-5 grid gap-5">
                {/* First Name */}
                <div>
                  <label className="text-sm font-medium">
                    First Name
                    <span className="text-[#F5222D]"> *</span>
                  </label>
                  <div
                    className={clsx(
                      firstNameValid
                        ? "border-[#F5222D] shadow-[0_0_0_2px_rgba(245,34,45,0.16)]"
                        : "border-[#ddd]",
                      "border rounded-lg mt-2"
                    )}
                  >
                    <input
                      type="text"
                      value={name}
                      onBlur={() => setName(name.trim())}
                      onChange={(e) => setName(e.target.value)}
                      className="h-11 text-sm w-full px-3 rounded-lg outline-none"
                      placeholder="Ex: Nguyen Van A"
                    />
                  </div>
                  {firstNameValid && (
                    <p className="text-xs text-[#F5222D] mt-1">Required field</p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label className="text-sm font-medium">
                    Phone number
                    <span className="text-[#F5222D]"> *</span>
                  </label>
                  <div className="mt-2">
                    <PhoneInput
                      inputClass="!text-sm"
                      inputStyle={{
                        height: "44px",
                        borderRadius: "8px",
                        border: phoneValid ? "1px solid #F5222D" : "1px solid #ddd",
                        boxShadow: phoneValid
                          ? "0px 0px 0px 2px rgba(245, 34, 45, 0.16)"
                          : "",
                        width: "100%",
                      }}
                      onChange={(phone) => setPhone(phone)}
                      country="vn"
                      value={phone}
                    />
                  </div>
                  {phoneValid && (
                    <p className="text-xs text-[#F5222D] mt-1">Required field</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="text-sm font-medium">
                    Email
                    <span className="text-[#F5222D]"> *</span>
                  </label>
                  <div
                    className={clsx(
                      emailValid
                        ? "border-[#F5222D] shadow-[0_0_0_2px_rgba(245,34,45,0.16)]"
                        : "border-[#ddd]",
                      "border rounded-lg mt-2"
                    )}
                  >
                    <input
                      type="text"
                      value={email}
                      onBlur={() => setEmail(email.trim())}
                      onChange={(e) => setEmail(e.target.value)}
                      className="h-11 text-sm w-full px-3 rounded-lg outline-none"
                      placeholder="Ex: email@gmail.com"
                    />
                  </div>
                  {emailValid && (
                    <p className="text-xs text-[#F5222D] mt-1">Required field</p>
                  )}
                </div>

                {/* Company Website */}
                <div>
                  <label className="text-sm font-medium">
                    Company Website
                    <span className="text-[#F5222D]"> *</span>
                  </label>
                  <div
                    className={clsx(
                      companyWebsiteValid
                        ? "border-[#F5222D] shadow-[0_0_0_2px_rgba(245,34,45,0.16)]"
                        : "border-[#ddd]",
                      "border rounded-lg mt-2"
                    )}
                  >
                    <input
                      type="text"
                      value={companyWebsite}
                      onChange={(e) => setCompanyWebsite(e.target.value)}
                      className="h-11 text-sm w-full px-3 rounded-lg outline-none"
                      placeholder="Enter your website"
                    />
                  </div>
                  {companyWebsiteValid && (
                    <p className="text-xs text-[#F5222D] mt-1">Required field</p>
                  )}
                </div>

                {/* Description */}
                <div>
                  <label className="text-sm font-medium">
                    Service You’re Interested In
                  </label>
                  <textarea
                    value={des}
                    onChange={(e) => setDes(e.target.value)}
                    className="mt-2 w-full text-sm p-3 border border-[#ddd] rounded-lg outline-none"
                    placeholder="How can we help?"
                    rows={3}
                  ></textarea>
                </div>

                {/* Submit */}
                <button
                  onClick={submit}
                  className="mt-4 bg-brand-primary text-white text-center py-2.5 rounded-lg font-medium hover:opacity-90 transition w-full sm:w-[200px]"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>

          {/* SIDE INFO */}
          <div className="w-full lg:w-2/5">
            <div className="text-white p-6 rounded-xl">
              <h2 className="text-2xl font-bold mb-3">We’re here to help</h2>
              <p className="text-sm mb-4">
                Our sales team will give you personalized guidance to help you find
                the right IChiba solution. We can help:
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Image src={ct1} alt="design" className="mt-1" />
                  <p>
                    Let’s discuss what you need with our experts by filling out the
                    information in the form.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Image src={ct2} alt="take" className="mt-1" />
                  <p>
                    Take you through demos, and walk you through the onboarding
                    process
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Image src={ct3} alt="provide" className="mt-1" />
                  <p>
                    Provide more information on pricing, billing, and cost-saving
                    strategies
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

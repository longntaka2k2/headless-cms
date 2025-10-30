"use client";
import clsx from "clsx";
import "react-phone-input-2/lib/style.css";
import "react-toastify/dist/ReactToastify.css";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import PhoneInput from "react-phone-input-2";
import { useEffect, useRef, useState } from "react";
import Select from "react-select";
import { ToastContainer, toast } from "react-toastify";
import { sendToWebhook } from "@/public/api/activepieces";

export const countries = [
  {
    icon: "https://strapi-efex.ichiba.net/uploads/VN_90509915d1.svg",
    label: "Việt Nam",
    value: "Vietnam",
  },
  {
    icon: "https://strapi-efex.ichiba.net/uploads/JP_0171a481a8.svg",
    label: "Japan",
    value: "Japan",
  },
  {
    icon: "https://strapi-efex.ichiba.net/uploads/US_d420c94289.svg",
    label: "United State",
    value: "United State",
  },
  {
    icon: "https://strapi-efex.ichiba.net/uploads/TH_f9330e3abb.svg",
    label: "Thailand",
    value: "Thailand",
  },
  {
    icon: "https://strapi-efex.ichiba.net/uploads/SG_b72279fb22.svg",
    label: "Singapore",
    value: "Singapore",
  },
  {
    icon: "https://strapi-efex.ichiba.net/uploads/PH_ef8481b6b0.svg",
    label: "Philippines",
    value: "Philippines",
  },
  {
    icon: "https://strapi-efex.ichiba.net/uploads/Group_9778d1edf3.svg",
    label: "Other",
    value: "Other",
  },
];

const FormEFEXFulfillment = ({ lang }: any) => {
  const locale = usePathname().slice(1, 3);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const selectCountry = useRef(null);
  const [country, setCountry] = useState("");
  const [firstNameValid, setValidFirstName] = useState(false);
  const [emailValid, setValidEmail] = useState(false);
  const [phoneValid, setValidPhone] = useState(false);
  const [countryValid, setCountryValid] = useState(false);

  const [icon, setIcon] = useState("");

  useEffect(() => {
    const selectedCountry = countries.find((c) => c.value === country);
    if (selectedCountry) {
      setIcon(selectedCountry.icon);
    }
  }, [country]);

  function validateEmail(email: String) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email as string);
  }

  const validateForm = () => {
    let isValid = true;
    if (name === "") {
      setValidFirstName(true);
      isValid = false;
    } else {
      setValidFirstName(false);
    }
    if (!validateEmail(email)) {
      setValidEmail(true);
      isValid = false;
    } else {
      setValidEmail(false);
    }
    if (phone === "" || phone.length < 10) {
      setValidPhone(true);
      isValid = false;
    } else {
      setValidPhone(false);
    }
    if (country === "") {
      setCountryValid(true);
      isValid = false;
    } else {
      setCountryValid(false);
    }
    return isValid;
  };

  async function submit() {
    const validFrom = validateForm();
    if (validFrom) {
      const param = {
        name: name,
        email: email,
        phone: phone,
        country: country,
      };
      const result = await sendToWebhook(param as any);
      if (result?.success) {
        toast.success(lang.toastSuccess, { autoClose: 700 });
        setName("");
        setEmail("");
        setPhone("");
        setCountry("");
        // Redirect to the "/thanh-you" page
        window.location.href = `https://fulfillment.efex.vn/thank-you`;
      } else {
        //@ts-ignore
        toast.error(lang.toastFalse, { autoClose: 700 });
      }
    }
  }

  return (
    <div className="p-4 lg:p-6 bg-white rounded-2xl">
      <div>
        <Image
          src={"https://strapi-efex.ichiba.net/uploads/Group_1_8315320315.svg"}
          width={114}
          height={36}
          alt="EFEX"
          className="w-[75px] h-[25px] lg:w-[114px] lg:h-9 mx-auto"
        />
        <p className="text-sm lg:text-base text-center py-4 lg:py-5">
          {lang.heading[0]} <br />
          <span className="text-xl lg:text-2xl font-bold text-brand-primary">
            {lang.heading[1]}
          </span>
        </p>
        <div className="grid gap-6 lg:gap-7">
          <div className="">
            <div className="text-sm">
              {lang.inpName}
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
                className="form-control form-input text-sm "
                placeholder={lang.plInpName}
              />
            </div>
            <div
              className={clsx(
                !firstNameValid
                  ? "hidden"
                  : "text-xs lg:text-sm text-brand-primary mt-1"
              )}
            >
              {lang.fieldRequired}
            </div>
          </div>

          <div className="">
            <div className="text-sm">
              {lang.inpMail}
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
                className="form-control form-input text-sm "
                placeholder={lang.plInpMail}
              />
            </div>
            <div
              className={clsx(
                !emailValid
                  ? "hidden"
                  : "text-xs lg:text-sm text-brand-primary mt-1"
              )}
            >
              {lang.fieldRequired}
            </div>
          </div>

          <div className="">
            <div className="text-sm">
              {lang.inpPhone}
              <span className="font-medium text-[#F5222D] "> *</span>
            </div>
            <div className="mt-2">
              <PhoneInput
                inputClass={"form-input text-sm"}
                inputStyle={{
                  height: "48px",
                  borderRadius: "8px",
                  border: phoneValid ? "1px solid #F5222D" : "1px solid #ddd",
                  boxShadow: phoneValid
                    ? "0px 0px 0px 2px rgba(245, 34, 45, 0.16)"
                    : "",
                  width: "100%",
                }}
                placeholder={lang.plInpPhone}
                onChange={(phone) => setPhone(phone)}
                country={"vn"}
                value={phone}
              />
            </div>
            <div
              className={clsx(
                !phoneValid
                  ? "hidden"
                  : "text-xs lg:text-sm text-brand-primary mt-1"
              )}
            >
              {lang.fieldRequired}
            </div>
          </div>

          <div className="">
            <div className="text-sm mb-2">
              {lang.inpWhere}
              <span className="font-medium text-[#F5222D]"> *</span>
            </div>
            <Select
              ref={selectCountry}
              styles={{
                control: (base) => ({
                  ...base,
                  borderRadius: "8px",
                }),
                menu: (base) => ({
                  ...base,
                  zIndex: 50, // Ensure high z-index
                  position: "absolute", // Ensure it's absolute
                }),
              }}
              options={countries}
              onChange={(newValue) => setCountry(newValue?.value as string)}
              classNames={{
                control: (state) => "py-1 text-sm z-50",
              }}
              placeholder={lang.plInpWhere}
              formatOptionLabel={(option) => (
                <div style={{ display: "flex", alignItems: "center" }}>
                  <img
                    src={option.icon}
                    alt={option.label}
                    style={{
                      width: "20px",
                      height: "20px",
                      marginRight: "8px",
                    }}
                  />
                  {option.label}
                </div>
              )}
              menuPortalTarget={document.body} // Render dropdown in the body
              menuPosition="fixed" // Use fixed positioning
            />
            <div
              className={clsx(
                !countryValid
                  ? "hidden"
                  : "text-xs lg:text-sm text-brand-primary mt-1"
              )}
            >
              {lang.fieldRequired}
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-9">
          <div
            onClick={() => submit()}
            className="cursor-pointer py-2 px-3 lg:py-3 lg:px-5 text-sm rounded-lg bg-brand-primary text-white"
          >
            {lang.textBtn}
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default FormEFEXFulfillment;

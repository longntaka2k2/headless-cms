/* eslint-disable @next/next/no-img-element */
"use client";
import "react-phone-input-2/lib/style.css";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const FormFreeEbook = () => {
  const { t } = useTranslation("resources");

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://webforms.pipedrive.com/f/loader";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script); // Xóa script khi component unmount
    };
  }, []);

  return (
    <div className="tw-py-5 tw-px-4 lg:tw-p-6 tw-bg-white tw-rounded-2xl tw-shadow-2">
      <div className="tw-text-center tw-py-10">
        <h1 className="tw-text-3xl tw-font-bold tw-mb-4">
          Liên hệ với chúng tôi
        </h1>
        <p className="tw-mb-6">Bấm vào nút bên dưới để mở form liên hệ:</p>
        <a
          href="https://ebook.ichiba.vn/private-domain-traffic"
          target="_blank"
          rel="noopener noreferrer"
          className="tw-bg-brand-primary tw-text-white tw-px-6 tw-py-3 tw-no-underline tw-rounded hover:tw-opacity-80 tw-transition"
        >
          Liên hệ ngay
        </a>
      </div>
    </div>
  );
};

export default FormFreeEbook;

import { Player, Controls } from "@lottiefiles/react-lottie-player";
import Link from "next/link";
import { useState, ChangeEvent, useRef, useEffect } from "react";
import { useTranslation } from "next-i18next";
import Select from "react-select";
import loadingFile from "@/public/icons/loadingfile.json";
import bg from "@/public/icons/bannerSupport.png";
import upfile from "@/public/icons/upfile.png";
import Image from "next/image";
import { toast, ToastContainer } from "react-toastify";
import createIssue from "../../const/createIssue";
import { useRouter } from "next/router";

export default function SuportPortalComponent() {
  const router = useRouter();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");
  const [selectedFile, setSelectedFile] = useState("");
  const [loading, setLoading] = useState(false);
  const [link, setLink] = useState("");
  const [optionsType, setOptions] = useState("");
  const [errorCV, setCV] = useState("");

  const [firstNameValid, setValidFirstName] = useState("");
  const [lastNameValid, setValidLastName] = useState("");
  const [emailValid, setValidEmail] = useState("");
  const [optionsValid, setOptionsValid] = useState("");
  const [subjectValid, setValidSubject] = useState("");
  const [desValid, setValidDes] = useState("");

  const selectOptions = useRef(null);

  const { t } = useTranslation("common");

  const options = [
    { value: "oms", label: "OMS" },
    { value: "pim", label: "PIM" },
    { value: "pos", label: "POS" },
    { value: "smart-cb", label: "Cross-Border Forwarding" },
    { value: "ship4p", label: "ship4p" },
    { value: "cdxp", label: "CDXP" },
  ];

  const customStyles = {
    control: (baseStyles: any, state: any) => ({
      ...baseStyles,
      background: "#f2f2f2",
      minHeight: "30px",
      height: "30px",
      width: "200px",
      fontSize: "14px",
      border: "none",
      borderBottom: "1px solid hsl(0, 0%, 80%);",
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
  const onChangeAvatar = async (e: ChangeEvent<HTMLInputElement>) => {
    const api = process.env.NEXT_PUBLIC_STORAGE_FILE as string;
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0] as File;
      setSelectedFile(file.name);
      const formData = new FormData();
      formData.append("File", file);
      setLoading(true);
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
    setLoading(false);
  };
  function validateEmail(email: String) {
    // Biểu thức chính quy để kiểm tra định dạng email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Kiểm tra chuỗi với biểu thức chính quy
    return emailRegex.test(email as string);
  }
  function deleteSpace() {
    setFirstName(firstName.replace(/^\s+|\s+$/g, ""));
    setLastName(lastName.replace(/^\s+|\s+$/g, ""));
    setEmail(email.replace(/\s/g, ""));
    setSubject(subject.replace(/^\s+|\s+$/g, ""));
  }
  function handleChange(event: any, setStateFunction: any) {
    setStateFunction(event?.target?.value);
  }
  function handleSelect(event: any, setStateFunction: any) {
    setStateFunction(event?.value);
  }
  function handleCheck(event: any, checkFunction: any) {
    checkFunction(event?.target?.checked);
  }

  function validateField(value: any, setValidFunction: any) {
    if (value === "") {
      setValidFunction(t("contactsale.requied") || "");
      return false;
    } else {
      setValidFunction("");
      return true;
    }
  }

  function validateForm() {
    const isFirstNameValid = validateField(firstName, setValidFirstName);
    const isLastNameValid = validateField(lastName, setValidLastName);
    const isSubjectValid = validateField(subject, setValidSubject);
    const isOptionValid = validateField(options, setOptionsValid);
    const isdesValid = validateField(subject, setValidDes);

    const isEmailValid = validateEmail(email);

    setOptionsValid(optionsType ? "" : t("contactsale.requied") || "");
    setValidEmail(isEmailValid ? "" : t("contactsale.requied") || "");

    return (
      isFirstNameValid &&
      isLastNameValid &&
      isSubjectValid &&
      isEmailValid &&
      isOptionValid &&
      isdesValid
    );
  }
  async function submit(event: any) {
    event?.preventDefault();

    const validFrom = validateForm();
    const labels = process.env.NEXT_PUBLIC_JIRA_LABELS;

    const dataReq = {
      service: optionsType,
      summary: subject,
      description: description,
      email: email,
      firstName: firstName,
      lastName: lastName,
      attachLink: {
        linkAttachment: link,
      },
      labels: [
        labels, // cho vào config
      ],
    };
    if (validFrom) {
      setLoading(true);
      try {
        const response: any = await createIssue(dataReq);
        if (!response) {
          toast.error(t("false"), { autoClose: 700 });
          return;
        }
        //@ts-ignore
        if (response?.status === 200) {
          toast.success(t("suscess"), { autoClose: 700 });
          setLink("");
          setLastName("");
          setFirstName("");
          setSubject("");
          setDescription("");
          setOptions("");
          setEmail("");
          setSelectedFile("");
          //@ts-ignore
          selectOptions?.current?.clearValue();
          window.location.href = `/${router.locale}/support-portal/thank-you`;
        } else {
          //@ts-ignore
          toast.error(
            //@ts-ignore
            response?.data?.message ? response?.data?.message : t("false"),
            { autoClose: 700 },
          );
        }
      } catch (error) {
        console.error(error);
        // Xử lý lỗi từ API ở đây
      }
      setLoading(false);
    }
  }

  let briefly = t("support.briefly");
  let elaborate = t("support.elaborate");

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://webforms.pipedrive.com/f/loader";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script); // Xóa script khi component unmount
    };
  }, []);

  const webformUrl = (() => {
    switch (router.locale) {
      case "en":
        return "https://webforms.pipedrive.com/f/c53mp4dQoCTYN3iZlDNseUCzq9UoPqCQHMiSjMPmJ7zmWnUfK2ty84PGZT9DzlNL4n";
      case "vi":
        return "https://webforms.pipedrive.com/f/6FrDcsYCaykmOCJ2Q7PVNOnjbr3vAyN3g7Xp5iHiMuWJab6kNMEVeR39lhAYUxwd91";
      default:
        return "https://webforms.pipedrive.com/f/c53mp4dQoCTYN3iZlDNseUCzq9UoPqCQHMiSjMPmJ7zmWnUfK2ty84PGZT9DzlNL4n";
    }
  })();

  return (
    <>
      <div
        id="support-portal"
        style={{
          backgroundImage: `url(${bg.src})`,
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container">
          <div className="row mb-5">
            <div className="col-md-2"></div>
            <div className="col-md-8">
              <div className="support">
                {/* <h2 className="fw-7 fs-20 fs-md-16 color-jb">
                  {t("support.ichibaSupport")}
                </h2>
                <h1 className="mb-2 mb-lg-3 fs-36 fs-md-20 fw-7">
                  {t("support.submitSupport")}
                </h1>
                <form onSubmit={submit}>
                  <div className="type-contact d-lg-flex align-items-center">
                    <div className="fs-14 mb-2 mb-lg-0 me-2">
                      {t("contactsale.likeToContact")}
                    </div>
                    <Select
                      id="likeToContact"
                      placeholder={t("contactsale.selectAnOption")}
                      options={options}
                      className="select-sale"
                      styles={customStyles}
                      ref={selectOptions}
                      onChange={(e) => handleSelect(e, setOptions)}
                    />
                  </div>
                  <div className="color-red fs-14 ">{optionsValid}</div>
                  <h3 className="fs-20 fs-md-16 fw-7 mt-2 mt-lg-3">
                    {t("support.issue")}
                  </h3>
                  <div className="mt-2 mt-lg-3">
                    <div className="fs-14 fw-5 pb-1 ">
                      {t("support.subject")}{" "}
                      <span className="color-red">*</span>
                    </div>
                    <input
                      id="subject"
                      type="text"
                      className="form-control form-input mb-2"
                      placeholder={briefly}
                      onBlur={deleteSpace}
                      value={subject}
                      onChange={(e) => handleChange(e, setSubject)}
                    />
                    <div className="color-red fs-14">{subjectValid}</div>
                  </div>
                  <div className="mt-2 mt-lg-3">
                    <div className="fs-14 fw-5 pb-1 ">
                      {t("support.description")}
                    </div>
                    <textarea
                      rows={3}
                      id="description"
                      className="form-control form-input mb-2"
                      placeholder={elaborate}
                      onBlur={deleteSpace}
                      value={description}
                      onChange={(e) => handleChange(e, setDescription)}
                    />
                    <div className="color-red fs-14">{desValid}</div>
                  </div>

                  <div className="mt-2 mt-lg-3">
                    <div className="fs-14 fw-5 pb-1 ">
                      {t("support.anySupport")}
                    </div>
                    <div className="upLoadFile fs-md-14">
                      <label htmlFor="anySupport" className="cursor">
                        <Image
                          src={upfile}
                          alt="anySupport"
                          className="mx-auto"
                        />
                        {selectedFile !== "" ? (
                          selectedFile
                        ) : (
                          <>
                            <div className="fw-5 fs-14">
                              {t("support.upload")}
                            </div>
                            <div className="fs-12 color-note">
                              {t("support.onlyPDF")}
                            </div>
                            <div className="fs-12 color-note">
                              {t("support.theMax")}
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

                  <div className="my-2 my-lg-3 fs-20 fs-md-16 fw-7">
                    {t("support.contactInfo")}
                  </div>
                  <div className="row">
                    <div className="col-md-6  ">
                      <div className="fw-5 py-1 py-lg-2 fs-14">
                        {t("contactsale.firstName")}{" "}
                        <span style={{ color: "red" }}>*</span>
                      </div>
                      <input
                        type="text"
                        id="firstName"
                        className="form-control form-input mb-2"
                        placeholder={t("contactsale.firstName") || ""}
                        onBlur={deleteSpace}
                        value={firstName}
                        onChange={(e) => handleChange(e, setFirstName)}
                      />
                      <div className="color-red fs-14">{firstNameValid}</div>
                    </div>
                    <div className=" col-md-6 fs-14">
                      <div className="fw-5 py-1 py-lg-2 fs-14">
                        {t("contactsale.lastName")}{" "}
                        <span style={{ color: "red" }}>*</span>
                      </div>
                      <input
                        type="text"
                        id="lastName"
                        className="form-control form-input mb-2"
                        placeholder={t("contactsale.lastName") || ""}
                        onBlur={deleteSpace}
                        value={lastName}
                        onChange={(e) => handleChange(e, setLastName)}
                      />
                      <div className="color-red fs-14">{lastNameValid}</div>
                    </div>
                    <div className="col-md-6 ">
                      <div className="fw-5 py-1 py-lg-2 fs-14">
                        {t("contactsale.companyEmail")}
                        <span style={{ color: "red" }}>*</span>
                      </div>
                      <input
                        id="companyEmail"
                        type="text"
                        className="form-control form-input mb-2"
                        placeholder={t("contactsale.companyEmail") || ""}
                        onBlur={deleteSpace}
                        onChange={(e) => handleChange(e, setEmail)}
                        value={email}
                      />
                      <div className="color-red fs-14">{emailValid}</div>
                    </div>
                  </div>
                  <div className="mt-lg-3 mt-2">
                    <div className="d-lg-flex ">
                      <button type="submit">
                        <span className="d-inline-block p-2  btn-janbox button cursor">
                          {t("contactsale.submit")}
                        </span>
                      </button>{" "}
                      <div className=" ms-lg-3 ms-0 mt-2 mt-lg-0">
                        <span className="fs-12">
                          {t("contactsale.submitThisForm")}
                        </span>
                        <Link
                          className="d-block text-decoration-none fs-12"
                          href="https://docs.ichiba.net/docs/legal/terms-of-service"
                          rel="nofollow"
                        >
                          {t("footer.privacy")}
                        </Link>
                      </div>
                    </div>
                  </div>
                </form> */}

                <div
                  className="pipedriveWebForms w-full h-full"
                  data-pd-webforms={webformUrl}
                />
              </div>
            </div>
            <div className="col-md-2"></div>
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
    </>
  );
}

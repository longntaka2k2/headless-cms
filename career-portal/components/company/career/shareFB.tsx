import Image from "next/image";
import { useTranslation } from "next-i18next";
import React from "react";
import { FacebookShareButton, LinkedinShareButton } from "react-share";
import linkedin from "@/public/icons/Linkedin.png";
import facebook from "@/public/icons/facebook.png";
import { useRouter } from "next/router";
const ShareButtonComponent = () => {
  const { t } = useTranslation("common");
  const router = useRouter()
  const currentUrl = `https://careers.ichiba.net/${router?.locale === 'vi' ? '' :'en'}/${router?.asPath}`
  return (
    <div>
      <div className="fs-14">
        <FacebookShareButton
          url={currentUrl}
        >
           <Image src={facebook} alt="" width={35} height={35} /> {t("share")} Facebook 
        </FacebookShareButton>
      </div>
      <div className="fs-14 mt-2">
        <LinkedinShareButton
          url={currentUrl}
        >
         <Image src={linkedin} alt="" width={35} height={35} /> {t("share")} LinkedIn
        </LinkedinShareButton>
      </div>
    </div>
  );
};

export default ShareButtonComponent;

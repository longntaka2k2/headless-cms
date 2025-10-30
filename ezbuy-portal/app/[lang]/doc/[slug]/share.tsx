'use client'
import { FacebookShareButton, LinkedinShareButton } from "react-share";
// import facebook from "@/public/images/icons/facebook.svg";
// import linkedin from "@/public/images/icons/linkedin.svg";
import FacebookIcon from "@/public/images/icons/common/facebook.svg";
import LinkedinIcon from "@/public/images/icons/common/linkedin.svg";
import Image from "next/image";
export default function Share({ url }: any) {
  return (
    <div className="flex lg:grid gap-4">
      <FacebookShareButton url={url}>
        <Image alt="fb" src={FacebookIcon} />
      </FacebookShareButton>
      <LinkedinShareButton url={url}>
        <Image alt="lindekin" src={LinkedinIcon} />
      </LinkedinShareButton>
    </div>
  );
}

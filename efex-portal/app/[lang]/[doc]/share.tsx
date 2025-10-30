'use client'
import { FacebookShareButton, LinkedinShareButton } from "react-share";
import facebook from "@/public/images/icons/facebook.svg";
import linkedin from "@/public/images/icons/linkedin.svg";
import Image from "next/image";
export default function Share({url } : any) {
  return (
    <div>
      <FacebookShareButton url={url}>
        <Image alt="fb" src={facebook} />
      </FacebookShareButton>
      <LinkedinShareButton url={url}>
        <Image alt="lindekin" src={linkedin} />
      </LinkedinShareButton>
    </div>
  );
}

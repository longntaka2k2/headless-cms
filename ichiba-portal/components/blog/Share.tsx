import { FacebookShareButton, LinkedinShareButton } from "react-share";
import facebook from "@/public/icons/facebook.png";
import linkedin from "@/public/icons/Linkedin.png";
import Image from "next/image";
export default function Share({ url }: any) {
  return (
    <div className="tw-flex tw-gap-3 tw-items-center tw-mt-1 lg:tw-mt-0 tw-mb-1">
      <FacebookShareButton url={url}>
        <Image alt="fb" src={facebook} />
      </FacebookShareButton>
      <LinkedinShareButton url={url}>
        <Image alt="lindekin" src={linkedin} />
      </LinkedinShareButton>
    </div>
  );
}

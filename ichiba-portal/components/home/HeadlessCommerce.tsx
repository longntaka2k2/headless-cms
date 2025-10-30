import Image from "next/image";
import tech from "@/public/svgs/tech-stack.svg";
import LottieRenderer from "../common/lottieRenderer";

export default function HeadlessCommerce() {
  const lottieJson =
    "https://cms-strapi.ichiba.net/uploads/homepage_1_4c6867f61e_d82bc064ad.json";

  return (
    <div className="banner-2">
      <div className="container tw-flex tw-flex-col md:tw-flex-row">
        <div className="text-content md:tw-h-[448px] md:tw-w-1/2">
          <div className="tech-stack">
            <span>
              TECH STACK <Image src={tech} alt="tech" />
            </span>
          </div>
          <div>
            <h2 className="h1-section">Headless Commerce</h2>
            <div className="mt-2 fs-phone-14">
              Truly omni-channel with finely-crafted, extremely flexible and
              complete commerce API. Use your favorite CMS, CRM, fulfilment API,
              PIM, POS, ERP or innovations of tomorrow.
            </div>
          </div>
        </div>
        <div className="tw-px-6 tw-pt-12 md:tw-p-0 md:tw-w-1/2 ">
          <LottieRenderer path={lottieJson} />
        </div>
      </div>
    </div>
  );
}

import { useTranslation } from "next-i18next";
import multi from "@/public/icons/crossBorder/flexible/multi.svg";
import monti from "@/public/icons/crossBorder/flexible/monti.svg";
import pci from "@/public/icons/crossBorder/flexible/pci.svg";
import secure from "@/public/icons/crossBorder/flexible/secure.svg";
import iso from "@/public/icons/crossBorder/flexible/iso.svg";
import committed from "@/public/icons/crossBorder/flexible/committed.svg";

import Image from "next/image";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function Committed() {
  const { t } = useTranslation("common");

  const flexible = [
    { title: "committed", img: committed },
    { title: "multi", img: multi },
    { title: "monitor", img: monti },
  ];
  return (
    <>
      <div className="committed">
        <div className="container">
          <div className="container-child mx-auto">
            <div className="fw-7 fs-40 pb-5 text-center px-md-5">
              {t("crossBorder.committed.title")}
            </div>
          </div>

          <div className="row pt-4">
            {flexible.map((value, index) => (
              <>
                <div className="col-lg-4 text-center" key={index}>
                  <Image
                    src={value.img}
                    alt={value.title}
                    className="mx-auto"
                  />
                  <div className="py-3 fw-5">
                    {t(`crossBorder.committed.${value.title}.title`)}
                  </div>
                  <div className="fs-14">
                    {t(`crossBorder.committed.${value.title}.content`)}
                  </div>
                </div>
              </>
            ))}
          </div>

          <div className="text-center ">
            <div className="tw-py-4 lg:tw-py-8 tw-text-2xl lg:tw-text-4xl tw-font-bold">
              {t("crossBorder.committed.certi")}
            </div>
            <div className="pb-4 d-md-flex justify-content-center mx-auto">
              <Image src={pci} alt="pci" />
              <Image src={secure} alt="secure" />
              <Image src={iso} alt="iso" />
            </div>
          </div>
          <div className="text-center">
            <Link
              href="/trust-security"
              className=" text-decoration-none"
              rel="nofollow"
              passHref
            >
              {t("crossBorder.committed.learnMore")}{" "}
              <FontAwesomeIcon icon={faArrowRight} />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

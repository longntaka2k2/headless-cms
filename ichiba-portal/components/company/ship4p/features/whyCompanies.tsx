import Image from "next/image";
import company1 from "@/public/icons/ship4p/fetures/company1.png";
import company2 from "@/public/icons/ship4p/fetures/company2.png";
import company3 from "@/public/icons/ship4p/fetures/company3.png";
import company4 from "@/public/icons/ship4p/fetures/company4.png";
import { useTranslation } from "next-i18next";

const com = [
  { img: company1, title: "reliability" },
  { img: company2, title: "optimized" },
  { img: company3, title: "transparency" },
  { img: company4, title: "saveTime" },
];

export default function Companies() {
  const { t } = useTranslation("common");

  return (
    <>
      <div className="companies">
        <div className="container">
          <div className="row">
            <h2 className="col-lg-3 fw-7 fs-36 fs-md-28 pb-5">
              {t("ship.features.companines.title")}
            </h2>
            <div className="offset-lg-1 col-lg-8">
              <div className="row items">
                {com.map((value, index) => (
                  <>
                    <div className="col-lg-6 pb-5">
                      <div>
                        <Image
                          src={value.img}
                          alt={value.title ? value.title : "companines"}
                        />
                      </div>
                      <div className="fw-7 fs-18 py-3">
                        {t(`ship.features.companines.${value.title}.title`)}
                      </div>
                      <div>
                        {t(`ship.features.companines.${value.title}.content`)}
                      </div>
                    </div>
                  </>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

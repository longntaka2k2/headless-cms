import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image, { StaticImageData } from "next/image";

import BambooAirways from "@/public/icons/ship4p/allcarriers/BambooAirways.png";
import BlueDart from "@/public/icons/ship4p/allcarriers/BlueDart.png";
import ChinaPost from "@/public/icons/ship4p/allcarriers/ChinaPost.png";
import CJCentury from "@/public/icons/ship4p/allcarriers/CJCentury.png";
import DBSchenker from "@/public/icons/ship4p/allcarriers/DBSchenker.png";
import EMS from "@/public/icons/ship4p/allcarriers/EMS.png";
import DHL from "@/public/icons/ship4p/allcarriers/DHL.png";
import Fedex from "@/public/icons/ship4p/allcarriers/Fedex.png";
import Geodis from "@/public/icons/ship4p/allcarriers/Geodis.png";
import GHN from "@/public/icons/ship4p/allcarriers/GHN.png";
import DGiaohangtietkiemHL from "@/public/icons/ship4p/allcarriers/Giaohangtietkiem.png";
import Gojek from "@/public/icons/ship4p/allcarriers/Gojek.png";
import Grab from "@/public/icons/ship4p/allcarriers/Grab.png";
import JT from "@/public/icons/ship4p/allcarriers/J&T.png";
import JapanPost from "@/public/icons/ship4p/allcarriers/JapanPost.png";
import KoreanAir from "@/public/icons/ship4p/allcarriers/KoreanAir.png";
import Ninjavan from "@/public/icons/ship4p/allcarriers/Ninjavan.png";
import NipponExpress from "@/public/icons/ship4p/allcarriers/NipponExpress.png";
import SingaporePost from "@/public/icons/ship4p/allcarriers/SingaporePost.png";
import Sagawa from "@/public/icons/ship4p/allcarriers/Sagawa.png";
import SFExpress from "@/public/icons/ship4p/allcarriers/SFExpress.png";
import SingaporeAirlines from "@/public/icons/ship4p/allcarriers/SingaporeAirlines.png";
import SinoShipping from "@/public/icons/ship4p/allcarriers/SinoShipping.png";
import TNT from "@/public/icons/ship4p/allcarriers/TNT.png";
import TiongNam from "@/public/icons/ship4p/allcarriers/TiongNam.png";
import uParcel from "@/public/icons/ship4p/allcarriers/uParcel.png";
import UPS from "@/public/icons/ship4p/allcarriers/UPS.png";
import USPS from "@/public/icons/ship4p/allcarriers/USPS.png";
import VietnamAirlines from "@/public/icons/ship4p/allcarriers/VietnamAirlines.png";
import VietnamPost from "@/public/icons/ship4p/allcarriers/VietnamPost.png";
import ViettelPost from "@/public/icons/ship4p/allcarriers/ViettelPost.png";
import XinHua from "@/public/icons/ship4p/allcarriers/XinHua.png";
import Yamato from "@/public/icons/ship4p/allcarriers/Yamato.png";
import YusenLogistics from "@/public/icons/ship4p/allcarriers/YusenLogistics.png";
import ZTOExpress from "@/public/icons/ship4p/allcarriers/ZTOExpress.png";

import { useState } from "react";
import { useTranslation } from "next-i18next";

const region = [
  { title: "vietnam" },
  { title: "japan" },
  { title: "global" },
  { title: "vietnam" },
  { title: "US" },
  { title: "korean" },
  { title: "china" },
  { title: "singapore" },
  { title: "myanmar" },
  { title: "malaysia" },
  { title: "indonesia" },
  { title: "thailand" },
  { title: "laos" },
  { title: "cambodia" },
];
const carries = [
  { img: BambooAirways, title: "Bamboo Airways", region: "vietnam" },
  { img: BlueDart, title: "Blue Dart", region: "japan" },
  { img: ChinaPost, title: "China Post", region: "china" },
  { img: CJCentury, title: "CJ Century", region: "malaysia" },
  { img: DBSchenker, title: "DB Schenker", region: "myanmar" },
  { img: EMS, title: "EMS", region: "global" },
  { img: DHL, title: "DHL", region: "global" },
  { img: Fedex, title: "Fedex", region: "global" },
  { img: Geodis, title: "Geodis", region: "myanmar" },
  { img: GHN, title: "GHN", region: "vietnam" },
  { img: DGiaohangtietkiemHL, title: "Giaohangtietkiem HL", region: "vietnam" },
  { img: Gojek, title: "Gojek HL", region: "global" },
  { img: Grab, title: "Grab", region: "global" },
  { img: TNT, title: "TNT", region: "china" },
  { img: JT, title: "J&T", region: "global" },
  { img: JapanPost, title: "Japan Post", region: "japan" },
  { img: KoreanAir, title: "KoreanAir", region: "korean" },
  { img: Ninjavan, title: "Ninjavan", region: "singapore" },
  { img: NipponExpress, title: "Nippon Express", region: "japan" },
  { img: Sagawa, title: "Sagawa", region: "japan" },
  { img: SFExpress, title: "SF Express", region: "china" },
  { img: SingaporeAirlines, title: "Singapore Airlines", region: "singapore" },
  { img: SingaporePost, title: "Singapore Post", region: "singapore" },
  { img: SinoShipping, title: "Sino Shipping", region: "china" },
  { img: TiongNam, title: "Tiong Nam", region: "malaysia" },
  { img: uParcel, title: "uParcel", region: "singapore" },
  { img: UPS, title: "UPS", region: "US" },
  { img: USPS, title: "USPS", region: "US" },
  { img: VietnamAirlines, title: "Vietnam Airlines", region: "vietnam" },
  { img: VietnamPost, title: "Vietnam Post", region: "vietnam" },
  { img: ViettelPost, title: "Viettel Post", region: "vietnam" },
  { img: XinHua, title: "Xin Hua", region: "malaysia" },
  { img: Yamato, title: "Yamato", region: "japan" },
  { img: YusenLogistics, title: "Yusen Logistics", region: "singapore" },
  { img: ZTOExpress, title: "ZTO Express", region: "china" },
];

export default function Integration() {
  const { t } = useTranslation("common");

  const [isOpen, setOpen] = useState(false);
  const [allCarriers, setCarriers] = useState(carries);
  const [regionValue, setRegion] = useState("");

  const selectRegion = (event: { target: { value: string } }) => {
    if (event.target.value !== "") {
      setRegion(event.target.value);
      let filteredCarriers: {
        img: StaticImageData;
        title: string;
        region: string;
      }[] = [];
      carries.forEach((items) => {
        filteredCarriers = carries.filter(
          (item) => item.region === event.target.value,
        );
      });
      setCarriers(filteredCarriers as []);
    } else {
      setRegion("");
      setCarriers(carries);
    }
  };
  const searchRegion = (event: { target: { value: string } }) => {
    if (event.target.value !== "") {
      let filteredCarriers: {
        img: StaticImageData;
        title: string;
        region: string;
      }[] = [];
      allCarriers.forEach((items) => {
        filteredCarriers = allCarriers.filter((item) =>
          item.title.toLowerCase().includes(event.target.value),
        );
      });
      setCarriers(filteredCarriers as []);
    } else {
      if (regionValue !== "") {
        let filteredCarriers: {
          img: StaticImageData;
          title: string;
          region: string;
        }[] = [];
        carries.forEach((items) => {
          filteredCarriers = carries.filter(
            (item) => item.region === regionValue,
          );
        });
        setCarriers(filteredCarriers as []);
      } else {
        setCarriers(carries);
      }
    }
  };
  return (
    <>
      <div className="integration">
        <div className="container">
          <h3 className="fw-7 fs-36 pb-4 text-center">
            {t("ship.overview.integration.title")}
          </h3>
          <div className="text-center pb-4">
            {t("ship.overview.integration.content")}
          </div>

          <div className="d-md-flex justify-content-between align-items-center">
            <div className="fw-7 fs-24">
              {t("ship.overview.integration.allCarries")}
            </div>
            <div>
              <div className="my-4 d-flex justify-content-between justify-content-between">
                <div className="input-group ">
                  <input
                    type="text"
                    className="form-control input-search"
                    placeholder={t("careers.search")!}
                    onChange={searchRegion}
                  />
                  <span
                    className="input-group-text"
                    id="basic-addon2"
                    style={{ background: "none" }}
                  >
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                  </span>
                </div>
                <div className="select-group">
                  <select
                    className="form-select form-select mb-3"
                    onChange={selectRegion}
                  >
                    <option selected value={""}>
                      {t("ship.overview.integration.allCountry")}
                    </option>
                    {region.map((value, index) => (
                      <>
                        <option value={value.title}>
                          {t(`ship.overview.integration.${value.title}`)}
                        </option>
                      </>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div
            className={
              isOpen === false ? "all-carriers hidden" : "all-carriers "
            }
          >
            <div className="row">
              {allCarriers.map((value: any, index: number) => (
                <>
                  <div className="col-lg-3 col-md-4 col-sm-6  cursor">
                    <div className="carriers-item my-3">
                      <Image
                        src={value.img}
                        alt="carriers-item"
                        className="me-3"
                      />
                      <span className="d-inline-block">{value.title}</span>
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>
          <div className={isOpen === false ? "text-center" : "d-none"}>
            <span className="btn-view-all" onClick={() => setOpen(true)}>
              View All Integrations
            </span>
          </div>
          <div className={isOpen === true ? "text-center" : "d-none"}>
            <span className="btn-view-all" onClick={() => setOpen(false)}>
              Hide
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

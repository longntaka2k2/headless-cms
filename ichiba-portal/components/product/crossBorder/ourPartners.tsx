import pcs from "@/public/icons/crossBorder/ourPartner/pcs.png";
import dhl from "@/public/icons/crossBorder/ourPartner/dhl.png";
import fedex from "@/public/icons/crossBorder/ourPartner/fedex.png";
import jt from "@/public/icons/crossBorder/ourPartner/jt.png";
import lazada from "@/public/icons/crossBorder/ourPartner/lazada.png";
import shopee from "@/public/icons/crossBorder/ourPartner/shopee.png";
import tiki from "@/public/icons/crossBorder/ourPartner/tiki.png";
import tiktok from "@/public/icons/crossBorder/ourPartner/tiktok.png";
import aution from "@/public/icons/crossBorder/ourPartner/aution.png";
import yahoo from "@/public/icons/crossBorder/ourPartner/yahoo.png";
import rakuten from "@/public/icons/crossBorder/ourPartner/rakuten.png";
import amazon from "@/public/icons/crossBorder/ourPartner/amazon.png";
import ebay from "@/public/icons/crossBorder/ourPartner/ebay.png";
import fado from "@/public/icons/crossBorder/ourPartner/fado.png";
import taobao from "@/public/icons/crossBorder/ourPartner/taobao.png";
import gmarket from "@/public/icons/crossBorder/ourPartner/gmarket.png";
import shopify from "@/public/icons/crossBorder/ourPartner/shopify.png";
import woo from "@/public/icons/crossBorder/ourPartner/woo.png";
import { useTranslation } from "next-i18next";
import Image from "next/image";

const partners = [
  pcs,
  dhl,
  fedex,
  jt,
  lazada,
  shopee,
  tiki,
  tiktok,
  aution,
  yahoo,
  rakuten,
  amazon,
  ebay,
  fado,
  taobao,
  gmarket,
  shopify,
  woo,
];

export default function OurPartner() {
  const { t } = useTranslation("common");

  return (
    <>
      <div className="ourPartner">
        <div className="container">
          <h2 className="text-center fw-7 fs-40">
            {t("crossBorder.ourPartner")}
          </h2>
          <div className="text-center">
            {partners.map((value, index) => (
              <>
                <div className="icons d-inline-block ">
                  <Image src={value} alt="icon" />
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

"use client";
import useWidth from "@/hooks/useWidth";
import facebook from "@/public/images/icons/facebook.svg";
import tiwtter from "@/public/images/icons/twitter.svg";
import youtube from "@/public/images/icons/youtube.svg";
import Image from "next/image";
import { useEffect, useState } from "react";
import NeedSupport from "../../shared/NeedSupport";
import Disclosure from "./disclosure";
import { LocalizeLink } from "@/utils/ultils";
import Social from "./Social";
import DownloadEzbuy from "./DownloadEzbuy";

const Footer = ({ params, lang }: { params: { lang: string }; lang: any }) => {
  const [isDesktop, setIsDesktop] = useState(true);

  const width = useWidth();
  const linkFAQ = (lang: string) => {
    let link = "";
    switch (lang) {
      case "vi":
        link = "https://ezbuyjapan.gitbook.io/help-center/faqs";
        break;
      case "ja":
        link = "https://ezbuyjapan.gitbook.io/help-center/faqs";
        break;
      default:
        link = "https://ezbuyjapan.gitbook.io/help-center/faqs";
        break;
    }
    return link;
  };
  useEffect(() => {
    if (width <= 984) {
      setIsDesktop(false);
    } else {
      setIsDesktop(true);
    }
  }, [width]);
  useEffect(() => {
    if (width <= 984) {
      const disclosures = document.querySelectorAll(
        "div[id^='headlessui-disclosure-button-']"
      );
      disclosures.forEach((x) => (x as HTMLElement).click());
    }
  });

  return (
    <footer>
      <NeedSupport lang={lang} params={params} />
      <div className="flex justify-center lg:mb-20 px-4 py-8 lg:px-0 lg:py-0 lg:pt-[120px]">
        <div className="container flex-1">
          <div className="mr-auto text-xl lg:text-[1.8rem] font-bold mb-6 lg:mb-10">
            {lang?.footer?.title}
          </div>
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/2 lg:w-1/4 pr-6">
              <div className="mb-6 ">
                <div className="font-semibold mb-2">
                  {lang?.footer?.address}
                </div>
                <div className="text-sm font-medium">
                  {lang?.footer?.addressDetail}
                </div>
              </div>
              <div className="mb-6">
                <div className="font-semibold mb-2">{lang?.footer?.email}</div>
                <div className="grid gap-1">
                  <div className="text-sm font-medium">
                    {lang?.footer?.direct}: chienlv@ezbuy.jp
                  </div>
                  <div className="text-sm font-medium">
                    {lang?.footer?.support}: ceo@ezbuy.jp
                  </div>
                </div>
              </div>
            </div>
            <div className="md:hidden lg:hidden border-[#F0F0F0] border-2 w-full mb-6"></div>
            <div className="w-full md:w-1/2 lg:w-1/4 pr-6">
              <div className="mb-6">
                <Disclosure
                  title={lang?.footer?.company}
                  items={[
                    {
                      label: lang?.footer?.aboutUs,
                      link: LocalizeLink(params.lang, "/about-us"),
                    },
                    {
                      label: lang?.footer?.partnerNetwork,
                      link: LocalizeLink(params.lang, "/partners-network"),
                    },
                  ]}
                  defaultOpen={isDesktop}
                  disabled={isDesktop}
                />
              </div>
              <div className="mb-6">
                <Disclosure
                  title={lang?.footer?.resourceCenter}
                  items={[
                    {
                      label: lang?.footer?.blog,
                      link: LocalizeLink(params.lang, "/blog"),
                    },
                    {
                      label: lang?.footer?.policy,
                      link: LocalizeLink(params.lang, "/doc/policy"),
                      target: "_blank",
                    },
                    {
                      label: lang?.footer?.videoLibrary,
                      link: "https://www.youtube.com/@ezbuyjapan",
                      target: "_blank",
                    },
                    {
                      label: lang?.footer?.caseStudies,
                      link: LocalizeLink(
                        params.lang,
                        "/customer-success-studies"
                      ),
                      target: "_blank",
                    },
                  ]}
                  defaultOpen={isDesktop}
                  disabled={isDesktop}
                />
              </div>
              <div className="mb-6">
                <Disclosure
                  title={lang?.footer?.b2bCatalog}
                  items={[]}
                  defaultOpen={isDesktop}
                  disabled={isDesktop}
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/4 pr-6">
              <div className="mb-6">
                <Disclosure
                  title={lang?.footer?.services}
                  items={[
                    {
                      label: lang?.footer?.cbe,
                      link: LocalizeLink(
                        params.lang,
                        "/services/cross-border-ecommerce"
                      ),
                    },
                    {
                      label: lang?.footer?.cbs,
                      link: LocalizeLink(
                        params.lang,
                        "/services/cross-border-shipping"
                      ),
                    },
                    {
                      label: lang?.footer?.wf,
                      link: LocalizeLink(
                        params.lang,
                        "/services/warehouse-fulfillment"
                      ),
                    },
                    {
                      label: lang?.footer?.afcc,
                      link: LocalizeLink(
                        params.lang,
                        "/services/air-freight-customs-clearance"
                      ),
                    },
                    {
                      label: lang?.footer?.b2bte,
                      link: LocalizeLink(
                        params.lang,
                        "/services/B2B-wholesale-ecommerce"
                      ),
                    },
                    {
                      label: lang?.footer?.sij,
                      link: LocalizeLink(
                        params.lang,
                        "/services/sell-in-japan"
                      ),
                    },
                    {
                      label: lang?.footer?.dropshipping,
                      link: LocalizeLink(params.lang, "/services/dropshipping"),
                    },
                    {
                      label: lang?.footer?.siv,
                      link: LocalizeLink(
                        params.lang,
                        "/services/sell-in-vietnam"
                      ),
                    },
                    {
                      label: lang?.footer?.sio,
                      link: LocalizeLink(
                        params.lang,
                        "/services/sell-overseas"
                      ),
                    },
                    {
                      label: lang?.footer?.oneStop,
                      link: lang?.header?.linkOneStop,
                      target: "_blank",
                    },
                  ]}
                  defaultOpen={isDesktop}
                  disabled={isDesktop}
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/4 pr-6">
              <div className="mb-6">
                <Disclosure
                  title={lang?.footer?.shipping}
                  items={[
                    {
                      label: lang?.footer?.createShipment,
                      link: "https://portal.ezbuy.jp/account/create-shipment",
                      target: "_blank",
                    },
                    {
                      label: lang?.footer?.trackTrace,
                      link: "https://portal.ezbuy.jp/account/product-search",
                      target: "_blank",
                    },
                    {
                      label: lang?.footer?.rateTransitTime,
                      link: "https://portal.ezbuy.jp/shipping-calculator",
                      target: "_blank",
                    },
                  ]}
                  defaultOpen={isDesktop}
                  disabled={isDesktop}
                />
              </div>
              <DownloadEzbuy
                lang={lang.footer.downloadJanbox}
                className="hidden lg:block"
              />
            </div>
            <div className="md:hidden lg:hidden border-[#F0F0F0] border-2 w-full mb-6"></div>
            <DownloadEzbuy
              lang={lang.footer.downloadJanbox}
              className=" lg:hidden block w-full mb-6"
            />
          </div>
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/2 lg:w-1/2 pr-6 mb-6 lg:mb-0">
              <div className="font-semibold mb-2">
                {lang?.footer?.connectUs}
              </div>
              <div className="text-sm font-medium text-[#8C8C8C] mb-6">
                {lang?.footer?.connectUsDetail}
              </div>
              <div className="flex gap-4">
                <a href="https://www.facebook.com/ezbuyjapan" target="_blank">
                  <Image src={facebook} alt="facebook"></Image>
                </a>
                <a href="https://twitter.com/Ezbuyjp" target="_blank">
                  <Image src={tiwtter} alt="twitter"></Image>
                </a>
                <a href="https://www.youtube.com/@ezbuyjp" target="_blank">
                  <Image src={youtube} alt="youtube"></Image>
                </a>
                {/* <Image src={tiktok} alt="tiktok"></Image>
                <Image src={instagram} alt="instagram"></Image> */}
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/2 md:pr-6">
              <div className="font-semibold mb-2">
                {lang?.footer?.subscribe}
              </div>
              <div className="text-sm font-medium text-[#8C8C8C] mb-6">
                {lang?.footer?.subscribeDetail}
              </div>
              <div className="flex text-sm">
                <input
                  className="border pl-4 py-3 flex-1"
                  placeholder={lang?.footer?.placeholderSubscribe}
                />
                <button className="px-4 py-3 border border-[#00194F] bg-[#00194F] text-white">
                  {lang?.footer?.subscribe}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#F5F5F5] w-full flex justify-center py-6 px-4 lg:px-0">
        <div className="container">
          <span className="text-xs">{lang?.footer?.premiumEcommerce}</span>
        </div>
      </div>
      <Social />
    </footer>
  );
};

export default Footer;

"use client";
import "react-phone-input-2/lib/style.css";
import "react-toastify/dist/ReactToastify.css";
import { usePathname } from "next/navigation";
import Banner from "./Banner";
import CEO from "./CEO";
import Products from "./Products";
import Core from "./Core";
import GoGlobal from "./go-global";
import Trip from "./Trip";
import OurCustomers from "./OurCustomers";
import PressSays from "./PressSays";

const AboutUsComponent = ({ lang }: any) => {
  const locale = usePathname().slice(1, 3);
  return (
    <>
      <Banner lang={lang.aboutUsPage.banner} />
      <CEO lang={lang.aboutUsPage.ceo} />
      <Products lang={lang.aboutUsPage.products} />
      <Core lang={lang.aboutUsPage.core} />
      <GoGlobal lang={lang.aboutUsPage.goGlobal} locale={locale} />
      <Trip lang={lang.aboutUsPage.trip} locale={locale} />
      <OurCustomers lang={lang.aboutUsPage.ourCustomers} locale={locale} />
      <PressSays lang={lang.aboutUsPage.pressSays} />
    </>
  );
};

export default AboutUsComponent;

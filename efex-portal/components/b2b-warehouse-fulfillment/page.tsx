"use client";
import { usePathname } from "next/navigation";
import BannerB2B from "./Banner";
import Making from "./Making";
import DetailedGuide from "./DetailedGuide";
import LoginNow from "./LoginNow";
import FromVietNam from "@/components/commons/FromVietNam";

const B2BWarehouseCPN = ({ lang }: any) => {
  const locale = usePathname().slice(1, 3);
  return (
    <>
      <BannerB2B lang={lang.b2bWarehouse.banner} />
      <Making lang={lang.b2bWarehouse.making} />
      <DetailedGuide lang={lang.b2bWarehouse.detailed} />
      <LoginNow lang={lang.b2bWarehouse.loginNow} />
      <FromVietNam lang={lang} />
    </>
  );
};

export default B2BWarehouseCPN;

import React from "react";
import classes from "./ProductHeader.module.scss";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

interface ProductHeaderProps {
  menu: { label: string; href: string }[];
  name: string;
  logo: string;
}

const ProductHeader: React.FC<ProductHeaderProps> = ({ menu, name, logo }) => {
  const { t } = useTranslation("common");
  const router = useRouter();

  const handleContactSale = () => router.push("/contact-sales");

  return (
    <div className="!tw-bg-ic-white-6 tw-sticky tw-top-0 tw-shadow-10 tw-z-[100]">
      <div className="container">
        <div className="tw-flex tw-w-full tw-justify-between tw-items-center tw-bg-ic-white-6 tw-gap-4">
          <div className={classes.main}>
            <div className={classes.header}>
              <Image width={32} height={32} alt="product" src={logo} />
              <h2>{name}</h2>
            </div>
            <div className={classes.menu}>
              {menu.map((item, index) => (
                <Link key={index} href={item.href}>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="tw-flex tw-items-center tw-gap-4 tw-font-medium tw-text-sm">
            <button className="tw-text-brand-primary tw-border-brand-primary tw-border-2 tw-rounded-lg tw-py-2 tw-px-3">
              {t("getStart")}
            </button>
            <button
              onClick={handleContactSale}
              className="tw-text-ic-white-6 tw-py-2 tw-h-10 tw-px-3 tw-rounded-lg tw-bg-brand-primary"
            >
              {t("contactSale")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductHeader;

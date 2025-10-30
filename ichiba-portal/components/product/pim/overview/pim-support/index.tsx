import Image from "next/image";
import React from "react";
import { useTranslation } from "next-i18next";
import PimSection from "../section";

const image = {
  cover:
    "https://cms-strapi.ichiba.net/uploads/Integration_and_Partnership_64ff1209fb.png",
  map: "https://cms-strapi.ichiba.net/uploads/Illustration_a2f90094bc.webp",
};

const PimSupport = () => {
  const { t } = useTranslation("pim");

  return (
    <div className="container">
      <PimSection title={t("supportDesc")}>
        <Image
          src="https://cms-strapi.ichiba.net/uploads/Illustration_a2f90094bc.webp"
          alt="Illustration"
          width={1200}
          height={560}
        />
      </PimSection>
    </div>
  );
};

export default PimSupport;

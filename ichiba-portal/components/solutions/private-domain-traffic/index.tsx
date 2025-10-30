import clsx from "clsx";
import React from "react";
import BuildYourCustomer from "./BuildYourCustomer";
import YouAreLoosing from "./YouAreLoosing";
import WhatMakes from "./WhatMakes";
import PrivateDomain from "./PrivateDomain";
import HelpsSellers from "./helps-sellers/index";
import ContactSales from "./ContactSales";

export default function PrivateDomainTrafficCPN() {
  return (
    <section className="tw-overflow-hidden">
      <BuildYourCustomer />
      <YouAreLoosing />
      <div
        className={clsx(
          "tw-bg-[url('https://cms-strapi.ichiba.net/uploads/Group_1171276404_1_0c6d0cfc21.svg')]",
          "lg:tw-bg-[url('https://cms-strapi.ichiba.net/uploads/Group_1171276404_c852c3d477.png')]",
          "tw-bg-cover tw-bg-no-repeat ",
        )}
      >
        <WhatMakes />
        <PrivateDomain />
      </div>
      <HelpsSellers />
      <ContactSales />
    </section>
  );
}

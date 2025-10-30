import { useTranslation } from "react-i18next";
import Transform from "./transform";
import Challenges from "./challenges";
import HowDoes from "./how-does";
import WhyChooseUs from "./why-choose-us";
import DiscoverProducts from "./discover-products";
import WeService from "./we-service";
import ContactSales from "./contactSales";

export default function MotherAndBabyComponent() {
  return (
    <section className="tw-overflow-hidden">
      <Transform />
      <Challenges />
      <HowDoes />
      <WhyChooseUs />
      <DiscoverProducts />
      <WeService />
      <ContactSales />
    </section>
  );
}

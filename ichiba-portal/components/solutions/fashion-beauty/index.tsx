import EverythingYouNeed from "./EverythingYouNeed";
import ContactSale from "./contact-sales";
import Dominating from "./dominating";
import Monitor from "./monitor";
import OurCustomers from "./our-customers";
import Technology from "./technology";

export default function FashionBeautyComponent() {
  return (
    <section className="tw-overflow-hidden">
      <EverythingYouNeed />
      <Dominating />
      <Monitor />
      <Technology />
      <OurCustomers />
      <ContactSale />
    </section>
  );
}

import ContactSalesComponent from "@/components/contact-sales/page";
import { getDictionary } from "@/app/getDictionary";

const ContactSales = async ({
  params,
}: {
  params: {
    lang: string;
    slug: string;
  };
}) => {
  const lang = await getDictionary(params.lang ? params.lang : "en");
  return (
    <ContactSalesComponent lang={lang} />
  );
};
export default ContactSales;
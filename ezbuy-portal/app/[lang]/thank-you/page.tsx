import ContactSalesComponent from "@/components/contact-sales/page";
import { getDictionary } from "@/app/getDictionary";
import ThankYouComponent from "@/components/thank-you/page";

const ThankYou = async ({
  params,
}: {
  params: {
    lang: string;
    slug: string;
  };
}) => {
  const lang = await getDictionary(params.lang ? params.lang : "en");
  return (
    <ThankYouComponent lang={lang.thankYou} />
  );
};
export default ThankYou;
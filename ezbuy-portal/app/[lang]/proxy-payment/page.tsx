import ProxyPaymentComponent from "@/components/proxy-payment/page";
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
        <ProxyPaymentComponent lang={lang} />
    );
};
export default ContactSales;
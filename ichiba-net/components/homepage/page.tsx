import Image from "next/image";
import OneStop from "./one-stop";
import GrowingOnIChiba from "./growing-on-ichiba";
import IChibaDoesTheRest from "./ichiba-does-the-rest/page";
import WhyChooseUs from "./why-choose-us";
import Security from "./security";
import Products from "./products";
import OurPartners from "./our-partners";
import OurCustomerReview from "./our-customer-review";
import Discover from "./discover";
import ContactSales from "./contact-sales";
import Maps from "./assets/maps.svg";

export default function Homepage({
    lang,
    locale,
}: { 
    lang: any;
    locale: string;
}) {
    return (
        <div className="overflow-hidden">
            <OneStop lang={lang?.homepage?.oneStop} />
            <GrowingOnIChiba lang={lang?.homepage?.growing} />
            <IChibaDoesTheRest lang={lang?.homepage?.iChibaDoesTheRest} locale={locale} />
            <div className="relative">
                <WhyChooseUs lang={lang} locale={locale} />
                <Security lang={lang?.homepage?.managementSoftware} locale={locale} />
                <Image src={Maps} width={1520} height={224} className="absolute -right-[10%] bottom-[30%] hidden lg:block -z-1" alt="" />
            </div>
            <Products lang={lang} locale={locale} />
            <OurPartners lang={lang} locale={locale} />
            <OurCustomerReview lang={lang} locale={locale} />
            <Discover lang={lang} locale={locale} />
            <ContactSales lang={lang} locale={locale} />
        </div>
    );
}

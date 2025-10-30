import { useTranslation } from "next-i18next";
import { BannerPOD } from "@/components/solutions/pod/banner-pod/BannerPOD";
import { Challenges } from "@/components/solutions/pod/Challenges";
import { AllInOne } from "@/components/solutions/pod/all-in-one";
import { HowItWork } from "@/components/solutions/pod/HowItWork";
import { ChooseIChiba } from "@/components/solutions/pod/ChooseIChiba";
import { CustomerStories } from "@/components/solutions/pod/customer-stories";
import { ProductsServices } from "@/components/solutions/pod/ProductsServices";
import { ContactUs } from "@/components/solutions/pod/ContactUs";

export const PrintOnDemand = () => {
  const { t } = useTranslation("pod");
  return (
    <>
      <BannerPOD />
      <Challenges />
      <AllInOne />
      <div className="tw-bg-[url('https://cms-strapi.ichiba.net/uploads/Group_1171276399_32b4776d1a.svg')] tw-bg-cover">
        <HowItWork />
        <ChooseIChiba />
      </div>
      {/* <CustomerStories /> */}
      <ProductsServices />
      <ContactUs />
    </>
  );
};

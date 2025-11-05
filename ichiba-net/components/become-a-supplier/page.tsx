import OnIChiba from "./on-ichiba";
import JoinOur from "./join-our";
import WhoCanBecome from "./who-can-become";
import WhyChoose from "./why-choose";
import GlobalSellerNetwork from "./global-seller-network";
import HowToBecome from "./how-to-become";
import Proof from "./proof/page";
import FrequentlyQuestions from "./frequently-questions/index";
import WhatYouStill from "./what-you-still";
const BecomeASupplierCPN = ({ lang }: any) => {
    return (
        <div>
            <OnIChiba lang={lang} />
            <JoinOur lang={lang} />
            <WhoCanBecome lang={lang} />
            <WhyChoose lang={lang} />
            <GlobalSellerNetwork lang={lang} />
            <HowToBecome lang={lang} />
            <Proof lang={lang} />
            <FrequentlyQuestions lang={lang} />
            <WhatYouStill lang={lang} />
        </div>
    );
};

export default BecomeASupplierCPN;

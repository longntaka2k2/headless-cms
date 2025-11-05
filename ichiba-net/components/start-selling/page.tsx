import Banner from "./banner";
import NextGen from "./next-gen";
import Products from "./products";
import LoveIChiba from "./love-ichiba";
import StepByStep from "./step-by-step";
import StepToStart from "./step-to-start";
import JoinOurCommunity from "./join-our-community";
import StarYour from "./star-your";
import FrequentlyQuestions from "./frequently-questions/index";

const StartSelling = ({ lang }: any) => {
    return (
        <div>
            <Banner lang={lang} />
            <NextGen lang={lang} />
            <Products lang={lang} />
            <LoveIChiba lang={lang} />
            <StepByStep lang={lang} />
            <StepToStart lang={lang} />
            <JoinOurCommunity lang={lang} />
            <StarYour lang={lang} />
            <FrequentlyQuestions lang={lang} />
        </div>
    );
};

export default StartSelling;

import dynamic from "next/dynamic";
import Image from "next/image";

const Header = dynamic(() => import("@/components/home/Header"), {
  ssr: true,
});

const Banner = dynamic(() => import("@/components/home/Banner"), {
  ssr: true,
});

const Trust = dynamic(() => import("@/components/home/Trust"), {
  ssr: true,
});

const Challenges = dynamic(() => import("@/components/home/Challenges"), {
  ssr: true,
});

const Solution = dynamic(() => import("@/components/home/Solution"), {
  ssr: true,
});

const SolveTheChallenge = dynamic(
  () => import("@/components/home/SolveTheChallenge"),
  {
    ssr: true,
  },
);

const SystemIntegration = dynamic(
  () => import("@/components/home/SystemIntegration"),
  {
    ssr: true,
  },
);

const OutstandingFeatures = dynamic(
  () => import("@/components/home/OutstandingFeatures"),
  {
    ssr: true,
  },
);

const MeetTheNeeds = dynamic(() => import("@/components/home/MeetTheNeeds"), {
  ssr: true,
});

const DeploySoftware = dynamic(
  () => import("@/components/home/DeploySoftware"),
  {
    ssr: true,
  },
);

const Footer = dynamic(() => import("@/components/home/Footer"), {
  ssr: true,
});

export default function Index(props: any) {
  const handleFocusFooter = () => {
    const footerElement = document.getElementById("footer");
    if (footerElement) {
      footerElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Header onButtonClick={handleFocusFooter} />
      <div className="tw-relative">
        <Banner onButtonClick={handleFocusFooter} />
        <Image
          src={
            "https://cms-strapi.ichiba.net/uploads/Group_1171276339_4ed2dacf78.svg"
          }
          width={737}
          height={292}
          alt="background"
          className="tw-absolute tw-top-0 tw-right-0 -tw-z-1"
        />
        <Image
          src={"https://cms-strapi.ichiba.net/uploads/Vector_40293c6712.svg"}
          width={1878}
          height={1088}
          alt="background"
          className="tw-absolute tw-left-[50%] tw-translate-x-[-50%] tw-bottom-0 -tw-z-1"
        />
      </div>
      <Trust />
      <Challenges />
      <Solution />
      <OutstandingFeatures />
      <SolveTheChallenge />
      <SystemIntegration />
      <MeetTheNeeds />
      <DeploySoftware />
      <Footer />
    </>
  );
}

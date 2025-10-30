// components/RichText.js
import bgOurData from "@/public/images/404.jpg";
import { PreprocessContent } from "@/utils/ultils";
import Image from "next/image";
import { Suspense } from "react";

const RichText = ({ content }: { content: string }) => {
  return (
    <Suspense
      fallback={
        <Image
          src={bgOurData}
          alt="Buy For Me"
          className="mx-auto d-block"
          width={500}
          height={500}
          style={{ maxWidth: "100%", height: "auto" }}
        />
      }
    >
      <div dangerouslySetInnerHTML={{ __html: PreprocessContent(content) }} />
    </Suspense>
  );
};

export default RichText;

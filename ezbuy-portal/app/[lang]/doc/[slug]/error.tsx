"use client"; // Error components must be Client Components

import Image from "next/image";
import bgOurData from "@/public/images/404.jpg";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {


  return (
    <div>
      <div className="container">
        <div className="">
          <Image
            src={bgOurData}
            alt="EFEX"
            className="mx-auto d-block"
            width={500}
            height={500}
            style={{ margin: "100px auto", height: "auto" }}
          />
        </div>
      </div>
    </div>
  );
}

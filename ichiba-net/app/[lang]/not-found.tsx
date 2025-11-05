"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import bgOurData from "@/public/images/404.jpg";
import Image from "next/image";
export default function NotFound() {
  const router = useRouter();
  function backHome() {
    setTimeout(function () {
      router.push("/");
    }, 5000); // 5000ms = 5 giây
  }
  useEffect(() => {
    backHome();
  }, []);
  return (
    <html>
      <body>
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
      </body>
    </html>
  );
}

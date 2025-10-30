"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function TagPage() {
  const router = useRouter();

  function backHome() {
    setTimeout(function () {
      router.push("/customer-success-studies");
    }, 100);
  }

  useEffect(() => {
    backHome();
  }, []);

  return <div></div>;
}

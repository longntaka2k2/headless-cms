"use client"
import { getUser } from "@/public/api/strapiService";
import Image from "next/image";
import { useEffect } from "react";
const LoadImagUser = ({ id }: any) => {
  useEffect( () => {
    const getImageUser =async () => {
      const useDetail: any = await getUser(id as string);
    }
    getImageUser()
  }, []);

  return (
    <Image
      src={""}
      alt="avatar"
      width={70}
      height={70}
      className="w-full h-full"
    />
  );
};
export default LoadImagUser;

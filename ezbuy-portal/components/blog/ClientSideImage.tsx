"use client";
import { LocalizeLink } from "@/utils/ultils";

import Image, { ImageProps } from "next/image";
import { redirect } from "next/navigation";
import React from "react";

const ClientSideImage = (props: ImageProps & { lang?: string }) => (
  <Image
    {...props}
    src={
      typeof props.src == "string"
        ? props.src.startsWith("http://") || props.src.startsWith("https://")
          ? props.src
          : `https://strapi-ezbuy.ichiba.net${props.src}`
        : props.src
    }
    onClick={() => props?.lang && redirect(props?.lang)}
    alt={props.alt}
  />
);
export default ClientSideImage;

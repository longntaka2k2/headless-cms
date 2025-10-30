import { strapiDomain } from "@/constants";
import Image, { ImageProps } from "next/image";
import React from "react";

export const EzImage = (props: ImageProps) => {
  return (
    <Image
      {...props}
      src={
        typeof props.src == "string" ? `${strapiDomain}${props.src}` : props.src
      }
      alt={props.alt}
    />
  );
};

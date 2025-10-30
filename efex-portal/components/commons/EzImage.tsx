import Image, { ImageProps } from "next/image";
import React from "react";

const EzImage = (props: ImageProps) => (
  <Image
    {...props}
    src={
      typeof props.src == "string"
        ? `https://strapi-efex.ichiba.net${props.src}`
        : props.src
    }
    quality={100}
    alt={props.alt}
  />
);
export default EzImage;

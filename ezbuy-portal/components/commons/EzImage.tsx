import Image, { ImageProps } from "next/image";
import React from "react";

const EzImage = (props: ImageProps) => (
  <Image
    {...props}
    src={
      typeof props.src == "string"
        ? `https://strapi-ezbuy.ichiba.net${props.src}`
        : props.src
    }
    alt={props.alt}
  />
);
export default EzImage;

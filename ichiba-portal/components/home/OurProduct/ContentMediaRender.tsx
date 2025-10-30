import {
    StrapiMediaModel,
    StrapiRelationModel
} from "@/src/lib/models/StrapiModel";
import Image from "next/image";
import React from "react";

export const ContentMediaRender = ({
    media,
}: {
    media?: StrapiRelationModel<StrapiMediaModel>;
}) => {
    return (
        <>
            {media?.data?.attributes && media?.data?.attributes?.ext === ".webm" ? (
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    poster={media?.data?.attributes.url}
                >
                    <source
                        src={media?.data?.attributes.url}
                        type="video/webm; codecs=vp9" />
                </video>
            ) : (
                <Image
                    src={media?.data?.attributes?.url ?? ""}
                    alt={media?.data?.attributes?.url
                        ? media?.data?.attributes.url
                        : "component"}
                    className=" position-static"
                    fill={true} />
            )}
        </>
    );
};

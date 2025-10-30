import {
    StrapiMediaModel,
    StrapiRelationModel
} from "@/src/lib/models/StrapiModel";
import clsx from "clsx";
import React from "react";
import { useRouter } from "next/router";
import { ContentMediaRender } from "./ContentMediaRender";

export const ContentBodyRenderer = ({
    heading, description, className, upsides, media, style, link,
}: {
    heading: string;
    description: string;
    className?: string;
    upsides?: string[];
    media?: StrapiRelationModel<StrapiMediaModel>;
    style?: React.CSSProperties;
    link?: string;
}) => {
    const checkIconStyle = { color: "#0F62FE", margin: "10px 5px 0px 0px" };
    const locale = useRouter();

    return (
        <div className={clsx(`row content-app `, className)} style={style}>
            <div className="d-flex flex-wrap">
                <div className="text-start feature ">
                    <div className="title d-none d-sm-block">{heading}</div>
                    <div
                        className="sub-title"
                        dangerouslySetInnerHTML={{
                            __html: description ?? "",
                        }} />

                    <div className="feature-items">
                        {upsides?.map((x, idx) => (
                            <div className="feature-item" key={`${x}_${idx}`}>
                                <i
                                    className="fa-solid fa-lg fa-circle-check"
                                    style={checkIconStyle} />
                                <span>{x}</span>
                            </div>
                        ))}
                    </div>
                    <div className="link">
                        <a href={link ?? "#"} target="_blank" rel="noreferrer">
                            {locale.locale === "en" ? "Learn more" : "Tìm hiểu thêm"}
                        </a>{" "}
                        <i className="fa-solid fa-arrow-right" />
                    </div>
                </div>
                <div className="media">
                    <ContentMediaRender media={media} />
                </div>
            </div>
        </div>
    );
};

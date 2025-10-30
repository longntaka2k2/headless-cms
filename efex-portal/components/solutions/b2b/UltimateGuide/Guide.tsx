"use client";
import YouTube from "react-youtube";

export const Guide = ({ lang }: { lang: any }) => {
  const videoId = "fkH6H5NBTjY";

  return (
    <div className="container px-4 lg:px-0">
      <div className="text-center">
        <h2 className="text-2xl font-bold lg:text-4xl lg:leading-12">
          {lang.ultimateGuide.title}
        </h2>
        <p className="text-ic-ink-5 mt-2 lg:text-lg">
          {lang.ultimateGuide.subtitle}
        </p>
      </div>
      <div className="mt-4 lg:mt-10">
        <YouTube
          videoId={videoId}
          iframeClassName="mx-auto lg:w-[985px] lg:h-[540px] w-full h-[50vw]"
        />
      </div>
    </div>
  );
};

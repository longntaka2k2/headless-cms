import React, { useEffect } from "react";
import AnimationPC from "@/public/json/web-en.json";

export interface Props {
  path: any;
  style?: React.CSSProperties;
  className?: string;
}

const LottieRenderer = ({ path, style, className }: Props) => {
  useEffect(() => {
    import("@lottiefiles/lottie-player");
  }, []);

  // Tạo URL từ JSON object
  const jsonUrl = React.useMemo(() => {
    const blob = new Blob([JSON.stringify(path)], { type: "application/json" });
    return URL.createObjectURL(blob);
  }, [path]);

  return (
    <lottie-player
      className={className}
      src={jsonUrl}
      loop
      autoplay
      style={style}
    />
  );
};

export default LottieRenderer;

import React, { useEffect } from "react";

export interface Props {
  path: any;
  style: React.CSSProperties;
  className?: string;
}

const LottieRenderer = (props: Props) => {
  useEffect(() => {
    import("@lottiefiles/lottie-player");
  }, []);
  return (
    <lottie-player
      className={props.className}
      src={props?.path as any}
      loop
      autoplay
      style={props.style}
    >
      {" "}
    </lottie-player>
  );
};
export default LottieRenderer;

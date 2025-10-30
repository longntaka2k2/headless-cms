import React, { useEffect } from "react";

export interface Props {
  path: string;
  style?: React.CSSProperties;
  className?: string;
}

const LottieRenderer = (props: Props) => {
  useEffect(() => {
    import("@lottiefiles/lottie-player");
  }, []);
  return (
    <lottie-player
      class={props.className}
      src={props.path}
      loop
      autoplay
      style={props.style}
    >
      {" "}
    </lottie-player>
  );
};
export default LottieRenderer;

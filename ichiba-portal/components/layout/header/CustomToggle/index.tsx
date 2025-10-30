import React from "react";

interface MyComponentProps {
  children?: any;
  onClick?: () => void;
  className?: string;
}

// eslint-disable-next-line react/display-name
const CustomToggle = React.forwardRef<null, MyComponentProps>((props, ref) => (
  // Dùng props.children và props.onClick ở đây
  <span className=" " onClick={props.onClick}>
    {props.children}
  </span>
));

export default CustomToggle;

import classNames from "classnames";
import React, {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useRef,
} from "react";

import classes from "./TouchRipple.module.scss";

export interface TouchRippleActions {
  start: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}

type TouchRippleProps = {
  autoStart?: boolean;
  disabled?: boolean;
} & JSX.IntrinsicElements["div"];

const TouchRipple = forwardRef<TouchRippleActions, TouchRippleProps>(
  ({ autoStart, disabled, ...props }, ref) => {
    const rootRef = useRef<HTMLDivElement>(null);

    const start = useCallback(
      (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
        if (disabled) return;
        const { currentTarget, clientX, clientY } = event;
        const { clientHeight, clientWidth } = currentTarget;
        const { left: offsetLeft, top: offsetTop } =
          currentTarget.getBoundingClientRect();

        const circleLeft = clientX - offsetLeft;
        const circleTop = clientY - offsetTop;
        const circleRight = offsetLeft + clientWidth - clientX;
        const circleBottom = offsetTop + clientHeight - clientY;

        const circle = document.createElement("div");
        const radius = Math.max(
          circleLeft,
          circleTop,
          circleRight,
          circleBottom
        );

        circle.style.width = `${radius * 2}px`;
        circle.style.height = `${radius * 2}px`;
        circle.style.left = `${circleLeft - radius}px`;
        circle.style.top = `${circleTop - radius}px`;
        circle.classList.add(classes.circle);
        circle.addEventListener("animationend", (ev) => {
          if (!ev.target) return;
          (ev.target as HTMLElement).remove();
        });
        rootRef.current?.appendChild(circle);
      },
      [disabled]
    );

    useImperativeHandle(
      ref,
      () => ({
        start,
      }),
      [start]
    );

    return (
      <div
        {...props}
        onClick={autoStart ? start : props.onClick}
        ref={rootRef}
        className={classNames(
          classes.root,
          {
            [classes.auto__start]: autoStart,
          },
          props.className
        )}
      />
    );
  }
);

TouchRipple.displayName = "TouchRipple";

export default TouchRipple;

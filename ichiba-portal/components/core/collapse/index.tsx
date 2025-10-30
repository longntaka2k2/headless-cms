import classNames from "classnames";
import clsx from "clsx";
import { isNumber, omit } from "lodash";
import React, { useCallback, useEffect, useRef } from "react";
import { useEffectOnce, useUpdateEffect } from "usehooks-ts";

type CollapseProps = {
  in: boolean;
  collapsedSize?: number;
  expandedSize?: number;
  orientation?: "horizontal" | "vertical";
  disabled?: boolean;
} & JSX.IntrinsicElements["div"];

const Collapse: React.FC<CollapseProps> = ({
  collapsedSize = 0,
  expandedSize,
  orientation = "horizontal",
  className,
  children,
  disabled,
  ...props
}) => {
  const rootRef = useRef<HTMLDivElement | null>(null);

  const initialOpen = useRef(props.in);

  const getInitialStyles = (): React.CSSProperties => {
    const stypeProperty =
      orientation === "horizontal" ? "maxWidth" : "maxHeight";
    return {
      [stypeProperty]: initialOpen.current ? undefined : `${collapsedSize}px`,
    };
  };

  const handleToggle = useCallback(() => {
    if (!rootRef.current || disabled) return;
    const scrollProperty =
      orientation === "horizontal" ? "scrollWidth" : "scrollHeight";
    const stypeProperty =
      orientation === "horizontal" ? "maxWidth" : "maxHeight";
    const calculateExpandedSize = isNumber(expandedSize)
      ? expandedSize
      : rootRef.current[scrollProperty];
    const size = props.in ? calculateExpandedSize : collapsedSize;
    rootRef.current.style[stypeProperty] = `${size}px`;
  }, [collapsedSize, disabled, expandedSize, orientation, props.in]);

  useEffect(() => {
    const rootEl = rootRef.current;

    const handleTransitionend = () => {};

    rootEl?.addEventListener("transitionend", handleTransitionend);

    return () => {
      rootEl?.removeEventListener("transitionend", handleTransitionend);
    };
  }, []);

  useUpdateEffect(() => {
    handleToggle();
  }, [handleToggle]);

  return (
    <div
      ref={rootRef}
      className={clsx(
        "tw-transition-all tw-duration-200 tw-overflow-hidden",
        className,
      )}
      {...omit(props, "in")}
      style={{
        ...getInitialStyles(),
      }}
    >
      {children}
    </div>
  );
};

export default React.memo(Collapse);

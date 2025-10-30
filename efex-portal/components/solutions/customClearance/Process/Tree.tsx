"use client";
import { useEffect, useState } from "react";
import { Brand } from "./Brand";
import clsx from "clsx";

export const Tree = ({
  contents,
  className,
}: {
  contents: string[];
  className?: string;
}) => {
  const [active, setActive] = useState(0);
  useEffect(() => {
    let selectedProductIndex = 0;

    const id = setInterval(() => {
      selectedProductIndex++;
      if (selectedProductIndex >= (contents?.length ?? 0)) {
        selectedProductIndex = 0;
      }
      setActive(selectedProductIndex);
    }, 2000);

    return () => {
      clearInterval(id);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={clsx("flex flex-col", className)}>
      {contents.map((x, idx) => (
        <Brand index={idx + 1} content={x} key={idx} active={active == idx} />
      ))}
    </div>
  );
};

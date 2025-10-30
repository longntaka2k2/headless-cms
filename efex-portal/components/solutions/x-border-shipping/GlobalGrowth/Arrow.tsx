import clsx from "clsx";
import EzImage from "@/components/commons/EzImage";

export const Arrow = ({ reflect }: { reflect: boolean; }) => (
  <EzImage
    src={"/uploads/Vector_21_4ac4c82e28.svg"}
    className={clsx(
      "hidden lg:block my-auto flex-1",
      reflect && "-scale-y-100"
    )}
    width={65}
    height={12}
    alt="" />
);

import clsx from "clsx";
import { ReactNode } from "react";

export interface Props {
  children: ReactNode | ReactNode[];
  isOpen: boolean;
  header: string | ReactNode;
  setIsOpen: (val: boolean) => void;
}
const Drawer = ({ children, isOpen, setIsOpen, header }: Props) => {
  return (
    <main
      className={clsx(
        " fixed overflow-hidden z-10 bg-gray-900 bg-opacity-25 inset-0  ",
        isOpen
          ? " transition-opacity opacity-100 duration-500 translate-x-0"
          : " transition-all delay-500 opacity-0 -translate-x-full",
        "transform ease-in-out"
      )}
    >
      <section
        className={clsx(
          "absolute left-0",
          "max-w-lg  bg-white h-full shadow-xl  ",
          "delay-400 duration-500 ease-in-out transition-all transform ",
          isOpen ? " translate-x-0 " : " -translate-x-full "
        )}
      >
        <article
          className={clsx(
            "relative",
            "flex flex-col",
            "max-w-[90vw] pb-10 space-y-6  h-full px-4",
            "overflow-y-scroll"
          )}
        >
          <header className="py-4 font-bold text-lg">{header}</header>
          {children}
        </article>
      </section>
      <section
        className=" w-screen h-full cursor-pointer "
        onClick={() => {
          setIsOpen(false);
        }}
      ></section>
    </main>
  );
};

export default Drawer;

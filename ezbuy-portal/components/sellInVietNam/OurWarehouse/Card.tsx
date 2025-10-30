import EzImage from "@/components/commons/EzImage";
import clsx from "clsx";

export const Card = ({
  name, address, image, className,
}: {
  image: string;
  name: string;
  address: string;
  className?: string;
}) => {
  return (
    <div
      className={clsx(
        "rounded-lg bg-white",
        "shadow-3 m-1 cursor-pointer ",
        className
      )}
    >
      <div className="rounded-t-lg mb-1 border-b-2 border-brand-primary w-full">
        <EzImage
          alt={name}
          src={image ?? ""}
          width={376}
          height={166}
          className="object-cover object-center rounded-t-lg w-full" />
      </div>
      <div className="px-4 pb-4 pt-3">
        <p className="font-bold mb-1">{name}</p>
        <p className="uppercase">{address}</p>
      </div>
    </div>
  );
};

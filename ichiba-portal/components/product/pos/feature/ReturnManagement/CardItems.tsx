import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface PropsCardItems {
  content: string;
  image: string | StaticImport;
}

const CardItems = (props: PropsCardItems) => {
  return (
    <div className="w-full tw-p-3 lg:tw-py-5 lg:tw-px-6 tw-border tw-border-ic-black-2 tw-rounded-lg lg:tw-rounded-xl">
      <Image
        src={props.image}
        alt="#"
        width={48}
        height={48}
        className="tw-w-7 tw-h-7 lg:tw-w-12 lg:tw-h-12"
      />
      <p className="tw-mb-0 tw-text-base">{props.content}</p>
    </div>
  );
};

export default CardItems;

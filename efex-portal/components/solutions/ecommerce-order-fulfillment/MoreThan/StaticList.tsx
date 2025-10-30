import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

export const StaticList = ({
  contents,
}: {
  contents: {
    icon: string | StaticImport;
    title: string;
    description: string;
  }[];
}) => {
  return (
    <ul className="flex gap-6">
      {contents.map((item) => (
        <li
          key={item.title}
          className="flex-1 p-6 rounded-xl border border-[#F5F5F5] bg-white shadow-[0px_8px_16px_0px_rgba(0,0,0,0.05)]"
        >
          <div className="w-20 h-20 bg-[#F2F4F8] rounded-full flex justify-center items-center">
            <Image src={item.icon} alt={item.title} quality={100} />
          </div>
          <h3 className="mt-6 text-xl font-bold text-brand-brandb ">
            {item.title}
          </h3>
          <p className="mt-4 text-[#121619]">{item.description}</p>
        </li>
      ))}
    </ul>
  );
};

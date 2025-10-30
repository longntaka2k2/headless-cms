import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";

export const Card = ({
    title, des, className, icon,
}: {
    title: string;
    des: string;
    icon: IconProp;
    className?: string;
}) => {
    return (
        <div
            className={clsx(
                "flex gap-4 ",
                "hover:shadow-5 group border border-primary-2 bg-white bg-opacity-95",
                "rounded-lg p-4",
                className
            )}
        >
            <div>
                <FontAwesomeIcon
                    icon={icon}
                    className="group-hover:text-brand-primary" />
            </div>
            <article className="text-[#333]">
                <h3 className="text-sm lg:text-lg font-bold group-hover:text-brand-primary">
                    {title}
                </h3>
                <p className="text-sm lg:text-base">{des}</p>
            </article>
        </div>
    );
};

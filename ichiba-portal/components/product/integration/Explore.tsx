import { removeAccent } from "@/utils/utils";
import AnchorLinks, {
  Props as AnchorLinksProps,
} from "../digital-commerce/features/anchor-links";
import CardItem, { Props as CardItemProps } from "./CardItem";
import { useTranslation } from "next-i18next";
import { Element } from "react-scroll";
import Anchors from "./Anchors";

export interface Props {
  contents: {
    category: string;
    items: CardItemProps[];
  }[];
}

const Explore = ({ contents }: Props) => {
  const { t } = useTranslation("integration", { keyPrefix: "explore" });

  const anchorItems: AnchorLinksProps["items"] = contents.map((x) => ({
    label: x.category as string,
    href: removeAccent(x.category),
  }));

  return (
    <section className="tw-py-6">
      <div className="">
        <h2 className="tw-container tw-font-bold tw-pb-5 tw-text-2xl lg:tw-text-4xl tw-text-center">
          {t("heading")}
        </h2>
        <Anchors items={anchorItems} className="tw-container tw-px-4" />
        <div
          id="blocks-categories"
          className="tw-container tw-flex tw-flex-col tw-gap-6 lg:tw-gap-15 tw-py-6"
        >
          {contents.map((x, idx) => {
            const id = removeAccent(x.category);
            return (
              <Element name={id} id={id} key={idx}>
                <h3 className="mb-4 lg:tw-mb-10 tw-font-bold tw-text-lg">
                  {x.category}
                </h3>
                <div className="tw-grid tw-grid-cols-2 lg:tw-grid-cols-5 tw-gap-2 lg:tw-gap-6">
                  {x.items.map((c, cidx) => (
                    <CardItem {...c} key={cidx} />
                  ))}
                </div>
              </Element>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Explore;

import StoryCard from "./StoryCard";
import { RelativeImagePathStrapi } from "@/utils/ultils";

interface PropsBoxStory {
  list?: [];
}

export default function BoxStory(props: PropsBoxStory) {
  return (
    <div className="grid lg:grid-cols-3 gap-6">
      {props?.list?.map((item: any, index: number) => {
        return (
          <StoryCard
            key={index}
            image={RelativeImagePathStrapi(item?.image?.data?.attributes?.url)}
            width={item?.image?.data?.attributes?.width}
            height={item?.image?.data?.attributes?.height}
            logoBrand={RelativeImagePathStrapi(
              item?.logoBrand?.data?.attributes?.url
            )}
            title={item?.title}
            content={item?.content}
            slug={item?.slug}
            description={item?.description}
            locale={item?.locale}
          />
        );
      })}
    </div>
  );
}

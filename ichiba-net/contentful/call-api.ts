// /header.ts
import { createClient } from "contentful";
import type {
  TypeResource,
  TypeResourceSkeleton,
} from "@/types/contentful";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID as string,
  accessToken: process.env.CONTENTFUL_DELIVERY_TOKEN as string,
});

export const listResources = async (locale: string = "en-US") => {
  try {
    const response = await client.getEntries<TypeResourceSkeleton>({
      content_type: "resource",
      locale,
      order: ["fields.title"],
    });
    const resources = response.items.map((item) => {
      const icon = (item.fields.icon as any)?.fields?.file?.url
        ? "https:" + (item.fields.icon as any).fields.file.url
        : null;
      const language = (item.fields.language as any)?.fields?.code ?? null;
      return {
        id: item.sys.id,
        title: item.fields.title,
        description: item.fields.description,
        redirectUrl: item.fields.redirectUrl,
        iconUrl: icon,
        language: language,
      };
    });

    return resources;
  } catch (error) {
    console.error("Error fetching resources:", error);
    return [];
  }
};

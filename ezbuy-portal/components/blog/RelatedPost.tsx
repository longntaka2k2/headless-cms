"use client";

import {
  StrapiQuery,
  getPostsQuery,
  getStrapiMediaUrl,
} from "@/public/api/strapiService";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { CardBlog } from "./CardBlog";

interface Props {
  tags?: string[];
  lang: any;
}

const getPosts = async (lang: string, tags?: string[]) => {
  const query: StrapiQuery = {
    locale: lang,
    populate: "*",
    pagination: {
      start: 0,
      limit: 3,
    },
    filters: {
      tags: {
        $containsi: tags,
      },
    },
  };
  return await getPostsQuery(query);
};

const RelatedPost = ({ tags, lang }: Props) => {
  const params = useParams();
  const [posts, setPosts] = useState<any[]>();
  useEffect(() => {
    if (tags && tags.length > 0) {
      getPosts(params.lang as string, tags).then((x) => setPosts(x));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {posts && posts.length > 0 && (
        <section className="container pt-10">
          <div className="text-center mb-11">
            <h2 className="font-black text-2xl lg:text-4xl">
              {lang.blog.relatedBlogs}
            </h2>
          </div>
          <div className="flex flex-wrap md:flex-nowrap">
            {posts?.map((x, idx) => (
              <CardBlog
                key={idx}
                banner={getStrapiMediaUrl(x?.attributes?.banner)}
                url={`/${params.lang}/blog/${x?.attributes?.slug}`}
                content={x?.attributes?.body}
                createdAt={x?.attributes?.createdAt}
                tags={x?.attributes?.tags}
                title={x?.attributes?.title}
                author={x?.attributes?.author}
                className="max-w-[97vw]"
              />
            ))}
          </div>
        </section>
      )}
    </>
  );
};

export default RelatedPost;

"use client";
import { CardBlog } from "./CardBlog";
import { RelativeImagePath } from "@/utils/utils";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const ListBlog = ({ posts }: any) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [localPosts, setLocalPosts] = useState(posts || []);

  useEffect(() => {
    if (posts) {
      setLocalPosts(posts);
      setIsLoading(false);
    }
  }, [posts]);

  if (error) {
    return (
      <div className="tw-text-center tw-py-8">
        <p className="tw-text-red-500">Đã có lỗi xảy ra. Vui lòng thử lại sau.</p>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="tw-flex tw-justify-center tw-items-center tw-py-8">
        <FontAwesomeIcon
          icon={faSpinner}
          className="tw-animate-spin tw-duration-500 tw-fa-2xl tw-text-brand-primary"
        />
      </div>
    );
  }

  return (
    <div>
      <div className="tw-my-5">
        <div className="tw-grid lg:tw-grid-cols-3 md:tw-grid-cols-2 tw-gap-4 lg:tw-gap-6">
          {localPosts?.map((value: any, index: number) => (
            <CardBlog
              key={index}
              banner={RelativeImagePath(
                value?.attributes?.image?.data?.attributes?.url,
              )}
              url={`/blog/${value?.attributes?.slug}`}
              content={value?.attributes?.content}
              publishedAt={value?.attributes?.publishedAt}
              tags={value?.attributes?.tags}
              title={value?.attributes?.title}
              author={
                value?.attributes?.author_name?.data?.attributes?.author_name
              }
              className="tw-max-w-[92vw] hover:scale-105 tw-transition-all tw-duration-1000 tw-ease-in-out"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListBlog;

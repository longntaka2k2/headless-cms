import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ListBlog from "./ListBlog";
import { GetBlogs } from "@/services/strapi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "next-i18next";
import clsx from "clsx";
import { useRouter } from "next/router";

const ReadMore = ({ category }: any) => {
  const locale = usePathname().split("/")[1];
  const [posts, setListPost] = useState([] as any);
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const { t } = useTranslation("common");

  useEffect(() => {
    const getDataByCategory = async () => {
      try {
        setLoading(true);
        const data = await GetBlogs({
          locale: router.locale,
          filters: {
            category_blog: {
              value: category,
            },
          },
          sort: ["publishedAt:desc"],
          pagination: {
            start: 0,
            limit: 3,
          },
        });
        setListPost(data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching related blogs:", err);
        setError(true);
        setLoading(false);
      }
    };

    if (category) {
      getDataByCategory();
    } else {
      setLoading(false);
    }
  }, [category, router.locale]);

  if (error) {
    return null;
  }

  if (!category || (!loading && (!posts || posts.length === 0))) {
    return null;
  }

  return (
    <div className="tw-py-10 tw-bg-[#f9f9f9] tw-px-4">
      <div className="tw-container">
        <div className="tw-text-[28px] lg:tw-text-[2.2rem] tw-font-black tw-title tw-mb-5 tw-text-center">
          {t("blog.relatedBlogs")}
        </div>
        {loading ? (
          <div className="tw-flex tw-justify-center tw-items-center tw-py-8">
            <FontAwesomeIcon
              icon={faSpinner}
              className="tw-animate-spin tw-duration-500 tw-fa-2xl tw-text-brand-primary"
            />
          </div>
        ) : (
          <ListBlog posts={posts} />
        )}
      </div>
    </div>
  );
};
export default ReadMore;

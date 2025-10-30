import { useState, useEffect } from "react";
import ListBlog from "./ListBlog";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import clsx from "clsx";
import { useTranslation } from "next-i18next";

import { GetBlogs, GetCategories, StrapiQuery } from "@/services/strapi";
import { useRouter } from "next/router";
import Link from "next/link";

const ListBlogPanel = () => {
  const [posts, setListPost] = useState([] as any);
  const [pageNumber, setPageNumber] = useState(1);
  const [categories, setCategoies] = useState([] as any);
  const [category, setCategory] = useState("");
  const [viewMore, setView] = useState(true);
  const [loading, setLoading] = useState(false);
  const { t } = useTranslation("common");
  const router = useRouter();
  useEffect(() => {
    const getData = async () => {
      const data = await GetBlogs({
        populate: [""],
        locale: router?.locale,
        sort: ["publishedAt:desc"],
      });
      if (data.length < 9) {
        setView(false);
      } else {
        setView(true);
      }
    };
    const getDataByCategory = async () => {
      const data = await GetBlogs({
        populate: "deep",
        locale: router?.locale,
        filters: {
          category_blog: category
            ? {
                value: category, // value
              }
            : undefined,
        },
        sort: ["publishedAt:desc"],
        pagination: {
          page: 0,
          pageSize: 9,
        },
      });
      setListPost(data);
    };
    const getCategories = async () => {
      const query = {
        populate: "deep",
        locale: router?.locale,
      };
      const data = await GetCategories(query);
      setCategoies(data);
    };
    getDataByCategory();
    getData();
    getCategories();
  }, [category, router?.locale]);

  const changeCategory = async (value: string) => {
    setView(true);
    setListPost([]);
    setLoading(true);
    setCategory(value);
    const data = await GetBlogs({
      populate: "deep",
      locale: router?.locale,
      filters: {
        category_blog: value
          ? {
              value: value,
            }
          : undefined,
      },
      sort: ["publishedAt:desc"],
      pagination: {
        page: 0,
        pageSize: 9,
      },
    });
    if (data.length < 9) {
      setView(false);
    } else {
      setView(true);
    }
    setTimeout(() => {
      setListPost(data);
      setLoading(false);
    }, 700);
  };

  const changePageNumber = async (value: number) => {
    setLoading(true);

    let query: StrapiQuery = {
      populate: "deep",
      locale: router?.locale,
      sort: ["publishedAt:desc"],
      pagination: {
        page: value,
        pageSize: 9,
      },
    };

    if (category) {
      query.filters = {
        category_blog: {
          value: category,
        },
      };
    }

    const data = await GetBlogs(query);

    setPageNumber(value);
    setTimeout(() => {
      setListPost((prevPosts: any) => [...prevPosts, ...data]);
      if (data.length < 9) {
        setView(false);
      } else {
        setView(true);
      }
      setLoading(false);
    }, 700);
  };

  return (
    <div className="tw-bg-[#fafafa] tw-py-10 lg:py-[60px] tw-px-4 lg:tw-px-0">
      <div className="tw-container">
        <div className="tw-flex tw-overflow-auto tw-font-bold tw-style-2 tw-pb-2">
          <div
            onClick={() => changeCategory("")}
            className={`${
              category === ""
                ? "tw-text-white tw-bg-[linear-gradient(89deg,_#ececec_-100%,_#f57c00_84.37%)]"
                : "tw-bg-[linear-gradient(90deg,_#f57c00_0%,_#ececec_180%)] tw-text-transparent tw-bg-clip-text"
            } tw-block tw-px-3 tw-py-1 tw-mx-2 tw-whitespace-nowrap tw-rounded-full tw-cursor-pointer `}
          >
            {t("blog.all")}
          </div>
          {categories &&
            categories?.map((value: any, index: number) => (
              <Link
                href={`/blog/category/${value?.attributes?.value}`}
                rel="canonical"
                key={index}
                className={`${
                  category === value?.attributes?.value
                    ? "tw-text-white tw-bg-brand-primary"
                    : "tw-bg-brand-primary tw-text-transparent tw-bg-clip-text"
                } tw-block tw-px-3 tw-py-1 tw-mx-2 tw-whitespace-nowrap tw-rounded-full tw-cursor-pointer tw-no-underline`}
              >
                {value?.attributes?.label}
              </Link>
            ))}
        </div>
        <ListBlog posts={posts} />
        {loading && (
          <div className="tw-mx-auto tw-w-fit lg:tw-w-[150px] tw-h-[100px] lg:tw-h-[250px]">
            <FontAwesomeIcon
              icon={faSpinner}
              className="tw-animate-spin tw-duration-500 tw-fa-2xl tw-text-3xl lg:tw-text-6xl tw-text-brand-primary"
            />
          </div>
        )}
        <div className="tw-flex tw-justify-center">
          <div
            className={clsx(
              "tw-relative tw-z-[2]",
              viewMore ? "" : "tw-hidden",
              " tw-border-2 tw-border-solid tw-border-transparent tw-bg-white",
              "tw-cursor-pointer tw-font-bold tw-bg-clip-padding",
              "after:tw-absolute after:tw-rounded-[20px] after:tw-top-[-3px] after:tw-left-[-2px] after:tw-right-[-2px] after:tw-bottom-[-2px]",
              "after:tw-bg-brand-primary after:tw-z-[1]",
            )}
            onClick={() => changePageNumber(pageNumber + 1)}
          >
            <div className="tw-relative tw-z-[10]  tw-px-5 tw-py-2 tw-bg-white tw-text-brand-primary hover:tw-bg-transparent hover:tw-text-white tw-rounded-[19px] tw-transition tw-duration-300 tw-ease-linear">
              {t("viewMore")}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ListBlogPanel;

"use client";
import ListBlog from "@/components/blog/ListBlog";
import loadingFile from "@/public/json/loading.json";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Lottie from "react-lottie-player";
import EmptyData from "@/public/images/empty-data.svg";
import { GetBlogs, GetCategories, StrapiQuery } from "@/services/strapi";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";

const CategoryComponent = () => {
  const { t } = useTranslation("common");
  const router = useRouter();
  const [posts, setListPost] = useState([] as any);
  const [categories, setCategoies] = useState([] as any);
  const [viewMore, setView] = useState(true);
  const [loading, setLoading] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);
  const [category, setCategory] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [blogDataAll, blogData, categories] = await Promise.all([
          GetBlogs({
            populate: [""],
            locale: router?.locale,
            filters: {
              category_blog: router.query.category
                ? {
                    value: router.query.category,
                  }
                : undefined,
            },
            fields: ["slug"],
            sort: ["publishedAt:desc"],
          }),
          GetBlogs({
            populate: "deep",
            locale: router?.locale,
            filters: {
              category_blog: router.query.category
                ? {
                    value: router.query.category,
                  }
                : undefined,
            },
            sort: ["publishedAt:desc"],
            pagination: {
              page: 0,
              pageSize: 9,
            },
          }),
          GetCategories({
            populate: "deep",
            locale: router?.locale,
          }),
        ]);
        setListPost(blogData);
        setView(blogDataAll.length >= 9);
        setCategoies(categories);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [router.query.category, router?.locale]); // Chỉ phụ thuộc vào category và locale

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

    if (router.query.category) {
      // Sử dụng category từ query
      query.filters = {
        category_blog: {
          value: router.query.category,
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
    <div className="lg:tw-px-0">
      <div className="tw-container tw-px-4"></div>
      <div className="tw-bg-[#fafafa] tw-py-10 lg:tw-py-[60px] tw-px-4 lg:tw-px-0">
        <div className="tw-container">
          <div className="tw-flex tw-overflow-auto tw-font-bold tw-overflow-x-scroll tw-pb-2">
            <Link
              rel="canonical"
              href={`/${router.locale}/blog`}
              className={`${
                router.query.category === ""
                  ? "tw-text-white tw-bg-[linear-gradient(89deg,_#ececec_-100%,_#f57c00_84.37%)]"
                  : "tw-bg-[linear-gradient(90deg,_#f57c00_0%,_#ececec_180%)] tw-text-transparent tw-bg-clip-text"
              } tw-block tw-px-3 tw-py-1 tw-mx-2 tw-whitespace-nowrap tw-rounded-full tw-cursor-pointer tw-no-underline`}
              prefetch={false}
            >
              {t("blog.all")}
            </Link>

            {(categories || []).map((value: any, index: number) => (
              <Link
                rel="canonical"
                href={`/blog/category/${value?.attributes?.value}`}
                onClick={() => changeCategory(value?.attributes?.value)}
                key={index}
                className={`tw-text-sm lg:tw-text-base tw-block tw-px-3 tw-py-1 tw-mx-2 tw-whitespace-nowrap tw-rounded-full tw-cursor-pointer tw-no-underline ${
                  value?.attributes?.value === router.query.category
                    ? "tw-text-white tw-bg-[linear-gradient(89deg,_#ececec_-100%,_#f57c00_84.37%)]"
                    : "tw-bg-[linear-gradient(90deg,_#f57c00_0%,_#ececec_180%)] tw-text-transparent tw-bg-clip-text"
                } `}
                prefetch={false}
              >
                {value?.attributes?.label}
              </Link>
            ))}
          </div>
          <ListBlog posts={posts} />
          {loading && (
            <div className="tw-mx-auto tw-w-[100px] lg:tw-w-[150px] tw-h-[100px] lg:tw-h-[150px]">
              <Lottie loop animationData={loadingFile} play />
            </div>
          )}
          <div className={clsx(posts.length > 0 ? "tw-hidden" : "")}>
            <Image
              src={EmptyData}
              alt="empty-data"
              width={300}
              height={300}
              className="tw-mx-auto"
            />
          </div>
          <div className="tw-flex tw-justify-center">
            {viewMore && (
              <div
                className="tw-cursor-pointer grounded tw-font-bold"
                onClick={() => changePageNumber(pageNumber + 1)}
              >
                <div className="tw-px-5 tw-py-2 tw-text-brand-primary">
                  {t("viewMore")}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default CategoryComponent;

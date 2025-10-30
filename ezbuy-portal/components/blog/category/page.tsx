"use client";
import { getDictionary } from "@/app/getDictionary";
import ListBlog from "@/components/blog/ListBlog";
import {
  StrapiQuery,
  getBlogCategories,
  getPosts,
  getPostsQuery,
} from "@/public/api/strapiService";
import loadingFile from "@/public/json/loading.json";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Lottie from "react-lottie-player";
import EmptyData from "@/public/images/empty-data.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const CategoryComponent = ({ lang, params }: { lang: any; params: any }) => {
  const [postsBanner, setPostBanner] = useState([] as any);
  const [posts, setListPost] = useState([] as any);
  const [dataByCategory, setDatabyCategory] = useState([] as any);
  const [pageNumber, setPageNumber] = useState(1);
  const [categories, setCategoies] = useState([] as any);
  let category = params.category;
  const [viewMore, setView] = useState(true);
  const [loading, setLoading] = useState(false);

  const getPosts = async (
    lang: string,
    pageNumber: number,
    pageSize: number,
    category?: string
  ) => {
    const query: StrapiQuery = {
      locale: lang,
      populate: "*",
      sort: ["publishedAt:DESC"],
      pagination: {
        page: pageNumber ?? 1,
        pageSize: pageSize ?? 9,
      },
      filters: category
        ? {
            blog_category: {
              slug: category,
            },
          }
        : undefined,
    };
    return await getPostsQuery(query);
    // const res = await fetchStrapiData(`${strapiEndpoint.getBlog}?${query}`);
    // return res?.data;
  };

  useEffect(() => {
    const getDataByCategory = async () => {
      const data = await getPosts(
        params.lang as string,
        1,
        9,
        category as string
      );
      if (data.length < 9) {
        setView(false);
      } else {
        setView(true);
      }
      setLoading(false);
      setListPost(data);
    };
    const getCategories = async () => {
      const data = await getBlogCategories(params.lang as string);
      setCategoies(data);
    };
    getDataByCategory();
    getCategories();
  }, []);

  const changePageNumber = async (value: number) => {
    setLoading(true);
    setPageNumber(value);
    const data = await getPosts(params.lang as string, value, 9, category);
    setTimeout(() => {
      setListPost([...posts, ...data]);
      setView(!(data.length < 9));
      setLoading(false);
    }, 700);
  };

  return (
    <div className="bg-[#fafafa] py-10 lg:py-[60px] px-4 lg:px-0">
      <div className="pt-20 container">
        <div className="flex overflow-auto font-bold style-2 pb-2">
          <Link
            href={`/${params.lang}/blog/`}
            className={`${
              params.category === ""
                ? "text-white bg-[linear-gradient(89deg,_#00194F_0%,_#AF0000_84.37%)]"
                : "bg-[linear-gradient(90deg,_#00194F_0%,_#CE0202_100%)] text-transparent bg-clip-text"
            } block px-3 py-1 mx-2 whitespace-nowrap rounded-full cursor-pointer `}
          >
            {lang?.blog?.all}
          </Link>
          {categories &&
            categories?.map((value: any, index: number) => (
              <Link
                href={`/${params.lang}/blog/category/${value?.attributes?.slug}`}
                key={index}
                className={`${
                  params.category === value?.attributes?.slug
                    ? "text-white bg-[linear-gradient(89deg,_#00194F_0%,_#AF0000_84.37%)]"
                    : "bg-[linear-gradient(90deg,_#00194F_0%,_#CE0202_100%)] text-transparent bg-clip-text"
                } block px-3 py-1 mx-2 whitespace-nowrap rounded-full cursor-pointer `}
                // onClick={() => setType(value)}
              >
                {value?.attributes?.name}
              </Link>
            ))}
        </div>
        <ListBlog posts={posts} />
        {loading && (
          <div className="mx-auto  w-[100px] lg:w-[150px] h-[100px] lg:h-[150px]">
            <Lottie loop animationData={loadingFile} play />
          </div>
        )}
        {!loading && (
          <div className={clsx(posts.length > 0 ? "hidden" : "")}>
            <Image
              src={EmptyData}
              alt="empty-data"
              width={300}
              height={300}
              className="mx-auto"
            />
          </div>
        )}
        <div className="flex justify-center">
          <button
            className={clsx(
              "relative z-[2]",
              viewMore ? "" : "hidden",
              " border-2 border-solid border-transparent bg-white",
              "font-bold bg-clip-padding",
              "after:absolute after:rounded-[20px] after:top-[-2px] after:left-[-2px] after:right-[-2px] after:bottom-[-2px]",
              "after:bg-[linear-gradient(89deg,_#00194F_0%,_#AF0000_84.37%)] after:z-[1]"
            )}
            onClick={() => changePageNumber(pageNumber + 1)}
          >
            <div
              className={clsx(
                "relative z-[10]",
                "hover:bg-transparent hover:text-white",
                "px-5 py-2 bg-white text-brand-secondary rounded-[19px]",
                "transition duration-300 ease-linear"
              )}
            >
              {lang?.common?.viewMore}
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};
export default CategoryComponent;

"use client";
import {
  StrapiQuery,
  getBlogCategories,
  getPostsQuery,
} from "@/public/api/strapiService";
import { useState, useEffect } from "react";
import ListBlog from "./ListBlog";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { useParams, useSearchParams } from "next/navigation";
import clsx from "clsx";
import Link from "next/link";

const ListBlogPanel = ({ lang }: any) => {
  const params = useParams();
  const [postsBanner, setPostBanner] = useState([] as any);
  const [posts, setListPost] = useState([] as any);
  const [dataByCategory, setDatabyCategory] = useState([] as any);
  const [pageNumber, setPageNumber] = useState(1);
  const [categories, setCategoies] = useState([] as any);
  const [category, setCategory] = useState("");
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
              name: category,
            },
          }
        : undefined,
    };
    return await getPostsQuery(query);
    // const res = await fetchStrapiData(`${strapiEndpoint.getBlog}?${query}`);
    // return res?.data;
  };

  useEffect(() => {
    const getData = async () => {
      const data = await getPosts(params.lang as string, 0, 9);
      setPostBanner(data);
      if (data.length < 9) {
        setView(false);
      } else {
        setView(true);
      }
    };
    const getDataByCategory = async () => {
      const data = await getPosts(
        params.lang as string,
        1,
        9,
        category as string
      );
      setListPost(data);
    };
    const getCategories = async () => {
      const data = await getBlogCategories(params.lang as string);
      setCategoies(data);
    };
    getDataByCategory();
    getData();
    getCategories();
  }, []);
  const changeCategory = async (value: string) => {
    setView(true);
    setListPost([]);
    setLoading(true);
    setCategory(value);
    const data = await getPosts(params.lang as string, 1, 9, value);

    setView(!(data.length < 9));

    setTimeout(() => {
      setListPost(data);
      setLoading(false);
    }, 700);
  };
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
      <div className=" container  ">
        <div className="flex overflow-auto font-bold style-2 pb-2">
          <Link
            href={`/${params.lang}/blog/`}
            className={`${
              category === ""
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
                  category === value?.attributes?.name
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
          <div className="mx-auto w-fit lg:w-[150px] h-[100px] lg:h-[250px]">
            <FontAwesomeIcon
              icon={faSpinner}
              className="animate-spin duration-500 fa-2xl text-3xl lg:text-6xl text-brand-primary"
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
export default ListBlogPanel;

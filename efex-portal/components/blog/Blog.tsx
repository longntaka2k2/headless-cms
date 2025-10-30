"use client";
import { getDictionary } from "@/app/getDictionary";
import ListBlog from "@/components/blog/ListBlog";
import { getBlogCategories, getPosts } from "@/public/api/strapiService";
import loadingFile from "@/public/json/loading.json";
import { LoadImageRictext, LoadPRictext } from "@/utils/ultils";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Lottie from "react-lottie-player";
import FromVietNam from "@/components/commons/FromVietNam";

interface Props {
  params: { lang: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}

const BlogComponent = ({ params, searchParams }: Props) => {
  const [language, setLanguage] = useState([] as any);
  const [postsBanner, setPostBanner] = useState([] as any);
  const [posts, setListPost] = useState([] as any);
  const [dataByCategory, setDatabyCategory] = useState([] as any);
  const [pageNumber, setPageNumber] = useState(1);
  const [categories, setCategoies] = useState([] as any);
  const [category, setCategory] = useState("");
  const [viewMore, setView] = useState(true);
  const [loading, setLoading] = useState(false);
  const locale = usePathname().split("/")[1];

  const moment = require("moment");
  const router = useRouter();
  useEffect(() => {
    const getLang = async () => {
      setLanguage(await getDictionary(locale ? locale : "en"));
    };

    const getData = async () => {
      const data = await getPosts(locale as string, 1, 5);
      setPostBanner(data);
    };
    const getDataByCategory = async () => {
      const data = await getPosts(locale as string, 1, 9, category);
      setListPost(data);
    };
    const getCategories = async () => {
      const data = await getBlogCategories(locale);
      setCategoies(data);
    };
    getDataByCategory();
    getData();
    getCategories();
    getLang();
  }, []);

  // const changeCategory = async (value: string) => {
  //   setView(true);
  //   setListPost([]);
  //   setLoading(true);
  //   setCategory(value);
  //   const data = await getPosts(locale as string, 1, 9, value);
  //   if (data.length < 9) {
  //     setView(false);
  //   } else {
  //     setView(true);
  //   }
  //   setTimeout(() => {
  //     setListPost(data);
  //     setLoading(false);
  //   }, 700);
  // };

  const changePageNumber = async (value: number) => {
    setPageNumber(value);
    setLoading(true);
    const data = await getPosts(locale as string, value, 9, category);
    setTimeout(() => {
      setListPost([...posts, ...data]);
      if (data.length < 9) {
        setView(false);
      } else {
        setView(true);
      }
      setLoading(false);
    }, 700);
  };
  const pushUrl = (value: string) => {
    router.push(value);
  };

  return (
    <div className=" lg:px-0 blog">
      {postsBanner && postsBanner?.length > 0 && (
        <>
          <div className="container px-4">
            <h1 className="text-2xl py-6 lg:text-4xl font-black title">
              Blog EFEX
            </h1>
            <div className="lg:grid lg:grid-cols-8 gap-6 py-10 lg:pb-[60px]">
              <div className="lg:col-span-5 shadow-[0px_0px_12px_0px_rgba(54,_50,_46,_0.08)] rounded-[16px] overflow-hidden">
                <div>
                  <Image
                    src={
                      postsBanner[0]?.thumbnail
                        ? `https://strapi-efex.ichiba.net${postsBanner[0]?.thumbnail?.data?.attributes?.url}`
                        : LoadImageRictext(postsBanner[0]?.body)
                    }
                    alt={postsBanner[0]?.title}
                    width={1000}
                    height={1000}
                    quality={100}
                    onClick={() =>
                      pushUrl(`/${locale}/blog/${postsBanner[0]?.slug}`)
                    }
                    className="w-full h-[200px] lg:h-[300px] object-cover cursor-pointer scale"
                  />
                </div>
                <div className="p-5 lg:p-7">
                  <div className="mb-3 text-[#389E0D] text-xs font-bold bg-[#D9F7BE] w-max px-2 py-1 rounded-[4px]">
                    {postsBanner[0]?.blog_categories?.data[0]?.attributes
                      ?.name || "EFEX"}
                  </div>
                  <Link
                    rel="canonical"
                    className=" font-bold lg:text-2xl line-clamp-2 cursor-pointer"
                    href={`/${locale}/blog/${postsBanner[0]?.slug}`}
                  >
                    {postsBanner[0]?.title}
                  </Link>
                  <div className="text-sm lg:text-base mt-2 line-clamp-3 text-[#333]">
                    {LoadPRictext(postsBanner[0]?.body)}
                  </div>
                  <div className="mt-2 flex justify-between text-sm text-[#5e6a78]">
                    <Link
                      href={
                        postsBanner[0]?.author?.data?.attributes?.slug
                          ? `/${locale}/blog/author/${postsBanner[0]?.author?.data?.attributes?.slug}`
                          : "#"
                      }
                      className="hover:font-bold"
                    >
                      {postsBanner[0]?.author?.data?.attributes?.author_name
                        ? postsBanner[0]?.author?.data?.attributes?.author_name
                        : "EFEX"}
                    </Link>
                    <div className=" ">
                      {postsBanner[0]?.createdAt
                        ? moment(postsBanner[0]?.createdAt).format("DD/MM/YYYY")
                        : ""}
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-3 mt-7 lg:mt-0 grid grid-col-1 gap-4">
                {postsBanner.map((value: any, index: number) =>
                  index > 0 && index < 5 ? (
                    <div
                      className="flex lg:justify-between flex-1 w-full overflow-hidden"
                      key={index}
                    >
                      <Image
                        src={
                          value?.thumbnail?.data?.attributes?.url
                            ? `https://strapi-efex.ichiba.net${value?.thumbnail?.data?.attributes?.url}`
                            : LoadImageRictext(value?.body)
                        }
                        alt={value?.title}
                        width={300}
                        height={300}
                        quality={100}
                        onClick={() =>
                          pushUrl(`/${locale}/blog/${value?.slug}`)
                        }
                        className="w-[120px] h-[120px] rounded-[16px] object-cover cursor-pointer scale shadow-[0px_0px_12px_0px_rgba(54,_50,_46,_0.08);]"
                      />
                      <div className="ml-4">
                        <div className="my-2 text-[#389E0D] max-w-[70%] w-max  text-xs font-bold bg-[#D9F7BE]  px-2 py-1 rounded-[4px]">
                          <div className="line-clamp-1">
                            {value?.blog_categories?.data[0]?.attributes
                              ?.name || "EFEX"}
                          </div>
                        </div>
                        <Link
                          rel="canonical"
                          href={`/${locale}/blog/${value?.slug}`}
                          className="font-bold line-clamp-2 cursor-pointer "
                        >
                          {value?.title}
                        </Link>
                        <div className="mt-2 flex justify-between text-xs text-[#5e6a78]">
                          <Link
                            href={
                              value?.author?.data?.attributes?.slug
                                ? `/${locale}/blog/author/${value?.author?.data?.attributes?.slug}`
                                : "#"
                            }
                            className="hover:font-bold"
                          >
                            {value?.author?.data?.attributes?.author_name
                              ? value?.author?.data?.attributes?.author_name
                              : "EFEX"}
                          </Link>
                          <div className=" ">
                            {value?.createdAt
                              ? moment(value?.createdAt).format("DD/MM/YYYY")
                              : ""}
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="hidden" key={index}></div>
                  )
                )}
              </div>
            </div>
          </div>
          <div className="bg-[#fafafa] py-10 lg:py-[60px] px-4 lg:px-0">
            <div className=" container  ">
              <div className="flex overflow-auto font-bold style-2 pb-2">
                <Link
                  href={`/${locale}/blog/`}
                  className={`${
                    category === ""
                      ? "text-white bg-[linear-gradient(89deg,_#00194F_0%,_#AF0000_84.37%)]"
                      : "title"
                  } block px-3 py-1 mx-2 whitespace-nowrap rounded-full cursor-pointer `}
                  // onClick={() => setType(value)}
                >
                  {language?.blogs?.all}
                </Link>
                {categories &&
                  categories?.map((value: any, index: number) => (
                    <Link
                      href={`/${locale}/blog/category/${value?.attributes?.slug}`}
                      // onClick={() => changeCategory(value?.attributes?.slug)}
                      key={index}
                      className={`${
                        category === value?.attributes?.slug
                          ? "text-white bg-[linear-gradient(89deg,_#00194F_0%,_#AF0000_84.37%)]"
                          : "title"
                      } block px-3 py-1 mx-2 whitespace-nowrap rounded-full cursor-pointer `}
                      // onClick={() => setType(value)}
                    >
                      {value?.attributes?.name}
                    </Link>
                  ))}
              </div>
              <ListBlog post={posts} />
              {loading && (
                <div className="mx-auto  w-[100px] lg:w-[150px] h-[100px] lg:h-[150px]">
                  <Lottie loop animationData={loadingFile} play />
                </div>
              )}
              <div className="flex justify-center">
                <div
                  className={`${
                    viewMore ? "" : "hidden"
                  } cursor-pointer  grounded font-bold`}
                  onClick={() => changePageNumber(pageNumber + 1)}
                >
                  <div className="gradient px-5 py-2 text-[#AF0000]">
                    {language?.blogs?.viewMore}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      <FromVietNam lang={language} />
    </div>
  );
};
export default BlogComponent;

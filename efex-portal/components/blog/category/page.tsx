"use client";
import { getDictionary } from "@/app/getDictionary";
import ListBlog from "@/components/blog/ListBlog";
import { getBlogCategories, getPosts } from "@/public/api/strapiService";
import loadingFile from "@/public/json/loading.json";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SetStateAction, useEffect, useState } from "react";
import Lottie from "react-lottie-player";
import EmptyData from "@/public/images/empty-data.svg";
import { GetServerSideProps } from "next";

const CategoryComponent = ({ lang, params }: { lang: any; params: any }) => {
  const locale = usePathname().split("/")[1];
  const [posts, setListPost] = useState([] as any);
  const [language, setLanguage] = useState([] as any);
  const [categories, setCategoies] = useState([] as any);
  const [viewMore, setView] = useState(true);
  const [loading, setLoading] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);
  const [slugs, setListSlug] = useState(1);

  useEffect(() => {
    setLoading(true);
    const getLang = async () => {
      setLanguage(await getDictionary(locale ? locale : "en"));
    };

    const getDataByCategory = async () => {
      const data = await getPosts(locale as string, 1, 9, params?.category);
      if (data.length < 9) {
        setView(false);
      } else {
        setView(true);
      }
      setListPost(data);
      setLoading(false);
    };

    const getCategories = async () => {
      const data = await getBlogCategories(locale);
      setCategoies(data);
    };

    getDataByCategory();
    getCategories();
    getLang();
  }, [locale, params?.category]);

  const matchingCategory = categories.find(
    (item: { attributes: { slug: string | undefined } }) =>
      item.attributes.slug === params.category
  );

  let category = "";

  // If a matching category is found, assign its name to the 'category' variable
  if (matchingCategory) {
    category = matchingCategory.attributes.name;
  }

  const changePageNumber = async (value: number) => {
    setPageNumber(value);
    setLoading(true);
    const data = await getPosts(locale as string, value, 9, params?.category);
    setListPost([...posts, ...data]);
    setTimeout(() => {
      setLoading(false);
    }, 700);
  };

  return (
    <>
      <div className="lg:px-0 blog">
        <div className="container px-4">
          <h1 className="text-2xl py-6 lg:text-4xl font-black">
            {lang?.header?.category}:
            <span className="title ml-2">{category || "EFEX"}</span>
          </h1>
        </div>
        <div className="bg-[#fafafa] py-10 lg:py-[60px] px-4 lg:px-0">
          <div className="container">
            <div className="flex overflow-x-scroll font-bold style-2 pb-2">
              <Link
                rel="canonical"
                href={`/${locale}/blog`}
                className={`block px-3 py-1 mx-2 whitespace-nowrap rounded-full cursor-pointer title`}
                // onClick={() => setType(value)}
              >
                ALL
              </Link>
              {categories?.map((value: any, index: number) => (
                <Link
                  rel="canonical"
                  href={`/${locale}/blog/category/${value?.attributes?.slug}`}
                  key={index}
                  className={`block px-3 py-1 mx-2 whitespace-nowrap rounded-full cursor-pointer ${
                    value?.attributes?.slug === params?.category
                      ? "bg-[linear-gradient(89deg,_#00194F_0%,_#AF0000_84.37%)] !text-white"
                      : "title"
                  } `}
                >
                  {value?.attributes?.name}
                </Link>
              ))}
            </div>
            <ListBlog post={posts} />
            {loading && (
              <div className="mx-auto w-[100px] lg:w-[150px] h-[100px] lg:h-[150px]">
                <Lottie loop animationData={loadingFile} play />
              </div>
            )}
            <div className={clsx(posts.length > 0 ? "hidden" : "")}>
              <Image
                src={EmptyData}
                alt="empty-data"
                width={300}
                height={300}
                className="mx-auto"
              />
            </div>
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
      </div>
    </>
  );
};
export default CategoryComponent;

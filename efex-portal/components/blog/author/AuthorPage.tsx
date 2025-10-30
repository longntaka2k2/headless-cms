"use client";
import { usePathname } from "next/navigation";
import ListBlog from "../ListBlog";
import { useEffect, useState } from "react";
import Lottie from "react-lottie-player";
import loadingFile from "@/public/json/loading.json";
import { getPosts } from "@/public/api/strapiService";
import { getDictionary } from "@/app/getDictionary";

const AuthorPageCPN = ({ author }: any) => {
  const locale = usePathname().split("/")[1];
  const [language, setLanguage] = useState([] as any);
  const [loading, setLoading] = useState(false);
  const [viewMore, setView] = useState(true);
  const [posts, setListPost] = useState([] as any);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    const getLang = async () => {
      setLanguage(await getDictionary(locale ? locale : "en"));
    };
    const getData = async () => {
      const data = await getPosts(locale as string, 1, 9);
      const postByAuthor =
        data?.filter((item: any) => {
          return item?.author?.data?.attributes?.slug === author;
        }) || [];
      setListPost(postByAuthor);
    };
    getData();
    getLang();
  }, [author, locale]);

  const changePageNumber = async (value: number) => {
    setPageNumber(value);
    setLoading(true);
    const data = await getPosts(locale as string, value, 9);
    const postByAuthor =
        data?.filter((item: any) => {
          return item?.author?.data?.attributes?.slug === author;
        }) || [];
    setTimeout(() => {
      setListPost([...posts, ...postByAuthor]);
      if (data.length < 9) {
        setView(false);
      } else {
        setView(true);
      }
      setLoading(false);
    }, 700);
  };
  return (
    <>
      <ListBlog post={posts} />
      {loading && (
        <div className="mx-auto w-[100px] lg:w-[150px] h-[100px] lg:h-[150px]">
          <Lottie loop animationData={loadingFile} play />
        </div>
      )}
      <div className="flex justify-center">
        <div
          className={`${
            viewMore ? "" : "hidden"
          } cursor-pointer grounded font-bold`}
          onClick={() => changePageNumber(pageNumber + 1)}
        >
          <div className="gradient px-5 py-2 text-[#AF0000]">
            {language?.blogs?.viewMore}
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthorPageCPN;

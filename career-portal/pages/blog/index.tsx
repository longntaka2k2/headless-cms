/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/link-passhref */
import dynamic from "next/dynamic";
import { GetServerSideProps, GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Link from "next/link";
import { getPosts, getPostsLocal } from "@/payload-client";
import qs from "qs";
import Image from "next/image";
import Head from "next/head";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { getTypeBlog } from "@/payload-client";
import { formatDateToDDMMYYYY } from "@/convert";
import SEO from "@/public/icons/auditSEO.jpg";

const MostPorpular = dynamic(() => import("@/components/blog/mostPopular"), {
  ssr: true,
});
const BrowseAll = dynamic(() => import("@/components/blog/browseAll"), {
  ssr: true,
});


export default function BlogIndex(data: any) {
  const { t } = useTranslation("common");
  const urlImg = SEO.src ;

  const router = useRouter();
  const [type, setTypeBlog] = useState("news");
  const [blogNew, setBlogNew] = useState(data?.data?.docs[0]);
  const [rightBar, setRightBar] = useState(data?.data?.docs);
  const [most, setMostPopula] = useState(data?.data)
  
  useEffect(() => {
    router?.query?.type
      ? setTypeBlog(router?.query?.type as string)
      : setTypeBlog("news");
      getDataTypeBlog()
  }, [router?.query?.type, router?.locale]);

  const typeblog = [
    { title: t("blog.type.news"), value: "news" },
    { title: t("blog.type.engineer"), value: "engineer" },
  ];
  function handleChangeType(value: string) {
    router.push(`/blog?type=${value}`);
  }
  async function getDataTypeBlog() {
    const dataType = await getTypeBlog(
      router?.query?.type as string,
      router?.locale as string
    );
    setRightBar(dataType?.listBlog?.posts as any);
    setBlogNew(
      dataType?.listBlog?.posts?.docs?.length > 0
        ? dataType?.listBlog?.posts?.docs[0]
        : ([] as any)
    );
    setMostPopula(dataType?.listBlog.posts as any)
    
  }

  return (
    <>
      <Head>
        <title>{t("metatitle.careers.blog.title")}</title>
        <meta property="og:image" content={urlImg} />
        <meta
          name="description"
          content={t("metatitle.careers.blog.meta") || ""}
        />
      </Head>
      <div>
        <div className={`type-blog text-uppercase fs-14`}>
          <div className="container">
            {typeblog.map((value, index) => (
              <>
                <div
                  key={index}
                  className={`d-inline-block type-title me-lg-5 me-2 cursor ${
                    type === value.value ? "type-active" : ""
                  }  `}
                  onClick={() => handleChangeType(value.value as string)}
                >
                  {value.title}
                </div>
              </>
            ))}
            `
          </div>
        </div>
        <div id="blog">
          <div className="container user-select-none">
            <div className="row">
              {blogNew && blogNew?.layout && blogNew?.layout[0]?.blog ? (
                <>
                  <div className="col-lg-8 banner">
                    <div className="blog-img">
                      <Image
                        src={blogNew?.layout[0]?.blog[0]?.media?.url ?? ""}
                        alt=""
                        width={1000}
                        height={1000}
                      />
                      <div className="blog-news">
                        <div
                          className="type text-uppercase fs-12 py-2 category-content cursor"
                          onClick={() =>
                            router.push(
                              `/blog?type=${
                                blogNew?.layout[0]?.blog[0]?.type ?? "news"
                              }`
                            )
                          }
                        >
                          {blogNew?.layout[0]?.blog[0]?.type ?? ""}
                        </div>
                        <div
                          onClick={() => router.push("/blog/" + blogNew?.slugs)}
                          className="text-decoration-none title-banner fs-18 fw-6 pb-3 user-select-none cursor "
                        >
                          <span>{blogNew?.title}</span>
                        </div>
                        <div>
                          <div className="d-inline-block date pe-2">
                            {formatDateToDDMMYYYY(blogNew?.createdAt)}
                          </div>
                          <div className="d-inline-block ps-2">
                            {blogNew?.author?.name}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <></>
              )}

              <div className="col-lg-4 pt-4 pt-lg-0">
                {(rightBar?.docs?.length as number) > 0 &&
                  rightBar?.docs?.map((value: any | null, index: number) => (
                    <>
                      {0 < index && index < 4 && (
                        <>
                          {value?.layout.length > 0 &&
                             (
                              <div className="nav-right d-flex" key={index}>
                                <div className="col-4 col-lg-5 col-xl-6">
                                  <Image
                                    src={
                                      value?.layout[0]?.blog[0]?.media?.url ?? "" }
                                    alt=""
                                    style={{ width: "100%", height: "13vh" }}
                                    width={1000}
                                    height={1000}
                                  />
                                </div>

                                <div className="col-8 col-lg-7 col-xl-6 ps-3 align-self-center">
                                  <div
                                    className="type text-uppercase fs-12 py-2 category-content cursor"
                                    onClick={() =>
                                      router.push(
                                        `/blog?type=${value?.layout[0]?.blog[0]?.type}`
                                      )
                                    }
                                  >
                                    {value?.layout[0]?.blog[0]?.type}
                                  </div>
                                  <div
                                    className="nav-content text-decoration-none"
                                    onClick={() =>
                                      router.push("/blog/" + value?.slugs)
                                    }
                                  >
                                    {value?.title}
                                  </div>
                                </div>
                              </div>
                            )}
                        </>
                      )}
                    </>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <MostPorpular blogData={most} />
      {/* <BrowseAll/> */}
    </>
  );
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const query = {
    "category.name": {
      equals: ctx.locale === "vi" ? "blogVi" : "blogEn",
    },
  };
  const stringifiedQuery = qs.stringify(
    {
      where: query, // ensure that `qs` adds the `where` property, too!
      locale: ctx.locale,
    },
    { addQueryPrefix: true }
  );
  let listPostCareer = await getPosts(stringifiedQuery);

  return {
    props: {
      data: listPostCareer?.posts,
      ...(await serverSideTranslations(ctx?.locale as string)),
    },
    //https://nextjs.org/docs/pages/building-your-application/data-fetching/incremental-static-regeneration
    revalidate: 5,
  };
};

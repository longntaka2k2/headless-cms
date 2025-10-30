import dynamic from "next/dynamic";
import {} from "react";
import { useRouter } from "next/router";
import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import endpoints from "@/const/endpoints";
import { formatDateToDDMMYYYY } from "@/convert";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import HeaderBlog from "@/components/blog/headerBlog";
const MostPorpular = dynamic(() => import("@/components/blog/mostPopular"), {
  ssr: true,
});

export default function BlogCMP(data: any) {
  const router = useRouter();
  const { t } = useTranslation("common");
  function handleChangeType(value: string) {
    router.push(`/blog/category/${value}`);
  }
  return (
    <>
      <div className={`type-blog text-uppercase fs-14`}>
        <div className="container">
          {data?.category && (
            <>
              <HeaderBlog data={data?.category} url={router?.query?.topic} />
            </>
          )}
        </div>
      </div>
      <h2 className="my-3 my-lg-4 container ">
        <span className="fs-36 fs-md-20 type-topic">
          {data?.topic[0]?.attributes?.label}
        </span>
      </h2>
      <div id="blog">
        <div className="container user-select-none">
          <div className="row">
            {data?.data?.length > 0 ? (
              <>
                <div className="col-lg-8 banner">
                  <div className="blog-img">
                    <Image
                      src={
                        data?.data[0]?.attributes?.image?.data?.attributes
                          ?.url ?? ""
                      }
                      alt="banner"
                      width={1000}
                      height={1000}
                    />
                    <div className="blog-news">
                      <div
                        className="type text-uppercase fs-12 py-2 category-content cursor"
                        onClick={() =>
                          handleChangeType(
                            data?.data[0]?.attributes?.category_blog?.data
                              ?.attributes?.value as string,
                          )
                        }
                      >
                        {data?.data[0]?.attributes?.category_blog?.data
                          ?.attributes?.value ?? ""}
                      </div>
                      <div
                        onClick={() =>
                          router.push(
                            "/blog/" + data?.data[0]?.attributes?.slug,
                          )
                        }
                        className="text-decoration-none title-banner fs-18 fw-6 pb-3 user-select-none cursor "
                      >
                        <span>{data?.data[0]?.attributes?.title}</span>
                      </div>
                      <div>
                        <div className="d-inline-block date pe-2">
                          {formatDateToDDMMYYYY(
                            data?.data[0]?.attributes?.createdAt,
                          )}
                        </div>
                        <div className="d-inline-block ps-2">
                          {data?.data[0]?.attributes?.author}
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
              {(data?.data?.length as number) > 0 &&
                data?.data?.map((value: any, index: number) => (
                  <>
                    {0 < index && index < 4 ? (
                      <div className="nav-right d-flex" key={index}>
                        <div className="col-4 col-lg-5 col-xl-6">
                          <Image
                            src={
                              value?.attributes?.image?.data?.attributes?.url ??
                              ""
                            }
                            alt="banner"
                            style={{ width: "100%", height: "13vh" }}
                            width={1000}
                            height={1000}
                          />
                        </div>

                        <div className="col-8 col-lg-7 col-xl-6 ps-3">
                          <div
                            className="type text-uppercase fs-12 py-2 category-content cursor"
                            onClick={() =>
                              handleChangeType(
                                value?.attributes?.category_blog?.data
                                  ?.attributes?.value,
                              )
                            }
                          >
                            {
                              value?.attributes?.category_blog?.data?.attributes
                                ?.label
                            }
                          </div>
                          <div
                            className="nav-content text-decoration-none align-self-center"
                            onClick={() =>
                              router.push("/blog/" + value?.attributes?.slug)
                            }
                          >
                            {value?.attributes?.title}
                          </div>
                        </div>
                      </div>
                    ) : (
                      <></>
                    )}
                  </>
                ))}
            </div>
          </div>
        </div>
      </div>
      <MostPorpular blogData={data?.data} suBlog={data?.data} />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const locale = () => {
    switch (ctx?.locale) {
      case "en":
        return endpoints.blog;
      case "vi":
        return endpoints.blog;
    }
  };

  const qs = require("qs");
  const query = qs.stringify(
    {
      filters: {
        topic_blogs: {
          value: {
            $eq: ctx?.query?.topic,
          },
        },
      },
    },
    {
      encodeValuesOnly: true, // prettify URL
    },
  );
  const queryLocale = qs.stringify(
    {
      filters: {
        locale: {
          $eq: ctx?.locale,
        },
      },
      sort: ["order:asc"],
    },
    {
      encodeValuesOnly: true, // prettify URL
    },
  );
  const queryTopic = qs.stringify(
    {
      filters: {
        value: {
          $eq: ctx?.query?.topic,
        },
      },
    },
    {
      encodeValuesOnly: true, // prettify URL
    },
  );

  let dataCategory = await fetch(
    `${endpoints.categoryBlog}?populate=deep&${queryLocale}`,
  ).then((x) => x.json());

  let dataToppic = await fetch(
    `${endpoints.topicBlog}?${queryTopic}&populate=deep&${queryLocale}`,
  ).then((x) => x.json());

  let { data } = await fetch(
    `${locale()}?${query}&populate=deep&locale=${ctx?.locale}&${queryLocale}`,
  ).then((x) => x.json());
  return {
    props: {
      category: dataCategory?.data,
      data: data,
      topic: dataToppic?.data,
      ...(await serverSideTranslations(ctx?.locale as string)),
    },
  };
};

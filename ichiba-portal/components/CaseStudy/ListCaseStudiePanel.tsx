import { useState, useEffect } from "react";
import ListBlog from "../blog/ListBlog";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import clsx from "clsx";
import { useTranslation } from "next-i18next";

import {
  GetBlogs,
  GetCaseStudie,
  GetCategories,
  GetTopic,
  GetTopicCaseStudie,
} from "@/services/strapi";
import { useRouter } from "next/router";
import ListCaseStudie from "./ListCaseStudie";

const ListCaseStudiePanel = () => {
  const [posts, setListPost] = useState([] as any);
  const [pageNumber, setPageNumber] = useState(1);
  const [listTopic, setListTopic] = useState([] as any);
  const [topic, setTopic] = useState("");
  const [viewMore, setView] = useState(true);
  const [loading, setLoading] = useState(false);
  //   const [posts, setListPost] = useState([] as any);
  const { t } = useTranslation("common");
  let host = typeof window !== "undefined" ? window.location.origin : "";
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
    const getDataByTopic = async () => {
      const data = await GetCaseStudie({
        populate: "deep",
        locale: router?.locale,
        filters: {
          topic_case_studies: topic
            ? {
                value: topic, // value
              }
            : undefined,
        },
        sort: ["publishedAt:desc"],
        pagination: {
          page: 0,
          pageSize: 9,
        },
      });
      // const data = await getPosts(params.lang as string, 1, 9, category);
      setListPost(data);
    };
    const getCategories = async () => {
      const query = {
        populate: "deep",
        locale: router?.locale,
      };
      const data = await GetTopicCaseStudie(query);
      setListTopic(data);
    };
    getDataByTopic();
    getData();
    getCategories();
  }, []);

  const changeTopic = async (value: string) => {
    setView(true);
    setListPost([]);
    setLoading(true);
    setTopic(value);
    const data = await GetCaseStudie({
      locale: router?.locale,
      filters: {
        topic_case_studies: value
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
    const data = await GetCaseStudie({
      locale: router?.locale,
      filters: {
        topic_case_studies: topic
          ? {
              value: topic, // value
            }
          : undefined,
      },
      sort: ["publishedAt:desc"],
      pagination: {
        page: value,
        pageSize: 9,
      },
    });
    setPageNumber(value);
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
  function handleChangeType(value: string) {
    router.push(value);
  }
  return (
    <div className="tw-bg-[#fafafa] tw-py-10 lg:py-[60px] tw-px-4 lg:tw-px-0">
      <div className=" tw-container  ">
        <div className="tw-flex tw-overflow-auto tw-font-bold tw-style-2 tw-pb-2">
          <div
            onClick={() => changeTopic("")}
            className={`${
              topic === ""
                ? "tw-text-white tw-bg-[linear-gradient(89deg,_#ececec_-100%,_#f57c00_84.37%)]"
                : "tw-bg-[linear-gradient(90deg,_#f57c00_0%,_#ececec_180%)] tw-text-transparent tw-bg-clip-text"
            } tw-block tw-px-3 tw-py-1 tw-mx-2 tw-whitespace-nowrap tw-rounded-full tw-cursor-pointer `}
            // onClick={() => setType(value)}
          >
            {t("blog.all")}
          </div>
          {listTopic &&
            listTopic?.map((value: any, index: number) => (
              <div
                onClick={() => changeTopic(value?.attributes?.value)}
                key={index}
                className={`${
                  topic === value?.attributes?.value
                    ? "tw-text-white tw-bg-brand-primary"
                    : "tw-bg-brand-primary tw-text-transparent tw-bg-clip-text"
                } tw-block tw-px-3 tw-py-1 tw-mx-2 tw-whitespace-nowrap tw-rounded-full tw-cursor-pointer `}
                // onClick={() => setType(value)}
              >
                {value?.attributes?.title}
              </div>
            ))}
        </div>
        <ListCaseStudie posts={posts} />
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
export default ListCaseStudiePanel;

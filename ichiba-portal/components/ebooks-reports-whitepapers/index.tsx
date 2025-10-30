import Image from "next/image";
import { useTranslation } from "next-i18next";
import {
  faSearch,
  faSpinner,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import {
  GetBlogs,
  GetCategoriesEbooks,
  GetEbooks,
  StrapiQuery,
} from "@/services/strapi";
import Link from "next/link";
import clsx from "clsx";
import ListEbook from "./ListEbook";
import qs from "qs";
import endpoints from "@/const/endpoints";
import { LoadPRictext } from "@/utils/utils";
import EmptyData from "@/public/images/empty-data.svg";

export default function ResourcesComponent() {
  const { t } = useTranslation("resources");
  const [ebooks, setListEbooks] = useState([] as any);
  const [pageNumber, setPageNumber] = useState(1);
  const [categories, setCategoies] = useState([] as any);
  const [category, setCategory] = useState("");
  const [viewMore, setView] = useState(true);
  const [loading, setLoading] = useState(false);
  const [blogs, setBlogs] = useState([] as any);
  const [keySearch, setKeySearch] = useState("");
  const router = useRouter();

  useEffect(() => {
    const getData = async () => {
      const data = await GetEbooks({
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
      const data = await GetEbooks({
        populate: "deep",
        locale: router?.locale,
        filters: {
          categories_ebook: category
            ? {
                value: category,
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
      const normalizedSearch = normalizeString(keySearch);
      const filteredEbooks = data.filter((ebook: any) => {
        const title = ebook?.attributes?.title || "";
        return normalizeString(title).includes(normalizedSearch);
      });

      setListEbooks(filteredEbooks);
    };
    const getCategories = async () => {
      const query = {
        populate: "deep",
        locale: router?.locale,
      };
      const data = await GetCategoriesEbooks(query);
      setCategoies(data);
    };
    getDataByCategory();
    getData();
    getCategories();
  }, [category, keySearch, router?.locale, viewMore]);

  const changeCategory = async (value: string) => {
    setKeySearch("");
    setView(true);
    setLoading(true);
    setCategory(value);

    setTimeout(() => {
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
        categories_ebook: {
          value: category,
        },
      };
    }

    const data = await GetBlogs(query);

    setPageNumber(value);
    setTimeout(() => {
      setListEbooks((prevPosts: any) => [...prevPosts, ...data]);
      if (data.length < 9) {
        setView(false);
      } else {
        setView(true);
      }
      setLoading(false);
    }, 700);
  };

  const normalizeString = (str: string) => {
    return str
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
  };

  const handleSearch = () => {
    setView(true);
    setPageNumber(1);
  };

  const lengthCate = categories.length + 1;

  const getBlogs = async (locale?: string) => {
    const query = qs.stringify({
      populate: ["category-blogs", "image", "title"],
      locale: locale,
      pagination: {
        page: 1,
        pageSize: 3,
      },
      sort: ["publishedAt:desc"],
    });
    const { data } = await fetch(`${endpoints.blog}?${query}`).then((x) =>
      x.json(),
    );
    setBlogs(data);
  };
  useEffect(() => {
    getBlogs(router?.locale);
  }, [router?.locale]);

  const options: Intl.DateTimeFormatOptions = {
    month: "long",
    day: "numeric",
    year: "numeric",
  };

  return (
    <>
      <div className="tw-bg-[url('https://cms-strapi.ichiba.net/uploads/Cover_5217d8c3c1.svg')] tw-bg-cover tw-bg-no-repeat">
        <div className="tw-container tw-px-4 xl:tw-px-0 tw-pt-6 tw-pb-40 lg:tw-pt-32 lg:tw-pb-52">
          <div className="tw-flex tw-flex-col lg:tw-flex-row tw-gap-[40px]">
            <div className="lg:tw-w-[55%]">
              <h1 className="tw-text-blue-5 tw-text-2xl lg:tw-text-5xl lg:tw-leading-[56px] tw-font-bold">
                {t("heading.0")} <br />
                <span className="tw-text-[#FF9D00]">{t("heading.1")}</span>
              </h1>
              <p className="tw-text-sm lg:tw-text-base">
                {t("subHeading.0")}
                <br />
                {t("subHeading.1")}
              </p>
            </div>
            <div className="lg:tw-w-[45%]">
              <Image
                src={
                  "https://cms-strapi.ichiba.net/uploads/Image_027b8a4907.svg"
                }
                width={608}
                height={390}
                className="tw-mx-auto"
                alt="ichiba"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="tw-container tw-px-4 xl:tw-px-0 -tw-translate-y-[132px]">
        <div className="tw-p-6 lg:tw-py-12 lg:tw-px-10 tw-rounded-tl-[56px] tw-rounded-br-[56px] tw-bg-[linear-gradient(102deg,_#0A60D5_10.43%,_#4AA4E6_79.66%)]">
          <h2 className="tw-text-2xl lg:tw-text-4xl tw-font-bold tw-text-center tw-text-white tw-mb-4 lg:tw-mb-10">
            {t("downloadFree")}
          </h2>
          <div className="tw-flex tw-items-center tw-gap-2">
            <div
              onClick={() => {
                const searchInput = document.getElementById("search-input");
                if (searchInput) searchInput.focus();
              }}
              className="tw-w-full tw-bg-white tw-flex tw-gap-2 tw-items-center tw-border tw-border-ic-black-2 tw-rounded-lg tw-cursor-pointer"
            >
              <input
                type="text"
                id="search-input"
                value={keySearch}
                onBlur={() => setKeySearch(keySearch.replace(/^\s+|\s+$/g, ""))}
                onChange={(e) => setKeySearch(e.target.value)}
                className={clsx(
                  "tw-rounded-lg tw-py-4 tw-px-4 tw-text-sm lg:tw-text-base",
                  "tw-form-control tw-form-input tw-text-sm tw-w-full tw-h-full",
                )}
                placeholder="Search by ebook's name"
              />
              <FontAwesomeIcon
                icon={faSearch}
                width={24}
                height={24}
                className="tw-pr-2"
              />
            </div>
            <button
              onClick={handleSearch}
              className="tw-bg-brand-primary tw-text-white tw-text-sm lg:tw-text-base tw-rounded-lg tw-px-3 lg:tw-px-6 tw-py-4"
            >
              Search
            </button>
          </div>
        </div>

        {lengthCate > 1 && (
          <div
            className={clsx(
              "tw-p-3 tw-rounded-2xl tw-bg-[#F9F9F9] tw-border tw-border-ic-ink-1 tw-my-6 lg:tw-mt-15",
              "tw-grid tw-grid-cols-2",
              "lg:tw-flex tw-items-center tw-justify-between tw-text-center",
            )}
          >
            <div
              onClick={() => changeCategory("")}
              className={`${
                category === ""
                  ? "tw-text-brand-primary tw-bg-orange-1 tw-border tw-border-brand-primary"
                  : ""
              } tw-flex-1 tw-px-3 tw-py-[10px] tw-mx-2 tw-whitespace-nowrap tw-rounded-lg tw-cursor-pointer`}
            >
              {t("all")}
            </div>
            {categories &&
              categories.map((value: any, index: number) => (
                <div
                  key={index}
                  onClick={() => changeCategory(value?.attributes?.value)}
                  className={clsx(
                    `${
                      category === value?.attributes?.value
                        ? "tw-text-brand-primary tw-bg-orange-1 tw-border tw-border-brand-primary"
                        : ""
                    } tw-flex-1 tw-px-3 tw-py-[10px] tw-mx-2 tw-text-sm lg:tw-text-base tw-rounded-lg tw-cursor-pointer tw-no-underline`,
                    lengthCate % 2 === 1 && index === categories.length - 1
                      ? "tw-col-span-2"
                      : "",
                  )}
                >
                  {value?.attributes?.label}
                </div>
              ))}
          </div>
        )}

        {!loading && <ListEbook ebooks={ebooks} />}
        <div className={clsx(ebooks.length > 0 ? "tw-hidden" : "")}>
          {!loading && (
            <Image
              src={EmptyData}
              alt="empty-data"
              width={300}
              height={300}
              className="tw-mx-auto"
            />
          )}
        </div>
        {loading && (
          <div className="tw-mx-auto tw-w-fit lg:tw-w-[150px] tw-h-[100px] lg:tw-h-[250px] tw-my-auto">
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

      <div className="tw-bg-[linear-gradient(180deg,_#F7F7F7_0%,_#EAEAEA_100%)] tw-px-4 xl:tw-px-0 tw-py-6 lg:tw-py-15">
        <div className="tw-container">
          <h2 className="tw-text-2xl lg:tw-text-4xl tw-font-bold tw-text-center tw-mb-6 lg:tw-mb-10">
            {t("ourLatest")}
          </h2>

          <div className="tw-grid lg:tw-grid-cols-3 md:tw-grid-cols-2 tw-gap-4 lg:tw-gap-6">
            {blogs &&
              blogs.map((value: any, index: number) => (
                <div
                  key={index}
                  className={clsx(
                    "tw-grid tw-gap-4 lg:tw-gap-6 tw-rounded-2xl tw-bg-white tw-cursor-pointer tw-overflow-hidden tw-group",
                    "hover:tw-translate-y-[-5px] hover:tw-shadow-[0px_4px_12px_rgba(0,_0,_0,_0.24)] hover:tw-transition-all hover:tw-duration-300 hover:tw-ease-linear",
                  )}
                >
                  <div className="tw-pt-8 tw-px-6 lg:tw-pt-10 lg:tw-px-8">
                    <Link
                      href={`blog/${value?.attributes?.slug}`}
                      className="tw-font-bold tw-text-base tw-text-ic-ink-6 tw-no-underline hover:tw-underline lg:tw-text-xl tw-line-clamp-2 tw-mb-2 lg:tw-mb-3"
                    >
                      {value?.attributes?.title}
                    </Link>
                    <div
                      className="tw-text-sm lg:tw-text-base tw-mb-4 lg:tw-mb-6 tw-line-clamp-2"
                      dangerouslySetInnerHTML={{
                        __html: LoadPRictext(value?.attributes?.content ?? ""),
                      }}
                    />
                    <p className="tw-mb-1 tw-text-sm tw-text-[#666] tw-hidden lg:tw-block">
                      {value?.attributes?.createdAt
                        ? new Date(
                            value?.attributes?.createdAt,
                          ).toLocaleDateString(router.locale, options)
                        : ""}
                    </p>
                    <Link
                      href={`blog/${value?.attributes?.slug}`}
                      className="tw-text-sm tw-text-[#1135A8] tw-font-medium tw-flex tw-items-center tw-gap-1 tw-no-underline hover:tw-underline"
                    >
                      {t("readMore")}
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        width={16}
                        height={16}
                      />
                    </Link>
                  </div>
                  <div className="tw-h-[260px] tw-rounded-2xl tw-overflow-hidden tw-translate-x-6 lg:tw-translate-x-8">
                    <Image
                      src={`https://cms-strapi.ichiba.net${value?.attributes?.image?.data?.attributes?.url}`}
                      width={356}
                      height={260}
                      className="tw-object-cover tw-w-full tw-h-full group-hover:tw-scale-110 hover:tw-transition-all hover:tw-duration-300 hover:tw-ease-linear"
                      alt={value?.attributes?.title}
                    />
                  </div>
                </div>
              ))}
          </div>

          <div className="tw-flex tw-justify-center tw-mt-6 lg:tw-mt-10">
            <Link
              href={"/blog"}
              className="tw-bg-brand-primary tw-text-white tw-text-sm tw-rounded-lg tw-flex tw-items-center tw-gap-2 tw-py-2 tw-px-3 tw-no-underline"
            >
              {t("viewMore")}
              <FontAwesomeIcon icon={faArrowRight} width={16} height={16} />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

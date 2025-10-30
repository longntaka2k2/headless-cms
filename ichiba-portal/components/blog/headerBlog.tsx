import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

export default function HeaderBlog(data: any) {
  const { t } = useTranslation("common");
  const router = useRouter();
  function handleChangeType(value: string) {
    router.push(value);
  }

  return (
    <div className="tw-flex tw-overflow-auto tw-font-bold tw-style-2 tw-pb-2">
      <div
        onClick={() => handleChangeType("/blog")}
        className={`${
          data?.url === "/blog"
            ? "tw-text-white tw-bg-[linear-gradient(89deg,_#ececec_-100%,_#f57c00_84.37%)]"
            : "tw-bg-[linear-gradient(90deg,_#f57c00_0%,_#ececec_180%)] tw-text-transparent tw-bg-clip-text"
        } tw-block tw-px-3 tw-py-1 tw-mx-2 tw-whitespace-nowrap tw-rounded-full tw-cursor-pointer `}
        // onClick={() => setType(value)}
      >
        {t("blog.all")}
      </div>
      {data?.data &&
        data?.data?.map((value: any, index: number) => (
          <a
            onClick={() =>
              handleChangeType("/blog/category/" + value?.attributes?.value)
            }
            rel="canonical"
            key={index}
            className={`${
              data?.url === value?.attributes?.value
                ? "tw-text-white tw-bg-[linear-gradient(0deg,#F57C00_-0.66%,#FAC286_99.49%)]"
                : "tw-bg-brand-primary tw-text-transparent tw-bg-clip-text"
            } tw-block tw-px-3 tw-py-1 tw-mx-2 tw-whitespace-nowrap tw-rounded-full tw-cursor-pointer `}
            // onClick={() => setType(value)}
          >
            {value?.attributes?.label}
          </a>
        ))}
    </div>
  );
}

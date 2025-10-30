import { getDictionary } from "@/app/getDictionary";
import BlogTag from "@/components/blog/BlogTag";
import RelatedPost from "@/components/blog/RelatedPost";
import TableOfContent from "@/components/blog/TableOfContent";
import { PageProps } from "@/const/types";
import { getPostsQuery, getStrapiMediaUrl } from "@/public/api/strapiService";
import { format } from "date-fns";
import type { Metadata } from "next";
import Link from "next/link";
import { parse } from "node-html-parser";

async function getBlogDetailBySlug(slug: string, refresh?: boolean) {
  const query = {
    filters: {
      slug: {
        $eq: slug,
      },
    },
    sort: "publishedAt:desc",
    locale: "all",
    populate: "*",
  };

  const res = await getPostsQuery(query, {
    //cache 2 phút
    next: { revalidate: refresh ? 0 : 120 },
  });

  return res[0].attributes;
}

function formatDate(date: string) {
  return format(new Date(date), "dd/MM/yyyy");
}

type Props = {
  params: { slug: string; lang: string };
};

const preprocessContent = (htmlString: string) => {
  const root = parse(
    htmlString
      .replaceAll(
        /(\s|,)\/uploads/g,
        " https://strapi-ezbuy.ichiba.net/uploads"
      )
      .replaceAll(/\"\/uploads/g, '"https://strapi-ezbuy.ichiba.net/uploads')
  );

  root.querySelectorAll("h2, h3, h4").forEach((ele, idx) => {
    ele.setAttribute("id", `${ele.rawTagName}-${idx}`);
    ele.classList.add("scroll-mt-[95px]");
  });

  return root.toString();
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // read route params
  const blogDetail: any = await getBlogDetailBySlug(params.slug);

  return {
    title: blogDetail?.title,
    description: blogDetail?.mediaTitle,
    openGraph: {
      images: [
        {
          url: getStrapiMediaUrl(blogDetail?.banner),
        },
      ],
    },
  };
}

export default async function BlogDetail({ params, searchParams }: PageProps) {
  const lang = await getDictionary(params.lang);
  const blogDetail: any = await getBlogDetailBySlug(
    params.slug,
    !!searchParams?.renew
  );

  return (
    <>
      <section className="justify-center pt-12 lg:pt-[72px] items-center flex lg:scroll-mt-[50vh] scroll-mt-[10vh] scroll-smooth snap-mandatory">
        <article className="container flex-1 pt-6 lg:pt-12 px-4 lg:px-0">
          <header className="text-sm lg:text-base mb-4">
            <h1 className="mb-4 lg:mb-5 text-xl lg:text-4xl font-bold">
              {blogDetail?.title}
            </h1>

            <div className="flex justify-start gap-1 capitalize">
              <Link
                href={`/${params.lang}/blog/category/${blogDetail?.blog_category?.data?.attributes?.slug}`}
              >
                <div className="mb-3 text-[#389E0D] text-[12px] font-bold bg-[#D9F7BE] w-max px-2 py-1 rounded-[4px]">
                  {blogDetail?.blog_category?.data?.attributes?.name}
                </div>
              </Link>
            </div>

            <span className="inline">
              By <span className="font-bold italic">{blogDetail?.author}</span>
              <span className="hidden lg:inline"> - </span>
              <br className="block lg:hidden" />
              <span>
                {blogDetail?.publishedAt && formatDate(blogDetail?.publishedAt)}{" "}
                UTC.
              </span>
            </span>
          </header>
          <TableOfContent
            lang={lang}
            className="rounded-lg border-blue-400 bg-blue-100 pl-6 pr-2 py-2 lg:p-8 my-2"
          />
          <div
            className="ck-content"
            lang={params.lang == "ja" ? "JA" : ""}
            dangerouslySetInnerHTML={{
              __html: preprocessContent(blogDetail?.body) ?? "",
            }}
          ></div>
        </article>
      </section>
      <RelatedPost lang={lang} tags={blogDetail.tags} />
    </>
  );
}

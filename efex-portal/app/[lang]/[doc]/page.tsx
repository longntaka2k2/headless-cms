import { getDocBySlug } from "@/public/api/strapiService";
import { LoadImageRictext } from "@/utils/ultils";
import Link from "next/link";
import TableOfContent from "@/components/blog/TableOfContent";
import { getDictionary } from "@/app/getDictionary";
import Image from "next/image";
import FromVietNam from "@/components/commons/FromVietNam";
import Share from "./share";
import RichText from "./richtext";

export default async function BlogDetail({
  params,
}: {
  params: {
    lang: string;
    doc: string;
  };
}) {
  const lang = await getDictionary(params.lang ?? "en");
  const currentUrl = `https://efex.vn/${params.lang}/blog/${params.doc}`;
  const blogDetail = await getDocBySlug(params.doc, params.lang as string);

  console.log(params, "params----");

  return (
    <>
      <head>
        <title>{blogDetail?.metaTitle}</title>
        <meta name="description" content={blogDetail?.metaDes} />
      </head>
      <div className="blogDetail lg:overflow-visible overflow-hidden">
        <div className="container px-4 lg:px-0 py-6">
          {blogDetail?.content && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-10 ">
              <div className="lg:grid content-between lg:border-b lg:border-[#999]">
                <div className="lg:pt-8">
                  {blogDetail?.blog_categories?.data?.map(
                    (value: any, index: number) => (
                      <Link
                        href={`/${params.lang}/blog/category/${value?.attributes.slug}`}
                        className="inline-block mr-3 mb-3 text-[#389E0D] text-xs font-bold bg-[#D9F7BE] w-max px-2 py-1 rounded-[4px] cursor-pointer"
                        key={index}
                      >
                        {value?.attributes?.name}
                      </Link>
                    )
                  )}
                  <h1 className="text-[28px] lg:text-[2.2rem] lg:leading-[2.6rem] font-black title">
                    {blogDetail?.title}
                  </h1>
                </div>
              </div>
              <div>
                <Image
                  src={
                    blogDetail?.image?.data?.attributes?.url
                      ? "https://strapi-efex.ichiba.net" +
                        blogDetail?.image?.data?.attributes?.url
                      : LoadImageRictext(blogDetail?.body)
                  }
                  quality={100}
                  alt={blogDetail?.title}
                  width={800}
                  height={600}
                  className="w-full rounded-[20px]"
                />
              </div>
            </div>
          )}

          <div className="lg:py-10 lg:flex lg:relative justify-between">
            <div className="lg:w-[27%] w-full relative flex lg:block">
              <div className="lg:sticky top-[100px]">
                <TableOfContent
                  lang={params.lang}
                  className="hidden lg:block"
                />

                <div className="flex items-center pl-2">
                  <span className="text-base font-bold">
                    {lang?.blogs?.shareThis}
                  </span>
                  <Share url={currentUrl} />
                </div>
              </div>
            </div>
            <div className="lg:w-[70%] content-blog text-[#2c2f34] px-3 pb-4 w-full">
              <RichText content={blogDetail?.content as any} />
            </div>
          </div>
        </div>
      </div>

      <FromVietNam lang={lang} />
    </>
  );
}

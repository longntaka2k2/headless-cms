import { faCircleDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Metadata, ResolvingMetadata } from "next";
import Share from "./share";
import { format } from "date-fns";
import { CategoryRenderer } from "./CategoryRenderer";
import SecondaryHeader from "./_components/SecondaryHeader";
import RichText from "@/components/common/Richtext";
import { getDocCategories, getDocpage } from "@/public/api/strapiService";

type Props = {
  params: { lang: string; slug: string };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const doc = await getDocpage(params.slug, params.lang);
  const link = `https://buyforme.vn/doc/${params.slug}` as string;
  return {
    title: doc[0]?.attributes?.metaTitle,
    description: doc[0]?.attributes?.metaDescription,
    alternates: { canonical: link },
    openGraph: {
      images: doc[0]?.attributes?.thumbnail?.url ?? null,
    },
  };
}

export default async function DocDetail({
  params,
}: {
  params: {
    lang: string;
    slug: string;
  };
}) {
  const currentUrl = `https://buyforme.vn/doc/${params.slug}`;
  const doc = await getDocpage(params.slug , params.lang);
  const { data } = await getDocCategories(params.lang);
  return (
    <div className="blogDetail ">
      <div className="container px-4 lg:py-6">
        <div className="lg:grid lg:grid-cols-12 lg:gap-5 lg:relative">
          <div className="lg:col-span-3 mt-4 sticky top-0 pr-8 text-sm">
            <div className="lg:sticky lg:top-[100px] ">
              <div className="lg:col-span-3 mt-7 lg:mt-10 lg:grid grid-col-1 gap-4 hidden">
                {data && (
                  <CategoryRenderer
                    docSlug={doc[0]?.attributes?.slug}
                    currentCategoryName={doc[0]?.attributes?.doc_category?.name}
                    defaultOpen
                    categories={data.map((value : any) => ({
                      name: value?.attributes?.name,
                      docs:
                        value?.attributes?.doc_pages?.data.map((doc : any) => ({
                          slug: doc.attributes.slug,
                          title: doc.attributes.title,
                        })) ?? [],
                    }))}
                  />
                )}
              </div>
              <SecondaryHeader>
                {data && (
                  <CategoryRenderer
                    docSlug={doc.slug}
                    currentCategoryName={doc[0]?.attributes?.doc_category?.name}
                    categories={data.map((value : any) => ({ 
                      name: value?.attributes.name,
                      docs:
                      value?.attributes.doc_pages?.data.map((doc : any) => ({
                          slug: doc.attributes.slug,
                          title: doc.attributes.title,
                        })) ?? [],
                    }))}
                    defaultOpen
                  />
                )}
              </SecondaryHeader>
            </div>
          </div>
          <div className="lg:col-span-9 lg:grid lg:grid-cols-12 mt-10 lg:mt-20">
            <div className="content-blog text-[#2c2f34] border-b border-[#999] pb-4 lg:border-0 lg:col-span-11">
              <div className="lg:grid content-between lg:border-b lg:border-[#999]">
                <div className="lg:pt-8">
                  <h1 className="text-[28px] lg:text-[2.2rem] font-black title">
                    {doc[0]?.attributes?.title}
                  </h1>
                </div>
                <div className="mt-2 flex justify-between text-[14px] text-[#5e6a78] lg:mb-8">
                  <div className="mr-5">
                    <FontAwesomeIcon
                      icon={faCircleDot}
                      width={10}
                      height={10}
                      className=" mb-[1px] mr-1"
                    />{" "}
                    {doc[0]?.attributes?.author ? doc[0]?.attributes?.author : "Buy For Me"}
                  </div>
                  <div>{format(new Date(doc[0]?.attributes?.createdAt), "dd/MM/yyy")}</div>
                </div>
              </div>
              <RichText content={doc[0]?.attributes?.content} />
            </div>
            <div className="lg:col-span-1">
              <div className="lg:sticky py-2 lg:py-0 lg:translate-y-2 lg:translate-x-2 top-[100px] flex lg:block">
                <Share url={currentUrl} />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <ReadMore /> */}
    </div>
  );
}

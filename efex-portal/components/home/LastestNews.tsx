import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { getPosts, getPostsBySlug } from "@/public/api/strapiService";
import { getDictionary } from "@/app/getDictionary";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LoadImageRictext, LoadPRictext } from "@/utils/ultils";

interface Props {
  params: { lang: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}
const LastestNews = async ({
  params,
}: {
  params: {
    lang: string;
  };
}) => {
  const lang = await getDictionary(params.lang || "en");
  const slugs = ["gui-hang-di-nhat-ban", "fulfillment-la-gi", "gui-hang-di-my"];

  const posts =
    params.lang === "en"
      ? await getPosts("en")
      : await getPostsBySlug(slugs, "vi");

  return (
    <div
      className={clsx(
        ` pb-[50px] lg:py-[60px] lg:bg-[url(https://strapi-ezbuy.ichiba.net/uploads/Vector_11_d85c417ff3.svg)] bg-cover bg-no-repeat`
      )}
    >
      <div className="py-6 px-4 container">
        <div className="text-center">
          <div className="text-xs text-contact lg:text-sm font-medium uppercase">
            {lang?.homePage?.latest?.from}
          </div>
          <h2 className="text-2xl lg:text-4xl font-bold">
            {lang?.homePage?.latest?.title}
          </h2>
          <div className="text-[#666] text-sm lg:text-base lg:max-w-[600px] lg:mx-auto">
            {lang?.homePage?.latest?.content}
          </div>
        </div>
      </div>
      <div className="container flex overflow-x-scroll lg:overflow-auto pb-[30px] lg:pb-[0px] ">
        {posts.map((value: any, index: number) =>
          index < 3 ? (
            <>
              {params.lang === "en" ? (
                <div className="pt-[60px] lg:pt-[60px] px-2 " key={index}>
                  <div
                    className={clsx(
                      "relative",
                      "shadow-[0_0_12px_0_rgba(54,50,46,.08)] rounded-[20px] min-w-[340px] lg:max-w-[384px] w-full h-full bg-white",
                      "hover:translate-y-[-5px] hover:shadow-[0px_4px_12px_rgba(0,_0,_0,_0.24)]",
                      "hover:transition-all hover:duration-300 hover:ease-linear"
                    )}
                  >
                    <Link href={`${params.lang}/blog/${value?.slug}`}>
                      <Image
                        src={
                          value?.thumbnail?.data?.attributes
                            ? "https://strapi-efex.ichiba.net" +
                              value?.thumbnail?.data?.attributes?.url
                            : LoadImageRictext(value?.body)
                        }
                        width={1000}
                        height={1000}
                        quality={100}
                        alt="EFEX"
                        className="relative z-[2] bottom-10 lg:bottom-[50px] cursor-pointer lg:max-w-[328px] max-w-[308px]  w-full lg:h-[200px] object-fit mx-auto rounded-[16px] shadow-[0px_8px_16px_0px_rgba(0,_0,_0,_0.15)] "
                      />
                    </Link>

                    <div className="px-4 lg:px-5 seft-center relative bottom-10">
                      <Link
                        href={`${params.lang}/blog/${value?.slug}`}
                        className=" font-bold lg:text-xl line-clamp-2 cursor-pointer mt-3"
                      >
                        {value?.title}
                      </Link>
                      <div className="text-sm lg:text-base mt-2 line-clamp-4">
                        {LoadPRictext(value?.body)}
                      </div>
                    </div>
                    <Link
                      href={`${params.lang}/blog/${value?.slug}`}
                      className="px-6 text-end text-sm  text-[#AF0000] absolute inset-x-0  bottom-4 font-medium"
                    >
                      {lang?.blogs?.readMore}
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className="ml-2"
                        width={24}
                        height={24}
                      />
                    </Link>
                  </div>
                </div>
              ) : (
                <div className="pt-[60px] lg:pt-[60px] px-2 " key={index}>
                  <div
                    className={clsx(
                      "relative",
                      "shadow-[0_0_12px_0_rgba(54,50,46,.08)] rounded-[20px] min-w-[340px] lg:max-w-[384px] w-full h-full bg-white",
                      "hover:translate-y-[-5px] hover:shadow-[0px_4px_12px_rgba(0,_0,_0,_0.24)]",
                      "hover:transition-all hover:duration-300 hover:ease-linear"
                    )}
                  >
                    <Link href={`${params.lang}/blog/${value?.attributes?.slug}`}>
                      <Image
                        src={
                          value?.attributes?.thumbnail?.data?.attributes
                            ? "https://strapi-efex.ichiba.net" +
                              value?.attributes?.thumbnail?.data?.attributes?.url
                            : LoadImageRictext(value?.attributes?.body)
                        }
                        width={1000}
                        height={1000}
                        quality={100}
                        alt="EFEX"
                        className="relative z-[2] bottom-10 lg:bottom-[50px] cursor-pointer lg:max-w-[328px] max-w-[308px]  w-full lg:h-[200px] object-fit mx-auto rounded-[16px] shadow-[0px_8px_16px_0px_rgba(0,_0,_0,_0.15)] "
                      />
                    </Link>

                    <div className="px-4 lg:px-5 seft-center relative bottom-10">
                      <Link
                        href={`${params.lang}/blog/${value?.attributes?.slug}`}
                        className=" font-bold lg:text-xl line-clamp-2 cursor-pointer mt-3"
                      >
                        {value?.attributes?.title}
                      </Link>
                      <div className="text-sm lg:text-base mt-2 line-clamp-4">
                        {LoadPRictext(value?.attributes?.body)}
                      </div>
                    </div>
                    <Link
                      href={`${params.lang}/blog/${value?.attributes?.slug}`}
                      className="px-6 text-end text-sm  text-[#AF0000] absolute inset-x-0  bottom-4 font-medium"
                    >
                      {lang?.blogs?.readMore}
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className="ml-2"
                        width={24}
                        height={24}
                      />
                    </Link>
                  </div>
                </div>
              )}
            </>
          ) : (
            <div className="hidden" key={index}></div>
          )
        )}
      </div>
    </div>
  );
};
export default LastestNews;

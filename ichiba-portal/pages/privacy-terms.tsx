import { Page, ContentPrivacy } from "@/src/lib/__generated/sdk";
import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import router, { useRouter } from "next/router";
import Scrollspy from "react-scrollspy";
import { scroller, Link, Events } from "react-scroll";
import {
  JSXElementConstructor,
  ReactElement,
  ReactFragment,
  ReactPortal,
  useEffect,
  useState,
} from "react";

const options = {
  renderNode: {
    ["text"]: (
      node: any,
      children:
        | string
        | number
        | boolean
        | ReactElement<any, string | JSXElementConstructor<any>>
        | ReactFragment
        | ReactPortal
        | null
        | undefined,
      index: any,
    ) => <div>{children}</div>,
    ["bold"]: (
      node: any,
      children:
        | string
        | number
        | boolean
        | ReactFragment
        | ReactPortal
        | ReactElement<any, string | JSXElementConstructor<any>>
        | null
        | undefined,
      index: any,
    ) => <div>{children}</div>,
  },
};

export default function Privacy() {
  const [pageTerms, setPageTerms] = useState<ContentPrivacy>(
    {} as ContentPrivacy,
  );

  const [privacyItem, setPrivacyItem] = useState<ContentPrivacy>(
    {} as ContentPrivacy,
  );

  const router = useRouter();
  const { terms, privacy } = router?.query;

  const [isOpenNavItem, setOpenNavItem] = useState(terms === "" ? 1 : 0);

  useEffect(() => {
    // fetchData();
    scrollToTop(terms === "" ? 1 : 0);
  }, [router?.query]);

  const scrollToElement = (id: string) => {
    scroller.scrollTo(id, {
      duration: 0,
      delay: 5,
      smooth: true,
      offset: -50,
    });
  };

  function scrollToTop(value: number) {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setOpenNavItem(value);
  }

  return (
    <>
      <div id="privacy">
        <div className="container py-5 user-select-none">
          <div className="row">
            <div className="col-lg-3 ">
              <div className="tab">
                <div
                  className="fs-24 fw-7 cursor"
                  onClick={() => scrollToTop(0 as number)}
                >
                  Privacy Policy
                </div>
                <div className={isOpenNavItem === 0 ? "" : "d-none"}>
                  <div className="ps-4">
                    {/* {(page?.componentCollection?.items?.length as number) > 0 &&
                      page?.componentCollection?.items?.map(
                        (value: ContentPrivacy | null, index: number) => (
                          <>
                            <div
                              className="fs-18 py-2 cursor "
                            >
                              <Link activeClass="is-active active" className="text-decoration-none " style={{color:'#333333'}} to={index.toString() as string} spy={true} smooth={true} offset={-70} duration={0}>
                              {value?.title}
                              </Link>
                            </div>
                          </>
                        )
                      )} */}
                  </div>
                </div>
                <div
                  className="fs-24 fw-7 cursor pt-3"
                  onClick={() => scrollToTop(1)}
                >
                  Terms & Conditions
                </div>
              </div>
            </div>
            <div className="col-lg-9 ">
              <div className={isOpenNavItem === 0 ? "" : "d-none"}>
                {/* <Scrollspy items={[]} currentClassName="is-current" >
                  {(page?.componentCollection?.items?.length as number) > 0 &&
                    page?.componentCollection?.items?.map(
                      (value: ContentPrivacy | null, index: number) => (
                        <>
                        <a href={`#${index}`} className="text-decoration-none " id={index.toString()} style={{color:"#333333"}}>

                          <div className="pt-5 fs-20 fw-7" key={index}>{value?.title}</div>
                          <div className="py-4">
                            {documentToReactComponents(
                              value?.content?.json,
                              options as object
                            )}
                          </div>
                        </a>
                        </>
                      )
                    )}
                </Scrollspy> */}
              </div>

              <div className={isOpenNavItem === 1 ? "" : "d-none"}>
                <div className="pt-5 fs-20 fw-7">{pageTerms?.title}</div>
                <div className="py-4">
                  {/* {documentToReactComponents(
                              pageTerms?.content?.json,
                              options as object
                            )} */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return {
    props: {
      ...(await serverSideTranslations(ctx?.locale as string)),
    },
  };
};

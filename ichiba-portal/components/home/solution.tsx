import spider from "@/public/icons/spider.webp";
import { stripHtmlTags, trim } from "@/utils/utils";

// https://cms-strapi.ichiba.net/uploads/image_22_1b10b62d3b.png
export default function SolutionICB(props: any) {
  return (
    <>
      {props && (
        <div id="solution" key={`${props.id}_${props.__component}`}>
          <div className="container user-select-none">
            <div
              className="text-center fs-36 fw-7 title mx-auto"
              // style={{ maxWidth: "500px" }}
            >
              <span>{props?.heading}</span>
            </div>
            <div
              className="row pt-4 bg-solution"
              style={{
                backgroundImage: `url(${spider.src})`,
                backgroundSize: "cover",
              }}
            >
              <div className="col-xl-4 items-left">
                {(props.left?.length as number) > 0 &&
                  props.left?.map((value: any, index: number) => (
                    <div className="solution-item-left fs-16" key={index}>
                      <div className="fs-16">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: (value?.content),
                          }}
                        />
                      </div>
                    </div>
                  ))}
              </div>
              <div className="col-xl-4 animation">
                {/* <img src={componentSolution?.img?.url || ""} alt="" /> */}
                {/* <Player
                      src={logo}
                      loop
                      autoplay
                      style={{ height: "100%" }}
                    >
                      {" "}
                      <Controls />{" "}
                    </Player> */}
              </div>
              <div className="col-xl-4 items-right row ">
                {(props.right?.length as number) > 0 &&
                  props.right?.map((value: any, index: number) => (
                    <div
                      className="solution-item-right col-lg-4 col-xl-12"
                      key={index}
                    >
                      <div>
                        <div className="fs-16 fw-7">{value?.heading}</div>
                        <div className="fs-16">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: (value?.content)?.trim(),
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

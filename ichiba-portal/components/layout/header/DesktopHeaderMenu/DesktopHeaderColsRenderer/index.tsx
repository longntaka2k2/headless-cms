import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { ReactSVG } from "react-svg";

const DesktopHeaderColsRenderer = ({
  items,
  idx,
  onClickMenu,
}: {
  items: any;
  idx: number;
  onClickMenu: () => void;
}) =>
  items.map((value: any, index: any) => (
    <div className="" key={`${value.Title}_${idx}_${index}`}>
      {value.Title && <div className="fw-5 ps-4 py-2">{value.Title}</div>}
      {value.Items &&
        value.Items.map((item: any) => (
          <Link
            target="_blank"
            href={item?.Path ?? "#"}
            onClick={() => onClickMenu()}
            rel={item?.Path?.includes("http") ? "nofollow" : ""}
            key={`${item.Title}_${idx}_${index}`}
            className={clsx(
              "items-dropdown pb-1 text-drop ms-3 me-1 my-1 d-flex text-decoration-none color-header align-self-center ",
              item.disable ? "disabled" : "",
              "tw-items-center",
            )}
            passHref
          >
            <div className="fs-18 items-icon mt-2">
              {item.Icon?.data?.attributes?.ext == ".svg" ? (
                <ReactSVG
                  src={item.Icon?.data?.attributes?.url}
                  beforeInjection={(svg) => {
                    svg.setAttribute("width", "30px");
                    svg.setAttribute("height", "30px");
                    svg.setAttribute("fill", "#f57c00");
                  }}
                />
              ) : (
                <Image
                  src={
                    item.Icon?.data ? `${item.Icon?.data?.attributes?.url}` : ""
                  }
                  alt={"items-content"}
                  unoptimized={true}
                  width={30}
                  height={30}
                />
              )}
            </div>
            <div className="ps-2">
              <span className="d-block fw-5 fs-16">{item.Title}</span>
              <span className="items-content">{item.Description}</span>
            </div>
          </Link>
        ))}
    </div>
  ));

export default DesktopHeaderColsRenderer;

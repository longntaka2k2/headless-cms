import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import DesktopHeaderColsRenderer from "../../DesktopHeaderMenuV2/DesktopHeaderColsRenderer";
import Link from "next/link";
import Image from "next/image";

const MobileHeaderTabv2 = (props: {
  item: any;
  setOpen: (e: boolean) => void;
  isOpenTab: boolean;
  onClickMenu: any;
}) => {
  return (
    <div
      className={clsx(
        "tw-z-[155] tw-absolute tw-left-0 tw-right-0 tw-bottom-0 tw-top-0 tw-transition-all tw-duration-200 tw-overflow-scroll tw-bg-white tw-pb-20",
        props.isOpenTab
          ? "tw-translate-x-0 tw-opacity-100"
          : "tw-translate-x-10 tw-opacity-0 tw-invisible ",
      )}
    >
      <div className=" tw-w-full tw-p-4">
        <div
          className="tw-flex tw-items-center tw-gap-4 tw-text-sm tw-font-medium tw-border-b tw-border-[#f2f2f2] tw-py-3"
          onClick={() => props.setOpen(false)}
        >
          <FontAwesomeIcon icon={faArrowLeft} />
          <div>{props.item?.title}</div>
        </div>
        <div className="">
          {props.item?.listItems ? (
            props.item?.listItems?.map((value: any, index: number) => (
              <div key={index} className="tw-mt-3">
                <div className="tw-text-xs tw-font-bold tw-text-[#666] tw-pb-2 tw-border-b tw-border-[#f2f2f2]">
                  {value?.title}
                </div>
                <div className="mt-2">
                  {value?.items?.map((x: any, idx: number) => (
                    <DesktopHeaderColsRenderer key={idx} item={x} onClickMenu={props.onClickMenu} />
                  ))}
                </div>
              </div>
            ))
          ) : (
            <div className="tw-mt-3 tw-grid tw-gap-3">
              {props.item?.items?.map((value: any, index: number) => (
                <DesktopHeaderColsRenderer key={index} item={value} onClickMenu={props.onClickMenu} />
              ))}
            </div>
          )}
          {props?.item?.image?.image?.data && (
            <div className="tw-py-4 tw-px-5 tw-rounded-2xl tw-shadow-[0px_4px_20px_0px_rgba(0,0,0,0.08)] tw-text-center tw-mt-3">
              <Image
                src={`https://cms-strapi.ichiba.net${props?.item?.image?.image?.data?.attributes?.url}`}
                alt={props?.item?.image?.title}
                width={320}
                height={113}
                className="tw-rounded-2xl tw-max-w-[320px] tw-h-[113px] tw-object-cover"
              />
              <div className="tw-mt-[10px] tw-font-medium tw-text-[#333] tw-text-sm">
                {props?.item?.image?.title}
              </div>
              <div className="tw-text-[#666] tw-text-xs tw-mt-1">
                {props?.item?.image?.content}
              </div>
              <Link
                href={props?.item?.image?.linkRead}
                className="tw-block tw-mt-2 tw-text-sm tw-font-medium tw-no-underline tw-text-[#F57C00]"
              >
                {props?.item?.image?.read}
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default MobileHeaderTabv2;

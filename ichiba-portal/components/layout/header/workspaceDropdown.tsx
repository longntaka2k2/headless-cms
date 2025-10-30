import { useQuery } from "@tanstack/react-query";
import classNames from "classnames";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import { useToggle } from "usehooks-ts";

import { getApplicationInSidebar } from "@/api/apps";
import expand from "@/public/icons/header/expand.svg";
import WorkspaceIcon from "@/public/icons/header/workspace-icon.png";
import EmptyWorkspace from "@/public/svgs/emtryWorkspace.svg";

import IconSvg from "@/components/common/IconSvg";
import env from "@/config/env";
import { CODE_CONFIGURATION, workspaceConfiguration } from "@/const/workspaces";
import { ItemNavApplication, WorkspaceSideBar } from "@/types";

const redirect = (url: string, locale: string, slug: string) => {
  if (url.includes("{slug}") || url.includes("{locale}")) {
    const newUrl = url
      .replace("{slug}", slug)
      .replace("{locale}", locale || "");
    window.open(newUrl, "_blank", "noopener,noreferrer");
  } else {
    window.open(
      `${url}${locale ? `/${locale}` : ""}/${slug}`,
      "_blank",
      "noopener,noreferrer",
    );
  }
};

interface AppItemProps extends WorkspaceSideBar {
  code: string;
}

export interface SideBarItem {
  [key: string]: number | string | any;
  href?: string;
  label?: string;
  icon?: string;
  image?: string;
}

export interface SideBars extends SideBarItem {
  items?: SideBarItem[];
  seeMore?: string;
  [key: string]: number | string | any;
  onClick?: (val?: string) => void;
}

function SideBarItem({ listMenus }: { listMenus: SideBars[] }) {
  const { t: common } = useTranslation("common");
  const { route, query } = useRouter();
  const routerPage = route.replace("[page]", query.page as string);
  return (
    <div>
      {listMenus.map((val) => {
        const onCheckVerify = () => val.onClick && val.onClick(val.href);
        return (
          <div key={val.label}>
            {val.onClick ? (
              <div
                onClick={onCheckVerify}
                className="tw-relative tw-cursor-pointer"
              >
                <div
                  className={classNames(
                    "tw-flex tw-items-center tw-p-2 tw-rounded-lg tw-text-ic-ink-5",
                    routerPage === val.href ? "tw-font-medium" : null,
                  )}
                >
                  <IconSvg
                    icon={val.icon}
                    width={24}
                    height={24}
                    className="tw-text-ic-ink-6"
                  />
                  <p className="tw-ml-2 tw-grow tw-text-sm tw-leading-6 tw-text-ic-ink-6 tw-mb-0">
                    {common(val.label as string)}
                  </p>
                </div>
              </div>
            ) : (
              <Link
                href={`${env.NEXT_PUBLIC_ORG_URL}${val.href}` as string}
                className={classNames("tw-relative tw-no-underline")}
                target={"_blank"}
                rel="nofollow"
              >
                <div
                  className={classNames(
                    "tw-flex tw-items-center tw-p-2 tw-rounded-lg tw-text-ic-ink-5",
                    routerPage === val.href ? "tw-font-medium" : null,
                    "hover:tw-text-neutral-10 hover:tw-bg-ic-ink-1 !tw-text-neutral-10",
                  )}
                >
                  <IconSvg
                    icon={val.icon}
                    width={22}
                    height={22}
                    className="tw-text-ic-ink-6"
                  />
                  <p className="tw-ml-2 tw-grow tw-text-sm tw-leading-6 tw-text-ic-ink-6 tw-mb-0">
                    {common(val.label as string)}
                  </p>
                </div>
              </Link>
            )}
          </div>
        );
      })}
    </div>
  );
}

function AppItem({ item }: { item: AppItemProps }) {
  const [value, toggle] = useToggle(false);
  const { locale, push } = useRouter();
  const { t: common } = useTranslation("common");

  const onOpenListWorkspace = () => {
    if (item.workspaces.length > 1) {
      toggle();
    }
    if (item.workspaces.length === 1) {
      const data = item.workspaces[0];
      if (item.code === CODE_CONFIGURATION) {
        redirect(
          `${env.NEXT_PUBLIC_ORG_URL}/workspaces/{slug}/configuration/`,
          "",
          data?.workspaceSlug as string,
        );
      } else {
        redirect(
          item.applicationUrl as string,
          locale as string,
          data?.workspaceSlug as string,
        );
      }
    }
  };

  const onNewTagApp = (slug: string) => {
    redirect(item.applicationUrl as string, locale as string, slug);
  };

  return (
    <div
      className={classNames(
        "tw-overflow-hidden tw-h-full tw-transition-all",
        value ? "tw-max-h-56" : "tw-max-h-14",
      )}
    >
      <button
        key={item.applicationId}
        className="tw-flex tw-items-center tw-justify-between tw-p-2 tw-gap-4 lg:tw-gap-0"
        onClick={onOpenListWorkspace}
      >
        <Image
          src={item.applicationLogoUrl}
          width={40}
          height={40}
          className="tw-w-10 tw-h-10 tw-rounded-full"
          alt="logo"
        />
        <p
          title={`${item.applicationName} (${item.applicationShortName})`}
          className="lg:tw-font-medium lg:tw-ml-4 tw-w-64 tw-text-sm tw-leading-5 tw-text-ic-ink-6 tw-truncate tw-text-left tw-mb-0"
        >
          {`${item.applicationName} (${item.applicationShortName})`}
        </p>

        {item.workspaces.length > 1 && (
          <IconSvg
            icon="arrow"
            width={24}
            height={24}
            className={classNames(
              "tw-text-ic-ink-6 tw-w-6 tw-h-6",
              value && "tw-rotate-[180deg]",
            )}
          />
        )}
      </button>
      {item.workspaces.length > 1 && (
        <div className="tw-rounded-lg tw-py-2 tw-bg-bg-light tw-overflow-hidden">
          {item.workspaces.map((i, index) => {
            const onAction = () => {
              onNewTagApp(i.workspaceSlug);
            };
            if (index < 3) {
              return (
                <button
                  className="tw-py-2 tw-px-4 tw-flex tw-items-center hover:tw-bg-ic-ink-2 tw-w-full"
                  key={i.workspaceId}
                  onClick={onAction}
                >
                  <Image
                    src={WorkspaceIcon}
                    width={24}
                    height={24}
                    alt="WorkspaceIcon"
                  />
                  <p className="tw-ml-4 tw-text-sm tw-font-normal tw-leading-4 tw-text-ic-ink-6 tw-mb-0">
                    {i.workspaceName}
                  </p>
                </button>
              );
            }
            return <></>;
          })}
          {item.workspaces.length > 3 && (
            <Link
              href={`${env.NEXT_PUBLIC_ORG_URL}${
                item.code === CODE_CONFIGURATION
                  ? `workspaces/?param=configuration`
                  : `workspaces/applications/${item.applicationId}`
              }`}
              className="tw-p-2 tw-text-xs tw-text-primary-6 tw-no-underline tw-text-center tw-block"
            >
              {common("seeMore")}
            </Link>
          )}
        </div>
      )}
    </div>
  );
}

export const WorkspaceDropdown = () => {
  const { push } = useRouter();
  const { t: common } = useTranslation("common");
  const orgHref = `${env.NEXT_PUBLIC_ORG_URL}`;
  const { data: listApplication, isLoading } = useQuery({
    queryKey: ["getApplicationInSidebar"],
    queryFn: getApplicationInSidebar,
    retry: false,
  });

  const onCreateWorkspace = () => {
    push("https://org.ichiba.net/vi/workspaces/create/");
  };

  const checkWorkspace =
    listApplication?.data?.items?.map((i) => i.workspaces).flat() ?? [];

  const listWorkspace = checkWorkspace.reduce((arr, item) => {
    if (!arr.map((i) => i.workspaceId).includes(item.workspaceId)) {
      arr.push(item);
    }
    return arr;
  }, [] as ItemNavApplication[]);

  const redirectConfiguration = (key: string, href: string) => {
    return listWorkspace.length === 1
      ? `/workspaces/${listWorkspace[0]?.workspaceSlug}/${key}/`
      : href;
  };

  const settingWorkspaces = workspaceConfiguration.map((val) => {
    return {
      ...val,
      href: redirectConfiguration(val.key, val.href),
    };
  });

  const convertApp = listApplication?.data.items.map((i) => {
    if (i.applicationUrl === CODE_CONFIGURATION) {
      return {
        ...i,
        applicationUrl: `/workspaces/{slug}/configuration`,
        code: CODE_CONFIGURATION,
      };
    }
    return { ...i, code: i.applicationName };
  });

  if (isLoading) return <></>;

  return (
    <>
      {/** desktop */}
      <div className="scroll tw-overflow-y-scroll tw-pr-2 tw-h-full tw-max-h-[625px] tw-bg-white tw-hidden lg:tw-block">
        {checkWorkspace.length < 1 && (
          <div className="tw-flex tw-justify-center tw-items-center tw-flex-col">
            <Image
              src={EmptyWorkspace}
              alt="EmptyWorkspace"
              className="tw-no-underline"
            />
            <p className="tw-text-lg tw-font-bold tw-leading-6 tw-text-ic-ink-6 tw-mt-6 tw-mb-0">
              {common("getStartWithYourOwnWorkspace")}
            </p>
            <p className="tw-text-sm tw-font-medium tw-leading-5 tw-text-ic-ink-6 tw-mt-4 tw-mb-0">
              {common("tryProductToStartGrowthWithYourBusiness")}
            </p>
            <button
              onClick={onCreateWorkspace}
              className="tw-w-full tw-mt-6 tw-py-2 tw-border tw-border-primary-6 tw-rounded-lg tw-text-sm tw-font-medium tw-flex tw-justify-center tw-items-center tw-text-primary-6"
              // size="semibold"
            >
              {common("createWorkspace")}
            </button>
          </div>
        )}
        {checkWorkspace.length > 0 && (
          <div>
            <div>
              <div className="tw-flex tw-justify-between tw-items-center">
                <p className="tw-text-lg tw-font-medium tw-leading-6 tw-text-ic-ink-6 tw-mb-0">
                  {common("switchTo")}
                </p>
                <Link
                  href={orgHref}
                  className="tw-flex tw-gap-4 tw-no-underline"
                  target={"_blank"}
                  rel="nofollow"
                >
                  <p className="tw-mb-0">{common("organization")}</p>
                  <Image
                    src={expand}
                    alt="Organization"
                    className="tw-items-end"
                  />
                </Link>
              </div>
              <div className="tw-mt-2">
                {(convertApp ?? []).map((item) => {
                  if (item.workspaces.length > 0) {
                    return <AppItem key={item.applicationId} item={item} />;
                  }
                  return <></>;
                })}
              </div>
            </div>
            <div className="tw-mt-4">
              <p className="tw-text-xs tw-font-medium tw-leading-5 tw-text-neutral-6 tw-uppercase tw-mb-0">
                {common("workspaces")}
              </p>
              <div className="tw-mt-2">
                <SideBarItem listMenus={settingWorkspaces} />
              </div>
            </div>
          </div>
        )}
      </div>

      {/** mobile */}
      <div className="scroll tw-overflow-y-scroll tw-bg-white lg:tw-hidden">
        {checkWorkspace.length < 1 && (
          <div className="tw-flex tw-justify-center tw-items-center tw-flex-col">
            <Image src={EmptyWorkspace} alt="EmptyWorkspace" />
            <p className="tw-font-bold tw-text-ic-ink-6 tw-mt-6 tw-mb-0">
              {common("getStartWithYourOwnWorkspace")}
            </p>
            <p className="tw-text-sm tw-text-ic-ink-6 tw-mt-2 tw-mb-0">
              {common("tryProductToStartGrowthWithYourBusiness")}
            </p>
            <button
              onClick={onCreateWorkspace}
              className="tw-w-full tw-mt-6 tw-px-3 tw-py-2 tw-border tw-border-primary-6 tw-rounded-lg tw-text-sm tw-font-medium tw-flex tw-justify-center tw-items-center tw-text-primary-6"
            >
              {common("createWorkspace")}
            </button>
          </div>
        )}
        {checkWorkspace.length > 0 && (
          <div>
            <div>
              <div className="tw-flex tw-justify-between tw-items-center">
                <p className="tw-text-sm tw-text-ic-ink-6 tw-mb-0">
                  {common("switchTo")}
                </p>
                <Link
                  href={orgHref}
                  className="tw-flex tw-gap-1 tw-no-underline"
                >
                  <p className="tw-text-sm tw-mb-0">{common("organization")}</p>
                  <Image
                    src={expand}
                    alt="Organization"
                    className="tw-mt-auto tw-w-4 tw-h-4"
                  />
                </Link>
              </div>
              <div className="tw-mt-2">
                {(convertApp ?? []).map((item) => {
                  if (item.workspaces.length > 0) {
                    return <AppItem key={item.applicationId} item={item} />;
                  }
                  return <></>;
                })}
              </div>
            </div>
            <div className="tw-mt-4">
              <p className="tw-text-xs tw-font-medium tw-leading-5 tw-text-neutral-6 tw-uppercase tw-mb-0">
                {common("workspaces")}
              </p>
              <div className="tw-mt-2">
                <SideBarItem listMenus={settingWorkspaces} />
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

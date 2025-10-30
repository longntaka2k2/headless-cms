"use client";
import { getProfile } from "@/public/api/auth";
import IProfile from "@/types/response";
import Cookies from "js-cookie";
import Link from "next/link";
import { Popover, Transition } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

const HeaderUser = ({ lang }: { lang: any }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [dataUser, setDataUser] = useState<IProfile>();

  const getAuth = async () => {
    try {
      const data = await getProfile();
      setDataUser(data.data as IProfile);
      setIsAuth(true);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  useEffect(() => {
    getAuth();
  }, []);

  const logout = () => {
    Cookies.remove("accessToken");
    Cookies.remove("refreshToken");
    localStorage.removeItem("user_id");
    window.location.reload();
  };

  const signInItems = [
    {
      name: lang.header.listLogin[0],
      href: "https://portal.ezbuy.jp/auth/login",
    },
    {
      name: lang.header.listLogin[1],
      href: "#",
    },
  ];

  return (
    <div>
      {isAuth ? (
        <div className="flex items-center py-2 px-4 ">
          <Popover className="relative">
            <Popover.Button className="flex items-center">
              <div className="flex items-center  gap-2">
                <Image
                  src={
                    "https://strapi-efex.ichiba.net/uploads/Group_aea098d320.svg"
                  }
                  width={24}
                  height={24}
                  className="mr-2"
                  alt="navmain"
                />
                <div className="max-w-[80px] whitespace-nowrap text-overflow overflow-hidden">
                  {dataUser?.fullName ? dataUser?.fullName : dataUser?.email}
                </div>
                <FontAwesomeIcon className="" icon={faChevronDown} />
              </div>
            </Popover.Button>
            <Popover.Overlay className="fixed inset-0 bg-black opacity-10" />
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 w-[230px] top-full z-10 mt-3 max-w-md overflow-hidden bg-white shadow-4 ring-1 ring-gray-900/5">
                <div className="p-4">
                  <div className="flex items-center gap-2">
                    <div>
                      {dataUser?.fullName
                        ? dataUser?.fullName
                        : dataUser?.email}
                    </div>
                  </div>
                  <div className="grid py-2">
                    <Link
                      href={"https://portal.ezbuy.jp/account"}
                      className="flex py-2 gap-2 items-center"
                    >
                      <Image
                        src={
                          "https://strapi-efex.ichiba.net/uploads/Group_c6eb519a69.svg"
                        }
                        width={24}
                        height={24}
                        className=""
                        alt="navmain"
                      />
                      <div>My account</div>
                    </Link>
                    <Link
                      href={"https://portal.ezbuy.jp/account/manage-package"}
                      className="flex py-2 gap-2 items-center"
                    >
                      <Image
                        src={
                          "https://strapi-efex.ichiba.net/uploads/Group_bba3280929.svg"
                        }
                        width={24}
                        height={24}
                        className=""
                        alt="navmain"
                      />
                      <div>My package</div>
                    </Link>
                    <Link
                      href={"https://portal.ezbuy.jp/"}
                      className="flex py-2 gap-2 items-center"
                    >
                      <Image
                        src={
                          "https://strapi-efex.ichiba.net/uploads/Group_559dffa8f9.svg"
                        }
                        width={24}
                        height={24}
                        className=""
                        alt="navmain"
                      />
                      <div>My Wishlist</div>
                    </Link>
                  </div>
                  <Link
                    href={"/"}
                    className="flex py-2 gap-2 items-center text-[#F5222D]"
                  >
                    <Image
                      src={
                        "https://strapi-efex.ichiba.net/uploads/Group_b61ee5a3ba.svg"
                      }
                      width={24}
                      height={24}
                      className=""
                      alt="navmain"
                    />
                    <div onClick={() => logout()}>{lang?.header?.logout}</div>
                  </Link>
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
        </div>
      ) : (
        // <Link href={"https://portal.ezbuy.jp/auth/login"} className="mr-2">
        //   {lang?.header?.login}
        // </Link>
        <Popover className="relative">
          <Popover.Button className="flex items-center">
            <div className="flex items-center">
              {lang?.header?.login}
              <FontAwesomeIcon className="ml-2" icon={faChevronDown} />
            </div>
          </Popover.Button>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute left-[-32px] top-full py-2 w-[232px] z-20 mt-3 rounded-xl bg-white shadow-[0px_8px_16px_0px_rgba(0,_0,_0,_0.15);] ">
              {signInItems.map((value, index) => (
                <div
                  className="flex justify-between items-center py-2 px-3"
                  key={index}
                >
                  <Link
                    href={value.href}
                    className="py-1 px-3 w-full hover:text-brand-secondary-active font-semibold"
                  >
                    {value.name}
                  </Link>
                </div>
              ))}
            </Popover.Panel>
          </Transition>
        </Popover>
      )}
    </div>
  );
};

export default HeaderUser;

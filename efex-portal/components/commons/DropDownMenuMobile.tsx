"use client";

import {
  faChevronDown,
  faCheck,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Popover, Transition } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Cookies from "js-cookie";
import { getProfile } from "@/public/api/auth";
import IProfile from "@/types/response";

const DropDownMenuMobile = ({ lang }: { lang: any }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [dataUser, setDataUser] = useState<IProfile>();
  const [isOpenItemMobile, setItemMobile] = useState(false);

  const getAuth = async () => {
    try {
      const data = await getProfile();
      setIsAuth(true);
    } catch (error) {
      // Xử lý lỗi khi gọi API không thành công
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
      name: lang.header.signInPortal,
      href: "https://portal.efex.vn/auth/login",
    },
    {
      name: lang.header.signInB2B,
      href: "/b2b-warehouse-fulfillment",
    },
  ];

  return (
    <div className="flex items-center mx-4 cursor-pointer bg-white">
      {isAuth ? (
        <div className=" ">
          <Image
            src={"https://strapi-efex.ichiba.net/uploads/Group_aea098d320.svg"}
            width={30}
            height={30}
            className=""
            alt="navmain"
            onClick={() => setItemMobile(true)}
          />
          <div
            className={`tab-item-header !top-12 ${
              isOpenItemMobile ? "slide-in" : "hidden "
            } `}
          >
            <div className="tab">
              <div
                className=" flex gap-2 items-center border-b border-line "
                onClick={() => setItemMobile(false)}
              >
                <FontAwesomeIcon
                  icon={faArrowLeft}
                  className={`mr-1 ${isOpenItemMobile ? "" : "hidden"}`}
                />
                <div className="text-base">
                  {dataUser?.fullName ? dataUser?.fullName : dataUser?.email}
                </div>
              </div>
              <div className=" pt-3">
                <div className="grid py-2">
                  <Link
                    href={"https://portal.efex.vn/"}
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
                    href={"https://portal.efex.vn/account/manage-package"}
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
                  <Link href={"/"} className="flex py-2 gap-2 items-center">
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
                  <div onClick={() => logout()}>Log out</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        // <Link
        //   href={"https://portal.efex.vn/auth/login"}
        //   className="text-contact "
        // >
        //   {lang?.header?.signIn}
        // </Link>

        <Popover className="relative">
          <Popover.Button className="flex items-center">
            <div className="flex items-center text-brand-primary">
              {lang?.header?.signIn}
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
            <Popover.Panel className="absolute -left-36 top-full py-2 w-[232px] z-20 mt-3 rounded-xl bg-white shadow-[0px_8px_16px_0px_rgba(0,_0,_0,_0.15);] ">
              {signInItems.map((value, index) => (
                <div
                  className="flex justify-between items-center py-2 px-3"
                  key={index}
                >
                  <Link
                    href={value.href}
                    className="py-1 px-3 w-full hover:text-brand-primary-active font-semibold"
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

export default DropDownMenuMobile;

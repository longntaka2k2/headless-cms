import address from "@/public/icons/header/address.svg";
import logout from "@/public/icons/header/logout.svg";
import profile from "@/public/icons/header/profile.svg";
import security from "@/public/icons/header/security.svg";
import login from "@/public/icons/header/login.svg";


let host = typeof window !== "undefined" ? window.location.origin : "";

const item = {
    list: [
        //    {title:'profile',icons:profile},
        //    {title:'login',icons:login},
        //    {title:'address',icons:address},
        //    {title:'security',icons:security},
        {
            title: 'logout', icons: logout, url: host === "https://ichiba.vn"
                ? "https://api.ichiba.vn/account/logout?redirectUrl=https%3A%2F%2Fichiba.vn"
                : "https://api.ichiba.net/account/logout?redirectUrl=https%3A%2F%2Fichiba.net"
        },
    ]
}

export default item;
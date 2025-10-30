"use client";
import Image from "next/image";
import Link from "next/link";
import Form from "./Form";

const Footer = ({ ref }: any) => {
  const listAddress = [
    {
      addressName: "Singapore",
      location: "470 North Bridge road, Bugis Cube, Singapore",
    },
    {
      addressName: "Ho Chi Minh, Vietnam",
      location:
        "No. 55 Sam Son, Ward 4, Tan Binh District, Ho Chi Minh City, Vietnam 72517.",
    },
    {
      addressName: "Hanoi, Vietnam",
      location:
        "No .8 Le Quang Dao, Phu Do Ward, Nam Tu Liem District, Hanoi, Vietnam.",
    },
    {
      addressName: "Japan",
      location: "3-chōme-10-8 Shinsuna, Koto City, Tokyo 136-0075, Japan",
    },
  ];

  const listSocials = [
    {
      icon: "https://cms-strapi.ichiba.net/uploads/Facebook_505f7d0e94.svg",
      link: "#",
    },
    {
      icon: "https://cms-strapi.ichiba.net/uploads/Group_48b5d72e0d.svg",
      link: "#",
    },
    {
      icon: "https://cms-strapi.ichiba.net/uploads/Group1_f14e9ef6f5.svg",
      link: "#",
    },
  ];
  return (
    <div
      ref={ref}
      id="footer"
      className="tw-pt-6 tw-pb-10 lg:tw-pt-15 lg:tw-pb-5 tw-overflow-hidden tw-bg-[url('https://cms-strapi.ichiba.net/uploads/Footer_d68a1b8057.svg')] tw-px-4 xl:tw-px-0"
    >
      <div className="tw-container">
        <div className="tw-px-4 lg:tw-px-0 tw-flex tw-flex-col lg:tw-flex-row-reverse tw-gap-6 lg:tw-gap-20 tw-mb-6 lg:tw-mb-5">
          <div className="lg:tw-w-[45%]">
            <Form />
          </div>
          <div className="lg:tw-w-[55%] tw-flex tw-flex-col tw-gap-6 itemce tw-justify-between">
            <div>
              <Image
                src={
                  "https://cms-strapi.ichiba.net/uploads/Logo_6ed43df9b6.svg"
                }
                width={149}
                height={40}
                alt="EFEX"
                className="tw-w-[149px] tw-h-10 tw-mb-2 lg:tw-mb-4"
              />
              <p className="tw-text-sm lg:tw-text-lg tw-text-brand-primary tw-font-bold tw-mb-4 lg:tw-mb-10 tw-uppercase">
                Công ty cổ phần IChiba OnePlatform
              </p>
            </div>

            <div className="tw-grid lg:tw-grid-cols-2 tw-gap-6">
              {listAddress.map((item, index) => (
                <div key={index} className="tw-flex tw-gap-4">
                  <Image
                    src={
                      "https://cms-strapi.ichiba.net/uploads/Frame_21143_abfaf75d5e.svg"
                    }
                    width={32}
                    height={32}
                    alt="icon-location"
                    className="tw-w-8 tw-h-8"
                  />
                  <div>
                    <p className="tw-text-base tw-font-medium tw-mb-1">
                      {item.addressName}
                    </p>
                    <p className="tw-text-sm tw-mb-0">{item.location}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="tw-mt-auto">
              <p className="tw-text-lg tw-font-bold tw-mb-4 lg:tw-mb-6 tw-text-[#00194F] tw-uppercase">
                Kết nối với chúng tôi
              </p>
              <div className="tw-flex tw-items-center tw-gap-4">
                {listSocials.map((item, index) => (
                  <Link
                    href={item.link}
                    key={index}
                    className="tw-w-12 tw-h-12 tw-rounded-full tw-flex tw-items-center tw-justify-center tw-bg-[rgba(255,_255,_255,_0.90)]"
                  >
                    <Image
                      src={item.icon}
                      width={24}
                      height={24}
                      alt="icon-social"
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="tw-pt-6 lg:tw-pt-5 tw-border-t tw-border-ic-ink-2">
          <div className="tw-flex tw-flex-col lg:tw-flex-row-reverse lg:tw-items-center tw-gap-6 lg:tw-justify-between">
            <div className="tw-flex tw-items-center tw-gap-4">
              <p className="tw-text-sm tw-mb-0 tw-text-ic-ink-6">
                Terms & Conditions
              </p>
              |
              <p className="tw-text-sm tw-mb-0 tw-text-ic-ink-6">
                Privacy Policy
              </p>
            </div>
            <p className="tw-text-sm tw-mb-0">
              © 2024 IChibaOne Platform. All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

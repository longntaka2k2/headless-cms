import { useTranslation } from "next-i18next";
import Image from "next/image"
const CustomerSay = () => {
  const p = useTranslation("proxy-shopping").t;

  return(
    <div className=" tw-mx-4 lg:tw-container lg:tw-mb-[130px] tw-mb-6">
      <div className="tw-py-6 tw-px-4 tw-bg-[#F9F5EF] tw-rounded-2xl lg:tw-p-15"> 
        <div className=" lg:tw-flex lg:tw-gap-20 ">
          <div>
            <div className="tw-text-sm lg:tw-text-lg">
              {p("customer.items.0.content")}
            </div>
            <div className="tw-mt-4 lg:tw-mt-6 tw-flex tw-gap-4">
              <Image
                src="https://cms-strapi.ichiba.net/uploads/Avatar_341b2eeb8d.png"
                alt="customer"
                width={40}
                height={40}
              />
              <div className="">
                <div className="tw-font-bold tw-text-sm lg:tw-text-xl">
                  {p("customer.items.0.name")}
                </div>
                <div className=" tw-text-xs lg:tw-text-sm">
                  {p("customer.items.0.bio")}
                </div>
              </div>
            </div>
          </div>
          <div className="lg:tw-min-w-[435px] lg:tw-h-[340px]">
            <Image
              src="https://cms-strapi.ichiba.net/uploads/Frame_1171276456_337067907f.png"
              alt="customer"
              width={668}
              height={723}
              className="tw-mt-6 lg:tw-mt-0 tw-w-full "
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CustomerSay
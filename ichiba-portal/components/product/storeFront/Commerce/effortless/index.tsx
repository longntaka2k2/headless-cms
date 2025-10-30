import { useTranslation } from "next-i18next";
import Image from "next/image";

const Effortless = () => {
  const b = useTranslation("build-store-front").t;

  return (
    <div className="tw-px-4 tw-pt-4 tw-pb-6 lg:tw-pb-10 ">
      <div className="lg:tw-container">
        <div className="tw-text-2xl tw-font-bold lg:tw-text-4xl lg:tw-max-w-[52%] tw-max-w-[300px]">
          {b("commerceSite.effortless.title")}
        </div>
        <div className="tw-mt-5 lg:tw-mt-10 tw-grid lg:tw-grid-cols-12 tw-gap-4 lg:tw-gap-6">
          <div className="tw-px-4 tw-pt-4 lg:tw-px-6 lg:tw-pt-6 tw-rounded-lg tw-bg-[#F6F7F9] lg:tw-grid tw-content-between lg:tw-col-span-4">
            <div>
              <Image
                src="https://cms-strapi.ichiba.net/uploads/Frame_1171275893_af65839c17.svg"
                alt="integrate"
                width={48}
                height={48}
              />
              <div className="tw-mt-5 ">
                <div className="tw-text-lg lg:tw-text-xl tw-font-bold">
                  {b("commerceSite.effortless.integrate.title")}
                </div>
                <div className="tw-mt-2 tw-text-sm lg:tw-text-base">
                  {b("commerceSite.effortless.integrate.content")}
                </div>
              </div>
            </div>
            <Image
              src="https://cms-strapi.ichiba.net/uploads/Frame_1171275890_85b8555717.svg"
              className="tw-mt-5 tw-w-full lg:tw-mt-0"
              alt="integrate"
              width={338}
              height={257}
            />
          </div>
          <div className="lg:tw-col-span-8 tw-grid lg:tw-grid tw-gap-4 lg:tw-gap-6">
            <div className="tw-grid lg:tw-grid-cols-2 tw-gap-4 lg:tw-gap-6">
              <div className="tw-p-4 lg:tw-p-6 tw-rounded-lg tw-bg-[#F6F7F9] tw-flex tw-gap-5">
                <Image
                  src="https://cms-strapi.ichiba.net/uploads/Frame_1171275893_af65839c17.svg"
                  alt="integrate"
                  width={48}
                  height={48}
                />
                <div className="tw-mt-5 lg:tw-mt-0">
                  <div className="tw-text-lg lg:tw-text-xl tw-font-bold">
                    {b("commerceSite.effortless.getReal.title")}
                  </div>
                  <div className="tw-mt-2 tw-text-sm lg:tw-text-base">
                    {b("commerceSite.effortless.getReal.content")}
                  </div>
                </div>
              </div>
              <div className="tw-p-4 lg:tw-p-6 tw-rounded-lg tw-bg-[#F6F7F9] tw-flex tw-gap-5">
                <Image
                  src="https://cms-strapi.ichiba.net/uploads/Frame_1171275893_af65839c17.svg"
                  alt="integrate"
                  width={48}
                  height={48}
                />
                <div className="tw-mt-5 lg:tw-mt-0">
                  <div className="tw-text-lg lg:tw-text-xl tw-font-bold">
                    {b("commerceSite.effortless.manage.title")}
                  </div>
                  <div className="tw-mt-2 tw-text-sm lg:tw-text-base">
                    {b("commerceSite.effortless.manage.content")}
                  </div>
                </div>
              </div>
            </div>
            <div className="tw-grid lg:tw-flex tw-gap-4 lg:tw-gap-6">
              <div className="tw-p-4 lg:tw-p-6 tw-rounded-lg tw-bg-[#F9F5EF] tw-shadow-[0px_8px_16px_0px_rgba(0,0,0,0.05)] lg:tw-min-w-[485px]">
                <div className="">
                  <div className="tw-text-lg lg:tw-text-xl tw-font-bold">
                    {b("commerceSite.effortless.manage.title")}
                  </div>
                  <div className="tw-mt-2 tw-text-sm lg:tw-text-base">
                    {b("commerceSite.effortless.manage.content")}
                  </div>
                </div>
                <Image
                  src="https://cms-strapi.ichiba.net/uploads/as_5aab6b3c01.svg"
                  className="tw-mt-5 tw-w-full tw-max-w-[442px]"
                  alt="integrate"
                  width={442}
                  height={170}
                />
              </div>
              <div className="tw-px-4 tw-pt-4 lg:tw-px-6 lg:tw-pt-6 tw-rounded-lg tw-bg-[#F6F7F9]">
                <div className="">
                  <div className="tw-text-lg lg:tw-text-xl tw-font-bold">
                    {b("commerceSite.effortless.manage.title")}
                  </div>
                  <div className="tw-mt-2 tw-text-sm lg:tw-text-base">
                    {b("commerceSite.effortless.manage.content")}
                  </div>
                </div>
                <Image
                  src="https://cms-strapi.ichiba.net/uploads/Group_1171275917_c2ed8322d9.svg"
                  className="tw-mt-5 tw-w-full tw-max-w-[442px]"
                  alt="integrate"
                  width={772}
                  height={436}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Effortless;

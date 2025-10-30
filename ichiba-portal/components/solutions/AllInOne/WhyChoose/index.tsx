import clsx from "clsx";
import { useTranslation } from "next-i18next";
import Image from "next/image";
const WhyChoose = () => {
  const a = useTranslation("all-in-one").t;

  return (
    <div
      className={clsx(
        "tw-bg-[#05102A] tw-text-white",
        "tw-bg-[url(https://cms-strapi.ichiba.net/uploads/dd_5f8343f6a0.png)] tw-bg-cover",
        "lg:tw-bg-[url(https://cms-strapi.ichiba.net/uploads/ddd_6c7cc32d9f.png)]",
      )}
    >
      <div className="tw-py-6 tw-px-4 lg:tw-container lg:tw-px-0 lg:tw-py-[60px]">
        <h2 className="tw-text-2xl tw-font-bold tw-text-center lg:tw-text-4xl">
          {a("whyChoose.title")}
        </h2>
        <div className="tw-grid tw-gap-3 tw-mt-5 lg:tw-hidden ">
          <div className="tw-rounded-lg tw-bg-[rgba(255,255,255,0.08)] tw-px-4 tw-py-3">
            <div className="tw-flex tw-gap-2">
              <div className="tw-text-[#61A3FF]">01</div>
              <h3 className="tw-font-bold tw-text-base tw-mb-0">
                {a("whyChoose.compatibility.title")}
              </h3>
            </div>
            <div className="tw-mt-5 tw-text-sm tw-opacity-80">
              {a("whyChoose.compatibility.content")}
            </div>
          </div>
          <div className="tw-rounded-lg tw-bg-[rgba(255,255,255,0.08)] tw-px-4 tw-py-3">
            <div className="tw-flex tw-gap-2">
              <div className="tw-text-[#61A3FF]">02</div>
              <h3 className="tw-font-bold tw-text-base tw-mb-0">
                {a("whyChoose.userFiend.title")}
              </h3>
            </div>
            <div className="tw-mt-5 tw-text-sm tw-opacity-80">
              {a("whyChoose.userFiend.content")}
            </div>
          </div>
          <div className="tw-rounded-lg tw-bg-[rgba(255,255,255,0.08)] tw-px-4 tw-py-3">
            <div className="tw-flex tw-gap-2">
              <div className="tw-text-[#61A3FF]">03</div>
              <h3 className="tw-font-bold tw-text-base tw-mb-0">
                {a("whyChoose.costEffect.title")}
              </h3>
            </div>
            <div className="tw-mt-5 tw-text-sm tw-opacity-80">
              {a("whyChoose.costEffect.content")}
            </div>
          </div>
          <div className="tw-rounded-lg tw-bg-[rgba(255,255,255,0.08)] tw-px-4 tw-py-3">
            <div className="tw-flex tw-gap-2">
              <div className="tw-text-[#61A3FF]">04</div>
              <h3 className="tw-font-bold tw-text-base tw-mb-0">
                {a("whyChoose.functional.title")}
              </h3>
            </div>
            <div className="tw-mt-5 tw-text-sm tw-opacity-80">
              {a("whyChoose.functional.content")}
            </div>
          </div>
        </div>
        <div className="lg:tw-flex tw-gap-6 tw-hidden lg:tw-mt-8">
          <div className="tw-rounded-lg tw-bg-[rgba(255,255,255,0.08)] tw-p-5 tw-min-w-[486px]">
            <div className="tw-grid tw-gap-2">
              <div className="tw-text-[#61A3FF] tw-text-lg">01</div>
              <h3 className="tw-font-bold tw-text-lg">
                {a("whyChoose.compatibility.title")}
              </h3>
            </div>
            <div className="tw-mt-2 tw-opacity-80">
              {a("whyChoose.compatibility.content")}
            </div>
          </div>
          <div className="tw-grid tw-gap-6">
            <div className="tw-grid tw-grid-cols-2 tw-gap-6">
              <div className="tw-rounded-lg tw-bg-[rgba(255,255,255,0.08)] tw-p-5 tw-py-3">
                <div className="tw-grid tw-gap-2">
                  <div className="tw-text-[#61A3FF]">02</div>
                  <h3 className="tw-font-bold tw-text-lg">
                    {a("whyChoose.userFiend.title")}
                  </h3>
                </div>
                <div className="tw-mt-2 tw-opacity-80">
                  {a("whyChoose.userFiend.content")}
                </div>
              </div>
              <div className="tw-rounded-lg tw-bg-[rgba(255,255,255,0.08)] tw-px-4 tw-py-3">
                <div className="tw-grid tw-gap-2">
                  <div className="tw-text-[#61A3FF]">03</div>
                  <h3 className="tw-font-bold tw-text-lg">
                    {a("whyChoose.costEffect.title")}
                  </h3>
                </div>
                <div className="tw-mt-2 tw-opacity-80">
                  {a("whyChoose.costEffect.content")}
                </div>
              </div>
            </div>
            <div className="tw-rounded-lg tw-bg-[rgba(255,255,255,0.08)] tw-p-5">
              <div className="tw-grid tw-gap-2">
                <div className="tw-text-[#61A3FF]">04</div>
                <h3 className="tw-font-bold tw-text-lg">
                  {a("whyChoose.functional.title")}
                </h3>
              </div>
              <div className="tw-mt-2  tw-opacity-80">
                {a("whyChoose.functional.content")}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default WhyChoose;

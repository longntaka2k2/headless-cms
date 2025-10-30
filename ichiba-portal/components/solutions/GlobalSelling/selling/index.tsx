import clsx from "clsx";
import { useTranslation } from "next-i18next";
import { useState } from "react";
import Image from "next/image";
const Selling = () => {
  const [active, setActive] = useState(0 as number);
  const g = useTranslation("global-selling").t;

  return (
    <div
      className={clsx(
        "tw-bg-[#091A3E] tw-px-4 tw-py-6 lg:tw-px-0 lg:tw-py-20 tw-text-white tw-relative tw-overflow-hidden ",
        " tw-bg-[url(https://cms-strapi.ichiba.net/uploads/Group_0c1dea698e.svg)] tw-bg-no-repeat",
        "lg:tw-bg-[url(https://cms-strapi.ichiba.net/uploads/Group_4bf5368b68.svg)]",
      )}
      style={{ backgroundPosition: "bottom center" }}
    >
      <div className="tw-absolute tw-w-[550px] tw-h-[550px] tw-bg-[#2C4B8E] tw-blur-[200px] tw-top-[40%] tw-left-[35%] tw-z-[0]"></div>
      <div className="tw-container">
        <div className="tw-grid tw-gap-3 lg:tw-grid-cols-2 lg:tw-gap-[120px] tw-items-center">
          <div className="tw-flex tw-flex-col tw-justify-between tw-h-full">
            <h2 className="tw-text-2xl lg:tw-text-4xl tw-font-bold tw-mb-0">
              {g("selling.title")}
            </h2>
            <div className="tw-p-1 lg:tw-rounded-full tw-bg-[rgba(120,140,183,0.47)] tw-max-w-max tw-hidden lg:tw-flex">
              <div
                onClick={() => setActive(0)}
                className={clsx(
                  "tw-font-bold tw-py-2 tw-px-7 lg:tw-rounded-full tw-text-lg tw-cursor-pointer",
                  active === 0
                    ? "tw-bg-[linear-gradient(0deg,#F57C00_-0.66%,#FAC286_99.49%)]"
                    : "",
                )}
              >
                {g("selling.buyYourSelf.title")}
              </div>
              <div
                onClick={() => setActive(1)}
                className={clsx(
                  "tw-font-bold tw-py-2 tw-px-7 lg:tw-rounded-full tw-text-lg tw-cursor-pointer",
                  active === 1
                    ? "tw-bg-[linear-gradient(0deg,#F57C00_-0.66%,#FAC286_99.49%)]"
                    : "",
                )}
              >
                {g("selling.withIChibaOne.title")}
              </div>
            </div>
          </div>
          <div className="tw-mt-3 lg:tw-mt-0">
            <div className="tw-font-bold tw-text-base lg:tw-text-lg">
              {g("selling.created")}
            </div>
            <div className="tw-mt-2 tw-text-sm lg:tw-text-base tw-opacity-80">
              {g("selling.iChibaOne")}
            </div>
            <div className="tw-mt-5 tw-p-1 tw-rounded-full tw-bg-[rgba(120,140,183,0.47)] tw-flex tw-max-w-max lg:tw-hidden">
              <div
                onClick={() => setActive(0)}
                className={clsx(
                  "tw-font-bold tw-py-2 tw-px-5 tw-rounded-full tw-text-sm tw-cursor-pointer",
                  active === 0
                    ? "tw-bg-[linear-gradient(0deg,#F57C00_-0.66%,#FAC286_99.49%)]"
                    : "",
                )}
              >
                {g("selling.buyYourSelf.title")}
              </div>
              <div
                onClick={() => setActive(1)}
                className={clsx(
                  "tw-font-bold tw-py-2 tw-px-5 tw-rounded-full tw-text-sm tw-cursor-pointer",
                  active === 1
                    ? "tw-bg-[linear-gradient(0deg,#F57C00_-0.66%,#FAC286_99.49%)]"
                    : "",
                )}
              >
                {g("selling.withIChibaOne.title")}
              </div>
            </div>
          </div>
        </div>

        {active === 0 ? (
          <div className="tw-mt-5 lg:tw-mt-12 tw-py-6 lg:tw-py-[52px] tw-rounded-lg lg:tw-rounded-2xl tw-bg-[rgba(3,_17,_45,_0.60)]">
            <div className="overflow-x-scroll lg:tw-hidden pb-4 tw-w-full">
              <div className="tw-w-[351px] tw-h-[639px] tw-mx-auto overflow-hidden tw-relative">
                <Image
                  src="https://cms-strapi.ichiba.net/uploads/Group_1171275983_0096c6c3f6.svg"
                  width={351}
                  height={639}
                  alt="ichiba"
                  className="tw-w-full tw-h-full"
                />

                <div className="tw-absolute tw-left-[50%] -tw-translate-x-[50%] tw-top-0 tw-p-2 tw-rounded-xl tw-bg-[#3D5077]">
                  <Image
                    src="https://cms-strapi.ichiba.net/uploads/Image_0b05f43421.svg"
                    width={62}
                    height={45}
                    alt="icon"
                    className="tw-mx-auto"
                  />
                  <p className="tw-text-sm tw-font-bold tw-mb-0 tw-mt-3 tw-text-center">
                    {g("selling.buyYourSelf.sellers")}
                  </p>
                </div>

                <div className="tw-text-xs tw-text-[rgba(255,_255,_255,_0.80)] tw-mb-0 tw-absolute tw-top-[26%] tw-left-[2%] tw-max-w-[56px] tw-w-full tw-text-center">
                  {g("selling.buyYourSelf.items.0.label")}
                </div>

                <div
                  className={clsx(
                    "tw-py-2 tw-px-4 tw-flex tw-gap-4 tw-items-center tw-rounded-lg tw-bg-[rgba(255,_255,_255,_0.08)] tw-border tw-border-[#586A9A] tw-max-w-[183px] tw-w-full",
                    "tw-absolute tw-bottom-[44%] tw-left-[-16%] tw-rotate-90",
                  )}
                >
                  <Image
                    src={g("selling.buyYourSelf.items.0.icon") as string}
                    width={40}
                    height={40}
                    alt="icon"
                    className="tw-w-7 tw-h-7 -tw-rotate-90"
                  />
                  <p className="tw-text-xs tw-font-medium tw-mb-0">
                    {g("selling.buyYourSelf.items.0.content")}
                  </p>
                </div>

                <div className="tw-text-xs tw-text-[rgba(255,_255,_255,_0.80)] tw-mb-0 tw-absolute tw-top-[26%] tw-left-[28%] tw-max-w-[56px] tw-w-full tw-text-center">
                  {g("selling.buyYourSelf.items.1.label")}
                </div>

                <div
                  className={clsx(
                    "tw-py-2 tw-px-4 tw-flex tw-gap-4 tw-items-center tw-rounded-lg tw-bg-[rgba(255,_255,_255,_0.08)] tw-border tw-border-[#586A9A] tw-max-w-[183px] tw-w-full",
                    "tw-absolute tw-bottom-[44%] tw-left-[11%] tw-rotate-90",
                  )}
                >
                  <Image
                    src={g("selling.buyYourSelf.items.1.icon") as string}
                    width={40}
                    height={40}
                    alt="icon"
                    className="tw-w-7 tw-h-7 -tw-rotate-90"
                  />
                  <p className="tw-text-xs tw-font-medium tw-mb-0">
                    {g("selling.buyYourSelf.items.1.content")}
                  </p>
                </div>

                <div className="tw-text-xs tw-text-[rgba(255,_255,_255,_0.80)] tw-mb-0 tw-absolute tw-top-[26%] tw-right-[28%] tw-max-w-[56px] tw-w-full tw-text-center">
                  {g("selling.buyYourSelf.items.2.label")}
                </div>

                <div
                  className={clsx(
                    "tw-py-2 tw-px-4 tw-flex tw-gap-4 tw-items-center tw-rounded-lg tw-bg-[rgba(255,_255,_255,_0.08)] tw-border tw-border-[#586A9A] tw-max-w-[183px] tw-w-full",
                    "tw-absolute tw-bottom-[44%] tw-right-[11%] tw-rotate-90",
                  )}
                >
                  <Image
                    src={g("selling.buyYourSelf.items.2.icon") as string}
                    width={40}
                    height={40}
                    alt="icon"
                    className="tw-w-7 tw-h-7 -tw-rotate-90"
                  />
                  <p className="tw-text-xs tw-font-medium tw-mb-0">
                    {g("selling.buyYourSelf.items.2.content")}
                  </p>
                </div>

                <div className="tw-text-xs tw-text-[rgba(255,_255,_255,_0.80)] tw-mb-0 tw-absolute tw-top-[26%] tw-right-[2%] tw-max-w-[56px] tw-w-full tw-text-center">
                  {g("selling.buyYourSelf.items.3.label")}
                </div>

                <div
                  className={clsx(
                    "tw-py-2 tw-px-4 tw-flex tw-gap-4 tw-items-center tw-rounded-lg tw-bg-[rgba(255,_255,_255,_0.08)] tw-border tw-border-[#586A9A] tw-max-w-[183px] tw-w-full",
                    "tw-absolute tw-bottom-[44%] tw-right-[-16%] tw-rotate-90",
                  )}
                >
                  <Image
                    src={g("selling.buyYourSelf.items.3.icon") as string}
                    width={40}
                    height={40}
                    alt="icon"
                    className="tw-w-7 tw-h-7 -tw-rotate-90"
                  />
                  <p className="tw-text-xs tw-font-medium tw-mb-0">
                    {g("selling.buyYourSelf.items.3.content")}
                  </p>
                </div>

                <div className="tw-absolute tw-left-[50%] -tw-translate-x-[50%] tw-bottom-0 tw-p-2 tw-rounded-xl tw-bg-[#3D5077]">
                  <Image
                    src="https://cms-strapi.ichiba.net/uploads/OBJECTS_48f2449fc6.svg"
                    width={60}
                    height={60}
                    alt="icon"
                    className="tw-mx-auto"
                  />
                  <p className="tw-text-sm tw-font-bold tw-mb-0 tw-mt-3 tw-text-center">
                    {g("selling.buyYourSelf.customers.0")}
                  </p>
                  <p className="tw-text-xs tw-text-[rgba(255,_255,_255,_0.80)] tw-mb-0 tw-text-center">
                    {g("selling.buyYourSelf.customers.1")}
                  </p>
                </div>
              </div>
            </div>

            <div className="overflow-x-scroll tw-hidden lg:tw-block pb-4">
              <div className="tw-w-[1115px] tw-h-[377px] tw-mx-auto overflow-hidden tw-relative">
                <Image
                  src="https://cms-strapi.ichiba.net/uploads/Group_1171275919_7b3b6fb400.svg"
                  width={1115}
                  height={377}
                  alt="ichiba"
                  className="tw-w-full tw-h-full"
                />

                <div className="tw-absolute tw-top-[50%] -tw-translate-y-[50%] tw-left-0 tw-p-4 tw-rounded-xl tw-bg-[#3D5077]">
                  <Image
                    src="https://cms-strapi.ichiba.net/uploads/Image_0b05f43421.svg"
                    width={62}
                    height={45}
                    alt="icon"
                    className="tw-mx-auto"
                  />
                  <p className="tw-text-base tw-font-bold tw-mb-0 tw-mt-4 tw-text-center">
                    {g("selling.buyYourSelf.sellers")}
                  </p>
                </div>

                <div className="tw-text-base tw-text-[rgba(255,_255,_255,_0.80)] tw-mb-0 tw-absolute tw-top-[8%] tw-left-[17%]">
                  {g("selling.buyYourSelf.items.0.label")}
                </div>

                <div
                  className={clsx(
                    "tw-py-2 tw-px-4 tw-flex tw-gap-4 tw-items-center tw-rounded-lg tw-bg-[rgba(255,_255,_255,_0.08)] tw-border tw-border-[#586A9A] tw-max-w-[260px] tw-w-full",
                    "tw-absolute tw-top-[3%] tw-left-[37%]",
                  )}
                >
                  <Image
                    src={g("selling.buyYourSelf.items.0.icon") as string}
                    width={40}
                    height={40}
                    alt="icon"
                  />
                  <p className="tw-text-base tw-font-medium tw-mb-0">
                    {g("selling.buyYourSelf.items.0.content")}
                  </p>
                </div>

                <div className="tw-text-base tw-text-[rgba(255,_255,_255,_0.80)] tw-mb-0 tw-absolute tw-top-[33%] tw-left-[17%]">
                  {g("selling.buyYourSelf.items.1.label")}
                </div>

                <div
                  className={clsx(
                    "tw-py-2 tw-px-4 tw-flex tw-gap-4 tw-items-center tw-rounded-lg tw-bg-[rgba(255,_255,_255,_0.08)] tw-border tw-border-[#586A9A] tw-max-w-[260px] tw-w-full",
                    "tw-absolute tw-top-[29%] tw-left-[37%]",
                  )}
                >
                  <Image
                    src={g("selling.buyYourSelf.items.1.icon") as string}
                    width={40}
                    height={40}
                    alt="icon"
                  />
                  <p className="tw-text-base tw-font-medium tw-mb-0">
                    {g("selling.buyYourSelf.items.1.content")}
                  </p>
                </div>

                <div className="tw-text-base tw-text-[rgba(255,_255,_255,_0.80)] tw-mb-0 tw-absolute tw-bottom-[35%] tw-left-[17%]">
                  {g("selling.buyYourSelf.items.2.label")}
                </div>

                <div
                  className={clsx(
                    "tw-py-2 tw-px-4 tw-flex tw-gap-4 tw-items-center tw-rounded-lg tw-bg-[rgba(255,_255,_255,_0.08)] tw-border tw-border-[#586A9A] tw-max-w-[260px] tw-w-full",
                    "tw-absolute tw-bottom-[30%] tw-left-[37%]",
                  )}
                >
                  <Image
                    src={g("selling.buyYourSelf.items.2.icon") as string}
                    width={40}
                    height={40}
                    alt="icon"
                  />
                  <p className="tw-text-base tw-font-medium tw-mb-0">
                    {g("selling.buyYourSelf.items.2.content")}
                  </p>
                </div>

                <div className="tw-text-base tw-text-[rgba(255,_255,_255,_0.80)] tw-mb-0 tw-absolute tw-bottom-[9%] tw-left-[17%]">
                  {g("selling.buyYourSelf.items.3.label")}
                </div>

                <div
                  className={clsx(
                    "tw-py-2 tw-px-4 tw-flex tw-gap-4 tw-items-center tw-rounded-lg tw-bg-[rgba(255,_255,_255,_0.08)] tw-border tw-border-[#586A9A] tw-max-w-[260px] tw-w-full",
                    "tw-absolute tw-bottom-[4%] tw-left-[37%]",
                  )}
                >
                  <Image
                    src={g("selling.buyYourSelf.items.3.icon") as string}
                    width={40}
                    height={40}
                    alt="icon"
                  />
                  <p className="tw-text-base tw-font-medium tw-mb-0">
                    {g("selling.buyYourSelf.items.3.content")}
                  </p>
                </div>

                <p className="tw-text-sm tw-text-[rgba(255,_255,_255,_0.80)] tw-absolute tw-right-[17%] tw-top-[51%] -tw-translate-y-[51%] tw-max-w-[198px] tw-w-full">
                  {g("selling.buyYourSelf.fullfillment")}
                </p>

                <div className="tw-absolute tw-top-[50%] -tw-translate-y-[50%] tw-right-0 tw-p-4 tw-rounded-xl tw-bg-[#3D5077] tw-max-w-[137px]">
                  <Image
                    src="https://cms-strapi.ichiba.net/uploads/OBJECTS_48f2449fc6.svg"
                    width={73}
                    height={73}
                    alt="icon"
                    className="tw-mx-auto"
                  />
                  <p className="tw-text-base tw-font-bold tw-mb-0 tw-mt-4 tw-text-center">
                    {g("selling.buyYourSelf.customers.0")}
                  </p>
                  <p className="tw-text-sm tw-text-[rgba(255,_255,_255,_0.80)] tw-mb-0 tw-text-center">
                    {g("selling.buyYourSelf.customers.1")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <>
            <div
              className={clsx(
                "tw-mt-5 lg:tw-mt-12 tw-px-3 lg:tw-px-15 tw-py-6 lg:tw-py-[155px] tw-rounded-lg lg:tw-rounded-2xl",
                " tw-bg-[rgba(3,_17,_45,_0.60)] tw-flex tw-flex-col lg:tw-flex-row",
              )}
            >
              <div className="tw-p-2 tw-rounded-xl tw-bg-[#3D5077] tw-max-w-[142px] tw-w-full tw-mx-auto">
                <Image
                  src="https://cms-strapi.ichiba.net/uploads/Image_0b05f43421.svg"
                  width={62}
                  height={45}
                  alt="icon"
                  className="tw-mx-auto"
                />
                <p className="tw-text-sm tw-font-bold tw-mb-0 tw-mt-3 tw-text-center">
                  {g("selling.withIChibaOne.yourProducts")}
                </p>
              </div>
              <Image
                src="https://cms-strapi.ichiba.net/uploads/Group_1171275983_9ceeefa910.svg"
                width={243}
                height={30}
                alt="icon"
                className="tw-mx-auto tw-hidden lg:tw-block"
              />
              <Image
                src="https://cms-strapi.ichiba.net/uploads/Group_1171275927_cea88db9f2.svg"
                width={29}
                height={242}
                alt="icon"
                className="tw-mx-auto lg:tw-hidden"
              />

              <div
                className={clsx(
                  "tw-relative tw-bg-[linear-gradient(114deg,_rgba(67,_81,_109,_0.78)_3.87%,_rgba(41,_56,_86,_0.33)_86.56%,_rgba(7,_18,_40,_0.47)_99.44%)]",
                  "tw-max-w-[318px] tw-w-full tw-h-[134px] tw-mx-auto tw-translate-y-10 lg:tw-translate-y-0",
                  "tw-border-2 tw-border-[#FF7400] tw-rounded-2xl tw-text-white",
                )}
              >
                <h3 className="tw-text-xl tw-font-bold tw-w-[196px] tw-text-center tw-mx-auto tw-mt-10 tw-mb-5">
                  {g("selling.withIChibaOne.iChiba")}
                </h3>

                <Image
                  src="https://cms-strapi.ichiba.net/uploads/EFEX_e3dfadf332.svg"
                  width={104}
                  height={104}
                  alt="icon"
                  className="tw-absolute -tw-top-15 tw-left-[50%] tw-translate-x-[-50%]"
                />
              </div>

              <Image
                src="https://cms-strapi.ichiba.net/uploads/Group_1171275983_9ceeefa910.svg"
                width={243}
                height={30}
                alt="icon"
                className="tw-mx-auto tw-hidden lg:tw-block"
              />

              <Image
                src="https://cms-strapi.ichiba.net/uploads/Group_1171275927_cea88db9f2.svg"
                width={29}
                height={242}
                alt="icon"
                className="tw-mx-auto lg:tw-hidden"
              />
              <div className="tw-p-2 tw-rounded-xl tw-bg-[#3D5077] tw-min-w-[137px] tw-mx-auto">
                <Image
                  src="https://cms-strapi.ichiba.net/uploads/OBJECTS_48f2449fc6.svg"
                  width={60}
                  height={60}
                  alt="icon"
                  className="tw-mx-auto"
                />
                <p className="tw-text-sm tw-font-bold tw-mb-0 tw-mt-3 tw-text-center">
                  {g("selling.withIChibaOne.customers.0")}
                </p>
                <p className="tw-text-xs tw-text-[rgba(255,_255,_255,_0.80)] tw-mb-0 tw-text-center">
                  {g("selling.withIChibaOne.customers.1")}
                </p>
              </div>
            </div>
          </>
        )}
      </div>
      <div className="tw-mt-9 lg:tw-container lg:tw-mt-20 tw-relative tw-z-1">
        <h2 className="tw-text-xl tw-font-bold tw-text-center lg:tw-text-4xl tw-mb-0">
          {g("boost.title")}
        </h2>
        <div className="tw-mt-8 lg:tw-my-[50px]">
          <div className="tw-flex tw-justify-center ">
            <div className="tw-p-2 lg:tw-px-8 lg:tw-py-5 tw-rounded lg:tw-rounded-xl  tw-border tw-border-white tw-w-max tw-bg-[rgba(255,255,255,0.80)] tw-max-w-[120px] lg:tw-max-w-[230px]">
              <div className="tw-text-lg tw-font-bold text-center tw-text-[#F57C00] lg:tw-text-4xl">
                {g("boost.countries.title")}
              </div>
              <div className="tw-mt-1 tw-text-[10px] lg:tw-text-base tw-text-[#333] tw-font-medium tw-text-center">
                {g("boost.countries.content")}
              </div>
            </div>
          </div>
          <div className="tw-flex tw-justify-between tw-mt-7">
            <div className="tw-p-2 lg:tw-px-8 lg:tw-py-5  tw-rounded lg:tw-rounded-xl tw-border tw-border-white tw-w-max tw-bg-[rgba(255,255,255,0.80)] tw-max-w-[120px] lg:tw-max-w-[230px]">
              <div className="tw-text-lg tw-font-bold text-center tw-text-[#25AA89] lg:tw-text-4xl">
                {g("boost.local.title")}
              </div>
              <div className="tw-mt-1 tw-text-[10px] lg:tw-text-base tw-text-[#333] tw-font-medium tw-text-center">
                {g("boost.local.content")}
              </div>
            </div>
            <div className="tw-p-2 lg:tw-px-8 lg:tw-py-5 tw-rounded lg:tw-rounded-xl tw-border tw-border-white tw-w-max tw-bg-[rgba(255,255,255,0.80)] tw-max-w-[120px] lg:tw-max-w-[230px]">
              <div className="tw-text-lg tw-font-bold text-center tw-text-[#1135A8] lg:tw-text-4xl">
                {g("boost.localized.title")}
              </div>
              <div className="tw-mt-1 tw-text-[10px] lg:tw-text-base tw-text-[#333] tw-font-medium tw-text-center">
                {g("boost.localized.content")}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Selling;

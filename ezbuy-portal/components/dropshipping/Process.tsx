"use client";
import clsx from "clsx";
import EzImage from "../commons/EzImage";

const Process = ({ lang }: { lang: any }) => {
  const { heading, subHeading, contents } = lang.services.dropshipping.process;

  return (
    <section className="py-6 lg:py-15">
      <div className="container px-4">
        <h2 className="text-[28px] lg:text-4xl font-black uppercase lg:text-center pb-2">
          {heading}
        </h2>
        <p className="text-sm lg:text-base lg:text-center pb-6">{subHeading}</p>

        <div className="overflow-x-scroll pt-4 lg:hidden">
          <div className="relative w-[343px] h-[1166px] mx-auto overflow-hidden">
            <EzImage
              src="/uploads/Frame_1171276476_1_66b38641cc.svg"
              width={343}
              height={1166}
              alt="ezbuy"
            />

            <div
              className={clsx(
                "absolute top-0 right-0",
                "bg-[#F0F5FF] rounded-lg p-3 w-[150px] text-center"
              )}
            >
              <p className="text-sm text-brand-primary font-medium">
                {contents[0].content}
              </p>
            </div>
            <div
              className={clsx(
                "absolute top-[32%] right-0",
                "bg-[#F0F5FF] rounded-lg p-3 w-[150px] text-center"
              )}
            >
              <p className="text-sm text-brand-primary font-medium">
                {contents[1].content}
              </p>
            </div>
            <div
              className={clsx(
                "absolute bottom-[42%] left-0",
                "bg-[#F0F5FF] rounded-lg p-3 w-[230px] text-center"
              )}
            >
              <div className="flex items-center gap-3 justify-center mb-3">
                <EzImage
                  src="/uploads/Logo_c2eb2994a3.svg"
                  width={100}
                  height={33}
                  alt="icon"
                />
                <EzImage
                  src="/uploads/X_f70dcdd159.svg"
                  width={11}
                  height={11}
                  alt="icon"
                />
                <EzImage
                  src="/uploads/image_868_f067f23055.svg"
                  width={40}
                  height={41}
                  alt="icon"
                />
              </div>
              <p className="text-sm text-brand-primary font-medium">
                {contents[2].content[0]}
                <br />
                {contents[2].content[1]}
              </p>
            </div>
            <div
              className={clsx(
                "absolute bottom-[21%] left-10",
                "bg-[#F0F5FF] rounded-lg p-3 w-[190px] text-center"
              )}
            >
              <EzImage
                src="/uploads/image_868_1_108886f16f.svg"
                width={65}
                height={65}
                alt="icon"
                className="mx-auto mb-3"
              />
              <p className="text-sm text-brand-primary font-medium">
                {contents[3].content}
              </p>
            </div>
            <div
              className={clsx(
                "absolute bottom-0 left-0",
                "bg-[#F0F5FF] rounded-lg p-3 w-[230px] text-center"
              )}
            >
              <EzImage
                src="/uploads/image_868_2_34ae8505b4.svg"
                width={65}
                height={65}
                alt="icon"
                className="mx-auto mb-3"
              />
              <p className="text-sm text-brand-primary font-medium">
                {contents[4].content}
              </p>
            </div>
          </div>
        </div>

        <div className="overflow-x-scroll hidden lg:block pb-4">
          <div className="relative w-[1112px] h-[486px] mx-auto overflow-hidden">
            <EzImage
              src="/uploads/Group_1171275973_05e01bcedf.svg"
              width={1112}
              height={486}
              alt="ezbuy"
              className="mx-auto"
            />

            <div
              className={clsx(
                "absolute top-0 left-[26%]",
                "bg-[#F0F5FF] rounded-lg p-3 w-[150px] text-center"
              )}
            >
              <p className="text-sm text-brand-primary font-medium">
                {contents[0].content}
              </p>
            </div>
            <div
              className={clsx(
                "absolute top-[40px] right-[26%]",
                "bg-[#F0F5FF] rounded-lg p-3 w-[150px] text-center"
              )}
            >
              <p className="text-sm text-brand-primary font-medium">
                {contents[1].content}
              </p>
            </div>
            <div
              className={clsx(
                "absolute top-[20%] right-0",
                "bg-[#F0F5FF] rounded-lg p-3 w-[230px] text-center"
              )}
            >
              <div className="flex items-center gap-3 justify-center mb-3">
                <EzImage
                  src="/uploads/Logo_c2eb2994a3.svg"
                  width={100}
                  height={33}
                  alt="icon"
                />
                <EzImage
                  src="/uploads/X_f70dcdd159.svg"
                  width={11}
                  height={11}
                  alt="icon"
                />
                <EzImage
                  src="/uploads/image_868_f067f23055.svg"
                  width={40}
                  height={41}
                  alt="icon"
                />
              </div>
              <p className="text-sm text-brand-primary font-medium">
                {contents[2].content[0]}
                <br />
                {contents[2].content[1]}
              </p>
            </div>
            <div
              className={clsx(
                "absolute bottom-0 left-[52%] translate-x-[-52%]",
                "bg-[#F0F5FF] rounded-lg p-3 w-[190px] text-center"
              )}
            >
              <EzImage
                src="/uploads/image_868_1_108886f16f.svg"
                width={65}
                height={65}
                alt="icon"
                className="mx-auto mb-3"
              />
              <p className="text-sm text-brand-primary font-medium">
                {contents[3].content}
              </p>
            </div>
            <div
              className={clsx(
                "absolute top-[25%] left-0",
                "bg-[#F0F5FF] rounded-lg p-3 w-[230px] text-center"
              )}
            >
              <EzImage
                src="/uploads/image_868_2_34ae8505b4.svg"
                width={65}
                height={65}
                alt="icon"
                className="mx-auto mb-3"
              />
              <p className="text-sm text-brand-primary font-medium">
                {contents[4].content}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Process;

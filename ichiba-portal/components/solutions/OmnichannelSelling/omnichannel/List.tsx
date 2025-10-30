import { clsx } from "clsx";
import { useTranslation } from "next-i18next";
import Image from "next/image";
const List = () => {
  const o = useTranslation("omnichannel-selling").t;

  return (
    <div className="tw-px-4 tw-mt-4 lg:tw-py-10 lg:tw-container lg:tw-px-20">
      <div
        className={clsx(
          "lg:tw-hidden tw-grid tw-ml-10 before:tw-w-[25px] before:tw-h-[25px] before:tw-absolute before:tw-top-0 before:tw-bg-[url(https://cms-strapi.ichiba.net/uploads/Group_1171275919_15247cbdb2.png)]",
          "before:tw-bg-cover before:tw-bg-no-repeat before:tw-left-[-40px] tw-grid tw-gap-4",
          "tw-relative after:tw-absolute after:tw-w-[6px] after:tw-bg-[url(https://cms-strapi.ichiba.net/uploads/Vector_107_6e75032383.png)] after:tw-h-full after:tw-top-0 after:tw-left-[-30px]",
        )}
      >
        {(
          o(`omnichannel.items`, {
            returnObjects: true,
          }) as string[]
        ).map((value: any, index: number) => (
          <div key={index} className={clsx("tw-relative")}>
            <Image
              src={value.number}
              alt={value.title}
              width={24}
              height={24}
              className="tw-absolute tw-top-4 tw-left-[-12px]"
            />
            <div className="tw-bg-white tw-p-4 tw-rounded-lg tw-shadow-[0px_8px_16px_0px_rgba(0,0,0,0.05)]">
              <h3 className="tw-font-bold">{value.title}</h3>
              <div className="tw-mt-2 tw-text-sm">{value.content}</div>
              <div className="tw-mt-2 tw-text-sm tw-border-l-2 tw-border-[#C5C8FD] tw-pl-2">
                {value.bio}
              </div>
            </div>
            <Image
              src={value.img}
              alt={value.title}
              width={240}
              height={180}
              className="tw-mt-5 tw-max-w-[188px] lg:tw-max-w-[240px]"
            />
          </div>
        ))}
      </div>
      <div
        className={clsx(
          "tw-hidden lg:tw-grid tw-gap-10  tw-mx-auto",
          " before:tw-w-[40px] before:tw-h-[40px] before:tw-absolute before:tw-top-0 before:tw-bg-[url(https://cms-strapi.ichiba.net/uploads/Group_1171275919_15247cbdb2.png)]",
          "before:tw-bg-cover before:tw-bg-no-repeat before:tw-left-[49%] ",
          "tw-relative after:tw-absolute after:tw-w-[15px] after:tw-bg-[url(https://cms-strapi.ichiba.net/uploads/Vector_107_6e75032383.png)] after:tw-h-full after:tw-top-0 after:tw-left-[50%]",
        )}
      >
        {(
          o(`omnichannel.items`, {
            returnObjects: true,
          }) as string[]
        ).map((value: any, index: number) =>
          index % 2 === 0 ? (
            <div key={index} className={clsx(" tw-flex tw-justify-between ")}>
              <div className="tw-relative tw-bg-white tw-p-6 tw-rounded-lg tw-shadow-[0px_8px_16px_0px_rgba(0,0,0,0.05)] lg:tw-max-w-[460px] tw-h-max">
                <Image
                  src={value.number}
                  alt=""
                  width={36}
                  height={36}
                  className="tw-absolute tw-top-4 tw-right-[-20px] "
                />
                <h3 className="tw-font-bold tw-text-lg">{value.title}</h3>
                <div className="tw-mt-2 ">{value.content}</div>
                <div className="tw-mt-2  tw-border-l-2 tw-border-[#C5C8FD] tw-pl-2">
                  {value.bio}
                </div>
              </div>
              <Image
                src={value.img}
                alt={value.title}
                width={240}
                height={180}
                className="tw-mt-5 tw-max-w-[188px] lg:tw-min-w-[291px] tw-mr-[140px]"
              />
            </div>
          ) : (
            <div key={index} className={clsx(" tw-flex tw-justify-between ")}>
              <Image
                src={value.img}
                alt={value.title}
                width={240}
                height={180}
                className="tw-mt-5 lg:tw-w-[291px] tw-ml-[140px]"
              />
              <div className="tw-relative tw-bg-white tw-p-6 tw-rounded-lg tw-shadow-[0px_8px_16px_0px_rgba(0,0,0,0.05)] tw-max-w-[460px] tw-h-max">
                <Image
                  src={value.number}
                  alt=""
                  width={36}
                  height={36}
                  className="tw-absolute tw-top-4 tw-left-[-20px]"
                />
                <h3 className="tw-font-bold tw-text-lg">{value.title}</h3>
                <div className="tw-mt-2 ">{value.content}</div>
                <div className="tw-mt-2  tw-border-l-2 tw-border-[#C5C8FD] tw-pl-2">
                  {value.bio}
                </div>
              </div>
            </div>
          ),
        )}
      </div>
    </div>
  );
};

export default List;

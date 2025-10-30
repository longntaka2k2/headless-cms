"use client";
import clsx from "clsx";
import EzImage from "@/components/commons/EzImage";
import useWidth from "@/hooks/useWidth";
import logo from "@/public/images/icons/logo-mini.svg";

const OneStop = ({ params, lang }: any) => {
  const width = useWidth();
  return (
    <section className={clsx("py-6 px-4 lg:pt-10 lg:pb-[60px] bg-[#F0F3F7]")}>
      <div className="container">
        <h2 className="text-center font-bold text-2xl lg:text-4xl lg:leading-12 mb-5 lg:mb-10   ">
          {lang.bonded.oneStop}{" "}
          <EzImage className=" inline h-[25px] lg:h-[37px] -mt-2" src={logo} alt="" />
        </h2>
        <div className="rounded-xl bg-white lg:p-10">
          <EzImage
            className="object-center object-cover mx-auto"
            src={
              width >= 984
                ? params.lang === 'en' ? "/uploads/Frame_427318736_68f99c6d12.png" : '/uploads/Frame_427318736_1_b7771d9776.png'
                :  params.lang === 'en' ? "/uploads/Frame_427318739_2_d86e43dc90.png" : '/uploads/Frame_427318739_3_e46f2afdc5.png'
            }
            alt="bond services processs"
            width={width < 984 ? 358 : 948}
            height={width < 984 ? 541 : 600}
            quality={100}
          />
        </div>
      </div>
    </section>
  );
};
export default OneStop;

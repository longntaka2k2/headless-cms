import clsx from "clsx";
import Image from "next/image";

const WhyShould = ({ lang }: { lang: any }) => {
  return (
    <div className="p-6 lg:py-15">
      <div className="container">
        <h2 className="mb-6 lg:mb-15 text-xl sm:text-2xl font-bold lg:text-4xl lg:leading-[48px] lg:text-center mx-auto">
          {lang.heading[0]} <br />
          {lang.heading[1]}
        </h2>
        <div className="grid gap-6 lg:gap-10">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-[70px]">
            <div>
              <h3 className="text-lg lg:text-2xl font-bold mb-4 lg:mb-6">
                {lang.easyAndFast.title}
              </h3>
              <div className="grid gap-8">
                {lang.easyAndFast.items.map((item: any, index: number) => {
                  return (
                    <div key={index} className="flex gap-2 items-center">
                      <Image
                        src={item.icon}
                        alt="EFEX"
                        width={40}
                        height={40}
                      />
                      <p className="text-sm lg:text-base">{item.title}</p>
                    </div>
                  );
                })}
              </div>
            </div>
            <Image
              src="https://strapi-efex.ichiba.net/uploads/Frame_1171275978_1a2ae07ce5.svg"
              alt="EFEX"
              width={623}
              height={412}
              className="mx-auto"
            />
          </div>

          <div className="flex flex-col-reverse lg:flex-row gap-6 lg:gap-15 py-6 lg:py-10">
            <Image
              src="https://strapi-efex.ichiba.net/uploads/Frame_427318564_2fec9b3e83.svg"
              alt="EFEX"
              width={534}
              height={315}
              className="mx-auto"
            />
            <div>
              <h3 className="text-lg lg:text-2xl font-bold mb-4 lg:mb-6">
                {lang.increase.title}
              </h3>
              <div className="grid gap-8">
                {lang.increase.items.map((item: any, index: number) => {
                  return (
                    <div key={index} className="flex gap-2 items-center">
                      <Image
                        src={item.icon}
                        alt="EFEX"
                        width={40}
                        height={40}
                      />
                      <p className="text-sm lg:text-base">{item.title}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div
            className={clsx(
              "bg-[url(https://strapi-efex.ichiba.net/uploads/Frame_1171276039_e2f7581d71.svg)] bg-cover bg-center bg-no-repeat",
              "p-6 lg:py-8 rounded-xl lg:rounded-2xl overflow-hidden"
            )}
          >
            <h3 className="text-lg lg:text-2xl font-bold mb-6 lg:text-center">
              {lang.support.title}
            </h3>
            <div className="overflow-x-scroll">
              <div className="w-[1152px] h-[570px] relative hidden lg:block">
                <Image
                  src="https://strapi-efex.ichiba.net/uploads/Frame_1171276624_9ca84ae8f3.svg"
                  alt="EFEX"
                  width={1152}
                  height={570}
                />
                <div className="flex gap-2 items-center absolute top-0 left-[5%] bg-white py-4 px-5 rounded-xl">
                  <Image
                    src={lang.support.items[0].icon}
                    alt="EFEX"
                    width={40}
                    height={40}
                  />
                  <p className="text-sm lg:text-base">
                    {lang.support.items[0].title}
                  </p>
                </div>

                <div className="flex gap-2 items-center absolute top-[42%] left-[19%] bg-white py-4 px-5 rounded-xl">
                  <Image
                    src={lang.support.items[1].icon}
                    alt="EFEX"
                    width={40}
                    height={40}
                  />
                  <p className="text-sm lg:text-base w-[273px]">
                    {lang.support.items[1].title}
                  </p>
                </div>

                <div className="flex gap-2 items-center absolute top-[15%] right-[3%] bg-white py-4 px-5 rounded-xl">
                  <Image
                    src={lang.support.items[2].icon}
                    alt="EFEX"
                    width={40}
                    height={40}
                  />
                  <p className="text-sm lg:text-base w-[353px]">
                    {lang.support.items[2].title}
                  </p>
                </div>
              </div>

              <div className="w-[275px] h-auto relative lg:hidden mx-auto overflow-x-hidden pt-3">
                <Image
                  src="https://strapi-efex.ichiba.net/uploads/Group_1171276005_ae730b42d0.svg"
                  alt="EFEX"
                  width={310}
                  height={888}
                />
                <div className="flex gap-2 items-center absolute top-0 left-[0] bg-white py-4 px-5 rounded-xl">
                  <Image
                    src={lang.support.items[0].icon}
                    alt="EFEX"
                    width={40}
                    height={40}
                    className="h-7 w-7 lg:w-10 lg:h-10"
                  />
                  <p className="text-sm w-[218px]">
                    {lang.support.items[0].title}
                  </p>
                </div>

                <div className="flex gap-2 items-center absolute top-[27%] right-0 bg-white py-4 px-5 rounded-xl">
                  <Image
                    src={lang.support.items[1].icon}
                    alt="EFEX"
                    width={40}
                    height={40}
                    className="h-7 w-7 lg:w-10 lg:h-10"
                  />
                  <p className="text-sm w-[135px]">
                    {lang.support.items[1].title}
                  </p>
                </div>

                <div className="flex gap-2 items-center absolute bottom-[18%] left-[6%] bg-white py-4 px-5 rounded-xl">
                  <Image
                    src={lang.support.items[2].icon}
                    alt="EFEX"
                    width={40}
                    height={40}
                    className="h-7 w-7 lg:w-10 lg:h-10"
                  />
                  <p className="text-sm w-[210px]">
                    {lang.support.items[2].title}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyShould;

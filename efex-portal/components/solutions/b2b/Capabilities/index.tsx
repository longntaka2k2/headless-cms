import EzImage from "@/components/commons/EzImage";
import boxChecked from "@/public/images/b2b-retail-fulfillment/boxChecked.svg";
import boxShelf from "@/public/images/b2b-retail-fulfillment/boxShelf.svg";
import powerfulBuild from "@/public/images/b2b-retail-fulfillment/powerfulBuild.svg";
import truck from "@/public/images/b2b-retail-fulfillment/truck.svg";
import warehouse from "@/public/images/b2b-retail-fulfillment/warehouse.svg";
import { DesktopContentList, MobileContentList } from "./ContentList";

const Capabilities = ({ lang }: { lang: any }) => {
  const content = [
    { icon: powerfulBuild, description: lang.capabilities.content.software },
    { icon: boxShelf, description: lang.capabilities.content.order },
    { icon: boxChecked, description: lang.capabilities.content.support },
    { icon: truck, description: lang.capabilities.content.integration },
    { icon: warehouse, description: lang.capabilities.content.fulfillment },
  ];

  return (
    <section className="relative mt-6 lg:mt-20 mb-[25px]">
      <EzImage
        src={"/uploads/breakline_white_2_e2bd6e6cd3.png"}
        alt="top"
        width={143}
        height={25}
        className="absolute left-1/2 -translate-x-1/2 top-0 translate-y-[-1px]"
      />
      <div className="bg-[url('https://strapi-efex.ichiba.net/uploads/Ship_strategically_5755d6cc73.webp')] bg-no-repeat bg-[length:100%_100%]">
        <div className="relative container px-4 pt-10 pb-6 flex flex-col gap-5 lg:flex-row lg:justify-between lg:py-10">
          <h2 className="text-2xl font-bold text-ic-white-6 text-center lg:text-4xl lg:leading-12 lg:text-left lg:self-center lg:max-w-[420px]">
            {lang.capabilities.title}
          </h2>

          {/** mobile */}
          <div className="lg:hidden">
            <MobileContentList list={content} />
          </div>

          {/** desktop */}
          <div className="hidden lg:block">
            <DesktopContentList list={content} />
          </div>
        </div>
      </div>
      <EzImage
        src={"/uploads/breakline_white_1_11cc07e361.png"}
        alt="bottom"
        width={143}
        height={25}
        className="absolute left-1/2 -translate-x-1/2 top-full translate-y-[-1px]"
      />
    </section>
  );
};

export default Capabilities;

import clsx from "clsx";
import { ContentList } from "./ContentList";

const Service = ({ lang }: { lang: any }) => {
  const content = [
    {
      icon: "https://strapi-efex.ichiba.net/uploads/earth_globe_cross_671974566f.svg",
      description: lang.content.international,
    },
    {
      icon: "https://strapi-efex.ichiba.net/uploads/user_profile_delete_1_834808aec4.svg",
      description: lang.content.customer,
    },
    {
      icon: "https://strapi-efex.ichiba.net/uploads/Delivery_c577df107d.svg",
      description: lang.content.employees,
    },
    {
      icon: "https://strapi-efex.ichiba.net/uploads/delivery_truck_cancel_7888a94cda.svg",
      description: lang.content.shipping,
    },
  ];

  return (
    <div className={clsx(
        "bg-[url('https://strapi-efex.ichiba.net/uploads/Ship_strategically_efef3a4ee5.svg')]",
        "bg-no-repeat bg-cover py-6 px-4 lg:py-15"
    )}>
      <div className="container flex flex-col gap-6 lg:flex-row lg:justify-between items-center mb-10 lg:mb-[70px]">
        <h2 className="text-2xl font-bold text-ic-white-6 text-center lg:text-4xl lg:leading-12 lg:text-left lg:self-center lg:max-w-[420px]">
          {lang.title}
        </h2>

        <ContentList list={content} />
      </div>
    </div>
  );
};

export default Service;

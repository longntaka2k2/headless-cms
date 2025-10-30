import clsx from "clsx";

const Header = ({ Breadcrumb }: { Breadcrumb: string[] }) => {
  return (
    <div
      className={clsx(
        "pt-16 pb-5 lg:pb-10 lg:pt-24",
        "bg-[url('https://strapi-ezbuy.ichiba.net/uploads/Header_tittle_mobile_4bdacecb47.webp')]",
        "lg:bg-[url('https://strapi-ezbuy.ichiba.net/uploads/Header_tittle_312c367040.webp')]",
        "bg-cover flex justify-center bg-bottom"
      )}
    >
      <div className="px-12 py-4 text-white text-center">
        <h1
          className={clsx(
            "font-semibold lg:font-medium ",
            "leading-[30px] lg:leading-9 ",
            "text-xl md:text-2xl "
          )}
        >
          {Breadcrumb[Breadcrumb.length - 1]}
        </h1>
        <div className="text-sm">
          {Breadcrumb.map((x, idx) => (
            <>
              <span className={idx == 0 ? "opacity-60" : ""} key={x}>
                {x}
              </span>
              {Breadcrumb.length - 1 != idx ? <span>{"  /  "}</span> : ""}
            </>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Header;

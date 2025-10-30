import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function Discover({ lang }: { lang: any }) {
  const listDiscover = [
    {
      title: lang.discover.list[0].title,
      textLink: lang.discover.list[0].textLink,
    },
    {
      title: lang.discover.list[1].title,
      textLink: lang.discover.list[1].textLink,
    },
    {
      title: lang.discover.list[2].title,
      textLink: lang.discover.list[2].textLink,
    },
    {
      title: lang.discover.list[3].title,
      textLink: lang.discover.list[3].textLink,
    },
  ];

  return (
    <div
      style={{
        background: "linear-gradient(91deg, #B1D1F6 24.67%, #C5C8FD 77.28%)",
      }}
      className="py-6 lg:py-15 px-4"
    >
      <div className="container flex flex-col lg:flex-row gap-6 lg:gap-10">
        <h3 className="lg:w-1/5 mb-0 text-2xl lg:text-5xl font-bold text-white">
          {lang.discover.heading}
        </h3>

        <div className="lg:w-4/5 grid lg:grid-cols-4 gap-6 ">
          {listDiscover.map((item, index) => {
            return (
              <div
                key={index}
                style={{
                  boxShadow: "0px 8px 16px 0px rgba(0, 0, 0, 0.05)",
                }}
                className="p-6 bg-white rounded-xl"
              >
                <div
                  style={{
                    background:
                      "linear-gradient(270deg, rgba(37, 213, 252, 0.80) 0.05%, rgba(61, 104, 255, 0.00) 99.96%)",
                  }}
                  className="w-full h-1 rounded-3xl mb-4"
                ></div>
                <div className="mb-4 lg:mb-0">
                  <p className="text-lg font-bold mb-0">{item.title}</p>
                  <p className="text-sm text-brand-primary font-medium flex items-center mb-0 gap-1">
                    {item.textLink}
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className="w-3 h-3 pl-1 text-brand-primary"
                    />
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

import { useEffect, useState } from "react";

interface Tab {
  img: string;
  title: string;
  content?: string[];
}
export interface Props {
  reverse?: boolean;
  heading: string;
  subHeading: string;
  tabs: Tab[];
}
const GlobalExpansion = (props: Props) => {
  const [active, setActive] = useState<Tab>();
  const checkIconStyle = { color: "#0F62FE", margin: "10px 16px 0px 0px" };
  useEffect(() => {
    if (props.tabs?.length > 0) {
      setActive(props.tabs[0]);
    }
  }, [props.tabs]);
  return (
    <div className="global-expansion">
      <div className="container d-flex flex-column gap-3">
        <div className="d-flex flex-column text-center align-items-center">
          <h2 className="tw-text-2xl md:tw-text-4xl tw-font-bold tw-capitalize">
            {props.heading}
          </h2>
          <p className="subHeading">{props.subHeading}</p>
        </div>
        <div className="tabs">
          {props.tabs?.length > 0 &&
            props.tabs.map((x, idx) => (
              <div
                className={`tab ${active?.title == x.title ? "active" : ""}`}
                onClick={() => setActive(x)}
                key={x.title + idx}
              >
                {x.title}
              </div>
            ))}
        </div>

        {active && (
          <div className={`row ${props.reverse ? "flex-row-reverse" : ""}`}>
            <div className="col-md-6 col-sm-12 media"></div>
            <div className="col-md-6 col-sm-12 content">
              <h3 className="tw-font-bold">{active.title}</h3>
              <div className="d-flex flex-column gap-3">
                {active?.content &&
                  active?.content.length > 0 &&
                  active.content?.map((x, idx) => (
                    <div className="d-flex" key={idx + x}>
                      <i
                        className="fa-solid fa-lg fa-circle-check"
                        style={checkIconStyle}
                      />
                      <span>{x}</span>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GlobalExpansion;

import { useTranslation } from "next-i18next";
import { useContext } from "react";
import { Accordion, AccordionContext } from "react-bootstrap";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import clsx from "clsx";

function ContextAwareToggle({ children, eventKey, callback }: any) {
  const { activeEventKey } = useContext(AccordionContext);

  const decoratedOnClick = useAccordionButton(
    eventKey,
    () => callback && callback(eventKey),
  );

  const isCurrentEventKey = activeEventKey === eventKey;

  return (
    <div
      className={clsx(
        "d-flex justify-content-between ",
        "tw-font-bold lg:tw-font-medium lg:tw-text-2xl tw-leading-6 lg:tw-leading-8",
      )}
      onClick={decoratedOnClick}
    >
      <div>{children}</div>
      {!isCurrentEventKey ? <div>+</div> : <div>-</div>}
    </div>
  );
}

export interface Props {
  items: { title: string; content: string | string[] }[];
  link?: string | React.ReactNode;
  title?: string;
}
const Faq = (props: Props) => {
  const { t } = useTranslation("common");
  return (
    <div className="frequently mx-auto" style={{ maxWidth: "790px" }}>
      <h2 className="text-center tw-font-bold tw-text-2xl lg:tw-text-4xl tw-leading-8 lg:leading-[56px]">
        {" "}
        <span>{props.title ?? t("ship.features.faqs.faq")}</span>
      </h2>
      <Accordion defaultActiveKey="0">
        {props?.items?.map((x, idx) => (
          <div
            className={`py-4 ${idx > 0 ? "border-top" : ""} cursor`}
            key={`${x.title}_${idx}`}
          >
            <ContextAwareToggle eventKey={`${x.title}_${idx}`}>
              {x.title}
            </ContextAwareToggle>
            <Accordion.Collapse eventKey={`${x.title}_${idx}`}>
              <>
                {Array.isArray(x.content) ? (
                  x.content.map((c, cidx) => (
                    <div className="tw-text-sm lg:tw-text-lg" key={cidx}>
                      {c}
                    </div>
                  ))
                ) : (
                  <div className="fs-16">{x.content}</div>
                )}
              </>
            </Accordion.Collapse>
          </div>
        ))}
      </Accordion>
      {typeof props.link == "string" ? (
        <div dangerouslySetInnerHTML={{ __html: props?.link as any }} />
      ) : (
        props.link
      )}
    </div>
  );
};

export default Faq;

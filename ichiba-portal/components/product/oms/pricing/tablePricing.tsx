import { useTranslation } from "next-i18next";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { title } from "process";

export default function TablePricing() {
  const { t } = useTranslation("common");

  let features = [
    {
      main: t("oms.pricing.dataTable.workspace"),
      function: t("oms.pricing.dataTable.multiWork"),
      free: "check",
      standard: "check",
      premium: "check",
      enterprise: "check",
    },
    {
      main: t("oms.pricing.dataTable.store"),
      function: t("oms.pricing.dataTable.multiStore"),
      free: "2",
      standard: "20",
      premium: "50",
      enterprise: t("oms.pricing.dataTable.unlimited"),
    },
    {
      main: t("oms.pricing.dataTable.integration"),
      function: t("oms.pricing.dataTable.integrationWith"),
      free: "3",
      standard: "5",
      premium: "10",
      enterprise: t("oms.pricing.dataTable.unlimited"),
    },
    {
      main: t("oms.pricing.dataTable.product"),
      rowspan: 4,
      function: t("oms.pricing.dataTable.productMana"),
      free: "1000 SKUs",
      standard: "1000 SKUs",
      premium: t("oms.pricing.dataTable.unlimited"),
      enterprise: t("oms.pricing.dataTable.unlimited"),
    },
    {
      function: t("oms.pricing.dataTable.upload"),
      free: "check",
      standard: "check",
      premium: "check",
      enterprise: "check",
    },
    {
      function: t("oms.pricing.dataTable.sync"),
      free: "check",
      standard: "check",
      premium: "check",
      enterprise: "check",
    },
    {
      function: t("oms.pricing.dataTable.productMap"),
      free: "check",
      standard: "check",
      premium: "check",
      enterprise: "check",
    },
    {
      main: t("oms.pricing.dataTable.salesOrder"),
      rowspan: 3,
      function: t("oms.pricing.dataTable.monthly"),
      free: "1000 " + t("oms.pricing.dataTable.orders"),
      standard: "10000 " + t("oms.pricing.dataTable.orders"),
      premium: t("oms.pricing.dataTable.unlimited"),
      enterprise: t("oms.pricing.dataTable.unlimited"),
    },
    {
      function: t("oms.pricing.dataTable.automatically"),
      free: "check",
      standard: "check",
      premium: "check",
      enterprise: "check",
    },
    {
      function: t("oms.pricing.dataTable.returnOrder"),
      free: "-",
      standard: "check",
      premium: "check",
      enterprise: "check",
    },
    {
      main: t("oms.pricing.dataTable.invent"),
      function: t("oms.pricing.dataTable.inventUpdate"),
      free: "check",
      standard: "check",
      premium: "check",
      enterprise: "check",
    },
    {
      main: t("oms.pricing.dataTable.purchase"),
      function: t("oms.pricing.dataTable.purchaseMana"),
      free: "-",
      standard: "check",
      premium: "check",
      enterprise: "check",
    },
    {
      main: t("oms.pricing.dataTable.intergration"),
      function: t("oms.pricing.dataTable.wareHouse"),
      free: "1",
      standard: "5",
      premium: "20",
      enterprise: t("oms.pricing.dataTable.unlimited"),
    },
    {
      main: t("oms.pricing.dataTable.integrationCarrier"),
      function: t("oms.pricing.dataTable.carrier"),
      free: t("oms.pricing.dataTable.unlimited"),
      standard: t("oms.pricing.dataTable.unlimited"),
      premium: t("oms.pricing.dataTable.unlimited"),
      enterprise: t("oms.pricing.dataTable.unlimited"),
    },
    {
      main: t("oms.pricing.dataTable.notification"),
      function: t("oms.pricing.dataTable.viaEmail"),
      free: "check",
      standard: "check",
      premium: "check",
      enterprise: "check",
      rowspan: 2,
    },
    {
      function: t("oms.pricing.dataTable.onApp"),
      free: "check",
      standard: "check",
      premium: "check",
      enterprise: "check",
    },
    {
      main: t("oms.pricing.dataTable.chat"),
      function: t("oms.pricing.dataTable.chat"),
      free: "-",
      standard: "-",
      premium: "check",
      enterprise: "check",
    },
    {
      main: t("oms.pricing.dataTable.publicApi"),
      function: t("oms.pricing.dataTable.publicApi"),
      free: "",
      standard: "check",
      premium: "check",
      enterprise: "check",
    },
    {
      main: t("oms.pricing.dataTable.analytics"),
      function: t("oms.pricing.dataTable.dashboard"),
      free: "5",
      standard: "10",
      premium: "20",
      enterprise: "20",
      rowspan: 3,
    },
    {
      function: t("oms.pricing.dataTable.basic"),
      free: "check",
      standard: "check",
      premium: "check",
      enterprise: "check",
    },
    {
      function: t("oms.pricing.dataTable.advance"),
      free: "-",
      standard: "-",
      premium: "check",
      enterprise: "check",
    },
    {
      main: t("oms.pricing.dataTable.schedulling"),
      function: t("oms.pricing.dataTable.schedulling"),
      free: "-",
      standard: "-",
      premium: "check",
      enterprise: "check",
    },
  ];
  let admin = [
    {
      main: t("oms.pricing.dataTable.domain"),
      function: "",
      free: "-",
      standard: "check",
      premium: "check",
      enterprise: "check",
    },
    {
      main: t("oms.pricing.dataTable.workspace"),
      function: "",
      free: "-",
      standard: "check",
      premium: "check",
      enterprise: "check",
    },
    {
      main: t("oms.pricing.dataTable.advanced"),
      function: "",
      free: "-",
      standard: "check",
      premium: "check",
      enterprise: "check",
    },
  ];

  let sercurity = [
    {
      main: t("oms.pricing.dataTable.domain"),
      rowspan: 4,
      function: t("oms.pricing.dataTable.multiFactor"),
      free: "-",
      standard: "check",
      premium: "check",
      enterprise: "check",
    },
    {
      function: t("oms.pricing.dataTable.singerSign"),
      free: "check",
      standard: "check",
      premium: "check",
      enterprise: "check",
    },
    {
      function: t("oms.pricing.dataTable.mobile"),
      free: "-",
      standard: "check",
      premium: "check",
      enterprise: "check",
    },
    {
      function: t("oms.pricing.dataTable.anonymous"),
      free: "-",
      standard: "-",
      premium: "-",
      enterprise: "-",
    },
    {
      main: t("oms.pricing.dataTable.certifications"),
      function: "",
      free: "check",
      standard: "check",
      premium: "check",
      enterprise: "check",
    },
  ];
  let storage = [
    {
      main: t("oms.pricing.dataTable.commu"),
      function: "",
      free: "check",
      standard: "check",
      premium: "check",
      enterprise: "check",
    },
    {
      main: t("oms.pricing.dataTable.email"),
      function: "",
      free: "check",
      standard: "check",
      premium: "check",
      enterprise: "check",
    },
    {
      main: t("oms.pricing.dataTable.customer"),
      function: "",
      free: "check",
      standard: "check",
      premium: "check",
      enterprise: "check",
    },
    {
      main: t("oms.pricing.dataTable.enhanced"),
      function: "",
      free: "",
      standard: "check",
      premium: "check",
      enterprise: "check",
    },
    {
      main: t("oms.pricing.dataTable.professional"),
      function: "",
      free: "check",
      standard: "check",
      premium: "check",
      enterprise: "check",
    },
    {
      main: t("oms.pricing.dataTable.uptime"),
      function: "",
      free: "",
      standard: "99.9 %",
      premium: "99.9 %",
      enterprise: "99.9 %",
    },
    {
      main: t("oms.pricing.dataTable.seat"),
      function: "",
      free: "5",
      standard: "10",
      premium: "20",
      enterprise: t("oms.pricing.dataTable.unlimited"),
    },
    {
      main: t("oms.pricing.dataTable.payment"),
      function: "",
      free: "",
      standard: "Wallet/ Paypal/ Credit",
      premium: "Wallet/ Paypal/ Credit",
      enterprise: "Invoice",
    },
    {
      main: t("oms.pricing.dataTable.billings"),
      function: "",
      free: "",
      standard: "check",
      premium: "check",
      enterprise: "check",
    },
    {
      main: t("oms.pricing.dataTable.conttract"),
      function: "",
      free: "",
      standard: "check",
      premium: "check",
      enterprise: "check",
    },
    {
      main: t("oms.pricing.dataTable.separated"),
      function: "",
      free: "",
      standard: t("oms.pricing.dataTable.annualAnd"),
      premium: t("oms.pricing.dataTable.annualAnd"),
      enterprise: t("oms.pricing.dataTable.annual"),
    },
  ];
  const [tabActive, setTabActive] = useState(0);
  const [dataTable, setDataTable] = useState(features);

  let options = [
    {
      title: t("oms.pricing.free.title"),
      for: t("oms.pricing.free.content"),
      type: "free",
      price: "0$",
    },
    {
      title: t("oms.pricing.standard.title"),
      for: t("oms.pricing.standard.content"),
      type: "standard",
      price: "20$",
    },
    {
      title: t("oms.pricing.premium.title"),
      for: t("oms.pricing.premium.content"),
      type: "premium",
      price: "45$",
    },
    {
      title: t("oms.pricing.enterprise.title"),
      for: t("oms.pricing.enterprise.content"),
      type: "enterprise",
      price: "45$",
    },
  ];
  let tab = [
    { title: "features" },
    { title: "admin" },
    { title: "security" },
    { title: "storage" },
  ];
  function setActive(value: number) {
    setTabActive(value);
    switch (value) {
      case 0:
        setDataTable(features);
        break;
      case 1:
        setDataTable(admin);
        break;
      case 2:
        setDataTable(sercurity);
        break;
      case 3:
        setDataTable(storage);
        break;
      default:
        return;
    }
  }
  return (
    <>
      <div>
        <div className="row options">
          {options.map((value, index) => (
            <div
              className="col-6 col-md-3 mt-2 mt-lg-0 text-center"
              key={index}
            >
              <div className={value.type === "free" ? "active" : "default"}>
                <h3 className="fs-20 fs-md-16 fw-7 title">{value.title}</h3>
                <div className="fs-28 fw-7 fs-md-16 title">
                  {value.price}
                  {t("oms.pricing.month")}
                </div>
                <div
                  style={{ minHeight: "60px", marginTop: "6px" }}
                  className="px-2 px-md-4"
                >
                  <div className="fs-12 fw-4 suitable">
                    {t("oms.pricing.suitable")}
                  </div>
                  <div className="fs-14 fw-7 for">{value.for}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-2 fs-md-14">{t("oms.pricing.time")}</div>
        <div className="list-tab  mt-md-4 mt-2">
          {tab.map((value, index) => (
            <div
              className={` ${
                index === tabActive ? "tab-active fw-7 " : ""
              } fs-md-14 tab`}
              key={index}
              onClick={() => setActive(index)}
            >
              {t(`oms.pricing.tab.${value.title}`)}
            </div>
          ))}
        </div>

        <div className=" mt-lg-4 mt-2">
          <div className="table ">
            <table style={{ width: "100%" }}>
              <tbody>
                <tr>
                  <th className="main">{t("oms.pricing.mainFeatures")}</th>
                  <th className="main">{t("oms.pricing.funtions")}</th>
                  <th className="free">{t("oms.pricing.free.title")}</th>
                  <th className="standard">
                    {t("oms.pricing.standard.title")}
                  </th>
                  <th className="standard">{t("oms.pricing.premium.title")}</th>
                  <th className="standard">
                    {t("oms.pricing.enterprise.title")}
                  </th>
                </tr>
                {dataTable.map((value, index) => (
                  <tr key={index}>
                    {value.main && (
                      <td
                        rowSpan={value.rowspan || undefined}
                        className="fw-7 fs-md-14"
                      >
                        {value.main}
                      </td>
                    )}
                    <td className="fs-md-14">{value.function}</td>
                    <td className="text-center">
                      {value.free === "check" ? (
                        <FontAwesomeIcon
                          icon={faCircleCheck}
                          style={{ color: "#389E0D" }}
                        />
                      ) : (
                        value.free
                      )}
                    </td>
                    <td className="text-center">
                      {value.standard === "check" ? (
                        <FontAwesomeIcon
                          icon={faCircleCheck}
                          style={{ color: "#0F62FE" }}
                        />
                      ) : (
                        value.standard
                      )}
                    </td>
                    <td className="text-center">
                      {value.premium === "check" ? (
                        <FontAwesomeIcon
                          icon={faCircleCheck}
                          style={{ color: "#0F62FE" }}
                        />
                      ) : (
                        value.premium
                      )}
                    </td>
                    <td className="text-center">
                      {value.enterprise === "check" ? (
                        <FontAwesomeIcon
                          icon={faCircleCheck}
                          style={{ color: "#0F62FE" }}
                        />
                      ) : (
                        value.enterprise
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

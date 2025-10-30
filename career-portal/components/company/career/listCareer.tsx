/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/link-passhref */
import {
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import qs from "qs";
import { useEffect, useRef, useState } from "react";
import Form from "react-bootstrap/Form";
import { getPosts } from "@/payload-client";;
import PaginateListCareers from "./paginateCareers";
import { debounce } from 'lodash';

export default function ListCareerComponent(data: { data: any[] }) {
  const [listCareer, setlistCareer] = useState<any>({} as any);
  const [searchText, setSearchText] = useState("");
  const [itemsWithout, setWithout] = useState<any>([] as any);

  const { t } = useTranslation("common");
  const arrayWithout: { title: string | string[] }[] = [];
  const router = useRouter();

  const att = [
    {
      title: t("careers.location"),
      id: "location",
      content: [
        { title: "Ha Noi", value: "Hà Nội" },
        { title: "Ho Chi Minh City", value: "Hồ Chí Minh" },
        { title: "Singapore", value: "singapore" },
        { title: "Japan", value: "japan" },
      ],
    },
    {
      title: t("careers.category"),
      id: "category",
      content: [
        { title: "IT & Technology", value: "IT & Technology" },
        { title: "Sales & CSS", value: "Sales & CSS" },
        { title: "Business Support", value: "Business Support" },
        { title: "Operations", value: "Operations" },
        { title: "Supply Chain", value: "Supply Chain" },
        { title: "Human Resource", value: "Human Resource" },
        { title: "Accountance", value: "Accountance" },
        { title: "Marketing", value: "Marketing" },
      ],
    },
    {
      title: t("careers.jobType"),
      id: "type",
      content: [
        { title: "Full-time", value: "Fulltime" },
        { title: "Part-time", value: "Parttime" },
      ],
    },
  ];
  const selectedValuesLocation = useRef<string[]>([]);
  const selectedValuesCategory = useRef<string[]>([]);
  const selectedValuesType = useRef<string[]>([]);
  let valueSearch = useRef<string>("");


  const  handleInputChange = debounce(async (event: { target: { value: any } }) => {
    const value = event.target.value;
    const selectedLocation = selectedValuesLocation.current;
    const selectedCategory = selectedValuesCategory.current;
    const selectedType = selectedValuesType.current;
    valueSearch.current = value;
    const querySearch = {
      "category.name": {
        equals: "career",
      },
      or: [
        {
          title: {
            contains: valueSearch.current,
          },
        },
        {
          "attributes.location.lable": {
            contains: valueSearch.current,
          },
        },
        {
          "attributes.category.lable": {
            contains: valueSearch.current ,
          },
        },
        {
          "attributes.type.lable": {
            contains: valueSearch.current ,
          },
        },
      ],
    };
    const querySort = {
      "category.name": {
        equals: "career",
      },

      title: {
        contains: valueSearch.current,
      },

      "attributes.location.lable": {
        in: selectedLocation,
      },

      "attributes.category.lable": {
        in: selectedCategory,
      },

      "attributes.type.lable": {
        in: selectedType,
      },
    };
    const queryWhere = (selectedLocation && selectedCategory && selectedType && (selectedLocation.length > 0 || selectedCategory.length > 0 || selectedType.length > 0)) ? querySort : querySearch;
    const stringifiedQuery = qs.stringify(
      {
        where: queryWhere, // ensure that `qs` adds the `where` property, too!
        locale: "vi",
        limit: 50,
        sort: "-prioritize",
      },
      { addQueryPrefix: true }
    );
    let listPostCareer = await getPosts(stringifiedQuery);
    setlistCareer(listPostCareer?.posts?.docs);
    router.push(`/jobs?page=1`);
  }, 400); 
  
  const inputRef = useRef<HTMLInputElement | null>(null);
  const handleClearClick = () => {
    if (router.query && router.query.job) {
      inputRef.current?.setAttribute("value", router?.query?.job as string);
    }
  };
  useEffect(() => {
    setlistCareer(data?.data);

    handleClearClick();
  }, [router?.query?.job]);

  function search() {
    setWithout(null);

    listCareer?.items?.forEach((item: { title: string | string[] }) => {
      const titleValue = (item?.title as string).toLowerCase();
      if (titleValue.includes(searchText)) {
        arrayWithout.push(item);
      }
      setWithout(arrayWithout);
    });
  }

  const handleCheckboxChange =  debounce(async (event: any) => {
    const { value, checked } = event.target;
    const attributeType = event.target.getAttribute("data-id");
    if (attributeType === "location") {
      if (checked && value !== "") {
        selectedValuesLocation.current.push(value);
      } else {
        selectedValuesLocation.current = selectedValuesLocation.current.filter(
          (val) => val !== value
        );
      }
    } else if (attributeType === "category") {
      if (checked && value !== "") {
        selectedValuesCategory.current.push(value);
      } else {
        selectedValuesCategory.current = selectedValuesCategory.current.filter(
          (val) => val !== value
        );
      }
    } else if (attributeType === "type") {
      if (checked && value !== "") {
        selectedValuesType.current.push(value);
      } else {
        selectedValuesType.current = selectedValuesType.current.filter(
          (val) => val !== value
        );
      }
    }
    const selectedLocation = selectedValuesLocation.current;
    const selectedCategory = selectedValuesCategory.current;
    const selectedType = selectedValuesType.current;
    const querySearch = {
      "category.name": {
        equals: "career",
      },
      or: [
        {
          title: {
            contains: valueSearch.current,
          },
        },
        {
          "attributes.location.lable": {
            contains: valueSearch.current,
          },
        },
        {
          "attributes.category.lable": {
            contains: valueSearch.current ,
          },
        },
        {
          "attributes.type.lable": {
            contains: valueSearch.current ,
          },
        },
      ],
    };
    const querySort = {
      "category.name": {
        equals: "career",
      },

      title: {
        contains: valueSearch.current,
      },

      "attributes.location.lable": {
        in: selectedLocation,
      },

      "attributes.category.lable": {
        in: selectedCategory,
      },

      "attributes.type.lable": {
        in: selectedType,
      },
    };
    const queryWhere = (selectedLocation && selectedCategory && selectedType && (selectedLocation.length > 0 || selectedCategory.length > 0 || selectedType.length > 0)) ? querySort : querySearch;
    const stringifiedQuery = qs.stringify(
      {
        sort: "-prioritize",
        where: queryWhere, 
        locale: "vi",
        limit: 50,
      },
      { addQueryPrefix: true }
    );
    let listPostCareer = await getPosts(stringifiedQuery);
    setlistCareer(listPostCareer?.posts?.docs);
    router.push(`/jobs?page=1`);
  }, 400);

  return (
    <>
      <div id="list-career">
        <div className="container">
          <div className="row ">
            <div className="col-lg-3  row mb-4 ">
              <div className="find-job  " style={{ maxHeight: "max-content" }}>
                <div className="">
                  <h1 className="ps-2 fw-7 fs-20 fs-md-16">
                    {t("careers.ichibaCareers")}
                  </h1>
                  <div className="fw-5 pb-lg-3 p-2">{t("careers.findJob")}</div>
                  <div className="ps-2 pe-1 from-search">
                    <div className="input-group ">
                      <input
                        type="text"
                        className="form-control input-search"
                        placeholder="Search..."
                        ref={inputRef}
                        onChange={handleInputChange}
                      />
                      <span
                        className="input-group-text cursor"
                        id="basic-addon2"
                        style={{ background: "none" }}
                        onClick={search}
                      >
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                      </span>
                    </div>
                  </div>
                </div>
                {att.map((value, index) => (
                  <>
                    <div key={index}>
                      <div className="fw-5 p-2 mt-2">{value.title}</div>
                      <div className="ps-2 pe-1 ">
                        {value.content.map((value2, index2) => (
                          <>
                            <Form.Group controlId={value2.value} key={index2}>
                              <Form.Check
                                type="checkbox"
                                style={{ marginTop: "7px" }}
                                value={value2.value}
                                label={value2.title}
                                data-id={value.id}
                                onChange={handleCheckboxChange}
                              />
                            </Form.Group>
                          </>
                        ))}
                      </div>
                    </div>
                  </>
                ))}
              </div>
            </div>
            {
              <div className="col-lg-9 ">
                {listCareer?.length > 0 ? (
                  <>
                    <PaginateListCareers data={listCareer} />
                  </>
                ) : (
                  <>
                    <div className="p-3">{t("notCareers")}</div>
                  </>
                )}
              </div>
            }
          </div>
        </div>
      </div>
    </>
  );
}

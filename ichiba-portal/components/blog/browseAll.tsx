import React from "react";
import Select from "react-select";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Blog, BlogDetail } from "@/src/lib/__generated/sdk";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

export default function BrowseAll() {
  const router = useRouter();
  const [blog, setBlog] = useState<Blog>({} as Blog);

  useEffect(() => {}, []);
  return (
    <>
      <div id="browse-all">
        <div className="container ">
          <div className="pt-5 text-uppercase fs-30 fw-7">
            <span>browse all</span>
          </div>
          <div className="row pb-5 pt-lg-1 pt-3">
            <div className="col-lg-9"></div>
          </div>
          <div className="row">
            {blog?.browserAllCollection &&
              (blog?.browserAllCollection?.items?.length as number) > 0 &&
              blog?.browserAllCollection?.items?.map(
                (value: BlogDetail | null, index: number) => (
                  <div className="col-lg-4 mt-3" key={index}>
                    <div className="browse-items ">
                      <div className="most-img">
                        <img src={value?.img?.url || ""} alt="browse-items" />
                      </div>
                      <div className="most-content p-md-3 p-4">
                        <div className="type text-uppercase fs-12 py-2 category-content">
                          {value?.category}
                        </div>
                        <div
                          className="title fw-5 fs-20 content"
                          onClick={() => router.push("/blog/" + value?.slug)}
                        >
                          {value?.title}
                        </div>
                        <div className="pt-4 pb-2">
                          <div className="d-inline-block date pe-2">
                            1 tháng 2
                          </div>
                          <div className="d-inline-block ps-2">
                            jason holmes
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ),
              )}
          </div>
        </div>
      </div>
    </>
  );
}

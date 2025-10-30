import { getPosts } from "@/payload-client";
import { useRouter } from "next/router";
import qs from "qs";
import { useEffect } from "react";
const axios = require('axios');

export default function Related(data:any) { 
  // const router = useRouter()
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const query1 = {
  //       "category.name": {
  //         equals: "blog",
  //       },
  //       slugs: {
  //         equals: "blog3",
  //       },
  //     };
  //     const stringifiedQuery1 = qs.stringify(
  //       {
  //         where: query1, // ensure that `qs` adds the `where` property, too!
  //         locale: router?.locale,
  //       },
  //       { addQueryPrefix: true }
  //     );
  //       const response = await axios.get(`https://cms.ichiba.net/api/posts${stringifiedQuery1}`);
  //       const posts = response.data;
  //   }
  //   fetchData();
  // }, []);
  return(
    <>
        <div className="most-popular  ">
                <div >
{/*                  
                        <>
                           <div className="most-items mb-4" key={index}>
                            <div className="most-img">
                              <img src={value?.img?.url || ""} />
                            </div>
                            <div className="most-content p-md-3 p-4">
                              <div className="type text-uppercase fs-12 py-2 category-content">
                                {value?.category}
                              </div>
                              <div
                                className=" fs-18 fw-5 pb-2 content" 
                                onClick={() =>
                                  router.push("/blog/" + value?.slug)
                                }
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
                          </div>  */}

                  
                </div>
              </div>
    </>
  )
}

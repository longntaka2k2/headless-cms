import React from 'react'
import Select from 'react-select'
import { useEffect, useState } from "react";

import { useRouter } from 'next/router'


const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]

export default function BrowseAll() {
  // const router = useRouter()
  // const [blog, setBlog] = useState<Blog>({} as Blog);
  // const fetchData = async () => {
  //   const locale = router?.locale === 'en' ? 'en-US' : 'vi'
  //   let result = await client.blogEntry({locale:locale });

  //   const blogData = result?.blogCollection?.items[0] as Blog;
  //   await setBlog(blogData)
  // };
  // useEffect(() => {
  //   fetchData();
  // }, []);
  return(
    <>  
    {/* <div id="browse-all" >
      <div className="container ">
      <div className="pt-5 text-uppercase fs-30 fw-7"><span>browse all</span></div>
      <div className='row pb-5 pt-lg-1 pt-3'> 
        <div className="col-lg-9"></div>
        <div className="col-lg-3"><Select
        className="basic-single"
        classNamePrefix="select"
        defaultValue={options[0]}
        name="color"
        options={options}
      /></div> 
      </div>
      <div className="row">
      {blog?.browserAllCollection?.items?.length as number > 0 && blog?.browserAllCollection?.items?.map((value:BlogDetail | null , index : number) =>(
                <>
                  <div className="col-lg-4 mt-3">
              <div className="browse-items ">
                <div className="most-img">
                  <img src={value?.img?.url || ""} alt="" />
                </div>
                <div className="most-content p-md-3 p-4">
                  <div className="type text-uppercase fs-12 py-2 category-content">
                    {value?.category}
                  </div>
                  <div className="title fw-5 fs-20 content" onClick={() => router.push('/blog/'+value?.slug)}>
                  {value?.title}
                  </div>
                  <div className="pt-4 pb-2">
                    <div className="d-inline-block date pe-2">1 tháng 2</div>
                    <div className="d-inline-block ps-2">jason holmes</div>
                  </div>
                </div>
              </div>
            </div>
                </>))}
            
            
          </div>
      </div>
    </div> */}
    </>
  )
}
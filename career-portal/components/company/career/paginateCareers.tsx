/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/link-passhref */
import { faClock, faLocationDot, faCopy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function PaginateListCareers(data: any) {
  const { t } = useTranslation("common");
  const router = useRouter();
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const itemsPerPage = 6;

  useEffect(() => {
    // Hàm để lấy danh sách sản phẩm từ nguồn dữ liệu (API, database, ...)
    const fetchProducts = async () => {
      // Lấy giá trị trang từ query params hoặc mặc định là trang 1
      const page = parseInt(router?.query?.page as any) || 1;
      // Tính toán chỉ số bắt đầu và kết thúc của sản phẩm trên trang hiện tại
      const startIndex = (page - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      // Cập nhật danh sách sản phẩm, trang hiện tại và tổng số trang
      setProducts(data?.data.slice(startIndex, endIndex));
      setCurrentPage(page);
      setTotalPages(Math.ceil(data?.data?.length / itemsPerPage));
    };

    fetchProducts();
    
  }, [router.query.page,data]);

  const handlePaginationClick = (page : string) => {
    if(router?.query?.job){
      router.push(`/jobs?page=${page}?job=${router?.query?.job}`);
    }else{
      router.push(`/jobs?page=${page}`);
    }
  };
  function copyToClipboard(text : string) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    toast.success(t("careers.copySuccess"), { autoClose: 700 });
  }
  function copyLink (link : string){
    copyToClipboard(link )
  }
  return(
    <>
    <div className="list-careers-render">

      {products?.map((value: any, index: number) => (
        <>
          <div
           key={index}
            className="text-decoration-none color-black d-block career-items cursor me-lg-4 mb-lg-3 mb-4 p-4"
          >
            <div
              onClick={() => router.push("/jobs/" + value?.slugs)}
              className="text-decoration-none d-block color-black title mb-4 fw-7 fs-20 fs-md-16"
            >
              {value?.title}
            </div>
            <div className="d-lg-flex justify-content-between pe-lg-5 me-lg-5 fw-5">
              <span className="d-block">
                <FontAwesomeIcon
                  icon={faClock}
                  className="me-2"
                />
                {
                  value.layout?.find(
                    (x: { blockName: string }) =>
                      x.blockName === "heading"
                  )?.columns[1].quoteText
                }
              </span>
              <span className="d-block">
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className="me-2"
                />
                {
                  value.layout?.find(
                    (x: { blockName: string }) =>
                      x.blockName === "heading"
                  )?.columns[0]?.quoteText
                }
              </span>
              <span className="d-block" onClick={() => copyLink(window.location.href+'/'+ value?.slugs)}>
                <FontAwesomeIcon icon={faCopy} /> Copy link
              </span>
            </div>
          </div>
        </>
      ))}
    </div>
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePaginationClick((index as any) + 1 )}
            className={currentPage === index + 1 ? 'active btn-pagination me-2' : 'btn-pagination me-2'}
          >
            {index + 1}
          </button>
        ))}
      </div>
      <ToastContainer />

    </>
  )
}
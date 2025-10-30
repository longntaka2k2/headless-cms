
import bgOurData from "@/public/images/404.jpg";
import { RelativeImagePath } from "@/utils/ultils";
import Image from "next/image";
import { parse } from "node-html-parser";
const RichText = ({ content }: any) => {
  const renderRichtext = () => {
    if (content) {

      const doc = parse(content);

      // Lấy tất cả các thẻ img trong nội dung
      const imgElements = doc.querySelectorAll("img");

      // Chuyển đổi đường dẫn tương đối thành đường dẫn đầy đủ cho mỗi thẻ img
      imgElements.forEach((imgElement) => {
        const src = imgElement.getAttribute("src");
        if (src) {
          const absoluteSrc = RelativeImagePath(src);
          imgElement.setAttribute("src", absoluteSrc);
          imgElement.setAttribute("srcset", absoluteSrc);
        }
      });
      const ulElements = doc.querySelectorAll("ul");

      // Lặp qua tất cả thẻ ul và thêm một class CSS cho chúng
      ulElements.forEach((ulElement) => {
        ulElement.classList.add("list-disc");
      });
      const iframeElements = doc.querySelectorAll("iframe");

      // Lặp qua tất cả thẻ ul và thêm một class CSS cho chúng
      iframeElements.forEach((iframeElements) => {
        iframeElements.classList.add("w-full");
      });
      // Cập nhật nội dung đã xử lý
      return doc.innerHTML;
    } else {
      return "";
    }
  };

  return (
    <div>
      {content ? (
        <div dangerouslySetInnerHTML={{ __html: renderRichtext() }} />
      ) : (
        <Image
          src={bgOurData}
          alt="EFEX"
          className="mx-auto d-block"
          width={500}
          height={500}
          quality={100}
          style={{ maxWidth: "100%", height: "auto" }}
        />
      )}
    </div>
  );
};

export default RichText;

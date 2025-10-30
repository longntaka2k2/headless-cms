import { Language } from "@/const/language";

export const data = {
  [Language.EN]: [
    {
      question: "What is a PIM?",
      answer:
        "A PIM (Product Information Management) system gathers all of your product information in one place, enriches it, and distributes it across multiple channels. Product information encompasses all specifications and aspects of a product, including marketing information (name, description, SEO tags, and so on), technical data (product specs, configurations, datasheets, and so on), media information (pictures, videos, and so on), and more.",
    },
    {
      question: "Are there any limits on how many products I can store?",
      answer:
        "IChiba OnePlatform's PIM is cloud-native and can handle thousands of accounts, each account can accommodate millions of products. However, if you want to scale up the storage, we are always willing to support.",
    },
    {
      question:
        "Is my data secure? What backup and retention plans do you have in place?",
      answer:
        "We take data security seriously and host all of our servers in a secure cloud environment with periodic backup and BCP/DR procedures. The software is delivered in a multi-tenant architecture, which means you own and control your data while no one else has access to it.",
    },
  ],
  [Language.VI]: [
    {
      question: "PIM là gì?",
      answer:
        "PIM (Product Information Management) là phần mềm quản lý thông tin sản phẩm. Trong đó, các dữ liệu về sản phẩm sẽ được tập trung và quản lý tại một nơi. Nhà bán có thể bổ sung, chỉnh sửa thông tin đó trên nhiều kênh bán hàng. Thông tin sản phẩm bao gồm tất cả các thông số kỹ thuật và dữ liệu liên quan đến sản phẩm: thông tin marketing (tên, mô tả, thẻ SEO,...), dữ liệu về kỹ thuật (thông số, cấu hình, bảng phân tích,...), phương tiện hiển thị (ảnh, video,...).",
    },
    {
      question:
        "PIM của IChiba OnePlatform có giới hạn lượng thông tin sản phẩm lưu trữ không?",
      answer:
        "PIM của IChiba OnePlatform hoạt động dựa trên công nghệ điện toán đám mây và có thể xử lý hàng nghìn tài khoản, mỗi tài khoản có thể chứa thông tin của hàng triệu sản phẩm. Tuy nhiên, nếu bạn muốn mở rộng quy mô lưu trữ, chúng tôi luôn sẵn lòng hỗ trợ.",
    },
    {
      question:
        "Nếu dùng PIM thì dữ liệu của tôi có được lưu trữ an toàn không? Có kế hoạch sao lưu và bảo trì nào không?",
      answer:
        "IChiba OnePlatform rất coi trọng vấn đề bảo mật dữ liệu. Chúng tôi quản lý các server trên môi trường điện toán đám mây với các quy trình BCP/DR và sao lưu định kỳ. Phần mềm sử dụng kiến trúc phần mềm multi-tenant (hệ thống đa khách hàng), nghĩa là bạn có quyền sở hữu và kiểm soát dữ liệu của mình một cách tuyệt đối, không ai khác có quyền truy cập vào đó.",
    },
  ],
};

// load from CMS

import { Language } from '@/const/language';

export const contentRows = {
  [Language.EN]: [
    {
      content:
        'Using sophisticated search capabilities to quickly locate media files, informative product images, and attractive catalogs',
    },
    {
      content:
        'Organize branded digital assets in folders/subfolders, and quickly share them across marketplaces',
    },
    {
      content:
        'Save time by automating workflows and centralizing the repository',
    },
  ],
  [Language.VI]: [
    {
      content:
        'Chức năng tìm kiếm thông minh giúp nhanh chóng tìm kiếm hình ảnh và danh mục sản phẩm.',
    },
    {
      content:
        'Sắp xếp các tài nguyên kỹ thuật số một cách khoa học, giúp người bán nhanh chóng chia sẻ chúng trên nhiều kênh bán hàng.',
    },
    {
      content:
        'Tiết kiệm thời gian bằng cách tự động hóa quy trình công việc và tập trung hóa kho lưu trữ.',
    },
  ],
};

export const automaticDataEnrichment = {
  [Language.EN]: {
    contentRows: [
      'Maintain consistent business content standards across all products',
      'Provide the precise product information that buyers want',
      'Easily filter and search for product characteristics by improving search engine results',
    ],
    image: '/icons/pim/automatic-setting.svg',
  },
  [Language.VI]: {
    contentRows: [
      'Duy trì sự nhất quán trên các nội dung mô tả sản phẩm.',
      'Cung cấp chính xác những thông tin mà người mua muốn.',
      'Dễ dàng lọc và tìm kiếm các đặc điểm của sản phẩm với công cụ tìm kiếm thông minh.',
    ],
    image: '/icons/pim/automatic-setting.svg',
  },
};

export const multiMerchantManagement = {
  [Language.EN]: {
    contentRows: [
      'Transfer data from one sales channel to another effortlessly.',
      'Double-check data accuracy ratings before uploading.',
      'Syndicating product content in volume and making it market-ready.',
      'Optimize keywords and product information for fast search.',
    ],
    image: '/icons/pim/data.svg',
  },
  [Language.VI]: {
    contentRows: [
      'Chuyển dữ liệu từ kênh bán hàng này sang kênh bán hàng khác một cách dễ dàng.',
      'Kiểm tra độ chính xác của dữ liệu trước khi tải lên.',
      'Đồng bộ và chuẩn hóa thông tin sản phẩm trước khi cập nhật lên kênh bán hàng.',
      'Tối ưu từ khóa và thông tin sản phẩm giúp người mua dễ dàng tra cứu',
    ],
    image: '/icons/pim/data.svg',
  },
};

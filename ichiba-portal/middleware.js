import { NextResponse } from 'next/server';

export async function middleware(request) {
  try {
    // Lấy danh sách redirect từ API
    const res = await fetch("https://cms-strapi.ichiba.net/redirects");
    const response = await res.json();
    
    // Lấy đường dẫn hiện tại
    const path = request.nextUrl.pathname;
    
    // Kiểm tra xem có thuộc tính data là mảng không
    if (response && Array.isArray(response.data)) {
      // Tìm redirect phù hợp
      const matchedRedirect = response.data.find(item => {
        const source = item.attributes?.from || '';
        return source === path;
      });
      
      // Nếu tìm thấy redirect phù hợp, thực hiện redirect
      if (matchedRedirect) {
        const destination = matchedRedirect.attributes?.to || '';
        if (destination) {
          return NextResponse.redirect(new URL(destination, request.url));
        }
      }
    }
  } catch (error) {
    console.error("Lỗi khi xử lý redirect:", error);
  }
  
  // Nếu không có redirect nào phù hợp, tiếp tục xử lý request
  return NextResponse.next();
}

// Chỉ áp dụng middleware cho các đường dẫn bắt đầu bằng /blog
export const config = {
  matcher: '/blog/:path*',
};
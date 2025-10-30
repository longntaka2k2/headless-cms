import axios from 'axios';

export const getDataSearchCareers = async (params: string) => {
  try {
    const response = await axios.get(`https://cms.ichiba.net/api/posts${params}`, {
      headers: {
        'Access-Control-Allow-Origin': '*', // Thay thế bằng nguồn gốc (origin) cho phép truy cập vào API của bạn
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE', // Các phương thức HTTP cho phép
        'Access-Control-Allow-Headers': 'Content-Type', // Các tiêu đề cho phép
      },
    });
    const posts = response.data;

    return {
      posts,
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

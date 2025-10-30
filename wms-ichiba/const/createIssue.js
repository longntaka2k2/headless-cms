import axios from 'axios';

export default async function createIssue(data) {
  const api = process.env.NEXT_PUBLIC_API_CREATE_ISSUE;
  let result
  try {
    const response = await axios.post(api, data);
    result = response
  } catch (error) {
    // res.status(error.response.status).json(error.response.data);
    result = error
  }
  return result
}
import axios from 'axios';

export default async function createIssue(data) {
  let result
  try {
    const response = await axios.post('https://jira-services.ichiba.net/api/jira-service/create-issue', data);
    result = response
  } catch (error) {
    // res.status(error.response.status).json(error.response.data);
    result = error
  }
  return result
}
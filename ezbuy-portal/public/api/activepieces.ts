import axios from "axios";

const api =
  "https://activepieces.ichiba.net/api/v1/webhooks/WY4UfKBeHdsSna28chgWK";
export const sendToWebhook = async (payload: any) => {
  return await axios
    .post(api, payload)
    .then((response) => {
      return {
        success: true,
        data: response.data,
      };
    })
    .catch((err) => {
      return {
        success: false,
      };
    });
};

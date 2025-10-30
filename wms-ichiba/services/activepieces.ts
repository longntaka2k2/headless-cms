import axios from 'axios';

const api = process.env.NEXT_PUBLIC_ACTIVEPIECES_WEBHOOK as string;
export const sendToWebhook = async (payload: any) => {
    return await axios.post(api, payload)
        .then(response => {
            return {
                success: true,
                data: response.data
            };
        })
        .catch(err => {
            return {
                success: false
            };
        });
};
const axios = require('axios');

const getIndustry = () => {
  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: 'https://test-api.ichiba.net/pim/rrs-company/onboarding/seed-catalogs',
    headers: { 
      'authority': 'test-api.ichiba.net', 
      'accept': '*/*', 
      'accept-language': 'vi-VN', 
      'cookie': 'expires_in=638406701414923660; __BFF=CfDJ8AVPpxju8KlLjX9t38e1brjIeMcFxYPwqwwUHb-yHHFj3pmDrnqb9VHq-W8aLUk2Mhp_HVTKtBD-YEo2EZ09Exw7R6eqKg5Ssh5JLGXWrHLvQ8fvwBq9CGi90iUDckBmwx_lVLKiz_wrd_eqig2Oj198ZYROjPdhgIjs0ELkHbJWLkTPSuC4-On2Dry6UQdf1fSwjFhCvKvUQW3PbP1tLlPvQ3Q85gFhtz3sMRZyRV_HrmdvsbtTsTExsUTo2d0S5Nz_D-Z0zEKKSkIzll9duwrEzUFA6ysdWWgB2h390oa6PdOTrUOC7lIRI2NvWDITVtHfDztqT8KKUBUOHN16l_3etC9hpqSo-Sugsr45lvHMnY9h4aqHCbT83h9Pb-MN3gUSuVgvvnyzeVgIFM-f9YVffHoP0SGt-K11WTJiyWUuo18FP5u5Vgcml8RgnMkIplmVM18viLwHF1rjgh6OIm_eoQL1AA_K68nvHfWbtDaER4M8PnEFImddhK2pDGwnYsDbBilho-Mi4EezaN_0m4QP1HS0FHaT61sydZB9qqdeXdzJnbJeNXq1wZalqjkekwNFVx2pAq-2Z4t9-azJX3DKCc0BV42ONVgrkZAB2G532pw_UKLOY1z5fYPkpmf5jV-4dqkNpthBbQ--OVjl6q4VgxXBmozGcNgqqhL6gLe-7d_LqtffmIuLTMiV56hJ4g677UvY359x9rImX35Y95cL3Nd87oDQeQuSOvuZl5ssqnIVyxdP3G5UlM7KAT6M32s5sE7LCkt27BmKMMIS0Fo9Vj7EJ4L8Z3qaubt32K-qvl9Yy42d2QUUcmD5fJ0usxw0klg7AJ3uwF_UwdoHBL9Q1IcSkthVT4MrarOlekQJvb5z-O93oAGvVVy-P-uy7Hxcq_Q4XpKR7FL4eJJ1Ju9Bk0farXYa2tJf1YaCnFDo; SERVERID=01; SERVERID=01; rNwwagQ7k85nsbqJEIUfmc4X19g3vTeNMnJg2zI3D5w=N'
    }
  };
  let industry: any[] = []
  axios.request(config)
  .then((response: { data: any; }) => {
    industry = response.data
  })
  .catch((error: any) => {
    console.log(error);
  });
  return industry
}

export {getIndustry}

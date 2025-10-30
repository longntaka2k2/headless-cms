export const addPerson = async (params: any) => {
  const axios = require("axios");
  let config = {
    method: "POST",
    url: `https://icb2.pipedrive.com/api/v1/persons?api_token=9bca12a3180d496067d542057a8c88d907c18c04`,
    data: params,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  };
  return axios
    .request(config)
    .then((response: { data: any }) => {
      return response.data;
    })
    .catch((error: any) => {
      return error;
    });
};

export const addLead = async (params: any) => {
  const axios = require("axios");
  let config = {
    method: "POST",
    url: `https://icb2.pipedrive.com/api/v1/leads?api_token=9bca12a3180d496067d542057a8c88d907c18c04`,
    data: params,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  };
  return axios
    .request(config)
    .then((response: { data: any }) => {
      return response.data;
    })
    .catch((error: any) => {
      return error;
    });
};

export const searchPerson = async (email: any , phone : any) => {
  const encodedEmail = encodeURIComponent(email+','+phone);
  const axios = require("axios");
   let config =  {
    method: "GET",
    url: `https://icb2.pipedrive.com/api/v1/itemSearch?term=${encodedEmail}&item_types=person&fields=email,phone&api_token=9bca12a3180d496067d542057a8c88d907c18c04`,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  };
  return axios
  .request(config)
  .then((response: { data: any }) => {
    return response.data;
  })
  .catch((error: any) => {
    return error;
  });
  
};

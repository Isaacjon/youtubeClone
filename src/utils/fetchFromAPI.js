import axios from "axios";

export const BASE_URL = "https://youtube-v31.p.rapidapi.com";

// console.log(
//   "process.env.REACT_APP_RAPID_API_KEY",
//   process.env.REACT_APP_RAPID_API_KEY
// );
const options = {
  params: {
    maxResults: 50,
  },
  headers: {
    "X-RapidAPI-Key": "6b9516f5d9msh1e6951593c961c6p1107e4jsn656ddb0f1a21",
    // process.env.REACT_APP_RAPID_API_KEY ||
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};

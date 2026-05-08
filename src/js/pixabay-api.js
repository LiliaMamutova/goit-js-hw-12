import axios from 'axios';

const API_KEY = "55632316-73dae94149f02da0b6b69c83b";
const BASE_URL = "https://pixabay.com/api/?";
export let limit = 15;

export async function getImagesByQuery(query, page = 1) {

  const params = new URLSearchParams({
    key: API_KEY,
    page,
    per_page: limit,
    q: query,
    image_type: "photo",
    orientation: "horizontal",
    safesearch: true,
  })
  const { data } = await axios.get(`${BASE_URL}${params}`);
  return data;
}


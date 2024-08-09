import axios from "axios";

export async function getImage(query, page) {
  const BASE_URL = "https://api.unsplash.com";
  const END_POINT = "/photos/";
  const url = BASE_URL + END_POINT;
  const params = {
    query: query,
    page: page,
    per_page: 20,
    client_id: "d1ifJFELUOY7I6Qi3c7yxUHxXu7irkOiKD6RH8L5y3I",
  };

  const { data } = await axios.get(url, { params });
  return data;
}

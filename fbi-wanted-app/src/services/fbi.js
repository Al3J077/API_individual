import axios from "axios";

const BASE = "https://api.fbi.gov/wanted/v1/list";

export async function getWanted(params = {}) {
  const res = await axios.get(BASE, { params });
  return res.data;
}
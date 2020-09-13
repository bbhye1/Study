import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID dp4dY_5gim_Ed7ATedHCHyM7MrB7NQgj_1AUL8TsN1k",
  },
});

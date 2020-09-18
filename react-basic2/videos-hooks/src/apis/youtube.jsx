import axios from "axios";

const KEY = "AIzaSyDTKCVWQ25XKM-UXdGTQ-XcDUg95I-FRpg";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});

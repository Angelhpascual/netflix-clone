import axios from "axios";

/** baseurl to make requeststo the movie database */

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export default instance;

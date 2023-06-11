import axios from "axios";
// Create an instance of axios
const api = axios.create({
  baseURL: "https://master-7rqtwti-yj2le3kr2yhmu.uk-1.platformsh.site/yumazoo/",
  headers: {
    "Content-Type": "application/json",
  },
});
/*
  NOTE: intercept any error responses from the api
 and check if the token is no longer valid.
 ie. Token has expired or user is no longer
 authenticated.
 logout the user if the token has expired
*/

api.interceptors.response.use(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (res: any) => res,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (err: any) => {
    return Promise.reject(err);
  }
);

export default api;

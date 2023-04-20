import axios from "axios";
import store from "./../Store/index";

const url = {
  baseUrl: "http://localhost:8080/laravelapi/public/api",
  login: "/member/login",
  menu: "/Menu",
  product: "/Product",
  ProductCategory: "/ProductCategory",
};

const instance = axios.create({
  baseURL: url.baseUrl,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

instance.interceptors.request.use((request) => {
  const state = store.getState();
  if (state.auth.token) {
    request.headers.Authorization = `Bearer ${state.auth.token}`;
  }
  return request;
});
instance.interceptors.response.use(
  (response) => response.data,
  (err) => {
    if (err.code === "ERR_NETWORK") {
      window.location.href = "/network-error";
    } else {
      switch (err.response.status) {
        case 401:
          window.location.href = "/login";
          break;
        case 403:
          window.location.href = "/no-permission";
          break;
        default:
          break;
      }
    }
    return Promise.reject(err);
  }
);

const api = {
  url,
  instance,
  get: instance.get,
  post: instance.post,
  put: instance.put,
  delete: instance.delete,
  patch: instance.patch,
};

export default api;

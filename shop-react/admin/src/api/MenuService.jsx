import api from "./api";
const list = () => api.get(api.url.menu);
const get = (id) => api.get(`${api.url.menu}/${id}`);
const add = (data) => api.post(api.url.menu, data);
const update = (id, data) => api.put(`${api.url.menu}/${id}`, data);
const remove = (id) => api.delete(`${api.url.menu}/${id}`);

const menuService = {
  list,
  get,
  add,
  update,
  delete: remove,
};

export default menuService;

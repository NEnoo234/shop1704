import api from "./api";
const list = () => api.get(api.url.product);
const get = (id) => api.get(`${api.url.product}/${id}`);
const add = (data) => api.post(api.url.product, data);
const update = (id, data) => api.put(`${api.url.product}/${id}`, data);
const remove = (id) => api.delete(`${api.url.product}/${id}`);

const ProductService = {
  list,
  get,
  add,
  update,
  delete: remove,
};

export default ProductService;

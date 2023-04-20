import api from "./api";
const list = () => api.get(api.url.ProductCategory);
const get = (id) => api.get(`${api.url.ProductCategory}/${id}`);
const add = (data) => api.post(api.url.ProductCategory, data);
const update = (id, data) => api.put(`${api.url.ProductCategory}/${id}`, data);
const remove = (id) => api.delete(`${api.url.ProductCategory}/${id}`);

const ProductCategoryService = {
  list,
  get,
  add,
  update,
  delete: remove,
};

export default ProductCategoryService;

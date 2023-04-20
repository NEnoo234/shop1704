import api from "./api";
const list = () => api.get(api.url.ProductCategory);
const get = (id) => api.get(`${api.url.ProductCategory}/${id}`);
const ProductCategoryService = {
  list,
  get,
};

export default ProductCategoryService;

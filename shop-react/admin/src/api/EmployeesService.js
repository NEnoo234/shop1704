import api from "./api";
const list = () => api.get(api.url.employees);
const get = (id) => api.get(`${api.url.employees}/${id}`);

const add = (data) => {
  const formData = new FormData();
  for (const key in data) formData.append(key, data[key]);
  return api.post(api.url.employees, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};
const update = (id, data) => api.put(`${api.url.employees}/${id}`, data);

const remove = (id) => api.delete(`${api.url.employees}/${id}`);

const employeesService = {
  list,
  get,
  add,
  update,
  delete: remove,
};

export default employeesService;

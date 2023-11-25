import api from "./api.service";

class ProductService {
  async getAll() {
    return (await api.get("/product")).data;
  }
  async create(data) {
    return (await api.post("/product", data)).data;
  }
  async get(id) {
    return (await api.get(`/product/${id}`)).data;
  }
  async getbyname(ten) {
    return (await api.get("/product/byname", {params: {ten}})).data;
  }
  async update(id, data) {
    return (await api.put(`/product/${id}`, data)).data;
  }
  async delete(id) {
    return (await api.delete(`/product/${id}`)).data;
  }
}
export default new ProductService();



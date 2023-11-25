import api from "./api.service";

class UserService {
  async getAll() {
    return (await api.get("/user")).data;
  }
  async create(data) {
    return (await api.post("/user", data)).data;
  }
  async get(id) {
    return (await api.get(`/user/${id}`)).data;
  }
  async getbyname(fullName) {
    return (await api.get("/user/byname", {params: {fullName}})).data;
  }
  async delete(id) {
    return (await api.delete(`/user/${id}`)).data;
  }
}
export default new UserService();



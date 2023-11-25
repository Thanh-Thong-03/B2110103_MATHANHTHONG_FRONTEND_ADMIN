import api from './api.service';

class StaffService {
    async getAll() {
        return (await api.get('/staff')).data;
    }
    async create (data) {
        return (await api.post("/staff", data)).data;
    }
    async getbyname(hoten) {
        return (await api.get("/staff/byname", {params: {hoten}})).data;
    }
    async get(id) {
        return (await api.get(`/product/${id}`)).data;
    }
    async delete(id) {
        return (await api.delete(`/product/${id}`)).data;
    }
}

export default new StaffService();
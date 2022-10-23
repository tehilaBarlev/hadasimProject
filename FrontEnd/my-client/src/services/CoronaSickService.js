import api from '../api';

export default class CoronaSickService {
    async getAllCoronaSick(){
        return await api.get('/CoronaSick').then(res => res.data);
    }
    async getCoronaSick(id){
        return await api.get(`/CoronaSick/getCoronaSick?id=${id}`).then(res => res.data);
    }
    async addCoronaSick(newCoronaSick){
        return await api.post('/CoronaSick',newCoronaSick).then(res => res.data);
    }
    async updateCoronaSick(newClient){
        return await api.put('/CoronaSick',newClient).then(res => res.data);
    }
    async deleteCoronaSick(id){
        return await api.delete(`/CoronaSick?id=${id}`).then(res => res.data);
    }
}
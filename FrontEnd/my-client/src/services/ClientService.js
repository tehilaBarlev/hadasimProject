import api from '../api';

export default class ClientService {
    async getAllClient(){
        return await api.get('/client').then(res => res.data);
    }
    async getClient(id){
        return await api.get(`/client/getClient?id=${id}`).then(res => res.data);
    }
    async addClient(newClient){
        return await api.post('/client',newClient).then(res => res.data);
    }
    async updateClient(newClient){
        return await api.put('/client',newClient).then(res => res.data);
    }
    deleteClient(id){
        return api.delete(`/client?id=${id}`).then(res => res.data);
    }
}
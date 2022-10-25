import api from '../api';

export default class VaccinationService {
    getAllVaccination(){
        return api.get('/Vaccination').then(res => res.data);
    }
    async getVaccination(id){
        return await api.get(`/Vaccination/getVaccination?id=${id}`).then(res =>res.data);
    }
    async addVaccination(newVaccination){
        return await api.post('/Vaccination',newVaccination).then();
    }
    updateVaccination(newVaccination){
        return api.put('/Vaccination',newVaccination).then(res => res.data);
    }
    async deleteVaccination(id){
        return await api.delete(`/Vaccination?id=${id}`).then(res => res.data);
    }
}
import api from '../api';

export default class VaccinationService {
    getAllVaccination(){
        return api.get('/Vaccination').then(res => res.data);
    }
    async getVaccination(id){
        return await api.get(`/Vaccination/getVaccination?id=${id}`).then(res =>res.data);
    }
    addVaccination(newVaccination){
        return api.post('/Vaccination',newVaccination).then(res => res.data);
    }
    updateVaccination(newVaccination){
        return api.put('/Vaccination',newVaccination).then(res => res.data);
    }
    deleteVaccination(id){
        return api.delete('/Vaccination',id).then(res => res.data);
    }
}
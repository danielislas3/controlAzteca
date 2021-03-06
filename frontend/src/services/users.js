import axios from 'axios'
const baseURL = 'https://guarded-forest-20744.herokuapp.com'
const loggedUser = JSON.parse(localStorage.getItem('loggedUser'))
class GastoService {
  
    constructor() {
        this.service = axios.create({
            baseURL,
            withCredentials: true
        })
    }
    transaction(data) {
        return this.service.post(`/info/${loggedUser._id}/transaction`, data)
    }
    ingresos(data) {
        return this.service.get(`/info/${loggedUser._id}/transactions`, data)
    }
    gastos(data) {
        return this.service.get(`/info/${loggedUser._id}/transactionsg`, data)
    }
}

export default GastoService
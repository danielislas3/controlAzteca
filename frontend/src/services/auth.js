import axios from 'axios'
const baseURL = 'http://localhost:3000'

class AuthService {
    constructor() {
        this.service = axios.create({
            baseURL,
            withCredentials: true
        })
    }
    signup(data) {
        return this.service.post('/auth/signup', data)
    }
    login(data) {
        return this.service.post('/auth/login', data)
    }
    logout() {
        return this.service.get('/auth/logout')
    }
}

export default AuthService
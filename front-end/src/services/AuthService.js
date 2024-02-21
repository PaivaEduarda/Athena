import axios from 'axios'

const API_URL = 'http://localhost:5015/api/Login'

const login = (username, password) => {
    return axios.post(API_URL + "/login", {usuario: username, senha: password})
                .then((response) => {
                    if (response.data.token)
                        localStorage.setItem("user", JSON.stringify(response.data))

                    return response.data;
                })
}

const register = ( usuario ) => {
    return axios.post(API_URL + "registro", usuario)
                .then((response) => {
                    if (response.data.token)
                        localStorage.setItem("user", JSON.stringify(response.data))

                    return response.data;
                })
}

const logout = () => {
    localStorage.removeItem("user")
}

const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"))
}

const AuthService = {login, register, logout, getCurrentUser}

export default AuthService;
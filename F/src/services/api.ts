import axios from "axios"; 
const url = {
    baseUrl: "http://127.0.0.1:8000/api",
    login: "/login",
    register: "/register",
    
}
const instance = axios.create({
    baseURL: url.baseUrl,
    headers: {
        "Content-Type" : "application/json",
        Accept: "application/json",
    },
});
const api = {
    url,
    instance, 
    get: instance.get,
    post: instance.post,
    put: instance.put,
    delete: instance.delete,
    patch: instance.patch,
}
export default api
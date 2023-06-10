import axios from 'axios'
import { getToken, rmToken } from './token'


axios.defaults.headers["Content-Type"] = "application/json;charset=utf-8"
const baseURL = 'http://127.0.0.1:3001/api'


export const ax = axios.create({
    baseURL: baseURL
})


// 请求拦截
ax.interceptors.request.use((config) => {
    const token = getToken() || ""
    config.headers["Authorization"] = token

    return config
})

// 响应拦截
ax.interceptors.response.use(
    (res) => {
        return res
    },
    (e) => {
        console.log(e);
        ElMessage(e.response.statusText)
        if (e.response.status == 401) {
            setTimeout(() => {
                rmToken()
                location.href = "/home"
            }, 2000);
        }
    }
)

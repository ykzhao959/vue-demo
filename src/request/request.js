// 这份文件就是用来做拦截的
import axios from 'axios';

//创建一个单例（实例）
const instance = axios.create({
    baseURL: 'https://autumnfish.cn',
    timeout: 4000
})

//拦截器 - 请求拦截
instance.interceptors.request.use(config => {
    //部分接口需要拿到token
    let token = localStorage.getItem('token');
    if (token) {
        config.headers = {
            'tiem-token': token
        }
    }
    return config;
}, err => {
    return Promise.reject(err)
})

//拦截器 - 响应拦截
instance.interceptors.request.use(res => {
    return res;
}, err => {
    return Promise.reject(err)
})

// 整体导出
export default instance;
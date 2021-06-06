// 将request.js整体导入
import request from './request'

// 按需导出每个请求，也就是按需导出每个api

// 请求笑话数据
export const GetJokeAPI = (params) => request.get('/api/joke/list', { params });

// 登录
export const PostJokeAPI = (params) => request.post('api/user/reg', params);
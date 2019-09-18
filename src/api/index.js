import axios from 'axios';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

// 基地址
const base="https://api.cat-shop.penkuoer.com";

//拦截器
// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    NProgress.start()
    if(localStorage.getItem('token')){
        config.headers.common['authorization'] = "Bearer "+localStorage.getItem('token');
        console.log('get token');
    }
    console.log('if了');
    return config;
  }, function (error) {
	// 对请求错误做些什么
	console.log('请求错误')
    return Promise.reject(error);
  });

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    NProgress.done();
    return response;
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  });
 
export const POST=(url,params)=>{
	return axios.post(`${base}${url}`,params).then(res=>res)
}
export const GET=(url,params)=>{
	return axios.get(`${base}${url}`,{params:params}).then(res=>res)
}
export const DELETE=(url,params)=>{
	return axios.delete(`${base}${url}`,{params:params}).then(res=>res)
}
export const PUT=(url,params)=>{
	return axios.put(`${base}${url}`,params).then(res=>res)
}

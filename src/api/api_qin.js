import * as API from './index'

export default{
	//获取用户列表
	getUser:(params)=>{
		return API.GET('/api/v1/admin/users',params)
	},
	//获取指定用户的信息
	getOneUser:(pid)=>{
		return API.GET(`/api/v1/admin/users/${pid}`)
	},
	//删除用户
	delUser:id=>{
		return API.DELETE(`/api/v1/admin/users/${id}`)
	},
	//管理员登录
	admin:params=>{
		return API.POST('/api/v1/auth/manager_login',params)
	},
	//商品列表
	booklist:params=>{
		return API.GET('/api/v1/admin/products',params)
	},
	// 删除商品
	delBook:id=>{
		return API.DELETE(`/api/v1/admin/products/${id}`)
	},
	//添加商品
	addpro:params=>{
		return API.POST('/api/v1/admin/products',params)
	}
}

import * as API from './index'

export default{
	//获取用户列表
	getUser:(params)=>{
		return API.GET('/api/v1/admin/users',params)
	},
	//管理员登录
	admin:(data)=>{
		return API.POST('/api/v1/auth/manager_login',data)
	},
	getDetail:params=>{
		return API.GET('/detail.php',params)
	},
	postUserInfo:data=>{
		return API.POST('/api/v1/auth/reg',data)
	}
}

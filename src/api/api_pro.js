import * as API from './index'

export default{
	getProduct:params=>{
		return API.GET('/productlist.php',params)
	},
	getDetail:params=>{
		return API.GET('/detail.php',params)
	},
	postUserInfo:data=>{
		return API.POST('/api/v1/auth/reg',data)
	}
}

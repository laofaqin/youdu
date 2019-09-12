import * as API from './index';

export default {
    //管理员登陆
	adminLogin:(data)=>{
		return API.POST('/api/v1/auth/manager_login',data)
	},
}

import * as API from './index'

export default{
    getUsersInfo(){
        return API.GET('/api/v1/users/info')
    },
    getAllOrder(){
        return API.GET('/api/v1/products')
    },
    sentOrders:data=>{
        return API.POST('/api/v1/orders',data)
    },
    getOrders(){
        return API.GET('/api/v1/orders')
    },
    orderDetail(){
        return API.GET(`/api/v1/orders/${id}`)
    },
    // 新增收获地址
    newAddress:params=>{
        return API.POST('/api/v1/addresses',params)
    },
    // 获取收获地址
    getAddress(){
        return API.GET('/api/v1/addresses')
    },
    // 获取单条地址
    getOneAddress:id=>{
        return API.GET(`/api/v1/addresses/${id}`)
    },
    // 修改收货地址
    reSetAddress:(id,params)=>{
        return API.PUT(`/api/v1/addresses/${id}`,params)
    },
    // 删除收货地址
    DelAddress:id=>{
        return API.DELETE(`/api/v1/addresses/${id}`)
    }
    
}
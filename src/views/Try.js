import React, { Component } from 'react'
import api_qin from '../api/api_qin'

class Try extends Component {
    render () {
        return (
            <div>
                <button onClick={this.login.bind(this)}>登录</button>
            </div>
        )
    }
    login(){
        api_qin.admin({
            "userName":'admin001',
            "password":'admin@12138'
        }).then(res=>{
            console.log(res);
            localStorage.setItem('token',res.data.token)
        })
    }
}

export default Try
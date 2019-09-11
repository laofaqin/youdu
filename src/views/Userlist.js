import React, { Component } from 'react'


import { Table, Divider, Tag } from 'antd';
import api from '../api/api_qin';
import apip from '../api/api_pro';


const imgerrorfun=function (text){ 
        text="https://www.youdubook.com/uploads/default_photo.jpg"; 
        console.log(text);
} 
const columns = [
    {
        title: '#',
        dataIndex: 'key',
        key: 'key',
        render: text => <span>{text+1}</span>,
      },
  {
    title: '头像',
    dataIndex: 'head',
    key: 'head',
    render: () => <img style={{width:"50px",borderRadius:'10px'}}  src="https://www.youdubook.com/uploads/default_photo.jpg"/>,
  },
  {
    title: '用户名',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '注册时间',
    dataIndex: 'time',
    key: 'time',
    render: time=>time.split('.')[0].replace('T','/')
  },
  {
    title: '操作',
    key: 'tags',
    dataIndex: 'tags',
    render: tags => (
      <span>
      <Tag color="green" style={{cursor:"pointer"}} >
              详情
            </Tag>
      </span>
    ),
  },
  
];




class Userlist extends Component {
    constructor (props) {
        super(props)
        this.state={
            data:[
            ]
        }
    }
    componentDidMount(){
        let params={
            per:20,
            page:2
        }
        api.getUser(params).then(res=>{
            console.log(res.data.users);
            let arr=[]
            res.data.users.map((item,i)=>{
                arr.push(
                    {
                        key: i,
                        head: item.avatar,
                        name: item.userName,
                        time: item.createdAt,
                        tags: ['nice', 'developer'],
                    } 
                )
            })
            this.setState({
                data:arr
            })

           
        })
        // apip.getProduct({}).then(res=>{
        //     console.log(res);
        // })
    }

    render () {
        return (
            <div>
                <Table columns={columns} dataSource={this.state.data} />   
            </div>
        )
    }
}

export default Userlist
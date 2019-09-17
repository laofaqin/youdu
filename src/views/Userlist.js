import React, { Component } from 'react'

import { Table, Tag,  Modal,Popconfirm,Input,Button,Icon  } from 'antd';
import Highlighter from 'react-highlight-words';
import api from '../api/api_qin';
import AsyncComponent from '../AsyncComponent';

const PCard =AsyncComponent(()=>require("./Card"))

class Userlist extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentIndex:1,
            visible: false,
            data: [],
            columns: [
                {
                    title: '#',
                    key:'tags',
                    render:(text,record,index)=>{
                      //生成序号
                          console.log(text,record,index);
                          return(
                            <span>{(this.state.currentIndex-1)*10+(index+1)}</span>
                          )
                        }, 
                    width: 50,
                },
                {
                    title: '头像',
                    dataIndex: 'head',
                    key: 'head',
                    render: () => <img style={{ width: "50px", borderRadius: '10px' }} src="https://www.youdubook.com/uploads/default_photo.jpg" />,
                },
                {
                    title: '用户名',
                    dataIndex: 'name',
                    key: 'name',
                    ...this.getColumnSearchProps('name'),
                },
                {
                    title: '注册时间',
                    dataIndex: 'time',
                    key: 'time',
                    render: time => time.split('.')[0].replace('T', '/')
                },
                {
                    title: '操作',
                    key: 'key',
                    dataIndex: 'tags',
                    render: (tags,key,i) => {
                        console.log(tags,key,i);
                        return(
                        <span>
                            <Tag color="green" style={{ cursor: "pointer" }} onClick={this.getinfo.bind(this, tags)}>
                                <div>
                                    <span onClick={this.showModal}>
                                        详情
                                    </span>
                                    <Modal
                                        title="Basic Modal"
                                        visible={this.state.visible}
                                        onOk={this.handleOk}
                                        onCancel={this.handleCancel}
                                    >
                                        <PCard data={tags}/>
                                    </Modal>
                                </div>
                            </Tag>
                            <Popconfirm
                                title="警告:确认删除该用户？"
                                icon={<Icon type="question-circle-o" style={{ color: 'red' }} />}
                                onConfirm={this.Confirm.bind(this,tags,key,i)}
                                okText="确认"
                                cancelText="取消"
                                >
                                <Tag color="red" style={{cursor:"pointer"}} >删除</Tag>
                            </Popconfirm>
                            
                        </span>
                    )},
                },

            ]
        }
    }
   
    Confirm(id,i,x){
        console.log(id,i,x);
        api.delUser(id).then(res=>{
            let Darr=this.state.data
            Darr.splice(x,1)
            this.setState({
                data:Darr
            })
        })
    }
    componentDidMount() {
        let params = {
            per: 100,
            page: 1
        }
        api.getUser(params).then(res => {
            // console.log(res.data.users);
            let arr = []
            res.data.users.map((item, i) => {
                arr.push(
                    {
                        key: i,
                        head: item.avatar,
                        name: item.userName,
                        time: item.createdAt,
                        tags: item._id,
                    }
                )
            })
            this.setState({
                data: arr
            })
        })
    }

    render() {
        return (
            <div>
                <Table columns={this.state.columns} dataSource={this.state.data} pagination={{ pageSize: 5 }} />
            </div>
        )
    }
    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleOk = e => {
        // console.log(e);
        this.setState({
            visible: false,
        });
    };

    handleCancel = e => {
        // console.log(e);
        this.setState({
            visible: false,
        });
    };

    getinfo(pid) {
        api.getOneUser(pid).then(res => {
            // console.log(res.data);
            // this.setState({
            //     userInfo:res.data
            // })
            // console.log(this.state.userInfo);
            localStorage.setItem('userInfo',JSON.stringify(res.data))
        })
    }
    getColumnSearchProps = dataIndex => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
          <div style={{ padding: 8 }}>
            <Input
              ref={node => {
                this.searchInput = node;
              }}
              placeholder={`Search ${dataIndex}`}
              value={selectedKeys[0]}
              onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
              onPressEnter={() => this.handleSearch(selectedKeys, confirm)}
              style={{ width: 188, marginBottom: 8, display: 'block' }}
            />
            <Button
              type="primary"
              onClick={() => this.handleSearch(selectedKeys, confirm)}
              icon="search"
              size="small"
              style={{ width: 90, marginRight: 8 }}
            >
              搜索
            </Button>
            <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{ width: 90 }}>
              重置
            </Button>
          </div>
        ),
        filterIcon: filtered => (
          <Icon type="search" style={{ color: filtered ? '#1890ff' : undefined }} />
        ),
        onFilter: (value, record) =>
          record[dataIndex]
            .toString()
            .toLowerCase()
            .includes(value.toLowerCase()),
        onFilterDropdownVisibleChange: visible => {
          if (visible) {
            setTimeout(() => this.searchInput.select());
          }
        },
        render: text => (
          <Highlighter
            highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
            searchWords={[this.state.searchText]}
            autoEscape
            textToHighlight={text.toString()}
          />
        ),
    });
    handleSearch = (selectedKeys, confirm) => {
        confirm();
        this.setState({ searchText: selectedKeys[0] });
    };
    
    handleReset = clearFilters => {
        clearFilters();
        this.setState({ searchText: '' });
    };

}

export default Userlist
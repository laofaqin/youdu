import React, { Component } from 'react'
import { Card, Icon, Avatar } from 'antd';
import api from '../api/api_qin'

const { Meta } = Card;

export default class PCard extends Component {
    state={
        info:{}
    }
    render() {
        return (
            <Card
                style={{ width: "70%",margin:"30px auto" }}
                cover={
                    <img
                        alt="该用户没有上传图片"
                        src={this.state.info.avatar}
                    />
                }
                actions={[
                    <Icon type="rollback" key="setting" title='返回'
                        onClick={this.back.bind(this)}/>,
                    <Icon type="edit" key="edit" title="修改"
                        onClick={this.edit.bind(this,this.state.info._id)}/>,
                    <Icon type="ellipsis" key="ellipsis" />,
                ]}
            >
                <Meta
                    avatar={<Avatar src="https://www.youdubook.com/uploads/default_photo.jpg" />}
                    title={this.state.info.userName}
                    description={this.state.info.createdAt }
                />
                <p style={{margin:'10px',paddingLeft:"20px"}}><b>个性签名</b>：{this.state.info.nickName?this.state.info.nickName:"这个人很懒, 什么都没写..."}</p>
            </Card>
        )
    }
    back(){
        this.props.history.go('-1')
    }
    edit=(id)=>{
        console.log(id);
        this.props.history.push('/edit/'+id)
    }
    componentDidMount(){
        console.log(this.props.match.params.id);
        api.userinfo(this.props.match.params.id).then(res=>{
            console.log(res);
            this.setState({
                info:res.data
            })
        })
    }
}



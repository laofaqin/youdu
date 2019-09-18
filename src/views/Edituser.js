import React, { Component } from 'react'
import api from '../api/api_qin'

import {
    Form,
    Input,
    Tooltip,
    Icon,
    Button,
    Upload
} from 'antd';

function getBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
}

class Edituser extends Component {
    state = {
        confirmDirty: false,
        userName:"",
        nickName:"",
        avatar:"",
        fileList:[]
    };
    handleChange = ({ fileList }) => this.setState({ fileList });
    handlePreview = async file => {
        if (!file.url && !file.preview) {
          file.preview = await getBase64(file.originFileObj);
        }
    
        this.setState({
          previewImage: file.url || file.preview,
          previewVisible: true,
        });
      };
    render() {

        
          
        const props = {
            action: 'https://api.cat-shop.penkuoer.com/api/v1/common/file_upload',
            listType: 'picture',
            fileList:this.state.fileList,
            onPreview:this.handlePreview,
            onChange:this.handleChange,
            defaultFileList: [...this.state.fileList],
        };
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 8 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 16 },
            },
        };
        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0,
                },
                sm: {
                    span: 16,
                    offset: 8,
                },
            },
        };
        const uploadBtn = (<Button>
            <Icon type="upload" /> 上传头像
        </Button>)
        return (
            <Form  onSubmit={this.handleSubmit} style={{
                width:'50%',margin:"30px auto"
            }}>
                <Form.Item label="头像" style={{width:"auto"}}>
                    <Upload {...props} ref="upurl">
                        {this.state.fileList.length>=1?null:uploadBtn}
                    </Upload>
                </Form.Item>
                <Form.Item label="用户名">
                    {(<Input ref="uname" value={this.state.userName}
                        onChange={(e) => {
                            this.setState({
                                userName: e.target.value
                            });
                        }}
                        />)}
                </Form.Item>
                
                <Form.Item
                    label={
                        <span>
                            个性签名&nbsp;
                            <Tooltip title="Say something what you want !">
                                <Icon type="question-circle-o" />
                            </Tooltip>
                        </span>
                        }
                    >
                    {(<Input ref="dif" value={this.state.nickName}
                        onChange={(e) => {
                                this.setState({
                                    nickName: e.target.value
                                });
                            }}
                    />)}
                </Form.Item>
                <Form.Item >
                    <Button 
                        style={{margin:"0 auto",width:"100px"}}
                        type="primary" htmlType="submit" onClick={this.btn.bind(this)}>
                        确认修改
                    </Button>
                </Form.Item>
            </Form>
        )
        
    }
    btn(){
        let arr = this.state.fileList
        let url=arr.map(v=>{
            // console.log(v.response.info);
            if(v.response){
                return 'https://api.cat-shop.penkuoer.com'+v.response.info
            }else if(v.url){
                return v.url
            }else{
                return ""
            }
            
        })
        console.log(url);

        let params = {
            userName:this.refs.uname.state.value,
            nickName:this.refs.dif.state.value,
            avatar:url
        }
        console.log(params);
        api.edituser(this.props.match.params.id,params).then(res=>{
            console.log(res);
            this.props.history.go(-1)
        })

    }
    componentDidMount(){
        console.log(this.props.match.params.id+'ID');
        api.userinfo(this.props.match.params.id).then(res=>{
            console.log(res);
            this.setState({
                userName:res.data.userName,
                nickName:res.data.nickName,
                avatar:res.data.avatar
            })
            if(res.data.avatar){
                let fileArr=[]
                fileArr.push({url:res.data.avatar,uid:-1})
                this.setState({
                    fileList:fileArr
                })
            }
        })
    }
}

export default Edituser
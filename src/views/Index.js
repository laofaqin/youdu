import React, { Component } from 'react'
import { Layout, Menu, Icon } from 'antd';
import { HashRouter as Router, NavLink, Route, Redirect, Switch } from 'react-router-dom';
import api from '../api/api_qin'
import AsyncComponent from '../AsyncComponent';
import Book from './Book';
import Add from './Add'

const List = AsyncComponent(() => require('./Userlist'))


const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

export default class Test extends Component {
  state = {
    collapsed: false,
  };
  constructor (props) {
    super(props)
    this.state={
      title:'暂无内容'
    }
  }
  
  
  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };
  tap(e) {
    console.log(e);
    if(e=='用户信息'){
      this.setState({
        title:e
      })
    }else{
      this.setState({
        title:"书籍列表 / "+e
      })
    }
    localStorage.setItem('books',e)
  }
  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>

        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
          <img src="http://alioss.youdubook.com/uploads/20190909/d9768225ba6d874a515cce9b920831b4.jpg" alt="" style={{ width: "100%" }} />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" onClick={this.tap.bind(this, "用户信息")} >
              <Router><NavLink  to="/index/list" >
                <Icon type="team" />
                <span>用户信息</span></NavLink>
              </Router>
            </Menu.Item>
            <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="read" />
                  <span>书籍类别</span>
                </span>
              }
            >
              <Menu.Item key="2" onClick={this.tap.bind(this, '西幻传说')}>
                <NavLink to="/index/book/西幻传说"></NavLink>西幻传说
                </Menu.Item>
              <Menu.Item key="3" onClick={this.tap.bind(this, "东方奇幻")}>
                <NavLink to="/index/book/东方奇幻"></NavLink>东方奇幻</Menu.Item>
              <Menu.Item key="4" onClick={this.tap.bind(this, "游戏异界")}><NavLink to="/index/book/游戏异界" ></NavLink>游戏异界</Menu.Item>
              <Menu.Item key="5" onClick={this.tap.bind(this, "科幻时空")}><NavLink to="/index/book/科幻时空" ></NavLink>科幻时空</Menu.Item>
              <Menu.Item key="6" onClick={this.tap.bind(this, "都市逸闻")}><NavLink to="/index/book/都市逸闻" ></NavLink>都市逸闻</Menu.Item>
              <Menu.Item key="7" onClick={this.tap.bind(this, "历史军事")}><NavLink to="/index/book/历史军事" ></NavLink>历史军事</Menu.Item>
              <Menu.Item key="8" onClick={this.tap.bind(this, "克苏鲁")}><NavLink to="/index/book/克苏鲁" ></NavLink>克苏鲁</Menu.Item>
            </SubMenu>
            <Menu.Item key="11"onClick={this.tap.bind(this, "添加书籍")}>
              <Router><NavLink to="/index/add" ><Icon type="upload" />
              <span>添加</span></NavLink></Router>
            </Menu.Item>
            <Menu.Item key="12">
              <Icon type="picture" />
              <span>轮播图</span>
            </Menu.Item>
          </Menu>
        </Sider>

        <Layout>
          
          <Content style={{ margin: '0 16px' }}>
            <div style={{ margin: '16px 0' }}>
              <span style={{ display: "hidden" }}>{this.state.title }</span>
            </div>
            <div id="box" style={{ padding: 24, background: '#fff', minHeight: 360 }}>

              <Router>
                <div>
                  <Route path="/index/list" component={List}></Route>
                  <Route path="/index/book/西幻传说" component={Book}></Route>
                  <Route path="/index/book/东方奇幻" component={Book}></Route>
                  <Route path="/index/book/游戏异界" component={Book}></Route>
                  <Route path="/index/book/科幻时空" component={Book}></Route>
                  <Route path="/index/book/都市逸闻" component={Book}></Route>
                  <Route path="/index/book/历史军事" component={Book}></Route>
                  <Route path="/index/book/克苏鲁" component={Book}></Route>
                  <Route path="/index/add" component={Add}></Route>
                </div>
              </Router>

            </div>
          </Content>
        </Layout>
      </Layout>
    );
  }
}
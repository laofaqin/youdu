import React, { Component } from 'react'
import { Layout, Menu, Icon } from 'antd';
import { HashRouter as Router, NavLink, Route, Redirect, Switch } from 'react-router-dom';
import api from '../api/api_qin'
import AsyncComponent from '../AsyncComponent';

const List = AsyncComponent(() => require('./Userlist'))
const Book = AsyncComponent(() => require('./Book'))


const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

export default class Test extends Component {
  state = {
    collapsed: false,
    str: ''
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };
  tap(e) {
    console.log(e.key);
    if (e.key == 1) {
      this.setState({
        str: '<List/>'
      })
    }
  }
  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>

        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
          <img src="http://alioss.youdubook.com/uploads/20190909/d9768225ba6d874a515cce9b920831b4.jpg" alt="" style={{ width: "100%" }} />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" >

              <Icon type="team" /><Router>
                <span><NavLink style={{ color: "rgba(255, 255, 255, 0.65)" }} activeStyle={{ color: "white" }} to="/index/list" >用户信息</NavLink></span>
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
              <Menu.Item key="2" onClick={this.tap.bind(this)}>
                <NavLink  to="/index/book" ></NavLink>西幻传说
                </Menu.Item>
              <Menu.Item key="3" onClick={this.tap.bind(this)}>
                <NavLink  to="/index/book" ></NavLink>东方奇幻</Menu.Item>
              <Menu.Item key="4" onClick={this.tap.bind(this)}><NavLink  to="/index/book" ></NavLink>游戏异界</Menu.Item>
              <Menu.Item key="5" onClick={this.tap.bind(this)}><NavLink  to="/index/book" ></NavLink>科幻时空</Menu.Item>
              <Menu.Item key="6" onClick={this.tap.bind(this)}><NavLink  to="/index/book" ></NavLink>都市逸闻</Menu.Item>
              <Menu.Item key="7" onClick={this.tap.bind(this)}><NavLink  to="/index/book" ></NavLink>历史军事</Menu.Item>
              <Menu.Item key="8" onClick={this.tap.bind(this)}><NavLink  to="/index/book" ></NavLink>克苏鲁</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={
                <span>
                  <Icon type="team" />
                  <span>Team</span>
                </span>
              }
            >
              <Menu.Item key="9">
                <Icon type="picture" />
                <span>轮播图</span>
              </Menu.Item>
              <Menu.Item key="10">Team 2</Menu.Item>
            </SubMenu>
            <Menu.Item key="11">
              <Icon type="file" />
              <span>File</span>
            </Menu.Item>
            <Menu.Item key="12">
              <Icon type="picture" />
              <span>轮播图</span>
            </Menu.Item>
          </Menu>
        </Sider>

        <Layout>
          <Header style={{ background: '#fff', padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <div style={{ margin: '16px 0' }}>
              <span style={{ display: "hidden" }}>用户信息</span>
            </div>
            <div id="box" style={{ padding: 24, background: '#fff', minHeight: 360 }}>
              <div dangerouslySetInnerHTML={{ __html: this.state.str }}></div>
              <Router>
                <div>
                  <Route path="/index/list" component={List}></Route>
                  <Route path="/index/book" component={Book}></Route>
                </div>

              </Router>

            </div>
          </Content>
        </Layout>
      </Layout>
    );
  }
}
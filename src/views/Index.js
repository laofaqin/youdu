import React, { Component } from "react";
import { Layout, Menu, Icon, Avatar} from "antd";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

export default class Index extends Component {
  state = {
    collapsed: false
  };
  render() {
    return (
      <div>
      <Layout style={{ minHeight: "100vh" }}>
          <Sider
            collapsible
            collapsed={this.state.collapsed}
            onCollapse={this.onCollapse}
          >
            <div className="logo" />
            <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
            <Avatar size={64} icon="user" />
              <Menu.Item key="1">
                <Icon type="team" />
                <span>用户信息</span>
              </Menu.Item>
              <Menu.Item key="2">
                <Icon type="html5" />
                <span>Option 2</span>
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
                <Menu.Item key="3">西幻传说</Menu.Item>
                <Menu.Item key="4">东方奇幻</Menu.Item>
                <Menu.Item key="5">游戏异界</Menu.Item>
                <Menu.Item key="7">科幻时空</Menu.Item>
                <Menu.Item key="10">都市逸闻</Menu.Item>
                <Menu.Item key="11">历史军事</Menu.Item>
                <Menu.Item key="12">克苏鲁</Menu.Item>
              </SubMenu>
              <SubMenu
                key="sub2"
                title={
                  <span>
                    <Icon type="ordered-list" />
                    <span>排列方式</span>
                  </span>
                }
              >
                <Menu.Item key="6">周点击</Menu.Item>
                <Menu.Item key="8">月点击</Menu.Item>
                <Menu.Item key="13">总点击</Menu.Item>
                <Menu.Item key="14">周推荐</Menu.Item>
                <Menu.Item key="15">月推荐</Menu.Item>
                <Menu.Item key="16">总推荐</Menu.Item>
                <Menu.Item key="17">总收藏</Menu.Item>
                <Menu.Item key="18">更新时间</Menu.Item>
              </SubMenu>
              <Menu.Item key="9">
                <Icon type="picture" />
                <span>轮播图</span>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout>
            <Header style={{ background: "#fff", padding: 0 }}>
                <div>
                </div>
            </Header>
            <Content style={{ margin: "0 16px" }}>
              
            </Content>
          </Layout>
        </Layout>
      </div>
    )
  }
}

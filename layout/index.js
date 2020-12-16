import App from 'next/app'
import React from 'react'
import { Layout, Menu } from 'antd'
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
} from '@ant-design/icons'
import AppLogo from './AppLogo'
import AppMenu from './AppMenu'
const { Header, Sider, Content, Footer } = Layout

class AppLayout extends App {
  state = {
    collapsed: false,
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    })
  }

  menu = () => {
    return AppMenu
  }

  render() {
    return (
      <Layout className="layout-app">
        <Sider
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
          width={260}
        >
          <AppLogo />
          <AppMenu />
        </Sider>
        <Layout>
          <Header style={{ padding: 0 }}>
            {React.createElement(
              this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: 'trigger',
                onClick: this.toggle,
              },
            )}
          </Header>
          <Content className="layout-content">{this.props.children}</Content>
          <Footer>Eventool v1.0 @ 2020 Todos os direitos reservados.</Footer>
        </Layout>
      </Layout>
    )
  }
}

export default AppLayout

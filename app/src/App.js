import {

  UserOutlined,
  MessageOutlined,
  CoffeeOutlined,

} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, Avatar, Input } from 'antd';
import 'antd/dist/antd.css';

import React, { useState } from 'react';

const { Header, Content, Footer, Sider } = Layout;



function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}



const menu_items = [
  getItem('明天的宇宙', 'fri1', <Avatar
    style={{
      backgroundColor: 'blue',
      verticalAlign: 'middle',
    }}
    size="large"

  >
    {'LMY'}
  </Avatar>),
  getItem('保聪聪', 'fri2', <Avatar
    style={{
      backgroundColor: 'purple',
      verticalAlign: 'middle',
    }}
    size="large"

  >
    {'保聪聪'}
  </Avatar>),
  getItem('Asuka', 'fri3', <Avatar
    style={{
      backgroundColor: 'red',
      verticalAlign: 'middle',
    }}
    size="large"

  >
    {'Asuka'}
  </Avatar>),
];

// submenu keys of first level
const rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];

//Side panel
const items = [
  getItem('消息', '1', <MessageOutlined />),
  getItem('好友', '2', <UserOutlined />),
  getItem('聊天室', '3', <CoffeeOutlined />),
];

const App = () => {
  const [collapsed, setCollapsed] = useState(false);

  const [openKeys, setOpenKeys] = useState(['sub1']);

  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);

    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };



  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Sider collapsible theme='light' collapsed={true} onCollapse={(value) => setCollapsed(value)} expandIcon='null'>
        <div className="logo" />
        <Menu theme="light" defaultSelectedKeys={['1']} mode="inline" items={items} />
      </Sider>

      <Layout>

        <Sider theme="light" collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
          <div className="logo" />
          <Input placeholder="Basic usage" />
          <Menu theme="light" defaultSelectedKeys={['1']} mode="inline" items={menu_items} />

        </Sider>

        <Layout className="site-layout">
          <Header
            className="site-layout-background"
            style={{
              padding: 0,
            }}
          />
          <Content
            style={{
              margin: '0 16px',
            }}
          >
            <Breadcrumb
              style={{
                margin: '16px 0',
              }}
            >
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div
              className="site-layout-background"
              style={{
                padding: 24,
                minHeight: 360,
              }}
            >
              Bill is a cat.
            </div>
          </Content>
          <Footer
            style={{
              textAlign: 'center',
            }}
          >
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>


      </Layout>



    </Layout>
  );
};

export default App;
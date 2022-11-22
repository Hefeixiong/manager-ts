import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
} from "@ant-design/icons";
import { Button, Menu } from "antd";
import { MenuInfo } from "rc-menu/lib/interface";
import React, { useState } from "react";

// type MenuItem = Required<MenuProps>["items"][number];

const items = [
  { label: "个人中心", key: "item-1", icon: <PieChartOutlined /> },
  { label: "菜单项二", key: "item-2", icon: <DesktopOutlined /> },
  { label: "菜单项二", key: "item-3", icon: <ContainerOutlined /> },
  {
    label: "子菜单",
    key: "submenu",
    icon: <AppstoreOutlined />,
    children: [{ label: "子菜单项", key: "submenu-item-1" }],
  },
];

const Sidebar: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  const log = (item: MenuInfo) => {
    console.log(item);
    console.log(item.keyPath.toString());
    console.log("hi");
  };

  return (
    <div className="content-sidebar" style={{ background: `#041527` }}>
      <Button
        type="primary"
        onClick={toggleCollapsed}
        style={{ marginBottom: 16 }}
      >
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button>
      <Menu
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        theme="dark"
        onClick={log}
        inlineCollapsed={collapsed}
        items={items}
      />
    </div>
  );
};

export default Sidebar;

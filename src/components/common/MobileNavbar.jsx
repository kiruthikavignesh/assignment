import { Button, Drawer, Dropdown, Menu } from "antd";
import { DownOutlined, MenuOutlined } from "@ant-design/icons";
import React, { useState } from "react";

import logo from "../../assets/logo.png";

const menuItems = [
  { label: "Pre-Build Home", key: "home" },
  { label: "Courses", key: "courses", subItems: ["Course 1", "Course 2"] },
  { label: "Pages", key: "pages", subItems: ["Page 1", "Page 2"] },
  { label: "Elements", key: "elements" },
  { label: "Blog", key: "blog" },
  { label: "Help", key: "help" },
];

const MobileNavbar = () => {
  const [visible, setVisible] = useState(false);

  const toggleDrawer = () => {
    setVisible(!visible);
  };

  const getDropdownMenu = (subItems) => (
    <Menu>
      {subItems.map((item, index) => (
        <Menu.Item key={index} style={{ fontFamily: "Poppins, sans-serif" }}>
          {item}
        </Menu.Item>
      ))}
    </Menu>
  );

  return (
    <div
      style={{ display: "flex", alignItems: "center", padding: "10px 20px" }}>
      <img
        src={logo}
        alt="App Logo"
        style={{ height: "40px", marginRight: "auto" }}
      />
      <Button icon={<MenuOutlined />} onClick={toggleDrawer} />

      <Drawer
        title="Menu"
        placement="right"
        closable
        onClose={toggleDrawer}
        visible={visible}>
        <Menu mode="vertical">
          {menuItems.map((item) => (
            <Menu.Item
              key={item.key}
              style={{ fontFamily: "Poppins, sans-serif" }}>
              {item.subItems ? (
                <Dropdown
                  overlay={getDropdownMenu(item.subItems)}
                  trigger={["click"]}>
                  <span>
                    {item.label} <DownOutlined />
                  </span>
                </Dropdown>
              ) : (
                item.label
              )}
            </Menu.Item>
          ))}
        </Menu>
      </Drawer>
    </div>
  );
};

export default MobileNavbar;

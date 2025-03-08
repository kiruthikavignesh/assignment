import { Button, Dropdown, Layout, Menu } from "antd";

import { DownOutlined } from "@ant-design/icons";
import React from "react";
import logo from "../../assets/logo.png";

const { Header } = Layout;

const menuItems = [
  { label: "Pre-Build Home", key: "home" },
  { label: "Courses", key: "courses" },
  { label: "Pages", key: "pages" },
  { label: "Elements", key: "elements" },
  { label: "Blog", key: "blog" },
  { label: "Help", key: "help" },
];

const getDropdownMenu = () => (
  <Menu
    style={{
      fontFamily: "Poppins, sans-serif",
    }}>
    <Menu.Item key="1" style={{ fontFamily: "Poppins, sans-serif" }}>
      Option 1
    </Menu.Item>
    <Menu.Item key="2" style={{ fontFamily: "Poppins, sans-serif" }}>
      Option 2
    </Menu.Item>
    <Menu.Item key="3" style={{ fontFamily: "Poppins, sans-serif" }}>
      Option 3
    </Menu.Item>
  </Menu>
);

const NavBar = () => {
  return (
    <Header
      style={{
        display: "flex",
        alignItems: "center",
        background: "#ffffff00",
        padding: "10px 20px",
        boxShadow: "none",
      }}>
      {/* Left - App Icon */}
      <div
        style={{ display: "flex", alignItems: "center", marginRight: "auto" }}>
        <img
          src={logo}
          alt="App Logo"
          style={{ height: "40px", marginRight: "10px" }}
        />
      </div>

      {/* Middle - Dropdown Menus */}
      <Menu
        mode="horizontal"
        style={{
          flexGrow: 1,
          justifyContent: "center",
          background: "transparent",
          borderBottom: "none",
        }}>
        {menuItems.map((item) => (
          <Menu.Item
            key={item.key}
            style={{
              color: "black",
              fontWeight: "500",
              fontFamily: "Poppins, sans-serif",
            }}>
            <Dropdown overlay={getDropdownMenu()} trigger={["hover"]}>
              <a style={{ color: "black", fontFamily: "Poppins, sans-serif" }}>
                {item.label} <DownOutlined />
              </a>
            </Dropdown>
          </Menu.Item>
        ))}
      </Menu>

      {/* Right - Purchase Button */}
      <div
        style={{
          borderRadius: "12px !important",
          padding: "8px 8px",
        }}>
        <span
          style={{
            padding: "8px 8px",
            background: "white",
            borderStyle: "solid",
            borderColor: "linear-gradient(to right, #CFB1E3, #657FEA)",
            borderImageSource: "linear-gradient(to right, #CFB1E3, #657FEA)",
            borderImageSlice: 1,
          }}>
          Purchase Now
        </span>
      </div>
    </Header>
  );
};

export default NavBar;

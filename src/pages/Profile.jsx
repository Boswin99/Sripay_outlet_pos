import React, { useState } from "react";
import { Avatar, Typography, Button, Select, message } from "antd";
import {
  UserOutlined,
  IdcardOutlined,
  MailOutlined,
  ClusterOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import logo from "../assets/plus.png";

const { Option } = Select;

export default function Profile() {
  const [selectedTerminal, setSelectedTerminal] = useState("Main Terminal");
  const userInfo = {
    userId: "12345",
    name: "John Doe",
    username: "johndoe",
    email: "johndoe@example.com",
  };

  const handleSave = () => {
    message.success(`Terminal updated to: ${selectedTerminal}`);
  };

  return (
    <div className="max-w-lg mx-auto bg-white shadow-lg rounded-lg flex flex-col min-h-screen">
      {/* Header with Logo */}
      <div className="flex justify-center items-center py-6 bg-gray-100">
        <img src={logo} alt="Logo" className="w-40 h-auto" />
      </div>

      <div className="bg-gray-50 p-6 w-full flex-grow rounded-t-lg">
        {/* User Profile */}
        <div className="text-center">
          <Avatar
            size={120}
            icon={<UserOutlined />}
            className="mb-6"
            style={{ backgroundColor: "#fde3cf", color: "#f56a00" }}
          />
          <Typography.Title level={3} className="mb-1">
            {userInfo.name}
          </Typography.Title>
          <Typography.Text type="secondary" className="text-lg">
            @{userInfo.username}
          </Typography.Text>
        </div>

        {/* User Information */}
        <div className="mt-8 space-y-6 text-lg">
          <div className="flex justify-between items-center">
            <Typography.Text className="flex items-center text-gray-700">
              <IdcardOutlined className="mr-3 text-2xl" />
              User ID
            </Typography.Text>
            <Typography.Text>{userInfo.userId}</Typography.Text>
          </div>
          <div className="flex justify-between items-center">
            <Typography.Text className="flex items-center text-gray-700">
              <UserOutlined className="mr-3 text-2xl" />
              Name
            </Typography.Text>
            <Typography.Text>{userInfo.name}</Typography.Text>
          </div>
          <div className="flex justify-between items-center">
            <Typography.Text className="flex items-center text-gray-700">
              <MailOutlined className="mr-3 text-2xl" />
              Email
            </Typography.Text>
            <Typography.Text>{userInfo.email}</Typography.Text>
          </div>
          <div className="flex justify-between items-center">
            <Typography.Text className="flex items-center text-gray-700">
              <ClusterOutlined className="mr-3 text-2xl" />
              Terminal
            </Typography.Text>
            <div className="flex items-center space-x-3">
              <Select
                value={selectedTerminal}
                onChange={(value) => setSelectedTerminal(value)}
                className="w-48 text-lg"
              >
                <Option value="Main Terminal">Main Terminal</Option>
                <Option value="Backup Terminal">Backup Terminal</Option>
                <Option value="Testing Terminal">Testing Terminal</Option>
              </Select>
              <Button type="primary" size="large" onClick={handleSave}>
                Save
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Logout Button */}
      <div className="p-6 mt-auto w-full bg-gray-100">
        <Button
          icon={<LogoutOutlined />}
          danger
          className="w-full text-lg py-3"
          size="large"
        >
          Logout
        </Button>
      </div>
    </div>
  );
}

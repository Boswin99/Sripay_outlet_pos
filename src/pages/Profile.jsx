import React, { useState } from "react";
import { Avatar, Button, message, Select } from "antd";
import {
  UserOutlined,
  IdcardOutlined,
  MailOutlined,
  LogoutOutlined,
  ProfileOutlined,
} from "@ant-design/icons";
import logo from "../assets/plus.png";
import profile from "../assets/profile.png";

const { Option } = Select;

export default function Profile() {
  const [selectedTerminal, setSelectedTerminal] = useState("Main Terminal");

  // Define user information
  const userInfo = {
    userId: "123456",
    name: "James Martin",
    username: "jamesdav",
    email: "james@gmail.com",
  };

  const handleSave = () => {
    message.success(`Terminal updated to: ${selectedTerminal}`);
  };

  return (
    <div className="h-full flex flex-col items-center bg-white justify-center font-custom">
      {/* Logo Section */}
      <div className="flex justify-center items-center p-4">
        <img
          src={logo}
          alt="Logo"
          className="w-32 h-auto flex justify-center items-center"
        />
      </div>

      {/* Blue Header with Profile */}
      <div className="w-full bg-blue-500 rounded-b-3xl p-6 text-center relative">
        <Avatar
          size={120}
          src={profile}
          className="mb-4 border-4 border-white"
        />
        <div className="text-white font-bold text-2xl">{userInfo.name}</div>
        <div className="text-white text-lg">@{userInfo.username}</div>
      </div>

      {/* User Information Section */}
      <div className="w-full h-full p-6 bg-white rounded-lg mt-6 space-y-4 text-lg">
        {/* User ID */}
        <div className="flex items-center bg-gray-100 rounded-xl p-4">
          <IdcardOutlined className="text-xl text-blue-500 mr-4" />
          <div>
            <div className="font-semibold">User ID</div>
            <div>{userInfo.userId}</div>
          </div>
        </div>

        {/* Name */}
        <div className="flex items-center bg-gray-100 rounded-xl p-4 ">
          <UserOutlined className="text-xl text-blue-500 mr-4" />
          <div>
            <div className="font-semibold">Name</div>
            <div>{userInfo.name}</div>
          </div>
        </div>

        {/* Username */}
        <div className="flex items-center bg-gray-100 rounded-xl p-4">
          <ProfileOutlined className="text-xl text-blue-500 mr-4" />
          <div>
            <div className="font-semibold">Username</div>
            <div>{userInfo.username}</div>
          </div>
        </div>

        {/* Email */}
        <div className="flex items-center bg-gray-100 rounded-xl p-4">
          <MailOutlined className="text-xl text-blue-500 mr-4" />
          <div>
            <div className="font-semibold">Email</div>
            <div>{userInfo.email}</div>
          </div>
        </div>

        {/* Terminal */}
        <div className="flex items-center bg-gray-100 rounded-xl p-4">
          <MailOutlined className="text-xl text-blue-500 mr-4" />
          <div>
            <div className="font-semibold">Terminal</div>
            <div className="flex items-center space-x-4">
              <Select
                value={selectedTerminal}
                onChange={(value) => setSelectedTerminal(value)}
                className="w-48 h-10 text-lg rounded-xl"
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

        {/* Logout Button */}
        <div className="w-full mt-6 px-6">
          <Button
            icon={<LogoutOutlined />}
            className="w-full text-lg py-3"
            size="large"
          >
            Logout
          </Button>
        </div>
      </div>
    </div>
  );
}

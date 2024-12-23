import React, { useState } from "react";
import { Avatar, Button, message } from "antd";
import {
  UserOutlined,
  IdcardOutlined,
  MailOutlined,
  LogoutOutlined,
  ProfileOutlined,
} from "@ant-design/icons";
import logo from "../assets/plus.png";

export default function Profile() {
  const userInfo = {
    name: "James Martin",
    jobTitle: "Senior Graphic Designer",
    userId: "123456",
    username: "jamie",
    email: "james@gmail.com",
  };

  return (
    <div className="h-full flex flex-col items-center bg-white justify-center">
      {/* Logo Section */}
      <div className="flex justify-center items-center p-4">
        <img
          src={logo}
          alt="Logo"
          className="w-32 h-auto flex justify-center items-center"
        />
      </div>

      {/* Blue Header with Profile */}
      <div className="w-full bg-blue-500 rounded-b-3xl p-6 text-center relative ">
        <Avatar
          size={120}
          src="https://via.placeholder.com/150"
          className="mb-4 border-4 border-white"
        />
        <div className="text-white font-bold text-2xl">{userInfo.name}</div>
        <div className="text-white text-lg">{userInfo.jobTitle}</div>
      </div>

      {/* User Information Section */}
      <div className="w-full h-full p-6 bg-white rounded-lg  mt-6 space-y-4">
        {/* User ID */}
        <div className="flex items-center">
          <IdcardOutlined className="text-xl text-blue-500 mr-4" />
          <div>
            <div className="font-bold">User ID</div>
            <div>{userInfo.userId}</div>
          </div>
        </div>

        {/* Name */}
        <div className="flex items-center">
          <UserOutlined className="text-xl text-blue-500 mr-4" />
          <div>
            <div className="font-bold">Name</div>
            <div>{userInfo.name}</div>
          </div>
        </div>

        {/* Username */}
        <div className="flex items-center">
          <ProfileOutlined className="text-xl text-blue-500 mr-4" />
          <div>
            <div className="font-bold">Username</div>
            <div>{userInfo.username}</div>
          </div>
        </div>

        {/* Email */}
        <div className="flex items-center">
          <MailOutlined className="text-xl text-blue-500 mr-4" />
          <div>
            <div className="font-bold">Email</div>
            <div>{userInfo.email}</div>
          </div>
        </div>
        {/* Logout Button */}
        <div className="w-full mt-6 px-6">
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
    </div>
  );
}

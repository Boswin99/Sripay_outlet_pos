import React from 'react';
import { Card, Typography, List, Avatar, Button, } from 'antd';
import { UserOutlined, LeftOutlined, RightOutlined } from '@ant-design/icons';
import logo from '../assets/plus.png';


export default function Profile() {
  return (
    <div className="p-4 max-w-3xl mx-auto ">
      <div className="flex justify-center items-center " style={{ marginTop: 20 }}>
        <img src={logo} alt="home" className="w-45 h-16 flex justify-center items-center" />
      </div>
      <div>
        <div className="flex justify-center items-center" style={{ marginTop: 20 }}>
          <Avatar size={64} icon={<UserOutlined />} />
        </div>
        <div class="grid grid-cols-2 gap-4 text-start mt-4 bg-gray-200 p-4 rounded-lg">
          <div>Name</div><div></div>
          <div>Email</div><div></div>
          <div>Phone</div><div></div>
          <div>Address</div><div></div>
        </div>
      </div>
    </div>
  );
}
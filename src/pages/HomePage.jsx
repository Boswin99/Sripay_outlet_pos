import React from 'react';
import { Card, Typography, List, Avatar, Button } from 'antd';
import { UserOutlined, LeftOutlined, RightOutlined } from '@ant-design/icons';
import logo from '../assets/plus.png';
import Calculator from '../components/Calculator/Calculator';


export default function HomePage() {
  return (
    <div className="p-4 max-w-3xl mx-auto ">
      <div className="flex justify-center items-center " style={{marginTop:20}}>
        <img src={logo} alt="home" className="w-45 h-16 flex justify-center items-center" />
      </div>
      <div className="justify-center" style={{marginTop:20}}>
        <Calculator />
      </div>
    </div>
  );
}
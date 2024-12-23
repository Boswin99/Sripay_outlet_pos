import React from 'react';
import { Card, Typography } from 'antd';
import logo from '../../../assets/plus.png';

const { Title, Text } = Typography;

export default function AuthCard({ title, subtitle, children }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <Card className="w-full max-w-md">
        <div className="text-center mb-8">
          <img src={logo} alt="logo" className="w-100 h-20 center justify-center items-center" />
          {subtitle && <Text type="secondary">{subtitle}</Text>}
        </div>
        {children}
      </Card>
    </div>
  );
}
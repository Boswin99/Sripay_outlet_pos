import React from 'react';
import { Card, List, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

export default function DashboardCard({ title, description }) {
  return (
    <Card className="w-full hover:shadow-md transition-shadow">
      <List.Item.Meta
        avatar={<Avatar icon={<UserOutlined />} />}
        title={title}
        description={description}
      />
    </Card>
  );
}
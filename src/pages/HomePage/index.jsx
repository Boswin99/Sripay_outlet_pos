import React from 'react';
import { Typography, List } from 'antd';
import DashboardCard from './components/DashboardCard';
import { DASHBOARD_ITEMS } from './constants';

const { Title } = Typography;

export default function HomePage() {
  return (
    <div className="p-4 max-w-3xl mx-auto">
      <Title level={2} className="mb-6">Welcome Back</Title>
      
      <List
        itemLayout="horizontal"
        dataSource={DASHBOARD_ITEMS}
        renderItem={(item) => (
          <List.Item>
            <DashboardCard {...item} />
          </List.Item>
        )}
      />
    </div>
  );
}
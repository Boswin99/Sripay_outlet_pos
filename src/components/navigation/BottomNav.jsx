import React from 'react';
import { TabBar } from 'antd-mobile';
import { NAVIGATION_TABS } from './constants';
import { useNavigate } from 'react-router-dom';


export default function BottomNav({ activeTab, onTabChange }) {

  const navigate = useNavigate();

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
      <TabBar activeKey={activeTab} onChange={onTabChange}>
        {NAVIGATION_TABS.map(tab => (
          <TabBar.Item
            style={{fontFamily:'"Poppins", serif',fontWeight:'900'}}
            key={tab.key}
            icon={<tab.icon/>}
            title={tab.title}
            onClick={() => navigate(tab.path)}
          />
        ))}
      </TabBar>
    </div>
  );
}
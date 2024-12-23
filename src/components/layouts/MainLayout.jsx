import React from 'react';
import BottomNav from '../navigation/BottomNav';

export default function MainLayout({ children, activeTab, onTabChange }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="pb-16">
        {children}
      </main>
      <BottomNav activeTab={activeTab} onTabChange={onTabChange} />
    </div>
  );
}
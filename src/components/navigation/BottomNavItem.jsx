import React from 'react';

export default function BottomNavItem({ icon: Icon, label, isActive, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`flex flex-col items-center justify-center flex-1 py-2 px-4 ${
        isActive ? 'text-blue-600' : 'text-gray-600'
      }`}
    >
      <Icon className={`h-6 w-6 ${isActive ? 'text-blue-600' : 'text-gray-600'}`} />
      <span className="text-xs mt-1">{label}</span>
    </button>
  );
}
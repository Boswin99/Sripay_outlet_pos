import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


export function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentView, setCurrentView] = useState('login');

  const navigate = useNavigate();



  const handleLogin = () => {
    setIsAuthenticated(true);
    navigate('/home')
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setCurrentView('login');
  };

  const handleForgotPassword = () => {
    setCurrentView('forgot-password');
    navigate('/forgot-password')
  };

  const handleBackToLogin = () => {
    setCurrentView('login');
    navigate('/')
  };

  return {
    isAuthenticated,
    currentView,
    handleLogin,
    handleLogout,
    handleForgotPassword,
    handleBackToLogin,
  };
}
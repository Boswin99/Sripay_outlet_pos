import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


export function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentView, setCurrentView] = useState('login');

  const navigate = useNavigate();


  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setIsAuthenticated(true);
      navigate('/home')
    }else{
      setIsAuthenticated(false);
      navigate('/')
    }
  }, [])

  const handleLogin = () => {
    setIsAuthenticated(true);
    navigate('/home')
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    navigate('/')
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
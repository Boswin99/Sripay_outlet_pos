import { ConfigProvider, theme } from 'antd';
import LoginForm from './components/auth/LoginForm';
import ForgotPasswordForm from './components/auth/ForgotPasswordForm';
import MainLayout from './components/layouts/MainLayout';

import { useAuth } from './hooks/useAuth';
import { useNavigation } from './hooks/useNavigation';
import { Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import Profile from './pages/Profile';



function App() {
  const {
    isAuthenticated,
    currentView,
    handleLogin,
    handleForgotPassword,
    handleBackToLogin,
  } = useAuth();

  const { activeTab, handleTabChange } = useNavigation();

  return (
    <ConfigProvider
      theme={{
        algorithm: theme.defaultAlgorithm,
        token: {
          colorPrimary: '#1677ff',
        },
      }}
    >
      <Routes>
        {!isAuthenticated ? (
          <>
            <Route path='/' element={<LoginForm onForgotPassword={handleForgotPassword} onLogin={handleLogin} />} />
            <Route path='/forgot-password' element={<ForgotPasswordForm onBack={handleBackToLogin} />} />
          </>
        ) : (
          <>
            <Route path='/home' element={
              <MainLayout activeTab={activeTab} onTabChange={handleTabChange}>
                <HomePage />
              </MainLayout>
            } />
            <Route path='/transaction' element={
              <MainLayout activeTab={activeTab} onTabChange={handleTabChange}>
                {/* <HomePage /> */}
              </MainLayout>
            } />
            <Route path='/profile' element={
              <MainLayout activeTab={activeTab} onTabChange={handleTabChange}>
                <Profile />
              </MainLayout>
            } />
          </>
        )}
      </Routes>



      {/* {!isAuthenticated ? (
        currentView === 'login' ? (
          <LoginForm onForgotPassword={handleForgotPassword} onLogin={handleLogin} />
        ) : (
          <ForgotPasswordForm onBack={handleBackToLogin} />
        )
      ) : (
        <MainLayout activeTab={activeTab} onTabChange={handleTabChange}>
          <HomePage />
        </MainLayout>
      )} */}
    </ConfigProvider>
  );
}

export default App;

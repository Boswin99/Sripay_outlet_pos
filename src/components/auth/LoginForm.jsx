import { Form, Input, Checkbox, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import AuthCard from './components/AuthCard';
import { useFormSubmit } from './hooks/useFormSubmit';

export default function LoginForm({ onForgotPassword, onLogin }) {
  const { loading, handleSubmit } = useFormSubmit({
    onSuccess: onLogin,
    validatePassword: true,
  });

  return (
    <AuthCard
      title="Welcome back"
      subtitle="Please sign in to your account"
    >
      <Form
        name="login"
        initialValues={{ remember: true }}
        onFinish={handleSubmit}
        layout="vertical"
        size="large"
      >
        <Form.Item
          name="email"
          rules={[{ required: true, message: 'Please input your email!' }]}
        >
          <Input 
            prefix={<UserOutlined />}
            placeholder="Email address"
            type="email"
          />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password
            prefix={<LockOutlined />}
            placeholder="Password"
          />
        </Form.Item>

        <div className="flex justify-between items-center mb-4">
          <Form.Item name="remember" valuePropName="checked" noStyle className="color-white">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Button type="link" onClick={onForgotPassword} className="!p-0">
            Forgot password?
          </Button>
        </div>

        <Form.Item>
          <Button type="primary" htmlType="submit" block loading={loading} className="bg-button">
            Sign in
          </Button>
        </Form.Item>
      </Form>
    </AuthCard>
  );
}
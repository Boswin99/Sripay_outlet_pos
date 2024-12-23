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
    <div>
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
        className="space-y-4"
      >
        <Form.Item
          name="email"
          rules={[{ required: true, message: 'Please input your email!' }]}
        >
          <Input
            prefix={<UserOutlined />}
            placeholder="Email address"
            type="email"
            className="rounded-md"
          />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password
            prefix={<LockOutlined />}
            placeholder="Password"
            className="rounded-md"
          />
        </Form.Item>

        <div className="flex justify-between items-center mb-4">
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox className="text-gray-600">Remember me</Checkbox>
          </Form.Item>
          <Button type="link" onClick={onForgotPassword} className="text-blue-500">
            Forgot password?
          </Button>
        </div>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            block
            loading={loading}
            className="bg-blue-500 hover:bg-blue-600 text-white rounded-md"
          >
            Sign in
          </Button>
        </Form.Item>
      </Form>
    </AuthCard>
    </div>
  );
}

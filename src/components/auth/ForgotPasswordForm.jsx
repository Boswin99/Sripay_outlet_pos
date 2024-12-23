import { Form, Input, Button } from 'antd';
import { MailOutlined } from '@ant-design/icons';
import AuthCard from './components/AuthCard';
import { useFormSubmit } from './hooks/useFormSubmit';

export default function ForgotPasswordForm({ onBack }) {
  const { loading, handleSubmit } = useFormSubmit({
    onSuccess: () => {
      message.success('If an account exists with this email, you will receive password reset instructions.');
    },
  });

  return (
    <AuthCard
      title="Reset Password"
      subtitle="Enter your email address and we'll send you instructions to reset your password."
    >
      <Form
        name="forgot-password"
        onFinish={handleSubmit}
        layout="vertical"
        size="large"
      >
        <Form.Item
          name="email"
          rules={[{ required: true, message: 'Please input your email!' }]}
        >
          <Input
            prefix={<MailOutlined />}
            placeholder="Email address"
            type="email"
          />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" block loading={loading} className="bg-button">
            Send Reset Instructions
          </Button>
        </Form.Item>

        <div className="text-center">
          <Button type="link" onClick={onBack} >
            Back to Login
          </Button>
        </div>
      </Form>
    </AuthCard>
  );
}
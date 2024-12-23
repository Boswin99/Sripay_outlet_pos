import { useState } from 'react';
import { message } from 'antd';
import { validateEmail } from '../../../utils/validation';

export function useFormSubmit({ onSuccess, validatePassword = false }) {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (values) => {
    if (!validateEmail(values.email)) {
      message.error('Please enter a valid email address');
      return;
    }

    if (validatePassword && !values.password) {
      message.error('Please enter your password');
      return;
    }

    setLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      onSuccess(values);
    } catch (error) {
      message.error('Operation failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    handleSubmit,
  };
}
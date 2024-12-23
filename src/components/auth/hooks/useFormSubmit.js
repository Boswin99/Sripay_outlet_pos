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
      const response = await fetch(
        "https://api.sripayplus.com/secure/v2/auth/signin/email",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: values.email,
            password: values.password,
          }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log("Sign-In successful:", data);
        if (data.role === "storeUser") {
          localStorage.setItem("user", JSON.stringify(data));
          onSuccess(values);
        }
        message.success('Sign-In successful')
      } else {
        message.error('Invalid email or password. Please try again.');
      }
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
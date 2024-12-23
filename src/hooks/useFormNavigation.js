import { useState } from 'react';
import { message } from 'antd';

export function useFormNavigation() {
  const [showPaymentSelected, setShowPaymentSelected] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const handleFormChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleFormSubmit = (values) => {
    // Here you would typically send the data to a server
    console.log('Form submitted:', values);
    message.success('Form submitted successfully!');
    setShowPaymentSelected(false);
    setFormData({
      name: '',
      email: '',
      phone: ''
    });
  };

  const toggleForm = () => {
    setShowPaymentSelected(prev => !prev);
  };

  return {
    showPaymentSelected,
    formData,
    handleFormSubmit,
    handleFormChange,
    toggleForm
  };
}
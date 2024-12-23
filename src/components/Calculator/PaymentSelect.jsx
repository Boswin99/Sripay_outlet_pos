import { Form, Input, Button, Radio } from 'antd';
import { LeftOutlined, QrcodeOutlined } from '@ant-design/icons';
import '../../styles/PaymentSelect.css';
import alipay from '../../assets/alipayy.png';
import { useState } from 'react';
import payIcone from '../../assets/icone/pay.png'


function PaymentSelect({ formData, onSubmit, onChange, onBack }) {

  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);
  const handleDivClick = (value) => {
    setSelectedPaymentMethod(value);
  };

  return (
    <div className="form-navigation">
      <Button
        type="primary"
        icon={<LeftOutlined />}
        onClick={onBack}
        className="back-button"
        style={{ backgroundColor: '#03045e', color: 'white' }}
      >
        Back to Calculator
      </Button>

      <Form
        layout="vertical"
        onFinish={onSubmit}
        className="form-container"
      >
        <Radio.Group
          className="w-full"
          onChange={(e) => handlePaymentSelect(e.target.value)}
          value={selectedPaymentMethod}
        >
          <div
            className="flex justify-between items-center border border-gray-300 rounded-lg p-4 mb-4 cursor-pointer"
            onClick={() => handleDivClick("alipay")}
          >
            <div className="flex items-center">
              <img src={alipay} alt="Sri Pay" className="w-6 h-6 mr-3" />
              <span className="text-sm font-custom font-regular text-gray-600">
                Alipay
              </span>
            </div>
            <Radio value="alipay" className="ml-auto" />
          </div>

          <div
            className="flex justify-between items-center border border-gray-300 rounded-lg p-4 mb-4 cursor-pointer"
            onClick={() => handleDivClick("scanPayQr")}
          >
            <div className="flex items-center">
              <QrcodeOutlined style={{ fontSize: '24px', marginRight: '8px', color: '#4a4a4a' }} />
              <span className="text-sm font-custom font-regular text-gray-600">
                Scan Pay QR
              </span>
            </div>

            <Radio value="scanPayQr" className="ml-auto" />
          </div>
        </Radio.Group>

        <Form.Item>
          <Button
            className="next-button bg-button"
            type="primary"
            htmlType="submit"
          >
            Proceed To Pay
            <img src={payIcone} alt="pay" width={45} />
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default PaymentSelect;
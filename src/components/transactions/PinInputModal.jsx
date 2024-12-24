import React, { useState, useRef } from "react";
import { Modal, Input, Row, Col, Button, Typography, message } from "antd";
import { LockOutlined } from "@ant-design/icons";

const { Text } = Typography;

const PinInputModal = ({ visible, onClose, onSubmit, actionType }) => {
  const [pin, setPin] = useState(Array(4).fill(""));
  const inputRefs = useRef([]);

  const handleChange = (value, index) => {
    if (!isNaN(value) && value !== " ") {
      const newPin = [...pin];
      newPin[index] = value;
      setPin(newPin);

      // Focus next input
      if (value && index < 3) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !pin[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handlePaste = (e) => {
    const pastedData = e.clipboardData.getData("Text").trim();
    if (pastedData.length === 4 && !isNaN(pastedData)) {
      setPin(pastedData.split(""));
    } else {
      message.error("Please paste a valid 4-digit PIN.");
    }
  };

  const handleSubmit = () => {
    const code = pin.join("");
    if (code.length === 4) {
      onSubmit(code);
    } else {
      message.error("Please enter the complete 4-digit PIN.");
    }
  };

  return (
    <Modal
      visible={visible}
      onCancel={onClose}
      footer={null}
      centered
      width={400}
      bodyStyle={{ padding: "0" }}
      title={
        <div className="text-xl font-bold text-center ">
            <div className="">
            <LockOutlined className="text-blue-500 text-4xl mb-2" />
            </div>
          <div className="font-custom text-azure text-2xl">
          Enter {actionType === "refund" ? "Refund" : "Void"} PIN
          </div>
        </div>
      }
    >
      <div className="p-1">
        <Text className="block font-custom text-center mb-4 text-gray-600">
          Please enter your 4-digit PIN to confirm the {actionType} action.
        </Text>
        <Row gutter={16} justify="center" className="mb-6">
          {pin.map((digit, index) => (
            <Col key={index} span={4}>
              <Input
                ref={(ref) => (inputRefs.current[index] = ref)}
                value={digit}
                onChange={(e) => handleChange(e.target.value, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                onPaste={handlePaste}
                maxLength={1}
                className="text-center text-xl h-12 rounded-lg"
                autoFocus={index === 0}
              />
            </Col>
          ))}
        </Row>
        <div className="flex justify-center space-x-4">
        <Button
  onClick={onClose}
  className="w-1/2 rounded-lg text-md font-custom font-regular border-none"
  style={{
    backgroundColor: "#4B5563", // Gray-600
    color: "#FFFFFF", // White
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.backgroundColor = "#9CA3AF"; // Gray-300
    e.currentTarget.style.color = "#ffffff"; // Black
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.backgroundColor = "#6B7280"; // Gray-600
    e.currentTarget.style.color = "#FFFFFF"; // White
  }}
>
  Cancel
</Button>

          <Button
            type="primary"
            onClick={handleSubmit}
            className="py-1 w-1/2 rounded-lg text-md font-custom font-regular bg-blue-500 hover:bg-blue-600 text-white border-none"
          >
            Confirm
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default PinInputModal;

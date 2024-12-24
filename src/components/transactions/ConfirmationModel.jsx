import React from "react";
import { Modal } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";

const ConfirmationModal = ({
  visible,
  onConfirm,
  onCancel,
  actionType,
  transaction = {}, // Default to an empty object
}) => {
  return (
    <Modal
      visible={visible}
      onCancel={onCancel}
      footer={null}
      centered
      width={500}
      className="rounded-lg shadow-lg"
    >
      <div className="p-1 px-4 text-center">
        {/* Header with Icon */}
        <ExclamationCircleOutlined className="text-red-600 text-6xl mb-3 " />
        <div className="flex items-center justify-center">
          <h2 className="text-2xl font-custom font-bold text-red-600">
            Are you sure you want to {actionType === "refund" ? "refund" : "void"} this transaction?
          </h2>
        </div>

        {/* Transaction Details Box */}
        <div className="bg-gray-100 rounded-lg p-4 mb-1 mt-4">
          <div className="flex justify-between items-center mb-3">
            <span className="text-gray-600 font-custom font-medium">Transaction ID</span>
            <span className="text-gray-800 font-custom">{transaction?.id || "N/A"}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600 font-custom font-medium">Amount</span>
            <span className="text-gray-800 font-custom">{transaction?.amount || "N/A"}</span>
          </div>
        </div>

        <p className="text-xs text-red-400 font-custom mb-6">
          This action cannot be undone. This will permanently {actionType} this transaction.
        </p>

        {/* Footer Buttons */}
        <div className="flex justify-center space-x-4">
          <button
            onClick={onConfirm}
            className="bg-red-600 w-1/2 text-white text-lg rounded-lg font-custom font-bold hover:bg-red-700 transition duration-300"
          >
            Yes
          </button>
          <button
            onClick={onCancel}
            className="border border-gray-300 w-1/2 text-lg text-gray-600 py-1 rounded-lg font-bold hover:bg-gray-100 transition duration-300"
          >
            No
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default ConfirmationModal;

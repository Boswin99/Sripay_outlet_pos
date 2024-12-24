import React, { useState, useEffect } from "react";
import logo from "../assets/plus.png";
import { Input, Button } from "antd";
import ConfirmationModal from "../components/transactions/ConfirmationModel";
import PinInputModal from "../components/transactions/PinInputModal";
import {
  CheckCircleOutlined,
  UndoOutlined,
} from "@ant-design/icons";

const transactions = [
  {
    date: "2024-12-24",
    id: "TXN12345",
    amount: "$150.00",
    status: "Success",
  },
  {
    date: "2024-12-23",
    id: "TXN12346",
    amount: "$200.00",
    status: "Void",
  },
  {
    date: "2024-12-22",
    id: "TXN12347",
    amount: "$75.00",
    status: "Refunded",
  },
];

function Transactions() {
  const [filteredData, setFilteredData] = useState(transactions);
  const [searchFilters, setSearchFilters] = useState({ id: "" });
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedTransaction, setSelectedTransaction] = useState(null);
  const [isPasswordModalVisible, setIsPasswordModalVisible] = useState(false);
  const [actionType, setActionType] = useState("void");

  useEffect(() => {
    filterData();
  }, [searchFilters]);

  const filterData = () => {
    const filtered = transactions.filter((item) => {
      const matchesId = searchFilters.id
        ? item.id.toLowerCase().includes(searchFilters.id.toLowerCase())
        : true;

      return matchesId;
    });
    setFilteredData(filtered);
  };

  const clearField = (field) => {
    setSearchFilters((prevFilters) => ({
      ...prevFilters,
      [field]: "",
    }));
  };

  const showModal = (transaction) => {
    setSelectedTransaction(transaction);
    setIsModalVisible(true);
  };

  const handleModalConfirm = () => {
    setIsModalVisible(false);
    setIsPasswordModalVisible(true); // Open PIN input modal
  };

  const handleModalCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center px-6">
      {/* Logo Section */}
      <div className="flex justify-center items-center mt-6 mb-4">
        <img src={logo} alt="logo" className="w-72 h-auto" />
      </div>

      {/* Header Section */}
      <div className="w-full max-w-3xl bg-sricolor rounded-lg shadow-md px-6 py-4">
        <h1 className="text-2xl font-bold text-white text-center">
          Transaction History
        </h1>
        <p className="text-sm text-gray-600 text-center mt-2">
          View your recent transaction activities
        </p>
      </div>

      {/* Search Input */}
      <div className="w-full max-w-3xl flex items-center mt-6 space-x-4">
        <Input
          placeholder="Search by Transaction ID"
          value={searchFilters.id}
          onChange={(e) =>
            setSearchFilters({
              ...searchFilters,
              id: e.target.value,
            })
          }
          className="flex-grow"
        />
        <Button onClick={() => clearField("id")} type="default">
          Clear
        </Button>
      </div>

      {/* Transaction Cards */}
<div className="w-full max-w-3xl grid gap-5 mt-6">
  {filteredData.length > 0 ? (
    filteredData.map((transaction, index) => (
      <div
        key={index}
        className="bg-white rounded-lg shadow-md p-5 border border-gray-200 hover:shadow-lg hover:-translate-y-1 transition-all"
      >
        <div className="flex justify-between items-center mb-4">
          <p className="text-gray-500 text-sm">{transaction.date}</p>
          <span
            className={`flex items-center gap-1 text-xs font-medium px-3 py-1 rounded-full ${
              transaction.status === "Success"
                ? "bg-green-50 text-green-600"
                : transaction.status === "Void"
                ? "bg-yellow-50 text-yellow-600"
                : "bg-red-50 text-red-600"
            }`}
          >
            {transaction.status === "Success" && <CheckCircleOutlined />}
            {transaction.status === "Void" && <UndoOutlined />}
          </span>
        </div>

        <div className="flex justify-between items-center">
          <div>
            <p className="text-base font-semibold text-gray-800">
              Transaction ID: {transaction.id}
            </p>
            <p className="text-sm text-gray-600">Amount: {transaction.amount}</p>
          </div>
          <Button
            type="primary"
            danger
            className="px-4 py-2"
            onClick={() => showModal(transaction)}
          >
            Void Transaction
          </Button>
        </div>
      </div>
    ))
  ) : (
    <p className="text-center text-gray-500">
      No transactions match your search criteria.
    </p>
  )}
</div>


      {/* Confirmation Modal */}
      <ConfirmationModal
        visible={isModalVisible}
        onConfirm={handleModalConfirm}
        onCancel={handleModalCancel}
        actionType="void"
        transaction={selectedTransaction}
      />

      {/* PIN Input Modal */}
      <PinInputModal
        visible={isPasswordModalVisible}
        onClose={() => setIsPasswordModalVisible(false)}
        onSubmit={(code) => console.log(`${actionType} PIN entered:`, code)}
        actionType={actionType}
      />
    </div>
  );
}

export default Transactions;

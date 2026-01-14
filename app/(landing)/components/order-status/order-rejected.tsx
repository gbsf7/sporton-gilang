"use client";
import Image from "next/image";
import Button from "../ui/button";
import { FiAlertCircle, FiRefreshCw } from "react-icons/fi";

const OrderRejected = () => {
  return (
    <div className="bg-white w-160 p-16 flex flex-col justify-center items-center mx-auto">
      <div className="w-16 h-16 bg-primary-light rounded-full mx-auto p-3 flex justify-center items-center text-primary mb-4">
        <FiAlertCircle size={24} />
      </div>
      <h2 className="text-2xl font-semibold mb-2">Order Rejected!</h2>
      <p className="text-center mb-8">
        Your order has been rejected due to invalid payment proof. Please ensure
        that you upload a clear and valid receipt for verification. If you
        believe this is a mistake, contact our support team for assistance.
      </p>
    </div>
  );
};

export default OrderRejected;

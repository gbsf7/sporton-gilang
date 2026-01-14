"use client";
import OrderInformation from "../components/checkout/order-information";
import CartItems from "../components/checkout/cart-items";
import { useState } from "react";
import { CustomerInfo } from "@/app/types";
import { useRouter } from "next/navigation";
import { useCartStore } from "@/app/hooks/use-cart-store";

const Checkout = () => {
  const { push } = useRouter();
  const { customerInfo, setCustomerInfo } = useCartStore();
  const [formData, setFormData] = useState<CustomerInfo>({
    customerName: "",
    customerContact: null,
    customerAddress: "",
  });

  const handlePayment = () => {
    if (
      !formData.customerName ||
      !formData.customerContact ||
      !formData.customerAddress
    ) {
      alert("Please fill in all the required fields.");
      return;
    }
    setCustomerInfo(formData);
    push("/payment");
  };

  return (
    <main className="bg-gray-100 min-h-[80vh]">
      <div className="max-w-5xl mx-auto py-20">
        <h1 className="font-bold text-5xl text-center mb-10">Checkout Page</h1>
        <div className="grid grid-cols-2 gap-14">
          <OrderInformation formData={formData} setFormData={setFormData} />
          <CartItems handlePayment={handlePayment} />
          {/* <p>{JSON.stringify(customerInfo)}</p> */}
        </div>
      </div>
    </main>
  );
};

export default Checkout;

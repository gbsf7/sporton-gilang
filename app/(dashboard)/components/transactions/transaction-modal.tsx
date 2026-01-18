import Button from "@/app/(landing)/components/ui/button";
import Modal from "../ui/modal";
import Image from "next/image";
import PriceFormatter from "@/app/utils/price-formatter";
import { FiCheck, FiX } from "react-icons/fi";

type TTransactionsModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const TransactionsModal = ({ isOpen, onClose }: TTransactionsModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Verify Transaction">
      <div className="flex gap-6">
        <div>
          <h4 className="font-semibold text-xs mb-2"> Payment Proof</h4>
          <Image
            src="/images/payment-proof-dummy.png"
            alt="Payment Proof"
            width={200}
            height={401}
          />
        </div>
        <div>
          <div>
            <h4 className="font-semibold text-sm mb-2">Order Details</h4>
            <div className="bg-gray-100 rounded-md flex flex-col gap-2.5 p-4 text-sm mb-5">
              <div className="flex justify-between font-medium">
                <div className="opacity-50">Date</div>
                <div className="text-right">23/02/2026 19:32</div>
              </div>
              <div className="flex justify-between font-medium">
                <div className="opacity-50">Customer</div>
                <div className="text-right">John Doe</div>
              </div>
              <div className="flex justify-between font-medium">
                <div className="opacity-50">Contact</div>
                <div className="text-right">+123123123</div>
              </div>
              <div className="flex justify-between gap-10 font-medium">
                <div className="opacity-50 whitespace-nowrap">
                  Shipping Address
                </div>
                <div className="text-right">
                  Merdeka Street, Jakarta, Indonesia, 332122
                </div>
              </div>
            </div>
            <h4 className="font-semibold text-sm mb-2">Items Purchased</h4>
            <div className="border border-gray-200 rounded-lg p-2 flex items-center gap-2">
              <div className="bg-gray-200 rounded aspect-square w-8">
                <Image
                  src="/images/products/product-1.png"
                  alt="Product 1"
                  width={32}
                  height={32}
                />
              </div>
              <div className="font-medium text-xs">SportOn HyperFast Shoes</div>
              <div className="font-medium ml-auto text-xs">3 units</div>
            </div>
            <div className="flex justify-between text-sm mt-6">
              <h4 className="font-semibold ">Total</h4>
              <div className="text-primary font-semibold">
                {PriceFormatter(150000)}
              </div>
            </div>
            <div className="flex justify-end gap-5 mt-10">
              <Button className="text-primary! bg-primary-light! rounded-md">
                <FiX size={20} />
                Reject
              </Button>
              <Button className="text-white bg-green-500! rounded-md">
                <FiCheck size={20} />
                Approve
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default TransactionsModal;

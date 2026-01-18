import Button from "@/app/(landing)/components/ui/button";
import Modal from "../ui/modal";
import { useState } from "react";

type TBankInfoModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const BankInfoModal = ({ isOpen, onClose }: TBankInfoModalProps) => {
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Add new Bank Account">
      <div className="flex flex-col gap-6">
        <div className="flex gap-7">
          <div className="flex flex-col gap-4 w-full">
            <div className="input-group-admin">
              <label htmlFor="bankName">Bank Name</label>
              <input
                type="text"
                id="bankName"
                name="bankName"
                placeholder="e.g BCA"
              />
            </div>
            <div className="input-group-admin">
              <label htmlFor="accountNumber">Account Number</label>
              <input
                type="text"
                id="accountNumber"
                name="accountNumber"
                placeholder="e.g 1234567890"
              />
            </div>
            <div className="input-group-admin">
              <label htmlFor="accountName">Account Name / Holder</label>
              <input
                type="text"
                id="accountName"
                name="accountName"
                placeholder="Holder name as registered on the Account"
              />
            </div>
          </div>
        </div>

        <Button className="ml-auto mt-3 rounded-xl">Create Bank Account</Button>
      </div>
    </Modal>
  );
};

export default BankInfoModal;

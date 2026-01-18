import Button from "@/app/(landing)/components/ui/button";
import Modal from "../ui/modal";
import ImageUploadPreview from "../ui/image-upload-preview";
import { useState } from "react";

type TProductModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const ProductModal = ({ isOpen, onClose }: TProductModalProps) => {
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Add new Product">
      <div className="flex flex-col gap-6">
        <div className="flex gap-7">
          <div className="min-w-50">
            <ImageUploadPreview
              label="Product Image"
              value={imagePreview}
              onChange={(file) => {
                setImageFile(file);
                setImagePreview(URL.createObjectURL(file));
              }}
            />
          </div>
          <div className="flex flex-col gap-4 w-full">
            <div className="input-group-admin">
              <label htmlFor="productName">Product Name</label>
              <input
                type="text"
                id="productName"
                name="productName"
                placeholder="e.g Running shoes"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="input-group-admin">
                <label htmlFor="price">Price (IDR)</label>
                <input
                  type="text"
                  id="price"
                  name="price"
                  placeholder="e.g 500000"
                />
              </div>
              <div className="input-group-admin">
                <label htmlFor="stock">Stock</label>
                <input
                  type="text"
                  id="stock"
                  name="stock"
                  placeholder="e.g 100"
                />
              </div>
            </div>
            <div className="input-group-admin">
              <label htmlFor="category">
                Category
                <select name="category" id="category">
                  <option value="" disabled>
                    Select Category
                  </option>
                  <option value="">Running</option>
                  <option value="">Football</option>
                  <option value="">Swimming</option>
                  <option value="">Tennis</option>
                  <option value="">Basketball</option>
                </select>
              </label>
            </div>
          </div>
        </div>
        <div className="input-group-admin">
          <label htmlFor="description">Description</label>
          <textarea name="description" id="description" rows={7}>
            Product details...
          </textarea>
        </div>
        <Button className="ml-auto mt-3 rounded-xl">Create Product</Button>
      </div>
    </Modal>
  );
};

export default ProductModal;

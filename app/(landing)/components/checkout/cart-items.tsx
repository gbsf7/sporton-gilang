"use client";
import Image from "next/image";
/* import { cartList } from "../ui/cartpopup"; */
import PriceFormatter from "@/app/utils/price-formatter";
import Button from "../ui/button";
import { FiCreditCard, FiTrash2 } from "react-icons/fi";
import CardWithHeader from "../ui/cart-with-header";
import { useRouter } from "next/navigation";
import { useCartStore } from "@/app/hooks/use-cart-store";
import { getImageUrl } from "@/app/lib/api";

type TCartItems = {
  handlePayment: () => void;
};

const CartItems = ({ handlePayment }: TCartItems) => {
  const { items, removeItem } = useCartStore();
  const { push } = useRouter();

  const payment = () => {};
  const totalPrice = items.reduce(
    (total, item) => total + item.price * item.qty,
    0
  );
  return (
    <CardWithHeader title="Cart Items">
      <div className="flex flex-col justify-between h-[calc(100%-70px)]">
        <div className="overflow-auto max-h-75">
          {items.length ? (
            items.map((item, _id) => (
              <div
                className="border-b border-gray-200 p-4 flex gap-3"
                key={_id}
              >
                <div className="bg-primary-light aspect-square w-16 flex justify-center items-center">
                  <Image
                    src={getImageUrl(item.imageUrl)}
                    alt={item.name}
                    width={63}
                    height={63}
                    className="aspect-square object-contain"
                  />
                </div>
                <div className="self-center">
                  <div className="text-sm font-medium">{item.name}</div>
                  <div className="flex gap-3 text-xs">
                    <div className="font-medium">{item.qty}x</div>
                    <div className="text-primary">
                      {PriceFormatter(item.price)}
                    </div>
                  </div>
                </div>
                <Button
                  size="small"
                  variant="ghost"
                  className="w-7 h-7 p-0! ml-auto"
                  onClick={() => removeItem(item._id)}
                >
                  <FiTrash2 />
                </Button>
              </div>
            ))
          ) : (
            <div className="p-4 text-center text-gray-500/50">
              Your cart is empty.
            </div>
          )}
        </div>
        <div className="border-t border-gray-200 p-4">
          <div className="flex justify-between font-semibold">
            <div className="text-sm">Total</div>
            <div className="text-primary text-xs ">
              {PriceFormatter(totalPrice)}
            </div>
          </div>
          <Button
            variant="dark"
            size="normal"
            className="w-full mt-4"
            onClick={handlePayment}
          >
            <FiCreditCard /> Proceed to Payment
          </Button>
        </div>
      </div>
    </CardWithHeader>
  );
};

export default CartItems;

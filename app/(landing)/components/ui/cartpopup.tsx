import PriceFormatter from "@/app/utils/price-formatter";
import Image from "next/image";
import Button from "./button";
import { FiArrowRight, FiTrash2 } from "react-icons/fi";
import { useRouter } from "next/navigation";
import { useCartStore } from "@/app/hooks/use-cart-store";
import { getImageUrl } from "@/app/lib/api";

/* export const cartList = [
  {
    name: "SportsOn Product 1",
    category: "Running",
    price: 450000,
    qty: 2,
    imageUrl: "product-1.png",
  },
  {
    name: "SportsOn Product 2",
    category: "Tennis",
    price: 550000,
    qty: 5,
    imageUrl: "product-2.png",
  },
  {
    name: "SportsOn Product 3",
    category: "Basketball",
    price: 350000,
    qty: 9,
    imageUrl: "product-3.png",
  },
  {
    name: "SportsOn Product 3",
    category: "Basketball",
    price: 350000,
    qty: 9,
    imageUrl: "product-3.png",
  },
  {
    name: "SportsOn Product 3",
    category: "Basketball",
    price: 350000,
    qty: 9,
    imageUrl: "product-3.png",
  },
  {
    name: "SportsOn Product 3",
    category: "Basketball",
    price: 350000,
    qty: 9,
    imageUrl: "product-3.png",
  },
  {
    name: "SportsOn Product 3",
    category: "Basketball",
    price: 350000,
    qty: 9,
    imageUrl: "product-3.png",
  },
]; */

const CartPopup = () => {
  const { push } = useRouter();
  const { items, removeItem } = useCartStore();

  const gotoCheckout = () => {
    push("/checkout");
  };
  const totalPrice = items.reduce(
    (total, item) => total + item.price * item.qty,
    0
  );
  return (
    <div className="absolute bg-white right-0 top-12 shadow-xl shadow-black/10 border border-gray-200 w-90 ">
      <div className="p-4 border-b border-gray-200 font-bold text-center">
        Shopping Cart
      </div>
      {items.length ? (
        items.map((item, index) => (
          <div className="border-b border-gray-200 p-4 flex gap-3" key={index}>
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
                <div className="text-primary">{PriceFormatter(item.price)}</div>
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
      <div className="border-t border-gray-200 p-4">
        <div className="flex justify-between font-semibold">
          <div className="text-sm">Total</div>
          <div className="text-primary text-xs ">
            {PriceFormatter(totalPrice)}
          </div>
        </div>
        <Button
          variant="dark"
          size="small"
          className="w-full mt-4"
          onClick={gotoCheckout}
        >
          Checkout Now <FiArrowRight />
        </Button>
      </div>
    </div>
  );
};

export default CartPopup;

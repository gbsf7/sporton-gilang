import Image from "next/image";
import ProductActions from "../../components/product-detail/product-actions";
import PriceFormatter from "@/app/utils/price-formatter";
import { getProductDetail } from "@/app/services/product.service";
import { getImageUrl } from "@/app/lib/api";

export type TPageProps = {
  params: Promise<{ id: string }>;
};

const ProductDetail = async ({ params }: TPageProps) => {
  const { id } = await params;

  const product = await getProductDetail(id);

  console.log("Product stock: ", product.stock);

  return (
    <main className="container mx-auto py-40 flex gap-12">
      <div className="bg-primary-light aspect-square min-w-140 flex justify-center items-center">
        <Image
          src={getImageUrl(product.imageUrl)}
          alt={product.name}
          width={550}
          height={550}
          className={product.name}
        />
      </div>
      <div className="w-full py-7">
        <h1 className="font-bold text-5xl mb-6">{product.name}</h1>
        <div className="py-2 px-6 bg-primary-light rounded-full text-primary w-fit mb-5">
          {product.category.name}
        </div>
        <p className="leading-loose mb-8">{product.description}</p>
        <div className="text-primary text-[32px] font-semibold">
          {PriceFormatter(product.price)}
        </div>
        <p className="leading-loose mb-12">
          <div className="text-gray-400 text-xl font-italic">
            In stock: {product.stock} items
          </div>
        </p>
        <ProductActions product={product} stock={product.stock} />
      </div>
    </main>
  );
};

export default ProductDetail;

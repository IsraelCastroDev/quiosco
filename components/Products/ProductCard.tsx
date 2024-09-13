import { formatCurrency } from "@/src/utils";
import { Product } from "@prisma/client";
import Image from "next/image";
import AddProductButton from "./AddProductButton";

interface Props {
  product: Product;
}

function ProductCard({ product }: Props) {
  return (
    <div className="border bg-white">
      <Image
        src={`/products/${product.image}.jpg`}
        alt={`Imagen de ${product.name}`}
        width={640}
        height={640}
      />

      <div className="p-5">
        <h3 className="text-2xl font-bold">{product.name}</h3>
        <p className="mt-5 font-black text-4xl text-amber-500">
          {formatCurrency(product.price)}
        </p>

        <AddProductButton product={product} />
      </div>
    </div>
  );
}
export default ProductCard;

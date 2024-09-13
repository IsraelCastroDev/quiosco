import { formatCurrency } from "@/src/utils";
import { Product } from "@prisma/client";
import Image from "next/image";

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

        <button
          type="button"
          className="bg-indigo-600 hover:bg-indigo-700 text-white w-full p-3 mt-5 uppercase font-bold cursor-pointer"
        >
          Agregar
        </button>
      </div>
    </div>
  );
}
export default ProductCard;

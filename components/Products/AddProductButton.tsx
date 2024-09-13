"use client";

import { useStore } from "@/src/store/store";
import { Product } from "@prisma/client";

interface Props {
  product: Product;
}

function AddProductButton({ product }: Props) {
  const addToOrder = useStore((state) => state.addToOrder);

  return (
    <button
      onClick={() => addToOrder(product)}
      type="button"
      className="bg-indigo-600 hover:bg-indigo-700 text-white w-full p-3 mt-5 uppercase font-bold cursor-pointer"
    >
      Agregar
    </button>
  );
}
export default AddProductButton;

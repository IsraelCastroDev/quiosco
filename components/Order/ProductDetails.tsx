import { useStore } from "@/src/store/store";
import { OrderItem } from "@/src/types";
import { formatCurrency } from "@/src/utils";
import { PlusIcon, MinusIcon, XCircleIcon } from "@heroicons/react/24/outline";

interface Props {
  item: OrderItem;
}

function ProductDetails({ item }: Props) {
  const decreaseQuantity = useStore((state) => state.decreaseQuantity);
  const increaseQuantity = useStore((state) => state.increaseQuantity);
  const removeItem = useStore((state) => state.removeItem);

  const MAX_ITEMS = 5;
  const MIN_ITEMS = 1;

  return (
    <div className="shadow space-y-1 p-4 bg-white  border-t border-gray-200 ">
      <div className="space-y-4">
        <div className="flex justify-between items-start">
          <p className="text-xl font-bold">{item.name} </p>

          <button type="button" onClick={() => removeItem(item.id)}>
            <XCircleIcon className="text-red-600 h-8 w-8" />
          </button>
        </div>
        <p className="text-2xl text-amber-500 font-black">
          {formatCurrency(item.price)}
        </p>
        <div className="flex gap-5 px-10 py-2 bg-gray-100 w-fit rounded-lg">
          <button
            type="button"
            onClick={() => decreaseQuantity(item.id)}
            disabled={item.quantity === MIN_ITEMS}
            className="disabled:opacity-40"
          >
            <MinusIcon className="h-6 w-6" />
          </button>

          <p className="text-lg font-black ">{item.quantity}</p>

          <button
            type="button"
            onClick={() => increaseQuantity(item.id)}
            disabled={item.quantity === MAX_ITEMS}
            className="disabled:opacity-40"
          >
            <PlusIcon className="h-6 w-6" />
          </button>
        </div>
        <p className="text-xl font-black text-gray-700">
          Subtotal: {""}
          <span className="font-normal">{formatCurrency(item.subtotal)}</span>
        </p>
      </div>
    </div>
  );
}

export default ProductDetails;

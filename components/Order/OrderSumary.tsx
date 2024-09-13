"use client";

import { useStore } from "@/src/store/store";
import { useMemo } from "react";
import ProductDetails from "./ProductDetails";
import { formatCurrency } from "@/src/utils";

function OrderSumary() {
  const order = useStore((state) => state.order);
  const orderIsEmpty = useMemo(() => order.length === 0, [order]);

  const total = useMemo(
    () => order.reduce((acc, item) => acc + item.subtotal, 0),
    [order]
  );

  return (
    <aside className="lg:h-screen lg:overflow-y-scroll md:w-64 lg:w-96 p-5">
      <h1 className="text-3xl text-center font-black">Mi pedido</h1>

      {orderIsEmpty ? (
        <p>Orden vacía</p>
      ) : (
        <div className="mt-5">
          {order.map((order) => (
            <ProductDetails key={order.id} item={order} />
          ))}

          <p className="text-2xl font-bold mt-3 text-center">
            Total: <span>{formatCurrency(total)}</span>
          </p>
        </div>
      )}
    </aside>
  );
}
export default OrderSumary;

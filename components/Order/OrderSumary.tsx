"use client";

import { useStore } from "@/src/store/store";
import { useMemo } from "react";
import ProductDetails from "./ProductDetails";

function OrderSumary() {
  const order = useStore((state) => state.order);
  const orderIsEmpty = useMemo(() => order.length === 0, [order]);

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
        </div>
      )}
    </aside>
  );
}
export default OrderSumary;

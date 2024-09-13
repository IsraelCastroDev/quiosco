import { create } from "zustand";
import { OrderItem } from "../types";
import { Product } from "@prisma/client";

interface Store {
  order: OrderItem[];
  addToOrder: (product: Product) => void;
  decreaseQuantity: (id: OrderItem["id"]) => void;
  increaseQuantity: (id: OrderItem["id"]) => void;
}

export const useStore = create<Store>((set, get) => ({
  order: [],
  addToOrder: (product: Product) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { categoryId, image, ...data } = product;

    let order: OrderItem[] = [];
    if (get().order.find((item) => item.id === product.id)) {
      // Actualiza el item si ya está en la orden
      order = get().order.map((item) =>
        item.id === product.id
          ? {
              ...item,
              quantity: item.quantity === 5 ? 5 : item.quantity + 1,
              subtotal: item.price * (item.quantity + 1),
            }
          : item
      );
    } else {
      // Agrega un nuevo producto a la orden
      order = [
        ...get().order,
        { ...data, quantity: 1, subtotal: product.price },
      ]; // Aquí había una coma innecesaria
    }

    set({ order });
  },
  decreaseQuantity: (id) => {
    let order: OrderItem[] = [];

    if (get().order.find((item) => item.id === id)) {
      order = get().order.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity === 1 ? 1 : item.quantity - 1 }
          : item
      );
    }

    set({ order });
  },
  increaseQuantity: (id) => {
    let order: OrderItem[] = [];

    if (get().order.find((item) => item.id === id)) {
      order = get().order.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity < 5 ? item.quantity + 1 : 5 }
          : item
      );
    }

    set({ order });
  },
}));

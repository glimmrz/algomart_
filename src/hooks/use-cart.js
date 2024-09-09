import { errorToast, successToast } from "@/utils/helpers";
import { create } from "zustand";
import {
  persist,
  createJSONStorage,
  subscribeWithSelector,
} from "zustand/middleware";

export const useCart = create(
  subscribeWithSelector(
    persist(
      (set) => ({
        cartItems: [],
        total: 0,
        onAdd: (product) =>
          set((state) => {
            const existingItem = state.cartItems.find(
              (item) => item._id === product._id
            );

            if (existingItem) {
              const newItems = state.cartItems.map((item) =>
                item._id === product._id
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
              );
              const newTotal = state.total + product.price;

              successToast("Quantity increased!");
              return {
                cartItems: newItems,
                total: newTotal,
              };
            }

            if (!existingItem) {
              const newItems = [
                ...state.cartItems,
                { ...product, quantity: 1 },
              ];
              const newTotal = state.total + product.price;

              successToast(`${product?.title} added to cart!`);
              return {
                cartItems: newItems,
                total: newTotal,
              };
            }
          }),
        onRemove: (id, title) =>
          set((state) => {
            const existingItem = state.cartItems.find(
              (item) => item._id === id
            );

            if (!existingItem) {
              return {
                cartItems: state.cartItems,
                total: state.total,
              };
            }

            const newItems = state.cartItems.filter((item) => item._id !== id);
            const newTotal =
              state.total - existingItem.quantity * existingItem.price;

            errorToast(`${title} removed from cart!`);
            return {
              cartItems: newItems,
              total: newTotal,
            };
          }),

        onIncrease: (id) =>
          set((state) => {
            const index = state.cartItems.findIndex((item) => item._id === id);

            if (index === -1) {
              return {
                cartItems: state.cartItems,
                total: state.total,
              };
            }

            state.cartItems[index].quantity += 1;
            state.total += state.cartItems[index].price;

            return {
              cartItems: state.cartItems,
              total: state.total,
            };
          }),

        onDecrease: (id, title) =>
          set((state) => {
            const index = state.cartItems.findIndex((item) => item._id === id);

            if (index === -1) {
              return {
                cartItems: state.cartItems,
                total: state.total,
              };
            }

            state.cartItems[index].quantity -= 1;
            state.total -= state.cartItems[index].price;

            if (state.cartItems[index].quantity === 0) {
              state.cartItems.splice(index, 1);
              errorToast(`${title} removed from cart!`);
            }

            return {
              cartItems: state.cartItems,
              total: state.total,
            };
          }),
      }),
      {
        name: "cart-storage",
        storage: createJSONStorage(() => localStorage),
      }
    )
  )
);

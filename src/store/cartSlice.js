import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productsInCart: [],
  cartTotal: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id, name, image, alt, price, quantity } = action.payload;
      const existingProduct = state.productsInCart.find(
        (product) => product.id === id
      );

      if (existingProduct) {
        existingProduct.quantity += quantity;
      } else {
        state.productsInCart.push({ id, name, image, alt, price, quantity });
      }
      state.cartTotal = state.productsInCart.reduce(
        (total, product) => total + product.price * product.quantity,
        0
      );
    },
    removeFromCart: (state, action) => {
      const { id } = action.payload;
      state.productsInCart = state.productsInCart.filter(
        (product) => product.id !== id
      );
      state.cartTotal = state.productsInCart.reduce(
        (total, product) => total + product.price * product.quantity,
        0
      );
    },
    decrementQuantity: (state, action) => {
      const { id } = action.payload;
      const existingProduct = state.productsInCart.find(
        (product) => product.id === id
      );

      if (existingProduct) {
        if (existingProduct.quantity > 1) {
          existingProduct.quantity -= 1;
        } else {
          state.productsInCart = state.productsInCart.filter(
            (product) => product.id !== id
          );
        }
      }
      state.cartTotal = state.productsInCart.reduce(
        (total, product) => total + product.price * product.quantity,
        0
      );
    },
    clearCart: (state) => {
      state.productsInCart = [];
      state.cartTotal = 0;
    },
  },
});

export const { addToCart, removeFromCart, decrementQuantity, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;

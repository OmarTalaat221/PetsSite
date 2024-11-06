import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: JSON.parse(localStorage.getItem("pits_cart")) || [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      // state.value += 1;
      const cartData = JSON.parse(localStorage.getItem("pits_cart")) || [];
      const prodData = action.payload;

      console.log(prodData);
      if (cartData) {
        const prodExist = cartData.find((item) => item.id == prodData.id);
        if (prodExist) {
          const newData = cartData.map((item) => {
            if (item.id == prodData.id) {
              return {
                ...item,
                count: prodData.count,
              };
            }
            return item;
          });

          localStorage.setItem("pits_cart", JSON.stringify(newData));
          state.cart = newData;
          return;
        }

        const dataset = {
          ...prodData,
          count: prodData.count,
        };

        cartData.push(dataset);
        localStorage.setItem("pits_cart", JSON.stringify(cartData));
        state.cart = cartData;
      } else {
        const dataset = {
          ...prodData,
          count: prodData.count,
        };
        localStorage.setItem("pits_cart", dataset);
        state.cart = dataset;
      }
    },

    addOneToCart: (state, action) => {
      const cartData = JSON.parse(localStorage.getItem("pits_cart")) || [];
      const prodData = action.payload;

      if (cartData) {
        const newData = cartData.map((item) => {
          if (item.id == prodData.id) {
            return {
              ...item,
              count: +item.count + 1,
            };
          }
          return item;
        });
        localStorage.setItem("pits_cart", JSON.stringify(newData));
        state.cart = newData;
      }
    },
    minusFromCart: (state, action) => {
      const cartData = JSON.parse(localStorage.getItem("pits_cart")) || [];
      const prodData = action.payload;

      if (cartData) {
        const newData = cartData.map((item) => {
          if (item.id == prodData.id) {
            return {
              ...item,
              count: +item.count - 1,
            };
          }
          return item;
        });
        localStorage.setItem("pits_cart", JSON.stringify(newData));
        state.cart = newData;
      }
    },

    removeFromCart: (state, action) => {
      const cartData = JSON.parse(localStorage.getItem("pits_cart")) || [];
      const prodData = action.payload;

      const newData = cartData?.filter((c_prod) => c_prod.id !== prodData.id);

      localStorage.setItem("pits_cart", JSON.stringify(newData));
      state.cart = newData;
    },

    // removeFromCart: (state, action) => {
    //   state.value += action.payload;
    // },
    clearCart: (state, action) => {
      localStorage.removeItem("pits_cart");
      state.cart = [];
    },
  },
});

export const {
  addToCart,
  minusFromCart,
  removeFromCart,
  addOneToCart,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// const initialState = () => {

// }

// get data by thunk
export const productFeatch = createAsyncThunk(
  "product/productFeatch",
  async () => {
    const response = await axios.get("https://dummyjson.com/products");
    return response?.data;
  }
);

const ProductSlic = createSlice({
  name: "product",
  initialState: {
    cart: localStorage.getItem("shoppingCart")
      ? JSON.parse(localStorage.getItem("shoppingCart"))
      : [],
    allProduct: [],
    totalAmount: localStorage.getItem("totalAmount")
      ? JSON.parse(localStorage.getItem("totalAmount"))
      : 0,
    totalQTY: localStorage.getItem("totalQTY")
      ? JSON.parse(localStorage.getItem("totalQTY"))
      : 0,
    status: "",
  },
  reducers: {
    getAllProduct: (state, action) => {
      state.allProduct = action.payload;
    },
    addToCartProduct: (state, action) => {
      //   const alreadyAddedItem = state.cart.findIndex(
      const alreadyAddedItem = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      // don't store cart product twice time only inc qty
      if (alreadyAddedItem >= 0) {
        state.cart[alreadyAddedItem].qty++;
      } else {
        state.cart.push(action.payload);
      }
      // send data to local storage
      localStorage.setItem("shoppingCart", JSON.stringify(state.cart));
    },
    setRemoveCartItem: (state, action) => {
      // console.log(action.payload);
      const cartItem = state.cart.filter((item) => item.id !== action.payload);
      state.cart = cartItem;
      // send data to local storage
      localStorage.setItem("shoppingCart", JSON.stringify(cartItem));
    },
    setIncCartItem: (state, action) => {
      // console.log(action.payload);
      const cartItemIndex = state.cart.findIndex(
        (item) => item.id === action.payload
      );
      // qty increment
      state.cart[cartItemIndex].qty += 1;
      localStorage.setItem("shoppingCart", JSON.stringify(state.cart));
    },
    setDecCartItem: (state, action) => {
      // console.log(action.payload);
      const cartItemIndex = state.cart.findIndex(
        (item) => item.id === action.payload
      );
      // qty decrement
      state.cart[cartItemIndex].qty -= 1;
      localStorage.setItem("shoppingCart", JSON.stringify(state.cart));
    },
    setGetTotals: (state, action) => {
      console.log("called");
      let { totalAmount, totalQTY } = state.cart.reduce(
        (cartTotal, cartItems) => {
          let { price, qty } = cartItems;

          let totalPrice = price * qty;
          cartTotal.totalAmount += totalPrice;
          cartTotal.totalQTY += qty;

          return cartTotal;
        },
        {
          totalAmount: 0,
          totalQTY: 0,
        }
      );

      state.totalAmount = totalAmount;
      state.totalQTY = totalQTY;

      // total amount send to local storage
      localStorage.setItem("totalAmount", JSON.stringify(state.totalAmount));

      // total qty send to local storage
      localStorage.setItem("totalQTY", JSON.stringify(state.totalQTY));

      // // total amount calculate
      // let amount = 0;
      // state.cart.map((item, index) => {
      //   amount += item.price * item.qty;
      // });
      // // update amount
      // state.totalAmount = amount;

      // // total amount send to local storage
      // localStorage.setItem("totalAmount", JSON.stringify(state.totalAmount));
    },
  },
  extraReducers: {
    [productFeatch.pending]: (state, action) => {
      state.status = "pendding";
    },
    [productFeatch.fulfilled]: (state, action) => {
      state.status = "success";
      state.allProduct = action.payload;
    },
    [productFeatch.rejected]: (state, action) => {
      state.status = "rejecte";
    },
  },
});

// export reducers as actions
export const {
  getAllProduct,
  addToCartProduct,
  setRemoveCartItem,
  setIncCartItem,
  setDecCartItem,
  setGetTotals,
} = ProductSlic.actions;

// export productSlice
export default ProductSlic.reducer;

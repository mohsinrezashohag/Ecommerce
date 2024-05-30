import { createSlice } from "@reduxjs/toolkit";


const seller = JSON.parse(localStorage.getItem("seller"))
const initialState = {
  seller : seller ? seller : null,
  accessToken :null,
};

export const sellerSlice = createSlice({
  name: "seller",
  initialState,
  reducers: {
    setSellerAuthInfo: (state, action) => {
      state.seller = action.payload?.seller
      state.accessToken = action.payload?.token
  },
  removeSellerAuthInfo: (state) => {
      state.seller = null
      state.accessToken = null
  }
  },
});

export  const{ setSellerAuthInfo,removeSellerAuthInfo } = sellerSlice.actions
export default sellerSlice.reducer
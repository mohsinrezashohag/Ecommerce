import { createSlice } from "@reduxjs/toolkit";


const user = JSON.parse(localStorage.getItem("user"))
const initialState = {
  user : user ? user : null,
  accessToken :null
};

export const useSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setAuthInfo: (state, action) => {
      state.user = action.payload?.user
      state.accessToken = action.payload?.token
  },
  removeAuthInfo: (state) => {
      state.user = null
      state.accessToken = null
  }
  },
});

export  const{ setAuthInfo, removeAuthInfo } = useSlice.actions
export default useSlice.reducer
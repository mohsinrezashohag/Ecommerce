import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticate: false,
};

export const useSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loadUserRequest: (state) => {
      state.loading = true;
    },

    loadUserSuccess: (state, action) => {
      (state.isAuthenticate = true),
        (state.loading = false),
        (state.user = action.payload);
    },

    loadUserFail: (state, action) => {
      (state.loading = false),
        (state.error = action.payload),
        (state.isAuthenticate = false);
    },
    clearErrors: (state) => {
      state.error = null;
    },
  },
});

export  const {loadUserRequest,loadUserSuccess,loadUserFail,clearErrors} = useSlice.actions
export default useSlice.reducer
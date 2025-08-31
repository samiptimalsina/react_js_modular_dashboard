import { configureStore } from "@reduxjs/toolkit";
// import authReducer from "@/modules/auth/store/authSlice";
// import customerReducer from "@/modules/customer/store/customerSlice";

const store = configureStore({
  reducer: {
    // auth: authReducer,
    // customer: customerReducer
  }
});

export default store;

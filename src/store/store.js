import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slice/userSlice"; // Исправлено: импорт userReducer

export const store = configureStore({
  reducer: {
    user: userReducer, // Исправлено: использование userReducer
  },
});

export default store;

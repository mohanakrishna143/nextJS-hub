import { configureStore } from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import { persistReducer } from "redux-persist";
import { combineReducers } from "redux";
import authReducer from "./features/auth-slice";
import { TypedUseSelectorHook, useSelector } from "react-redux"; 

// Combine your reducers
const rootReducer = combineReducers({
  auth: authReducer,
  // Add other reducers here if any
});

// Configuration for redux-persist
const persistConfig = {
  key: "root",
  storage,
};

// Wrap rootReducer with persistReducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create the store
export const store = configureStore({
  reducer: persistedReducer,
});

// Define types for AppDispatch
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
// Define a custom hook for using typed selectors
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// Export persistor
export const persistor = persistStore(store);

import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice"
import wishlistReducer from "./slices/wishlistSlice"
import { persistStore, persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage"; // Use localStorage

// Persist Config for Cart
const cartPersistConfig = {
    key: "cart",
    storage,
  };
  
  // Persist Config for Wishlist (Optional)
  const wishlistPersistConfig = {
    key: "wishlist",
    storage,
  };
  
  // Apply persistence to reducers
  const persistedCartReducer = persistReducer(cartPersistConfig, cartReducer);
  const persistedWishlistReducer = persistReducer(wishlistPersistConfig, wishlistReducer);
  
  const store = configureStore({
    reducer: {
      cart: persistedCartReducer,
      wishlist: persistedWishlistReducer, // If you also want to persist wishlist
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: false, // Disables the check
        }),
  });
  export const persistor = persistStore(store);
  export default store;
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import autheReducer from "./Reducers/Auth";
import thunk from "redux-thunk";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import {
  createStateSyncMiddleware,
  initMessageListener,
} from "redux-state-sync";
import { loadingBarReducer } from "react-redux-loading-bar";

const syncConfig = {
  blacklist: ["persist/PERSIST"],
};
const authPersistConfig = { key: "auth", storage };
const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, autheReducer),
  loadingBar: loadingBarReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk, createStateSyncMiddleware(syncConfig)],
});
initMessageListener(store);
export default store;
export const persistor = persistStore(store);

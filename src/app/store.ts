import { configureStore } from "@reduxjs/toolkit";
import vehicleDetailsReducer from "../features/vehicleDetailsSlice";
import patientDetailsReducer from "../features/patientDetailsSlice";

export const store = configureStore({
  reducer: {
    vehicleDetails: vehicleDetailsReducer,
    patientDetails: patientDetailsReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

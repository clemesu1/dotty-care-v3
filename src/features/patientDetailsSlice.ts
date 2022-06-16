import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PayloadType {
  name: string;
  value: string;
}

const initialState = {
  numPtTrans: 0,
  tNotif: "",
  tEnRoute: "",
  tAtScene: "",
  tCrewPt: "",
  tLeftScene: "",
  tAtDest: "",
  tAvail: "",
  tBackArea: "",
  rtsType: "",
  rtsChange: "",
  rfsType: "",
  rfsChange: "",
  cDriver: "",
  cDriverOth: "",
  cAttend: "",
  cAttendOth: "",
  cAsst: "",
  cAsstOth: "",
  mOut: "",
  mAtScene: "",
  mAtDest: "",
  mIn: "",
  mTotal: ""
};

export const patientDetailsSlice = createSlice({
  name: "patientDetails",
  initialState,
  reducers: {
    onChange: (state, action: PayloadAction<PayloadType>) => {
      return {
        ...state,
        [action.payload.name]: action.payload.value
      };
    }
  }
});

export const { onChange } = patientDetailsSlice.actions;

export default patientDetailsSlice.reducer;

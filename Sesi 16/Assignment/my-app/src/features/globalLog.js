import { createSlice } from "@reduxjs/toolkit";

export const globalLog = createSlice({
  name: "backlog",
  initialState: { value: { Log: [] } },
  reducers: {
    Add: (state, action) => {
      state.value.Log = [...state.value.Log, action.payload];
      console.log(state.value.Log);
    },
  },
});

export const { Add } = globalLog.actions;

export default globalLog.reducer;

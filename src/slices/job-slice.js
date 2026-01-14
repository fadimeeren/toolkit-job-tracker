import { createSlice } from "@reduxjs/toolkit";

initialState = {
  isLoading: true,
  error: null,
  jobs: [],
};

createSlice({
  name: "job",
  initialState: initialState,
  reducer: {},
});

import { createSlice } from "@reduxjs/toolkit";

initialState = {
  isLoading: true,
  error: null,
  jobs: [],
};

const jobSlices = createSlice({
  name: "job",
  initialState: initialState,
  reducer: {
    setLoading: (state, action) => {
      state.isLoading = true;
    },
    setError: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    setJobs: (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.jobs = action.payload;
    },
  },
});

export const { setError, setLoading, setJobs } = jobSlices.actions;

export default jobSlices.reducer;

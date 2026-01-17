import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: true,
  error: null,
  jobs: [],
};

const jobSlice = createSlice({
  name: "job",
  initialState: initialState,
  reducers: {
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

export const { setError, setLoading, setJobs } = jobSlice.actions;

export default jobSlice.reducer;

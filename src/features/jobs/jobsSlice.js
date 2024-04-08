import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  jobs: [],
  status: "idle",
  error: null,
};

const apiUrl = "/api/jobs";

//fetch posts
export const fetchJobs = createAsyncThunk("jobs/fetchJobs", async () => {
  const response = await axios.get(apiUrl);
  return response.data;
});

//post new job
export const addNewJob = createAsyncThunk("jobs/addNewJob", async(body) => {
  try {
    const response = await axios.post(apiUrl, body);
    return response.data;
  } catch (error) {
    return error.message
  }
})

export const jobsSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchJobs.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchJobs.fulfilled, (state, action) => {
        state.status = "succeeded";
        // Add any fetched posts to the array
        state.jobs = [...action.payload];
      })
      .addCase(fetchJobs.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(addNewJob.fulfilled, (state, action) => {
        state.jobs.push(action.payload)
      })
  },
});

export const selectStatus = (state) => state.jobs.status;
export const selectError = (state) => state.jobs.error;
export const selectAllJobs = (state) => state.jobs.jobs;
export const selectJobById = (state, postId) =>
  state.jobs.jobs.find((job) => job.id === postId);
export default jobsSlice.reducer;

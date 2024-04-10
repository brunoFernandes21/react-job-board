import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { sub } from "date-fns";


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
        //add date to fetched jobs
        // let min = 1;
        const jobs = action.payload
        // const loadedJobs = jobs.map((job) => {
        //   if(job.id.length === 1) {
        //     job.date = sub(new Date(), { minutes: min++ }).toISOString()
        //   } else {
        //     job.date = new Date().toISOString()
        //   }
        //   return job
        // })
        // Add any fetched posts to the array
        // console.log(jobs);
        state.jobs = [...jobs];
      })
      .addCase(fetchJobs.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(addNewJob.fulfilled, (state, action) => {
        // action.payload.date = new Date().toISOString() 
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

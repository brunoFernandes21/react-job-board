import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  jobs: [],
  status: "idle",
  error: null,
  jobUpdated: false
};

const apiUrl = "/api/jobs";

//fetch jobs
export const fetchJobs = createAsyncThunk("jobs/fetchJobs", async () => {
  const response = await axios.get(apiUrl);
  return response.data;
});

//post new job
export const addNewJob = createAsyncThunk("jobs/addNewJob", async (body) => {
  const response = await axios.post(apiUrl, body);
  return response.data;
});

//update job
export const updateJob = createAsyncThunk("jobs/updateJob", async (body) => {
  const { id } = body;
  const response = await axios.patch(`${apiUrl}/${id}`, body);
  return response.data;
});

//delete job
export const deleteJob = createAsyncThunk("jobs/deleteJob", async (body) => {
  const { id } = body;
  const response = await axios.delete(`${apiUrl}/${id}`);
  //this needs to return the body so that I can grab the id and remove it from state
  if (response.status === 200) return body;
  return `${response.state}: ${response.text}`;
});

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
        const jobs = action.payload;
        state.jobs = [...jobs];
      })
      .addCase(fetchJobs.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(addNewJob.fulfilled, (state, action) => {
        state.jobs.push(action.payload);
      })
      .addCase(deleteJob.fulfilled, (state, action) => {
        const { id } = action.payload;
        const jobExists = state.jobs.find((job) => job.id === id);
        if (!jobExists) {
          console.log("Unable to delete job");
          return;
        }
        const filteredJobs = state.jobs.filter((job) => job.id !== id);
        state.jobs = [...filteredJobs];
      })
      .addCase(updateJob.fulfilled, (state, action) => {
        const updatedJob = action.payload;
        //loop through jobs array in state,
        const jobsArray = state.jobs.map((job) => {
          //if there is an job in array with same id as the the object in payload,
          //assign it to the job in array
          if (job.id === updatedJob.id) {
            job = { ...updatedJob };
          }
          return job;
        });
        //update jobs array in state
        state.jobs = jobsArray;
      });
  },
});

export const selectStatus = (state) => state.jobs.status;
export const selectError = (state) => state.jobs.error;
export const selectAllJobs = (state) => state.jobs.jobs;
export const selectJobById = (state, jobId) =>
  state.jobs.jobs.find((job) => job.id === jobId);
export default jobsSlice.reducer;

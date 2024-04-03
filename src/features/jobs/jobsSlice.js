import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"; 
import axios from "axios";

const JOBS_URL = "http://localhost:8000/jobs"

const initialState = {
    jobs: [],
    status: 'idle',
    error: null
}

export const fetchJobs = createAsyncThunk('jobs/fetchJobs', async () => {
  
    try {
        const response = await axios.get(JOBS_URL)
        return response.data
    } catch (error) {
        return error.message
    }
})

export const jobsSlice = createSlice({
    name: "jobs",
    initialState,
    reducers: {

    },
    extraReducers: builder => {
        builder.addCase(fetchJobs.pending, (state, action) => {
            state.status = "loading"
        })
        .addCase(fetchJobs.fulfilled, (state, action) => {
            state.status = "succeeded"
            // Add any fetched posts to the array
            state.jobs = [...action.payload]
        })
        .addCase(fetchJobs.rejected, (state, action) => {
            state.status = "failed"
            state.error = action.error.message
        })
    }

})

export const selectStatus = state => state.jobs.status
export const selectError = state => state.jobs.error
export const selectAllJobs = state => state.jobs.jobs 
export default jobsSlice.reducer
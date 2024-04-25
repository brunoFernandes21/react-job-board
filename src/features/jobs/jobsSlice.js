import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {
  collection,
  setDoc,
  getDocs,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../../firebase/firebase";

const initialState = {
  jobs: [],
  searchKeywordsArray: [
    "Full-time",
    "Part-time",
    "Hybrid",
    "Remote",
    "Internship",
    "React",
    "Front-end",
    "Back-end",
    "Full-stack",
    "London",
    "Manchester",
    "Leeds",
    "Liverpool",
  ],
  status: "idle",
  error: null,
};

const apiUrl = "/api/jobs";

// CRUP OPERATIONS FOR FIREBASE FIRESTORE

//Fetch all docs from jobs collection
export const fetchJobs = createAsyncThunk("jobs/fetchJobs", async () => {
  const querySnapshot = await getDocs(collection(db, "jobs"));
  const data = [];
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    data.push({...doc.data(), id: doc.id});
  });
    return data;
});

//add new job to jobs collection
export const addJobToFirestore = createAsyncThunk(
  "jobs/addJobToFirestore",
  async (body) => {
    const { id } = body
    try {
      await setDoc(doc(db, "jobs", id), body);
    } catch (error) {
      return error;
    }
  }
);

export const updatedJobInFirestore = createAsyncThunk(
  "jobs/updatedJobInFirestore",
  async (body) => {
    console.log(body);
  }
);

//delete a job from jobs collection
export const deleteJobFromFirestore = createAsyncThunk(
  "jobs/deleteJobFromFirestore",
  async (body) => {
    const { id } = body;
    await deleteDoc(doc(db, "jobs", id));
  }
);

/*
CRUD OPERATIONS FOR THE JSON MOCK SERVER

// fetch Filtered Jobs based on search value
export const fetchJobs = createAsyncThunk("jobs/filterJobs", async(searchValue) => {
  const type = ["Full-time", "Part-time", "Remote", "Hybrid", "Internship", "Apprenticeship"]
  const location = ["London", "Leeds", "Manchester", "Liverpool", "Cambridge"]
 
   //return jobs based on search value
   if(type.includes(searchValue)) {
    const response = await axios.get(apiUrl, {params: {type: searchValue}, });
    return response.data;
  } else if(location.includes(searchValue)) {
    const response = await axios.get(apiUrl, {params: {location: searchValue}, });
    return response.data;
  } else if(!type.includes(searchValue) && !location.includes(searchValue)){
    const response = await axios.get(apiUrl, {params: {location: searchValue}, });
    return response.data;
  }else {
    const response = await axios.get(apiUrl);
    return response.data;
  }
})

// post new job
export const addNewJob = createAsyncThunk("jobs/addNewJob", async (body) => {
  const response = await axios.post(apiUrl, body);
  return response.data;
  
});

// update job
export const updateJob = createAsyncThunk("jobs/updateJob", async (body) => {
  const { id } = body;
  const response = await axios.patch(`${apiUrl}/${id}`, body);
  return response.data;
});

// delete job
export const deleteJob = createAsyncThunk("jobs/deleteJob", async (body) => {
  const { id } = body;
  const response = await axios.delete(`${apiUrl}/${id}`);
  //this needs to return the body so that I can grab the id and remove it from state
  if (response.status === 200) return body;
  return `${response.state}: ${response.text}`;
});

*/

export const jobsSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {
    addNewJobToState: (state, action) => {
      state.jobs.push(action.payload);
    },
    updateJobInState: (state, action) => {},
    deleteJobFromState: (state, action) => {
      const { id } = action.payload;
      const jobExists = state.jobs.find((job) => job.id === id);
      if (!jobExists) {
        console.log("Unable to delete job");
        return;
      }
      const filteredJobs = state.jobs.filter((job) => job.id !== id);
      state.jobs = [...filteredJobs];
    },
  },
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
      // .addCase(addJobToFirestore.fulfilled, (state, action) => {
      //   state.jobs.push(action.payload);
      // })
      // .addCase(deleteJob.fulfilled, (state, action) => {
      //   const { id } = action.payload;
      //   const jobExists = state.jobs.find((job) => job.id === id);
      //   if (!jobExists) {
      //     console.log("Unable to delete job");
      //     return;
      //   }
      //   const filteredJobs = state.jobs.filter((job) => job.id !== id);
      //   state.jobs = [...filteredJobs];
      // })
      // .addCase(updateJob.fulfilled, (state, action) => {
      //   const updatedJob = action.payload;
      //   //loop through jobs array in state,
      //   const jobsArray = state.jobs.map((job) => {
      //     //if there is an job in array with same id as the the object in payload,
      //     //assign it to the job in array
      //     if (job.id === updatedJob.id) {
      //       job = { ...updatedJob };
      //     }
      //     return job;
      //   });
      //   //update jobs array in state
      //   state.jobs = jobsArray;
      // });
      
  },
});

export const selectStatus = (state) => state.jobs.status;
export const selectError = (state) => state.jobs.error;
export const selectAllJobs = (state) => state.jobs.jobs;
export const selectJobUpdatedStatus = (state) => state.jobs.jobUpdatedStatus;
export const { addNewJobToState, deleteJobFromState } = jobsSlice.actions;
export const searchKeywords = (state) => state.jobs.searchKeywordsArray;
export const selectJobById = (state, jobId) =>
  state.jobs.jobs.find((job) => job.id === jobId);
export default jobsSlice.reducer;

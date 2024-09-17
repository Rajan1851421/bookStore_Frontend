import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async thunk for login
export const getAllusers = createAsyncThunk(
  "getAllusers",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`http://localhost:4000/user/`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// delte user
export const deleteUser = createAsyncThunk(
  "deleteUser",
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`http://localhost:4000/user/${id}`);
      return id; // Return the ID of the deleted book
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Slice definition
export const loginSlice = createSlice({
  name: "login",
  initialState: {
    token_login: null,
    loading: false,
    status: "",
    role: "",
    All_users: [],
    error: "",
  },
  reducers: {
    setToken: (state, action) => {
      state.token_login = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    logout: (state) => {
      state.token_login = null;
      state.status = "Logout Sucessfully";
    },
    userType: (state, action) => {
      state.role = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllusers.pending, (state, sction) => {
        state.loading = true;
      })
      .addCase(getAllusers.fulfilled, (state, action) => {
        state.loading = false;
        state.All_users = action.payload;
      })
      .addCase(getAllusers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteUser.pending, (state) => {
        state.loading = true;
        state.status = "loading";
        state.error = null; // Reset the error when a new delete request is made
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.loading = false;
        state.status = 'deleted';
        // Remove the book by filtering the one that matches the deleted book's ID
        state.All_users = state.All_users.filter(user => user._id !== action.payload);
    })
      .addCase(deleteUser.rejected, (state, action) => {
        state.loading = false;
        state.status = "failed";
        state.error = action.payload; // Capture the error message from the rejected action
      });
  },
});

// Export actions and reducer
export const { setToken, setLoading, logout, userType } = loginSlice.actions;
export default loginSlice.reducer;

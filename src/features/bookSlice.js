import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async thunk to fetch all books
export const getAllBooks = createAsyncThunk(
  "book/getAllBooks", // The action name
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`http://localhost:4000/`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// delete single book by id
// delete single book by id
export const deleteBook = createAsyncThunk(
  "book/deleteBook",
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`http://localhost:4000/books/${id}`);
      return id; // Return the ID of the deleted book
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Create the slice
const bookSlice = createSlice({
  name: "book",
  initialState: {
    All_Book: [],
    status: "idle", // idle, loading, succeeded, failed, deleted
    loading: false,
    error: null, // To capture and display any error messages
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllBooks.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllBooks.fulfilled, (state, action) => {
        state.loading = false;
        state.All_Book = action.payload;
      })
      .addCase(getAllBooks.rejected, (state) => {
        state.loading = false;
      })
      .addCase(deleteBook.pending, (state) => {
        state.loading = true;
        state.status = "loading";
        state.error = null; // Reset the error when a new delete request is made
      })
      .addCase(deleteBook.fulfilled, (state, action) => {
        state.loading = false;
        state.status = 'deleted';
        // Remove the book by filtering the one that matches the deleted book's ID
        state.All_Book = state.All_Book.filter(book => book._id == action.payload);
    })
      .addCase(deleteBook.rejected, (state, action) => {
        state.loading = false;
        state.status = "failed";
        state.error = action.payload; // Capture the error message from the rejected action
      });
  },
});

export default bookSlice.reducer;

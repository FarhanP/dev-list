import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// createAsyncThunk(action, callback)
export const fetchTodos = createAsyncThunk("fetchTodos", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  return response.json();
});

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    isLoading: false,
    data: [],
    isError: false,
  },
  // a function that has a builder which listerns to the various states of an api call
  extraReducers: (builder) => {
    builder.addCase(fetchTodos.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      console.log(state.data);
    });
    builder.addCase(fetchTodos.rejected, (state, action) => {
      console.error("Failed to fetch users data!");
      state.isError = true;
    });
  },
});

export default todoSlice.reducer;

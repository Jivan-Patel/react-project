import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchUsers = createAsyncThunk(
  'users/fetchUsers',
  async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    return res.json();
  },
  // condition -> priority high as compare to async funtion....
  {
    condition: (_, { getState }) => {
      const { users } = getState();
      if (users.data?.length > 0 || users.loading) {  // Add || users.loading
        console.log('Already loading/data exists, skipping');
        return false;
      }
      return true;
    }
  }
);

const userSlice = createSlice({
  name: 'users',
  initialState: { data: [], loading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        console.log('Pending...');
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        console.log('Data fetched');
        state.loading = false;
        state.data = action.payload;
        console.log(action.payload)
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        console.log('Error:', action.payload || action.error.message);
        state.loading = false;
        state.error = action.payload || action.error?.message;
      });
  },
});

export default userSlice.reducer;

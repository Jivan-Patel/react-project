import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchStore = createAsyncThunk(
  'store/fetchStore',
  async () => {
    const response = await fetch('https://fakestoreapi.com/products');
    return response.json();
  },
  {
    condition: (_, { getState }) => {
      const { store } = getState();
      if (store.data?.length > 0 || store.loading) {  // Add || store.loading
        console.log('Already loading/data exists, skipping');
        return false;
      }
      return true;
    }
  }
);

const StoreSlice = createSlice({
  name: 'store',
  initialState: { data: [], loading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(fetchStore.pending, (state) => {
      state.loading = true;
      state.error = null; // Clear previous errors
    })
    .addCase(fetchStore.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      console.log("hit...")
    })
    .addCase(fetchStore.rejected, (state, action) => {
      console.log("error phase....", action.error.message || action.payload);
      state.loading = false;
      state.error = action.payload || action.error.message;
    });
    }
});

export default StoreSlice.reducer;
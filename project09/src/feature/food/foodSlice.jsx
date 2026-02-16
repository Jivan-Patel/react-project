import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchFood = createAsyncThunk(
    'food/fetchFood',
    async () => {
        const response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
        return response.json();
    },
        {
        condition: (_, { getState }) => {
            const {food } = getState();
            if (food.data?.length > 0 || food.loading) {
                console.log('Already loading/data exists, skipping');
                return false;
            }
            return true;
        }
    }
);

const FoodSlice = createSlice({
    name: 'food',
    initialState: { data: [], loading: false, error: null },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchFood.pending, (state) => {
                state.loading = true;
                state.error = null; // Clear previous errors
            })
            .addCase(fetchFood.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload.categories || [];
                console.log("Food fetched");
            })
            .addCase(fetchFood.rejected, (state, action) => {
                console.log("error phase....", action.error.message || action.payload);
                state.loading = false;
                state.error = action.payload || action.error.message;
            });
    }
});

export default FoodSlice.reducer;
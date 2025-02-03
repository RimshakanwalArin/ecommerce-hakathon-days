import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '@/app/product/types';
interface SearchState {
  query: string;
  results: Product[];
}

const initialState: SearchState = {
  query: '',
  results: [],
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.query = action.payload;
    },
    setSearchResults: (state, action: PayloadAction<Product[]>) => {
      state.results = action.payload;
    },
  },
});

export const { setSearchQuery, setSearchResults } = searchSlice.actions;
export default searchSlice.reducer;

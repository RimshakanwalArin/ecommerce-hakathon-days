import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../../../../product/types'

interface SearchState {
  query: string;
  results: Product[]; // Use the Product type here
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
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store' 
import { IProduct } from '@/app/utils/Types'
import Products from '@/app/utils/Mock'

const initialState: IProduct[] = Products 

export const ProductSlice = createSlice({
  name: 'counter',
  
  initialState,
  reducers: {
  
  },
})

export const { } = ProductSlice.actions



export default ProductSlice.reducer
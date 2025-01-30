import { configureStore } from '@reduxjs/toolkit'
import  ProductSlice  from './features/productSlice'
import CartSlice  from './features/cartSlice'
import SearchSlice from '@/app/(addtocartfun)/Redux/features/searchSlice'


export const store = configureStore({
  reducer: {
    product:ProductSlice,
    cart:CartSlice,
    search:SearchSlice,
    
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
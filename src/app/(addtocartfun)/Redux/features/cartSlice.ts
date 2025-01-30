import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store' 
import { Cart } from '@/app/utils/Types'

const initialState: Cart [] = []

export const CartSlice = createSlice({
  name: 'counter',
  
  initialState,
  reducers: {
  // add to cart funtionality
 addtocart(state,actions){
  let uuid = Math.floor(1000+Math.random()*9000)
  let newobj = {...actions.payload,uuid}
  state.push(newobj)
 },

  // delete from cart
  delItem(state,{payload}){
    return  state.filter((val)=> val.uuid !== payload)
  },
  
  
  //  addition of item
  addition(state,action){
    let obj = state.find(
      (val:any)=>
        val.id == action.payload.id && 
        val.color == action.payload.color && 
        val.size == action.payload.size 
    );

    if(obj){
      ++obj.qty;
      let newState = state.filter((val)=> val.id !== obj.id);
      state = [...newState,obj];
      return
    }
  },
  
  
   //   subraction of item
   subraction(state,action){
    let obj = state.find(
      (val:any)=>
        val.id == action.payload.id && 
        val.color == action.payload.color && 
        val.size == action.payload.size 
    );
    if(obj !== undefined){
      --obj.qty;
      let newState = state.filter((val)=> val.uuid !== obj.uuid);
      state = [...newState,obj];
      return;
    }
    // end
   }

  },
})

export const { addtocart,delItem,addition,subraction} = CartSlice.actions



export default CartSlice.reducer
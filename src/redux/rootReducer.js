

import { combineReducers } from '@reduxjs/toolkit'
import cartSlice from './cartSlice'
import languageReducer from './lnaguageSlice'
import rerenderSlice from './rerednerSlice'


export const rootReducer = combineReducers({
  cart: cartSlice,
  language : languageReducer,
  rerender : rerenderSlice,
  
})




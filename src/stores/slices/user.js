import { createSlice } from '@reduxjs/toolkit'

import initialState from '../initialState'

export const userSlice = createSlice({
  name: 'user',
  initialState: initialState.user,
  reducers: {
    setUser: (state, action) => {
      return state = action.payload
    },
  }
})

export const {
  setUser
} = userSlice.actions

export const getUser = (state) => state.user

export default userSlice.reducer

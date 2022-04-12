import { createSlice } from '@reduxjs/toolkit';

import { tScreenChangeType, tScreenInitialState } from 'types/screenTypes';

const initialState: tScreenInitialState = {
  type: '',
};

const screenSlice = createSlice({
  name: 'screen',
  initialState,
  reducers: {
    screenChangeType: (state, action: tScreenChangeType) => {
      state.type = action.payload;
    },
  },
});
export const { reducer: screenReducer, actions: screenActions } = screenSlice;

import {createSlice} from '@reduxjs/toolkit';
import {DrawerLayout} from 'react-native-gesture-handler';

const initialState: {drawerRef: null | DrawerLayout} = {
  drawerRef: null,
};

const drawerSlice = createSlice({
  name: 'drawer',
  initialState,
  reducers: {
    setDrawerRef(state, action) {
      state.drawerRef = action.payload;
    },
  },
});

export default drawerSlice.reducer;
export const {setDrawerRef} = drawerSlice.actions;

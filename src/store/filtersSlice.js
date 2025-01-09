import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sizes: [],
  choosenSizes: [],
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setUniqueSizes(state, action) {
      state.sizes = action.payload;
    },
    toggleSize(state, action) {
      const size = action.payload;
      if (state.choosenSizes.includes(size)) {
        state.choosenSizes = state.choosenSizes.filter((s) => s !== size);
      } else {
        state.choosenSizes.push(size);
      }
    },
  },
});

export const { setUniqueSizes, toggleSize } = filtersSlice.actions;
export default filtersSlice.reducer;

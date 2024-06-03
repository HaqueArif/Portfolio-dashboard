import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type TCreateProject = {
  _id: string;
  id: string;
  image: string;
  name: string;
  live: string;
  server: string;
  client: string;
  category: string;
  rating: string;
};
type TInitialState = {
  createProject: TCreateProject[];
};
const initialState: TInitialState = {
  createProject: [],
};
const projectSlice = createSlice({
  name: "createProject",
  initialState,
  reducers: {
    createProject: (state, action: PayloadAction<TCreateProject>) => {
      state.createProject.push({ ...action.payload });
    },
  },
});

export const { createProject } = projectSlice.actions;
export default projectSlice.reducer;

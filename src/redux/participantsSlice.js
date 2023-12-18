import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  participantList: null,
};

export const participantsSlice = createSlice({
  name: "participants",
  initialState,
});

export default participantsSlice.reducer;

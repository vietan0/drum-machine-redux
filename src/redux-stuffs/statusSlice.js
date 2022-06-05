import {createSlice} from "@reduxjs/toolkit";

const statusSlice = createSlice({
	name: "status",
	initialState: {value: "Play something!"},
	reducers: {
		updateStatus(state, action) {
			state.value = action.payload;
		},
	},
});

export const {updateStatus} = statusSlice.actions;
export default statusSlice.reducer;

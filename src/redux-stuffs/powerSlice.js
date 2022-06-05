import {createSlice} from "@reduxjs/toolkit";

const powerSlice = createSlice({
	name: "power",
	initialState: {value: false},
	reducers: {
		switchPower(state) {
			state.value = !state.value;
		},
	},
});

export const {switchPower} = powerSlice.actions;
export default powerSlice.reducer;

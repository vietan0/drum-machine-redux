import {configureStore} from "@reduxjs/toolkit";
import statusReducer from "./statusSlice";
import activeKitReducer from "./activeKitSlice";
import powerReducer from "./powerSlice";

export default configureStore({
	reducer: {
		status: statusReducer,
		activeKit: activeKitReducer,
		power: powerReducer,
	},
});

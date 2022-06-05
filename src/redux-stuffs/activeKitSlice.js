import {createSlice} from "@reduxjs/toolkit";

import VinylK1_ClHat01 from "../audio/vinyl/CYCdh_VinylK1-ClHat01.wav";
import VinylK1_ClHat02 from "../audio/vinyl/CYCdh_VinylK1-ClHat02.wav";
import VinylK1_Kick01 from "../audio/vinyl/CYCdh_VinylK1-Kick01.wav";
import VinylK1_Kick02 from "../audio/vinyl/CYCdh_VinylK1-Kick02.wav";
import VinylK1_Kick03 from "../audio/vinyl/CYCdh_VinylK1-Kick03.wav";
import VinylK1_OpHat from "../audio/vinyl/CYCdh_VinylK1-OpHat.wav";
import VinylK1_Shkr01 from "../audio/vinyl/CYCdh_VinylK1-Shkr01.wav";
import VinylK1_Snr01 from "../audio/vinyl/CYCdh_VinylK1-Snr01.wav";
import VinylK1_Tamb from "../audio/vinyl/CYCdh_VinylK1-Tamb.wav";

import Kurz03_ClHat01 from "../audio/kurzweil/CYCdh_Kurz03-ClHat01.wav";
import Kurz03_ClHat02 from "../audio/kurzweil/CYCdh_Kurz03-ClHat02.wav";
import Kurz03_Crash01 from "../audio/kurzweil/CYCdh_Kurz03-Crash01.wav";
import Kurz03_Crash02 from "../audio/kurzweil/CYCdh_Kurz03-Crash02.wav";
import Kurz03_HfHat from "../audio/kurzweil/CYCdh_Kurz03-HfHat.wav";
import Kurz03_OpHat from "../audio/kurzweil/CYCdh_Kurz03-OpHat.wav";
import Kurz03_PdHat from "../audio/kurzweil/CYCdh_Kurz03-PdHat.wav";
import Kurz03_Ride from "../audio/kurzweil/CYCdh_Kurz03-Ride.wav";
import Kurz03_SdSt from "../audio/kurzweil/CYCdh_Kurz03-SdSt.wav";

console.log(Kurz03_SdSt);

let kurzweil = [
	Kurz03_ClHat01,
	Kurz03_ClHat02,
	Kurz03_Crash01,
	Kurz03_Crash02,
	Kurz03_HfHat,
	Kurz03_OpHat,
	Kurz03_PdHat,
	Kurz03_Ride,
	Kurz03_SdSt,
];
let vinyl = [
	VinylK1_ClHat01,
	VinylK1_ClHat02,
	VinylK1_Kick01,
	VinylK1_Kick02,
	VinylK1_Kick03,
	VinylK1_OpHat,
	VinylK1_Shkr01,
	VinylK1_Snr01,
	VinylK1_Tamb,
];

const activeKitSlice = createSlice({
	name: "activeKit",
	initialState: {value: vinyl},
	reducers: {
		switchKit(state, action) {
			state.value = action.payload ? kurzweil : vinyl;
		},
	},
});

export const {switchKit} = activeKitSlice.actions;
export default activeKitSlice.reducer;

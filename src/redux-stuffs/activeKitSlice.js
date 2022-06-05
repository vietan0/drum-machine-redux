import {createSlice} from "@reduxjs/toolkit";

let kurzweil = [
	"src/audio/kurzweil/CYCdh_Kurz03-ClHat01.wav",
	"src/audio/kurzweil/CYCdh_Kurz03-ClHat02.wav",
	"src/audio/kurzweil/CYCdh_Kurz03-Crash01.wav",
	"src/audio/kurzweil/CYCdh_Kurz03-Crash02.wav",
	"src/audio/kurzweil/CYCdh_Kurz03-HfHat.wav",
	"src/audio/kurzweil/CYCdh_Kurz03-OpHat.wav",
	"src/audio/kurzweil/CYCdh_Kurz03-PdHat.wav",
	"src/audio/kurzweil/CYCdh_Kurz03-Ride.wav",
	"src/audio/kurzweil/CYCdh_Kurz03-SdSt.wav",
];
let vinyl = [
	"src/audio/vinyl/CYCdh_VinylK1-ClHat01.wav",
	"src/audio/vinyl/CYCdh_VinylK1-ClHat02.wav",
	"src/audio/vinyl/CYCdh_VinylK1-Kick01.wav",
	"src/audio/vinyl/CYCdh_VinylK1-Kick02.wav",
	"src/audio/vinyl/CYCdh_VinylK1-Kick03.wav",
	"src/audio/vinyl/CYCdh_VinylK1-OpHat.wav",
	"src/audio/vinyl/CYCdh_VinylK1-Shkr01.wav",
	"src/audio/vinyl/CYCdh_VinylK1-Snr01.wav",
	"src/audio/vinyl/CYCdh_VinylK1-Tamb.wav",
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

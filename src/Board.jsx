import {useEffect, useState} from "react";
import {nanoid} from "@reduxjs/toolkit";

import {useSelector, useDispatch} from "react-redux";
import {updateStatus} from "./redux-stuffs/statusSlice";

const keystrokes = ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"];
function peekStatus() {
	const status = document.getElementById("status");
	status.classList.remove("hidden");
	setTimeout(() => status.classList.add("hidden"), 700);
}

export default function Board() {
	const activeKit = useSelector(state => state.activeKit.value); // retrieve from Redux
	let audioInfo = activeKit.map((srcStr, i) => ({
		src: srcStr,
		description: srcStr.match(/(?<=-)\w+(?=.wav)/)[0],
		keystroke: keystrokes[i],
	}));

	const power = useSelector(state => state.power.value);
	const dispatch = useDispatch();

	function handleClick(e) {
		// play audio
		const audio = e.target.firstElementChild;
		audio.currentTime = 0;
		audio.play();

		// dispatch button's id to Redux store
		dispatch(updateStatus(e.target.id));
		peekStatus();
	}

	function handleKeyDown(e) {
		if (keystrokes.some(ltr => ltr === e.key.toUpperCase())) {
			const audio = document.getElementById(e.key.toUpperCase());
			const button = audio.parentElement;
			// simulate button's active state
			button.classList.add("active");
		}
	}

	function handleKeyUp(e) {
		if (keystrokes.some(ltr => ltr === e.key.toUpperCase())) {
			// play audio
			const audio = document.getElementById(e.key.toUpperCase());
			audio.currentTime = 0;
			audio.play();

			// dispatch button's id to Redux store
			const button = audio.parentElement;
			dispatch(updateStatus(button.id));

			// simulate button's active state
			button.classList.remove("active");
			peekStatus();
		}
	}

	useEffect(() => {
		if (power) {
			document.addEventListener("keydown", handleKeyDown);
			document.addEventListener("keyup", handleKeyUp);
		} else {
			document.removeEventListener("keydown", handleKeyDown);
			document.removeEventListener("keyup", handleKeyUp);
		}
	});

	const buttons = audioInfo.map(obj => (
		<button
			onClick={handleClick}
			className="drum-pad btn btn-outline-primary"
			id={obj.description}
			key={nanoid()}
			disabled={!power}
		>
			{obj.keystroke}
			<audio src={obj.src} controls id={obj.keystroke} className="clip"></audio>
		</button>
	));

	// console.count("<Board /> rendered");
	return (
		<>
			<section id="board">{buttons}</section>
		</>
	);
}

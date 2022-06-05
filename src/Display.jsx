import {useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {switchPower} from "./redux-stuffs/powerSlice";
import {switchKit} from "./redux-stuffs/activeKitSlice";

export default function Display() {
	const status = useSelector(state => state.status.value);
	const [volume, setVolume] = useState(1); // just to display
	function handleChange(e) {
		setVolume(Number(e.target.value));
		const audios = document.getElementsByClassName("clip");
		for (let a of audios) {
			a.volume = Number(e.target.value);
		}
	}

	const power = useSelector(state => state.power.value);
	const dispatch = useDispatch();
	// console.count("<Display /> rendered")
	return (
		<section id="display">
			<h3 className="d-flex gap-3 align-items-center justify-content-between">
				Power
				<div className="form-check form-switch d-inline-block">
					<input
						className="form-check-input"
						type="checkbox"
						role="switch"
						id="switchPowerButton"
						onChange={e => {
							dispatch(switchPower(e.target.checked));
							const status = document.getElementById("status");
							if (e.target.checked) {
								status.classList.remove("hidden");
							} else {
								status.classList.add("hidden");
							}
						}}
					/>
				</div>
			</h3>
			<h3 className="d-flex gap-3 align-items-center justify-content-center">
				<code className="fs-5 hidden" id="status">
					<b>{status}</b>
				</code>
			</h3>

			<h3 className="d-flex gap-3 align-items-center justify-content-between">
				<input
					onChange={handleChange}
					type="range"
					className="form-range"
					min="0"
					max="1"
					step="0.01"
					disabled={!power}
				/>
				<code>{Math.round(volume * 100)}</code>
			</h3>

			<h3 className="d-flex gap-3 align-items-center justify-content-between">
				<code>Vinyl</code>
				<div className="form-check form-switch d-inline-block">
					<input
						className="form-check-input"
						type="checkbox"
						role="switch"
						id="switchKitButton"
						onChange={e => dispatch(switchKit(e.target.checked))}
						disabled={!power}
					/>
				</div>
				<code>Kurzweil</code>
			</h3>
		</section>
	);
}

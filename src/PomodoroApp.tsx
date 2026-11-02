"use client";

import PomodoroTimer from "./components/PomodoroTimer";

export default function PomodoroApp() {
	return (
		<>
			{/*
			 * Hidden h1 for SEO. The `sr-only` utility comes from the host
			 * application's Tailwind stylesheet, which a standalone build does
			 * not load, so the same effect is expressed inline here.
			 */}
			<h1
				className="sr-only"
				style={{
					position: "absolute",
					width: "1px",
					height: "1px",
					padding: 0,
					margin: "-1px",
					overflow: "hidden",
					clip: "rect(0, 0, 0, 0)",
					whiteSpace: "nowrap",
					borderWidth: 0,
				}}
			>
				ポモドーロタイマー - Pomodoro Timer - v0.1.2-verify
			</h1>
			{/*
			 * `relative w-full h-screen overflow-hidden` again depends on the
			 * host's Tailwind stylesheet, so the same layout is expressed
			 * inline to keep the standalone build full height.
			 */}
			<div
				className="relative w-full h-screen overflow-hidden"
				style={{
					position: "relative",
					width: "100%",
					height: "100vh",
					overflow: "hidden",
				}}
			>
				<PomodoroTimer />
			</div>
		</>
	);
}

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import PomodoroApp from "./PomodoroApp";
import "./styles.css";

const container = document.getElementById("root");

if (!container) {
	throw new Error("Pomodoro: missing #root element");
}

createRoot(container).render(
	<StrictMode>
		<PomodoroApp />
	</StrictMode>,
);

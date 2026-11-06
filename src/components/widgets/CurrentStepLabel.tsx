"use client";

export const CurrentStepLabel = ({
	label,
	theme,
}: {
	label: string;
	theme: string;
}) => {
	return (
		<div
			className={`fixed top-8 left-1/2 -translate-x-1/2 z-30 text-sm tracking-[0.4em] uppercase font-bold opacity-30 pointer-events-none
 ${theme === "dark" ? "text-white" : "text-black"}
 `}
		>
			{label}
		</div>
	);
};

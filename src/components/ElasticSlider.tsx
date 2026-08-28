"use client";

import * as React from "react";

interface ElasticSliderProps {
	value: number;
	min: number;
	max: number;
	step?: number;
	onChange: (value: number) => void;
	accentColor?: string;
	label?: React.ReactNode;
	valueLabel?: React.ReactNode;
	ariaLabel?: string;
}

export function ElasticSlider({
	value,
	min,
	max,
	step = 1,
	onChange,
	accentColor,
	label,
	valueLabel,
	ariaLabel,
}: ElasticSliderProps) {
	return (
		<div className="space-y-2">
			{(label || valueLabel) && (
				<div className="flex items-center justify-between text-xs ">
					{label && <div>{label}</div>}
					{valueLabel && <div className="">{valueLabel}</div>}
				</div>
			)}
			<input
				type="range"
				value={value}
				min={min}
				max={max}
				step={step}
				onChange={(e) => onChange(Number(e.target.value))}
				className="w-full"
				aria-label={ariaLabel}
				style={accentColor ? { accentColor } : undefined}
			/>
		</div>
	);
}

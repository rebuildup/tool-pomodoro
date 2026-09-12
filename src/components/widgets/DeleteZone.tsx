"use client";

import { Trash2 } from "lucide-react";

export const DeleteZone = () => {
	return (
		<div className="delete-zone fixed bottom-24 left-1/2 -translate-x-1/2 z-50 pointer-events-none">
			<div
				id="delete-zone-indicator"
				className="w-64 h-24 rounded-2xl border-4 border-dashed flex items-center justify-center transition-all duration-200 bg-transparent border-gray-400/30"
			>
				<Trash2
					id="delete-zone-icon"
					size={32}
					className="text-gray-600 opacity-30 transition-all duration-200 scale-100"
				/>
			</div>
		</div>
	);
};

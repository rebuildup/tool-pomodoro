"use client";

import { Pause, RotateCcw, SkipForward, X } from "lucide-react";

export const StopDialog = ({
	theme,
	onClose,
	onReset,
	onStop,
	onSkip,
}: {
	theme: string;
	onClose: () => void;
	onReset: () => void;
	onStop: () => void;
	onSkip: () => void;
}) => {
	return (
		<div className="fixed inset-0 z-100 flex items-center justify-center pointer-events-auto">
			{/* Overlay */}
			<div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
			{/* Dialog */}
			<div
				className={`relative z-10 rounded-2xl border backdrop-blur-xl shadow-2xl p-6 max-w-md w-full mx-4 ${
					theme === "dark" ? "bg-[#1a1a1a]/95 border-white/10" : "bg-white/95 border-black/5"
				}`}
			>
				<button
					onClick={onClose}
					className={`absolute top-4 right-4 p-2 rounded-full transition-colors ${theme === "dark" ? "hover:bg-white/10 text-gray-400 hover:text-white" : "hover:bg-black/5 text-gray-500 hover:text-black"}`}
					aria-label="ダイアログを閉じる"
				>
					<X size={20} />
				</button>

				<h3 className={`text-xl font-bold mb-4 ${theme === "dark" ? "text-white" : "text-black"}`}>
					タイマーを停止しますか？
				</h3>
				<div className="grid grid-cols-3 gap-3">
					<button
						onClick={onReset}
						className="px-2 py-4 rounded-xl font-medium transition-all flex flex-col items-center justify-center gap-2 bg-gray-200 text-gray-800 hover:bg-gray-300"
					>
						<RotateCcw size={24} />
						<span className="text-xs">リセット</span>
					</button>
					<button
						onClick={onStop}
						className="px-2 py-4 rounded-xl font-medium transition-all flex flex-col items-center justify-center gap-2 bg-gray-200 text-gray-800 hover:bg-gray-300"
					>
						<Pause size={24} />
						<span className="text-xs">一時停止</span>
					</button>
					<button
						onClick={onSkip}
						className="px-2 py-4 rounded-xl font-medium transition-all flex flex-col items-center justify-center gap-2 bg-gray-200 text-gray-800 hover:bg-gray-300"
					>
						<SkipForward size={24} />
						<span className="text-xs">スキップ</span>
					</button>
				</div>
			</div>
		</div>
	);
};

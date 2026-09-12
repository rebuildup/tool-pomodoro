"use client";

import {
	Pause,
	Play,
	Save,
	SkipBack,
	SkipForward,
	Volume2,
	VolumeX,
} from "lucide-react";
import React from "react";
import { ElasticSlider } from "../ElasticSlider";
import type { YouTubePlaybackState } from "./types";

interface YouTubePlayerControlsProps {
	theme: "light" | "dark";
	isMinimized: boolean;
	isPlaylist: boolean;
	playbackState: YouTubePlaybackState;
	isMuted: boolean;
	volume: number;
	inputUrl: string;
	showSettings: boolean;
	onPrevious: () => void;
	onTogglePlay: () => void;
	onNext: () => void;
	onToggleMute: () => void;
	onVolumeChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	onInputUrlChange: (url: string) => void;
	onSaveUrl: () => void;
}

export function YouTubePlayerControls({
	theme,
	isMinimized,
	isPlaylist,
	playbackState,
	isMuted,
	volume,
	inputUrl,
	showSettings,
	onPrevious,
	onTogglePlay,
	onNext,
	onToggleMute,
	onVolumeChange,
	onInputUrlChange,
	onSaveUrl,
}: YouTubePlayerControlsProps) {
	if (isMinimized) return null;

	return (
		<div className="p-3 space-y-3 bg-transparent">
			{/* Playback Controls */}
			<div className="flex items-center justify-between">
				<div className="flex items-center gap-2">
					{isPlaylist && (
						<button
							onClick={onPrevious}
							className={`p-2 rounded-full ${theme === "dark" ? "hover:bg-gray-800 text-gray-300" : "hover:bg-gray-200 text-gray-700"}`}
							aria-label="前の動画"
						>
							<SkipBack size={16} fill="currentColor" />
						</button>
					)}
					<button
						onClick={onTogglePlay}
						className={`p-2 rounded-full ${theme === "dark" ? "bg-white text-black hover:bg-gray-200" : "bg-black text-white hover:bg-gray-800"}`}
						aria-label={playbackState === "playing" ? "一時停止" : "再生"}
					>
						{playbackState === "playing" ? (
							<Pause size={16} fill="currentColor" />
						) : (
							<Play size={16} fill="currentColor" />
						)}
					</button>
					{isPlaylist && (
						<button
							onClick={onNext}
							className={`p-2 rounded-full ${theme === "dark" ? "hover:bg-gray-800 text-gray-300" : "hover:bg-gray-200 text-gray-700"}`}
							aria-label="次の動画"
						>
							<SkipForward size={16} fill="currentColor" />
						</button>
					)}
				</div>

				<div className="flex items-center gap-2 flex-1 mx-4">
					<button
						onClick={onToggleMute}
						className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
						aria-label={isMuted || volume === 0 ? "ミュート解除" : "ミュート"}
					>
						{isMuted || volume === 0 ? (
							<VolumeX size={16} />
						) : (
							<Volume2 size={16} />
						)}
					</button>
					<div className="flex-1">
						<ElasticSlider
							min={0}
							max={100}
							value={volume}
							onChange={(v) =>
								onVolumeChange({
									target: { value: String(v) },
								} as React.ChangeEvent<HTMLInputElement>)
							}
							accentColor="#3b82f6"
							ariaLabel="YouTube volume"
						/>
					</div>
				</div>
			</div>

			{/* Settings / URL Input */}
			{showSettings && (
				<div className={`pt-3 border-t space-y-3 ${theme === "dark" ? "border-white/10" : "border-black/5"}`}>
					<div className="flex gap-2">
						<input
							type="text"
							value={inputUrl}
							onChange={(e) => onInputUrlChange(e.target.value)}
							placeholder="YouTube URL..."
							className={`flex-1 px-2 py-1.5 text-xs rounded border bg-transparent outline-none ${theme === "dark" ? "border-white/20 focus:border-white/50" : "border-black/20 focus:border-black/50"}`}
						/>
						<button
							onClick={onSaveUrl}
							className={`p-1.5 rounded border ${theme === "dark" ? "border-white/20 hover:bg-white/10" : "border-black/20 hover:bg-black/5"}`}
							aria-label="URLを保存"
						>
							<Save size={14} />
						</button>
					</div>
				</div>
			)}
		</div>
	);
}

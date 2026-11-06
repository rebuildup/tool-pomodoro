"use client";

import {
	BarChart2,
	Image as ImageIcon,
	Moon,
	Music,
	StickyNote,
	Sun,
	Timer,
} from "lucide-react";
import type { DockVisibilityKey } from "./types";

export const DockTab = ({
	theme,
	dockVisibility,
	onUpdateDockVisibility,
}: {
	theme: string;
	dockVisibility: Record<DockVisibilityKey, boolean>;
	onUpdateDockVisibility: (key: DockVisibilityKey, visible: boolean) => void;
}) => {
	const dockItems: Array<{
		key: DockVisibilityKey;
		icon: React.ComponentType<{ size?: number; className?: string }>;
		name: string;
	}> = [
		{ key: "note", icon: StickyNote, name: "メモ" },
		{ key: "image", icon: ImageIcon, name: "画像" },
		{ key: "music", icon: Music, name: "YouTube" },
		{ key: "timer", icon: Timer, name: "タイマー" },
		{ key: "stats", icon: BarChart2, name: "統計" },
		{
			key: "theme",
			icon: theme === "dark" ? Sun : Moon,
			name: "テーマ",
		},
	];

	return (
		<div className="space-y-6">
			<h3 className={`text-lg font-semibold ${theme === "dark" ? "text-white" : "text-black"}`}>
				ドックとウィジェット設定
			</h3>

			<div className="space-y-2">
				<p className={`text-sm ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
					ドックに表示する項目を選択します.
				</p>
				{dockItems.map(({ key, icon: Icon, name }) => (
					<label
						key={key}
						className={`flex items-center gap-2 p-2 rounded border cursor-pointer transition-colors ${
							theme === "dark" ? "bg-white/5 border-white/10" : "bg-gray-50 border-gray-200"
						} ${theme === "dark" ? "hover:bg-white/10" : "hover:bg-gray-100"}`}
					>
						<Icon
							size={16}
							className={`shrink-0 ${theme === "dark" ? "text-white" : "text-black"} ${
								dockVisibility[key] ? "opacity-100" : "opacity-50"
							}`}
						/>
						<span className={`flex-1 text-sm ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
							{name}
						</span>
						<input
							type="checkbox"
							checked={dockVisibility[key]}
							onChange={(e) => onUpdateDockVisibility(key, e.target.checked)}
							className="w-4 h-4 rounded shrink-0 cursor-pointer"
						/>
					</label>
				))}
			</div>
		</div>
	);
};

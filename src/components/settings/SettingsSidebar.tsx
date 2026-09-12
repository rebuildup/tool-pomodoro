"use client";

import { X } from "lucide-react";
import type { SettingsTab } from "./types";

const TABS: ReadonlyArray<{ key: SettingsTab; label: string }> = [
	{ key: "workflow", label: "ワークフロー" },
	{ key: "dock", label: "ドック" },
	{ key: "widgets", label: "ウィジェット" },
	{ key: "youtube", label: "YouTube" },
];

export const SettingsSidebar = ({
	theme,
	settingsTab,
	onTabChange,
	onClose,
}: {
	theme: string;
	settingsTab: SettingsTab;
	onTabChange: (tab: SettingsTab) => void;
	onClose: () => void;
}) => {
	return (
		<div
			className={`md:w-64 border-b md:border-b-0 md:border-r flex flex-row md:flex-col shrink-0 ${
				theme === "dark" ? "border-white/10" : "border-black/5"
			}`}
		>
			<div
				className={`flex items-center justify-between p-4 border-b md:border-b shrink-0 ${
					theme === "dark" ? "border-white/10" : "border-black/5"
				}`}
			>
				<h2 className={`text-xl font-bold ${theme === "dark" ? "text-white" : "text-black"}`}>
					設定
				</h2>
				<button
					onClick={onClose}
					className={`p-2 rounded-lg transition-colors ${theme === "dark" ? "hover:bg-white/10 text-gray-300" : "hover:bg-gray-100 text-gray-700"}`}
					aria-label="設定パネルを閉じる"
				>
					<X size={20} />
				</button>
			</div>
			<div className="flex flex-row md:flex-col flex-1 overflow-x-auto md:overflow-y-auto p-2 min-h-0 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:bg-gray-500/20 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:hover:bg-gray-500/30 [&::-webkit-scrollbar-track]:bg-transparent">
				{TABS.map((tab) => (
					<button
						key={tab.key}
						onClick={() => onTabChange(tab.key)}
						className={`whitespace-nowrap text-left px-4 py-3 rounded-lg transition-colors md:w-full ${settingsTab === tab.key ? (theme === "dark" ? "bg-white/10 text-white" : "bg-gray-100 text-black") : theme === "dark" ? "hover:bg-white/5 text-gray-300" : "hover:bg-gray-50 text-gray-700"} ${tab.key === "workflow" ? "md:mb-1" : ""}`}
					>
						{tab.label}
					</button>
				))}
			</div>
		</div>
	);
};

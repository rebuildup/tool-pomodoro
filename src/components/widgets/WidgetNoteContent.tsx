"use client";

import { useRef, useState } from "react";
import { MarkdownViewer } from "../MarkdownViewer";

export type WidgetNoteContentProps = {
	content: string;
	theme: string;
	id: number;
	updateWidget: (id: number, data: { content?: string }) => void;
};

export function WidgetNoteContent({
	content,
	theme,
	id,
	updateWidget,
}: WidgetNoteContentProps) {
	const [manuallyEditing, setManuallyEditing] = useState(false);
	const textareaRef = useRef<HTMLTextAreaElement>(null);

	const isEditing = manuallyEditing || !content;

	if (isEditing) {
		return (
			<label className="block w-full h-full">
				<span className="sr-only">ノート本文</span>
				<textarea
					ref={textareaRef}
					className={`w-full h-full bg-transparent resize-none outline-none font-mono text-sm select-text ${theme === "dark" ? "text-gray-200" : "text-gray-900"} [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:bg-gray-500/20 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:hover:bg-gray-500/30 [&::-webkit-scrollbar-track]:bg-transparent`}
					aria-label="ノート本文"
					value={content || ""}
					onChange={(e) => updateWidget(id, { content: e.target.value })}
					onBlur={() => setManuallyEditing(false)}
					autoFocus={!content}
				/>
			</label>
		);
	}

	return (
		<button
			type="button"
			className="h-full w-full cursor-text select-text text-left bg-transparent border-0 p-0"
			onClick={() => setManuallyEditing(true)}
			onKeyDown={(e) => {
				if (e.key === "Enter" || e.key === " ") {
					e.preventDefault();
					setManuallyEditing(true);
				}
			}}
			aria-label="ノートを編集"
		>
			<MarkdownViewer content={content} theme={theme} />
		</button>
	);
}

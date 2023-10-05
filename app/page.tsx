"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useChat } from "ai/react";
import { PaperPlaneIcon } from "@radix-ui/react-icons";

export default function Chat() {
	const { messages, input, handleInputChange, handleSubmit } = useChat();

	return (
		<div className="flex flex-col w-full max-w-2xl py-12 mx-auto border border-black h-full p-4">
			{messages.length > 0
				? messages.map((m) => (
						<div key={m.id} className="whitespace-pre-wrap  text-slate-gray">
							{m.role === "user" ? "User: " : "IA: "}
							{m.content}
						</div>
				  ))
				: null}

			<form onSubmit={handleSubmit}>
				<div className="fixed bottom-10 flex gap-2 w-full max-w-2xl">
					<Input
						value={input}
						placeholder="Say something..."
						onChange={handleInputChange}
					/>
					<Button type="submit" size="icon">
						<PaperPlaneIcon />
					</Button>
				</div>
			</form>
		</div>
	);
}

"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useChat } from "ai/react";
import { PaperPlaneIcon } from "@radix-ui/react-icons";
import { useRef, useEffect } from "react";

interface Message {
	id: string;
	role: string;
	content: string;
}

interface Props {
	messages: Message[];
	handleSubmit: () => void;
	handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	input: string;
}
export default function Chat() {
	const { messages, input, handleInputChange, handleSubmit } = useChat();

	const chatContainerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		scrollToBottom();
	}, [messages]);

	const scrollToBottom = () => {
		if (chatContainerRef.current) {
			chatContainerRef.current.scrollTop =
				chatContainerRef.current.scrollHeight;
		}
	};
	return (
		<div className="relative w-full max-w-4xl py-6 mx-auto p-4">
			<h1 className="font-semibold font-serif text-3xl leding-normal text-center bg-gradient-to-l from-blue-200 via-purple-400 to-pink-300 text-transparent w-40  bg-clip-text mx-auto shadow-lg">
				MaikeGPT
			</h1>
			<div
				ref={chatContainerRef}
				className="border-x min-h-[87vh] max-h-[87vh] rounded-lg p-5 overflow-y-auto">
				{messages.length > 0
					? messages.map((m) => (
							<p
								key={m.id}
								className={`whitespace-pre-wrap p-4 mb-4 rounded-xl
                            ${
															m.role === "user"
																? "text-left  bg-slate-900 "
																: "text-left bg-slate-800"
														}
                `}>
								{m.content}
							</p>
					  ))
					: null}
			</div>

			<form onSubmit={handleSubmit}>
				<div className="absolute inset-x-0 bottom-0 mx-auto px-6 flex gap-1.5 w-full max-w-3xl">
					<Input
						value={input}
						placeholder="Send a message"
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

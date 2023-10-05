"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useChat } from "ai/react";
import { PaperPlaneIcon } from "@radix-ui/react-icons";
import { useRef, useEffect } from "react";

export default function Chat() {
	const { messages, input, handleInputChange, handleSubmit } = useChat();

	return (
		<div className="relative w-full max-w-4xl py-6 mx-auto p-4">
			<h1 className="font-semibold dark:text-slate-400 text-slate-600 text-xl leadind-normal p-2 text-center">
				MaikeGPT
			</h1>
			<div className="border-x min-h-[90vh] rounded-lg p-5">
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
				<div className="absolute inset-x-0 bottom-0 mx-14 flex gap-5  w-full max-w-3xl">
					<Input
						value={input}
						placeholder="What do you want to talk about..."
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

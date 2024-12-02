"use client";

import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Bot, Send, User, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Separator } from "./separator";

export function AIChatbot() {
	const [isOpen, setIsOpen] = useState(false);
	const [messages, setMessages] = useState<
		{ role: "user" | "bot"; content: string }[]
	>([]);
	const [input, setInput] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const messagesEndRef = useRef<HTMLDivElement>(null);
	const inputRef = useRef<HTMLInputElement>(null);

	const toggleChat = () => {
		setIsOpen(!isOpen);
		if (!isOpen) {
			setTimeout(() => inputRef.current?.focus(), 100);
		}
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		if (input.trim() && !isLoading) {
			const userMessage = input.trim();
			setInput("");
			setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
			setIsLoading(true);

			// Simulate bot response
			try {
				await new Promise((resolve) => setTimeout(resolve, 1000));
				setMessages((prev) => [
					...prev,
					{ role: "bot", content: `You said: ${userMessage}` },
				]);
			} catch (error) {
				console.error("Error in bot response:", error);
				setMessages((prev) => [
					...prev,
					{
						role: "bot",
						content: "Sorry, I encountered an error. Please try again.",
					},
				]);
			} finally {
				setIsLoading(false);
			}
		}
	};

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
	}, [messages]);

	return (
		<div className="fixed bottom-4 right-4 z-50">
			{isOpen ? (
				<Card className="w-80 sm:w-96 h-[32rem] flex flex-col shadow-xl">
					<CardHeader className="flex flex-col space-y-0 pb-2">
						<div className="flex flex-row items-center justify-between space-y-0 pb-2">
							<div className="flex items-center space-x-2">
								<Bot size={20} />
								<h2 className="text-sm font-semibold">AI Chatbot</h2>
							</div>
							<Button
								variant="ghost"
								size="icon"
								onClick={toggleChat}
								className="text-muted-foreground"
							>
								<X className="h-4 w-4" />
							</Button>
						</div>
						<Separator />
					</CardHeader>
					<CardContent>
						<ScrollArea className="h-96 w-full pr-4 text-xs">
							{messages.map((msg, index) => (
								<div
									key={msg.content + msg.role}
									className={`mb-3 p-3 rounded-full flex flex-inline gap-x-2 ${
										msg.role === "user"
											? "bg-primary text-primary-foreground ml-auto"
											: "bg-muted"
									} max-w-[80%] ${msg.role === "user" ? "ml-auto" : "mr-auto"}`}
								>
									<span>
										{msg.role === "user" ? (
											<User className="h-4 w-4" />
										) : (
											<Bot className="h-4 w-4" />
										)}
									</span>
									{msg.content}
								</div>
							))}
							{isLoading && (
								<div className="flex justify-start mb-3">
									<div className="bg-muted p-3 rounded-lg">
										<div className="typing-indicator">
											<span />
											<span />
											<span />
										</div>
									</div>
								</div>
							)}
							<div ref={messagesEndRef} />
						</ScrollArea>
						<form
							onSubmit={handleSubmit}
							className="flex w-full items-center space-x-2"
						>
							<Input
								type="text"
								placeholder="Type your message..."
								value={input}
								onChange={(e) => setInput(e.target.value)}
								onKeyDown={(e) => {
									if (e.key === "Enter" && !e.shiftKey) {
										e.preventDefault();
										handleSubmit(e);
									}
								}}
								ref={inputRef}
								disabled={isLoading}
								className="flex-1"
							/>
							<Button
								type="submit"
								size="icon"
								disabled={isLoading || !input.trim()}
							>
								<Send className="h-4 w-4" />
								<span className="sr-only">Send message</span>
							</Button>
						</form>
					</CardContent>
				</Card>
			) : (
				<Button
					onClick={toggleChat}
					size="icon"
					className="rounded-full h-12 w-12 shadow-lg"
				>
					<Bot className="h-6 w-6" />
					<span className="sr-only">Open AI Chatbot</span>
				</Button>
			)}
		</div>
	);
}

"use client";

import { useState } from "react";

const validateEmail = (email: string): boolean => {
	return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

interface SubscriptionResponse {
	success: boolean;
	message: string;
	id?: string;
}

export default function Newsletter() {
	const [email, setEmail] = useState("");
	const [name, setName] = useState("");
	const [status, setStatus] = useState<
		"idle" | "loading" | "success" | "error"
	>("idle");
	const [message, setMessage] = useState("");

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		if (!email) {
			setStatus("error");
			setMessage("Please enter your email address");
			return;
		}

		if (!validateEmail(email)) {
			setStatus("error");
			setMessage("Please enter a valid email address");
			return;
		}

		setStatus("loading");
		setMessage("");

		try {
			const response = await fetch("/api/newsletter", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ email, name, source: "newsletter-form" }),
			});

			const result = await response.json();

			if (!response.ok) {
				throw new Error(result.message || "Failed to subscribe");
			}

			setStatus("success");
			setMessage(result.message || "Successfully subscribed!");
			setEmail("");
			setName("");

			// Reset success message after 5 seconds
			setTimeout(() => {
				setStatus("idle");
			}, 5000);
		} catch (error) {
			setStatus("error");
			const errorMessage =
				error instanceof Error
					? error.message
					: "Failed to subscribe. Please try again.";
			setMessage(errorMessage);
		}
	};

	return (
		<div className="w-full max-w-md mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
			<h3 className="text-lg font-medium mb-4 text-gray-900 dark:text-white">
				Subscribe to our newsletter
			</h3>

			{status === "success" ? (
				<div className="p-3 mb-4 text-sm text-green-800 bg-green-100 dark:bg-green-900 dark:text-green-200 rounded">
					{message}
				</div>
			) : (
				<form onSubmit={handleSubmit} className="space-y-4">
					<div>
						<label
							htmlFor="email"
							className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
						>
							Email address
						</label>
						<input
							type="email"
							id="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
							placeholder="you@example.com"
							disabled={status === "loading"}
							required
						/>
					</div>

					<div>
						<label
							htmlFor="name"
							className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
						>
							Name (optional)
						</label>
						<input
							type="text"
							id="name"
							value={name}
							onChange={(e) => setName(e.target.value)}
							className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
							placeholder="Your name"
							disabled={status === "loading"}
						/>
					</div>

					<button
						type="submit"
						disabled={status === "loading"}
						className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
							status === "loading" ? "opacity-70 cursor-not-allowed" : ""
						}`}
					>
						{status === "loading" ? "Subscribing..." : "Subscribe"}
					</button>

					{status === "error" && message && (
						<div className="p-3 text-sm text-red-700 bg-red-100 dark:bg-red-900 dark:text-red-200 rounded">
							{message}
						</div>
					)}

					<p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
						We respect your privacy. Unsubscribe at any time.
					</p>
				</form>
			)}
		</div>
	);
}

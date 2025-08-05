import { subscribeToNewsletter } from "@/lib/newsletter";
import { NextResponse } from "next/server";

interface RequestBody {
	email: string;
	name?: string;
	source?: string;
}

export async function POST(request: Request) {
	try {
		const { email, name, source } = (await request.json()) as RequestBody;

		// Basic validation
		if (!email) {
			return NextResponse.json(
				{ success: false, message: "Email is required" },
				{ status: 400 },
			);
		}

		// Subscribe the user
		const result = await subscribeToNewsletter(email, name, source);

		if (result.success) {
			return NextResponse.json(
				{ success: true, message: result.message },
				{ status: 200 },
			);
		}

		return NextResponse.json(
			{ success: false, message: result.message },
			{ status: 400 },
		);
	} catch (error) {
		console.error("API Error:", error);
		const errorMessage =
			error instanceof Error
				? error.message
				: "An error occurred while processing your subscription";

		return NextResponse.json(
			{
				success: false,
				message: errorMessage,
			},
			{ status: 500 },
		);
	}
}

export async function OPTIONS() {
	// Handle preflight requests for CORS
	return new Response(null, {
		status: 204,
		headers: {
			"Access-Control-Allow-Origin": "*",
			"Access-Control-Allow-Methods": "POST, OPTIONS",
			"Access-Control-Allow-Headers": "Content-Type",
		},
	});
}

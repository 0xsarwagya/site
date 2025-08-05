import {
	FirestoreError,
	Timestamp,
	addDoc,
	collection,
	serverTimestamp,
} from "firebase/firestore";
import { db } from "../firebase/config";

export interface SubscriptionData {
	email: string;
	name?: string;
	subscribedAt: ReturnType<typeof serverTimestamp> | Date;
	status: "active" | "unsubscribed" | "pending";
	source?: string;
}

interface SubscriptionResult {
	success: boolean;
	id?: string;
	message: string;
}

export const subscribeToNewsletter = async (
	email: string,
	name?: string,
	source?: string,
): Promise<SubscriptionResult> => {
	try {
		// Basic email validation
		if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
			throw new Error("Please enter a valid email address");
		}

		const subscriptionData: Omit<SubscriptionData, "subscribedAt"> & {
			subscribedAt: ReturnType<typeof serverTimestamp>;
		} = {
			email: email.toLowerCase().trim(),
			name: name?.trim(),
			subscribedAt: serverTimestamp(),
			status: "active",
			source: source || "website",
		};

		// Add to Firestore
		const docRef = await addDoc(
			collection(db, "newsletterSubscriptions"),
			subscriptionData,
		);

		return {
			success: true,
			id: docRef.id,
			message: "Successfully subscribed to the newsletter!",
		};
	} catch (error) {
		console.error("Error subscribing to newsletter:", error);

		// Handle specific Firestore errors
		if (error instanceof FirestoreError) {
			if (error.code === "permission-denied") {
				return {
					success: false,
					message: "Permission denied. Please try again later.",
				};
			}
			return {
				success: false,
				message: `Firebase error: ${error.message}`,
			};
		}

		return {
			success: false,
			message:
				error instanceof Error
					? error.message
					: "Failed to subscribe. Please try again.",
		};
	}
};

export const validateEmail = (email: string): boolean => {
	return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

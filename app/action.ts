import { db } from "@/firebase/config";
import { collection, doc, setDoc } from "firebase/firestore";

export const submitToNewsletter = async (_: unknown, data: FormData) => {
	const email = data.get("email") as string;

	if (!email) {
		return {
			success: false,
			message: "Please enter your email address",
		};
	}

	try {
		const newsletterCol = collection(db, "newsletterSubscriptions");
		const docRef = doc(newsletterCol);
		await setDoc(docRef, {
			email,
		});
	} catch (error) {
		console.error("Error subscribing to newsletter:", error);
		return {
			success: false,
			message: "Failed to subscribe. Please try again.",
		};
	}
};

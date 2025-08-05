"use client";

import { submitToNewsletter } from "@/app/action";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { useActionState, useEffect } from "react";
import { toast } from "sonner";

export const Newsletter: React.FC = () => {
	const [data, action, isLoading] = useActionState(
		submitToNewsletter,
		undefined,
	);

	useEffect(() => {
		if (data?.success) {
			toast.success("Thank you for subscribing!");
		} else {
			toast.error(data?.message);
		}
	}, [data]);

	return (
		<Card className="w-full items-center p-2 rounded-none shadow-none bg-dashed">
			<CardContent className="p-8">
				<div className="grid gap-8 md:grid-cols-[1fr,auto]">
					<div className="space-y-4">
						<h2 className="text-3xl font-bold tracking-tight">
							Get infrequent updates on new projects.
						</h2>
						<p className="text-muted-foreground text-sm md:text-base lg:text-lg font-thin">
							Join 1200+ readers who are interested in my work.
						</p>
					</div>
					<div className="space-y-3">
						<div className="flex gap-2">
							<Input
								type="email"
								placeholder="contact@0xsarwagya.codes"
								className="rounded-full bg-backdrop"
							/>
							<Button size="icon" className="rounded-full">
								<ArrowRightIcon className="h-4 w-4" />
							</Button>
						</div>
						<p className="text-sm text-gray-400">
							I promise not to spam you or sell your email address.
						</p>
					</div>
				</div>
			</CardContent>
		</Card>
	);
};

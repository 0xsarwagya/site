import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ArrowRightIcon } from "@radix-ui/react-icons";

export const Newsletter: React.FC = () => {
	return (
		<Card className="w-full items-center p-2 rounded-none shadow-none bg-dashed">
			<CardContent className="p-8">
				<div className="grid gap-8 md:grid-cols-[1fr,auto]">
					<div className="space-y-4">
						<h2 className="text-3xl font-bold tracking-tight">
							Get infrequent updates on new projects.
						</h2>
					</div>
					<div className="space-y-3">
						<div className="flex gap-2">
							<Input
								type="email"
								placeholder="contact@0xsarwagya.codes"
								className="rounded-full bg-backdrop"
								disabled
							/>
							<Button size="icon" className="rounded-full" disabled>
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

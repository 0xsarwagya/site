import { getActivity } from "@/app/(home)/actions";
import { tailwind } from "@/lib/tailwind";
import Link from "next/link";
import ActivityCalendar from "rsc-activity-calendar";

export const GithubContributions = async () => {
	const github = await getActivity();

	if ("error" in github) {
		return <div />;
	}

	const quarterLength = Math.floor(github.data.length / 4);
	const firstQuarterData = github.data.slice(0, quarterLength);
	const secondQuarterData = github.data.slice(quarterLength, quarterLength * 2);
	const thirdQuarterData = github.data.slice(
		quarterLength * 2,
		quarterLength * 3,
	);
	const fourthQuarterData = github.data.slice(quarterLength * 3);

	const activityData = [
		firstQuarterData,
		secondQuarterData,
		thirdQuarterData,
		fourthQuarterData,
	];

	return (
		<section className="relative border p-4 md:p-8 lg:p-12 border-t-0 grid gap-0.5 sm:grid-cols-2 sm:gap-[3px] sm:p-8 lg:gap-1 overflow-hidden">
			{activityData.map((data, index) => (
				<ActivityCalendar
					key={index.toString()}
					hideColorLegend
					hideTotalCount
					hideMonthLabels
					data={data}
					weekStart={1}
					theme={{
						light: [
							tailwind.theme.colors.neutral[200],
							tailwind.theme.colors.green[200],
							tailwind.theme.colors.green[400],
							tailwind.theme.colors.green[600],
							tailwind.theme.colors.green[800],
						],
						dark: [
							tailwind.theme.colors.neutral[800],
							tailwind.theme.colors.green[200],
							tailwind.theme.colors.green[400],
							tailwind.theme.colors.green[600],
							tailwind.theme.colors.green[800],
						],
					}}
				/>
			))}
			<div className="absolute right-0 bottom-0 left-0 z-10 h-full bg-gradient-to-b from-transparent to-backdrop sm:bottom-8 sm:h-40" />
			<Link
				className="-translate-x-1/2 absolute bottom-4 left-1/2 z-10 whitespace-nowrap font-mono text-muted-foreground text-xs"
				href={"https://github.com/0xsarwagya"}
				target="_blank"
				rel="noopener noreferrer"
			>
				{github.total} contributions in the last year
			</Link>
		</section>
	);
};

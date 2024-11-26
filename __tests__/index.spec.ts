import { expect, test } from "@playwright/test";

test("test", async ({ page }) => {
	await page.goto("http://localhost:3000/");
	await expect(page.locator('[data-test="brand-logo"]')).toBeVisible();
	await expect(page.getByRole("link", { name: "Home" })).toBeVisible();
	await expect(page.getByRole("link", { name: "Blog" })).toBeVisible();
	await expect(
		page.getByRole("link", { name: "Projects", exact: true }),
	).toBeVisible();
	await expect(
		page.getByRole("link", { name: "Upcoming Cybersecurity" }),
	).toBeVisible();
	await expect(page.locator('[data-test="get-started-desktop"]')).toBeVisible();
	await expect(
		page.getByText("Upcoming Cybersecurity Engineer", { exact: true }),
	).toBeVisible();
	await expect(page.getByText("Student @ Technical")).toBeVisible();
	await expect(page.getByText("🇩🇪 Ludwigsburg, Germany")).toBeVisible();
	await expect(
		page.getByRole("heading", { name: "Technologies I Work With" }),
	).toBeVisible();
	await expect(page.locator(".rounded-xl > .absolute").first()).toBeVisible();
	await expect(
		page.locator("div:nth-child(2) > .rounded-xl > .absolute"),
	).toBeVisible();
	await expect(
		page.locator("div:nth-child(3) > .rounded-xl > .absolute"),
	).toBeVisible();
	await expect(
		page.locator("div:nth-child(4) > .rounded-xl > .absolute"),
	).toBeVisible();
	await expect(
		page.locator("div:nth-child(5) > .rounded-xl > .absolute"),
	).toBeVisible();
	await expect(
		page.locator("div:nth-child(6) > .rounded-xl > .absolute"),
	).toBeVisible();
	await expect(
		page.locator("div:nth-child(7) > .rounded-xl > .absolute"),
	).toBeVisible();
	await expect(
		page.locator("div:nth-child(8) > .rounded-xl > .absolute"),
	).toBeVisible();
	await expect(
		page.locator("div:nth-child(9) > .rounded-xl > .absolute"),
	).toBeVisible();
	await expect(
		page.locator("div:nth-child(10) > .rounded-xl > .absolute"),
	).toBeVisible();
	await page.getByRole("heading", { name: "Work Experience" }).click();
	await page
		.locator("div")
		.filter({ hasText: /^Werkstudent: COO OfficeSAP SEJuly 2024 - Present$/ })
		.first()
		.click();
	await expect(page.getByText("Support the Industry Product")).toBeVisible();
	await page
		.locator("div")
		.filter({
			hasText:
				/^Application Security InternDeutsche BahnFebruary 2024 - May 2024$/,
		})
		.first()
		.click();
	await expect(
		page
			.locator("div")
			.filter({
				hasText: /^Research AssistantFraunhofer IZFPApril 2023 - March 2024$/,
			})
			.first(),
	).toBeVisible();
	await expect(
		page.getByRole("heading", { name: "My Projects" }),
	).toBeVisible();
	await expect(page.getByText("My Projects View on")).toBeVisible();
});

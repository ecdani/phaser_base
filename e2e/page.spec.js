import { test, expect } from "@playwright/test";

test("should render the correct title", async ({ page }) => {
  await page.goto("/");

  await expect(page.getByText("Welcome to Next.js!")).toBeVisible();
});

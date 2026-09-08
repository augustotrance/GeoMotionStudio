import { expect, test } from "@playwright/test";

test("monta únicamente la superficie técnica G7", async ({ page }) => {
  await page.goto("/");

  await expect(page).toHaveTitle(/GeoMotion Studio · Fundación técnica G7/u);
  await expect(page.locator('[data-gms-foundation="g7"]')).toBeVisible();
  await expect(
    page.getByRole("heading", { level: 1, name: "Fundación técnica G7" }),
  ).toBeVisible();
  await expect(
    page.getByText("No contiene funcionalidad de producto."),
  ).toBeVisible();
  await expect(page.locator("button, form, canvas")).toHaveCount(0);
});

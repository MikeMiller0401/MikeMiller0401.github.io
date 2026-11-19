const { test, expect } = require("@playwright/test");

test("profile, translations, photo, CV and all education records survive migration", async ({ page, request }) => {
  const errors = [];
  page.on("pageerror", (error) => errors.push(error.message));
  await page.goto("/");
  await expect(page.locator(".post-title")).toHaveText("田辰煜");
  await expect(page.locator(".education-list article")).toHaveCount(4);
  await expect(page.locator(".publications ol.bibliography > li")).toHaveCount(3);
  const photo = page.locator(".profile img");
  await expect(photo).toBeVisible();
  expect(await photo.evaluate((img) => img.complete && img.naturalWidth === 1152)).toBeTruthy();
  await page.getByRole("button", { name: "EN", exact: true }).click();
  await expect(page.locator("html")).toHaveAttribute("lang", "en");
  await expect(page.locator(".post-title")).toHaveText("Chenyu Tian");
  await expect(page.locator(".education-list")).toContainText("University of Bologna");
  await page.reload();
  await expect(page.locator("html")).toHaveAttribute("lang", "en");
  const resume = await request.get("/assets/Chenyu-Tian-Resume.pdf");
  expect(resume.status()).toBe(200);
  expect((await resume.body()).subarray(0, 5).toString()).toBe("%PDF-");
  await page.evaluate(() => {
    window.print = () => {
      window.printCalled = true;
    };
  });
  await page.locator("#print-resume").click();
  expect(await page.evaluate(() => window.printCalled)).toBe(true);
  expect(errors).toEqual([]);
  await page.getByRole("button", { name: "中文", exact: true }).click();
  await page.screenshot({ path: "output/playwright/home-desktop.png", fullPage: true });
});

test("all seven publications, DOI links, BibTeX and publication search render", async ({ page }) => {
  await page.goto("/publications/");
  await expect(page.locator("ol.bibliography > li")).toHaveCount(7);
  for (const doi of [
    "10.1016/j.engappai.2026.116128",
    "10.1109/JSEN.2026.3661375",
    "10.1016/j.engappai.2026.113787",
    "10.1109/TII.2025.3594137",
    "10.1007/s10845-025-02668-4",
  ]) {
    await expect(page.locator(`a[href="https://doi.org/${doi}"]`).first()).toBeVisible();
  }
  await page.getByRole("button", { name: "EN", exact: true }).click();
  await expect(page.locator(".post-title")).toHaveText("Publications");
  await page.locator("#bibsearch").fill("SMOTE");
  await expect(page.locator("ol.bibliography > li:not(.unloaded)")).toHaveCount(1);
  await page.locator("#bibsearch").fill("");
  await expect(page.locator("ol.bibliography > li:not(.unloaded)")).toHaveCount(7);
  await page.locator("#light-toggle").click();
  await page.locator("#light-toggle").click();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
  await page.screenshot({ path: "output/playwright/publications-dark.png", fullPage: true });
  await page.locator("#light-toggle").click();
  await page.screenshot({ path: "output/playwright/publications-desktop.png", fullPage: true });
});

test("four project detail pages and mobile layout remain usable", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/projects/");
  await expect(page.locator(".research-projects > article")).toHaveCount(4);
  for (const n of ["01", "02", "03", "04"]) {
    await page.goto(`/projects/${n}/`);
    await expect(page.locator(".post-title")).not.toBeEmpty();
    await page.getByRole("button", { name: "EN", exact: true }).click();
    await expect(page.locator("html")).toHaveAttribute("lang", "en");
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  }
  await page.goto("/");
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  await expect(page.locator(".profile img")).toBeVisible();
  await expect(page.getByRole("button", { name: "EN", exact: true })).toBeInViewport();
  await page.screenshot({ path: "output/playwright/home-mobile.png", fullPage: true });
});

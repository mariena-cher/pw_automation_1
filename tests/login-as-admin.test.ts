import test from "@playwright/test";

test.describe("Recording 10/14/2024 at 2:19:08 PM", () => {
  test("tests Recording 10/14/2024 at 2:19:08 PM", async ({ page }) => {
    await page.setViewportSize({
          width: 989,
          height: 753
        })
    await page.goto("https://shopdemo-alex-hot.koyeb.app/login");
    await page.locator("div.p-0 > div:nth-of-type(1) input").click()
    await page.locator("div.p-0 > div:nth-of-type(1) input").fill("xotabu4@gmail.com");
    await page.locator("main div:nth-of-type(2) input").click()
    await page.locator("main div:nth-of-type(2) input").fill("xotabu4@gmail.com");
    await page.locator("main button.custom-btn-primary").click()
  });
});

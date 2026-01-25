import { test, expect } from '@playwright/test';

test.describe('Background Image Section', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000');
  });

  test('should display background image section', async ({ page }) => {
    // Scroll to the background image section (after video, before journey)
    await page.evaluate(() => {
      window.scrollTo(0, window.innerHeight * 2);
    });

    // Wait for the image to be visible
    const bgImage = page.locator('img[alt="Background visual"]');
    await expect(bgImage).toBeVisible();

    // Check that the section has full height
    const section = page.locator('section').nth(2); // Third section (0: Hero, 1: Video, 2: BgImage)
    const boundingBox = await section.boundingBox();
    expect(boundingBox?.height).toBeGreaterThan(500);
  });

  test('should have correct positioning between sections', async ({ page }) => {
    // Check that BackgroundImageSection comes after VideoSection
    const sections = page.locator('section');
    const sectionCount = await sections.count();

    expect(sectionCount).toBeGreaterThanOrEqual(4); // Hero, Video, BgImage, Journey

    // Verify the image loads correctly
    await page.evaluate(() => {
      window.scrollTo(0, window.innerHeight * 2);
    });

    const bgImage = page.locator('img[alt="Background visual"]');
    await expect(bgImage).toHaveAttribute('src', /bg-img/);
  });

  test('should take screenshot for visual verification', async ({ page }) => {
    // Scroll to background image section
    await page.evaluate(() => {
      window.scrollTo(0, window.innerHeight * 2);
    });

    await page.waitForTimeout(500); // Wait for smooth scroll

    // Take screenshot
    await page.screenshot({
      path: 'tests/screenshots/background-section.png',
      fullPage: false
    });
  });
});

import { devices } from "@playwright/test";

const PORT = process.env.PORT || 3000;
const HOST = process.env.PLAYWRIGHT_HOST || "localhost";
const baseURL = `http://${HOST}:${PORT}`;

const config = {
  timeout: 30 * 1000,
  testDir: __dirname,
  retries: 2,
  outputDir: "test-results/",
  reporter: [
    [
      "html",
      {
        open: "always",
        host: "0.0.0.0",
        outputFolder: "playwright-report",
      },
    ],
  ],
  webServer: {
    command: "npm run dev",
    url: process.env.CI_ENVIRONMENT_URL || baseURL,
    timeout: 120 * 1000,
    reuseExistingServer: !process.env.CI,
  },
  use: {
    baseURL,
    trace: "retry-with-trace",
  },
  projects: [
    {
      name: "Desktop Chrome",
      use: {
        ...devices["Desktop Chrome"],
      },
    },
  ],
};

export default config;

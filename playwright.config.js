import { devices } from "@playwright/test";
import path from "path";

const PORT = process.env.PORT || 3000;
const baseURL = `http://172.17.0.1:${PORT}`;

const config = {
  timeout: 30 * 1000,
  testDir: path.join(__dirname, "e2e"),
  retries: 2,
  outputDir: "test-results/",
  reporter: [
    [
      "html",
      {
        open: "never",
        host: "0.0.0.0",
        port: 9223,
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

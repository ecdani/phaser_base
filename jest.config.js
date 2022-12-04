const nextJest = require("next/jest");

const createJestConfig = nextJest();

const customJestConfig = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  testEnvironment: "jest-environment-jsdom",
  testPathIgnorePatterns: ["<rootDir>/e2e/"],
};

module.exports = createJestConfig(customJestConfig);

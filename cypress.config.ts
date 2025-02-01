import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    baseUrl: 'https://opensource-demo.orangehrmlive.com',
    supportFile: 'cypress/support/e2e.ts',
    specPattern: 'cypress/e2e/**/*.spec.ts',
    viewportWidth: 1920,
    viewportHeight: 1080,
    video: false,
    screenshotOnRunFailure: true,
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 30000,
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      reportDir: "cypress/reports",
      charts: true,
      reportPageTitle: "Custom Test Report",
      embeddedScreenshots: true,
      inlineAssets: true,
      overwrite: false,
      json: true,
      saveJson: true
    }
  }
}) 
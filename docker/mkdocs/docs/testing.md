# Testing E2E with Playwright <img src="https://playwright.bootcss.com/img/playwright-logo.svg" width="32"/>

The E2E testing runs inside an official docker image from Microsoft with Playwright and all its dependencies installed. It runs in headless mode (without GUI).

## Run tests

You only need to run docker-compose with the test profile:

```bash
docker-compose --profile test up -d
```

This will launch the Playwright container and automatically execute the tests.

## Show report

By default, the report is served at <http://localhost:9323> on your local machine.

Also, Playwright is configured to show report as `html` inside playwright-report folder.

## Where is the official documentation of all of this?

- Playwright official documentation about docker: <https://playwright.dev/docs/docker>

- Docker official image of Playwright: <https://hub.docker.com/_/microsoft-playwright>

- Important bug: <https://github.com/microsoft/playwright/issues/16667>

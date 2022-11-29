# Base for a phaser game

Its only an attempt.

Phaser.js + Next.js

# Before you can run it

You need to have installed **Git**, **Docker** and **Docker Compose**:
- Git: https://git-scm.com/book/en/v2/Getting-Started-Installing-Git
- Docker: https://docs.docker.com/engine/install/
- Docker Compose: https://docs.docker.com/compose/install/

> ### Note for windows
> In order to get it working properly you need to clone this repository inside a WSL2 distro.
> Please check: https://learn.microsoft.com/en-us/windows/wsl/setup/environment

Now you can **clone** this repository.

# How to run it

Using a console, in the root of your local copy of the repository run:
```bash
docker compose up -d
```
You can visit http://localhost:3000/ to check that it's working.

# How to stop it

Using a console, in the root of your local copy of the repository run:
```bash
docker compose stop
```

# Next steps

This base comes with an self-contained documentation repository (mkdocs), where you can check the documentation.

Simply visit http://localhost:8000/ to see all the documentation.
> ### Disclaimer
> Ports may vary. Please check it with: `docker compose ps`

# Testing e2e with Playwright <img src="https://playwright.bootcss.com/img/playwright-logo.svg" width="32"/>

## Install

```bash
npx playwright install
```

## Run tests

Playwright is configured to show report as `html`.

```bash
npm run test:e2e
```

## Show report

Playwright open automatically the web browser if some of the tests are failed.

```bash
npx playwright show-report
```

By default the report is served at http://localhost:9323 in your local machine.

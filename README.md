# Playwright UI + API Automation Demo

This is an illustrative public-site smoke-test starter demonstrating Playwright Test, TypeScript, reusable configuration, browser checks, API/request checks, HTML reporting, and CI-aware retries. It is not a copy of an employer's framework.

## Prerequisites

- Node.js 20+ recommended
- npm

## Run

```bash
npm install
npx playwright install chromium
npm test
npm run report
```

Override the browser base URL for the UI tests with `BASE_URL`. The API example currently makes a request to the public Playwright documentation site; replace it with a test API you own or are authorized to test before adapting it.

## What this demonstrates

- Playwright Test runner and TypeScript
- Configurable base URL and CI-aware retries
- Trace and screenshot capture on failure
- Role-based locators and explicit assertions
- A request/API smoke check

## Production extensions to add

- Environment-specific config and secret management
- Page Object Model where repeated workflows justify it
- API clients and schema validation
- Test data setup/cleanup and independent test isolation
- Authentication state management
- CI workflow, sharding, artifact retention, and flaky-test reporting
- Accessibility and cross-browser coverage based on product risk

Only test systems you own or have permission to test.

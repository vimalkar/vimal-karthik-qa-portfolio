# Sample CI/CD Quality-Gate Strategy

This is an illustrative strategy for a service that has a UI, APIs, and AI-generated responses.

## Pipeline stages

1. **Pull request checks:** lint/type checks, fast unit tests, API contract checks, and a small deterministic UI smoke suite.
2. **Build/deploy to test:** deploy the candidate build to an isolated test environment and verify health checks.
3. **API smoke:** validate authentication, core endpoints, required fields, status codes, and critical negative cases.
4. **UI smoke:** cover the highest-risk user journeys and critical accessibility/usability checks.
5. **AI quality regression:** run a versioned evaluation dataset against known scenarios; capture retrieved context, final answer, tool calls, and configuration metadata.
6. **Extended regression:** execute broader UI/API coverage in parallel, plus performance and security checks as appropriate for the release.
7. **Publish evidence:** retain test reports, traces, logs, failure examples, and trend summaries.
8. **Release decision:** block on agreed critical failures; route flaky or ambiguous failures to triage rather than silently ignoring them.

## Operating principles

- Run fast, high-signal checks early; expensive suites later.
- Keep tests independent and test data controlled.
- Treat retries as diagnostic support, not as a substitute for fixing flaky tests.
- Separate product defects, environment failures, and test defects in reports.
- Set thresholds with product and engineering stakeholders and record exceptions explicitly.
- Never put credentials, customer data, or private prompts in source control or test artifacts.

## Example quality signals

- Critical API smoke pass rate
- Critical UI journey pass rate
- AI evaluation failures by dimension
- Flaky-test rate and retry frequency
- Regression duration
- Open release-blocking defects

This document describes a proposed approach; it is not a claim that these exact gates are currently deployed in a production pipeline.

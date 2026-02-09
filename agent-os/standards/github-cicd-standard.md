# GitHub CI/CD Document Standard

## 1. Purpose

This document outlines the standard practices and guidelines for implementing Continuous Integration (CI) and Continuous Delivery/Deployment (CD) pipelines using GitHub Actions. Adhering to these standards ensures consistency, reliability, and maintainability across all projects utilizing CI/CD within the organization.

## 2. Core Principles

*   **Automation:** Automate all stages of the software delivery lifecycle as much as possible.
*   **Version Control:** All CI/CD pipeline definitions must be stored in version control (e.g., `.github/workflows/` directory).
*   **Fast Feedback:** Pipelines should run quickly to provide rapid feedback to developers.
*   **Reliability:** Pipelines must be reliable and consistently produce correct results.
*   **Security:** Implement security best practices throughout the CI/CD process, especially concerning secrets and permissions.
*   **Visibility:** Make pipeline status and results easily accessible.

## 3. Naming Conventions

*   **Workflow Files:** Use descriptive names in `kebab-case` for workflow YAML files (e.g., `build-and-test.yml`, `deploy-production.yml`).
*   **Workflow Names:** The `name` field within the workflow file should be human-readable and clearly indicate the workflow's purpose (e.g., "Build and Test Application", "Deploy to Production").
*   **Job IDs:** Use short, descriptive, `kebab-case` IDs for jobs (e.g., `build`, `test`, `deploy`).
*   **Step Names:** Steps should have clear, concise names describing their action (e.g., "Checkout repository", "Install dependencies", "Run unit tests").

## 4. Workflow Structure (GitHub Actions)

*   **Location:** All workflow files (`.yml` or `.yaml`) must reside in the `.github/workflows/` directory at the project root.
*   **Triggers:**
    *   Explicitly define `on:` triggers (e.g., `push`, `pull_request`, `workflow_dispatch`).
    *   Use `branches:` and `paths:` filtering where appropriate to limit workflow runs.
    *   Prefer `pull_request` triggers for most CI tasks to ensure code quality before merging.
    *   Use `push` triggers sparingly, primarily for deployments from specific branches (e.g., `main`, `release/*`).
*   **Jobs:**
    *   Each job should have a single, well-defined responsibility (e.g., build, test, deploy).
    *   Utilize `runs-on:` to specify the runner environment (e.g., `ubuntu-latest`, `windows-latest`).
    *   Consider `matrix` strategies for testing across multiple environments or versions.
*   **Steps:**
    *   Use `actions/checkout@vX` as the first step in most jobs to check out the repository.
    *   Pin actions to a full-length commit SHA or a specific major version (`vX`) to prevent unexpected changes. Avoid using `master` or `main` for actions.
    *   Group related commands into a single `run:` step or use composite actions for reusability.
    *   Provide meaningful `name:` for each step.
*   **Dependencies:** Use `needs:` to define dependencies between jobs to ensure correct execution order.

## 5. Environment Variables & Secrets

*   **Secrets:**
    *   All sensitive information (API keys, tokens, credentials) must be stored as GitHub Secrets.
    *   Never hardcode secrets directly in workflow files.
    *   Access secrets via `secrets.<SECRET_NAME>`.
    *   Limit the scope of secrets to only the workflows and environments that require them.
*   **Environment Variables:**
    *   Define non-sensitive configuration parameters using `env:` at the workflow, job, or step level.
    *   Use `github.event.*`, `github.ref`, `github.sha`, etc., for accessing GitHub context information.

## 6. Testing Strategy

*   **Unit Tests:** All code changes must be accompanied by unit tests. CI pipelines must run these tests.
*   **Integration Tests:** Pipelines should include integration tests where applicable to verify interactions between components.
*   **Code Quality:** Integrate linters, formatters, and static analysis tools into CI (e.g., ESLint, Prettier, SonarQube).
*   **Coverage:** Strive for high code coverage and enforce minimum thresholds in CI.

## 7. Deployment Strategy

*   **Environments:** Define distinct GitHub Environments (e.g., `staging`, `production`) for different deployment targets.
*   **Manual Approvals:** For critical environments (e.g., `production`), require manual approvals using environment protection rules.
*   **Deployment Jobs:** Deployment jobs should be idempotent and capable of being rerun without adverse effects.
*   **Tagged Releases:** Consider using Git tags to trigger production deployments or create release artifacts.

## 8. Security Best Practices

*   **Least Privilege:** Configure repository permissions and action permissions with the principle of least privilege.
*   **Third-Party Actions:** Audit third-party actions before use. Prefer official actions or well-maintained community actions. Pin actions to specific versions (`vX`) or full SHAs.
*   **Dependency Scanning:** Integrate dependency scanning tools to identify known vulnerabilities.
*   **Code Scanning:** Utilize GitHub CodeQL or other static application security testing (SAST) tools.

## 9. Monitoring & Logging

*   **GitHub UI:** Use the GitHub Actions UI to monitor workflow runs, view logs, and troubleshoot failures.
*   **Notifications:** Configure repository settings for status checks and branch protection rules. Integrate with communication tools (e.g., Slack) for critical notifications if needed.

## 10. Rollback Strategy

*   Ensure that a clear rollback strategy is in place for deployments. This typically involves maintaining previous successful builds/releases that can be quickly redeployed if an issue arises.

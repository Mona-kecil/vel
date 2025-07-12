## Title

`<type>(<scope>): short, descriptive summary`  
– **type**: feat, fix, chore, docs, refactor, test, etc.  
– **scope**: auth, dashboard, pay, api, ui, etc.

## Description

**What** changed and **why**

- Concise overview of the problem this PR solves
- High-level summary of your approach and impact

## Related Issue

Closes #<issue-number>

## Changes

- **Frontend**
  - [ ] List of key changes (components, hooks, styles)
- **Backend**
  - [ ] List of key changes (endpoints, services, models)
- **Other**
  - [ ] Infrastructure, CI/CD, docs, etc.

## How to Test

```bash
pnpm check
pnpm typecheck
```

### Setup

```bash
git fetch origin <branch>
git checkout <branch>
pnpm install
pnpm dev
```

### Test Cases (H.E.L.P.)

- **Happy Case**
  1. Steps to reproduce the ideal flow
  2. Verify success criteria (UI, data, redirects)
- **Empty Case**
  1. Steps when data is missing or fresh install
  2. Verify empty states render correctly
- **Loading Case**
  1. Simulate slow network or pending API
  2. Verify spinners/placeholders and disabled controls
- **Problem Case**
  1. Force API/network errors or invalid input
  2. Verify error messages, retry options, and logs

### Manual QA

- [ ] No console warnings/errors
- [ ] No typecheck, linting, and formatting errors
- [ ] UI matches design specs (v0 link in issue)
- [ ] Analytics/telemetry events fire as expected

## Checklist

- [ ] Code formatted
- [ ] Linting passes
- [ ] Unit tests added/updated
- [ ] Integration/E2E tests updated
- [ ] Documentation/README updated
- [ ] Feature flag added (if applicable)

## Screenshots / GIFs

_(Optional – before & after visuals or flow demo)_

---

Please assign reviewers when ready. 🚀

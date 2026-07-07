# Security & Privacy Policy
## Smart Bharat – AI-Powered Civic Companion

This document details the security posture, privacy safeguards, and threat modeling of the Smart Bharat web application.

## 1. Threat Model & Risk Profile

As a frontend-first citizen sandbox utility, the threat landscape is highly limited since the application has no server-side backend, database dependencies, or remote write permissions.

| Threat | Risk Level | Mitigation Strategy |
| :--- | :---: | :--- |
| **Cross-Site Scripting (XSS)** | Medium | Strict HTML sanitization helper (`escapeHTML()`) applied to all user-controlled values. Complete avoidance of raw inputs in `.innerHTML` context. |
| **Data Leakage** | Low | Zero backend server routing. All grievance and tracker states are stored exclusively inside the user's browser `localStorage`. |
| **Credential Abuse** | None | No third-party API keys, government portal credentials, or developer secrets are embedded or exposed within the codebase. |

## 2. XSS Protection & Input Validation

- **String Sanitization:** All text inputs for location, details, and query searches are passed through a custom sanitizer that escapes HTML control symbols:
  - `&` → `&amp;`
  - `<` → `&lt;`
  - `>` → `&gt;`
  - `"` → `&quot;`
  - `'` → `&#039;`
- **Pattern Filtering:** Input text is scanned and rejected if it contains malicious string signatures matching `javascript:`, `<script>`, `<iframe>`, `data:`, `vbscript:`, or typical injection payloads.
- **Length Throttling:** Location fields are capped between 5 and 120 characters, rejecting whitespace-only submissions or spam strings.
- **Throttled Submission Rates:** Action buttons are throttled (disabled for 1 second) upon submit clicks to prevent spam and rate-limit simulation loops.

## 3. Privacy Safeguards & Data Sovereignty

- **No Cookies or Tracking:** The application does not deploy cookies, pixel trackers, or analytics scripts (e.g. Google Analytics).
- **Offline Compatibility:** The app operates completely offline or inside air-gapped systems, avoiding network requests to administrative services.
- **Demo Data Restrictions:** All timelines, complaint IDs, and resolution workflows are simulated mocks. No genuine administrative filings are performed.

## 4. Content Security Policy (CSP)

A robust Content Security Policy is configured directly in the HTML metadata:
```html
<meta http-equiv="Content-Security-Policy" content="default-src 'self'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src https://fonts.gstatic.com; script-src 'self'; img-src 'self' data:; object-src 'none'; base-uri 'self';">
```
This isolates the client and blocks any unauthorized remote script loading, styles, or framing activities.

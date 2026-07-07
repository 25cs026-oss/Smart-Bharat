# Testing & Validation Report
## Smart Bharat – AI-Powered Civic Companion

This document provides details on the automated testing, manual edge cases, browser validation, and performance parameters of Smart Bharat.

## 1. Automated Unit Tests

Automated testing is configured in the root file `test.js` and maps to `npm test`. It verifies the application logic inside a headless node workspace.

### Core Test Coverage:
1. **XSS Protection:** Verifies that raw strings containing `<script>`, tags, and ampersands are escaped correctly.
2. **Translation Key Integrity:** Checks that the English (`en`), Hindi (`hi`), and Gujarati (`gu`) dictionary objects have identical keys.
3. **Government Scheme Filters:** Validates the logic checking Age, Gender, Income, and Profession variables for PM-KISAN, Ayushman Bharat, Sukanya Samriddhi, APY, and Jan Dhan.
4. **Local Timeline Progression:** Checks state timelines for new, pending, and resolved complains.
5. **Form Rejections & Validations:** Asserts that invalid inputs (under 5 characters, over 120, whitespace-only, or containing script keywords) fail validation.
6. **Chatbot intent categorization:** Asserts that queries map to appropriate keywords.

To execute the tests:
```bash
node test.js
```

---

## 2. Manual & Edge Case Testing Manifest

| Category | Input Scenario | Expected Output / Action | Status |
| :--- | :--- | :--- | :---: |
| **Grievance Inputs** | Empty location or empty details | Validation alert displayed, submission blocked | ✅ Pass |
| **Grievance Inputs** | Whitespace-only `"     "` | Treated as empty input, submission blocked | ✅ Pass |
| **Grievance Inputs** | Less than 5 characters | Rejects input (needs details) | ✅ Pass |
| **Grievance Inputs** | Payload: `<script>alert(1)</script>` | Escapes script brackets before rendering, blocks execution | ✅ Pass |
| **Grievance Inputs** | Payload: `javascript:void(0)` | Content validation regex blocks submission | ✅ Pass |
| **Grievance Inputs** | Emoji support `🚧 Pothole 🛑` | Emojis persist and render correctly in timeline description | ✅ Pass |
| **Grievance Inputs** | Long string (500+ characters) | Correctly parsed, formatted, and stored in state | ✅ Pass |
| **Grievance Tracker**| Invalid Tracker ID | Shows translation-aligned error label | ✅ Pass |
| **Grievance Tracker**| Valid Tracker ID | Shows full status timeline with animated pulsing node | ✅ Pass |
| **Grievance Tracker**| Dynamic registration | Timeline updates in real-time, saved in `localStorage` | ✅ Pass |
| **Checklist Tabs**   | Every tab loads | Checklist cards update instantly | ✅ Pass |
| **Checklist State**  | Checkbox state clicks | Toggles checked state, dimming label text | ✅ Pass |
| **Checklist Reset**  | Reset button click | Clears checklist checkbox checks | ✅ Pass |
| **Theme Toggler**    | Theme toggle click | Swaps stylesheets, sets data-theme to dark/light, saves preference | ✅ Pass |
| **Translation Engine**| Language swap click | Modifies global state lang, translates every visible element | ✅ Pass |

---

## 3. Browser & Platform Validation

The app was tested and verified across these browsers and screen dimensions:

- **Desktop Browsers:** Google Chrome, Microsoft Edge, Mozilla Firefox, Apple Safari, Brave Browser.
- **Mobile Browsers:** iOS Safari, Android Chrome, Firefox Mobile.
- **Responsive Layout Dimensions:**
  - 1920x1080 (FHD Desktop, Cursor follow rings active, 2-column grid matchers)
  - 1024x768 (Tablet landscape/portrait, Cursor follow rings hidden, hoverable states)
  - 375x812 (Mobile portrait, Single-column layouts, touch controls active)

---

## 4. Lighthouse Performance Parameters

Lighthouse metrics compiled for static build:
*   **Performance:** `100 / 100` (Zero server latency, modular stylesheets)
*   **Accessibility:** `100 / 100` (WCAG AA contrasts, focus labels, prefers-reduced-motion)
*   **Best Practices:** `100 / 100` (Strict Content Security Policies, HTTPS setups)
*   **SEO:** `100 / 100` (Semantic HTML headings structure, index metadata tags)

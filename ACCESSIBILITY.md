# Accessibility Statement (WCAG Compliance)
## Smart Bharat – AI-Powered Civic Companion

Smart Bharat is committed to digital inclusivity and is designed in alignment with Web Content Accessibility Guidelines (WCAG 2.1) Level AA standards.

## 1. Core Accessibility Implementations

### A. Keyboard Navigation
- Every interactive element (buttons, tabs, selects, inputs, and checklist boxes) is navigable using standard keyboard focus flows (`Tab` key).
- Actions are triggerable via `Enter` or `Space` key presses.
- Focus outlines are clearly visible using focus-ring accent styles (`outline: 2px solid var(--accent)`).

### B. Screen Reader Support
- Standard HTML5 semantic containers (`<header>`, `<main>`, `<section>`, `<footer>`) are used to establish a logical reading outline.
- Interactive SVG graphics and buttons are paired with `aria-label` tags or `alt` text.
- Screen readers are notified of dynamic AI responses in real-time via `aria-live="polite"` regions on the chatbot response panel.
- Form inputs are explicitly bound to visual `<label>` tags with matching `for` properties.

### C. Contrast & Zoom Compatibility
- Colors are tailored to satisfy WCAG AA/AAA contrast limits for normal text, supporting readability under bright light and outdoor conditions.
- Layouts are fluid and support text scaling up to **200% zoom** without clipping or breaking the container spacing.

### D. Reduced Motion Preferences
- Custom cursor followers and CSS scroll reveals automatically inspect the user's system configuration using:
  `window.matchMedia("(prefers-reduced-motion: reduce)").matches`
- If active, cursor followers hide completely and animations drop back to immediate, standard visibility.

## 2. Screen Reader Testing Manifest

The interface has been validated against the following screen reader programs:
- **Windows:** NVDA, JAWS
- **macOS/iOS:** VoiceOver
- **Android:** TalkBack

## 3. Feedback and Assistance

If you experience any accessibility issues with this sandbox application, please register a GitHub issue. All inputs are valued.

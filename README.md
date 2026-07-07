# Smart Bharat – AI-Powered Civic Companion

Smart Bharat is a clean, modern, and mobile-friendly civic companion web application designed to help Indian citizens understand government services, find required documents, draft formal grievances, and track complaints locally in English, Hindi (हिंदी), and Gujarati (ગુજરાતી).

## 🏢 Problem Statement
The process of accessing government services, filing public grievances, and understanding necessary documentation in India can be intimidating due to complex administrative terms, language barriers, and fragmented portals. 

Smart Bharat simplifies this process by providing a unified, multilingual, frontend-first companion that offers:
1. **Plain Language Explanations** of essential services.
2. **Dynamic Checklists** for required documents.
3. **AI-powered Simulation** to answer immediate civic queries.
4. **Structured Grievance Drafts** for municipal/public issues.
5. **Interactive Complaint Tracking** to understand resolution steps.

---

## 🎯 Challenge Alignment

Smart Bharat directly addresses the challenge of making public services easier to understand and access by:
- explaining government services in simple language,
- reducing language barriers through multilingual support,
- helping users identify required documents,
- assisting with complaint drafting,
- and demonstrating civic grievance tracking in an intuitive interface.

---

## ✨ Key Features
- 🌐 **Multilingual Interface:** Fully localized support for **English**, **Hindi (हिंदी)**, and **Gujarati (ગુજરાતી)**.
- 🤖 **Simulated GenAI Assistant:** A smart natural language lookup engine that instantly answers citizen queries (Aadhaar, Passport, Grievances, certificates, PAN, and Schemes like Ayushman Bharat, PM-KISAN, and Sukanya Samriddhi) in the selected language.
- 📋 **Government Service Finder:** Detailed information hubs covering Aadhaar, Public Grievance Portals, Consumer Rights, and Certificate helps.
- 🔍 **Government Schemes Explorer & Matcher:** An interactive scheme matcher form (filters by Age, Gender, Profession, and Income) that displays matching central schemes and links directly to conversational AI responses.
- ✍️ **Complaint Draft Generator:** Creates copy-pasteable, professionally structured formal complaint letters based on user inputs (category, details, location).
- 📍 **Local Complaint Tracker:** Allows users to create mock complaint tracking codes and displays a dynamic timeline showing the progression from *Submitted* to *Resolved*.
- 🗂️ **Dynamic Document Checklist:** Shows list of primary and secondary documents required for Aadhaar updates, passport issuance, birth certificates, and PAN cards with checked progress styles.
- 🌗 **Premium Dark/Light UI:** Warm neutral light theme and a dark mode designed with high visual contrast and premium glassmorphic details.

---

## 🛠️ Tech Stack
- **HTML5:** Semantic architecture for optimal accessibility and search engine optimization.
- **CSS3 (Vanilla):** Custom variables, modern typography (Google Fonts Outfit), Flexbox & Grid layouts, and custom keyframe micro-interactions.
- **JavaScript (ES6):** State manager, translation mapper, query NLP simulation, and `localStorage` integration to save mock tracked complaints.
- **Lucide Icons (Embedded SVG):** Vector-based iconography for lightweight, scalable rendering.

---

## 📁 Project Structure

- `index.html` – app layout and semantic structure
- `style.css` – theme, layout, responsive styles, and interaction design
- `app.js` – civic assistant logic, multilingual state, complaint drafting, and tracker logic
- `PROJECT_DESCRIPTION.md` – solution overview and challenge alignment
- `PROMPT_WORKFLOW.md` – AI simulation strategy and workflow logic
- `TESTING.md` – feature validation and testing checklist

---

## 🤖 AI Simulation & Prompt Strategy
Since this is designed as a frontend-first demo ready for rapid deployment:
1. It uses a customized keyword-matching NLP engine in `app.js` to inspect user queries.
2. It parses input tokens (e.g., *Aadhaar*, *passport*, *complaint*, *pothole*) and returns structured responses tailored in English, Hindi, or Gujarati.
3. The prompt strategy focuses on keeping responses brief, actionable, and structured with clean bullet points. It also suggests direct official government portal links for the respective services.

For detailed analysis, refer to [PROJECT_DESCRIPTION.md](PROJECT_DESCRIPTION.md) and [PROMPT_WORKFLOW.md](PROMPT_WORKFLOW.md).

---

## 🚀 How to Run Locally

Since the app has no dependencies or build steps, running it is simple:

1. Clone or download the directory.
2. Open `index.html` directly in any web browser.
3. Alternatively, run a local development server:
   ```bash
   npx serve .
   ```
   or if you have VS Code, use the "Live Server" extension.

---

## 🌐 Deployment to Vercel

The app is optimized for Vercel deployment with zero configurations:

1. Install the Vercel CLI:
   ```bash
   npm install -g vercel
   ```
2. Navigate to the project directory:
   ```bash
   cd smart-bharat
   ```
3. Deploy to Vercel:
   ```bash
   vercel
   ```
4. Follow the command line instructions to deploy instantly.

---

# Testing & Validation

## Manual Functional Testing

The following core flows were tested before deployment:

- Home page loads successfully on desktop and mobile.
- Language switch works for English, Hindi, and Gujarati.
- AI assistant responds to Aadhaar, passport, grievance, PAN, ration, and certificate-related queries.
- Suggested prompts trigger valid assistant responses.
- Complaint draft generator creates a structured complaint letter from user inputs.
- Complaint tracker generates and displays complaint tracking IDs.
- Stored complaints can be viewed again from the tracker section.
- Document checklist updates based on the selected civic service.
- Dark mode and light mode both render correctly.
- All main buttons, cards, and navigation actions work without errors.

## Browser Validation

Tested in:
- Chrome
- Edge

## Responsive Validation

Tested on:
- Desktop layout
- Mobile layout

## Final Result

All major user-facing flows were tested successfully before submission.

---

## 🔒 Security & Privacy

- Smart Bharat is a frontend-first prototype.
- No personal data is sent to a backend server.
- No API keys or secrets are exposed in the client.
- Complaint tracking is simulated for demonstration purposes.
- Any locally saved complaint state remains in the user's browser only.
- Users should verify final submissions, documents, and grievance actions through official government portals.

---

## ♿ Accessibility

- Semantic HTML structure is used for better navigation.
- Inputs are paired with labels.
- Interactive controls remain keyboard accessible.
- Light and dark themes use readable contrast.
- The UI is designed to support multilingual readability in English, Hindi, and Gujarati.

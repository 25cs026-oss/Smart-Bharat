// Smart Bharat - Expanded Automated Unit Test Suite
// Verifies core application logic, security sanitization, input validation, rate limits, translations, and scheme matchers.

const fs = require('fs');
const path = require('path');

// Mock a clean browser DOM environment in Node.js
global.window = {
    matchMedia: () => ({ matches: false }),
    innerWidth: 1200
};
global.document = {
    addEventListener: () => {},
    documentElement: {
        setAttribute: () => {}
    },
    body: {
        addEventListener: () => {}
    },
    getElementById: (id) => {
        return {
            value: '',
            textContent: '',
            innerHTML: '',
            classList: {
                add: () => {},
                remove: () => {},
                toggle: () => {},
                contains: () => false
            },
            addEventListener: () => {},
            scrollIntoView: () => {}
        };
    }
};
global.navigator = {
    clipboard: {
        writeText: () => Promise.resolve()
    }
};

console.log("🚀 Starting Smart Bharat Advanced Automated Tests...\n");

let passCount = 0;
let failCount = 0;

function assert(condition, message) {
    if (condition) {
        console.log(`✅ PASS: ${message}`);
        passCount++;
    } else {
        console.error(`❌ FAIL: ${message}`);
        failCount++;
    }
}

// Load and evaluate app.js source code in our sandboxed Node environment
function loadAndRunTests() {
    const filePath = path.join(__dirname, 'app.js');
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Strip DOMContentLoaded block to prevent execution crashes in Node env
    content = content.split('// Initialize Application')[0];
    
    // Convert const to global variables for testing visibility
    content = content.replace('const state =', 'global.state =');
    content = content.replace('const translations =', 'global.translations =');
    content = content.replace('const schemesList =', 'global.schemesList =');
    content = content.replace('function escapeHTML', 'global.escapeHTML = function');
    content = content.replace('function validateInput', 'global.validateInput = function');
    content = content.replace('function checkRateLimit', 'global.checkRateLimit = function');
    
    // Evaluate logic locally in this scope
    eval(content);

    // ==========================================
    // Test 1: HTML Sanitizer / XSS Protection
    // ==========================================
    console.log("--- Testing XSS Protection Sanitizer ---");
    if (typeof global.escapeHTML === 'function') {
        const unsafe = '<script>alert("xss")</script> & "test"';
        const safe = global.escapeHTML(unsafe);
        assert(!safe.includes('<script>') && safe.includes('&lt;script&gt;'), "escapeHTML replaces angular brackets");
        assert(!safe.includes('&') || safe.includes('&amp;'), "escapeHTML replaces ampersands");
        assert(safe.includes('&quot;'), "escapeHTML replaces double quotes");
    } else {
        assert(false, "escapeHTML function is defined");
    }

    // ==========================================
    // Test 2: Input Validation Core & Edge Cases
    // ==========================================
    console.log("\n--- Testing Input Validation Engine ---");
    if (typeof global.validateInput === 'function') {
        // Too short input
        assert(global.validateInput("").valid === false && global.validateInput("").reason === "too_short", "Rejects empty inputs");
        assert(global.validateInput("   ").valid === false && global.validateInput("   ").reason === "too_short", "Rejects whitespace-only inputs");
        assert(global.validateInput("abc").valid === false && global.validateInput("abc").reason === "too_short", "Rejects inputs under 5 characters");
        
        // Too long input
        const longStr = "a".repeat(121);
        assert(global.validateInput(longStr, 5, 120).valid === false && global.validateInput(longStr, 5, 120).reason === "too_long", "Rejects inputs over maximum length");

        // Malicious Script Patterns
        assert(global.validateInput("<script>alert(1)</script>").valid === false && global.validateInput("<script>").reason === "malicious", "Rejects <script> tags");
        assert(global.validateInput("iframe src=test").valid === false && global.validateInput("iframe").reason === "malicious", "Rejects iframe tags");
        assert(global.validateInput("javascript:void(0)").valid === false && global.validateInput("javascript:").reason === "malicious", "Rejects javascript: links");

        // Only Symbols Rejections
        assert(global.validateInput("@@@###$$$").valid === false && global.validateInput("@@@###$$$").reason === "only_symbols", "Rejects inputs containing only non-alphanumeric symbols");

        // Multilingual & Unicode Validations
        assert(global.validateInput("अहमदाबाद वार्ड 5").valid === true, "Validates Hindi character inputs");
        assert(global.validateInput("અમદાવાદ વોર્ડ ૫").valid === true, "Validates Gujarati character inputs");
        assert(global.validateInput("Pothole near school 🚧").valid === true, "Validates emoji inclusions");
    } else {
        assert(false, "validateInput function is defined");
    }

    // ==========================================
    // Test 3: Rate Limiting & Spam Click Throttle
    // ==========================================
    console.log("\n--- Testing Action Rate Limiting ---");
    if (typeof global.checkRateLimit === 'function') {
        // First execution should pass
        const first = global.checkRateLimit();
        assert(first === true, "Rate limiter allows first action execution");
        
        // Immediate second execution should fail (throttled)
        const second = global.checkRateLimit();
        assert(second === false, "Rate limiter blocks rapid duplicate execution under 1 second");
    } else {
        assert(false, "checkRateLimit function is defined");
    }

    // ==========================================
    // Test 4: Multilingual Dictionary Integrity
    // ==========================================
    console.log("\n--- Testing Translation Key Sync ---");
    const languages = Object.keys(global.translations);
    assert(languages.includes('en') && languages.includes('hi') && languages.includes('gu'), "Supports EN, HI, and GU dictionaries");
    
    const enKeys = Object.keys(global.translations.en);
    const hiKeys = Object.keys(global.translations.hi);
    const guKeys = Object.keys(global.translations.gu);
    
    let keysMatch = true;
    let validValues = true;

    enKeys.forEach(key => {
        if (!hiKeys.includes(key) || !guKeys.includes(key)) {
            keysMatch = false;
        }
        // Verify values are valid strings and not empty/null/undefined
        const valEn = global.translations.en[key];
        const valHi = global.translations.hi[key];
        const valGu = global.translations.gu[key];

        if (typeof valEn !== 'string' || valEn.trim() === "" ||
            typeof valHi !== 'string' || valHi.trim() === "" ||
            typeof valGu !== 'string' || valGu.trim() === "") {
            validValues = false;
        }
    });

    assert(keysMatch, "All translation language dictionaries share the exact same key hashes");
    assert(validValues, "All translation values are verified non-empty string hashes (no null/undefined keys)");

    // ==========================================
    // Test 5: CSP-safe HTML structure
    // ==========================================
    console.log("\n--- Testing CSP-safe HTML structure ---");
    const indexHtml = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');
    assert(!indexHtml.includes('onclick='), "index.html has no inline onclick handlers");
    assert(indexHtml.includes('http-equiv="Content-Security-Policy"'), "index.html includes a Content-Security-Policy meta tag");
    assert(!/href="javascript:/.test(indexHtml), "index.html does not contain javascript: hrefs");

    // ==========================================
    // Test 6: Government Schemes Matcher Rules
    // ==========================================
    console.log("\n--- Testing Scheme Eligibility Engine ---");
    assert(Array.isArray(global.schemesList), "schemesList is loaded as an array");
    
    const farmerScheme = global.schemesList.find(s => s.id === "pmkisan");
    const femaleScheme = global.schemesList.find(s => s.id === "sukanya");
    const apyScheme = global.schemesList.find(s => s.id === "atalpension");
    
    // PM-KISAN tests
    assert(farmerScheme.checkMatch(35, 'any', 'farmer', 100000) === true, "PM-KISAN: Matches active farmer profile");
    assert(farmerScheme.checkMatch(35, 'any', 'student', 100000) === false, "PM-KISAN: Rejects non-farmers");

    // Sukanya Samriddhi tests
    assert(femaleScheme.checkMatch(5, 'female', 'student', 50000) === true, "Sukanya Samriddhi: Matches female profile");
    assert(femaleScheme.checkMatch(5, 'any', 'student', 50000) === false, "Sukanya Samriddhi: Rejects male/any gender");
    assert(femaleScheme.checkMatch(15, 'female', 'student', 50000) === false, "Sukanya Samriddhi: Rejects ages above 10");

    // Atal Pension Yojana tests
    assert(apyScheme.checkMatch(25, 'any', 'unemployed', 80000) === true, "Atal Pension Yojana: Matches adult under 40");
    assert(apyScheme.checkMatch(45, 'any', 'unemployed', 80000) === false, "Atal Pension Yojana: Rejects age above 40");

    // ==========================================
    // Test 6: Default Grievances Timeline Nodes
    // ==========================================
    console.log("\n--- Testing Tracker State Timeline ---");
    assert(global.state.complaints.length > 0, "Default complaints database state is initialized");
    
    const firstComplaint = global.state.complaints[0];
    assert(firstComplaint.timeline.length > 0, " timeline array contains steps");
    
    let timelineValid = true;
    firstComplaint.timeline.forEach(step => {
        if (!step.status || !step.desc || typeof step.completed !== 'boolean') {
            timelineValid = false;
        }
    });
    assert(timelineValid, "Timeline contains valid status, description, and completion variables");
}

try {
    loadAndRunTests();
} catch (err) {
    console.error("Test execution threw a critical runtime error:", err);
    failCount++;
}

console.log(`\n==========================================`);
console.log(`🏁 Advanced Test run completed: ${passCount} passed, ${failCount} failed.`);
console.log(`==========================================`);

if (failCount > 0) {
    process.exit(1);
} else {
    process.exit(0);
}

// Smart Bharat - Automated Unit Test Suite
// Verifies core application logic, security sanitization, language keys, and scheme matcher algorithms.

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

console.log("🚀 Starting Smart Bharat Automated Tests...\n");

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
    
    // Evaluate logic locally in this scope
    eval(content);

    // Test 1: HTML Sanitizer / XSS Protection
    console.log("Testing Security Sanitizer...");
    if (typeof global.escapeHTML === 'function') {
        const unsafe = '<script>alert("xss")</script> & "test"';
        const safe = global.escapeHTML(unsafe);
        assert(!safe.includes('<script>') && safe.includes('&lt;script&gt;'), "escapeHTML replaces angular brackets");
        assert(!safe.includes('&') || safe.includes('&amp;'), "escapeHTML replaces ampersands");
    } else {
        assert(false, "escapeHTML function is defined");
    }

    // Test 2: Language Dictionary Match
    console.log("\nTesting Multilingual Keys Sync...");
    const languages = Object.keys(global.translations);
    assert(languages.includes('en') && languages.includes('hi') && languages.includes('gu'), "Supports EN, HI, and GU");
    
    const enKeys = Object.keys(global.translations.en);
    const hiKeys = Object.keys(global.translations.hi);
    const guKeys = Object.keys(global.translations.gu);
    
    let keysMatch = true;
    enKeys.forEach(key => {
        if (!hiKeys.includes(key) || !guKeys.includes(key)) {
            keysMatch = false;
        }
    });
    assert(keysMatch, "All language dictionaries share the exact same translation keys");

    // Test 3: Schemes Database Eligibility Engine
    console.log("\nTesting Government Schemes Matcher...");
    assert(Array.isArray(global.schemesList), "schemesList is loaded as an array");
    
    const farmerScheme = global.schemesList.find(s => s.id === "pmkisan");
    const femaleScheme = global.schemesList.find(s => s.id === "sukanya");
    
    assert(farmerScheme.checkMatch(35, 'any', 'farmer', 100000) === true, "PM-KISAN matches farmers");
    assert(farmerScheme.checkMatch(35, 'any', 'student', 100000) === false, "PM-KISAN rejects non-farmers");
    assert(femaleScheme.checkMatch(5, 'female', 'student', 50000) === true, "Sukanya Samriddhi matches female profile");
    assert(femaleScheme.checkMatch(5, 'any', 'student', 50000) === false, "Sukanya Samriddhi rejects male/any profile");

    // Test 4: Local timeline status updates
    console.log("\nTesting Local State Grievances...");
    assert(global.state.complaints.length > 0, "Default complaints state is populated");
    assert(global.state.complaints[0].timeline.some(step => step.status === "Submitted"), "Timeline contains Submitted state");
}

try {
    loadAndRunTests();
} catch (err) {
    console.error("Test execution threw a critical runtime error:", err);
    failCount++;
}

console.log(`\n==========================================`);
console.log(`🏁 Test run completed: ${passCount} passed, ${failCount} failed.`);
console.log(`==========================================`);

if (failCount > 0) {
    process.exit(1);
} else {
    process.exit(0);
}

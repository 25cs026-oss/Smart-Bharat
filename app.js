// Smart Bharat – App State
const state = {
    language: 'en', // 'en', 'hi', 'gu'
    theme: 'light',
    activeChecklistTab: 'aadhaar',
    complaints: [
        {
            id: "SB-2026-9042",
            type: "road",
            location: "MG Road, Ward 5, Ahmedabad",
            details: "Large potholes causing traffic congestion and safety hazards.",
            date: "2026-07-01",
            timeline: [
                { status: "Submitted", desc: "Complaint successfully filed online", date: "2026-07-01", completed: true },
                { status: "Under Review", desc: "Assigned to Ward Engineer", date: "2026-07-03", completed: true },
                { status: "Forwarded", desc: "Forwarded to Public Works Department (PWD)", date: "2026-07-05", completed: true },
                { status: "Resolved", desc: "Pothole filled and road leveled", date: "2026-07-07", completed: false, active: true }
            ]
        },
        {
            id: "SB-2026-1185",
            type: "water",
            location: "Sector 15, Gandhinagar",
            details: "Contaminated water supply for the past 3 days.",
            date: "2026-07-05",
            timeline: [
                { status: "Submitted", desc: "Grievance received by Municipal Corporation", date: "2026-07-05", completed: true },
                { status: "Under Review", desc: "Water quality sample sent to lab", date: "2026-07-06", completed: true, active: true },
                { status: "Forwarded", desc: "Pending sanitation inspection report", date: "", completed: false },
                { status: "Resolved", desc: "Water line flushed and cleared", date: "", completed: false }
            ]
        }
    ]
};

// Multilingual Translation Database
const translations = {
    en: {
        title: "Smart Bharat",
        subtitle: "AI-Powered Civic Companion",
        heroBadge: "Government of India Citizen Sandbox",
        heroTitle: "Empowering Citizens via <span>GenAI Assistance</span>",
        heroSubtitle: "Understand government services, draft administrative grievances, find required documents, and track issues in your local language.",
        
        // AI Assistant
        assistantTitle: "Smart AI Civic Assistant",
        assistantPlaceholder: "Ask anything (e.g., 'How do I update Aadhaar?' or 'Report broken road')",
        suggestedPrompts: "Suggested Prompts",
        prompt1: "How to update Aadhaar address?",
        prompt2: "What is needed for Passport?",
        prompt3: "Where to report broken street lights?",
        prompt4: "Is my income eligible for Ayushman Bharat?",
        prompt5: "What are the benefits of PM-KISAN?",
        prompt6: "How to open Sukanya Samriddhi account?",
        aiResponseTitle: "AI Companion Response",
        
        // Services
        servicesTitle: "Government Service Finder",
        aadhaarName: "Aadhaar Services",
        aadhaarDesc: "Update address, phone number, lock biometrics, or download e-Aadhaar.",
        grievanceName: "Public Grievance (CPGRAMS)",
        grievanceDesc: "Lodge complaints directly to Central/State Ministries & Departments.",
        consumerName: "Consumer Helpline",
        consumerDesc: "File cases against unfair trade practices, defective products, or service issues.",
        certificateName: "Certificates & Documents",
        certificateDesc: "Apply for Birth, Death, Income, Caste, or Marriage certificates.",

        // Complaint Generator
        generatorTitle: "Civic Grievance Draft Generator",
        issueTypeLabel: "Select Issue Category",
        issueRoad: "Roads & Potholes",
        issueWater: "Water Supply & Sewage",
        issueWaste: "Garbage & Sanitation",
        issueLight: "Street Light Outage",
        issueOther: "Other Administrative Grievances",
        locationLabel: "Specify Location / Address",
        locationPlaceholder: "e.g., Ward 4, Shastri Nagar, Metro Station Road",
        detailsLabel: "Describe the Issue",
        detailsPlaceholder: "Write specific details (e.g., water leakage near school, pothole since 2 weeks)",
        generateBtn: "Generate Formal Complaint Draft",
        draftHeaderTitle: "Generated Formal Draft",
        copyBtn: "Copy Text",
        copied: "Copied!",
        draftHint: "Note: You can copy this draft and submit it directly to your local municipal portal or CPGRAMS.",

        // Schemes Explorer
        schemesTitle: "Government Schemes Explorer",
        matcherTitle: "Personalized Scheme Matcher",
        lblMatchAge: "Age (Years)",
        lblMatchGender: "Gender",
        lblMatchProfession: "Profession",
        lblMatchIncome: "Annual Income (₹)",
        btnMatchSchemes: "Find Matching Schemes",
        genderAny: "Any / Male",
        genderFemale: "Female Only",
        profFarmer: "Farmer (Kisan)",
        profStudent: "Student",
        profUnemployed: "Unemployed / Rural",
        profBusiness: "Self-Employed / Business",
        btnApply: "Apply Guide",
        eligibilityLabel: "Eligibility: ",
        benefitLabel: "Benefit: ",

        // Complaint Tracker
        trackerTitle: "Civic Grievance Tracker",
        trackerPlaceholder: "Enter Complaint ID (e.g. SB-2026-9042)",
        trackBtn: "Track",
        invalidId: "Grievance ID not found. Try SB-2026-9042 or register a new issue.",
        createTrackBtn: "Register & Track in Demo",
        timelineSubmitted: "Submitted",
        timelineReview: "Under Review",
        timelineForwarded: "Forwarded",
        timelineResolved: "Resolved",
        complaintDate: "Filed on",
        recentGrievancesLabel: "Quick Select:",

        // Document Checklist
        checklistTitle: "Document Checklist Assistant",
        checklistTabAadhaar: "Aadhaar Card",
        checklistTabPassport: "Passport",
        checklistTabBirth: "Birth Cert.",
        checklistTabPAN: "PAN Card",
        checklistHeader: "Required Documents for Application / Update",

        // Info Links
        linksTitle: "Official Citizen Portals",
        linkAadhaar: "UIDAI (Aadhaar)",
        linkCPGRAMS: "CPGRAMS Grievance",
        linkNCDRC: "National Consumer Helpline",
        linkDigiLocker: "DigiLocker Portal",
        linkServicePlus: "ServicePlus (State Services)",
        linkNVSP: "Voter Services Portal (NVSP)",

        // Footer
        footerText: "© 2026 Smart Bharat. Developed for Indian Citizens under Digital India Sandbox. Frontend prototype first.",
        footerPrivacy: "Privacy Policy",
        footerTerms: "Terms of Service"
    },
    hi: {
        title: "स्मार्ट भारत",
        subtitle: "एआई-संचालित नागरिक सहायक",
        heroBadge: "भारत सरकार नागरिक सैंडबॉक्स",
        heroTitle: "<span>जेनएआई सहायता</span> द्वारा नागरिकों का सशक्तिकरण",
        heroSubtitle: "सरकारी सेवाओं को समझें, प्रशासनिक शिकायतें तैयार करें, आवश्यक दस्तावेज ढूंढें और अपनी स्थानीय भाषा में समस्याओं को ट्रैक करें।",
        
        // AI Assistant
        assistantTitle: "स्मार्ट एआई नागरिक सहायक",
        assistantPlaceholder: "कुछ भी पूछें (जैसे, 'आधार कैसे अपडेट करें?' या 'टूटी सड़क की शिकायत')",
        suggestedPrompts: "सुझाए गए प्रश्न",
        prompt1: "आधार कार्ड का पता कैसे बदलें?",
        prompt2: "पासपोर्ट के लिए क्या चाहिए?",
        prompt3: "सड़क की बत्ती खराब होने पर कहां रिपोर्ट करें?",
        prompt4: "क्या मेरी आय आयुष्मान भारत के लिए योग्य है?",
        prompt5: "पीएम-किसान के क्या लाभ हैं?",
        prompt6: "सुकन्या समृद्धि खाता कैसे खोलें?",
        aiResponseTitle: "एआई सहायक की प्रतिक्रिया",
        
        // Services
        servicesTitle: "सरकारी सेवा खोजक",
        aadhaarName: "आधार सेवाएं",
        aadhaarDesc: "पता, फोन नंबर अपडेट करें, बायोमेट्रिक्स लॉक करें या ई-आधार डाउनलोड करें।",
        grievanceName: "लोक शिकायत (CPGRAMS)",
        grievanceDesc: "सीधे केंद्रीय/राज्य मंत्रालयों और विभागों में शिकायत दर्ज करें।",
        consumerName: "उपभोक्ता हेल्पलाइन",
        consumerDesc: "अनुचित व्यापार प्रथाओं, दोषपूर्ण उत्पादों या सेवा समस्याओं के खिलाफ मामले दर्ज करें।",
        certificateName: "प्रमाण पत्र और दस्तावेज",
        certificateDesc: "जन्म, मृत्यु, आय, जाति या विवाह प्रमाण पत्र के लिए आवेदन करें।",

        // Complaint Generator
        generatorTitle: "नागरिक शिकायत ड्राफ्ट जनरेटर",
        issueTypeLabel: "समस्या श्रेणी का चयन करें",
        issueRoad: "सड़कें और गड्ढे",
        issueWater: "पानी की आपूर्ति और सीवेज",
        issueWaste: "कचरा और स्वच्छता",
        issueLight: "स्ट्रीट लाइट खराब होना",
        issueOther: "अन्य प्रशासनिक शिकायतें",
        locationLabel: "स्थान / पता निर्दिष्ट करें",
        locationPlaceholder: "जैसे, वार्ड 4, शास्त्री नगर, मेट्रो स्टेशन रोड",
        detailsLabel: "समस्या का वर्णन करें",
        detailsPlaceholder: "विशिष्ट विवरण लिखें (जैसे, स्कूल के पास पानी का रिसाव, 2 सप्ताह से गड्ढा)",
        generateBtn: "औपचारिक शिकायत ड्राफ्ट तैयार करें",
        draftHeaderTitle: "तैयार किया गया औपचारिक ड्राफ्ट",
        copyBtn: "कॉपी करें",
        copied: "कॉपी हो गया!",
        draftHint: "नोट: आप इस ड्राफ्ट को कॉपी कर सकते हैं और इसे सीधे अपने स्थानीय नगर पालिका पोर्टल या CPGRAMS पर जमा कर सकते हैं।",

        // Schemes Explorer
        schemesTitle: "सरकारी योजना खोजक",
        matcherTitle: "व्यक्तिगत योजना मिलानकर्ता",
        lblMatchAge: "आयु (वर्ष)",
        lblMatchGender: "लिंग",
        lblMatchProfession: "पेशा",
        lblMatchIncome: "वार्षिक आय (₹)",
        btnMatchSchemes: "मिलान योजनाएं खोजें",
        genderAny: "कोई भी / पुरुष",
        genderFemale: "केवल महिला",
        profFarmer: "किसान",
        profStudent: "छात्र",
        profUnemployed: "बेरोजगार / ग्रामीण",
        profBusiness: "स्व-नियोजित / व्यवसाय",
        btnApply: "आवेदन गाइड",
        eligibilityLabel: "पात्रता: ",
        benefitLabel: "लाभ: ",

        // Complaint Tracker
        trackerTitle: "नागरिक शिकायत ट्रैकर",
        trackerPlaceholder: "शिकायत आईडी दर्ज करें (जैसे SB-2026-9042)",
        trackBtn: "ट्रैक करें",
        invalidId: "शिकायत आईडी नहीं मिली। SB-2026-9042 आज़माएं या नया पंजीकरण करें।",
        createTrackBtn: "पंजीकृत करें और ट्रैक करें",
        timelineSubmitted: "जमा किया गया",
        timelineReview: "समीक्षा के अधीन",
        timelineForwarded: "अग्रसारित",
        timelineResolved: "समाधान किया गया",
        complaintDate: "दर्ज की तारीख",
        recentGrievancesLabel: "त्वरित चयन:",

        // Document Checklist
        checklistTitle: "दस्तावेज़ चेकलिस्ट सहायक",
        checklistTabAadhaar: "आधार कार्ड",
        checklistTabPassport: "पासपोर्ट",
        checklistTabBirth: "जन्म प्रमाण",
        checklistTabPAN: "पैन कार्ड",
        checklistHeader: "आवेदन / अपडेट के लिए आवश्यक दस्तावेज",

        // Info Links
        linksTitle: "आधिकारिक नागरिक पोर्टल",
        linkAadhaar: "यूआईडीएआई (आधार)",
        linkCPGRAMS: "CPGRAMS शिकायत",
        linkNCDRC: "राष्ट्रीय उपभोक्ता हेल्पलाइन",
        linkDigiLocker: "डिजिलॉकर पोर्टल",
        linkServicePlus: "सर्विसप्लस (राज्य सेवाएं)",
        linkNVSP: "मतदाता सेवा पोर्टल (NVSP)",

        // Footer
        footerText: "© 2026 स्मार्ट भारत। डिजिटल इंडिया सैंडबॉक्स के तहत भारतीय नागरिकों के लिए विकसित।",
        footerPrivacy: "गोपनीयता नीति",
        footerTerms: "सेवा की शर्तें"
    },
    gu: {
        title: "સ્માર્ટ ભારત",
        subtitle: "એઆઈ-સંચાલિત નાગરિક સહાયક",
        heroBadge: "ભારત સરકાર સિટિઝન સેન્ડબોક્સ",
        heroTitle: "<span>જેનએઆઈ સહાય</span> દ્વારા નાગરિક સશક્તિકરણ",
        heroSubtitle: "સરકારી સેવાઓને સમજો, વહીવટી ફરિયાદોનો ડ્રાફ્ટ બનાવો, જરૂરી દસ્તાવેજો શોધો અને તમારી સ્થાનિક ભાષામાં સમસ્યાઓ ટ્રેક કરો.",
        
        // AI Assistant
        assistantTitle: "સ્માર્ટ એઆઈ નાગરિક સહાયક",
        assistantPlaceholder: "ગમે તે પૂછો (દા.ત., 'આધાર કાર્ડ કેવી રીતે અપડેટ કરવું?' અથવા 'ખરાબ રસ્તાની ફરિયાદ')",
        suggestedPrompts: "સૂચવેલા પ્રશ્નો",
        prompt1: "આધાર કાર્ડમાં સરનામું કેવી રીતે બદલવું?",
        prompt2: "પાસપોર્ટ માટે શું જોઈએ?",
        prompt3: "સ્ટ્રીટ લાઈટ બંધ હોય તો ક્યાં ફરિયાદ કરવી?",
        prompt4: "શું મારી આવક આયુષ્માન ભારત માટે પાત્ર છે?",
        prompt5: "પીએમ-કિસાનના શું ફાયદા છે?",
        prompt6: "સુકન્યા સમૃદ્ધિ ખાતું કેવી રીતે ખોલવું?",
        aiResponseTitle: "એઆઈ સહાયકનો પ્રતિભાવ",
        
        // Services
        servicesTitle: "સરકારી સેવા શોધક",
        aadhaarName: "આધાર સેવાઓ",
        aadhaarDesc: "સરનામું, ફોન નંબર અપડેટ કરો, બાયોમેટ્રિક્સ લોક કરો અથવા ઇ-આધાર ડાઉનલોડ કરો.",
        grievanceName: "જાહેર ફરિયાદ (CPGRAMS)",
        grievanceDesc: "સીધા કેન્દ્રીય/રાજ્ય મંત્રાલયો અને વિભાગોમાં ફરિયાદ નોંધાવો.",
        consumerName: "ગ્રાહક હેલ્પલાઇન",
        consumerDesc: "અયોગ્ય વ્યાપારી પ્રથાઓ, ખામીયુક્ત ઉત્પાદનો અથવા સેવા સમસ્યાઓ સામે કેસ દાખલ કરો.",
        certificateName: "પ્રમાણપત્રો અને દસ્તાવેજો",
        certificateDesc: "જન્મ, મૃત્યુ, આવક, જ્ઞાતિ અથવા લગ્ન પ્રમાણપત્ર માટે અરજી કરો.",

        // Complaint Generator
        generatorTitle: "નાગરિક ફરિયાદ ડ્રાફ્ટ જનરેટર",
        issueTypeLabel: "સમસ્યા શ્રેણી પસંદ કરો",
        issueRoad: "રસ્તાઓ અને ખાડાઓ",
        issueWater: "પાણી પુરવઠો અને ગટર",
        issueWaste: "કચરો અને સ્વચ્છતા",
        issueLight: "સ્ટ્રીટ લાઈટ બંધ હોવી",
        issueOther: "અન્ય વહીવટી ફરિયાદો",
        locationLabel: "સરનામું / સ્થાન સ્પષ્ટ કરો",
        locationPlaceholder: "દા.ત., વોર્ડ 4, શાસ્ત્રી નગર, મેટ્રો સ્ટેશન રોડ",
        detailsLabel: "સમસ્યાનું વર્ણન કરો",
        detailsPlaceholder: "ચોક્કસ વિગતો લખો (દા.ત., શાળા પાસે પાણી લીકેજ, 2 અઠવાડિયાથી ખાડો)",
        generateBtn: "ઔપચારિક ફરિયાદ ડ્રાફ્ટ બનાવો",
        draftHeaderTitle: "તૈયાર કરાયેલ ઔપચારિક ડ્રાફ્ટ",
        copyBtn: "કોપી કરો",
        copied: "કોપી થઈ ગયું!",
        draftHint: "નોંધ: તમે આ ડ્રાફ્ટ કોપી કરી શકો છો અને તેને સીધા તમારા સ્થાનિક મ્યુનિસિપલ પોર્ટલ અથવા CPGRAMS પર સબમિટ કરી શકો છો.",

        // Schemes Explorer
        schemesTitle: "સરકારી યોજના શોધક",
        matcherTitle: "વ્યક્તિગત યોજના મેળવનાર",
        lblMatchAge: "ઉંમર (વર્ષ)",
        lblMatchGender: "લિંગ",
        lblMatchProfession: "વ્યવસાય",
        lblMatchIncome: "વાર્ષિક આવક (₹)",
        btnMatchSchemes: "બંધબેસતી યોજનાઓ શોધો",
        genderAny: "કોઈપણ / પુરુષ",
        genderFemale: "માત્ર મહિલાઓ",
        profFarmer: "ખેડૂત",
        profStudent: "વિદ્યાર્થી",
        profUnemployed: "બેરોજગાર / ગ્રામીણ",
        profBusiness: "સ્વ-રોજગાર / વ્યવસાય",
        btnApply: "અરજી માર્ગદર્શિકા",
        eligibilityLabel: "પાત્રતા: ",
        benefitLabel: "લાભ: ",

        // Complaint Tracker
        trackerTitle: "નાગરિક ફરિયાદ ટ્રેકર",
        trackerPlaceholder: "ફરિયાદ આઈડી દાખલ કરો (દા.ત. SB-2026-9042)",
        trackBtn: "ટ્રેક કરો",
        invalidId: "ફરિયાદ આઈડી મળી નથી. SB-2026-9042 ટ્રાય કરો અથવા નવી ફરિયાદ કરો.",
        createTrackBtn: "નોંધણી કરો અને ટ્રેક કરો",
        timelineSubmitted: "સબમિટ કરેલ",
        timelineReview: "સમીક્ષા હેઠળ",
        timelineForwarded: "આગળ મોકલેલ",
        timelineResolved: "નિરાકરણ થયેલ",
        complaintDate: "નોંધણી તારીખ",
        recentGrievancesLabel: "ઝડપી પસંદગી:",

        // Document Checklist
        checklistTitle: "દસ્તાવેજ ચેકલિસ્ટ સહાયક",
        checklistTabAadhaar: "આધાર કાર્ડ",
        checklistTabPassport: "પાસપોર્ટ",
        checklistTabBirth: "જન્મ પ્રમાણપત્ર",
        checklistTabPAN: "પાન કાર્ડ",
        checklistHeader: "અરજી / અપડેટ માટે જરૂરી દસ્તાવેજો",

        // Info Links
        linksTitle: "સત્તાવાર નાગરિક પોર્ટલ",
        linkAadhaar: "UIDAI (આધાર)",
        linkCPGRAMS: "CPGRAMS ફરિયાદ",
        linkNCDRC: "રાષ્ટ્રીય ગ્રાહક હેલ્પલાઇન",
        linkDigiLocker: "ડિજીલોકર પોર્ટલ",
        linkServicePlus: "સર્વિસપ્લસ (રાજ્ય સેવાઓ)",
        linkNVSP: "મતદાતા સેવા પોર્ટલ (NVSP)",

        // Footer
        footerText: "© 2026 સ્માર્ટ ભારત. ડિજિટલ ઇન્ડિયા સેન્ડબોક્સ હેઠળ ભારતીય નાગરિકો માટે વિકસિત.",
        footerPrivacy: "ગોપનીયતા નીતિ",
        footerTerms: "સેવાની શરતો"
    }
};

// Document Checklist Data
const checklistData = {
    aadhaar: {
        en: [
            "Proof of Identity (PoI) - e.g., Voter ID, Passport, PAN Card, Driving License",
            "Proof of Address (PoA) - e.g., Electricity bill (last 3 months), Water bill, Bank Statement, Passport",
            "Proof of Date of Birth (DoB) - e.g., Birth Certificate, SSC mark sheet, Passport",
            "Mobile number registered with bank accounts for OTP authentication"
        ],
        hi: [
            "पहचान का प्रमाण (PoI) - जैसे, मतदाता पहचान पत्र, पासपोर्ट, पैन कार्ड, ड्राइविंग लाइसेंस",
            "पते का प्रमाण (PoA) - जैसे, बिजली बिल (पिछले 3 महीने), पानी का बिल, बैंक विवरण, पासपोर्ट",
            "जन्म तिथि का प्रमाण (DoB) - जैसे, जन्म प्रमाण पत्र, एसएससी मार्क शीट, पासपोर्ट",
            "ओटीपी प्रमाणीकरण के लिए बैंक खातों के साथ पंजीकृत मोबाइल नंबर"
        ],
        gu: [
            "ઓળખનો પુરાવો (PoI) - દા.ત., મતદાર આઈડી, પાસપોર્ટ, પાન કાર્ડ, ડ્રાઇવિંગ લાયસન્સ",
            "સરનામાંનો પુરાવો (PoA) - દા.ત., વીજળી બિલ (છેલ્લા 3 મહિનાનું), પાણીનું બિલ, બેંક સ્ટેટમેન્ટ, પાસપોર્ટ",
            "જન્મ તારીખનો પુરાવો (DoB) - દા.ત., જન્મ પ્રમાણપત્ર, એસએસસી માર્કશીટ, પાસપોર્ટ",
            "OTP પ્રમાણીકરણ માટે બેંક ખાતા સાથે રજીસ્ટર થયેલ મોબાઈલ નંબર"
        ]
    },
    passport: {
        en: [
            "Proof of Date of Birth (Birth Certificate issued by municipal authority / Matriculation certificate)",
            "Proof of Present Address (Water/Electricity bill, Income Tax assessment order, Voter ID)",
            "Non-ECR category proof (if applicant has passed Matriculation/10th standard or higher)",
            "Photocopy of first and last pages of old passport (only for reissue applications)"
        ],
        hi: [
            "जन्म तिथि का प्रमाण (नगर निगम द्वारा जारी जन्म प्रमाण पत्र / मैट्रिकुलेशन प्रमाण पत्र)",
            "वर्तमान पते का प्रमाण (पानी/बिजली का बिल, आयकर निर्धारण आदेश, मतदाता पहचान पत्र)",
            "गैर-ईसीआर श्रेणी का प्रमाण (यदि आवेदक ने मैट्रिक/10वीं कक्षा या उससे अधिक उत्तीर्ण की है)",
            "पुराने पासपोर्ट के पहले और अंतिम पृष्ठों की फोटोकॉपी (केवल पुनर्जारी आवेदनों के लिए)"
        ],
        gu: [
            "જન્મ તારીખનો પુરાવો (મ્યુનિસિપલ ઓથોરિટી દ્વારા જારી કરાયેલ જન્મ પ્રમાણપત્ર / મેટ્રિક્યુલેશન પ્રમાણપત્ર)",
            "વર્તમાન સરનામાનો પુરાવો (પાણી/વીજળીનું બિલ, આવકવેરા આકારણી ઓર્ડર, મતદાર આઈડી)",
            "બિન-ECR શ્રેણીનો પુરાવો (જો અરજદારે મેટ્રિક/10મું ધોરણ કે તેથી વધુ પાસ કર્યું હોય)",
            "જૂના પાસપોર્ટના પ્રથમ અને છેલ્લા પાનાની ફોટોકોપી (માત્ર ફરીથી જારી કરવા માટેની અરજીઓ માટે)"
        ]
    },
    birth: {
        en: [
            "Informant details (Hospital discharge summary or institutional certificate of birth)",
            "Parent's Identity Proofs (Aadhaar Cards, Voter IDs)",
            "Parent's Marriage Certificate (optional, required in some state jurisdictions)",
            "Affidavit specifying birth details (if applying after 1 year of the birth date)"
        ],
        hi: [
            "सूचना देने वाले का विवरण (अस्पताल डिस्चार्ज सारांश या जन्म का संस्थागत प्रमाण पत्र)",
            "माता-पिता के पहचान प्रमाण (आधार कार्ड, मतदाता पहचान पत्र)",
            "माता-पिता का विवाह प्रमाण पत्र (वैकल्पिक, कुछ राज्य क्षेत्रों में आवश्यक)",
            "जन्म विवरण निर्दिष्ट करने वाला शपथ पत्र (यदि जन्म तिथि के 1 वर्ष के बाद आवेदन कर रहे हैं)"
        ],
        gu: [
            "માહિતી આપનારની વિગતો (હોસ્પિટલ ડિસ્ચાર્જ સમરી અથવા જન્મનું સંસ્થાકીય પ્રમાણપત્ર)",
            "માતા-પિતાના ઓળખ પુરાવા (આધાર કાર્ડ, મતદાર આઈડી)",
            "માતા-પિતાનું લગ્ન પ્રમાણપત્ર (વૈકલ્પિક, કેટલાક રાજ્યોમાં જરૂરી)",
            "જન્મની વિગતો દર્શાવતું સોગંદનામું (જો જન્મ તારીખના 1 વર્ષ પછી અરજી કરો તો)"
        ]
    },
    pan: {
        en: [
            "Proof of Identity (Aadhaar Card, Passport, Voter ID, Ration Card with photo)",
            "Proof of Address (Aadhaar, Passport, Driving License, Post Office passbook)",
            "Proof of Date of Birth (Aadhaar, Birth Certificate, Matriculation certificate)",
            "Two recent passport-sized color photographs (for physical application forms)"
        ],
        hi: [
            "पहचान का प्रमाण (आधार कार्ड, पासपोर्ट, मतदाता पहचान पत्र, फोटोयुक्त राशन कार्ड)",
            "पते का प्रमाण (आधार, पासपोर्ट, ड्राइविंग लाइसेंस, पोस्ट ऑफिस पासबुक)",
            "जन्म तिथि का प्रमाण (आधार, जन्म प्रमाण पत्र, मैट्रिकुलेशन प्रमाण पत्र)",
            "दो हालिया पासपोर्ट आकार के रंगीन फोटो (भौतिक आवेदन पत्रों के लिए)"
        ],
        gu: [
            "ઓળખનો પુરાવો (આધાર કાર્ડ, પાસપોર્ટ, મતદાર આઈડી, ફોટો સાથેનું રેશન કાર્ડ)",
            "સરનામાંનો પુરાવો (આધાર, પાસપોર્ટ, ડ્રાઇવિંગ લાયસન્સ, પોસ્ટ ઓફિસ પાસબુક)",
            "જન્મ તારીખનો પુરાવો (આધાર, જન્મ પ્રમાણપત્ર, મેટ્રિક્યુલેશન પ્રમાણપત્ર)",
            "બે તાજેતરના પાસપોર્ટ સાઇઝના રંગીન ફોટોગ્રાફ્સ (ભૌતિક અરજી ફોર્મ માટે)"
        ]
    }
};

// Government Schemes Local Database
const schemesList = [
    {
        id: "pmkisan",
        name: { en: "PM-KISAN Scheme", hi: "पीएम-किसान योजना", gu: "પીએમ-કિસાન યોજના" },
        desc: { 
            en: "Income support scheme of ₹6,000/year for landholding farmers.",
            hi: "भूमिधारक किसानों के लिए ₹6,000/वर्ष की आय सहायता योजना।",
            gu: "જમીન ધરાવતા ખેડૂતો માટે વાર્ષિક ₹૬,૦૦૦ ની આર્થિક સહાય."
        },
        eligibility: {
            en: "Landholding farmer families, not paying income tax.",
            hi: "भूमिधारक किसान परिवार, जो आयकर नहीं देते हैं।",
            gu: "જમીન ધરાવતા ખેડૂત પરિવારો, જેઓ આવકવેરો ભરતા નથી."
        },
        benefit: {
            en: "₹6,000 per year in 3 equal installments directly to bank accounts.",
            hi: "बैंक खाते में सीधे 3 समान किस्तों में ₹6,000 प्रति वर्ष।",
            gu: "સીધા બેંક ખાતામાં વર્ષે ₹૬,૦૦૦ ના ૩ હપ્તા."
        },
        checkMatch: (age, gender, profession, income) => {
            return profession === 'farmer';
        }
    },
    {
        id: "ayushman",
        name: { en: "Ayushman Bharat (PM-JAY)", hi: "आयुष्मान भारत (PM-JAY)", gu: "આયુષ્માન ભારત (PM-JAY)" },
        desc: {
            en: "Free health cover for secondary and tertiary care hospitalization.",
            hi: "माध्यमिक और तृतीयक देखभाल अस्पताल में भर्ती के लिए मुफ्त स्वास्थ्य कवर।",
            gu: "હોસ્પિટલમાં દાખલ થવા માટે મફત તબીબી સારવાર આરોગ્ય વીમો કવચ."
        },
        eligibility: {
            en: "Low income families, rural households, laborers.",
            hi: "कम आय वाले परिवार, ग्रामीण परिवार, मजदूर।",
            gu: "ઓછી આવક ધરાવતા પરિવારો, ગ્રામીણ પરિવારો, શ્રમિકો."
        },
        benefit: {
            en: "Cashless health cover up to ₹5 Lakh per family per year.",
            hi: "प्रति वर्ष प्रति परिवार ₹5 लाख तक का कैशलेस स्वास्थ्य कवर।",
            gu: "કુટુંબ દીઠ વર્ષે ₹૫ લાખ સુધીની કેશલેસ મફત સારવાર."
        },
        checkMatch: (age, gender, profession, income) => {
            return income <= 250000 || profession === 'unemployed';
        }
    },
    {
        id: "sukanya",
        name: { en: "Sukanya Samriddhi Yojana (SSY)", hi: "सुकन्या समृद्धि योजना (SSY)", gu: "સુકન્યા સમૃદ્ધિ યોજના (SSY)" },
        desc: {
            en: "A girl child savings scheme under 'Beti Bachao Beti Padhao'.",
            hi: "'बेटी बचाओ बेटी पढ़ाओ' के तहत एक बालिका बचत योजना।",
            gu: "બાળકીઓના ઉજ્જવળ ભવિષ્ય માટેની ખાસ નાની બચત યોજના."
        },
        eligibility: {
            en: "Girl child aged 10 years or below. Account opened by guardian.",
            hi: "10 वर्ष या उससे कम उम्र की बालिका। अभिभावक द्वारा खोला गया खाता।",
            gu: "૧૦ વર્ષ કે તેથી ઓછી ઉંમરની બાળકી. વાલી દ્વારા ખોલાવી શકાય."
        },
        benefit: {
            en: "Higher interest rate (approx 8.2%) with tax benefits under 80C.",
            hi: "धारा 80C के तहत कर लाभ के साथ उच्च ब्याज दर (लगभग 8.2%)।",
            gu: "ઊંચો વ્યાજ દર (અંદાજે ૮.૨%) અને 80C હેઠળ આવકવેરા મુક્તિ."
        },
        checkMatch: (age, gender, profession, income) => {
            return gender === 'female';
        }
    },
    {
        id: "jandhan",
        name: { en: "PM Jan Dhan Yojana (PMJDY)", hi: "पीएम जन धन योजना (PMJDY)", gu: "પીએમ જન ધન યોજના (PMJDY)" },
        desc: {
            en: "Zero balance bank accounts with financial services access.",
            hi: "वित्तीय सेवाओं के साथ शून्य शेष बैंक खाते।",
            gu: "નાણાકીય સેવાઓ સાથેનું સરકારી શૂન્ય બેલેન્સ બેંક ખાતું."
        },
        eligibility: {
            en: "Any citizen above 10 years without an existing savings account.",
            hi: "बुनियादी बैंक खाते के बिना 10 वर्ष से अधिक आयु का कोई भी नागरिक।",
            gu: "૧૦ વર્ષથી વધુ ઉંમરના બેઝિક એકાઉન્ટ ન ધરાવતા કોઈપણ નાગરિક."
        },
        benefit: {
            en: "No minimum balance, RuPay debit card, and accidental cover.",
            hi: "कोई न्यूनतम शेष राशि नहीं, रुपे डेबिट कार्ड और दुर्घटना कवर।",
            gu: "કોઈ ન્યૂનતમ બેલેન્સની જરૂરિયાત નહિ, રૂપય ડેબિટ કીર્ડ અને અકસ્માત વીમો."
        },
        checkMatch: (age, gender, profession, income) => {
            return true;
        }
    },
    {
        id: "atalpension",
        name: { en: "Atal Pension Yojana (APY)", hi: "अटल पेंशन योजना (APY)", gu: "અટલ પેન્શન યોજના (APY)" },
        desc: {
            en: "Guaranteed minimum pension scheme for unorganized workers.",
            hi: "असंगठित श्रमिकों के लिए गारंटीकृत न्यूनतम पेंशन योजना।",
            gu: "અસંગઠિત ક્ષેત્રના શ્રમિકો માટે માસિક પેન્શન યોજના."
        },
        eligibility: {
            en: "Citizens aged between 18 and 40 years.",
            hi: "18 से 40 वर्ष के बीच की आयु के नागरिक।",
            gu: "૧૮ થી ૪૦ વર્ષની વચ્ચેની ઉંમર ધરાવતા નાગરિકો."
        },
        benefit: {
            en: "Pension of ₹1,000 to ₹5,000/month after attaining age 60.",
            hi: "60 वर्ष की आयु प्राप्त करने के बाद ₹1,000 से ₹5,000/माह की पेंशन।",
            gu: "૬૦ વર્ષની ઉંમર પછી દર મહિને ₹૧,૦૦એ થી ₹૫,૦૦૦ નું પેન્શન."
        },
        checkMatch: (age, gender, profession, income) => {
            return age >= 18 && age <= 40 && profession !== 'student';
        }
    }
];

// Mock AI Engine Rule Database & Translation Outputs
const aiKeywords = {
    aadhaar: {
        en: `<h3>🤖 Aadhaar Services Guide</h3>
             <p>Aadhaar is a 12-digit unique identity number issued by the UIDAI. Here is how you can manage your Aadhaar services:</p>
             <ul>
                 <li><strong>Address Update:</strong> You can update your address online on the myAadhaar portal using a valid Proof of Address (PoA) document or a Head of Family (HoF) consent.</li>
                 <li><strong>Mobile Number Linking:</strong> To link or update your mobile number/email, you must visit a local Aadhaar Seva Kendra. No documents are required; only biometric verification is done.</li>
                 <li><strong>e-Aadhaar Download:</strong> Securely download your digitally signed Aadhaar from the official UIDAI website using your 12-digit Aadhaar number or 28-digit Enrollment ID.</li>
             </ul>
             <p>👉 Official UIDAI Portal: <a href="https://uidai.gov.in" target="_blank">uidai.gov.in</a></p>`,
        hi: `<h3>🤖 आधार सेवा गाइड</h3>
             <p>आधार यूआईडीएआई द्वारा जारी 12 अंकों की विशिष्ट पहचान संख्या है। यहां बताया गया है कि आप अपनी आधार सेवाओं का प्रबंधन कैसे कर सकते हैं:</p>
             <ul>
                 <li><strong>पता अपडेट:</strong> आप पते के वैध प्रमाण (PoA) दस्तावेज़ या परिवार के मुखिया (HoF) की सहमति का उपयोग करके myAadhaar पोर्टल पर ऑनलाइन अपना पता अपडेट कर सकते हैं।</li>
                 <li><strong>मोबाइल नंबर लिंकिंग:</strong> अपना मोबाइल नंबर/ईमेल जोड़ने या अपडेट करने के लिए, आपको स्थानीय आधार सेवा केंद्र पर जाना होगा। किसी दस्तावेज की आवश्यकता नहीं है; केवल बायोमेट्रिक सत्यापन किया जाता है।</li>
                 <li><strong>ई-आधार डाउनलोड:</strong> अपने 12 अंकों के आधार नंबर या 28 अंकों की नामांकन आईडी का उपयोग करके यूआईडीएआई की आधिकारिक वेबसाइट से अपना डिजिटल हस्ताक्षरित आधार सुरक्षित रूप से डाउनलोड करें।</li>
             </ul>
             <p>👉 आधिकारिक यूआईडीएआई पोर्टल: <a href="https://uidai.gov.in" target="_blank">uidai.gov.in</a></p>`,
        gu: `<h3>🤖 આધાર સેવા માર્ગદર્શિકા</h3>
             <p>આધાર એ UIDAI દ્વારા જારી કરાયેલ 12-આંકડાનો અનન્ય ઓળખ નંબર છે. તમે તમારી આધાર સેવાઓનું સંચાલન કેવી રીતે કરી શકો તે અહીં છે:</p>
             <ul>
                 <li><strong>સરનામું અપડેટ:</strong> તમે માન્ય સરનામાંના પુરાવા (PoA) અથવા પરિવારના વડા (HoF) ની સંમતિનો ઉપયોગ કરીને myAadhaar પોર્ટલ પર ઓનલાઇન સરનામું અપડેટ કરી શકો છો.</li>
                 <li><strong>મોબાઈલ નંબર લિંક કરવો:</strong> તમારો મોબાઈલ નંબર/ઈમેલ લિંક કરવા અથવા અપડેટ કરવા માટે, તમારે સ્થાનિક આધાર સેવા કેન્દ્રની મુલાકાત લેવી પડશે. કોઈ દસ્તાવેજોની જરૂર નથી; માત્ર બાયોમેટ્રિક વેરિફિકેશન કરવામાં આવે છે.</li>
                 <li><strong>ઈ-આધાર ડાઉનલોડ:</strong> તમારા 12-આંકડાના આધાર નંબર અથવા 28-આંકડાના એન્રોલમેન્ટ આઈડીનો ઉપયોગ કરીને UIDAIની સત્તાવાર વેબસાઇટ પરથી તમારું ડિજિટલી સાઇન કરેલ આધાર સુરક્ષિત રીતે ડાઉનલોડ કરો.</li>
             </ul>
             <p>👉 સત્તાવાર UIDAI પોર્ટલ: <a href="https://uidai.gov.in" target="_blank">uidai.gov.in</a></p>`
    },
    passport: {
        en: `<h3>🤖 Passport Application Process</h3>
             <p>Indian passports are issued by the Ministry of External Affairs. Follow these steps to apply:</p>
             <ul>
                 <li><strong>Step 1:</strong> Register on the official Passport Seva Online Portal.</li>
                 <li><strong>Step 2:</strong> Fill in the online form and pay the application fee (approx. ₹1500 for normal service).</li>
                 <li><strong>Step 3:</strong> Book an appointment slot at a Passport Seva Kendra (PSK) or Post Office Passport Seva Kendra (POPSK).</li>
                 <li><strong>Step 4:</strong> Visit the center with original documents (Birth Certificate, Address Proof, Voter ID).</li>
             </ul>
             <p>👉 Passport Seva Portal: <a href="https://www.passportindia.gov.in" target="_blank">passportindia.gov.in</a></p>`,
        hi: `<h3>🤖 पासपोर्ट आवेदन प्रक्रिया</h3>
             <p>भारतीय पासपोर्ट विदेश मंत्रालय द्वारा जारी किए जाते हैं। आवेदन करने के लिए इन चरणों का पालन करें:</p>
             <ul>
                 <li><strong>चरण 1:</strong> आधिकारिक पासपोर्ट सेवा ऑनलाइन पोर्टल पर पंजीकरण करें।</li>
                 <li><strong>चरण 2:</strong> ऑनलाइन फॉर्म भरें और आवेदन शुल्क का भुगतान करें (सामान्य सेवा के लिए लगभग ₹1500)।</li>
                 <li><strong>चरण 3:</strong> पासपोर्ट सेवा केंद्र (PSK) या पोस्ट ऑफिस पासपोर्ट सेवा केंद्र (POPSK) पर अपॉइंटमेंट बुक करें।</li>
                 <li><strong>चरण 4:</strong> मूल दस्तावेजों (जन्म प्रमाण पत्र, पते का प्रमाण, मतदाता पहचान पत्र) के साथ केंद्र पर जाएं।</li>
             </ul>
             <p>👉 पासपोर्ट सेवा पोर्टल: <a href="https://www.passportindia.gov.in" target="_blank">passportindia.gov.in</a></p>`,
        gu: `<h3>🤖 પાસપોર્ટ અરજી પ્રક્રિયા</h3>
             <p>ભારતીય પાસપોર્ટ વિદેશ મંત્રાલય દ્વારા જારી કરવામાં આવે છે. અરજી કરવા માટે આ પગલાં અનુસરો:</p>
             <ul>
                 <li><strong>પગલું 1:</strong> સત્તાવાર પાસપોર્ટ સેવા ઓનલાઇન પોર્ટલ પર નોંધણી કરો.</li>
                 <li><strong>પગલું 2:</strong> ઓનલાઇન ફોર્મ ભરો અને અરજી ફી ચૂકવો (સામાન્ય સેવા માટે અંદાજે ₹૧૫૦૦).</li>
                 <li><strong>પગલું 3:</strong> પાસપોર્ટ સેવા કેન્દ્ર (PSK) અથવા પોસ્ટ ઓફિસ પાસપોર્ટ સેવા કેન્દ્ર (POPSK) પર એપોઇન્ટમેન્ટ બુક કરો.</li>
                 <li><strong>પગલું 4:</strong> અસલ દસ્તાવેજો (જન્મ પ્રમાણપત્ર, સરનામાંનો પુરાવો, મતદાર આઈડી) સાથે કેન્દ્રની મુલાકાત લો.</li>
             </ul>
             <p>👉 પાસપોર્ટ સેવા પોર્ટલ: <a href="https://www.passportindia.gov.in" target="_blank">passportindia.gov.in</a></p>`
    },
    grievance: {
        en: `<h3>🤖 Public Grievance Portal (CPGRAMS)</h3>
             <p>CPGRAMS is an online platform for citizens to lodge grievances regarding service delivery against Central and State government organizations.</p>
             <ul>
                 <li><strong>Who can file:</strong> Any citizen experiencing delays, harassment, or lack of services from government departments.</li>
                 <li><strong>Tracking:</strong> Each grievance is assigned a unique Registration Number that can be monitored online.</li>
                 <li><strong>Redressal:</strong> Departments are expected to resolve complaints within 30 to 45 days. If unsatisfied, citizens can file an appeal.</li>
             </ul>
             <p>💡 Tip: Use our <strong>Grievance Draft Generator</strong> below to construct your complaint letter before posting!</p>
             <p>👉 Lodge Grievance: <a href="https://pgportal.gov.in" target="_blank">pgportal.gov.in</a></p>`,
        hi: `<h3>🤖 लोक शिकायत पोर्टल (CPGRAMS)</h3>
             <p>CPGRAMS नागरिकों के लिए केंद्र और राज्य सरकार के संगठनों के खिलाफ सेवा वितरण के संबंध में शिकायतें दर्ज करने का एक ऑनलाइन मंच है।</p>
             <ul>
                 <li><strong>कौन दर्ज कर सकता है:</strong> सरकारी विभागों से देरी, उत्पीड़न या सेवाओं की कमी का सामना करने वाला कोई भी नागरिक।</li>
                 <li><strong>ट्रैकिंग:</strong> प्रत्येक शिकायत को एक अनूठी पंजीकरण संख्या दी जाती है जिसकी ऑनलाइन निगरानी की जा सकती है।</li>
                 <li><strong>निवारण:</strong> विभागों से 30 से 45 दिनों के भीतर शिकायतों का समाधान करने की उम्मीद की जाती है। असंतुष्ट होने पर नागरिक अपील दायर कर सकते हैं।</li>
             </ul>
             <p>💡 सुझाव: शिकायत पोस्ट करने से पहले अपना शिकायत पत्र तैयार करने के लिए नीचे दिए गए हमारे <strong>शिकायत ड्राफ्ट जनरेटर</strong> का उपयोग करें!</p>
             <p>👉 शिकायत दर्ज करें: <a href="https://pgportal.gov.in" target="_blank">pgportal.gov.in</a></p>`,
        gu: `<h3>🤖 જાહેર ફરિયાદ પોર્ટલ (CPGRAMS)</h3>
             <p>CPGRAMS એ નાગરિકો માટે કેન્દ્ર અને રાજ્ય સરકારની સંસ્થાઓ સામે સેવા વિતરણ અંગે ફરિયાદો નોંધાવવા માટેનું ઓનલાઇન પ્લેટફોર્મ છે.</p>
             <ul>
                 <li><strong>કોણ ફાઇલ કરી શકે:</strong> સરકારી વિભાગો તરફથી વિલંબ, હેરાનગતિ અથવા સેવાઓના અભાવનો અનુભવ કરનાર કોઈપણ નાગરિક.</li>
                 <li><strong>ટ્રેકિંગ:</strong> દરેક ફરિયાદને એક અનન્ય રજીસ્ટ્રેશન નંબર આપવામાં આવે છે જેનું ઓનલાઇન મોનિટરિંગ કરી શકાય છે.</li>
                 <li><strong>નિરાકરણ:</strong> વિભાગો દ્વારા 30 થી 45 દિવસમાં ફરિયાદોનું નિરાકરણ લાવવામાં આવે તેવી અપેક્ષા છે. અસંતોષના કિસ્સામાં નાગરિકો અપીલ દાખલ કરી શકે છે.</li>
             </ul>
             <p>💡 મદદ: સબમિટ કરતા પહેલા તમારો ફરિયાદ પત્ર લખવા માટે નીચેના <strong>ફરિયાદ ડ્રાફ્ટ જનરેટર</strong> નો ઉપયોગ કરો!</p>
             <p>👉 ફરિયાદ નોંધાવો: <a href="https://pgportal.gov.in" target="_blank">pgportal.gov.in</a></p>`
    },
    certificates: {
        en: `<h3>🤖 Certificates & Municipal Documents</h3>
             <p>Most state-level certificates can be applied for online via the ServicePlus network or respective State e-District portals.</p>
             <ul>
                 <li><strong>Birth Certificate:</strong> Must be registered with the local registrar within 21 days of birth. Subsequent applications require an executive magistrate affidavit.</li>
                 <li><strong>Income Certificate:</strong> Used for scholarship eligibility, subsidies, or tax concessions. Verified by the Circle Officer or Tehsildar.</li>
                 <li><strong>Caste Certificate:</strong> Confirms reservation category. Requires ancestral community residence proof and a lineage declaration.</li>
             </ul>
             <p>👉 Centralized Application Portal: <a href="https://serviceonline.gov.in" target="_blank">serviceonline.gov.in</a></p>`,
        hi: `<h3>🤖 प्रमाण पत्र और नगर पालिका दस्तावेज</h3>
             <p>अधिकांश राज्य-स्तरीय प्रमाण पत्रों के लिए सर्विसप्लस नेटवर्क या संबंधित राज्य ई-डिस्ट्रिक्ट पोर्टल के माध्यम से ऑनलाइन आवेदन किया जा सकता है।</p>
             <ul>
                 <li><strong>जन्म प्रमाण पत्र:</strong> जन्म के 21 दिनों के भीतर स्थानीय रजिस्ट्रार के पास पंजीकृत होना चाहिए। बाद के आवेदनों के लिए एक कार्यकारी मजिस्ट्रेट के शपथ पत्र की आवश्यकता होती है।</li>
                 <li><strong>आय प्रमाण पत्र:</strong> छात्रवृत्ति पात्रता, सब्सिडी या कर रियायतों के लिए उपयोग किया जाता है। सर्कल अधिकारी या तहसीलदार द्वारा सत्यापित।</li>
                 <li><strong>जाति प्रमाण पत्र:</strong> आरक्षण श्रेणी की पुष्टि करता है। पैतृक समुदाय निवास प्रमाण और वंशावली घोषणा की आवश्यकता होती है।</li>
             </ul>
             <p>👉 केंद्रीकृत आवेदन पोर्टल: <a href="https://serviceonline.gov.in" target="_blank">serviceonline.gov.in</a></p>`,
        gu: `<h3>🤖 પ્રમાણપત્રો અને સ્થાનિક દસ્તાવેજો</h3>
             <p>મોટાભાગના રાજ્ય-સ્તરના પ્રમાણપત્રો માટે સર્વિસપ્લસ નેટવર્ક અથવા સંબંધિત રાજ્ય ઇ-ડિસ્ટ્રિક્ટ પોર્ટલ દ્વારા ઓનલાઇન અરજી કરી શકાય છે.</p>
             <ul>
                 <li><strong>જન્મ પ્રમાણપત્ર:</strong> જન્મના 21 દિવસની અંદર સ્થાનિક રજિસ્ટ્રાર પાસે નોંધણી કરાવવી આવશ્યક છે. મોડા રજીસ્ટ્રેશન માટે એક્ઝિક્યુટિવ મેજિસ્ટ્રેટના સોગંદનામાની જરૂર પડે છે.</li>
                 <li><strong>આવકનું પ્રમાણપત્ર:</strong> શિષ્યવૃત્તિ, સબસિડી અથવા ટેક્સ છૂટ માટે વપરાય છે. સર્કલ ઓફિસર અથવા મામલતદાર દ્વારા ચકાસણી થાય છે.</li>
                 <li><strong>જ્ઞાતિ પ્રમાણપત્ર:</strong> અનામત કેટેગરીની પુષ્ટિ કરે છે. પૂર્વજોના નિવાસ પુરાવા અને વંશાવળીની જાહેરાત જરૂરી છે.</li>
             </ul>
             <p>👉 કેન્દ્રિય અરજી પોર્ટલ: <a href="https://serviceonline.gov.in" target="_blank">serviceonline.gov.in</a></p>`
    },
    pan: {
        en: `<h3>🤖 PAN Card Assistance</h3>
             <p>Permanent Account Number (PAN) is a ten-character alphanumeric identifier issued by the Income Tax Department.</p>
             <ul>
                 <li><strong>Instant e-PAN:</strong> If you have an Aadhaar card with a linked mobile number, you can generate a free e-PAN within 10 minutes on the Income Tax e-filing portal.</li>
                 <li><strong>Physical PAN Card:</strong> Apply via NSDL (Protean) or UTITSL websites. Fee is approx. ₹107 for dispatch within India.</li>
                 <li><strong>Correction:</strong> To update name, DOB, or photograph, apply under the 'Changes/Correction in PAN Data' category.</li>
             </ul>
             <p>👉 Income Tax E-Filing (e-PAN): <a href="https://www.incometax.gov.in" target="_blank">incometax.gov.in</a></p>`,
        hi: `<h3>🤖 पैन कार्ड सहायता</h3>
             <p>स्थायी खाता संख्या (पैन) आयकर विभाग द्वारा जारी किया जाने वाला दस-अक्षरों का अल्फान्यूमेरिक पहचानकर्ता है।</p>
             <ul>
                 <li><strong>त्वरित ई-पैन:</strong> यदि आपके पास लिंक किए गए मोबाइल नंबर के साथ आधार कार्ड है, तो आप आयकर ई-फाइलिंग पोर्टल पर 10 मिनट के भीतर मुफ्त ई-पैन जनरेट कर सकते हैं।</li>
                 <li><strong>भौतिक पैन कार्ड:</strong> एनएसडीएल (प्रोटीन) या यूटीआईटीएसएल वेबसाइटों के माध्यम से आवेदन करें। भारत में भेजने के लिए शुल्क लगभग ₹107 है।</li>
                 <li><strong>सुधार:</strong> नाम, जन्म तिथि या फोटो को अपडेट करने के लिए, 'पैन डेटा में परिवर्तन/सुधार' श्रेणी के तहत आवेदन करें।</li>
             </ul>
             <p>👉 आयकर ई-फाइलिंग (e-PAN): <a href="https://www.incometax.gov.in" target="_blank">incometax.gov.in</a></p>`,
        gu: `<h3>🤖 પાન કાર્ડ સહાય</h3>
             <p>પરમેનન્ટ એકાઉન્ટ નંબર (PAN) એ આવકવેરા વિભાગ દ્વારા જારી કરવામાં આવતો દસ-અક્ષરનો આલ્ફાન્યૂમેરિક નંબર છે.</p>
             <ul>
                 <li><strong>ઇન્સ્ટન્ટ ઇ-પાન:</strong> જો તમારી પાસે લિંક કરેલા મોબાઇલ નંબર સાથે આધાર કાર્ડ હોય, તો તમે આવકવેરા ઇ-ફાઇલિંગ પોર્ટલ પર ૧૦ મિનિટમાં મફત ઇ-પાન મેળવી શકો છો.</li>
                 <li><strong>ભૌતિક પાન કાર્ડ:</strong> NSDL (Protean) અથવા UTITSL વેબસાઇટ્સ દ્વારા અરજી કરો. ભારતમાં ડિલિવરી માટે ફી આશરે ₹107 છે.</li>
                 <li><strong>સુધારણા:</strong> નામ, જન્મ તારીખ અથવા ફોટોગ્રાફ અપડેટ કરવા માટે, 'PAN ડેટામાં ફેરફાર/સુધારા' કેટેગરી હેઠળ અરજી કરો.</li>
             </ul>
             <p>👉 આવકવેરા ઇ-ફાઇલિંગ (e-PAN): <a href="https://www.incometax.gov.in" target="_blank">incometax.gov.in</a></p>`
    },
    ration: {
        en: `<h3>🤖 Ration Card Services</h3>
             <p>Ration Cards are state-issued documents under the National Food Security Act (NFSA) for purchasing subsidized food grains.</p>
             <ul>
                 <li><strong>Eligibility check:</strong> Depends on family income and socio-economic category (APL, BPL, AAY).</li>
                 <li><strong>One Nation One Ration Card (ONORC):</strong> Migrant beneficiaries can purchase food grains from any Fair Price Shop across India using their existing card.</li>
                 <li><strong>Add/Remove Members:</strong> Apply online on your state's Food & Civil Supplies portal with Birth Certificate (for new child) or Marriage Certificate (for spouse).</li>
             </ul>
             <p>👉 National Food Security Portal: <a href="https://nfsa.gov.in" target="_blank">nfsa.gov.in</a></p>`,
        hi: `<h3>🤖 राशन कार्ड सेवाएं</h3>
             <p>राशन कार्ड राष्ट्रीय खाद्य सुरक्षा अधिनियम (NFSA) के तहत रियायती खाद्यान्न खरीदने के लिए राज्य द्वारा जारी किए गए दस्तावेज हैं।</p>
             <ul>
                 <li><strong>पात्रता जांच:</strong> यह पारिवारिक आय और सामाजिक-आर्थिक श्रेणी (एपीएल, बीपीएल, एएवाई) पर निर्भर करता है।</li>
                 <li><strong>वन नेशन वन राशन कार्ड (ONORC):</strong> प्रवासी लाभार्थी अपने मौजूदा कार्ड का उपयोग करके पूरे भारत में किसी भी राशन की दुकान से खाद्यान्न खरीद सकते हैं।</li>
                 <li><strong>सदस्यों को जोड़ना/हटाना:</strong> नए बच्चे के लिए जन्म प्रमाण पत्र या जीवनसाथी के लिए विवाह प्रमाण पत्र के साथ अपने राज्य के खाद्य और नागरिक आपूर्ति पोर्टल पर ऑनलाइन आवेदन करें।</li>
             </ul>
             <p>👉 राष्ट्रीय खाद्य सुरक्षा पोर्टल: <a href="https://nfsa.gov.in" target="_blank">nfsa.gov.in</a></p>`,
        gu: `<h3>🤖 રેશન કાર્ડ સેવાઓ</h3>
             <p>રેશન કાર્ડ એ સબસિડીવાળું અનાજ ખરીદવા માટે રાષ્ટ્રીય ખાદ્ય સુરક્ષા અધિનિયમ (NFSA) હેઠળ રાજ્ય દ્વારા જારી કરાયેલ દસ્તાવેજ છે.</p>
             <ul>
                 <li><strong>પાત્રતા તપાસ:</strong> કુટુંબની આવક અને સામાજિક-આર્થિક કેટેગરી (APL, BPL, AAY) પર આધાર રાખે છે.</li>
                 <li><strong>વન નેશન વન રેશન કાર્ડ (ONORC):</strong> સ્થળાંતર કરનારા લાભાર્થીઓ ભારતમાં કોઈપણ વાજબી ભાવની દુકાન પરથી અનાજ ખરીદી શકે છે.</li>
                 <li><strong>સભ્યો ઉમેરવા/દૂર કરવા:</strong> નવા બાળક માટે જન્મ પ્રમાણપત્ર અથવા પત્ની માટે લગ્ન પ્રમાણપત્ર સાથે તમારા રાજ્યના અન્ન અને નાગરિક પુરવઠા પોર્ટલ પર ઓનલાઇન અરજી કરો.</li>
             </ul>
             <p>👉 રાષ્ટ્રીય ખાદ્ય સુરક્ષા પોર્ટલ: <a href="https://nfsa.gov.in" target="_blank">nfsa.gov.in</a></p>`
    },
    general: {
        en: `<h3>🤖 Civic Companion Ready</h3>
             <p>Hello! I can help you find official documents, draft grievance letters, guide you through citizen services, and match government schemes.</p>
             <p>Try searching for keywords like <strong>Aadhaar</strong>, <strong>Passport</strong>, <strong>CPGRAMS</strong>, <strong>PAN Card</strong>, <strong>Ration Card</strong>, or schemes like <strong>Ayushman Bharat</strong>, <strong>PM-KISAN</strong>, and <strong>Sukanya Samriddhi</strong>.</p>`,
        hi: `<h3>🤖 नागरिक साथी तैयार है</h3>
             ? <p>नमस्ते! मैं आपको आधिकारिक दस्तावेज़ ढूंढने, शिकायत पत्र तैयार करने, नागरिक सेवाओं में आपका मार्गदर्शन करने और सरकारी योजनाओं का मिलान करने में मदद कर सकता हूँ।</p>
             <p><strong>आधार (Aadhaar)</strong>, <strong>पासपोर्ट (Passport)</strong>, <strong>CPGRAMS</strong>, <strong>पैन कार्ड (PAN Card)</strong>, <strong>राशन कार्ड (Ration Card)</strong>, या योजनाओं जैसे <strong>आयुष्मान भारत</strong>, <strong>पीएम-किसान</strong>, और <strong>सुकन्या समृद्धि</strong> जैसे कीवर्ड खोजने का प्रयास करें।</p>`,
        gu: `<h3>🤖 નાગરિક સાથી તૈયાર છે</h3>
             <p>નમસ્તે! હું તમને સત્તાવાર દસ્તાવેજો શોધવામાં, ફરિયાદ પત્રો લખવામાં, નાગરિક સેવાઓ વિશે માર્ગદર્શન મેળવવામાં અને સરકારી યોજનાઓ શોધવામાં મદદ કરી શકું છું.</p>
             <p><strong>આધાર (Aadhaar)</strong>, <strong>પાસપોર્ટ (Passport)</strong>, <strong>CPGRAMS</strong>, <strong>પાન કાર્ડ (PAN Card)</strong>, <strong>રેશન કાર્ડ (Ration Card)</strong>, અથવા યોજનાઓ જેવી કે <strong>આયુષ્માન ભારત</strong>, <strong>પીએમ-કિસાન</strong>, અને <strong>સુકન્યા સમૃદ્ધિ</strong> જેવા કીવર્ડ્સ સર્ચ કરો.</p>`
    },
    ayushman: {
        en: `<h3>🤖 Ayushman Bharat (PM-JAY) Guide</h3>
             <p>Pradhan Mantri Jan Arogya Yojana (PM-JAY) is the largest health assurance scheme in the world.</p>
             <ul>
                 <li><strong>Benefit:</strong> Free health insurance cover of up to ₹5 Lakh per family per year for secondary and tertiary care hospitalization.</li>
                 <li><strong>Eligibility:</strong> Families listed in the SECC database (mostly low-income households, landless laborers, and occupational categories).</li>
                 <li><strong>How to apply:</strong> Check your name on the PM-JAY website or visit any empaneled government/private hospital with your Ration Card or Aadhaar Card to generate your Golden Card.</li>
             </ul>
             <p>👉 Official Health Portal: <a href="https://pmjay.gov.in" target="_blank">pmjay.gov.in</a></p>`,
        hi: `<h3>🤖 आयुष्मान भारत (PM-JAY) गाइड</h3>
             <p>प्रधानमंत्री जन आरोग्य योजना (PM-JAY) दुनिया की सबसे बड़ी स्वास्थ्य आश्वासन योजना है।</p>
             <ul>
                 <li><strong>लाभ:</strong> माध्यमिक और तृतीयक देखभाल अस्पताल में भर्ती के लिए प्रति परिवार प्रति वर्ष ₹5 लाख तक का मुफ्त स्वास्थ्य बीमा कवर।</li>
                 <li><strong>पात्रता:</strong> एसईसीसी डेटाबेस में सूचीबद्ध परिवार (मुख्य रूप से कम आय वाले परिवार, भूमिहीन मजदूर और व्यावसायिक श्रेणियां)।</li>
                 <li><strong>आवेदन कैसे करें:</strong> पीएम-जेएवाई वेबसाइट पर अपना नाम जांचें या अपना गोल्डन कार्ड बनाने के लिए राशन कार्ड या आधार कार्ड के साथ किसी भी सूचीबद्ध सरकारी/निजी अस्पताल में जाएं।</li>
             </ul>
             <p>👉 आधिकारिक स्वास्थ्य पोर्टल: <a href="https://pmjay.gov.in" target="_blank">pmjay.gov.in</a></p>`,
        gu: `<h3>🤖 આયુષ્માન ભારત (PM-JAY) માર્ગદર્શિકા</h3>
             <p>પ્રધાનમંત્રી જન આરોગ્ય યોજના (PM-JAY) એ વિશ્વની સૌથી મોટી આરોગ્ય વીમા યોજના છે.</p>
             <ul>
                 <li><strong>લાભ:</strong> હોસ્પિટલમાં દાખલ થવા માટે પ્રતિ પરિવાર પ્રતિ વર્ષ ₹5 લાખ સુધીનું મફત આરોગ્ય વીમા કવચ.</li>
                 <li><strong>પાત્રતા:</strong> SECC ડેટાબેઝમાં નોંધાયેલ પરિવારો (મુખ્યત્વે ઓછી આવક ધરાવતા પરિવારો અને શ્રમિકો).</li>
                 <li><strong>કેવી રીતે અરજી કરવી:</strong> PM-JAY વેબસાઇટ પર તમારું નામ તપાસો અથવા તમારું ગોલ્ડન કાર્ડ બનાવવા માટે રેશન કાર્ડ અથવા આધાર કાર્ડ સાથે કોઈપણ સરકારી/ખાનગી હોસ્પિટલની મુલાકાત લો.</li>
             </ul>
             <p>👉 સત્તાવાર હેલ્થ પોર્ટલ: <a href="https://pmjay.gov.in" target="_blank">pmjay.gov.in</a></p>`
    },
    pmkisan: {
        en: `<h3>🤖 PM-KISAN Scheme Guide</h3>
             <p>Pradhan Mantri Kisan Samman Nidhi is a central sector scheme providing income support to landholding farmers.</p>
             <ul>
                 <li><strong>Benefit:</strong> A financial benefit of ₹6,000 per year is provided in three equal installments of ₹2,000 directly into the bank accounts.</li>
                 <li><strong>Eligibility:</strong> All landholding farmer families (subject to certain exclusion criteria like institutional landholders, income tax payers, retired pensioners receiving >₹10,000/month).</li>
                 <li><strong>How to apply:</strong> Register on the PM-KISAN portal under 'New Farmer Registration' using Aadhaar, Land Record Documents, and Bank Passbook.</li>
             </ul>
             <p>👉 Official Farmer Portal: <a href="https://pmkisan.gov.in" target="_blank">pmkisan.gov.in</a></p>`,
        hi: `<h3>🤖 पीएम-किसान योजना गाइड</h3>
             <p>प्रधानमंत्री किसान सम्मान निधि एक केंद्रीय योजना है जो भूमि धारक किसानों को आय सहायता प्रदान करती है।</p>
             <ul>
                 <li><strong>लाभ:</strong> सीधे बैंक खातों में ₹2,000 की तीन समान किस्तों में प्रति वर्ष ₹6,000 का वित्तीय लाभ प्रदान किया जाता है।</li>
                 <li><strong>पात्रता:</strong> सभी भूमि धारक किसान परिवार (कुछ अपवर्जन मानदंडों को छोड़कर जैसे संस्थागत भूमि धारक, आयकर दाता, सेवानिवृत्त पेंशनभोगी)।</li>
                 <li><strong>आवेदन कैसे करें:</strong> आधार, भूमि रिकॉर्ड दस्तावेज और बैंक पासबुक का उपयोग करके पीएम-किसान पोर्टल पर 'न्यू फार्मर रजिस्ट्रेशन' के तहत पंजीकरण करें।</li>
             </ul>
             <p>👉 आधिकारिक किसान पोर्टल: <a href="https://pmkisan.gov.in" target="_blank">pmkisan.gov.in</a></p>`,
        gu: `<h3>🤖 પીએમ-કિસાન યોજના માર્ગદર્શિકા</h3>
             <p>પ્રધાનમંત્રી કિસાન સન્માન નિધિ એ જમીન ધરાવતા ખેડૂતોને આર્થિક સહાય પૂરી પાડવા માટેની યોજના છે.</p>
             <ul>
                 <li><strong>લાભ:</strong> વાર્ષિક ₹6,000 ની આર્થિક સહાય સીધી બેંક ખાતામાં ₹2,000 ના ત્રણ સમાન હપ્તામાં જમા કરવામાં આવે છે.</li>
                 <li><strong>પાત્રતા:</strong> તમામ જમીન ધરાવતા ખેડૂત પરિવારો (કેટલીક બાકાત શ્રેણીઓ સિવાય, જેમ કે સરકારી કર્મચારીઓ અને કરદાતાઓ).</li>
                 <li><strong>કેવી રીતે અરજી કરવી:</strong> આધાર કાર્ડ, જમીન દસ્તાવેજો અને બેંક પાસબુક સાથે PM-KISAN પોર્ટલ પર 'નવા ખેડૂત નોંધણી' હેઠળ ઓનલાઇન અરજી કરો.</li>
             </ul>
             <p>👉 સત્તાવાર ખેડૂત પોર્ટલ: <a href="https://pmkisan.gov.in" target="_blank">pmkisan.gov.in</a></p>`
    },
    sukanya: {
        en: `<h3>🤖 Sukanya Samriddhi Yojana (SSY)</h3>
             <p>A girl child prosperity savings scheme launched under the 'Beti Bachao Beti Padhao' campaign.</p>
             <ul>
                 <li><strong>Benefit:</strong> Higher interest rate (compounded annually), tax tax exemption under Section 80C, and maturity lock-in for the girl child's future.</li>
                 <li><strong>Eligibility:</strong> Can be opened by a parent/guardian for a girl child aged 10 years or below. Only two accounts per family allowed.</li>
                 <li><strong>How to apply:</strong> Open the account at any local Post Office or authorized commercial bank branch with the Girl Child's Birth Certificate and Guardian's KYC.</li>
             </ul>
             <p>👉 Post Office Savings Schemes: <a href="https://www.indiapost.gov.in" target="_blank">indiapost.gov.in</a></p>`,
        hi: `<h3>🤖 सुकन्या समृद्धि योजना (SSY)</h3>
             <p>'बेटी बचाओ बेटी पढ़ाओ' अभियान के तहत शुरू की गई एक कन्या समृद्धि बचत योजना।</p>
             <ul>
                 <li><strong>लाभ:</strong> उच्च ब्याज दर (वार्षिक चक्रवृद्धि), धारा 80C के तहत कर छूट, और लड़की के भविष्य के लिए मैच्योरिटी लॉक-इन।</li>
                 <li><strong>पात्रता:</strong> 10 वर्ष या उससे कम उम्र की लड़की के लिए माता-पिता/अभिभावक द्वारा खोला जा सकता है। प्रति परिवार केवल दो खातों की अनुमति है।</li>
                 <li><strong>आवेदन कैसे करें:</strong> लड़की के जन्म प्रमाण पत्र और अभिभावक के केवाईसी के साथ किसी भी स्थानीय डाकघर या अधिकृत बैंक शाखा में खाता खोलें।</li>
             </ul>
             <p>👉 डाकघर बचत योजनाएं: <a href="https://www.indiapost.gov.in" target="_blank">indiapost.gov.in</a></p>`,
        gu: `<h3>🤖 સુકન્યા સમૃદ્ધિ યોજના (SSY)</h3>
             <p>'બેટી બચાવો બેટી પઢાવો' અભિયાન હેઠળ શરૂ કરાયેલ બચત યોજના.</p>
             <ul>
                 <li><strong>લાભ:</strong> ઊંચો વ્યાજ દર (વાર્ષિક ચક્રવૃદ્ધિ), સેક્શન 80C હેઠળ કરમુક્તિ, અને બાળકીના ભવિષ્ય માટે મેચ્યોરિટી લોક-ઈન.</li>
                 <li><strong>પાત્રતા:</strong> ૧૦ વર્ષ કે તેથી ઓછી ઉંમરની બાળકી માટે માતા-પિતા કે વાલી દ્વારા ખાતું ખોલાવી શકાય છે. પરિવાર દીઠ માત્ર બે ખાતાની છૂટ છે.</li>
                 <li><strong>કેવી રીતે અરજી કરવી:</strong> બાળકીના જન્મના પ્રમાણપત્ર અને વાલીના KYC દસ્તાવેજો સાથે કોઈપણ સ્થાનિક પોસ્ટ ઓફિસ અથવા અધિકૃત બેંક શાખામાં ખાતું ખોલાવો.</li>
             </ul>
             <p>👉 પોસ્ટ ઓફિસ બચત યોજનાઓ: <a href="https://www.indiapost.gov.in" target="_blank">indiapost.gov.in</a></p>`
    },
    jandhan: {
        en: `<h3>🤖 PM Jan Dhan Yojana (PMJDY)</h3>
             <p>National Mission for Financial Inclusion to ensure access to financial services in an affordable manner.</p>
             <ul>
                 <li><strong>Benefit:</strong> Zero balance savings account, free RuPay debit card with ₹2 Lakh accident insurance cover, and ₹10,000 overdraft facility (subject to criteria).</li>
                 <li><strong>Eligibility:</strong> Any Indian citizen aged 10 years or above who does not have a basic savings account.</li>
                 <li><strong>How to apply:</strong> Visit any local bank branch or contact a Bank Mitra (Business Correspondent) with Aadhaar Card or Voter ID.</li>
             </ul>
             <p>👉 PMJDY Official Portal: <a href="https://pmjdy.gov.in" target="_blank">pmjdy.gov.in</a></p>`,
        hi: `<h3>🤖 पीएम जन धन योजना (PMJDY)</h3>
             <p>किफायती तरीके से वित्तीय सेवाओं तक पहुंच सुनिश्चित करने के लिए वित्तीय समावेशन का राष्ट्रीय मिशन।</p>
             <ul>
                 <li><strong>लाभ:</strong> शून्य शेष बचत खाता, ₹2 लाख दुर्घटना बीमा कवर के साथ मुफ्त रूपे डेबिट कार्ड, और ₹10,000 ओवरड्राफ्ट सुविधा (मानदंडों के अधीन)।</li>
                 <li><strong>पात्रता:</strong> 10 वर्ष या उससे अधिक आयु का कोई भी भारतीय नागरिक जिसके पास बुनियादी बचत खाता नहीं है।</li>
                 <li><strong>आवेदन कैसे करें:</strong> आधार कार्ड या मतदाता पहचान पत्र के साथ किसी भी स्थानीय बैंक शाखा में जाएं या बैंक मित्र से संपर्क करें।</li>
             </ul>
             <p>👉 जन धन योजना पोर्टल: <a href="https://pmjdy.gov.in" target="_blank">pmjdy.gov.in</a></p>`,
        gu: `<h3>🤖 પીએમ જન ધન યોજના (PMJDY)</h3>
             <p>નાણાકીય સેવાઓ સરળ અને સસ્તી રીતે પૂરી પાડવા માટેનું રાષ્ટ્રીય મિશન.</p>
             <ul>
                 <li><strong>લાભ:</strong> ઝીરો બેલેન્સ બચત ખાતું, ₹2 લાખના અકસ્માત વીમા કવચ સાથે ફ્રી RuPay ડેબિટ કાર્ડ અને ₹10,000 ઓવરડ્રાફ્ટ સુવિધા.</li>
                 <li><strong>પાત્રતા:</strong> ૧૦ વર્ષ કે તેથી વધુ ઉંમરના કોઈપણ ભારતીય નાગરિક જેમની પાસે બેઝિક સેવિંગ્સ એકાઉન્ટ નથી.</li>
                 <li><strong>કેવી રીતે અરજી કરવી:</strong> આધાર કાર્ડ અથવા મતદાર આઈડી સાથે કોઈપણ સ્થાનિક બેંક શાખાની મુલાકાત લો અથવા બેંક મિત્રનો સંપર્ક કરો.</li>
             </ul>
             <p>👉 PMJDY સત્તાવાર પોર્ટલ: <a href="https://pmjdy.gov.in" target="_blank">pmjdy.gov.in</a></p>`
    },
    schemes: {
        en: `<h3>🤖 Government Schemes Information</h3>
             <p>We matching the following schemes in our local sandbox database:</p>
             <ul>
                 <li><strong>Ayushman Bharat (PM-JAY)</strong> - Health Insurance Cover</li>
                 <li><strong>PM-KISAN</strong> - Income Support for Farmers</li>
                 <li><strong>Sukanya Samriddhi Yojana (SSY)</strong> - Savings for Girl Child</li>
                 <li><strong>PM Jan Dhan Yojana (PMJDY)</strong> - Zero Balance Bank Account</li>
                 <li><strong>Atal Pension Yojana (APY)</strong> - Pension for Unorganized Sector</li>
             </ul>
             <p>Use our **Personalized Scheme Matcher** form to calculate matching schemes based on your profile details!</p>`,
        hi: `<h3>🤖 सरकारी योजनाओं की जानकारी</h3>
             <p>हम अपने स्थानीय सैंडबॉक्स डेटाबेस में निम्नलिखित योजनाओं का मिलान करते हैं:</p>
             <ul>
                 <li><strong>आयुष्मान भारत (PM-JAY)</strong> - स्वास्थ्य बीमा कवर</li>
                 <li><strong>पीएम-किसान (PM-KISAN)</strong> - किसानों के लिए आय सहायता</li>
                 <li><strong>सुकन्या समृद्धि योजना (SSY)</strong> - बालिकाओं के लिए बचत</li>
                 <li><strong>पीएम जन धन योजना (PMJDY)</strong> - शून्य शेष बैंक खाता</li>
                 <li><strong>अटल पेंशन योजना (APY)</strong> - असंगठित क्षेत्र के लिए पेंशन</li>
             </ul>
             <p>अपने प्रोफाइल विवरण के आधार पर मिलान योजनाओं की गणना करने के लिए हमारे **व्यक्तिगत योजना मिलानकर्ता** फॉर्म का उपयोग करें!</p>`,
        gu: `<h3>🤖 સરકારી યોજનાઓ માહિતી</h3>
             <p>અમે અમારા સ્થાનિક સેન્ડબોક્સ ડેટાબેઝમાં નીચેની યોજનાઓ મેચ કરીએ છીએ:</p>
             <ul>
                 <li><strong>આયુષ્માન ભારત (PM-JAY)</strong> - હેલ્થ વીમો કવચ</li>
                 <li><strong>પીએમ-કિસાન (PM-KISAN)</strong> - ખેડૂતો માટે આર્થિક સહાય</li>
                 <li><strong>સુકન્યા સમૃદ્ધિ યોજના (SSY)</strong> - બાળકીઓ માટે બચત</li>
                 <li><strong>પીએમ જન ધન યોજના (PMJDY)</strong> - ઝીરો બેલેન્સ બેંક ખાતું</li>
                 <li><strong>અટલ પેન્શન યોજના (APY)</strong> - પેન્શન યોજના</li>
             </ul>
             <p>તમારી પ્રોફાઇલ વિગતોના આધારે યોગ્ય યોજનાઓ શોધવા માટે અમારા **વ્યક્તિગત યોજના મેળવનાર** ફોર્મનો ઉપયોગ કરો!</p>`
    }
};

// Complaint Drafting Templates
const draftTemplates = {
    road: {
        en: (location, details) => 
`To,
The Ward Officer / Municipal Commissioner,
Municipal Corporation.

Subject: Urgent grievance regarding broken road and potholes at ${location}

Respected Sir/Madam,

I am writing to bring to your immediate attention the deplorable condition of the road at ${location}. The stretch has developed significant potholes which pose a severe risk to commuters, school children, and vehicles.

Details of the issue:
${details}

This issue has been causing severe traffic delays and minor accidents over the last few weeks. Despite verbal notifications to local sanitation workers, no action has been taken.

Therefore, I kindly request you to inspect this site and authorize immediate repair work / filling of the potholes before any major accident occurs.

Thanking you.

Yours faithfully,
[Citizen Name]
[Contact Number]`,
        hi: (location, details) =>
`सेवा में,
वार्ड अधिकारी / नगर आयुक्त,
नगर निगम।

विषय: ${location} पर टूटी सड़क और गड्ढों के संबंध में तत्काल शिकायत

आदरणीय महोदय / महोदया,

मैं आपका ध्यान ${location} पर सड़क की जर्जर स्थिति की ओर आकर्षित करने के लिए लिख रहा हूँ। इस खंड में बड़े-बड़े गड्ढे हो गए हैं जो यात्रियों, स्कूली बच्चों और वाहनों के लिए गंभीर खतरा पैदा कर रहे हैं।

समस्या का विवरण:
${details}

यह समस्या पिछले कुछ हफ्तों से यातायात में गंभीर देरी और छोटी दुर्घटनाओं का कारण बन रही है। स्थानीय सफाई कर्मचारियों को मौखिक सूचना के बावजूद कोई कार्रवाई नहीं की गई है।

अतः आपसे अनुरोध है कि कृपया इस स्थल का निरीक्षण करें और कोई बड़ी दुर्घटना होने से पहले गड्ढों को भरने और सड़क मरम्मत कार्य को तुरंत मंजूरी दें।

सधन्यवाद।

भवदीय,
[नागरिक का नाम]
[संपर्क नंबर]`,
        gu: (location, details) =>
`પ્રતિ,
વોર્ડ ઓફિસર / મ્યુનિસિપલ કમિશનર,
મ્યુનિસિપલ કોર્પોરેશન.

વિષય: ${location} ખાતે તૂટેલા રસ્તા અને ખાડાઓ અંગે તાત્કાલિક ફરિયાદ

આદરણીય સાહેબ/મેડમ,

હું આપનું ધ્યાન ${location} ખાતેના રસ્તાની અત્યંત બિસ્માર હાલત તરફ દોરવા માંગું છું. આ વિસ્તારમાં મોટા ખાડાઓ પડી ગયા છે જે વાહનચાલકો, શાળાના બાળકો અને વાહનો માટે ગંભીર જોખમ ઉભું કરે છે.

સમસ્યાની વિગતો:
${details}

આ સમસ્યાને કારણે છેલ્લા કેટલાક અઠવાડિયાથી ટ્રાફિક જામ અને અકસ્માતો થઈ રહ્યા છે. સ્થાનિક સફાઈ કર્મચારીઓને મૌખિક રજૂઆત કરવા છતાં કોઈ કાર્યવાહી કરવામાં આવી નથી.

તેથી, મારી નમ્ર વિનંતી છે કે આપ આ સ્થળની મુલાકાત લો અને કોઈ મોટો અકસ્માત થાય તે પહેલાં ખાડા પુરવા અને રસ્તાના સમારકામની મંજૂરી આપો.

આભાર સહ.

આપનો વિશ્વાસુ,
[નાગરિકનું નામ]
[મોબાઇલ નંબર]`
    },
    water: {
        en: (location, details) =>
`To,
The Executive Engineer,
Water Supply & Sewerage Board.

Subject: Grievance regarding irregular and contaminated water supply at ${location}

Respected Sir/Madam,

I am writing to register an official complaint regarding the drinking water supply at ${location}. For the past few days, the water being supplied is highly contaminated with muddy residue and emits a foul odor.

Details of the issue:
${details}

Drinking this contaminated water is a severe health hazard and has already caused water-borne illnesses in our neighborhood.

We request you to direct the testing of water quality samples from our line and identify/repair the leakage causing contamination as soon as possible.

Thanking you.

Yours faithfully,
[Citizen Name]
[Contact Number]`,
        hi: (location, details) =>
`सेवा में,
अधिशाषी अभियंता,
जल आपूर्ति एवं सीवरेज बोर्ड।

विषय: ${location} पर अनियमित और दूषित पानी की आपूर्ति के संबंध में शिकायत

आदरणीय महोदय / महोदया,

मैं ${location} पर पीने के पानी की आपूर्ति के संबंध में एक आधिकारिक शिकायत दर्ज करने के लिए लिख रहा हूँ। पिछले कुछ दिनों से जो पानी सप्लाई किया जा रहा है, वह मिट्टी के अवशेषों से अत्यधिक दूषित है और दुर्गंध आ रही है।

समस्या का विवरण:
${details}

इस दूषित पानी को पीना स्वास्थ्य के लिए गंभीर खतरा है और इससे हमारे पड़ोस में पहले से ही जल-जनित बीमारियां फैल रही हैं।

हम आपसे अनुरोध करते हैं कि हमारी लाइन से पानी की गुणवत्ता के नमूनों के परीक्षण के निर्देश दें और जल्द से जल्द संदूषण का कारण बनने वाले रिसाव का पता लगाकर मरम्मत करें।

सधन्यवाद।

भवदीय,
[नागरिक का नाम]
[संपर्क नंबर]`,
        gu: (location, details) =>
`પ્રતિ,
કાર્યપાલક ઈજનેર શ્રી,
પાણી પુરવઠા અને ગટર વ્યવસ્થા બોર્ડ.

વિષય: ${location} ખાતે અનિયમિત અને દૂષિત પાણી પુરવઠા અંગે ફરિયાદ

આદરણીય સાહેબ/મેડમ,

હું ${location} ખાતે પીવાના પાણીના પુરવઠા અંગે સત્તાવાર ફરિયાદ નોંધાવવા માટે લખી રહ્યો છું. છેલ્લા કેટલાક દિવસોથી સપ્લાય કરવામાં આવતું પાણી કાદવવાળું છે અને તેમાંથી દુર્ગંધ આવી રહી છે.

સમસ્યાની વિગતો:
${details}

આ દૂષિત પાણી પીવું એ સ્વાસ્થ્ય માટે ગંભીર જોખમ છે અને તેના કારણે અમારા પડોશમાં પાણીજન્ય રોગો ફેલાઈ રહ્યા છે.

અમારી વિનંતી છે કે આપ અમારી લાઇનમાંથી પાણીની ગુણવત્તાના સેમ્પલ ટેસ્ટ કરાવો અને પાણીમાં ગંદકી ભળવા પાછળનું લીકેજ શોધીને તેની વહેલી તકે સમારકામ કરાવો.

આભાર સહ.

આપનો વિશ્વાસુ,
[નાગરિકનું નામ]
[મોબાઇલ નંબર]`
    },
    waste: {
        en: (location, details) =>
`To,
The Chief Sanitary Inspector,
Municipal Corporation Waste Management Division.

Subject: Complaint regarding piled-up garbage and lack of sanitation at ${location}

Respected Sir/Madam,

I am writing to report the irregular collection of garbage and failure of sanitation services at ${location}. A huge heap of waste has accumulated on the roadside, attracting stray animals, flies, and mosquitoes.

Details of the issue:
${details}

The garbage has not been cleared for over a week, leading to an unbearable stench. It poses a major risk of disease outbreak in the area.

Please direct the waste clearance vehicles to clean the spot immediately and ensure regular visits by the sanitation staff.

Thanking you.

Yours faithfully,
[Citizen Name]
[Contact Number]`,
        hi: (location, details) =>
`सेवा में,
मुख्य स्वच्छता निरीक्षक,
नगर निगम अपशिष्ट प्रबंधन प्रभाग।

विषय: ${location} पर कचरे के ढेर और स्वच्छता की कमी के संबंध में शिकायत

आदरणीय महोदय / महोदया,

मैं ${location} पर कचरे के अनियमित संग्रह और स्वच्छता सेवाओं की विफलता की रिपोर्ट करने के लिए लिख रहा हूँ। सड़क के किनारे कचरे का एक बड़ा ढेर जमा हो गया है, जो आवारा पशुओं, मक्खियों और मच्छरों को आकर्षित कर रहा है।

समस्या का विवरण:
${details}

एक सप्ताह से अधिक समय से कचरा नहीं हटाया गया है, जिससे असहनीय दुर्गंध आ रही है। इससे क्षेत्र में बीमारी फैलने का बड़ा खतरा पैदा हो गया है।

कृपया कचरा साफ करने वाले वाहनों को तुरंत स्थल साफ करने का निर्देश दें और स्वच्छता कर्मचारियों की नियमित उपस्थिति सुनिश्चित करें।

सधन्यवाद।

भवदीय,
[नागरिक का नाम]
[संपर्क नंबर]`,
        gu: (location, details) =>
`પ્રતિ,
મુખ્ય સેનિટરી ઇન્સ્પેક્ટર શ્રી,
મ્યુનિસિપલ કોર્પોરેશન વેસ્ટ મેનેજમેન્ટ વિભાગ.

વિષય: ${location} ખાતે કચરાના ઢગલા અને સફાઈના અભાવ અંગે ફરિયાદ

આદરણીય સાહેબ/મેડમ,

હું ${location} ખાતે કચરો એકઠો કરવાની અનિયમિતતા અને સફાઈ સેવાઓની નિષ્ફળતા અંગે રિપોર્ટ કરવા લખી રહ્યો છું. રસ્તાની બાજુમાં કચરાનો મોટો ઢગલો જમા થયો છે, જેના કારણે રખડતા પશુઓ, માખીઓ અને મચ્છરોનો ત્રાસ વધ્યો છે.

સમસ્યાની વિગતો:
${details}

એક અઠવાડિયાથી વધુ સમયથી કચરો સાફ કરવામાં આવ્યો નથી, જેના કારણે અસહ્ય દુર્ગંધ આવી રહી છે. તેનાથી રોગચાળો ફેલાવાનું ગંભીર જોખમ ઊભું થયું છે.

મહેરબાની કરીને કચરો ઉપાડતા વાહનોને આ સ્થળ તાત્કાલિક સાફ કરવા સૂચના આપો અને નિયમિત સફાઈ કામદારો આવે તેની ખાતરી કરો.

આભાર સહ.

આપનો વિશ્વાસુ,
[નાગરિકનું નામ]
[મોબાઇલ નંબર]`
    },
    light: {
        en: (location, details) =>
`To,
The Electrical Engineer (Public Lighting Department),
Municipal Corporation / Electricity Board.

Subject: Non-functional street lights causing safety concerns at ${location}

Respected Sir/Madam,

I wish to report that multiple street lights at ${location} have been non-functional for several days, leaving the entire stretch in complete darkness during the night.

Details of the issue:
${details}

This dark stretch has turned into a safety concern, particularly for women, senior citizens, and children. It also increases the risk of road accidents and minor thefts.

I request you to replace the failed bulbs/chokes or repair the underlying cable fault as a priority.

Thanking you.

Yours faithfully,
[Citizen Name]
[Contact Number]`,
        hi: (location, details) =>
`सेवा में,
विद्युत अभियंता (सार्वजनिक प्रकाश विभाग),
नगर निगम / विद्युत बोर्ड।

विषय: ${location} पर स्ट्रीट लाइटें बंद होने से सुरक्षा संबंधी चिंताएं

आदरणीय महोदय / महोदया,

मैं रिपोर्ट करना चाहता हूँ कि ${location} पर कई स्ट्रीट लाइटें कई दिनों से बंद हैं, जिससे पूरी सड़क रात में पूरी तरह से अंधेरे में डूबी रहती है।

समस्या का विवरण:
${details}

इस अंधेरे खंड के कारण सुरक्षा संबंधी चिंताएं पैदा हो गई हैं, विशेष रूप से महिलाओं, वरिष्ठ नागरिकों और बच्चों के लिए। इससे सड़क दुर्घटनाओं और चोरी का खतरा भी बढ़ जाता है।

मैं आपसे अनुरोध करता हूँ कि प्राथमिकता के आधार पर खराब बल्बों को बदलें या केबल की खराबी को ठीक करें।

सधन्यवाद।

भवदीय,
[नागरिक का नाम]
[संपर्क नंबर]`,
        gu: (location, details) =>
`પ્રતિ,
વિદ્યુત ઈજનેર શ્રી (જાહેર પ્રકાશ વિભાગ),
મ્યુનિસિપલ કોર્પોરેશન / વિદ્યુત બોર્ડ.

વિષય: ${location} ખાતે સ્ટ્રીટ લાઈટો બંધ હોવાના કારણે સુરક્ષા અંગે ચિંતા

આદરણીય સાહેબ/મેડમ,

હું જાણ કરવા માંગું છું કે ${location} ખાતેની ઘણી સ્ટ્રીટ લાઈટો કેટલાક દિવસોથી બંધ છે, જેના લીધે રાત્રિના સમયે સમગ્ર રસ્તો અંધકારમાં રહે છે.

સમસ્યાની વિગતો:
${details}

અંધકારને કારણે સુરક્ષા અંગે ચિંતા ઉભી થઇ છે, ખાસ કરીને મહિલાઓ, વરિષ્ઠ નાગરિકો અને બાળકો માટે. તેનાથી માર્ગ અકસ્માત અને ચોરીઓનું જોખમ પણ વધે છે.

હું આપને વિનંતી કરું છું કે પ્રાથમિકતાના ધોરણે બંધ લાઈટોના બલ્બ બદલો અથવા કેબલની ખામી સુધારો.

આભાર સહ.

આપનો વિશ્વાસુ,
[નાગરિકનું નામ]
[મોબાઇલ નંબર]`
    },
    other: {
        en: (location, details) =>
`To,
The Public Grievance Officer,
Local Administration Office.

Subject: Official grievance representation for ${location}

Respected Sir/Madam,

I am writing to submit a formal representation regarding a civic/administrative issue occurring at ${location}. 

Description of the issue:
${details}

This matter requires your direct administrative review. We look forward to a prompt resolution to ease public inconvenience.

Thanking you.

Yours faithfully,
[Citizen Name]
[Contact Number]`,
        hi: (location, details) =>
`सेवा में,
लोक शिकायत अधिकारी,
स्थानीय प्रशासनिक कार्यालय।

विषय: ${location} के लिए आधिकारिक शिकायत प्रतिनिधित्व

आदरणीय महोदय / महोदया,

मैं ${location} पर उत्पन्न हो रही एक नागरिक/प्रशासनिक समस्या के संबंध में एक औपचारिक प्रतिनिधित्व प्रस्तुत करने के लिए लिख रहा हूँ।

समस्या का विवरण:
${details}

इस मामले में आपकी प्रत्यक्ष प्रशासनिक समीक्षा की आवश्यकता है। हम जनता की असुविधा को कम करने के लिए त्वरित समाधान की आशा करते हैं।

सधन्यवाद।

भवदीय,
[नागरिक का नाम]
[संपर्क नंबर]`,
        gu: (location, details) =>
`પ્રતિ,
જાહેર ફરિયાદ અધિકારી શ્રી,
સ્થानीय વહીવટી કચેરી.

વિષય: ${location} માટે સત્તાવાર ફરિયાદ રજૂઆત

આદરણીય સાહેબ/મેડમ,

હું ${location} ખાતે ઉદ્ભવેલી નાગરિક/વહીવટી સમસ્યા અંગે ઔપચારિક રજૂઆત કરવા લખી રહ્યો છું.

સમસ્યાની વિગતો:
${details}

આ બાબતે આપની સીધી વહીવટી સમીક્ષા જરૂરી છે. અમે જાહેર અસુવિધા હળવી કરવા માટે ત્વરિત ઉકેલની આશા રાખીએ છીએ.

આભાર સહ.

આપનો વિશ્વાસુ,
[નાગરિકનું નામ]
[મોબાઇલ નંબર]`
    }
};

// Initialize Application & Bind Event Listeners
document.addEventListener("DOMContentLoaded", () => {
    // Load local storage complaints if they exist
    const savedComplaints = localStorage.getItem("sb_complaints");
    if (savedComplaints) {
        try {
            state.complaints = JSON.parse(savedComplaints);
        } catch (e) {
            console.error("Could not load complaints from localStorage", e);
        }
    }

    // Set Initial Theme
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialTheme = localStorage.getItem("sb_theme") || (systemPrefersDark ? 'dark' : 'light');
    setTheme(initialTheme);

    // Initial Translation Rendering
    updateUIContent();
    renderChecklist();
    renderRecentGrievances();
    handleTrackerSearch(false);
    matchGovernmentSchemes();

    // Bind Controls
    document.getElementById("lang-select").addEventListener("change", (e) => {
        state.language = e.target.value;
        updateUIContent();
        renderChecklist();
        renderRecentGrievances();
        matchGovernmentSchemes();
        // Recalculate AI response if active
        const ansCard = document.getElementById("ai-answer-card");
        if (ansCard.classList.contains("active")) {
            const activeKeyword = ansCard.dataset.keyword || "general";
            triggerAIAnswer(activeKeyword);
        }
        // Regenerate draft if it was open and inputs are not empty
        const draftCard = document.getElementById("draft-output-card");
        if (draftCard.classList.contains("active")) {
            const location = document.getElementById("location-input").value.trim();
            const details = document.getElementById("details-input").value.trim();
            if (location && details) {
                generateDraft();
            }
        }
        // Refresh tracker results if visible without auto-scrolling
        const trackerResults = document.getElementById("tracker-results-panel");
        if (trackerResults.classList.contains("active")) {
            handleTrackerSearch(false);
        }
    });

    document.getElementById("theme-toggle-btn").addEventListener("click", () => {
        const targetTheme = state.theme === 'light' ? 'dark' : 'light';
        setTheme(targetTheme);
    });

    // AI Assistant submit button & Enter key
    document.getElementById("chat-submit").addEventListener("click", handleChatInput);
    document.getElementById("chat-query").addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            handleChatInput();
        }
    });

    // Draft Generator Submit
    document.getElementById("complaint-form").addEventListener("submit", (e) => {
        e.preventDefault();
        generateDraft();
    });

    // Complaint copy text button
    document.getElementById("btn-copy-draft").addEventListener("click", copyDraftText);

    // Tracker Search Submit
    document.getElementById("tracker-submit").addEventListener("click", handleTrackerSearch);
    document.getElementById("tracker-id-input").addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            handleTrackerSearch();
        }
    });

    // Demo Grievance registration link
    document.getElementById("btn-register-demo").addEventListener("click", registerAndTrackComplaint);

    // Brand Reset Link
    document.getElementById("brand-link").addEventListener("click", (e) => {
        e.preventDefault();
        document.getElementById("lang-select").value = 'en';
        state.language = 'en';
        updateUIContent();
        renderChecklist();
        renderRecentGrievances();
        document.getElementById("chat-query").value = "";
        document.getElementById("ai-answer-card").classList.remove("active");
        document.getElementById("complaint-form").reset();
        document.getElementById("draft-output-card").classList.remove("active");
        document.getElementById("tracker-id-input").value = "SB-2026-9042";
        handleTrackerSearch(false);
        
        // Reset Schemes Matcher
        document.getElementById("scheme-matcher-form").reset();
        matchGovernmentSchemes();
        
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Privacy & Terms links
    document.getElementById("footer-privacy-lnk").addEventListener("click", (e) => {
        e.preventDefault();
        alert(state.language === 'hi' 
            ? "यह डिजिटल इंडिया सैंडबॉक्स के लिए विकसित एक प्रोटोटाइप नागरिक सहकार है। कोई वास्तविक व्यक्तिगत डेटा एकत्र नहीं किया जाता है।" 
            : state.language === 'gu' 
            ? "આ ડિજિટલ ઇન્ડિયા સેન્ડબોક્સ માટે વિકસાવવામાં આવેલ પ્રોટોટાઇપ નાગરિક સાથી છે. કોઈ વાસ્તવિક વ્યક્તિગત ડેટા એકત્રિત કરવામાં આવતો નથી." 
            : "This is a prototype citizen companion developed for the Digital India Sandbox. No actual personal data is collected or stored.");
    });

    document.getElementById("footer-terms-lnk").addEventListener("click", (e) => {
        e.preventDefault();
        alert(state.language === 'hi' 
            ? "सेवा की शर्तें: यह एक हैकाथॉन प्रोटोटाइप है और इसे केवल शैक्षिक/प्रदर्शन उद्देश्यों के लिए डिज़ाइन किया गया है।" 
            : state.language === 'gu' 
            ? "સેવાની શરતો: આ એક હેકાથોન પ્રોટોટાઇપ છે અને માત્ર શૈક્ષણિક/પ્રદર્શન હેતુઓ માટે રચાયેલ છે." 
            : "Terms of Service: This is a hackathon prototype and is designed solely for educational/demonstration purposes.");
    });

    // Schemes Matcher Submit
    document.getElementById("scheme-matcher-form").addEventListener("submit", (e) => {
        e.preventDefault();
        matchGovernmentSchemes();
    });

    // Intersection Observer for Scroll Reveal animations
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("reveal-active");
            }
        });
    }, { threshold: 0.05 });

    document.querySelectorAll(".card, .hero-banner").forEach(el => {
        el.classList.add("reveal");
        revealObserver.observe(el);
    });

    // Floating Back-to-Top Button Handler
    const backToTopBtn = document.getElementById("back-to-top");
    if (backToTopBtn) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 400) {
                backToTopBtn.classList.add("visible");
            } else {
                backToTopBtn.classList.remove("visible");
            }
        });

        backToTopBtn.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }

    // Custom Aura Cursor Follower Logic
    const cursor = document.getElementById("custom-cursor");
    if (cursor) {
        window.addEventListener("mousemove", (e) => {
            cursor.style.left = `${e.clientX}px`;
            cursor.style.top = `${e.clientY}px`;
            if (cursor.style.opacity === "0") {
                cursor.style.opacity = "1";
            }
        });

        window.addEventListener("mouseleave", () => {
            cursor.style.opacity = "0";
        });

        // Delegate mouseover hover states for interactive elements
        const hoverables = "a, button, select, input, [type='checkbox'], .suggestion-chip, .service-item, .checklist-item label, .timeline-node";
        document.body.addEventListener("mouseover", (e) => {
            if (e.target.closest(hoverables)) {
                cursor.classList.add("hovered");
            } else {
                cursor.classList.remove("hovered");
            }
        });
    }
});

// Update standard text based on active language
function updateUIContent() {
    const lang = state.language;
    const dict = translations[lang];

    // Main header
    document.getElementById("app-subtitle").textContent = dict.subtitle;
    document.getElementById("hero-badge-txt").textContent = dict.heroBadge;
    document.getElementById("hero-title-txt").innerHTML = dict.heroTitle;
    document.getElementById("hero-subtitle-txt").textContent = dict.heroSubtitle;

    // AI Assistant
    document.getElementById("ai-title").textContent = dict.assistantTitle;
    document.getElementById("chat-query").placeholder = dict.assistantPlaceholder;
    document.getElementById("suggested-label").textContent = dict.suggestedPrompts;
    
    // Suggested chips
    const chip1 = document.getElementById("chip-1");
    const chip2 = document.getElementById("chip-2");
    const chip3 = document.getElementById("chip-3");
    
    chip1.textContent = dict.prompt1;
    chip1.onclick = () => fillAssistantInput(dict.prompt1, 'aadhaar');
    chip2.textContent = dict.prompt2;
    chip2.onclick = () => fillAssistantInput(dict.prompt2, 'passport');
    chip3.textContent = dict.prompt3;
    chip3.onclick = () => fillAssistantInput(dict.prompt3, 'grievance');

    const chip4 = document.getElementById("chip-4");
    const chip5 = document.getElementById("chip-5");
    const chip6 = document.getElementById("chip-6");

    chip4.textContent = dict.prompt4;
    chip4.onclick = () => fillAssistantInput(dict.prompt4, 'ayushman');
    chip5.textContent = dict.prompt5;
    chip5.onclick = () => fillAssistantInput(dict.prompt5, 'pmkisan');
    chip6.textContent = dict.prompt6;
    chip6.onclick = () => fillAssistantInput(dict.prompt6, 'sukanya');

    document.getElementById("ai-badge-txt").textContent = dict.aiResponseTitle;

    // Services
    document.getElementById("services-title-txt").textContent = dict.servicesTitle;
    document.getElementById("srv-aadhaar-name").textContent = dict.aadhaarName;
    document.getElementById("srv-aadhaar-desc").textContent = dict.aadhaarDesc;
    document.getElementById("srv-grievance-name").textContent = dict.grievanceName;
    document.getElementById("srv-grievance-desc").textContent = dict.grievanceDesc;
    document.getElementById("srv-consumer-name").textContent = dict.consumerName;
    document.getElementById("srv-consumer-desc").textContent = dict.consumerDesc;
    document.getElementById("srv-certificate-name").textContent = dict.certificateName;
    document.getElementById("srv-certificate-desc").textContent = dict.certificateDesc;

    // Generator Form
    document.getElementById("generator-title-txt").textContent = dict.generatorTitle;
    document.getElementById("lbl-issue").textContent = dict.issueTypeLabel;
    
    // Select dropdown translations
    const issueSelect = document.getElementById("issue-category");
    issueSelect.options[0].text = dict.issueRoad;
    issueSelect.options[1].text = dict.issueWater;
    issueSelect.options[2].text = dict.issueWaste;
    issueSelect.options[3].text = dict.issueLight;
    issueSelect.options[4].text = dict.issueOther;
    
    document.getElementById("lbl-location").textContent = dict.locationLabel;
    document.getElementById("location-input").placeholder = dict.locationPlaceholder;
    document.getElementById("lbl-details").textContent = dict.detailsLabel;
    document.getElementById("details-input").placeholder = dict.detailsPlaceholder;
    document.getElementById("btn-generate-txt").textContent = dict.generateBtn;
    
    document.getElementById("draft-output-title").textContent = dict.draftHeaderTitle;
    document.getElementById("btn-copy-draft-txt").textContent = dict.copyBtn;
    document.getElementById("draft-hint").textContent = dict.draftHint;

    // Tracker
    document.getElementById("tracker-title-txt").textContent = dict.trackerTitle;
    document.getElementById("tracker-id-input").placeholder = dict.trackerPlaceholder;
    document.getElementById("btn-track-txt").textContent = dict.trackBtn;
    document.getElementById("btn-register-demo-txt").textContent = dict.createTrackBtn;
    document.getElementById("txt-recent-tracker-label").textContent = dict.recentGrievancesLabel;

    // Schemes Explorer
    document.getElementById("schemes-title-txt").textContent = dict.schemesTitle;
    document.getElementById("matcher-title-txt").textContent = dict.matcherTitle;
    document.getElementById("lbl-match-age").textContent = dict.lblMatchAge;
    document.getElementById("lbl-match-gender").textContent = dict.lblMatchGender;
    document.getElementById("lbl-match-profession").textContent = dict.lblMatchProfession;
    document.getElementById("lbl-match-income").textContent = dict.lblMatchIncome;
    document.getElementById("btn-match-txt").textContent = dict.btnMatchSchemes;
    document.getElementById("opt-gender-any").textContent = dict.genderAny;
    document.getElementById("opt-gender-female").textContent = dict.genderFemale;
    document.getElementById("opt-prof-farmer").textContent = dict.profFarmer;
    document.getElementById("opt-prof-student").textContent = dict.profStudent;
    document.getElementById("opt-prof-unemployed").textContent = dict.profUnemployed;
    document.getElementById("opt-prof-business").textContent = dict.profBusiness;

    // Checklist tabs
    document.getElementById("checklist-title-txt").textContent = dict.checklistTitle;
    document.getElementById("chk-tab-aadhaar").textContent = dict.checklistTabAadhaar;
    document.getElementById("chk-tab-passport").textContent = dict.checklistTabPassport;
    document.getElementById("chk-tab-birth").textContent = dict.checklistTabBirth;
    document.getElementById("chk-tab-pan").textContent = dict.checklistTabPAN;
    document.getElementById("chk-header-txt").textContent = dict.checklistHeader;

    // Links Panel
    document.getElementById("links-title-txt").textContent = dict.linksTitle;
    document.getElementById("lnk-aadhaar-txt").textContent = dict.linkAadhaar;
    document.getElementById("lnk-cpgrams-txt").textContent = dict.linkCPGRAMS;
    document.getElementById("lnk-ncdrc-txt").textContent = dict.linkNCDRC;
    document.getElementById("lnk-digilocker-txt").textContent = dict.linkDigiLocker;
    document.getElementById("lnk-serviceplus-txt").textContent = dict.linkServicePlus;
    document.getElementById("lnk-nvsp-txt").textContent = dict.linkNVSP;

    // Footer
    document.getElementById("footer-rights").textContent = dict.footerText;
    document.getElementById("footer-privacy-lnk").textContent = dict.footerPrivacy;
    document.getElementById("footer-terms-lnk").textContent = dict.footerTerms;
}

// Set application theme
function setTheme(theme) {
    state.theme = theme;
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("sb_theme", theme);
    
    const themeBtn = document.getElementById("theme-toggle-btn");
    if (theme === 'dark') {
        themeBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" style="width:1.2rem;height:1.2rem"><path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" /></svg>`;
    } else {
        themeBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" style="width:1.2rem;height:1.2rem"><path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" /></svg>`;
    }
}

// AI Assistant click helper
function fillAssistantInput(text, keyword) {
    document.getElementById("chat-query").value = text;
    triggerAIAnswer(keyword);
}

// Handle query input submit
function handleChatInput() {
    const query = document.getElementById("chat-query").value.trim().toLowerCase();
    if (!query) return;

    let keyword = "general";
    if (query.includes("aadhaar") || query.includes("aadhar") || query.includes("uidai") || query.includes("आधार")) {
        keyword = "aadhaar";
    } else if (query.includes("passport") || query.includes("pass") || query.includes("पासपोर्ट")) {
        keyword = "passport";
    } else if (query.includes("grievance") || query.includes("complaint") || query.includes("cpgrams") || query.includes("शिकायत") || query.includes("ફરિયાદ")) {
        keyword = "grievance";
    } else if (query.includes("certificate") || query.includes("birth") || query.includes("death") || query.includes("marriage") || query.includes("caste") || query.includes("પ્રમાણપત્ર") || query.includes("प्रमाण पत्र")) {
        keyword = "certificates";
    } else if (query.includes("pan") || query.includes("tax") || query.includes("પાન") || query.includes("पैन")) {
        keyword = "pan";
    } else if (query.includes("ration") || query.includes("food") || query.includes("रेशन") || query.includes("રેશન")) {
        keyword = "ration";
    } else if (query.includes("ayushman") || query.includes("health") || query.includes("आयुष्मान") || query.includes("આયુષ્માન")) {
        keyword = "ayushman";
    } else if (query.includes("pmkisan") || query.includes("kisan") || query.includes("farmer") || query.includes("किसान") || query.includes("ખેડૂત")) {
        keyword = "pmkisan";
    } else if (query.includes("sukanya") || query.includes("girl") || query.includes("सुकन्या") || query.includes("સુકન્યા")) {
        keyword = "sukanya";
    } else if (query.includes("jandhan") || query.includes("bank") || query.includes("account") || query.includes("जन धन") || query.includes("જન ધન")) {
        keyword = "jandhan";
    } else if (query.includes("schemes") || query.includes("scheme") || query.includes("yojana") || query.includes("योजना") || query.includes("યોજના")) {
        keyword = "schemes";
    }

    triggerAIAnswer(keyword);
}

// Trigger response logic
function triggerAIAnswer(keyword) {
    const lang = state.language;
    const answerContainer = document.getElementById("ai-answer-card");
    const answerContent = document.getElementById("ai-answer-content");

    // Display typing indicator first
    answerContent.innerHTML = `
        <div class="typing-indicator">
            <span></span>
            <span></span>
            <span></span>
        </div>
    `;
    answerContainer.classList.add("active");
    answerContainer.dataset.keyword = keyword;

    // Scroll slightly so the loader is visible
    answerContainer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

    // Simulate AI response stream delay
    setTimeout(() => {
        const htmlResponse = (aiKeywords[keyword] && aiKeywords[keyword][lang]) 
                             ? aiKeywords[keyword][lang] 
                             : aiKeywords["general"][lang];

        answerContent.innerHTML = `<div class="fade-in">${htmlResponse}</div>`;
        
        // Re-scroll to ensure content is fully displayed
        setTimeout(() => {
            answerContainer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }, 100);
    }, 650);
}

// External card trigger for services
function triggerServiceInfo(serviceType) {
    let queryText = "";
    if (serviceType === 'aadhaar') {
        queryText = state.language === 'hi' ? "मुझे आधार सेवा की जानकारी चाहिए" : state.language === 'gu' ? "મને આધાર સેવાની માહિતી જોઈતી હતી" : "Tell me about Aadhaar services";
    } else if (serviceType === 'grievance') {
        queryText = state.language === 'hi' ? "शिकायत दर्ज कैसे करें?" : state.language === 'gu' ? "ફરિયાદ કેવી રીતે નોંધાવવી?" : "How to register a public grievance?";
    } else if (serviceType === 'consumer') {
        queryText = state.language === 'hi' ? "उपभोक्ता हेल्पलाइन विवरण" : state.language === 'gu' ? "ગ્રાહક હેલ્પલાઇનની માહિતી" : "Provide Consumer Helpline details";
    } else if (serviceType === 'certificate') {
        queryText = state.language === 'hi' ? "जन्म और अन्य प्रमाण पत्र" : state.language === 'gu' ? "જન્મ અને અન્ય પ્રમાણપત્રો" : "Documents and certificate procedures";
    }

    document.getElementById("chat-query").value = queryText;
    
    let key = serviceType;
    if (serviceType === 'consumer') key = 'grievance';
    if (serviceType === 'certificate') key = 'certificates';

    triggerAIAnswer(key);
}

// Document Checklist tab click handler
function setChecklistTab(tab) {
    state.activeChecklistTab = tab;
    // Update active tab styling
    const tabs = ['aadhaar', 'passport', 'birth', 'pan'];
    tabs.forEach(t => {
        document.getElementById(`chk-tab-${t}`).classList.remove("active");
    });
    document.getElementById(`chk-tab-${tab}`).classList.add("active");
    
    renderChecklist();
}

// Render dynamic checklist items
function renderChecklist() {
    const listContainer = document.getElementById("checklist-items-list");
    const lang = state.language;
    const tab = state.activeChecklistTab;
    const items = checklistData[tab][lang];

    listContainer.innerHTML = "";
    items.forEach((item, idx) => {
        const li = document.createElement("li");
        li.className = "checklist-item";
        li.innerHTML = `
            <input type="checkbox" id="chk-${tab}-${idx}" class="checklist-checkbox">
            <label for="chk-${tab}-${idx}" class="checklist-text">${item}</label>
        `;
        listContainer.appendChild(li);
    });
}

// Generate Grievance draft
function generateDraft() {
    const category = document.getElementById("issue-category").value;
    const location = document.getElementById("location-input").value.trim();
    const details = document.getElementById("details-input").value.trim();

    if (!location || !details) {
        alert(state.language === 'hi' 
            ? "कृपया पता और समस्या का विवरण भरें।" 
            : state.language === 'gu' 
            ? "કૃપા કરીને સરનામું અને સમસ્યાની વિગત ભરો." 
            : "Please fill in both the location and the issue details.");
        return;
    }

    const lang = state.language;
    const templateFn = draftTemplates[category][lang];
    const generatedText = templateFn(location, details);

    document.getElementById("draft-body-text").textContent = generatedText;
    document.getElementById("draft-output-card").classList.add("active");
    document.getElementById("draft-output-card").scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// Copy drafted text to clipboard
function copyDraftText() {
    const text = document.getElementById("draft-body-text").textContent;
    navigator.clipboard.writeText(text).then(() => {
        const btnText = document.getElementById("btn-copy-draft-txt");
        const origText = translations[state.language].copyBtn;
        btnText.textContent = translations[state.language].copied;
        setTimeout(() => {
            btnText.textContent = origText;
        }, 1500);
    });
}

// Complaint tracking search logic
function handleTrackerSearch(shouldScroll = true) {
    const input = document.getElementById("tracker-id-input").value.trim();
    if (!input) return;

    const complaint = state.complaints.find(c => c.id.toLowerCase() === input.toLowerCase());
    const resultPanel = document.getElementById("tracker-results-panel");
    const errorText = document.getElementById("tracker-error-txt");
    const timelineContainer = document.getElementById("tracker-timeline");

    errorText.classList.add("hidden");
    resultPanel.classList.remove("active");

    if (!complaint) {
        errorText.textContent = translations[state.language].invalidId;
        errorText.classList.remove("hidden");
        return;
    }

    // Set complaint meta
    document.getElementById("track-c-id").textContent = complaint.id;
    document.getElementById("track-c-date").textContent = `${translations[state.language].complaintDate}: ${complaint.date}`;

    // Render timeline
    timelineContainer.innerHTML = "";
    
    // Status translation maps
    const statusMap = {
        "Submitted": translations[state.language].timelineSubmitted,
        "Under Review": translations[state.language].timelineReview,
        "Forwarded": translations[state.language].timelineForwarded,
        "Resolved": translations[state.language].timelineResolved
    };

    complaint.timeline.forEach(step => {
        const div = document.createElement("div");
        let stepClass = "timeline-step";
        if (step.completed) stepClass += " completed";
        if (step.active) stepClass += " active";
        
        div.className = stepClass;
        div.innerHTML = `
            <div class="timeline-node"></div>
            <div class="timeline-content">
                <div class="timeline-status">${statusMap[step.status]}</div>
                <div class="timeline-desc">${step.desc} ${step.date ? `(${step.date})` : ""}</div>
            </div>
        `;
        timelineContainer.appendChild(div);
    });

    resultPanel.classList.add("active");
    if (shouldScroll) {
        resultPanel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
}

// Register a new mock complaint and auto-track it
function registerAndTrackComplaint() {
    const category = document.getElementById("issue-category").value;
    const location = document.getElementById("location-input").value.trim();
    const details = document.getElementById("details-input").value.trim();

    if (!location || !details) {
        alert(state.language === 'hi' 
            ? "शिकायत दर्ज करने के लिए विवरण और स्थान आवश्यक हैं।" 
            : state.language === 'gu' 
            ? "ફરિયાદ નોંધવા માટે વિગત અને સરનામું જરૂરી છે." 
            : "Location and details are required to register a complaint.");
        return;
    }

    const randomId = `SB-2026-${Math.floor(1000 + Math.random() * 9000)}`;
    const today = new Date().toISOString().split('T')[0];

    const categoryNames = {
        road: state.language === 'hi' ? "सड़क" : state.language === 'gu' ? "રસ્તો" : "Road",
        water: state.language === 'hi' ? "पानी" : state.language === 'gu' ? "પાણી" : "Water",
        waste: state.language === 'hi' ? "स्वच्छता" : state.language === 'gu' ? "સફાઈ" : "Sanitation",
        light: state.language === 'hi' ? "बिजली" : state.language === 'gu' ? "વીજળી" : "Street Light",
        other: state.language === 'hi' ? "अन्य" : state.language === 'gu' ? "અન્ય" : "Other"
    };

    const newComplaint = {
        id: randomId,
        type: category,
        location: location,
        details: details,
        date: today,
        timeline: [
            { status: "Submitted", desc: `Grievance registered for ${categoryNames[category]} issue at ${location}`, date: today, completed: true, active: true },
            { status: "Under Review", desc: "Awaiting assignment to Department Officer", date: "", completed: false },
            { status: "Forwarded", desc: "Pending internal routing", date: "", completed: false },
            { status: "Resolved", desc: "Pending resolution", date: "", completed: false }
        ]
    };

    state.complaints.unshift(newComplaint); // Add to beginning of array
    localStorage.setItem("sb_complaints", JSON.stringify(state.complaints));

    // Clear form inputs
    document.getElementById("location-input").value = "";
    document.getElementById("details-input").value = "";

    // Render recent grievances and auto-track
    renderRecentGrievances();
    document.getElementById("tracker-id-input").value = randomId;
    handleTrackerSearch();

    // Display confirmation
    alert(state.language === 'hi'
        ? `सफलतापूर्वक दर्ज! आपकी शिकायत आईडी है: ${randomId}`
        : state.language === 'gu'
        ? `સફળતાપૂર્વક નોંધાયેલ! તમારી ફરિયાદ આઈડી છે: ${randomId}`
        : `Successfully registered! Your Mock Complaint ID is: ${randomId}`);
}

// Render Recent Complaint IDs dynamically in tracker panel
function renderRecentGrievances() {
    const container = document.getElementById("recent-grievances-list");
    if (!container) return;

    container.innerHTML = "";
    // Display the first 4 complaints as clickable items
    const displayComplaints = state.complaints.slice(0, 4);

    displayComplaints.forEach((c) => {
        const span = document.createElement("span");
        span.style.textDecoration = "underline";
        span.style.cursor = "pointer";
        span.style.color = "var(--accent)";
        span.style.fontWeight = "600";
        span.textContent = c.id;
        span.addEventListener("click", () => {
            document.getElementById("tracker-id-input").value = c.id;
            handleTrackerSearch();
        });
        container.appendChild(span);
    });
}

// Calculate and render matching government schemes
function matchGovernmentSchemes() {
    const age = parseInt(document.getElementById("match-age").value) || 35;
    const gender = document.getElementById("match-gender").value;
    const profession = document.getElementById("match-profession").value;
    const income = parseFloat(document.getElementById("match-income").value) || 0;

    const resultsContainer = document.getElementById("schemes-results-box");
    if (!resultsContainer) return;

    resultsContainer.innerHTML = "";

    const lang = state.language;
    const matched = schemesList.filter(s => s.checkMatch(age, gender, profession, income));

    matched.forEach(scheme => {
        const item = document.createElement("div");
        item.className = "service-item";
        item.style.cursor = "pointer";
        item.addEventListener("click", () => {
            // Fill chat text and query it
            document.getElementById("chat-query").value = `${scheme.name[lang]}`;
            triggerAIAnswer(scheme.id);
        });

        item.innerHTML = `
            <div class="service-icon-wrapper" style="background-color: var(--accent-light); color: var(--accent);">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" style="width:1.25rem;height:1.25rem;">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </div>
            <div class="service-name">${scheme.name[lang]}</div>
            <div class="service-desc" style="margin-bottom:0.75rem;">${scheme.desc[lang]}</div>
            <div style="font-size:0.8rem;color:var(--text-secondary);margin-top:auto;border-top:1px dashed var(--border-color);padding-top:0.5rem;">
                <strong>${translations[lang].eligibilityLabel}</strong> ${scheme.eligibility[lang]}
            </div>
            <div style="font-size:0.8rem;color:var(--text-secondary);margin-top:0.25rem;">
                <strong>${translations[lang].benefitLabel}</strong> ${scheme.benefit[lang]}
            </div>
        `;
        resultsContainer.appendChild(item);
    });
}

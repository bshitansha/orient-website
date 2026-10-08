// ==========================================================
// COUNTRY DATA - all text for country.html lives in this file.
// Text copied from your live website is kept as it was.
// Lines marked "ADDED" were written to fill gaps - please have
// your team check them (visa rules and intakes change often).
//
// To add a new country: copy one block, change the key (it becomes
// the address: country.html?c=your-key) and edit the text.
// ==========================================================

// ----- Shared pieces -----

// "How Orient Consultancy helps" - same list as on your Study-in pages
const HOW_WE_HELP = [
  { title: "Career counseling & university matching", text: "Based on your goals, profile and budget." },
  { title: "IELTS & PTE preparation guidance", text: "To help you meet admission requirements." },
  { title: "Documentation & application support", text: "A clear document checklist and application review." },
  { title: "Visa processing guidance", text: "From offer letter to visa submission." },
  { title: "Pre-departure support", text: "Interview and departure support before you fly." }
];

// ADDED: questions every destination shares. {name} is replaced by the country name.
const COMMON_FAQ = [
  { q: "How do I get started with studying in {name}?",
    a: "Book a free counseling session. Your counselor reviews your academic background, goals and budget, then matches you with suitable courses and universities." },
  { q: "Do you help with IELTS or PTE?",
    a: "Yes. We guide you on language tests and run regular mock tests. Whether a test score is needed depends on the university and the program." },
  { q: "Which documents will I need?",
    a: "Documents depend on the university and the embassy. Your counselor gives you a clear checklist and reviews your application before it is submitted." },
  { q: "Can you guarantee my visa?",
    a: "The embassy makes every visa decision, so no agency can promise one. We prepare your documents and interview carefully to give you the strongest application." }
];

const VISA_NOTE = "Visa rules change. Your counselor will confirm the current requirements for you."; // ADDED

const COUNTRIES = {

  // =========================================================
  // SOUTH KOREA
  // =========================================================
  "south-korea": {
    name: "South Korea",
    flag: "images/flags/south-korea.svg",
    gateway: { city: "Seoul", code: "ICN" },                                    // ADDED
    pageTitle: "Korean Student Visa (D-2 / D-4 Visa)",
    metaDescription: "Study in South Korea with Orient Consultancy Nepal. Expert help with D-4 language training and D-2 degree student visas, admission and interview guidance.",
    tagline: "Innovation, scholarships & global careers",
    intakes: "March / September",
    capital: "Seoul", currency: "KRW", language: "Korean / English",           // ADDED (public facts)
    visaTypes: "D-4 and D-2",
    intro: "At Orient Consultancy Nepal, we specialize in Korean student visas with high success rates thanks to our direct contacts with Korean institutions.",
    closing: "Our team handles everything from university admission to visa documentation, language preparation, and interview guidance—ensuring a smooth and guaranteed visa process.",
    visaIntro: "We assist students in applying for:",
    visas: [
      {
        code: "D-4", label: "Korean Language Training",
        forWho: "For Korean Language Training Programs (pre-university language courses)",
        about: "Choose this route if you want to learn Korean first, or build your language skills before applying to a degree program.",   // ADDED
        highlights: ["Study Korean at a university language institute", "A common first step before a degree program", "Builds the language skills you need for daily life and later study"], // ADDED
        documents: ["Valid passport", "Admission letter from the language institute", "Completed visa application form and photographs", "Academic certificates and transcripts", "Proof of finances"] // ADDED
      },
      {
        code: "D-2", label: "Degree Programs",
        forWho: "For Bachelor’s, Master’s, or PhD degree programs",
        about: "Choose this route if you already have an admission to a Korean university degree program.",   // ADDED
        highlights: ["Bachelor’s, Master’s and PhD programs", "Language requirement is set by each university and program", "Scholarships are available at many universities"], // ADDED
        documents: ["Valid passport", "Admission letter from the university", "Academic transcripts and degree certificates", "Language test score, if required by the program", "Completed visa application form and photographs", "Proof of finances"] // ADDED
      }
    ],
    visaNote: "Exact requirements depend on the university and the Korean embassy and can change. Your counselor will confirm the current list for you.", // ADDED
    whyTitle: "Why choose South Korea?",
    why: [
      { title: "High-quality education with modern facilities" },
      { title: "Affordable tuition fees and living costs" },
      { title: "Opportunities for part-time work during studies" },
      { title: "Pathway to future employment or permanent residency" }
    ],
    steps: HOW_WE_HELP
  },

  // =========================================================
  // UNITED KINGDOM
  // =========================================================
  "uk": {
    name: "United Kingdom",
    short: "the UK",
    flag: "images/flags/uk.svg",
    gateway: { city: "London", code: "LHR" },
    pageTitle: "UK Student Visa (Tier 4 Visa)",
    metaDescription: "Study in the UK with Orient Consultancy Nepal. Help with university selection, the UK Student Visa (Tier 4), language tests and interview coaching.",
    tagline: "Globally respected degrees with shorter study duration",
    intakes: "January / May / September",
    capital: "London", currency: "GBP", language: "English",
    visaTypes: "Tier 4 General Student Visa",
    intro: "At Orient Consultancy Nepal, we specialize in helping students secure their UK Student Visa (Tier 4), ensuring they can pursue their higher education in one of the world’s most prestigious academic environments.",
    closing: "Our expert team provides guidance in university selection, visa application preparation, language tests, and interview coaching. We ensure all requirements are met, increasing your chances for a successful visa outcome.",
    visaIntro: "We assist with:",
    visas: [
      { code: "Tier 4", label: "General Student Visa",
        forWho: "For students enrolled in full-time degree or language courses at UK universities or colleges." }
    ],
    visaNote: VISA_NOTE,
    whyTitle: "Why study in the UK?",
    why: [
      { title: "Globally recognized education system" },
      { title: "Wide range of study options across world-renowned universities" },
      { title: "Opportunities for part-time work during studies (up to 20 hours/week)" },
      { title: "Access to post-study work options (Graduate Route for 2 years)" }
    ],
    steps: HOW_WE_HELP
  },

  // =========================================================
  // AUSTRALIA
  // =========================================================
  "australia": {
    name: "Australia",
    flag: "images/flags/australia.svg",
    gateway: { city: "Sydney", code: "SYD" },
    pageTitle: "Australian Student Visa (Subclass 500)",
    metaDescription: "Study in Australia with Orient Consultancy Nepal. Guidance on course selection, admission, the Subclass 500 student visa, financial requirements and interview preparation.",
    tagline: "World-class education and strong student support",
    intakes: "February / July",
    capital: "Canberra", currency: "AUD", language: "English",
    visaTypes: "Subclass 500",
    intro: "At Orient Consultancy Nepal, we offer comprehensive guidance to secure your Australian student visa, ensuring a smooth and straightforward process.",
    closing: "Our team takes care of everything, from course selection and admission applications to visa documentation, financial requirements, and interview preparation. With our experienced support, we ensure your chances of success are maximized.",
    visaIntro: "We assist students with applying for:",
    visas: [
      { code: "Subclass 500", label: "Student Visa",
        forWho: "The primary student visa for those who wish to study in Australia at a recognized institution." }
    ],
    visaNote: VISA_NOTE,
    whyTitle: "Why choose Australia?",
    why: [
      { title: "High-quality education and internationally recognized qualifications" },
      { title: "Work rights for up to 20 hours per week during studies" },
      { title: "Post-graduation work options (Temporary Graduate Visa)" },
      { title: "A vibrant multicultural environment and excellent career opportunities" }
    ],
    steps: HOW_WE_HELP
  },

  // =========================================================
  // UNITED STATES
  // =========================================================
  "usa": {
    name: "United States",
    short: "the USA",
    flag: "images/flags/usa.svg",
    gateway: { city: "New York", code: "JFK" },
    pageTitle: "U.S. Student Visa (F-1 Visa)",
    metaDescription: "Study in the USA with Orient Consultancy Nepal. End-to-end support for university admission, F-1 visa paperwork and interview coaching.",
    tagline: "World-class universities and practical training",                  // ADDED
    intakes: "Fall / Spring",                                                    // ADDED
    capital: "Washington, D.C.", currency: "USD", language: "English",
    visaTypes: "F-1",
    intro: "At Orient Consultancy Nepal, we specialize in helping students apply for the F-1 Student Visa to study in the United States. Our expert team guides you through the entire process, ensuring a successful application.",
    closing: "From university admissions, visa paperwork, to interview coaching, we provide end-to-end support for a seamless experience. With our expertise and connections, you’ll be well-prepared for your U.S. student visa application.",
    visaIntro: "We assist with:",
    visas: [
      { code: "F-1", label: "Student Visa",
        forWho: "For full-time academic or language studies at U.S. universities, colleges, or English language schools." }
    ],
    visaNote: VISA_NOTE,
    whyTitle: "Why study in the USA?",
    why: [
      { title: "World-class education and research opportunities" },
      { title: "Access to top-tier universities and institutions" },
      { title: "Opportunities for practical training (Optional Practical Training – OPT)" },
      { title: "Cultural exchange in a diverse environment" }
    ],
    steps: HOW_WE_HELP
  },

  // =========================================================
  // JAPAN
  // =========================================================
  "japan": {
    name: "Japan",
    flag: "images/flags/japan.svg",
    gateway: { city: "Tokyo", code: "NRT" },
    pageTitle: "Japanese Student/College Visa",
    metaDescription: "Study in Japan with Orient Consultancy Nepal. Support with university admissions, visa documentation, Japanese language preparation and interview coaching.",
    tagline: "Technology, quality education & career pathways",
    intakes: "April / October",
    capital: "Tokyo", currency: "JPY", language: "Japanese / English",
    visaTypes: "College Student Visa",
    intro: "At Orient Consultancy Nepal, we offer expert assistance in securing student visas for Japan, with a focus on ensuring a smooth and hassle-free process.",
    closing: "Our services include complete support in university admissions, visa documentation, language preparation (Japanese), and interview coaching. With our direct connections and experience, we ensure your visa application has the best chance of success.",
    visaIntro: "We assist students with applying for:",
    visas: [
      { code: "College Student", label: "Category “C”",
        forWho: "For those aiming to pursue undergraduate or postgraduate programs in Japanese universities or language schools." }
    ],
    visaNote: VISA_NOTE,
    whyTitle: "Why study in Japan?",
    why: [
      { title: "World-class education and globally recognized degrees" },
      { title: "Unique cultural experience" },
      { title: "Opportunities to work part-time (up to 28 hours/week)" },
      { title: "Strong post-graduation employment prospects" }
    ],
    steps: HOW_WE_HELP
  },

  // =========================================================
  // DENMARK
  // =========================================================
  "denmark": {
    name: "Denmark",
    flag: "images/flags/denmark.svg",
    gateway: { city: "Copenhagen", code: "CPH" },
    pageTitle: "Student Visa for Denmark (Danish Residence Permit for Studies)",
    metaDescription: "Study in Denmark with Orient Consultancy Nepal. University applications, visa documentation, language preparation and interview coaching for the Danish Residence Permit for Studies.",
    tagline: "Innovative, English-taught education in a safe country",           // ADDED
    intakes: "September / February",                                            // ADDED
    capital: "Copenhagen", currency: "DKK", language: "English / Danish",
    visaTypes: "Residence Permit for Studies",
    intro: "At Orient Consultancy Nepal, we offer specialized assistance for students looking to study in Denmark. With its world-class education system and excellent living standards, Denmark is an ideal destination for international students.",
    closing: "Our services include university applications, visa documentation, language preparation (if necessary), and interview coaching to ensure you’re fully prepared for your Denmark study journey.",
    visaIntro: "We assist with:",
    visas: [
      { code: "Residence Permit", label: "for Studies",
        forWho: "For students admitted to full-time higher education programs at accredited Danish universities or institutions." }
    ],
    visaNote: VISA_NOTE,
    whyTitle: "Why study in Denmark?",
    why: [
      { title: "High-quality education with an emphasis on innovation and research" },
      { title: "English-taught programs across various fields of study" },
      { title: "Opportunity to work part-time during studies (up to 20 hours/week)" },
      { title: "A welcoming, safe, and sustainable environment" },
      { title: "Post-graduation work opportunities with a pathway to residence" }
    ],
    steps: HOW_WE_HELP
  },

  // =========================================================
  // GERMANY
  // =========================================================
  "germany": {
    name: "Germany",
    flag: "images/flags/germany.svg",
    gateway: { city: "Frankfurt", code: "FRA" },
    pageTitle: "Student Visa for Germany",
    metaDescription: "Study in Germany with Orient Consultancy Nepal. Admission guidance, student visa preparation, language proficiency (German or English) and interview coaching.",
    tagline: "Excellent engineering, research and affordable options",
    intakes: "Summer / Winter",
    capital: "Berlin", currency: "EUR", language: "German / English",
    visaTypes: "Student Visa",
    intro: "At Orient Consultancy Nepal, we offer expert guidance for students seeking to study in Germany, one of Europe’s leading educational destinations. Known for its high-quality education and low or no tuition fees, Germany is an excellent choice for international students.",
    closing: "Our services include admission guidance, visa application preparation, language proficiency (German or English), and interview coaching, ensuring your application is handled smoothly.",
    visaIntro: "We assist with:",
    visas: [
      { code: "Student Visa", label: "for Germany",
        forWho: "For students admitted to recognized German universities or higher education institutions to pursue undergraduate, postgraduate, or language courses." }
    ],
    visaNote: VISA_NOTE,
    whyTitle: "Why study in Germany?",
    why: [
      { title: "No tuition fees at public universities (for most programs)" },
      { title: "High-quality education and globally recognized degrees" },
      { title: "Opportunities for part-time work (up to 20 hours/week during studies)" },
      { title: "Strong post-graduation employment opportunities and work visas" },
      { title: "A diverse and welcoming environment" }
    ],
    steps: HOW_WE_HELP
  },

  // =========================================================
  // MALTA
  // =========================================================
  "malta": {
    name: "Malta",
    flag: "images/flags/malta.svg",
    gateway: { city: "Valletta", code: "MLA" },
    pageTitle: "Student Visa for Malta",
    metaDescription: "Study in Malta with Orient Consultancy Nepal. Course selection, university applications, visa documentation and pre-departure guidance.",
    tagline: "English-taught programs in a European setting",
    intakes: "Multiple intakes",
    capital: "Valletta", currency: "EUR", language: "English / Maltese",
    visaTypes: "Student Visa",
    intro: "At Orient Consultancy Nepal, we provide expert assistance for students wishing to study in Malta, one of Europe’s most attractive destinations for international education.",
    closing: "Our services cover course selection, university applications, visa documentation, and pre-departure guidance, ensuring a smooth process from start to finish.",
    visaIntro: "We assist with:",
    visas: [
      { code: "Student Visa", label: "for Malta",
        forWho: "For students enrolled in accredited programs at Maltese institutions, including universities, language schools, and vocational courses." }
    ],
    visaNote: VISA_NOTE,
    whyTitle: "Why study in Malta?",
    why: [
      { title: "High-quality education in English" },
      { title: "Affordable tuition fees and cost of living" },
      { title: "Safe and welcoming environment" },
      { title: "Opportunities to work part-time during studies (up to 20 hours/week)" },
      { title: "Beautiful Mediterranean location with a rich cultural heritage" }
    ],
    steps: HOW_WE_HELP
  },

  // =========================================================
  // DUBAI  (listed under "Other European Countries" on your site)
  // =========================================================
  "dubai": {
    name: "Dubai",
    flag: "images/flags/uae.svg",
    gateway: { city: "Dubai", code: "DXB" },
    pageTitle: "Student Visa for Dubai",
    metaDescription: "Study in Dubai with Orient Consultancy Nepal. Internationally recognized education, career opportunities and a modern lifestyle in a fast-growing economy.",
    tagline: "Global exposure in a fast-growing economy",                        // ADDED
    intakes: "September / January",                                              // ADDED (varies by university)
    capital: "Abu Dhabi (UAE capital)", currency: "AED", language: "English",   // ADDED
    visaTypes: "Student Visa",
    intro: "Studying in Dubai is becoming a popular choice for international students due to its modern education system, global exposure, and career opportunities in a fast-growing economy.",
    visaIntro: "We assist with:",                                                // ADDED
    visas: [
      { code: "Student Visa", label: "for Dubai",
        forWho: "For students admitted to a recognized university or college in Dubai, United Arab Emirates." }  // ADDED
    ],
    visaNote: VISA_NOTE,
    whyTitle: "Top reasons to study in Dubai",
    why: [
      { title: "Internationally Recognized Education", text: "Home to branches of top global universities (e.g., University of Birmingham, Heriot-Watt University, Murdoch University). Degrees are globally accepted and many programs are taught in English." },
      { title: "Strong Career and Job Opportunities", text: "Dubai is a business hub for the Middle East, Africa, and Asia, with great internship and job placement opportunities in business, IT, engineering, tourism, and healthcare." },
      { title: "Modern Lifestyle & Infrastructure", text: "One of the most developed and futuristic cities in the world, with top-class transport, technology, safety, and healthcare." },
      { title: "Tax-Free Salaries & Entrepreneurship", text: "Dubai has no personal income tax, which is attractive for graduates looking to work or start businesses, with a growing startup scene." },
      { title: "Cultural Diversity & Global Exposure", text: "People from 200+ nationalities live and work in Dubai. Learn in a multicultural environment and build a global network." },
      { title: "Affordable Compared to Other Countries", text: "Lower tuition fees and living costs compared to the UK." }
    ],
    steps: HOW_WE_HELP
  },

  // =========================================================
  // FINLAND
  // =========================================================
  "finland": {
    name: "Finland",
    flag: "images/flags/finland.svg",
    gateway: { city: "Helsinki", code: "HEL" },
    pageTitle: "Student Visa for Finland",
    metaDescription: "Study in Finland with Orient Consultancy Nepal. High-quality education, affordable cost, scholarships and a safe, innovative environment.",
    tagline: "Quality education, scholarships, safety and innovation",           // from your "summary" line
    intakes: "Autumn / Spring",                                                  // ADDED
    capital: "Helsinki", currency: "EUR", language: "English / Finnish",
    visaTypes: "Residence Permit for Studies",                                   // ADDED
    intro: "Studying in Finland is a great option for many students because of its high-quality education system, affordable cost, and safe, innovative environment.",
    visaIntro: "We assist with:",                                                // ADDED
    visas: [
      { code: "Residence Permit", label: "for Studies",
        forWho: "For non-EU/EEA students admitted to a degree program at a Finnish university or university of applied sciences." }  // ADDED
    ],
    visaNote: VISA_NOTE,
    whyTitle: "Why study in Finland?",
    why: [
      { title: "World-Class Education", text: "Finland has one of the best education systems in the world. Finnish universities focus on critical thinking, creativity, and student-centered learning. Degrees are internationally recognized and taught in English." },
      { title: "Affordable Tuition & Scholarships", text: "EU/EEA students study for free. Non-EU/EEA students pay tuition, but many scholarships are available (up to 100%). Living costs are reasonable compared to other European countries." },
      { title: "Modern Universities & Research", text: "Universities offer high-tech labs, digital tools, and close ties with industries. Finland invests in research and innovation, especially in tech, health sciences, and education." },
      { title: "Student-Friendly Life", text: "Safe, clean, and organized society with excellent public transport, student discounts, and support services for international students (housing, visa help, health services)." },
      { title: "Beautiful Nature & High Quality of Life", text: "Finland is known for its natural beauty, including forests, lakes, and the Northern Lights. It regularly ranks among the happiest countries in the world." },
      { title: "Career Opportunities", text: "Work part-time while studying (up to 30 hours/week). Post-graduation work visa: 2 years residence permit for job search or entrepreneurship. Strong startup ecosystem and tech industry." }
    ],
    steps: HOW_WE_HELP
  },

  // =========================================================
  // CANADA
  // =========================================================
  "canada": {
    name: "Canada",
    flag: "images/flags/canada.svg",
    gateway: { city: "Toronto", code: "YYZ" },
    pageTitle: "Study in Canada",
    metaDescription: "Study in Canada with Orient Consultancy Pvt. Ltd. Personalized course and university matching, application support, test preparation and visa documentation assistance.",
    tagline: "Career-focused programs in diverse communities",
    intakes: "January / May / September",
    capital: "Ottawa", currency: "CAD", language: "English / French",
    visaTypes: "Study Permit",                                                   // ADDED
    intro: "Start your Canada study journey with Orient Consultancy Pvt. Ltd. Get personalized course and university matching, application support, test preparation guidance and visa documentation assistance.",
    visaIntro: "We assist with:",                                                // ADDED
    visas: [
      { code: "Study Permit", label: "for Canada",
        forWho: "For students accepted by a designated learning institution (DLI) in Canada." }  // ADDED
    ],
    visaNote: "Canadian study permit rules, including limits on the number of permits, change often. Your counselor will confirm the current requirements for you.", // ADDED
    whyTitle: "Why Study in Canada?",
    why: [   // ADDED (the first and last lines are from your site)
      { title: "Internationally recognized education options", text: "Canadian colleges and universities offer qualifications that are respected around the world." },
      { title: "Career-focused programs", text: "Many programs combine classroom learning with practical experience, such as co-op or work placements." },
      { title: "Study and work pathways", text: "Students may be able to work part-time during studies, and graduates of eligible programs may be able to apply for a post-graduation work permit." },
      { title: "Diverse, welcoming communities", text: "Canada’s cities and campuses are multicultural and used to welcoming students from many countries." },
      { title: "Support from application to pre-departure", text: "We stay with you from course selection to the day you fly." }
    ],
    steps: HOW_WE_HELP
  },

  
  // =========================================================
  // CYPRUS
  // =========================================================
  "cyprus": {
    name: "Cyprus",
    flag: "images/flags/cyprus.svg",
    gateway: { city: "Larnaca", code: "LCA" },
    pageTitle: "Study in Cyprus",
    metaDescription: "Study in Cyprus with Orient Consultancy Pvt. Ltd. Personalized course and university matching, application support, test preparation and visa documentation assistance.",
    tagline: "International education with flexible study options",
    intakes: "February / September",
    capital: "Nicosia", currency: "EUR", language: "English / Greek",
    visaTypes: "Student Visa",                                                   // ADDED
    intro: "Start your Cyprus study journey with Orient Consultancy Pvt. Ltd. Get personalized course and university matching, application support, test preparation guidance and visa documentation assistance.",
    visaIntro: "We assist with:",                                                // ADDED
    visas: [
      { code: "Student Visa", label: "for Cyprus",
        forWho: "For students accepted by a recognized higher-education institution in Cyprus." }  // ADDED
    ],
    visaNote: VISA_NOTE,
    whyTitle: "Why Study in Cyprus?",
    why: [   // ADDED (the first and last lines are from your site)
      { title: "Internationally recognized education options", text: "Universities in Cyprus offer degrees in English across many subjects." },
      { title: "A European setting", text: "A Mediterranean island and EU member with a safe, relaxed student lifestyle." },
      { title: "Flexible study options", text: "A choice of programs and intakes, so you can pick a start date that fits you." },
      { title: "Guidance for scholarship and admission opportunities", text: "We help you find and apply for the options that suit your profile." },
      { title: "Support from application to pre-departure", text: "We stay with you from course selection to the day you fly." }
    ],
    steps: HOW_WE_HELP
  },

   

   

  // =========================================================
  // EUROPE
  // =========================================================
  "europe": {
    name: "Europe",
    flag: "images/flags/europe.svg",
    gateway: { city: "Multiple cities", code: "EUR" },
    pageTitle: "Study in Europe",
    metaDescription: "Study in Europe with Orient Consultancy Pvt. Ltd. Personalized course and university matching, application support, test preparation and visa documentation assistance.",
    tagline: "Explore diverse universities, cultures and careers",
    intakes: "Varies by country",
    capital: "Multiple destinations", currency: "EUR + local", language: "Varies by country",
    visaTypes: "Depends on the country",                                         // ADDED
    intro: "Start your Europe study journey with Orient Consultancy Pvt. Ltd. Get personalized course and university matching, application support, test preparation guidance and visa documentation assistance.",
    visaIntro: "Visa rules depend on the country you choose.",                    // ADDED
    visas: [
      { code: "Student Visa", label: "Country by country",
        forWho: "Each European country has its own student visa or residence permit. Your counselor will explain the one that applies to your chosen country." }  // ADDED
    ],
    visaNote: VISA_NOTE,
    whyTitle: "Why Study in Europe?",
    why: [   // ADDED (the first and last lines are from your site)
      { title: "Internationally recognized education options", text: "Europe is home to many long-established universities with respected degrees." },
      { title: "Many countries to choose from", text: "Compare study options, costs and cultures across several countries before you decide." },
      { title: "Career-focused programs", text: "Courses linked to industry in fields such as engineering, business and IT." },
      { title: "Guidance for scholarship and admission opportunities", text: "We help you find and apply for the options that suit your profile." },
      { title: "Support from application to pre-departure", text: "We stay with you from course selection to the day you fly." }
    ],
    steps: HOW_WE_HELP
  }
};

// The order used for the "other destinations" lists
const COUNTRY_ORDER = ["south-korea", "uk", "australia", "usa", "japan", "denmark", "germany", "malta", "dubai", "finland", "canada", "cyprus", "europe"];
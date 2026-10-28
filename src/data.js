// All résumé content lives here. Edit this file to update the site.
export const profile = {
  name: 'Shubham Bari',
  title: 'MuleSoft Integration Engineer',
  initials: 'SB',
  role: 'MuleSoft integration engineer · Mumbai, India',
  lead: 'I design and ship enterprise APIs on Anypoint Platform. Over 5 years of MuleSoft work across banking, manufacturing and pharma, with 7.1+ years in IT overall.',
  email: 'sbari97@gmail.com',
  phone: '+917738316685',
  phoneDisplay: '+91 77383 16685',
  linkedin: 'https://www.linkedin.com/in/shubham-bari', // replace with your profile
  location: 'Mumbai, India',
};

export const stats = [
  ['7.1+', 'Years in IT'],
  ['40+', 'Production APIs'],
  ['500M+', 'Transactions a year'],
  ['99.95%', 'Uptime'],
];

export const about = [
  'I build scalable integrations and lead the teams that deliver them. My work covers API design, microservices, event-driven flows and cloud migration on CloudHub, with integrations across Salesforce, AWS, ERP and core banking systems.',
  'I mentor developers, run code reviews, and tune performance and error handling so integrations stay up. I currently work on India’s largest bank’s account aggregator programme at RapidSoft Technologies.',
];

export const jobs = [
  {
    title: 'Senior Integration Engineer L2',
    org: 'RapidSoft Technologies, Belapur',
    when: 'May 2026 – present',
    bullets: [
      'Working with SBI, India’s largest bank, in the BFSI vertical.',
      'Built a reusable MuleSoft policy that accepts source IDs and their DataWeave scripts at runtime, removing hardcoded mappings and redeployments. Cut dev deployment effort by 50%+.',
      'Implemented the Account Aggregator ecosystem for consent-based financial data sharing between FIU, FIP and AA, governed by Sahamati’s registry. Built the FIU/FIP connector layer covering the consent lifecycle, FI data request and fetch APIs, CBS-to-AA DataWeave transformations and async callbacks.',
      'Implemented detached JWS verification per the AA spec, with custom Java to rebuild and validate the signing input against the sender’s public key, strengthening API security.',
      'Exposed legacy Core Banking System transcodes (balance inquiry, statements, account details) as REST microservices, decoupling mobile banking and the AA/FIP layer from direct CBS dependency.',
    ],
  },
  {
    title: 'Senior MuleSoft Integration Engineer',
    org: 'NTT Data Services (formerly APISERO), Mumbai',
    when: 'April 2021 – May 2026',
    bullets: [
      'Led the Mule 3 to Mule 4 migration for Compass: 35+ applications, zero production downtime, 85%+ MUnit coverage, delivered 2 weeks early.',
      'Built event-driven integration on Anypoint MQ handling 15M+ daily events at 99.95% reliability. Designed a custom error-handling framework that cut integration failures by 60% and MTTR from 4 hours to 15 minutes.',
      'Developed 18 API-first applications for WEIR Group syncing Kinaxis ERP with legacy systems. Reconciliation dropped from 8 hours to 12 minutes, saving an estimated $180K a year.',
      'Migrated 28 Dell Boomi integrations to MuleSoft for AbbVie, adding retries with exponential backoff for Kafka processing. Throughput rose 45% and latency fell from 2.3 s to 850 ms.',
      'Managed 6 engineers on Strathcona County’s on-premise to CloudHub migration: 12 applications, 3 days early. Mentored 4 junior developers, lifting team productivity by 25%.',
      'Ran 30+ code reviews and architecture assessments, with standard integration patterns that cut defects by 40%.',
      'Delivered documentation and knowledge transfer to 20+ client engineers, with 98% on-time post-go-live support resolution.',
    ],
  },
  {
    title: 'Java Full-Stack Developer',
    org: 'Larsen & Toubro Infotech, Pune',
    when: 'August 2019 – April 2021',
    bullets: [
      'Shipped 8 modules of a Policy Renewal application used by 50K+ people daily, cutting processing time by 38%.',
      'Led the AngularJS to Angular 8 migration of 200+ components with no breaking changes. Page load improved 42%.',
      'Built 25+ reusable Angular components for a 12-person team, reaching 80% code reuse. Resolved 85+ production defects at a 100% first-time fix rate.',
    ],
  },
];

export const results = [
  ['Mean time to recovery', '4 hours', '15 minutes'],
  ['Data reconciliation (WEIR Group)', '8 hours', '12 minutes'],
  ['API latency (AbbVie)', '2.3 seconds', '850 ms'],
  ['Integration failures', 'Baseline', '60% fewer'],
  ['Estimated savings across client projects', '–', '$500K+'],
];

export const certs = [
  ['MuleSoft Certified Integration Developer – Level 1 (twice)', '2021 – current'],
  ['MuleSoft Certified Integration Developer – Level 2', '2023 – current'],
  ['MuleSoft Integration Associate', '2023 – current'],
];

export const education = [
  ['B.E. in Computer Engineering', 'Vidyalankar Institute of Technology, Mumbai · May 2019'],
];

export const nav = [
  ['about', 'About'],
  ['experience', 'Experience'],
  ['results', 'Results'],
  ['credentials', 'Credentials'],
  ['contact', 'Contact'],
];

export const info = [
  ['Residence', 'India'],
  ['City', 'Mumbai'],
  ['Experience', '7.1+ years'],
];

// Real figures from the résumé, shown as rings in the sidebar.
export const rings = [
  [99.95, '99.95%', 'Uptime'],
  [85, '85%+', 'MUnit coverage'],
  [60, '60%', 'Fewer failures'],
];

export const checklist = [
  'Anypoint Platform, Mule 3.x and 4.x',
  'DataWeave 2.x, API-led connectivity',
  'CloudHub 2.0, Runtime Fabric, AWS',
  'Jenkins, GitLab CI/CD, Maven',
  'Anypoint API Manager and Monitoring',
  'Salesforce, Kafka, Anypoint MQ',
];

export const services = [
  ['API design and management', 'API-led connectivity with REST and SOAP, OpenAPI and Swagger specs, and Anypoint API Manager policies for security and governance.', '#experience', 'See experience'],
  ['Integration development', 'Mule 3.x and 4.x applications with DataWeave 2.x, event-driven flows on Anypoint MQ and Kafka, and integrations with Salesforce, AWS, ERP and core banking.', '#experience', 'See experience'],
  ['Cloud and runtime', 'Deployments on CloudHub 1.0 and 2.0 and Runtime Fabric, with Docker, Kubernetes and Anypoint Monitoring for visibility.', '#experience', 'See experience'],
  ['Migration', 'Mule 3 to Mule 4, Dell Boomi to MuleSoft, and on-premise to CloudHub, including 35+ applications with zero production downtime.', '#results', 'See results'],
  ['Quality and performance', 'MUnit testing at 85%+ coverage, API contract tests, custom error-handling frameworks and performance tuning.', '#results', 'See results'],
  ['Delivery and leadership', 'CI/CD with Jenkins, GitLab and Maven, plus mentoring, code reviews, technical documentation and knowledge transfer.', '#experience', 'See experience'],
];

// Interactive hero diagram: click a source system to see what Mule does with it.
export const flowSources = [
  { name: 'Salesforce', text: 'records are mapped by DataWeave to the schema each consumer expects.' },
  { name: 'AWS', text: 'events and files are routed, transformed and exposed as APIs.' },
  { name: 'Kafka', text: 'messages are processed with retries and exponential backoff.' },
  { name: 'Core banking', text: 'legacy transcodes become REST microservices behind API policies.' },
];

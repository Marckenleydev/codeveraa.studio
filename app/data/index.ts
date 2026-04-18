
export const T = {
  cream: "#F5F0E8", creamDark: "#EDE7D9",
  ink: "#111008",   inkSoft: "#2A2618",
  amber: "#C8872A", amberLight: "#E8A23C",
  sand: "#B8AA92",  sandLight: "#D4CAB8",
};

export const SERVICES = [
  {
    n:"01", icon:"⬡", title:"Web Development", tagline:"High-performance applications built for scale.",
    desc:"We architect and build web products that are fast by default, maintainable by design, and engineered to grow with your business. From marketing sites to complex SaaS platforms, we've shipped it all.",
    features:["Next.js / React / Node.js","REST & GraphQL APIs","Database design & optimisation","Authentication & authorisation","CI/CD pipeline setup","Core Web Vitals & Lighthouse 100"],
    tech:["Next.js","TypeScript","Node.js","PostgreSQL","Redis","Vercel / AWS"],
    tiers:[{n:"Starter",p:"$1,500",d:"Marketing site or landing page"},{n:"Growth",p:"$4,000",d:"Full web app + backend"},{n:"Enterprise",p:"Custom",d:"Complex platform or migration"}],
  },
  {
    n:"02", icon:"◈", title:"Mobile Development", tagline:"Apps your users return to, every single day.",
    desc:"Cross-platform mobile apps with the performance and feel of native. We handle architecture, App Store submission, and keep iterating after launch.",
    features:["React Native & Expo","iOS & Android deployment","Push notifications & deep linking","Offline-first architecture","App Store / Play Store submission","Analytics & crash reporting"],
    tech:["React Native","Expo","TypeScript","Firebase","RevenueCat","Sentry"],
    tiers:[{n:"MVP",p:"$2,000",d:"Core features, one platform"},{n:"Pro",p:"$6,000",d:"Both platforms, full feature set"},{n:"Scale",p:"Custom",d:"Complex app + backend systems"}],
  },
  {
    n:"03", icon:"◉", title:"UI / UX Design", tagline:"Interfaces that earn trust and drive conversion.",
    desc:"Research-backed design that connects with real users. We produce design systems, interactive prototypes, and pixel-perfect specs your developers will love.",
    features:["User research & journey mapping","Wireframes & information architecture","High-fidelity UI in Figma","Interactive prototypes","Design systems & component libraries","Usability testing & iteration"],
    tech:["Figma","FigJam","Maze","Hotjar","Lottie","Storybook"],
    tiers:[{n:"Sprint",p:"$3,000",d:"Rapid 5-day design sprint"},{n:"Product",p:"$8,000",d:"End-to-end UI/UX for one product"},{n:"System",p:"Custom",d:"Multi-brand design system"}],
  },
  {
    n:"04", icon:"◎", title:"SEO Strategy", tagline:"Organic growth that compounds month over month.",
    desc:"Technical SEO done right. We audit your presence, fix the foundations, build a content strategy, and deliver a playbook your team can run with.",
    features:["Technical SEO audit","Core Web Vitals optimisation","On-page & semantic SEO","Keyword research & content strategy","Link building strategy","Monthly reporting & analytics"],
    tech:["Search Console","Ahrefs","Screaming Frog","Semrush","GA4","Looker Studio"],
    tiers:[{n:"Audit",p:"$1,200",d:"Full technical & content audit"},{n:"Growth",p:"$2,500/mo",d:"Ongoing SEO management"},{n:"Authority",p:"Custom",d:"Full-service SEO + content team"}],
  },
];

export const FAQS = [
  {q:"How long does a typical project take?",a:"Web projects run 6–12 weeks. Mobile apps 10–16 weeks. Design sprints can be completed in 5 days. We give precise timelines after your discovery call."},
  {q:"Do you work with early-stage startups?",a:"Absolutely. Some of our best work has been helping founders build their first product. We're comfortable with ambiguity and help shape product direction from the ground up."},
  {q:"Can you take over an existing codebase?",a:"Yes. We start every handoff with a code audit and documentation review, then onboard incrementally so nothing breaks in production."},
  {q:"Do you offer post-launch support?",a:"Yes — monthly retainer agreements that include bug fixes, performance monitoring, feature development, and priority support SLAs."},
  {q:"What does your development process look like?",a:"Discovery → Strategy → Design → Agile sprints with weekly demos → QA → Launch → Growth. You're involved at every stage with full transparency."},
];



export const CATEGORIES=["All","Web App","Mobile App","E-Commerce","Brand + Web","SaaS"];

export const PROJECTS=[
  {id:"01",title:"Aurelia",sub:"Finance Platform",cat:"Web App",year:"2024",tags:["Next.js","Fintech"],desc:"Real-time trading dashboard with AI-powered insights and portfolio analytics.",bg:"#1A1508",acc:"#C8872A",
   challenge:"The client needed a platform handling live data streams for thousands of concurrent users while keeping the UI responsive for non-technical traders.",
   solution:"WebSocket-driven Next.js app with server-side state, React Query caching, and a custom D3.js charting layer. Performance-critical paths optimised to <100ms render times.",
   results:["3.2s → 0.4s dashboard load","40% increase in daily active users","$2.4M processed in first month","99.98% uptime since launch"],
   services:["Web Development","UI/UX Design"]},
  {id:"02",title:"Nomad OS",sub:"Remote Work Hub",cat:"Mobile App",year:"2024",tags:["React Native","SaaS"],desc:"All-in-one workspace for distributed teams — time zones, async standups, team availability.",bg:"#080F0A",acc:"#4A8C5C",
   challenge:"Remote teams were juggling 6+ tools. The client wanted a single focused app removing friction without adding noise.",
   solution:"React Native with custom notification engine, offline-first data sync, and Slack/Notion/Google Calendar integrations. Shipped both platforms in 14 weeks.",
   results:["4.8★ on both App Stores","12,000 downloads in 30 days","#1 Product Hunt of the day","68% 30-day retention"],
   services:["Mobile Development","UI/UX Design"]},
  {id:"03",title:"Botanica",sub:"E-Commerce",cat:"E-Commerce",year:"2023",tags:["Next.js","3D"],desc:"Immersive plant shop with WebGL AR product previews and subscription boxes.",bg:"#060A12",acc:"#4A6FA5",
   challenge:"The brand wanted to stand out and reduce returns by letting customers see plants in their space before buying.",
   solution:"Shopify Hydrogen + Three.js AR experience, custom subscription management, and a Lighthouse 98/100 storefront.",
   results:["62% reduction in return rates","3.1× conversion lift","AOV up 44%","Lighthouse score: 98"],
   services:["Web Development","UI/UX Design","SEO"]},
  {id:"04",title:"CTRL Studio",sub:"Brand + Digital",cat:"Brand + Web",year:"2023",tags:["Branding","Web"],desc:"Complete brand identity and award-winning digital presence for a Berlin creative studio.",bg:"#120812",acc:"#8B5CA5",
   challenge:"CTRL needed a web presence matching the ambition of their work — visually distinctive, immersive, and fast.",
   solution:"Full visual identity (logo, typography, motion) + GSAP scroll animations, custom cursor, Sanity CMS.",
   results:["Awwwards Site of the Day","280% increase in inbound leads","Featured in Fonts In Use","Load time < 1.2s globally"],
   services:["UI/UX Design","Web Development"]},
  {id:"05",title:"Pulse Health",sub:"Telemedicine",cat:"SaaS",year:"2023",tags:["Mobile + Web","HIPAA"],desc:"HIPAA-compliant telemedicine platform serving 50,000+ patients with video consults.",bg:"#0A1212",acc:"#2E8B8B",
   challenge:"Building a medical platform with strict compliance, real-time video, and a seamless experience for both patients and providers.",
   solution:"End-to-end HIPAA-compliant AWS architecture, Twilio for video/SMS, custom provider dashboard in Next.js, React Native patient app.",
   results:["50,000+ registered patients","4.9★ App Store rating","94% consultation completion","HIPAA audit passed first attempt"],
   services:["Web Development","Mobile Development"]},
  {id:"06",title:"Vanta AI",sub:"SaaS Writing Tool",cat:"SaaS",year:"2024",tags:["SaaS","AI"],desc:"AI writing assistant with brand voice training, multi-language support, and team collaboration.",bg:"#0A0A0A",acc:"#8C8C2E",
   challenge:"The market was flooded with generic AI writing tools. Vanta needed deep brand customisation and enterprise collaboration features.",
   solution:"Custom LangChain pipeline for brand voice, real-time collaborative editor on Yjs, Supabase auth/storage, Next.js SSR.",
   results:["0 → 2,400 paying users in 90 days","MRR $38k at month 3","$800k seed round closed","NPS score of 72"],
   services:["Web Development","UI/UX Design"]},
];



export const TEAM=[
  {name:"Marckenley Dorsainvil",role:"Founder & Lead Engineer",exp:"Next.js · System Design · API Architecture",ini:"KB",color:T.amber},
  {name:"Sofia Marchetti",role:"Head of Design",exp:"Figma · Motion Design · Brand Strategy",ini:"SM",color:"#8B5CA5"},
  {name:"Arjun Kapoor",role:"Senior Mobile Engineer",exp:"React Native · iOS · Flutter",ini:"AK",color:"#4A6FA5"},
  {name:"Léa Fontaine",role:"SEO & Growth Lead",exp:"Technical SEO · Analytics · Content",ini:"LF",color:"#4A8C5C"},
  {name:"Dave Andersy",role:"Backend Engineer",exp:"Node.js · PostgreSQL · DevOps · AWS",ini:"MW",color:"#2E8B8B"},
  {name:"Yuna Park",role:"UI Engineer",exp:"Framer Motion · Tailwind · Accessibility",ini:"YP",color:"#8C8C2E"},
];

export const VALUES=[
  {i:"⬡",t:"Craft Over Speed",d:"We'd rather take an extra week and ship something we're proud of than rush something that embarrasses us."},
  {i:"◈",t:"Radical Transparency",d:"You always know exactly where the project stands. No surprises in demos, no surprises in invoices."},
  {i:"◉",t:"Partnership Mindset",d:"We think like co-founders, not contractors. Your success metrics are our success metrics."},
  {i:"◎",t:"Continuous Learning",d:"The web moves fast. We allocate 20% of our time to R&D so your projects always use the right tools."},
];

export const MILESTONES=[
  {year:"2022",event:"Studio founded",desc:"Started as a two-person consultancy building MVPs for startups."},
  {year:"2023",event:"First enterprise client",desc:"Landed first €100k+ contract with a Series B fintech company."},
  {year:"2024",event:"Mobile practice launched",desc:"Expanded into React Native as mobile demand surged post-pandemic."},
  {year:"2025",event:"Team of 8",desc:"Grew to a full-service team with dedicated design, SEO, and QA."},
  {year:"2026",event:"87+ projects shipped",desc:"Now serving clients across 4 countries, 98% satisfaction rate."},
];

export const SKILLS=[{n:"Frontend Engineering",p:98},{n:"Mobile Development",p:92},{n:"UI / UX Design",p:95},{n:"SEO & Performance",p:90}];









export const SERVICESHome = [
  { n:"01", title:"Web Development",   desc:"High-performance apps built with Next.js, React, and TypeScript. Scalable, accessible, and blazing fast.", tags:["Next.js","React","Node.js","TypeScript"] },
  { n:"02", title:"Mobile Development",desc:"Native-feel iOS & Android apps via React Native and Expo. From consumer apps to internal tools.", tags:["React Native","Expo","iOS","Android"] },
  { n:"03", title:"UI / UX Design",    desc:"Research-led design systems, interactive prototypes, and pixel-perfect interfaces that convert.", tags:["Figma","Prototyping","Design Systems","UX Research"] },
  { n:"04", title:"SEO Strategy",      desc:"Technical excellence + content strategy to earn lasting rankings. Audits, Core Web Vitals, and beyond.", tags:["Technical SEO","Core Web Vitals","Analytics","Content"] },
];

export const WORKS = [
  { id:"01", title:"Ifm Luxury",      sub:"Vehicle Rental Services",    year:"2024", tags:["Next.js","Car Rental Platform"],       desc:"Real-time trading dashboard with AI-powered insights.", bg:"#1A1508", acc:"#C8872A" , link:"https://www.ifmluxurycars.com"},
  { id:"02", title:"Aevum Clinic",    sub:"Healthcare ",                year:"2023", tags:["Mobile + Web","Healthcare Platform"],    desc:"Platform serving 50,000+ patients globally.", bg:"#0A1212", acc:"#2E8B8B", link:"https://aevum-clinic.vercel.app/" },
  { id:"03", title:"Nomad OS",        sub:"Remote Work Hub",            year:"2024", tags:["React Native","SaaS"],     desc:"All-in-one workspace for distributed teams.", bg:"#080F0A", acc:"#4A8C5C", link:"" },
  { id:"04", title:"Botanica",        sub:"E-Commerce",                 year:"2023", tags:["Next.js","3D"],            desc:"Immersive plant shop with WebGL AR previews.", bg:"#060A12", acc:"#4A6FA5", link:"" },
  { id:"05", title:"CTRL Studio",     sub:"Brand + Digital",            year:"2023", tags:["Branding","Web"],          desc:"Complete brand identity and digital presence.", bg:"#120812", acc:"#8B5CA5", link:"" },
  { id:"06", title:"Vanta AI",        sub:"SaaS Writing Tool",          year:"2024", tags:["SaaS","AI"],               desc:"AI writing assistant with multi-language support.", bg:"#0A0A0A", acc:"#8C8C2E", link:"" },
];

export const STEPS = [
  { n:"01", t:"Discovery",       d:"Deep-dive into your business, audience, and competitors.", dur:"1 wk" },
  { n:"02", t:"Strategy",        d:"Tech stack, IA, design direction, and project blueprint.", dur:"1 wk" },
  { n:"03", t:"Design",          d:"High-fidelity Figma prototypes, iterated to perfection.", dur:"2–3 wk" },
  { n:"04", t:"Development",     d:"Agile sprints with live demos every Friday.", dur:"4–10 wk" },
  { n:"05", t:"QA & Perf",       d:"Cross-browser, a11y, and full Lighthouse audits.", dur:"1 wk" },
  { n:"06", t:"Launch & Growth", d:"Zero-downtime deploy, monitoring, ongoing improvements.", dur:"∞" },
];

export const TESTIMONIALS = [
  { q:"CRAFT delivered a product that exceeded every expectation. The attention to performance and design detail is something I've never seen.", a:"Sarah Chen", r:"CPO, Aurelia Finance" },
  { q:"They don't just build — they think. Every decision was explained. Genuinely the best agency experience I've had in 10 years.", a:"Marcus Webb", r:"CEO, Nomad OS" },
  { q:"Our organic traffic tripled in four months. Every service felt cohesive and intentional. Absolutely transformative.", a:"Leila Rashid", r:"Head of Growth, Botanica" },
];
import type { Site } from "./sv";

export const en: Site = {
  lang: "en",
  brand: "Index JR",
  owner: "Ali Ismailat",
  skipLabel: "Skip to content",
  logoAlt: "Index JR, back to top of page",
  footerText: "Web development for local businesses in Malmö",
  footerPersonal: "Personal",

  meta: {
    title: "Index JR | Websites for local businesses in Malmö",
    description:
      "Web development in Malmö. Fast, accessible websites with booking and quote forms for local businesses.",
  },

  email: "contact@indexjr.com",
  location: "Malmö, Sweden",

  ui: {
    toDark: "Dark mode",
    toLight: "Light mode",
    langCode: "SV",
    langName: "Svenska",
    langAria: "Byt till svenska",
    langCodeLang: "sv",
    settings: "Settings",
  },

  nav: {
    label: "Main menu",
    home: "/en/#top",
    openLabel: "Open menu",
    closeLabel: "Close menu",
    links: [
      { label: "Projects", href: "/en/#projekt" },
      { label: "Services", href: "/en/#tjanster" },
      { label: "Process", href: "/en/#process" },
      { label: "About", href: "/en/#om-mig" },
      { label: "Contact", href: "/en/#kontakt" },
    ],
  },

  cta: {
    href: "/en/#kontakt",
    label: "Contact me",
  },

  hero: {
    title: "Fast websites for local businesses.",
    highlight: "local businesses",
    text: "I build fast, accessible websites for local businesses, with booking, quote forms and a clear path to contact.",
    projectsLabel: "See my projects",
    proof: [
      { value: "5", label: "projects of my own" },
      { value: "90+", label: "Lighthouse score on the demo sites" },
      { value: "100", label: "accessibility score on all five" },
    ],
  },

  projects: {
    eyebrow: "Projects",
    title: "This is what your site could look like",
    intro:
      "Four demo sites for fictional businesses, each with its own look and one clear goal. All are built mobile first.",
    openLabel: "Open site",
    newTabLabel: "opens in a new tab",
    liveLabel: "Live",
    wipLabel: "In development",
    soonLabel: "Link coming when it is done",
    noLinkLabel: "Link coming soon",
    previewStep: "Part",
    previewOf: "of",
    previewPrev: "Previous part of the page",
    previewNext: "Next part of the page",
    previewRestart: "Back to the start",
    previewGoTo: "Go to part",
    animationPause: "Pause the animation",
    animationPlay: "Play the animation",
    items: [
      {
        id: "barber",
        name: "Skarp Barber (Demo)",
        category: "Barbershop",
        summary:
          "A dark, sharp site with a cinema-style booking schedule where you pick one time per person.",
        tags: ["Booking schedule", "Multiple people"],
        alt: "Screenshot of the Skarp Barber home page",
      },
      {
        id: "pizzeria",
        name: "Pizzeria Bella Nova (Demo)",
        category: "Pizzeria",
        summary: "A playful site for a pizzeria where the visitor should call and order.",
        tags: ["Call to order", "Menu", "Map"],
        alt: "Screenshot of the Pizzeria Bella Nova home page",
      },
      {
        id: "cafe",
        name: "Café Kardemumma (Demo)",
        category: "Café",
        summary: "A warm, modern site for a café, with table booking as its single goal.",
        tags: ["Table booking", "Mobile first"],
        alt: "Screenshot of the Café Kardemumma home page",
      },
      {
        id: "nordkant",
        name: "Nordkant Installation (Demo)",
        category: "Plumbing and electrical",
        summary: "A clear site for an installation company, with a quote form as its single goal.",
        tags: ["Quote form", "Validation"],
        alt: "Screenshot of the Nordkant Installation home page",
      },
      {
        id: "memory",
        name: "Memory game",
        category: "Side project",
        summary: "A small browser game that I am still working on.",
        tags: ["React", "TypeScript"],
        alt: "Animation of a ball bouncing around the frame and off the text In development",
      },
    ],
  },

  services: {
    eyebrow: "Services",
    title: "What I can do for you",
    items: [
      {
        icon: "window",
        name: "A website for your business",
        text: "A clear site that shows what you do and leads the visitor to one single goal.",
      },
      {
        icon: "calendar",
        name: "Booking and forms",
        text: "Table booking, appointment booking or quote forms that are easy to use on mobile.",
      },
      {
        icon: "gauge",
        name: "Fast and accessible",
        text: "Pages that load quickly and work with keyboards and screen readers.",
      },
      {
        icon: "phone",
        name: "Mobile first",
        text: "Most traffic comes from phones, so I build for them first.",
      },
    ],
  },

  process: {
    eyebrow: "Process",
    title: "How I work",
    stepLabel: "Step",
    steps: [
      {
        title: "Talk",
        text: "We discuss your business, your customers and what the site should do for you.",
      },
      {
        title: "Proposal",
        text: "You get a design proposal, a clear scope and a price before I start building.",
      },
      { title: "Build", text: "I build the site and you can follow along and give feedback." },
      { title: "Launch", text: "We go through the site together, then it goes live." },
    ],
  },

  about: {
    eyebrow: "About",
    title: "The person building your site",
    paragraphs: [
      "I am a trained web developer in Malmö, building websites in React and TypeScript.",
      "I always start from your business needs and turn them into a website that is fast, clear and works just as well on mobile as on desktop. You talk directly to me, from first idea to finished site.",
    ],
    factsTitle: "In short",
    facts: [
      "Based in Malmö, Sweden",
      "React, TypeScript and Tailwind CSS",
      "Clear price and scope upfront",
    ],
  },

  legal: {
    eyebrow: "Privacy",
    title: "Privacy and terms",
    updated: "Last updated 16 October 2026",
    footerLink: "Privacy and terms",
    href: "/en/privacy/",
    back: "Back to the home page",
    meta: {
      title: "Privacy and terms | Index JR",
      description: "Privacy policy and terms of use for Index JR.",
    },
    privacy: {
      title: "Privacy policy",
      items: [
        {
          title: "Who is responsible for your data?",
          text: "Ali Ismailat in Malmö, Sweden, is the data controller. You can reach me at contact@indexjr.com.",
        },
        {
          title: "What data do I collect?",
          text: "What you write in the contact form: name, email address or phone number, chosen topic and your message. If you email me, your email address and message are stored in my inbox.",
        },
        {
          title: "Why, and on what legal basis?",
          text: "To answer your request and send you a proposal if you want one. The basis is taking steps at your request before entering into a contract, and my legitimate interest in answering enquiries (Article 6.1 b and f of the GDPR).",
        },
        {
          title: "How long is it kept?",
          text: "Enquiries are deleted no later than 12 months after I have replied. If we work together, the data is kept as long as the assignment and legal requirements call for.",
        },
        {
          title: "Who receives the data?",
          text: "The form is run by Netlify, which stores submissions and uses the spam filter Akismet (Automattic). Email is handled by Namecheap (Private Email). I never sell or share data for marketing.",
        },
        {
          title: "Transfers outside the EU",
          text: "Netlify has sub-processors in the USA and is certified under the EU-US Data Privacy Framework. My email provider Namecheap may also process data outside the EU.",
        },
        {
          title: "Your rights",
          text: "You have the right to request access to, correction or deletion of your data, to restrict or object to the processing, and to receive it in a readable format. Email me and I will help you. You can also file a complaint with the Swedish Authority for Privacy Protection (IMY) at imy.se.",
        },
        {
          title: "Cookies and tracking",
          text: "The site uses no tracking or marketing cookies and no web analytics. Your choice of light or dark mode is only stored in your own browser. The fonts are served from the site itself, so no connection is made to Google. Like any web host, Netlify may briefly log technical data such as IP addresses for operation and security.",
        },
      ],
    },
    terms: {
      title: "Terms of use",
      items: [
        {
          title: "Who runs the site?",
          text: "The site is run by Ali Ismailat in Malmö, Sweden. Email: contact@indexjr.com.",
        },
        {
          title: "About the site",
          text: "The site presents my services. The information is general and is not a binding offer.",
        },
        {
          title: "The demo sites",
          text: "Café Kardemumma, Pizzeria Bella Nova, Skarp Barber and Nordkant Installation are fictional businesses that I have built as examples. No real business stands behind them.",
        },
        {
          title: "Assignments",
          text: "Price, scope, delivery time and other terms for an assignment are set in a quote or an agreement between us, not by the texts on this site.",
        },
        {
          title: "Copyright",
          text: "Texts, code and design on the site belong to Ali Ismailat unless stated otherwise. The fonts Bricolage Grotesque and Instrument Sans are used under the SIL Open Font License.",
        },
        {
          title: "Liability",
          text: "I try to keep the information accurate, but I am not liable for damage arising from your use of the site or from links to other sites.",
        },
      ],
    },
  },

  contact: {
    eyebrow: "Contact",
    title: "Contact me",
    intro: "Tell me briefly what you need and I will get back to you.",
    emailLabel: "Email",
    locationLabel: "Location",
    next: {
      title: "What happens next",
      items: [
        "I read your request and get back to you.",
        "We book a short call about your needs.",
        "You get a proposal with a price and a clear scope.",
      ],
    },
    errorTitle: "Please check the form",
    labels: {
      name: "Name",
      contact: "Email or phone",
      topic: "What is it about?",
      message: "Message",
    },
    topicPlaceholder: "Choose a topic",
    topics: ["New website", "Improve my website", "Booking or quote form", "Other"],
    messageHint: "Briefly describe your business and what you need.",
    privacyNote: {
      before: "I only use your details to reply to you. Read more in the ",
      link: "privacy policy",
      after: ".",
    },
    submitLabel: "Send",
    sendingLabel: "Sending...",
    sendError: "Something went wrong. Try again or email me directly.",
    honeypotLabel: "Do not fill this field:",
    errors: {
      name: "Enter your name.",
      contact: "Enter a valid email address or phone number.",
      topic: "Choose what it is about.",
      message: "Write a few lines about what you need help with.",
    },
    confirm: {
      title: "Thank you, I have received your request",
      thanks: "Thank you",
      message: "I will get back to you as soon as I can.",
      summary: "Your request",
      again: "Send another request",
    },
  },
};
